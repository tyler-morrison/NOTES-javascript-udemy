# ES6 and Classes

Classes in other programming languages are extremely popular techniques for defining objects. JS doesn’t support classes in its current state; however, they will be introduced with ES6.

```
class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  greet() {
    return 'Hi ' + firstname;
  }
}

var john = new Person('John', 'Doe');
```

The new constructor will act a lot like the function constructors we’ve already seen.

**It is important to remember that, unlike other programming languages where ‘class’ is a template and NOT an object, the Javascript ‘class’ is actually an object.** This method is much better than function constructors, but in some ways prototypal inheritance is much simpler and more powerful.

# How to Set Prototype in ES6

```
class InformalPerson extends Person {
    constructor(firstname, lastname) {
        super(firstname, lastname);
    }

    greet() {
        return 'YO ' + firstname;
    }
}
```

*‘extends’* keyword sets the prototype and *super* calls the constructor. It’s often described as syntactic sugar.

*Syntactic Sugar* = A different way to type something that doesn’t change how it works under the hood.
