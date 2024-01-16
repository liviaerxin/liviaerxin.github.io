---
authors:
  - frank
tags:
  - network
  - cheat sheet
description: Network Cheat Sheet
keywords:
  - Network Cheat Sheet 
image: https://i.imgur.com/mErPwqL.png
date: 2024-01-16
draft: false
enableComments: true # for Gisqus
---

# Network Cheat Sheet

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

## Get IP address

- Linux

```sh
rms@rms:~$ ip addr
```

- Windows

```powershell
PS C:\Users\Frank> ipconfig
```

```powershell
PS C:\Users\Frank> netsh interface ip show address
```

### Get IP address of a specific network interface

- Linux

```sh
rms@rms:~$ ip addr show enp0s31f6
5: enp0s31f6: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
    link/ether 00:4e:01:fc:39:50 brd ff:ff:ff:ff:ff:ff
    inet 10.6.64.184/24 brd 10.6.64.255 scope global enp0s31f6
       valid_lft forever preferred_lft forever
    inet6 fe80::24e:1ff:fefc:3950/64 scope link
       valid_lft forever preferred_lft forever
```

```sh
rms@rms:~$ hostname -I | awk '{print $1}'
10.6.64.184
```

- Windows

```powershell
PS C:\Users\Frank> netsh interface ip show address "Ethernet"

Configuration for interface "Ethernet"
    DHCP enabled:                         Yes
    IP Address:                           10.6.64.243
    Subnet Prefix:                        10.6.64.0/24 (mask 255.255.255.0)
    Default Gateway:                      10.6.64.1
    Gateway Metric:                       0
    InterfaceMetric:                      25
```


```powershell
PS C:\Users\Frank> netsh interface ip show address "Ethernet" | findstr "IP Address"
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

## Access WSL 2 from local area network(LAN)

After enabling [systemd](https://devblogs.microsoft.com/commandline/systemd-support-is-now-available-in-wsl/) in WSL 2, I have to forward the Windows host port to the WSL 2 distribution.

### Find WSL 2 IP address that can be reached from Windows host

```sh
$ ip addr show eth0
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1420 qdisc mq state UP group default qlen 1000
    link/ether 00:15:5d:98:b5:99 brd ff:ff:ff:ff:ff:ff
    inet 172.29.6.23/20 brd 172.29.15.255 scope global eth0
       valid_lft forever preferred_lft forever
    inet6 fe80::215:5dff:fe98:b599/64 scope link
       valid_lft forever preferred_lft forever
```

### Add proxy

```powershell
netsh interface portproxy add v4tov4 listenport=8082 connectport=8082 connectaddress=172.29.6.23,127.0.0.1
```

### [Optional] Add firewall rule

```powershell
netsh advfirewall firewall add rule name= "Open Port 8082" dir=in action=allow protocol=TCP localport=8082
```

### Check current proxy

```powershell
netsh interface portproxy show all
```

### Clean up

```powershell
netsh interface portproxy delete v4tov4 listenport=8082
```

```powershell
netsh advfirewall firewall delete rule name="Open port 8082"
```