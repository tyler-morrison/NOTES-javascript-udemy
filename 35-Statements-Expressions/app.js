var a;

a = 3;

1 + 2;
// Both of the above are expressions, because they return values. However, the second expressions will not save the value to memory.

// A statement, on the other hand, does no work. There is an expression contained within; however, the statement just does work...
if (a === 3) {
    // Some code...
}

// In JS, we know that functions are objects. Thus, there can be BOTH function statements and function expressions...

greet();
// This is a function *statement*. When it's evaluated, it doesn't result in a value until it is executed. When this code is executed, it will be placed into memory, but no value will be created...
function greet() {
    console.log('hi');
}

// This is a function *expression*. We're going to create a function object on the fly and assign it some code. When this code is executed, it will result in the value of a new function object...
var anonymousGreet = function() {
    console.log('hi from anonymous');
};

// In this case, there is no Name property. But that's okay because our variable name will be used as the address. To invoke this code we use...
// IMPORTANT: Knowing how the Creation Phase works, it's important to remember that function expressions CANNOT be hoisted. You cannot invoke `anonymousGreet` from the Global Context because it will initially be loaded as 'undefined'. Until you assign it the function object on 22, when you can invoke the function...

anonymousGreet();

// Because of JS special properties, we can create variables on the fly. Coupled with our knowledge of functions as object, we can also create a function on the fly - just as if it were a string literal, etc.
log(function() {
    console.log('Hi function on fly');
});

// We now have an `a` property pointing at the function and can invoke with `a();`
function log(a) {
    a();
}
