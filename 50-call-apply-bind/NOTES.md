# call(), apply(), and bind()

Within our execution context, we have already discussed several of the given components — variable environment, outer environment, and ‘this’. We’ve already seen how it can either be connected to the Global Context or within a method.

We already know that a function is a special type of object. It contains...
* Name property — Optional. Can be anonymous.
* Code property — Contains the code to be executed.

...they also have access to several special methods...
* call() — Invokes the function and lets you define the ‘this’ reference.
* apply() — Same as call(); however, it requires parameters to be listed within array.
* bind() — Creates a **copy** of the function and allows you to set some parameters by default.

*Function Currying* = Creating a copy of a function but with some preset parameters. This is very useful in mathematical situations. You can create some fundamental functions and then bind() on to set default parameters.
