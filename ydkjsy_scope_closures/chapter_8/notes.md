# The Module Pattern

## What is a Module?

A module is a collection of related data and functions characterized by a division between hidden *private* and *public* accessible details, usually called the "public API".

## Node CommonJS Modules

CommonJS modules behave as singleton instances, similar to the IIFE module definition style presented before. No matter how many times yo `require(...)` the same module, you just get additional references to the single shared module instance.

## Modern ES Modules (ESM)

The ESM format shares several similarities with the *CommonJS* format. ESM is file-base, and module instances are singletons, with everything private by *default*. One notable difference is that ESM files are assumed to be **strict-mode**, without needing a `"use strict"` pragma at the top.
