# Using Closures

## Live Link, Not a Snapshot

Closure is actually a live link, preserving access to the full variable itself. We´re not limited to merely reading a value; the close-over a variable can be updated and re-assigned as well.

By closing over a variable in a function, we can keep using that variable as long as that function reference exists in the program.

## Observable Definition

Closure is observed when a function uses variables, from outer scopes even while running in a scope where those variables would not be accessible.

- Must be a function involved.
- Must reference at least one variable from an outer scope.
- Must be invoked in a different branch of the scope chain from the variables.

## Closure to Closure

- Observational: Closure is a function instance remembering its outer variables even as that function is passed to and invoked in other scopes.
- Implementational: Closure is a function instance and its scope environment preserved in-place while any references to it are passed around and invoked from other scopes.


