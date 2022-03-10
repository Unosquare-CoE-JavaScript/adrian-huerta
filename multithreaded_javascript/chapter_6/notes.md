# Multithreaded Patterns

## Thread Pool

The thread pool is a very popular pattern that is used in most multithreaded applications in some form or another. Essentially, a _thread pool_ is a collection of homogeneous worker threads that are each capable of carrying out CPU-intensive tasks that the application may depend on.

#### Pool Size

There are essentially two types of programs: those that run in the background, like a system daemon process, which ideally shouldn’t consume that many resources, and programs that run in the foreground that any given user is more likely to be aware of, like a desktop application or a web server.

## Mutex: A Basic Lock

A mutually exclusive lock, or mutex, is a mechanism for controlling access to some shared data.
It ensures that only one task may use that resource at any given time. Here, a task can mean any sort of concurrent task, but most often the concept is used when working with multiple threads, to avoid race conditions.

## Streaming Data with Ring Buffers

Many applications involve streaming data. For example, HTTP requests and responses are usually presented via HTTP APIs as sequences of byte data coming in as chunks as they are received.
In network applications, data chunks are size-constrained by packet sizes.

A ring buffer is an implementation of a first-in-first-out (FIFO) queue, implemented using a pair of indices into an array of data in memory. Crucially, for efficiency, when data is inserted into the queue, it won’t ever move to another spot in memory.

## Actor Model

The actor model is a programming pattern for performing concurrent computation that was first devised in the 1970s. With this model an actor is a primitive container that allows for executing code.

The actor model is designed to allow computations to run in a highly parallelized manner without necessarily having to worry about where the code is running or even the protocol used to implement the communication.

#### Pattern Nuances

Actors are able to process each message, or task, that they receive one at a time. When these messages are first received, they sit in a message queue, sometimes referred to as a mailbox.

#### Relating to JavaScript

The actors that exist as first-class citizens in languages such as Erlang can’t be perfectly reproduced using JavaScript, but we can certainly try.
There are likely dozens of ways to draw parallels and implement actors, and this section exposes you to one of them.
