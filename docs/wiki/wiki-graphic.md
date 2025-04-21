---
sidebar_label: wiki graphic
description: Understanding the Graphics Stack, From GUI Toolkits to GPU APIs
keywords:
  - wiki
  - video
  - streaming protocols
  - chunk
image: https://i.imgur.com/mErPwqL.png
tags:
  - wiki
  - video
last_update:
  date: 2025-04-20
  author: frank
---

# Graphics Stack: From Low-Level Graphics APIs to High-Level GUI Toolkits

Modern GUI composition of:

- GPU
  - Nvidia
  - AMD
- Graphic APIs(communicate with the GPU)
  - OpenGL
  - Vulkan
  - DirectX
  - Metal
- Rendering Engine
  - GPU, Hardware Rendering
    - Skia + OpenGL, Vulkan, DirectX, Metal
    - Qt + OpenGL, Vulkan, DirectX, Metal
    - Cairo + OpenGL
  - CPU, Software Rendering
    - QT Rasterization Engine
    - Skia + CPU
    - Cairo + CPU
- Windowing System/Compositor
  - Quartz Compositor(OSX)
  - Desktop Window Manager(Windows)
  - X11(Linux)
  - Wayland(Linux)
  - SurfaceFlinger(Android)

## Low-Level Graphics APIs

These are used to render 2D/3D graphics, directly interfacing with **GPU**.

| API     | Platform Support                       | Description                                                                     |
|---------|----------------------------------------|---------------------------------------------------------------------------------|
| OpenGL  | Cross-platform (Windows, macOS, Linux) | Legacy but widely supported; immediate mode and programmable pipeline.          |
| Vulkan  | Cross-platform (modern)                | Low-level, high-performance successor to OpenGL. More control, more complexity. |
| DirectX | Windows, Xbox                          | Microsoft's proprietary graphics API. Most used in Windows gaming/device.       |
| Metal   | macOS and iOS                          | Apple’s graphics API on Apple gaming/device.                                    |

These APIs don't create windows or GUI elements — they render within a surface (window) provided by the OS or another toolkit.

## Rendering Engine

| Rendering Engine | Primary Use                      | Key Platform(s)          |
|------------------|----------------------------------|--------------------------|
| Cairo            | 2D graphics rendering (software) | GTK, GIMP, Pango         |
| Skia             | 2D graphics rendering            | Chrome, Android, Flutter |
| QT               | 2D graphics rendering            | Chrome, Android, Flutter |

## GUI Framework Toolkits

These provide buttons, windows, text inputs, etc. Some of them can also handle rendering.

| Toolkit | Uses Which Graphics API        | Platform Support      | Notes                                                                                                      |
|---------|--------------------------------|-----------------------|------------------------------------------------------------------------------------------------------------|
| Qt      | OpenGL (and optionally Vulkan) | Cross-platform        | Powerful C++ toolkit with widgets and OpenGL support. Can integrate with OpenGL directly.                  |
| GTK     | OpenGL via Cairo or GSK        | Linux, Windows, macOS | Used in GNOME desktop. Not as OpenGL/Vulkan-native as Qt.                                                  |
| Skia    | Can use OpenGL, Vulkan, or CPU | Cross-platform        | 2D graphics library by Google (used in Chrome, Flutter). Not a GUI toolkit per se, but a rendering engine. |


## Windowing Systems(OS Layers)

These provide surfaces or contexts for rendering, and handle input like mouse/keyboard.

| System                          | Platform       | Relationship                                                                                                                  |
|---------------------------------|----------------|-------------------------------------------------------------------------------------------------------------------------------|
| X11                             | Linux/Unix     | Legacy windowing system. You render OpenGL inside an X11 window.                                                              |
| Wayland                         | Linux (modern) | Newer alternative to X11. More modern, secure.                                                                                |
| Apple Quartz / MetalKit / Cocoa | macOS          | Apple dropped OpenGL support in favor of Metal. GUI apps are written with Cocoa (Objective-C/Swift), Metal handles rendering. |
| Windows GDI / DWM               | Windows        | DirectX and GDI share surfaces; modern Windows apps often use DirectX for acceleration.                                       |

