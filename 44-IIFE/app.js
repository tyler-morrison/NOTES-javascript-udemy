// Example of basic function statement that will require future invocation, via `greet()`
function greet(name) {
    console.log('Hello ' + name);
}

// Example of function expression...
var greetFunc = function(name) {
    console.log('Hello ' + name);
};

// Example of Immediately Invoked Function Expression (IIFE)...
var greeting = function(name) {
    return 'Hello ' + name;
}('Tyler');

console.log(greeting);

// Example of an anonymous IFFE...
var firstname = 'Tyler';

(function(name) {
    var greeting = 'Inside IFFE: Howdy';
    console.log(greeting + ' ' + name);
}(firstname));
