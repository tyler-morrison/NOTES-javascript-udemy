# Functions, Context, and Variable Environments

*Variable Environment* = Where the variables live.
How they relate to one another inside the memory.

## Example 1
```
function b() {
  var myVar
}

function a() {
  var myVar = 2;
  b();
}

var myVar = 1;
a();
```

### Execution Stack
* b() Execution Context    -> myVar = undefined
* a() Execution Context    -> myVar = 2
* Global Execution Context -> myVar = 1

Because of each function's scope, myVar is defined three times, but they each have unique values.
