# Arrays and ‘for ...in’

Recall that arrays are objects, just like functions. Arrays in Javascript are a bit different than other languages. When referencing the index of an object, that number value is actually each property’s name — 0, 1, 2, etc.

```javascript
var arr = ['John', 'Jane', 'Jim'];

for (var prop in arr) {
  console.log(prop + ': ' + arr[prop]);
}
```

But the fact that an array is an object and that each of its items become properties with name / value pairs, means that there could be a bit of a problem if a library you use attempts to add features to the Array prototype. If you use ‘for...in’, it actually might output the newly added method.

**In the case of arrays, do NOT use ‘for...in’, because you could iterate down INTO the prototype by accident.** Instead use the standard ‘for’ loop with an iterator...

```javascript
for (var i = 0; i < arr.length; i++) {...}
```
