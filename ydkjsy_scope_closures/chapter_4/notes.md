# Around the Global Scope

## Globals Shadowing Globals

An unusual consequence oh the difference between a global variable and a global property of the same name is that, within just the global scope itself, a global object property can be shadowed by a global variable.

## Web Workers

Web Workers are a web platform extension on top of browser-JS behavior, which allows a JS file to run in a completely separate thread from the thread that's running the main JS program.

## Node

The only way to define global variables in Node is to add properties to another of Node's automatically provided **globals** which is called `global`. `global` is a reference to the real *global scope object*, somewhat like using `window` in a browser JS environment.

## Global This

ES2020 defined a standardized reference to the global scope object, called `globalThis`.

