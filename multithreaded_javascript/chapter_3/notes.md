# Node.js

## Before We Had Threads

Prior to threads being available in Node.js, if you wanted to take advantage of CPU cores, you needed to use processes. If shared memory isn’t important (and in many cases it isn’t!) then processes are perfectly able to solve these kinds of problems for you.

## The worker_threads Module

Node.js’s support for threads is in a built-in module called **_worker_threads_**. It provides an interface to threads that mimics a lot of what you’d find in web browsers for web workers.

## Worker Pools with Piscina

Many types of workloads will naturally lend themselves to using threads. In Node.js, most workloads involve processing an HTTP request.

These types of operations involve submitting a single task to a thread and waiting for a result from it.
