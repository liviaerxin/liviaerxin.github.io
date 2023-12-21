#!/usr/bin/env python3.10

import ctypes


# [bytesobject.c](https://github.com/python/cpython/blob/3.10/Objects/bytesobject.c)
# [bytesobject.h](https://github.com/python/cpython/blob/3.10/Include/cpython/bytesobject.h#L5-L15)
# [PyVarObject](https://github.com/python/cpython//blob/3.10/Include/object.h#L115-L118)
# [ctypes](https://docs.python.org/3/library/ctypes.html)
class PyVarObject(ctypes.Structure):
    _fields_ = [
        ("ob_refcnt", ctypes.c_long),  # 8 bytes
        ("ob_type", ctypes.c_void_p),  # 8 bytes in 64 bit
        ("ob_size", ctypes.c_ssize_t),  # 8 bytes in 64 bit
    ]


class PyBytesObject(PyVarObject):
    _fields_ = [
        ("hash", ctypes.c_ssize_t),
        # ("ob_sval", ctypes.c_char),  # 1 byte
    ]

    def __repr__(self) -> str:
        return f"ob_refcnt[{self.ob_refcnt}], ob_type[{self.ob_type}], ob_size[{self.ob_size}], hash[{self.hash}]"


print(ctypes.sizeof(PyVarObject))

bytes_obj = b"hello world!"
addr = id(bytes_obj)
py_bytes_obj = PyBytesObject.from_address(addr)
print(py_bytes_obj)

data_addr = addr + ctypes.sizeof(PyBytesObject)
data = ctypes.cast(data_addr, ctypes.c_char_p)
print(f"data: {data.value}")

print(f"data: {ctypes.string_at(data_addr, py_bytes_obj.ob_size)}")