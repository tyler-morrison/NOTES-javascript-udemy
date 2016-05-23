// This is the same as var person = new Object();
// It is NOT and operator, but shorthand. It also lets you set a lot of name / value pairs on essentially one line...
var Tyler = {
    firstName: 'Tyler',
    lastName: 'Morrison',
    address: {
        street: '315 Arlington Ave.',
        city: 'Charlotte',
        state: 'NC'
    }
};

// This is even more powerful when you realize that you can create an object on the fly, just like any other variable...
function greet(person) {
    console.log('Hi ' + person.firstName);
}

greet(Tyler);
// Here, an object is being created on the fly...
greet({
    firstName: 'Mary',
    lastName: 'Doe'
});

Tyler.address2 = {
    street: '123 Main St.',
    city: 'Matthews',
    state: 'NC'
}

console.log(Tyler);
