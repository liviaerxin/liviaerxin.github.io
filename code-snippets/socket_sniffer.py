"""
Thanks to [Packet sniffer in Python](https://www.uv.mx/personal/angelperez/files/2018/10/sniffers_texto.pdf)
"""
import socket
import os
import sys
import struct
import binascii

iface = "eth0"


def get_mac_addr(raw_data: bytes) -> str:
    # binascii.hexlify(b'\x00\x15]e<\xdd', "-") -> b'00-15-5d-65-3c-dd'
    return binascii.hexlify(raw_data, ".").decode()


def get_ip_addr(raw_data: bytes) -> str:
    # ".".join([str(b) for b in b'\xac\x1d\x06\x17']) -> '172.29.6.23'
    return ".".join([str(b) for b in raw_data])


def eth_parser(raw_data: bytes):
    dest_mac, src_mac, eth_type = struct.unpack("! 6s 6s H", raw_data[:14])

    dest_mac = get_mac_addr(dest_mac)
    src_mac = get_mac_addr(src_mac)
    eth_type = socket.htons(eth_type)
    data = raw_data[14:]
    return dest_mac, src_mac, eth_type, data


def ipv4_parser(raw_data: bytes):
    version = raw_data[0] >> 4
    header_length = (raw_data[0] & 0b00001111) * 4  # the unit is 4 bytes(32bits)
    type_of_service = raw_data[1]
    (
        total_length,
        time_to_live,
        protocol,
        header_checksum,
        src_ip,
        dest_ip,
    ) = struct.unpack("! H 4x B B H 4s 4s", raw_data[2:20])

    src_ip = get_ip_addr(src_ip)
    dest_ip = get_ip_addr(dest_ip)
    data = raw_data[header_length:]
    return (
        version,
        header_length,
        type_of_service,
        total_length,
        time_to_live,
        protocol,
        header_checksum,
        src_ip,
        dest_ip,
        data,
    )


def tcp_parser(raw_data: bytes):
    src_port, dest_port, seq, ack = struct.unpack("! H H L L", raw_data[0:12])
    offset = (raw_data[12] >> 4) * 4
    flag = raw_data[13]
    flag_cwr = flag & 0x80
    flag_ece = flag & 0x40
    flag_urg = flag & 0x20
    flag_ack = flag & 0x10
    flag_psh = flag & 0x08
    flag_rst = flag & 0x04
    flag_syn = flag & 0x02
    flag_fin = flag & 0x01

    flag = [
        flag_cwr,
        flag_ece,
        flag_urg,
        flag_ack,
        flag_psh,
        flag_rst,
        flag_syn,
        flag_fin,
    ]
    data = raw_data[offset:]
    return src_port, dest_port, seq, ack, flag, data

def icmp_parser(raw_data:bytes):
    pass

def udp_parser(raw_data:bytes):
    pass

# create a raw socket and bind it to the public interface
s = socket.socket(socket.AF_PACKET, socket.SOCK_RAW, socket.ntohs(3))
s.bind((iface, 0))

while True:
    # receive a packet
    raw_data, addr = s.recvfrom(65565)
    dest_mac, src_mac, eth_type, data = eth_parser(raw_data)

    print(f"Ethernet Packet:")
    print("Destination: {}, Source: {}, Protocol: {}".format(dest_mac, src_mac, eth_type))

    """Ether Type
    IPv4: 8
    """
    if eth_type == 8:
        (
            version,
            header_length,
            type_of_service,
            total_length,
            time_to_live,
            protocol,
            header_checksum,
            src_ip,
            dest_ip,
            data,
        ) = ipv4_parser(data)
        print("\t - " + "IPv4 Packet:")
        print("\t\t - " + "Version: {}, Header Length: {}, TTL:{},".format(version, header_length, time_to_live))
        print("\t\t - " + "Protocol: {}, Source: {}, Destination: {}".format(protocol, src_ip, dest_ip))

        """IP protocol
        TCP: 6
        ICMP: 1
        UDP: 17
        RDP: 27
        """
        if protocol == 6:
            src_port, dest_port, seq, ack, flag, data = tcp_parser(data)
            print("\t - " + "TCP Segment:")
            print("\t\t - " + "Source Port: {}, Destination Port: {}".format(src_port, dest_port))
            print("\t\t - " + "Sequence: {}, Acknowledgment: {}".format(seq, ack))
            print("\t\t - " + "Flags:")
            print("\t\t\t - " + "URG: {}, ACK: {}, PSH:{}".format(flag[2], flag[3], flag[4]))
            print("\t\t\t - " + "RST: {}, SYN: {}, FIN:{}".format(flag[5], flag[6], flag[7]))
            print("\t\t - " + "TCP Data:")
            print("\t\t\t - " + "{}".format(binascii.hexlify(data, "\x")))

            if len(data) > 0:
                # HTTP
                if src_port == 80 or dest_port == 80:
                    print("\t\t - " + "HTTP Data:")
        elif protocol == 1:
            icmp = icmp_parser(data)
            print('\t -' + 'ICMP Packet:')
            print('\t\t -' + 'Type: {}, Code: {}, Checksum:{},'.format(icmp[0], icmp[1],
            icmp[2]))
            print('\t\t -' + 'ICMP Data:')
            
        elif protocol == 17:
            udp = udp_parser(data)
            print('\t -' + 'UDP Segment:')
            print('\t\t -' + 'Source Port: {}, Destination Port: {}, Length: {}'.format(udp[0], udp[1], udp[2]))