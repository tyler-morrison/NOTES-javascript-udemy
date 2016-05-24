// Any function used to construct an object is called a ‘function constructor’
// It is important to remember that aside from creating new objects, function constructors work just like regular functions...
function Person(firstname, lastname) {
    console.log(this);
    this.firstname = firstname;
    // Can still use the old pattern for setting defaults that we learned earlier.
    this.lastname = lastname || 'Liebowitz';
    console.log('This function is invoked');

    // This function operates like a ‘class’ as long as you don’t attempt to return any value...
    // return {
    //     greeting: 'I got in the way.'
    // };
}

// This is one of the RIGHT ways to create new objects and prototypes.
var john = new Person('John', 'Doe');
var jane = new Person('Jane');
console.log(john);
console.log(jane);
