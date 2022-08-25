# Introduction

## What are Threads?

A thread is just like a process, except that it shares memory space with the process that belongs to. A process can have many threads, and each one has its own instruction pointer.

## Concurrency Versus Parallelism

**_Concurrency:_** Tasks are run in overlapping time.
**_Parallelism:_** Tasks are run at exactly the same time.

Concurrency can be achieved without parallelism because the time frames that the task run in can be overlapped. For task to be running with parallelism, they **must** be running at _exactly the same time_. Generally, this means they must be running on separate CPU cores at exactly the same time.

## Single-Threaded JavaScript

Most javascript code is written in an event-oriented manner operating on a single execution thread. As various events like user interactions or I/O happen, they trigger the execution of functions previously set to run upon these events. These functions are typically called callbacks and are at the core of how asynchronous programming is done in Node.js and the browser.

## Hidden Threads

JavaScript code may run, at least by default in a single-threaded environment, that doesn't mean the process running your code is single-threaded.

You should never assume that just because javascript is single-threaded that only one thread will be used by your javascript application.
