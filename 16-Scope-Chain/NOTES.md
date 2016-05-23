# Scope Chain

Within the sample code, it's easy to think function b() will console out 'undefined' or 2, but you have to consider it's *lexical context*. As discussed earlier, it does not matter whether function a() comes before or after function b(), the execution stack will not be changed.

**HOWEVER, the JS engine does care about the lexical environment, regarding the outer reference for each execution context.** Thus, when you run a line of code within a particular execution context, if the variable is not found, it will look for the *outer reference* somewhere down below it in the execution stack. That outer reference is dependent on where the function sits lexically (ex. side by side or one inside another).

Execution contexts are created based on invocation; however, when this occurs, the JS engine creates an execution context and a corresponding outer reference *based on where your function was physically written*. This stack, or chain, of events is called the Scope Chain.
