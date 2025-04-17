---
authors:
  - frank
tags:
  - make
  - ninja
  - msbuild
  - cmake
  - meson
  - ci-cd
description: Learn Avalonia
keywords:
  - practice
  - avalonia
image: https://i.imgur.com/mErPwqL.png
date: 2023-07-07
draft: false
enableComments: true # for Gisqus
---

# C/C++ Build System

[List of build automation software - Wikipedia](https://en.wikipedia.org/wiki/List_of_build_automation_software)

<!--truncate-->

```plantuml
@startuml
skinparam nodesep 50
skinparam ranksep 100

!include <material/common>
!include <material/code_braces>
!include <material/code_array>
!include <material/code_brackets>
!include <material/code_parentheses>
!include <material/code_tags>

together {
folder "Project" as source <<Source Code>> {
    file sourcefile[
        *.cpp
        *.c
        *.h
        <$ma_code_braces>
    ]
}

component "CMake" as cmake {
    file cmakefiles[
        CMakefiles.txt
        <$ma_code_braces>
    ]
}
}

component "Make" as make {
    file makefile[
        Makefile
        <$ma_code_braces>
    ]
}

component "MSBuild" as msbuild {
    file msbuildfile[
        .vcproj
        <$ma_code_braces>
    ]
}

package "Windows Application" as wa <<.exe>> <<*.DLL>> {
}

package "Unix Application" as ua <<.>> <<*.so>> {
}



cmake --> make: Generator: Make
cmake --> msbuild : Generator: Visual Studio 2022

source --> wa
msbuild --> wa

source --> ua
make --> ua
```

## Build System

Make

Ninja

MSBuild

## Build System Generator

CMake

Meson

## Package Management

- vcpkg
- conan