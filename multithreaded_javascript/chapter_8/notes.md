# Analysis

## When Not to Use

Threading is not a magic bullet capable of solving an application’s performance problems. It is usually not the lowest-hanging fruit when it comes to performance, either, and should often be done as a final effort.
This is particularly true in JavaScript, where multithreading isn’t as widely understood by the community as other languages.
Adding threading support may require heavy changes to an application, which means your effort-to-performance gains will likely be higher if you first hunt down other code inefficiencies first.

## When to Use

- Embarrassingly parallel:

This is a class of problems where a large task can be broken down into smaller tasks and very little or no sharing of state is required.

- Heavy math:

Another characteristic of problems that are a good fit for threads are those that involve a heavy use of math, aka CPU-intensive work.

- MapReduce-friendly problems:

MapReduce is a programming model that is inspired by functional programming. This model is often used for large scale data processing that has been spread across many different machines.

- Graphics processing:

A lot of graphics processing tasks also benefit from multiple threads. Much like the Game of Life problem, which operates on a grid of cells, images are represented as a grid of pixels.

## Summary of Caveats

- Complexity:

Applications tend to be more complex when using shared memory. This is especially true if you are hand-writing calls with Atomics and manually working with SharedBufferArray instances.

- Memory overhead:

There is additional memory overhead with each thread that is added to a program. This memory overhead is compounded if a lot of modules are being loaded in each thread.

- No shared objects:

The inability to share objects between threads can make it difficult to easily convert a single-threaded application to a multithreaded one.

- No DOM access:

Only the main thread of a browser-based application has access to the DOM. This can make it difficult to offload UI rendering tasks to another thread.

- Modified APIs:

Along the same lines as the lack of DOM access, there are slight changes to APIs available in threads. In the browser this means no calls to `alert()`, and individual worker types have even more rules, like disallowing blocking `XMLHttpRequest#open()` requests, localStorage restrictions, top-level await, etc.

- Structured clone algorithm constraints:

There are some constraints on the structured clone algorithm that may make it difficult to pass certain class instances between different threads.

- Browsers require special headers

When working with shared memory in the browser via SharedArrayBuffer, the server must supply two additional headers in the request for the HTML document used by the page.

- Thread preparedness detection

There is no built-in functionality to know when a spawned thread is ready to work with shared memory. Instead, a solution must first be built that essentially pings the thread and then waits until a response has been received.
