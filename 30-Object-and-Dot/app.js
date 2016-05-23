// IMPORTANT: THis is not the preferred way to create an object; however, it is a clear illustration at this moment.
var person = new Object();

// The [] is actually an *operator* named Computed Member Access...
person["firstname"] = "Tyler";
person["lastname"] = "Morrison";

var firstNameProperty = "firstname";


// Using this syntax to access an object property is useful if you want to dynamically replace the string...
console.log(person[firstNameProperty]);
// A simpler syntax uses the dot operator or Member Access Operator...
console.log(person.firstname);
console.log(person.lastname);

person.address = new Object();
person.address.street = "315 Arlington Ave."
person.address.city = "Charlotte"
person.address.state = "NC"

console.log(person);
