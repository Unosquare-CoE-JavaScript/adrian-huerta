# Shared Memory

## SharedArrayBuffer and TypedArrays

Traditionally the JavaScript language didn’t really support interaction with binary data. Sure, there were strings, but they really abstracted the underlying data storage mechanism. There were also arrays, but those can contain values of any type and aren’t appropriate for representing binary buffers.

The Node.js runtime is, among other things, capable of reading and writing to the filesystem, streaming data to and from the network, and so on. Such interactions are not only limited to ASCII-based text files but can also include piping binary data as well.

Instances of ArrayBuffer and SharedArrayBuffer represent a buffer of binary data that is of fixed length and cannot be resized.

## Atomic Methods for Data Manipulation

Atomic operations are very important in computing, especially when it comes to distributed computing. Databases, which may have many client connections, need to support atomic operations.

JavaScript provides a global object named **_Atomics_** with several static methods available on it. This global follows the same pattern as the familiar Math global. In either case you can’t use the new operator to create a new instance, and the available methods are stateless, not affecting the global itself. Instead, with Atomics, they’re used by passing in a reference to the data that is to be modified.

## Data Serialization

Buffers are extremely powerful tools. That said, working with them from an entirely numeric point of view can start to get a little difficult. Sometimes you’ll need to store things that represent nonnumeric data using a buffer. When this happens you’ll need to serialize that data in some manner before writing it to the buffer, and you’ll later need to deserialize it when reading from the buffer.
