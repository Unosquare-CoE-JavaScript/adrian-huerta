# Advances Shared Memory

## Atomic Methods for Coordination

these methods are modeled after a feature available in the Linux kernel called the **_futex_**, which is short for fast userspace mutex. Mutex itself is short for **_mutual exclusion_**, which is when a single thread of execution gets exclusive access to a particular piece of data. A mutex can also be referred to as a **_lock_**, where one thread locks access to the data, does its thing, and then unlocks access, allowing another thread to then touch the data.

A futex is built on two basic operations, one being **“wait”** and the other being **“wake.”**

## Timing and Nondeterminism

In order for an application to be correct it usually needs to behave in a deterministic fashion. `The Atomics.notify()` function accepts an argument count that contains the number of threads to wake up.

## Atomic and Events

At the heart of JavaScript lies the event loop, which allows the language to create new call stacks and handle events. It’s always been there and we JavaScript engineers have always depended on it.

This is true for both JavaScript that runs in the browser, where you might have jQuery that listens for a click event in the DOM, or JavaScript that runs on the server, where you might have the Fastify server that waits for an incoming TCP connection to be established.
