# Functions and 'this'

Recall that when a function is invoked, a new Execution Context is created. During the Creation Phase of the new Execution Context a variable environment is created, an outer environment is reference, and then a new 'this' is created automatically.

The new 'this' will be pointing at a new object, depending on how the function is invoked. In some cases, the 'this' keyword might get changed...
