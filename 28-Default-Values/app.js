function greet(name) {
    // ES6 will have new language to set default values; however, the Logical OR Operator is a great way to currently handle this issue.
    // This is the product of OR trying to return the first value that can be coerced to true.
    //
    // If nothing exists the comparison would be undefined || 'some string'.
    // Because 'undefined' will only be coerced to false, the string takes precedent.
    //
    // If two values are given 'hi' || 'hello', the OR will return the first value that is coercable to true.
    //
    // This also relies on the Logical OR Operator having a higher operator Precedence than Equal.
    // Here again, you have to be careful if there is a chance of passing 0 as a parameter.
    name = name || 'User';
    console.log('Hello ' + name);
}

greet();
console.log(libraryName);
