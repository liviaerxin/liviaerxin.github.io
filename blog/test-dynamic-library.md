---
foam_template:
  name: Blog Docusaurus Template
  description: Creates Docusaurus blog/slip
  filepath: blog/test-dynamic-library.md
authors:
  - frank
description: Test Dynamic Library
keywords:
  - test
  - dynamic library
image: https://i.imgur.com/mErPwqL.png
tags:
  - test
  - dynamic library
date: 2023-06-02
draft: false
---

# Test Dynamic Library

```py
import ctypes
ctypes.cdll.LoadLibrary("libOpenCvSharpExtern.so")
ctypes.CDLL("libOpenCvSharpExtern.so")
```

```c
```


```sh
objdump -p /usr/local/lib/libOpenCvSharpExtern.so
```