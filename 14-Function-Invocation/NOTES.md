# Function Invocation

_Invocation = Running or calling a function_
In Javascript, we invoke a function by using parenthesis.

## Example 1
```
function b() {}

function a() {
  b();
}

a();
```

*Creation Phase* - JS engine will setup Global Object, 'this', then setup memory for `b()` and `a()`.

*Execution Phase* - Then engine will go line by line until `a();`

At this point a new 'execution context' will be created and placed in the execution stack. Just like the term 'stack' implies, the execution context at the top of the stack is the next up to be run.

At this point the Creation / Execution phases are repeated for the more granular context. Variables are created and code is executed. *If another function is contained within, the engine will stop at the invocation line and add yet another context to the stack.*

### Exectution Stack
* b() Execution Context
* a() Execution Context
* Global Execution Context

When the stack is complete, the complete context will be popped off the stack and the engine will proceed downward.

## Example 2
_IMPORTANT: Lexically, the order of functions do not matter._ Functions are all placed into memory during the Creation phase. The order of invocation is what is most important.

```
function a() {
  b();
  var c;
}

function b() {
  var d;
}

a();
var d;
```

### Execution Stack
* b() Execution Context
* a() Execution Context
* Global Exectution Context
