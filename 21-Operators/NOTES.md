# Operators

*Operators* = A special function that is written differently. Generally, operators take two parameters and take one result.

## Operators are Built-In Functions
`var a =  3 + 4;`

The '+' above is an operator and is actually processed as a function by the JS engine. Similar to `function add(a,b) { return // add the two #s }`, but replacing the 'add' function name with '+'. However, this would be very tedious to use.

Instead, the JS engine provides the ability to write *infix notation* - the function name can sit **between** the two parameters. Instead of `+(3, 4)` (known as *prefix notation*) or `3 4+` (the *postfix notation* used in some old-school accounting languages), you can write `3 + 4`.

## Operator Precedence and Associativity

*Operator Precedence* = Which operator function gets called first. The HIGHER precedence will win.
*Operator Associativity* = What order an operator is called. Left-to-Right or Right-to-Left.

## Coercion

*Coercion* = Converting a value from one type to another, due to Javascript's nature of being dynamically typed.

`var a = 1 + 2; // 3`
`var a = 'hello' + ' world'; // 'hello world'`
`var a = 1 + '2'; // '12'`

Coercion is essentially the result of the JS developers trying to make a 'best guess'. Under the hood, 1 and '1' look very different in the memory. When the JS engine encounters two different types, it chooses to coerce one of the values. Understanding this is important so you know how to debug things if your results look a little strange.

It is important to note that not all values can be coerced. For example, `Number(undefined); // NaN` or "Not a Number". However, `Number(null); // 0` which can be very strange.

## Comparison Operators

`console.log(1 < 2 < 3); // true` This is pretty much as expected, but not from the 'human' perspective. Instead, we're getting `true < 3` as an immediate evaluation of the first operator. Then coercion converts true to a number, 1. Thus the final evaluation is `console.log(1 < 3); // true`.

`console.log(3 < 2 < 1); // true` **IMPORTANT:** This is true because it first boils down to `false < 1` due to the left-to-right associativity of the '<' operator. Also, due to coercion 'false' is converted to the number 0. Therefore, the final step is really running `console.log(0 < 1); // true`.

## Loose Equality vs Strict Equality

`console.log(3 == 3); // true`;
`console.log('3' == 3); // true`; **IMPORTANT:** The Equality Operator coerced the string on the left to become a number, before evaluating as true.

These are only a few examples of the strange comparisons that some people consider as a flaw in the language. Coercion makes sense in some settings, but not in others, which can lead to confusion and bugs. To solve this, we can use *Strict Equality '===' or Strict Inequality '!=='*

Strict Equality / Inequality compares to values, but will **NOT** try to coerce the values. Thus, `console.log(3 === 3); // true`, but `console.log('3' === 3); // false`.

**IMPORTANT: Try to make a best practice of comparing two values of the same type, whenever possible. However, in over 90% of cases, you can just as easily use Strict Equality to limit any bugs from coercion.**
