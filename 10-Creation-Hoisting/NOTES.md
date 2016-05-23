# Creation and 'Hoisting'

The reason JS behaves the way it does - making variables and functions available for use, even when written later in the code - boils down to *the Execution Context being created in two phases*...

## PHASE 1 - Creation Phase

* Create Global Object
* Create 'this'
* Create Outer Environment
* Setup Memory Space for Variables & Functions "Hoisting"

In this phase, the parser recognizes where you have created variables and functions. It's not actually moving code. It just means that before *your code* gets executed line by line, the JS Engine has already setup memory space for the variables and functions that you intend to run.

When functions are 'hoisted' into memory, the function *in its entirety* is being placed into memory space.
  - The function
  - Its name
  - The code being executed

However, when it comes to variables, they operate differently. Assignments aren't set until later during the Execution Phase. So instead, it puts a placeholder - 'undefined'. Essentially, "I don't know what this is yet."

All variables are initially setup as 'undefined'.

**It is a bad idea to rely on 'hoisting' in your code** You can run into trouble when you realize a value is 'undefined' when you're actually expecting a value.
