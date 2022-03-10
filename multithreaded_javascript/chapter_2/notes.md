# Browsers

## Dedicated Workers

It’s possible for a JavaScript environment to spawn more than one web worker, and a given web worker is free to spawn even more web workers.

## Shared Workers

A shared worker is another type of web worker, but what makes it special is that a shared worker can be accessed by different browser environments, such as different windows (tabs), across iframes, and even from different web workers.

A shared worker can only be accessed by JavaScript running on the same origin.

## Service Workers

Service worker isn’t associated with just a single web page but potentially multiple pages, it’s more similar to a shared worker than to a dedicated worker.

A service worker can exist and run in the background even when a page isn’t necessarily still open. Service workers are primarily intended for performing cache management of a website or a single page application.

## Message Passing Abstractions

#### The RPC Pattern

The RPC _(Remote Procedure Call)_ pattern is a way to take a representation of a function and its arguments, serialize them, and pass them to a remote destination to have them get executed.

#### The Command Dispatcher Pattern

The command dispatcher pattern provide a way to take a serialized command, find the appropriate function, and then execute it, optionally passing in arguments.
