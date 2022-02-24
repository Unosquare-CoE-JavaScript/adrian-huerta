# Illustrating Lexical Scope

## A conversation among friends

- **Engine:** Responsible for start-to-finish compilation and execution of our JavaScript program.
- **Compiler:** Handles all the dirty work of parsing and code-generation.
- **Scope Manager:** Collects and maintains a lookup list of all the declared variables/identifiers, en enforces a set of rules as to how these are accessible to currently executing code.

## Nested Scope

Each scope automatically has all its identifiers registered at the start of the scope being executed, this is called **variable hoisting**.


