# Function Constructors - ‘new’

There are other ways to build objects, aside from function constructors.

## History of Javascript

Back when JS was first being developed, there were programming language ‘wars’ - similar to Apple vs Microsoft. It was written for use within web browsers down the road and was named ‘Javascript’ to attract Java developers because they were common at the time.

Although ‘Javascript’ sounds like Java and even *looks* a little like Java, the two are very different. In this same vein, one of the elements that was added to the code to market JS to Java developers was this line of code...

```
var john = new Person();
```

Developers of the day were used to creating objects with this syntax. You used the ‘new’ keyword plus a class — a class is not an object but it *defines* an object. **Javascript doesn’t really have classes like you would encounter in Java or C++.** Using the ‘new’ keyword is bad, but it definitely has some downsides.

**‘new’ is actually an operator.** When used it does some interesting things...
* First, an empty object is created.
* Then the associated function (‘class’) is invoked.
* When the function is called, it changes the address of the ‘this’ keyword to point to the empty object that was just created.

*Function Constructors* = A normal function that is used to construct objects. The ‘this’ variable points to a new empty object, and that object is returned from the function automatically.

**It is important not to return any values in the constructor function you invoke.**
