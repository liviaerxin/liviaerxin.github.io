# CIL(Common Intermediate Language)

[Verifying your own .NET IL-Code](https://www.dynatrace.com/news/blog/verifying-your-own-dotnet-il-code/)

[linux - .net-core: Equivalent of ILDASM / ILASM - Stack Overflow](https://stackoverflow.com/questions/39979851/net-core-equivalent-of-ildasm-ilasm)

[What is Just-In-Time(JIT) Compiler in .NET - GeeksforGeeks](https://www.geeksforgeeks.org/what-is-just-in-time-jit-compiler-in-dot-net/)

[GitHub - Konard/ILProj: The example class library project, with code written in the CIL.](https://github.com/Konard/ILProj)

## What is CIl/IL

For C# or Java, the program is not directly compiled to machine code, but **intermediate language** code. For C#, the `intermediate` code is called Common Intermediate Language(CIL, or IL). So whether the `*.dll` or `*.exe` compiled from C#, is composed of IL code and its corresponding meta data. At runtime, the JIT(Just-In-Compiler) compile the IL code to the native machine code.

## What is JIT

```sh
./ilasm ~/Documents/peggy-foam-wiki/docs/IL/test/test.il -dll
./ildasm ~/Documents/peggy-foam-wiki/docs/IL/test/test.dll -t
dotnet myapp.dll
```
