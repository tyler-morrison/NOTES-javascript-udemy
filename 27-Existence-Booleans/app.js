var a;

// Some code that goes out to internet and looks for a value. Then we can use a basic if statement to check...
//
// IMPORTANT: This will not be useful if there is a possibility that 'a' might return 0.
// Boolean(0); // false as well, so you might get a valid value, but accidentally return a false evaluation.
//
// You can fix this with if (a || a === 0) {...} because the Logical OR Operator has a lower precedent than Strict Equality. Then you get `false || true` after coercion, which will evaluate true.

if (a) {
    console.log('Something was found for "a".');
} else {
    console.log('Nope!');
}
