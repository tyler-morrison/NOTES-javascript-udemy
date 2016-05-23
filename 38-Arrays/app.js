// Most programmers are familiar with the basics of arrays...
var arr = [1, 2, 3];

console.log(arr[0]);

// However, since JS is dyanmically typed, arrays are handled a little bit differently. In other languages, you have arrays of specific types - numbers, strings, etc. - but JS doesn't like this. Thus, you can mix and match types within a JS array...

var dynamicArray = [
    1,
    false,
    'hellow', {
        name: 'Object',
        greeting: 'hello'
    },
    function(name) {
        var greeting = 'Hello ';
        console.log(greeting + name);
    }
];

console.log(dynamicArray);

// This allows you to write some strange, but valid code...
dynamicArray[4](dynamicArray[3].name);
