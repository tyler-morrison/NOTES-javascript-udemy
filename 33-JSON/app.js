// This is a valid JS object...
var objectLiteral = {
    firstName: 'Mary',
    isAProgrammer: true
}

console.log(JSON.stringify(objectLiteral));

var jsonValue = JSON.parse('{ "firstName": "Tommy", "isAProgrammer": false }');

console.log(jsonValue);
