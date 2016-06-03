# Closures

Even after a function has been executed an popped off of the Execution Stack, any functions created within will still have an external reference to what is left in memory. Although a function may be gone, what's left in memory from its execution context will still remain.

## Example 1
```javascript
function greet(whattosay) {
    return function(name) {
        console.log(whattosay + ' ' + name);
    }
}

var sayHi = greet('Hi');
sayHi('Tyler'); // 'Hi Tyler'
```

### Execution Stack
* ‘sayHi’ Execution Context (name ‘Tyler’)
* ~~‘greet’ Execution Context~~ (whattosay ‘Hi’)
* Global Execution Context (sayHi())

We say that the execution context has **closed in** its outer variables that inner functions are supposed to have access to. Closures aren’t anything that you type or explicitly tell JS to do, they are a feature of the native programming language.

It doesn’t matter *when* we execute a function, Javascript will make sure that a function's scope is always in tact and we can access to the variables we should, regardless of whether or not the outer function has terminated.

## Example 2
```javascript
function buildFunctions() {
    var arr = [];

    for (var i = 0; i < 3; i++) {
        arr.push(
            function() {
                console.log(i);
            }
        )
    }

    return arr;
}

var fs = buildFunctions();

fs[0](); // 3
fs[1](); // 3
fs[2](); // 3
```

### Execution Stack
* ‘fs[i]’ Execution Context
* ~~‘buildFunctions’ Execution Contexts~~ (i 3) (arr[f0,f1,f2])
* Global Execution Context (buildFunction(), fs[])

In the example above, once we get to the array push, the `console.log(i)` is still not being executed. Rather, it is simply being stored as a function object within the array that is not being invoked.

As each `fs()` is executed, it keeps the same outer environment that was left in memory (also known as *“free variables”*) at the end of `buildFuncions()`. Because of closure, each of the invoked fs lines shares the same i value of 3.

Essentially they all share the same parent. Just like if you had three literal children, whom you asked “How old is your father?” Each child would give you the same answer, not tell you how old he was when they were each born.
