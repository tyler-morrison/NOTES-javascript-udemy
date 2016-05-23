// JS Engine sees that b(); is not sitting INSIDE any other contexts.
// Thus, its outer reference is the Global Context.
// RESULT: console.log(myVar) = 1
function b() {
    console.log(myVar);
}

function a() {
    // When b(); gets placed within a(); the lexical environment is changed and a(); becomes the outer reference.
    // RESULT: console.log(myVar) = 2
    //
    // function b() {
    //     console.log(myVar);
    // }
    //
    // IMPORTANT
    // If myVar did not exist within a(); it would jump up another context and go to the Global Context.
    var myVar = 2;
    b();
}

var myVar = 1;
a();

// IMPORTANT
// When b(); is placed within a(); it is no longer available at the global level.
// myVar and a(); will both be added to the Global Object during the Creation Phase; however, the JS engine does not dig deeper into any functions.
//
// b(); would result in Uncaught ReferenceError b is not defined.
