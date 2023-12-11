import ctypes

assert ctypes.cast(id(42), ctypes.py_object).value == 42

class PyUnicodeObject(ctypes.Structure):
    # internal fields of the string object
    _fields_ = [("ob_refcnt", ctypes.c_long),
                ("ob_type", ctypes.c_void_p),
                ("length", ctypes.c_ssize_t),
                ("hash", ctypes.c_ssize_t),
                ("interned", ctypes.c_uint, 2),
                ("kind", ctypes.c_uint, 3),
                ("compact", ctypes.c_uint, 1),
                ("ascii", ctypes.c_uint, 1),
                ("ready", ctypes.c_uint, 1),
                # ...
                # ...
    ]

assert PyUnicodeObject.from_address(id("Hello")).kind == 1
assert PyUnicodeObject.from_address(id("你好")).kind == 2
assert PyUnicodeObject.from_address(id("🤨")).kind == 4