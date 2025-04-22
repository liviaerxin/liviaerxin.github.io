---
draft: true
---
# Wiki Skia

[What the difference between SkImage/SkPicture/SkCanvas/SkSurface?](https://groups.google.com/g/skia-discuss/c/rNWV-oYtps)

[SkBitmap based SkCanvas very slow... How to improve draw speeds?](https://groups.google.com/g/skia-discuss/c/zatUu89s5_I)

[How to move SkImage from CPU to GPU?](https://groups.google.com/g/skia-discuss/c/M6G_bQd8Vf8)

[How to control the SkImage GPU back cache size?](https://groups.google.com/g/skia-discuss/c/EqvExXnEUbI)

As far as I understand when I load SkImage from file or SkBitmap the SkImage lives in CPU side memory. Then the moment I draw this SkImage on a GPU backed canvas it will make a copy of the CPU data into a GPU backed texture. So now we technically have two copies available on the SkImage. Then each time I draw that SkImage it will do it quickly cause it's already in the GPU side.
