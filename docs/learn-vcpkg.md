---
sidebar_label: learn vcpkg
description: learn vcpkg
keywords:
  - docs
  - docusaurus
image: https://i.imgur.com/mErPwqL.png
tags:
  - blog
  - docusaurus
last_update:
  date: 2023-06-23
  author: frank
---

# Learn vcpkg

Reinstall packages without caching:

```sh
vcpkg remove icu --host-triplet=arm64-osx-dynamic --triplet=arm64-osx-dynamic
vcpkg install icu --host-triplet=arm64-osx-dynamic --triplet=arm64-osx-dynamic --no-binarycaching
vcpkg install libpq --host-triplet=arm64-osx-dynamic --triplet=arm64-osx-dynamic --binarysource=clear
vcpkg remove libpq --host-triplet=arm64-osx-dynamic --triplet=arm64-osx-dynamic

vcpkg remove "qtbase[gui,widgets]" --host-triplet=arm64-osx-dynamic --triplet=arm64-osx-dynamic
vcpkg install "qtbase[gui,widgets]" --host-triplet=arm64-osx-dynamic --triplet=arm64-osx-dynamic --no-binarycaching
vcpkg install "qtbase[gui,widgets]" --host-triplet=arm64-osx-dynamic --triplet=arm64-osx-dynamic --binarysource=clear
```

Clean up all packages:

```sh
rm -rf /opt/vcpkg/installed/
rm -rf /opt/vcpkg/packages/
rm -rf /opt/vcpkg/buildtrees/
```

```sh
```

Clean up all caching packages:

```sh
rm -rf ~/.cache/vcpkg/archives/
```