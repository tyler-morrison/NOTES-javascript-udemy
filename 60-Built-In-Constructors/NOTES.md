# Built-In Function Constructors

Javascript comes with certain function constructors out of the box — Number, String, etc. These constructors do not create the actual primitive, instead they create an *object* that contains the “boxed in” primitive value.

This gives you access to a whole lot of new properties and methods. In some cases, the JS engine will wrap up a primitive for you, in order to give you access to those features.

This can be very useful if you were building a library and wanted to add a feature to the primitives, because you would only need to add to the given prototype. You have to be careful not to overwrite an existing method, but it can be very useful.

## DANGEROUS ASIDE

Built-in constructors for primitives are also dangerous and should be used sparingly.

### Example
```javascript
var a = 3;             // First we set ‘a’ to a primitive.
var b = new Number(3); // Then we set ‘b’ to an object via Number();.
a == b                 // true - due to coercion.
a === b                // false - because the primitive and object cannot be equal.
```

Herein lies the danger. By using built-in function constructors to create primitives, you aren’t *really* creating a primitive. This can cause some very strange errors in the future.

**It is best to simply stay away from built-in function constructors.** Instead, use literals as often as possible to avoid running into the type errors that we see above.

For dates, check out the [MomentJS](http://momentjs.com) library.
