var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function() {
        // ‘this’ will always refer to the object that calls the method, NOT the prototype...
        return this.firstname + ' ' + this.lastname;
    }
};

var john = {
    firstname: 'John',
    lastname: 'Doe'
};

// NEVER EVER USE THE FOLLOWING METHOD!!!
// FOR DEMONSTRATION PURPOSES ONLY!!!
john.__proto__ = person;

console.log(john.getFullName());
console.log(john.firstname);

var jane = {
    firstname: 'Jane'
};

// NEVER EVER USE THE FOLLOWING METHOD!!!
// FOR DEMONSTRATION PURPOSES ONLY!!!
jane.__proto__ = person;

console.log(jane.getFullName());
