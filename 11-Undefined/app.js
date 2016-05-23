// If 'var a' is not included, the variable will never be entered into the memory space during the Creation Phase
var a;

// Here the context saw 'a' and set it up in memory...
console.log(a);
// Thus, you get 'undefined' from the line above.

function define_test(a) {
    if (a === undefined) {
        console.log('a is undefined');
    } else {
        console.log('a is defined!');
    }
}

define_test(a);

a = "Hello World!";

console.log(a);

define_test(a);
