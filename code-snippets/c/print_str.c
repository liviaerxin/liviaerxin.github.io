#include <stdio.h>

#define NULL_CHAR '\0'

void printBytes(const char *str)
{
    while (*str != NULL_CHAR)
        printf("%02X ", (unsigned char)*str++);
}

void printChars(const char *str)
{
    while (*str != NULL_CHAR)
        printf("%c ", *str++);
}

int main()
{
    char str[] = "Hello, World!";
    char *charPtr = str;

    // Print the memory address of the char* using %p
    printf("Memory address of the char*: %p\n", (void *)charPtr);

    printf("String in the char*: ");
    printf("%s", charPtr);
    printf("\n");

    // Print each byte in the char* using pointer arithmetic
    printf("Bytes in the char*: ");
    printBytes(charPtr);
    printf("\n");

    printf("ASCII Chars in the char*: ");
    printChars(charPtr);
    printf("\n");

    return 0;
}
