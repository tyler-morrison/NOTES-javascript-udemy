// As we know, 'this' is immediately available in the Global Context...
console.log(this);

function a() {
    // When you create a function, the 'this' keyword will still point to the Global Object if you simply invoke the function...
    console.log(this);
}

var b = function() {
    // Even when you create a function expression at this level of the code, 'this' will still refer to the Global Object. Each function gets their own 'this' keyword, but they're referencing the same object
    console.log(this);
    // Therefore, we could even use dot notation to attach a new property to the Global Object via 'this'
    this.newVariable = "Hello";
    // There are some special cases where the expression above could be useful
};

a();
b();

console.log(newVariable);

// You can change the 'this' keyword whenever it is used within an object's method. Useful for mutation...
var c = {
    name: 'The c object',
    log: function() {
        // To circumvent the issues found on line 39, many developers use the following trick to be sure the proper 'this' is formed. Then you begin to change out 'this' for 'self'...
        // IMPORTANT: The 'let' keyword will begin to solve this issue if your projects use ES6.
        var self = this;

        // this.name = 'Updated c object'
        self.name = 'Updated c object'
            // console.log(this);
        console.log(self);

        // Most people would consider the following code a "bug" within JavaScript...
        // Here we have a function within a method, so you would think the 'this' keyword would abide by the same rules as the method above...
        var setName = function(newName) {
            // this.name = newName;
            self.name = newName;
        };

        setName('Updated again! The c object');
        // However, it will actually point to the *GLOBAL OBJECT* strangely
        console.log(this);
    }
};

c.log();
