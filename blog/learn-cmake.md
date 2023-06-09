---
sidebar_label: Learn CMake
description: Learn CMake
keywords:
  - cmake
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

It’s all about targets and properties

<!--truncate-->

[[learn-vcpkg]](./learn-vcpkg.md)

## CMake Project Structure

A typical **CMake** project can be regarded to has three `Tree`:

**Source Tree**:

```sh
project_root
├── CMakeLists.txt
├── simple_example.cpp
├── simple_lib.cpp
└── simple_lib.hpp
```

**Build Tree**:

```sh
project_root
├── CMakeLists.txt
├── simple_example.cpp
├── simple_lib.cpp
├── simple_lib.hpp
└── build
    └── CMakeCache.txt
```

**Install Tree**:

This tree is located in the `CMAKE_INSTALL_PREFIX`, of which default value is platform-dependent. By default, it is set to `/usr/local` on Unix-like systems (Linux, macOS) and `C:/Program Files/<Project Name>` on Windows..

To change it, you can pass `-DCMAKE_INSTALL_PREFIX` argument during CMake `configuration` step, like this:

```sh
cmake -B build -S . -DCMAKE_INSTALL_PREFIX=/my/custom/installation/path
```

Alternatively, you can change it by passing `--prefix`(it can be relative path) argument during CMake `install` step, like this:

```sh
cmake --install build --prefix "/my/custom/installation/path"
```

It's recommended to use a default install layout as `GNUInstallDirs`.

When setting `cmake --install build --prefix "./install`, the **install** tree will be like:

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

## How CMake Works

A typical workflow of CMake includes `Configure`, `Build` and `Install` steps, combined with the above mentioned `Trees` concepts.

`Configure` step will generate a sort of configuration files, the most important ones among them are `CMakeCache.txt`, `cmake_install.cmake` and `Makefile` if using `Make` as building system. With these generated configuration files, the later steps `Build` and `Install` will run according to them.
`Build` step will generate the build binary directory.
`Install` step will generate the install binary directory.

## How to make your package be found by others by `find_package()`

package configuration files: `find_package`

[Title](https://cmake.org/cmake/help/latest/guide/importing-exporting/index.html#importing-targets)

## RPATH in CMake

[^rpath]

## CMake Variables

There are some useful and important CMake variables that will be introduced here:

`CMAKE_PREFIX_PATH`

`CMAKE_IGNORE_PATH`

## References

[CMake hands-on workshop — CMake Workshop](https://enccs.github.io/cmake-workshop/)
[^rpath]: [RPATH handling from official cmake](https://gitlab.kitware.com/cmake/community/-/wikis/doc/cmake/RPATH-handling)
