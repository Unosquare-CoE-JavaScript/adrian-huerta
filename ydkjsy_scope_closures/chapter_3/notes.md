# The Scope Chain

## Shadowing

Variable shadowing occurs when a variable of an inner scope is defined with the same name as variable in the outer scope. In the inner scope, both variables' scope overlap.

It might be useful to think of *variable shadowing* as a sort of protection mechanism that has two effects:

1. It prevents inner scope to access variables defined in the outer scope.
2. It prevents inner scope to modify or reassign variables defined in the outer scope.

## Illegal Shadowing

`let` can shadow `var`, but `var` cannot shadow `let`.

**Note:** `let` (in an inner scope) cal *always* shadow an outer scope's `var`. `var` (in an inner scope) can only shadow an outer scope's `let` if there is a function boundary in between.

