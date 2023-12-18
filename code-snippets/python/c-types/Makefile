CC = gcc
CFLAGS = -Wall -fPIC
INCLUDE = -I/usr/include/python3.10

# Get all source files with a .c file extension
SOURCES = $(wildcard *.c)
# SOURCES = test.c

# Replace .c with .o for object files
OBJECTS = $(SOURCES:.c=.o)

DYLIBS = $(SOURCES:.c=.so)

# Define the executables based on the source files
EXECUTABLES = $(SOURCES:.c=.out)

all: $(DYLIBS)

# Rule to build object files
$(OBJECTS): $(SOURCES)
	$(CC) -c $(CFLAGS) $(INCLUDE) $< -o $@

$(DYLIBS): $(OBJECTS)
	$(CC) -shared $< -o $@

clean:
	rm -f $(OBJECTS) $(DYLIBS)