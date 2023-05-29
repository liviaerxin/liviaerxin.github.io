# Python Benchmark

Ok, here is the cost of acquiring and releasing an uncontended lock
under Linux, with Python 3.2:

```sh
$ ./python -m timeit \
  -s "from threading import Lock; l=Lock(); a=l.acquire; r=l.release" \
  "a(); r()"
10000000 loops, best of 3: 0.127 usec per loop
```

And here is the cost of calling a dummy Python function:

```sh
$ ./python -m timeit -s "def a(): pass" "a(); a()"
1000000 loops, best of 3: 0.221 usec per loop
```

And here is the cost of calling a trivial C function (which returns the
False singleton):

```sh
$ ./python -m timeit -s "a=bool" "a(); a()"
10000000 loops, best of 3: 0.164 usec per loop
```

Also, note that using the lock as a context manager is actually slower,
not faster as you might imagine:

```sh
$ ./python -m timeit -s "from threading import Lock; l=Lock()" \
  "with l: pass"
1000000 loops, best of 3: 0.242 usec per loop
```

At least under Linux, there doesn't seem to be a lot of room for
improvement in lock performance, to say the least.

PS: RLock is now as fast as Lock:

```sh
$ ./python -m timeit \
-s "from threading import RLock; l=RLock(); a=l.acquire; r=l.release" \
"a(); r()"
10000000 loops, best of 3: 0.114 usec per loop
```
