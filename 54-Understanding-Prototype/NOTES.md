# Understanding the Prototype

Let’s say that we have an object already in the memory (`obj`) with certain properties / methods. You can easily access these using dot notation (`obj.prop1`). In addition to these characteristics, there is a prototype property. **All objects within Javascript have a prototype property.**

So if the prototype has a property (`prop2`) that is missing from the original reference, any call using dot notation (`obj.prop2`) will first look at the object and then check the prototype for a value. **This prototype has a parent prototype parent of its own. If `prop 2` cannot be found on the first prototype, it will move up the ‘prototype chain’.**

The prototype property is hidden, in that you don't have to explicitly call the prototype in dot notation. This also allows you to have two sibling objects that can share properties up the prototype chain
