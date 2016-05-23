var person = {
    firstname: 'John',
    lastname: 'Doe',
    getFullName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var logName = function(lang1, lang2) {
    // Will not work by default because the getFullName method is bound to the person object
    // The method will not be available in the Global Context like logName();
    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('---------------------');
};

// bind() actually sets up a NEW copy of logName and attaches the ‘this’ to person...
var logPersonName = logName.bind(person);

logPersonName('en');

// call() is the same as invoking with parentheses; however, you can also pass it parameters.
// Unlike bind(), call simply invokes the function without copying.
logName.call(person, 'en', 'es');

// apply() is almost identical to call(), except for apply() requires an ARRAY of parameters instead of a normal list.
// An array can be more useful in some cases, especially in a mathematical context.
logName.apply(person, ['en', 'es']);

// Function borrowing...
var person2 = {
    firstname: 'Jane',
    lastname: 'Doe'
};

console.log(person.getFullName.apply(person2));

// Function currying...
function multiply(a, b) {
    return a * b;
}

var multiplyByTwo = multiply.bind(this, 2);

console.log(multiplyByTwo(5));
