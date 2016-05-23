// IIFE
var firstname = 'John';

(function(name) {

    var greeting = 'IFFE context: Hello';
    console.log(greeting + ' ' + name);

}(firstname)); // IIFE

console.log(greeting);
