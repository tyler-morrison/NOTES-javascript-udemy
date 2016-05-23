function buildFunctions() {
    var arr = [];

    for (var i = 0; i < 3; i++) {
        arr.push(
            function() {
                console.log(i);
            }
        )
    }

    return arr;
}

var fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();

console.log('-------------------------');

function buildFunctions2() {
    var arr = [];

    for (var i = 0; i < 3; i++) {
        // New to ES6, the block scope of the `let` variable would allow us to have a new value for 'i' within each loop. Then you could change `console.log(j)`...
        // let j = i;

        // OR we can use IFFEs to create a new execution context each time...
        arr.push(
            (function(j) {
                return function() {
                    console.log(j);
                }
            }(i))
        )
    }

    return arr;
}

var fs2 = buildFunctions2();

fs2[0]();
fs2[1]();
fs2[2]();
