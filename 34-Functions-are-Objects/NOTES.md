# Functions ARE Objects

*First Class Functions* = Everything you can do with other types - objects, strings, booleans, etc. - you can do with functions.

* You can assign them to variables.
* Pass them around.
* Create them on the fly.

# What Does a Function Object Look Like?

It resides in the memory just like an object, where you can attach primitives, objects, and functions to it. However, it also has a few special properites...
* Name(optional) - It can be named or anonymous.
* Code - Where the actual lines of code sit. It isn't like the code you write *is* the function. Rather, it's actually a property of the function object. _It is also invocable._
