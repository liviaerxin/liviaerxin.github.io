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

# Learn Vcpkg

TODO: Fix qtbase tools/config in release/debug osx  

https://github.com/microsoft/vcpkg/tree/master/ports/qtbase

https://learn.microsoft.com/en-us/vcpkg/maintainers/functions/vcpkg_cmake_config_fixup

<!--truncate-->

## Manifest Mode

## Classic Mode

## Useful Environment variables

`CURRENT_INSTALLED_DIR`
`CURRENT_PACKAGES_DIR`

```sh
set(VCPKG_RELEASE_LIBDIR "${CURRENT_INSTALLED_DIR}/lib")
set(VCPKG_DEBUG_LIBDIR "${CURRENT_INSTALLED_DIR}/debug/lib")
set(VCPKG_TOOLS_DIR "${CURRENT_INSTALLED_DIR}/tools")
set(VCPKG_SHARE_DIR "${CURRENT_INSTALLED_DIR}/share")
set(VCPKG_INCLUDE_DIR "${CURRENT_INSTALLED_DIR}/include")
```

## Tips and Tricks

### Reinstall packages without caching

```sh
vcpkg remove icu --host-triplet=arm64-osx-dynamic --triplet=arm64-osx-dynamic
vcpkg install icu --host-triplet=arm64-osx-dynamic --triplet=arm64-osx-dynamic --no-binarycaching
vcpkg install libpq --host-triplet=arm64-osx-dynamic --triplet=arm64-osx-dynamic --binarysource=clear
vcpkg remove libpq --host-triplet=arm64-osx-dynamic --triplet=arm64-osx-dynamic

vcpkg remove "qtbase[gui,widgets]" --host-triplet=arm64-osx-dynamic --triplet=arm64-osx-dynamic
vcpkg install "qtbase[gui,widgets]" --host-triplet=arm64-osx-dynamic --triplet=arm64-osx-dynamic --no-binarycaching
vcpkg install "qtbase[gui,widgets]" --host-triplet=arm64-osx-dynamic --triplet=arm64-osx-dynamic --binarysource=clear
```

### Clean up all packages

```sh
rm -rf /opt/vcpkg/installed/
rm -rf /opt/vcpkg/packages/
rm -rf /opt/vcpkg/buildtrees/
```

```sh
```

### Clean up all caching packages

```sh
rm -rf ~/.cache/vcpkg/archives/
```

### `INSTALL_RPATH_USE_LINK_PATH` different behaviours in `manifest` and `classic` mode

`INSTALL_RPATH_USE_LINK_PATH` will not work properly when being used in the `manifest` mode, because `CMake` will don't handle libraries located in `buildtree`:

```sh
set_target_properties(${PROJECT_NAME} PROPERTIES
    INSTALL_RPATH "@executable_path/../Frameworks"
    INSTALL_RPATH_USE_LINK_PATH ON
)
```

After `${PROJECT_NAME}` installed, in the `manifest` mode:

```sh
❯ otoolll /Users/frankchen/Documents/vcpkg-qt-app/install/./helloworld.app/Contents/MacOS/helloworld
          cmd LC_RPATH
      cmdsize 48
         path @executable_path/../Frameworks (offset 12)
```

After `${PROJECT_NAME}` installed, in the `classic` mode:

```sh
❯ otoolll /Users/frankchen/Documents/vcpkg-qt-app/install/./helloworld.app/Contents/MacOS/helloworld
          cmd LC_RPATH
      cmdsize 56
         path /opt/vcpkg/installed/arm64-osx-dynamic/lib (offset 12)
Load command 27
      cmd LC_FUNCTION_STARTS
--
          cmd LC_RPATH
      cmdsize 48
         path @executable_path/../Frameworks (offset 12)
```


[[learn-cmake#RPATH in CMake]](./learn-cmake.md#rpath-in-cmake)