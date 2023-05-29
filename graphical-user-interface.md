# Graphical User Interface(GUI)

Modern GUI composition of:

- Windowing System/Compositor
  - Quartz Compositor(OSX)
  - Desktop Window Manager(Windows)
  - X11(Linux)
  - Wayland(Linux)
  - SurfaceFlinger(Android)
- Graphic Rendering
  - Hardware-Accelerated Rendering
    - OpenGL
    - Vulkan
    - DirectX
  - Software Rendering
    - QT Rasterization Engine

Windowing System

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

[Windowing system - Wikipedia](https://en.wikipedia.org/wiki/Windowing_system)

[GUI Under Linux | Baeldung on Linux](https://www.baeldung.com/linux/gui)

[GTK - Wikipedia](https://en.wikipedia.org/wiki/GTK)

Graphic Render APIs/Libraries

[A Comparison of Modern Graphics APIs](https://alain.xyz/blog/comparison-of-modern-graphics-apis)

## Android graphics

two core pieces:

- SurfaceFlinger
- Skia

[Graphics  |  Android Open Source Project](https://source.android.com/devices/graphics)
[Android Graphics Internals - Stack Overflow](https://stackoverflow.com/questions/4579573/android-graphics-internals)

## WayLand

[What is Wayland? · Writing Wayland clients](https://bugaevc.gitbooks.io/writing-wayland-clients/content/about-this-book/what-is-wayland.html)

[The Hello Wayland Tutorial | FLOSS & Cia](https://hdante.wordpress.com/2014/07/08/the-hello-wayland-tutorial/)

[How to use Wayland with C to make a Linux app | by Sergey Bugaev | Medium](https://medium.com/@bugaevc/how-to-use-wayland-with-c-to-make-a-linux-app-c2673a35ce05)
