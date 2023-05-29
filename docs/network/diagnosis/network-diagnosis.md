---
tags: network network/diagnosis netstat route traceroute
---

# Network Diagnosis

[Understanding Routing Table Entry | Baeldung on Computer Science](https://www.baeldung.com/cs/routing-table-entry)
> the packs go through the gateway of interface. the same interface can have multiple gateways and different interfaces can have the same gateway.

[route diagnosis](https://forums.developer.nvidia.com/t/ssh-enabled-only-if-connected-through-microusb/192708/12)

[3 Ways to Find Which Linux Process Listening on a Port](https://www.tecmint.com/find-out-which-process-listening-on-a-particular-port/)

[Monitoring Network Status With the netstat Command - System Administration Guide: IP Services](https://docs.oracle.com/cd/E18752_01/html/816-4554/ipconfig-142.html)
> System Administration Guide

[How to look up the geographic location of an IP address from the command line](https://www.xmodulo.com/geographic-location-ip-address-command-line.html)
> #geolocation-of-ip

[A tcpdump Tutorial with Examples — 50 Ways to Isolate Traffic - Daniel Miesslersearchmailmailmail](https://danielmiessler.com/study/tcpdump/)

[TCPDump cheatsheet](https://resource.nvidia.com/cheatsheets/linux-networking-cheatsheet-tcpdump)

[An introduction to using tcpdump at the Linux command line | Opensource.com](https://opensource.com/article/18/10/introduction-tcpdump)

Knowing `simultaneously` these three things for failing and working circumstances would be quite useful.

## Show IP Address

  ```sh
  ifconfig
  ```

## Show Routing Table
  
  ```sh
  # linux
  route
  # osx
  netstat -rn
  ```

The `-r` flag means to show routes.

The `-n` flag means to not resolve IPs to hostnames.

## Find Gateway Used for Routing

```sh
# linux
ip route get 8.8.8.8
# osx
route get 8.8.8.8
```

## Show Routes across Network

  ```sh
  traceroute
  # en0 interface
  traceroute -i en0
  ```

## Ping Through Specific Interface

```sh
# linux
ping -I en0 sslvpn.astri.org
# osx
ping -b en0 sslvpn.astri.org
```

## Find Out Address Used by Which Process

  ```sh
  # osx
  netstat -avn -p tcp
  ```

## Add a Route

  ```sh
  # osx
  route -n add 10.0.0.0/24 10.0.0.1
  # linux
  route -n add -net 10.0.0.0/24 gw 10.0.0.1
  ```

## FireWall Rule

osx:

```sh
# show all information/stats
sudo pfctl -sa
# show rules
sudo pfctl -sr
# sanity check edited configuration file
sudo pfctl -v -n -f /etc/pf.conf
# load pf with new rules
sudo pfctl -f /etc/pf.conf
# enable pf
sudo pfctl -e
# disable pf
sudo pfctl -d
# add information on the fly
sudo pfctl -t localsub -T add 127.0.0.0/24
# flush added rules later
sudo pfctl -Fa -f /etc/pf.conf

sudo pfctl -si
sudo pfctl -q
```

## Get Geolocation of IP Address

  ```sh
  curl ipinfo.io/103.216.223.161
  ```

## Packet Analyzer

```sh
# list which interfaces are available for capture
tcpdump --list-interfaces
# capture all packets in any interface
sudo tcpdump --interface any
# limit the number of packets captured then stop `-c number`
sudo tcpdump -i any -c 5
# disable name resolution with using `-n` and port resolution with `-nn` 
sudo tcpdump -i any -c5 -nn
# filter packets by protocol, only capture `ICMP` packets
sudo tcpdump -i any -c5 icmp
# capture packets related with host `8.8.8.8`
sudo tcpdump -i any -c5 -nn host 8.8.8.8
# capture packets related with port `80`
sudo tcpdump -i any -c5 -nn port 80
# capture packets with source address 192.168.0.1
sudo tcpdump -i any -c5 -nn src 192.168.0.1
# capture packets with destination address 8.8.8.8
sudo tcpdump -i any -c5 -nn dst 8.8.8.8
```

## USB Virtual Ethernet

[An explanation on the USB virtual ethernet](https://forums.developer.nvidia.com/t/provide-internet-through-micro-usb-while-doing-ssh/111326/14)
