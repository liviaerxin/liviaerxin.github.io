---
foam_template:
  name: Docs Docusaurus Template
  description: Creates Docusaurus docs/slip
  filepath: docs/wifi-autoswitch-windows.md
sidebar_label: WiFi AutoSwitch Windows
description: WiFi AutoSwitch Windows
keywords:
  - autoswitch
  - wifi
  - windows
image: https://i.imgur.com/mErPwqL.png
tags:
  - autoswitch
  - wifi
  - windows
date: 2023-06-01
author: frank
---

# WiFi AutoSwitch Windows

If **autoSwitch** is turned on, it allows Windows to continue looking for other auto-connected wireless networks while connected to the current wireless network. If a higher priority auto-connected wireless network than the currently connected wireless network comes in range, Windows will automatically connect to it instead.

It also needs to work along with `priority` setting.

For example:

There're 3 networks of profile name: `TP-Link-1`, `TP-Link-2` and `TP-Link-3`. PC(windows) will try to connect `TP-Link-3` if it's in range when it's already connected to `TP-Link-1` or `TP-Link-2`.

1. Setup `autoswitch`:

```sh
netsh wlan set profileparameter name="TP-Link-1" autoswitch=Yes
netsh wlan set profileparameter name="TP-Link-2" autoswitch=Yes
netsh wlan set profileparameter name="TP-Link-3" autoswitch=No
```

2. Setup `priority`:

```sh
netsh wlan set profileorder name="TP-Link-1" interface="Wi-Fi" priority=3
netsh wlan set profileorder name="TP-Link-2" interface="Wi-Fi" priority=2
netsh wlan set profileorder name="TP-Link-3" interface="Wi-Fi" priority=1
```

other tools:

List profile name:

```sh
netsh wlan show profiles
```

List connected WiFi:

```sh
netsh wlan show interfaces
```

[Enable Auto Switch for Wireless Network Connection in Windows 10](https://winaero.com/enable-auto-switch-for-wireless-network-connection-in-windows-10/)

[Change WiFi network priority in Windows 10](https://winaero.com/change-wifi-network-priority-in-windows-10/)