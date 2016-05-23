function sayHiLater() {
    var greeting = 'Hi!';

    setTimeout(function() {
        console.log(greeting);
    }, 3000)
}

sayHiLater();

// jQuery also uses function expressions and first-class functions
// $("button").click(function() {...});

function tellMeWhenDone(callback) {
    var a = 1000;
    var b = 2000;

    callback(); // the ‘callback’, it runs the function I give it
}

tellMeWhenDone(function() {
    console.log("I'm all done");
});
tellMeWhenDone(function() {
    alert("I'm all done!");
});
