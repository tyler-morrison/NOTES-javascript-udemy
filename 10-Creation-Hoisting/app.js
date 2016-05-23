// When functions are called before their respective references are defined...
b();
console.log(a);

// RESULT:
// 'Called b!'
// undefined

// 'Hoisting' is typically explained as if the JS engine physically moves the variable declaration and functions to the top of the document before interpretting, regardless of where you put them.
// However, in this case, we can see that 'a' was not moved above. Otherwise, we would not have 'undefined'.

// Instead,

var a = 'Hello World!';

function b() {
    console.log('Called b!');
}

// When you call function and console after their respective references have been defined, everything will output as expected...
//
// b();
// console.log(a);
// 
// RESULT:
// 'Called b!'
// 'Hello World!'
