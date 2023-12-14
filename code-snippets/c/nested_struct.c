#include <stdio.h>

typedef struct
{
    int x;
    int y;
} Point;

typedef struct
{
    Point topLeft;
    Point bottomRight;
} Rectangle;

int main() {
    Rectangle rectangle = {{0, 0}, {100, 200}};
    
    printf("TopLeft point: (%d, %d)\n", rectangle.topLeft.x, rectangle.topLeft.y);
    printf("BottomRight point: (%d, %d)\n", rectangle.bottomRight.x, rectangle.bottomRight.y);

    printf("Size of rectangle: %zu bytes\n", sizeof(Rectangle));
    return 0;
}
