import ctypes

assert ctypes.cast(id(42), ctypes.py_object).value == 42


class PyASCIIObject(ctypes.Structure):
    # internal fields of the string object
    _fields_ = [
        ("ob_refcnt", ctypes.c_long),
        ("ob_type", ctypes.c_void_p),
        ("length", ctypes.c_ssize_t),
        ("hash", ctypes.c_ssize_t),
        ("interned", ctypes.c_uint, 2),
        ("kind", ctypes.c_uint, 3),
        ("compact", ctypes.c_uint, 1),
        ("ascii", ctypes.c_uint, 1),
        ("ready", ctypes.c_uint, 1),
        ("_padding", ctypes.c_uint, 24),
        ("wstr", ctypes.c_wchar_p),
    ]


class PyCompactUnicodeObject(ctypes.Structure):
    _fields_ = [
        ("_base", PyASCIIObject),
        ("utf8_length", ctypes.c_ssize_t),
        ("utf8", ctypes.c_void_p),
        ("wstr_length", ctypes.c_ssize_t),
    ]


class _Data(ctypes.Union):
    _fields_ = [
        ("any", ctypes.c_void_p),
        ("latin1", ctypes.c_char_p),
        ("ucs2", ctypes.c_char_p),
        ("ucs4", ctypes.c_char_p),
    ]


class PyUnicodeObject(ctypes.Structure):
    _fields_ = [("_base", PyCompactUnicodeObject), ("data", _Data)]


# assert ctypes.cast(PyUnicodeObject.from_address(id("Hello")), PyASCIIObject).kind == 1
# assert PyUnicodeObject.from_address(id("Hello")).kind == 1
# assert PyUnicodeObject.from_address(id("你好")).kind == 2
# assert PyUnicodeObject.from_address(id("🤨")).kind == 4

s = "hello world"
su = PyUnicodeObject.from_address(id(s))

# ctypes.string_at(su.data)
