# The (Not So) Secret Lifecycle of Variables

## When Can I Use a Variable?

When a variable being visible from the beginning of the scope, even though its declaration may appear further down in the scope, is called **hoisting**.

When a `function` declaration's name identifier is registered at the top of its scope, it's additionally auto-initialized to that function's reference, is called **function hoisting**.

## Loops

All the rules of scope (including "re-declaration" of `let` created variables) are applied *per scope instance*, In other words, each time a scope is entered during execution, everything resets.

## Uninitialized Variables (TDZ)

The TDZ is the time window where a variable exists but is still uninitialized, and therefore cannot be accessed in any way.

There's a common misconception that TDZ means `let` and `const` do not hoist. The actual difference is that `let/const` declarations do not automatically initialize at the beginning of the scope.
