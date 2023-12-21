#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct
{
    size_t length;
    char data[1]; // size is same as the size of a address, 8 bytes in 64-bits system.
} String;

String *string_new(const char *str)
{
    size_t len = strlen(str);
    String *s = malloc(sizeof(String) + len);

    if (s == NULL)
    {
        // Handle allocation failure
        return NULL;
    }

    s->length = len;
    memcpy(s->data, str, len);
    s->data[len] = '\0';
    return s;
}

void string_free(String *s)
{
    free(s);
}

int main()
{
    printf("Struct String Size: %zu\n", sizeof(String));
    String *s = string_new("Hello world!");

    if (s != NULL)
    {
        printf("Length: %zu\n", s->length);
        printf("Data: %s\n", s->data);

        string_free(s);
    }

    return 0;
}