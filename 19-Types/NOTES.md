# Types and Javascript

*Dynamic Typing* = You do not explicitly tell the JS engine what type of data a variable holds, it figures it out while the code executes. Therefore, variables can hold different types of values during execution.

This is different from other programming languages like Java or C#, which use *Static Typing*. For example, `bool isNew = 'hello'; // Results in an error`.

## Dynamic Typing Example
```
var isNew = true; // no errors
isNew = 'yup!';
isNew = 1;
```

This can make Javascript very powerful, but can also lead to frustrations if you don't pay careful attention to your typing.

## Primitive Types

*Primitive Type* = A type of data that represents a single value. That is, NOT an object. There are six (6) primitive types...

1) *Undefined* = Represents a lack of existence (leave this for the engine to set).
2) *Null* = Also represents a lack of existence (can be used when you want to set a variable to no value).
3) *Boolean* = True or false.
4) *Number* = In JS, there's only one number type - *Floating point*. You can fake integers, etc. but there's always some decimals, which can make math weird.
5) *String* = A sequence of characters.
6) *Symbol* = Used in ES6, but is not yet fully supported.
