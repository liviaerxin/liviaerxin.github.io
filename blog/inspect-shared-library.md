---
foam_template:
  name: Blog Docusaurus Template
  description: Creates Docusaurus blog/slip
  filepath: blog/test-dynamic-library.md
authors:
  - frank
description: Test Dynamic Library
keywords:
  - debug
  - dynamic library
  - shared library
image: https://i.imgur.com/mErPwqL.png
tags:
  - debug
  - shared library
  - osx
  - windows
  - linux
date: 2024-12-02
draft: false
enableComments: true # for Gisqus
---

# Inspect Shared Library

Concepts:

- Show shared libraries dependencies(detect what shared libraries an executable or a another shared libraries depend on)
- Check/Test dependent shared libraries loaded successfully

<!-- truncate -->

## Using `ldd` Command

Available in Linux:

```sh
ldd /usr/bin/vim
	linux-vdso.so.1 (0x00007ffc75fb1000)
	libgtk-3.so.0 => /usr/lib/libgtk-3.so.0 (0x00007fa4dcb5e000)
	libgdk-3.so.0 => /usr/lib/libgdk-3.so.0 (0x00007fa4dca64000)	
	libXau.so.6 => /usr/lib/libXau.so.6 (0x00007fa4db7a9000)
        ....
	liblzma.so.5 => /usr/lib/liblzma.so.5 (0x00007fa4db63f000)
	liblz4.so.1 => /usr/lib/liblz4.so.1 (0x00007fa4db61d000)
	libgcrypt.so.20 => /usr/lib/libgcrypt.so.20 (0x00007fa4db4ff000)
	libgpg-error.so.0 => /usr/lib/libgpg-error.so.0 (0x00007fa4db4d8000)
```

## Using `objdump` Command

Available in Linux:

```sh
objdump -p /usr/bin/vim | grep 'NEEDED'
  NEEDED               libpython3.7m.so.1.0
  NEEDED               libcrypt.so.2
  NEEDED               libpthread.so.0
  NEEDED               libdl.so.2
  NEEDED               libutil.so.1
  NEEDED               libm.so.6
  NEEDED               libselinux.so.1
  NEEDED               libtinfo.so.6
  NEEDED               libacl.so.1
  NEEDED               libgpm.so.2
  NEEDED               libc.so.6
```

## Using `readelf` Command

Available in Linux:

```sh
readelf --dynamic /usr/bin/vim | grep NEEDED
 0x0000000000000001 (NEEDED)             Shared library: [libpython3.7m.so.1.0]
 0x0000000000000001 (NEEDED)             Shared library: [libcrypt.so.2]
 0x0000000000000001 (NEEDED)             Shared library: [libpthread.so.0]
 0x0000000000000001 (NEEDED)             Shared library: [libdl.so.2]
 0x0000000000000001 (NEEDED)             Shared library: [libutil.so.1]
 0x0000000000000001 (NEEDED)             Shared library: [libm.so.6]
 0x0000000000000001 (NEEDED)             Shared library: [libselinux.so.1]
 0x0000000000000001 (NEEDED)             Shared library: [libtinfo.so.6]
 0x0000000000000001 (NEEDED)             Shared library: [libacl.so.1]
 0x0000000000000001 (NEEDED)             Shared library: [libgpm.so.2]
 0x0000000000000001 (NEEDED)             Shared library: [libc.so.6]
```

## Using `otool` Command

Available in OSX:

```sh
otool -L libOpenCvSharpExtern.dylib
```

## Reading the `/proc/<pid>/maps` File

Available in Linux:

```sh
cat /proc/179015/maps 
...
7f2cb67c3000-7f2cb67c6000 r--p 00000000 08:13 3810274                    /usr/lib/libnss_files-2.31.so
7f2cb67c6000-7f2cb67cd000 r-xp 00003000 08:13 3810274                    /usr/lib/libnss_files-2.31.so
..
7f2cb6a89000-7f2cb6a8a000 r--p 00002000 08:13 3810903                    /usr/lib/libutil-2.31.so
7f2cb6a8a000-7f2cb6a8b000 r--p 00002000 08:13 3810903                    /usr/lib/libutil-2.31.so
...
7f2cb9802000-7f2cb9803000 rw-p 00000000 00:00 0 
7ffe77658000-7ffe7767a000 rw-p 00000000 00:00 0                          [stack]
7ffe776c8000-7ffe776cc000 r--p 00000000 00:00 0                          [vvar]
7ffe776cc000-7ffe776ce000 r-xp 00000000 00:00 0                          [vdso]
ffffffffff600000-ffffffffff601000 --xp 00000000 00:00 0                  [vsyscall]
```

```sh
awk '$NF!~/\.so/{next} {$0=$NF} !a[$0]++' /proc/179015/maps
...
/usr/lib/libpython3.8.so.1.0
/usr/lib/libgpg-error.so.0.29.0
/usr/lib/libgcrypt.so.20.2.5
/usr/lib/liblz4.so.1.9.2
/usr/lib/liblzma.so.5.2.5
/usr/lib/libsystemd.so.0.28.0
/usr/lib/libogg.so.0.8.4
/usr/lib/libvorbis.so.0.4.8
/usr/lib/libblkid.so.1.1.0
/usr/lib/libXdmcp.so.6.0.0
/usr/lib/libXau.so.6.0.0
/usr/lib/libdatrie.so.1.3.5
...
```

## Using `vmmap` Command

## Using `ctypes` in Python

```py
import ctypes
ctypes.cdll.LoadLibrary("libOpenCvSharpExtern.so")
ctypes.CDLL("libOpenCvSharpExtern.so")
```

```c
dlopen()
DYLD_PRINT_LIBRARIES=1 dlopen_test.out /opt/vcpkg/installed/arm64-osx-dynamic/lib/libpng16.dylib
```

```sh
objdump -p /usr/local/lib/libOpenCvSharpExtern.so
```

### Using `nm`

Show list of symbols:

```sh
❯ nm -g /opt/vcpkg/installed/arm64-osx-dynamic/lib/libintl.8.dylib
                 U _CFArrayGetCount
                 U _CFArrayGetValueAtIndex
                 U _CFGetTypeID
                 U _CFLocaleCopyPreferredLanguages
                 U _CFPreferencesCopyAppValue
                 U _CFRelease
                 U _CFStringGetCString
                 U _CFStringGetTypeID
                 U __DefaultRuneLocale
                 U ___CFConstantStringClassReference
```

### Using `dumpbin`

Available in Windows

Show dependent dynamic libraries(`DLL`):

```powershell
dumpbin /dependents your_dll_file.dll
```

### Using `Microsoft.PowerShell`

```powershell
(Get-Command "C:\Path\To\Thing.dll").FileVersionInfo
(Get-Item "C:\Windows\System32\nvcuda.dll").VersionInfo
```

## Useful Environment Variables

OSX:

- `DYLD_LIBRARY_PATH`
- `DYLD_PRINT_LIBRARIES`
- `DYLD_PRINT_STATISTICS`

Linux:

- `LD_LIBRARY_PATH`
- `LD_DEBUG=libs`

## References

[Additional MSVC Build Tools](https://learn.microsoft.com/en-us/cpp/build/reference/c-cpp-build-tools)

[How to Show All Shared Libraries Used by Executables in Linux](https://www.baeldung.com/linux/show-shared-libraries-executables)