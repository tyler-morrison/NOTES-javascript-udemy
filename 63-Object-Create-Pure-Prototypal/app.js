var person = {
    firstname: 'Default',
    lastname: 'Default',
    greet: function() {
        return 'Hi ' + this.firstname; // You have to use ‘this’ to reference the object, since objects do not create new execution contexts.
    }
};

// Prototypal inheritance means that the line below simply creates a blank object w/ prototype...
var john = Object.create(person);

// To override defaults, you simply declare them afterward...
john.firstname = 'John';
john.lastname = 'Doe';

console.log(john);

// Super simple to create and copy objects off of other objects...
var jim = Object.create(john);
console.log(jim);
