// By Value (primitives)
var a = 3;
var b;

// Here the copy of the value is made...
b = a;

// This means that after line 6, we can actually change one of the values and they will not stay in parity...
a = 16;

console.log(a);
console.log(b);

// By Reference (all objects - including functions)
var c = {
    greeting: 'hi'
};
var d;

// Here the reference is made...
d = c;

c.greeting = 'hello'; // Mutation here...

console.log(c);
console.log(d);

// By Reference (even as parameters)
function changeGreeting(obj) {
    obj.greeting = 'Hola'; // Mutation here...
}

changeGreeting(d);

console.log(c);
console.log(d);

// SPECIAL CASE: Equals operater sets up new memory space...
c = {
    greeting: 'howdy'
}

console.log(c);
console.log(d);
