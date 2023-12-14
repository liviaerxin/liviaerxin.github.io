#include <stdio.h>

int main() {
    int arr[] = {1, 2, 3, 4, 5};
    int* ptr = arr;

    printf("Initial address: %p\n", (void*)ptr);

    // Adding 1 to the pointer
    ptr = ptr + 1;

    printf("Address after adding 1: %p\n", (void*)ptr);

    return 0;
}
