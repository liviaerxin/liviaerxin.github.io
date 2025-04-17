---
authors:
  - frank
tags:
  - python
  - samba
description: benchmark to test the performance of operations in Python
keywords:
  - performance measure
image: https://i.imgur.com/mErPwqL.png
date: 2024-01-12
draft: false
enableComments: true # for Gisqus
---

# Python Benchmark

Using Python's `timeit` module to measure the performance of operations in Python quickly.

## Measuring Lock Performance in Python on Linux

Here’s a quick look at the cost of acquiring and releasing an **uncontended** lock using Python’s `threading.Lock` on a Linux system:

```sh
$ ./python -m timeit \
  -s "from threading import Lock; l=Lock(); a=l.acquire; r=l.release" \
  "a(); r()"
10000000 loops, best of 3: 0.127 usec per loop
```

Now, let’s compare that with the cost of calling a **dummy Python function**:

```sh
$ ./python -m timeit -s "def a(): pass" "a(); a()"
1000000 loops, best of 3: 0.221 usec per loop
```

And a trivial **C function** call (returning the `False` singleton via `bool()`):

```sh
$ ./python -m timeit -s "a=bool" "a(); a()"
10000000 loops, best of 3: 0.164 usec per loop
```

Interestingly, using a `Lock` as a **context manager** is actually *slower*, not faster, despite what you might expect:

```sh
$ ./python -m timeit -s "from threading import Lock; l=Lock()" \
  "with l: pass"
1000000 loops, best of 3: 0.242 usec per loop
```

So at least on Linux, there doesn't seem to be much low-hanging fruit left when it comes to optimizing lock performance.

**Bonus:** As of recent Python versions, `RLock` is now just as fast as `Lock` in uncontended cases:

```sh
$ ./python -m timeit \
  -s "from threading import RLock; l=RLock(); a=l.acquire; r=l.release" \
  "a(); r()"
10000000 loops, best of 3: 0.114 usec per loop
```