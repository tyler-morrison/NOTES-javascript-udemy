function greet() {
    console.log('hi');
}

// Because all functions ARE objects, we can add properties using simple dot notation...
greet.language = 'english';

console.log(greet.language);
