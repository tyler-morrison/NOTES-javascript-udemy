# Function Constructors .prototypes

When you set the function constructor using ‘new’, the JS engine actually creates the prototype for you. Anytime you create a function object, there’s another property — prototype — that is available by default that you can, and should, use.

Unless you use your function as a function constructor, the ‘prototype property’ is never used. It only gets accessed when you use the ‘new’ keyword. **The ‘prototype property’ of the function is not the prototype OF the function. It’s the prototype of any objects CREATED if you use the function as a function constructor.**

Thus, any objects you create using a function constructor using the ‘new’ keyword will have *both* the properties and methods that were included in the function constructor, **as well as the ‘.prototype’.**

Therefore, you can add something to the prototype later, on-the-fly, and it will be accessible to all of the objects that used said function constructor.

With really good Javascript, you will often see that **properties are attached to the function constructor**, while **methods are attached to the prototype.** There is nothing technically wrong with attaching methods to the function constructor, but recall that functions *are* objects — they take up memory space. When you add a given method to the function constructor, every new object will then get its *own copy and waste memory*, rather than sharing the method.
