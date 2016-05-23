# Scope, ES6, and `let`

*Scope* = Where a variable is available in your code. Also looking at whether it's truly the same variable, or a new copy.

## Upcoming Changes with ES6

The new term `let` is being introduced as a way to declare variables; however, it's not necessarily replacing `var`. However, `let` allows Javascript to do something called *block scoping*.

### Example 1
```
if (a > b) {
  let c = true;
}
```

In the example above `let` declares a variable, just like you would do with `var`. During the Creation Phase, that variable is still placed into memory and set to 'undefined'; however, _you're not allowed to use it until the line of code is run during the Execution Phase that actually declares the value._

### Example 2
```
console.log(c);

if (a > b) {
  let c = true;
}
```

The code above would result in an error, because you are attempting to use 'c' before it has been declared. The variable is in memory, but the engine won't allow it.

Also, it is declared inside of a block (if statement, for loop, etc.). Because it is _block scoped_ the variable is only available while that block is running.
