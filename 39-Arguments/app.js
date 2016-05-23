// In addition to expicitly naming your parameters you can use the ... notation to inform JS that any additional, unnamed parameters should be wrapped up into an array with the given name
function greet(firstName, lastName, language, ...other) {
    // Recall, that we can use the OR operator to set defaults...
    language = language || 'en';

    // We can use 'arguments' array-like features to test if there were any parameters passed...
    if (arguments.length === 0) {
        console.log('Missing Parameters!');
        console.log('-------------------');
        return;
    }

    console.log(firstName);
    console.log(lastName);
    console.log(language);
    // Like 'this', we can call the special keywords 'arguments'
    // Although it kind of looks like an array in the console, it's actually *array-like*
    // It's important to know that they don't have all the features of an array, but there are enough similarities to be useful (see line 5)
    console.log(arguments);
    console.log('arg[0]: ' + arguments[0]);
    console.log('-------------------');
}

// In future languages, it will be easy to set a default value in the parameters...
// `function greet(firstName, lastName, language='en') {...}`

// Recall that because of hoisting, we can call the function without defining parameters and still avoid any errors...
greet();
greet('John');
greet('John', 'Doe');
greet('John', 'Doe', 'en');

// IMPORTANT: One other upcoming method will allow you to wrap unnamed parameters. In addition to expicitly naming your parameters you can use the ... notation to inform JS that any additional, unnamed parameters should be wrapped up into an array with the given name
// function greet(firstName, lastName, language, ...other) {...}
