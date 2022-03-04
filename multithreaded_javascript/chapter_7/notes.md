# Web Assembly

## Your First Web Assembly

While WebAssembly is a binary format, a plain text format exists to represent it in human readable form. This is comparable to how machine code can by represented in a human-readable assembly language.
The language for this WebAssembly text format is simply called **_WebAssembly text format_**, but the file extension typically used is .wat, so it’s common enough to refer to this language as WAT.

## Atomic Operations in WebAssembly

WebAssembly instructions often start with the type. In the case of atomic operations, the type is always i32 or i64 corresponding to 32-bit and 64-bit integers, respectively.
All atomic operations have **.atomic.** next in the instruction name. After that, you’ll find the specific instruction name.

## Compiling C Programs to WebAssembly with Emscripten

Since long before WebAssembly, Emscripten has been the go-to way to compile C and C++ programs for use in JavaScript environments. Today, it supports multithreaded C and C++ code using web workers in browsers and **_worker_threads_** in Node.js.

## Other WebAssembly Compilers

Emscripten isn’t the only way to compile code to WebAssembly. Indeed, WebAssembly was designed primarily as a compile target, rather than as a general purpose language in its own right.

There are myriad tools for compiling well-known languages to WebAssembly, and
there are even some languages built with WebAssembly as the main target in mind, rather than machine code.

- Clang/Clang++
- Rust
- AssemblyScript

## AssemblyScript

AssemblyScript is a subset of TypeScript that compiles to WebAssembly. Rather than compiling an existing language and providing implementations of existing system APIs, AssemblyScript was designed as a way to produce WebAssembly code with a much more familiar syntax than WAT.
