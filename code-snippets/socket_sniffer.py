"""
Thanks to [Packet sniffer in Python](https://www.uv.mx/personal/angelperez/files/2018/10/sniffers_texto.pdf)
https://www.opensourceforu.com/2015/03/a-guide-to-using-raw-sockets/
https://stackoverflow.com/questions/63702118/custom-crc32-calculation-in-python-without-libs
https://reveng.sourceforge.io/crc-catalogue/all.htm#crc.cat.crc-32-cksum
>>> chr(72)
'H'
>>> ord("H")
72
>>> hex(72)
'0x48'
>>> bin(0x48)
'0b1001000'
>>> hex(0b1001000)
'0x48'
>>> int(0b1001000)
72

Extended ASCII Codes
>>> ord(b"\xf2")
242
>>> hex(242)
'0xf2'
>>> b"\xf2".decode("cp437")
'≥'
"""
import socket
import os
import sys
import struct
import binascii

iface = "eth0"


def get_mac_addr(raw_data: bytes) -> str:
    """
    >>> binascii.hexlify(b'\x00\x15]e<\xdd', "-")                                                                                               
    b'00-15-5d-65-3c-dd'
    >>> binascii.hexlify(b'\x00\x15]e<\xdd')
    b'00155d653cdd'
    >>> binascii.unhexlify('00155d653cdd')
    b'\x00\x15]e<\xdd'
    """
    return binascii.hexlify(raw_data, ".").decode().upper()


def get_ip_addr(raw_data: bytes) -> str:
    # ".".join([str(b) for b in b'\xac\x1d\x06\x17']) -> '172.29.6.23'
    return ".".join([str(b) for b in raw_data])
import zlib
# Ethernet (Layer 2) header
def ethernet_parser(raw_data: bytes):
    dest_mac, src_mac, ether_type = struct.unpack("! 6s 6s H", raw_data[:14])
    
    dest_mac = get_mac_addr(dest_mac)
    src_mac = get_mac_addr(src_mac)

    crc_checksum = raw_data[-4:]

    data = raw_data[14:-4]

    return dest_mac, src_mac, ether_type, data

# IP (Layer 3) header
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

# TCP (Layer 4) header
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

# ICMP (Layer 4) header
def icmp_parser(raw_data: bytes):
    type, code, checksum = struct.unpack("! B B H", raw_data[0:4])
    data = raw_data[4:]

    return type, code, checksum, data

# UDP (Layer 4) header
def udp_parser(raw_data: bytes):
    src_port, dest_port, length, checksum = struct.unpack("! H H H H", raw_data[0:8])
    return src_port, dest_port, length, checksum

# HTTP (Layer 7) header
def http_parse(raw_data: bytes):
    pass

# create a raw socket and bind it to the public interface
s = socket.socket(socket.AF_PACKET, socket.SOCK_RAW, socket.ntohs(3))
s.bind((iface, 0))

while True:
    # receive a packet
    raw_data, addr = s.recvfrom(65565)
    dest_mac, src_mac, ether_type, data = ethernet_parser(raw_data)

    print(f"\nEthernet Frame:")
    print("Destination: {}, Source: {}, EtherType: {}".format(dest_mac, src_mac, hex(ether_type)))

    """Ether Type
    IPv4: 0x0800 
    ARP:  0X0806
    IPv6: 0x86DD
    """
    if ether_type == 0x0800:
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
            print("\t\t\t - " + "{}".format(binascii.hexlify(data, " ")))
            # print("\t\t\t - " + "{}".format(data))

            if len(data) > 0:
                # HTTP
                if src_port == 80 or dest_port == 80:
                    print("\t\t - " + "HTTP Data:")
                    
        elif protocol == 1:
            type, code, checksum, data = icmp_parser(data)
            print("\t -" + "ICMP Packet:")
            print("\t\t -" + "Type: {}, Code: {}, Checksum:{},".format(type, code, checksum))
            print("\t\t -" + "ICMP Data:")
            print("\t\t\t - " + "{}".format(binascii.hexlify(data, " ")))
            # print("\t\t\t - " + "{}".format(data))

        elif protocol == 17:
            src_port, dest_port, length, checksum = udp_parser(data)
            print("\t -" + "UDP Segment:")
            print("\t\t -" + "Source Port: {}, Destination Port: {}, Length: {}".format(src_port, dest_port, checksum))
