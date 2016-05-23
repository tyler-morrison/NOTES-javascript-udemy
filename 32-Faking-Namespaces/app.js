// By default, these two variables would overwrite each other; however, we can use objects to fake namespaces...
// var greet = 'Hello!';
// var greet = 'Hola!';

// To fix this, we can use empty objects as a sort of basic wrapper for each language
var english = {};
var spanish = {};

// Now, these two properties will not collide with one another...
english.greet = 'Hello!';
spanish.greet = 'Hola!';

console.log(english.greet);