It's very essential to apply the `native Windowing System` library for Cross-platform GUI framework in different platforms. Here's a cue from [including native windowing system headers from GLFW](https://github.com/glfw/glfw/blob/3a60992a418aad88717db32353bec22e8bb7dab3/include/GLFW/glfw3native.h#L94-L118)

```c
#if !defined(GLFW_NATIVE_INCLUDE_NONE)
 #if defined(GLFW_EXPOSE_NATIVE_WIN32) || defined(GLFW_EXPOSE_NATIVE_WGL)
  /* This is a workaround for the fact that glfw3.h needs to export APIENTRY (for
   * example to allow applications to correctly declare a GL_KHR_debug callback)
   * but windows.h assumes no one will define APIENTRY before it does
   */
  #if defined(GLFW_APIENTRY_DEFINED)
   #undef APIENTRY
   #undef GLFW_APIENTRY_DEFINED
  #endif
  #include <windows.h>
 #elif defined(GLFW_EXPOSE_NATIVE_COCOA) || defined(GLFW_EXPOSE_NATIVE_NSGL)
  #if defined(__OBJC__)
   #import <Cocoa/Cocoa.h>
  #else
   #include <ApplicationServices/ApplicationServices.h>
   #include <objc/objc.h>
  #endif
 #elif defined(GLFW_EXPOSE_NATIVE_X11) || defined(GLFW_EXPOSE_NATIVE_GLX)
  #include <X11/Xlib.h>
  #include <X11/extensions/Xrandr.h>
 #elif defined(GLFW_EXPOSE_NATIVE_WAYLAND)
  #include <wayland-client.h>
 #endif
```

## Visualizing the Relationships

Here’s how it all connects:

```sh
Your App (Qt / Skia)
     ↓
GUI Toolkit (Qt / GTK / Skia)
     ↓
Window System (X11 / AppleKit / Win32)
     ↓
Graphics API (OpenGL / Vulkan / DirectX)
     ↓
GPU renders pixels to screen
```

### Bonus: Examples In Practice

| Platform           | Toolkit               | Window System   | Graphics API        |
|--------------------|-----------------------|-----------------|---------------------|
| Linux + KDE        | Qt                    | X11 or Wayland  | OpenGL/Vulkan       |
| Windows Game       | Custom / DirectX GUI  | Win32           | DirectX             |
| macOS App          | Cocoa (SwiftUI/UIKit) | Quartz          | Metal               |
| Cross-platform App | Qt + Skia             | Platform-native | OpenGL/Vulkan/Metal |

## References

[Windowing system - Wikipedia](https://en.wikipedia.org/wiki/Windowing_system)

[GUI Under Linux | Baeldung on Linux](https://www.baeldung.com/linux/gui)

[GTK - Wikipedia](https://en.wikipedia.org/wiki/GTK)

[A Comparison of Modern Graphics APIs](https://alain.xyz/blog/comparison-of-modern-graphics-apis)

### Android graphics

two core pieces:

- SurfaceFlinger
- Skia

[Graphics  |  Android Open Source Project](https://source.android.com/devices/graphics)
[Android Graphics Internals - Stack Overflow](https://stackoverflow.com/questions/4579573/android-graphics-internals)

### WayLand

[What is Wayland? · Writing Wayland clients](https://bugaevc.gitbooks.io/writing-wayland-clients/content/about-this-book/what-is-wayland.html)

[The Hello Wayland Tutorial | FLOSS & Cia](https://hdante.wordpress.com/2014/07/08/the-hello-wayland-tutorial/)

[How to use Wayland with C to make a Linux app | by Sergey Bugaev | Medium](https://medium.com/@bugaevc/how-to-use-wayland-with-c-to-make-a-linux-app-c2673a35ce05)