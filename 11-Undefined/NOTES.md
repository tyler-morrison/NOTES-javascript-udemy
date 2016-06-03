# 'Undefined'

This term can be confusing because if we boil things down simply...

```javascript
var a;
console.log(a);
// Output = 'undefined'
```

```javascript
console.log(a);
// Output = Uncaught ReferenceError: a is not defined
```

...the two statements above might seem to be the same, but they are not.

'Undefined' is actually a *special internal value* that the variable exists, but hasn't been set.

**NEVER manually setup `a = undefined`** Leaving this to JS will help you debug code. If manually setup an 'undefined' variable, it's really hard to tell if you set the variable or the JS engine did it.

**It's always better to let 'undefined' = "I have never set this value"**
