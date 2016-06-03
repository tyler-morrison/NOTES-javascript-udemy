# Function Factory

## Example
```javascript
function makeGreeting(language) {
    return function(firstname, lastname) {
        if (language === 'en') {
            console.log('Hello' + ' ' + firstname + ' ' + lastname);
        }
        if (language === 'es') {
            console.log('Hola' + ' ' + firstname + ' ' + lastname);
        }
    }
}

var greetEnglish = makeGreeting('en');
var greetSpanish = makeGreeting('es');

greetEnglish('Tyler', 'Morrison');
greetSpanish('Julio', 'Martinez');
```

### Execution Stack
* ‘greetSpanish’ (firstname: ‘Julio’, lastname: ‘Martinez’) **Outer reference is to second closure**
* ‘greetEnglish’(firstname: ‘Tyler’, lastname: ‘Morrison’) **Outer Reference is first closure**
* ~~‘makeGreenting’~~ (language ‘es’) **NEW Execution Context**
* ~~‘makeGreeting’~~ (language ‘en’)
* Global Execution Context (greetEnglish, greetSpanish, makeGreeting())

This allows us to have another way to create some functions with default values...
