---
sidebar_label: Learn CMake
description: Learn CMake
keywords:
  - cmake
  - interface
  - project structure
image: https://i.imgur.com/mErPwqL.png
tags:
  - cmake
  - template
last_update:
  date: 2023-06-25
  author: frank
---

# Learn CMake

## CMake Project Structure

A typical **CMake** project can be regarded to has three `interfaces`(someone call it `trees`):

**Source Interface**:

```sh
project_root
├── CMakeLists.txt
├── simple_example.cpp
├── simple_lib.cpp
└── simple_lib.hpp
```

**Build Interface**:

```sh
project_root
├── CMakeLists.txt
├── simple_example.cpp
├── simple_lib.cpp
├── simple_lib.hpp
└── build
    └── CMakeCache.txt
```

**Install Interface**:

This interface is located in the `CMAKE_INSTALL_PREFIX`, of which default value is platform-dependent. By default, it is set to `/usr/local` on Unix-like systems (Linux, macOS) and `C:/Program Files/<Project Name>` on Windows..

To change it, you can pass `-DCMAKE_INSTALL_PREFIX` argument during CMake `configuration` step, like this:

```sh
cmake -B build -S . -DCMAKE_INSTALL_PREFIX=/my/custom/installation/path
```

Alternatively, you can change it by passing `--prefix`(it can be relative path) argument during CMake `install` step, like this:

```sh
cmake --install build --prefix "/my/custom/installation/path"
```

It's recommended to use a default install layout as `GNUInstallDirs`.

When setting `cmake --install build --prefix "./install`, the **install** interface will be like:

```sh
project_root
├── CMakeLists.txt
├── simple_example.cpp
├── simple_lib.cpp
├── simple_lib.hpp
├── build
│   └── CMakeCache.txt
└── install
    ├── bin
    │   └── executables
    ├── sbin
    │   └── sysadmin executables
    ├── lib
    │   ├── compiled libraries (*.so (unix) or *.dll (windows))
    │   └── library archive files (*.lib (windows))
    ├── libexec
    │   └── executables not directly invoked by user
    ├── include
    │   └── header files
    └── doc
       └── documentation
```

