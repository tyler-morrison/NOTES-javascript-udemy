/**
 * GREETR
 * An example library / framework to display greetings
 *
 * REQUIREMENTS:
 *   - Parameters = first name, last name, language.
 *   - Output = formal and informal greeting.
 *   - Support English and Spanish language.
 *   - Reusable
 *   - Support jQuery so you can pass it an html item
 *   - Easy to type structure like ‘G$()’
 */

// Start with IFFE for safe code execution context...
// We're passing in global object so that it can be accessible anywhere in browser.
// Also passing in $ so that our library can access jQuery.
(function(global, $) {
    // Function expression here. Serves as main namespace going forward...
    // Recall that function expression = in memory, but not invoked yet.
    var Greetr = function(firstName, lastName, language) {
      // Pulled this structure from jQuery.
      // This function is built to RETURN a function constructor like jQuery.
      // No longer requires the use of ‘new’ keyword in production code...
      // .init will just be a property on Greetr.
      return new Greetr.init(firstName, lastName, language);
    }

    // To create values that are NOT exposed to global object, use closures like below.
    // Because it's not a method / property that's exposed anywhere, to public.
    // After IFFE is complete, vars / functions will still exist in memory.
    // Great for creating values that developers cannot change from outside source.
    // Other properties / methods can access these from within because of lexical environment.
    // However, we can keep it contained to the memory space of this function...


    var supportedLangs = ['en', 'es', 'fr'];

    // For our messages, we use OBJECTS instead of arrays to allow us to reference them by name of property...
    var greetings = {
      en: 'Hello',
      es: 'Hola',
      fr: 'Bonjour'
    };

    var formalGreetings = {
      en: 'Greetings',
      es: 'Saludos',
      fr: 'Les Salutations'
    };

    var logMessages = {
      en: 'Logged in',
      es: 'Inicio sesion',
      fr: 'Connecte'
    }

    // Methods go here within the prototype.
    // All of these will be exposed to the outside world via global object.
    // These will be shared by all of the objects created via Greetr.init...
    Greetr.prototype = {
      fullName: function() {
        return this.firstName + ' ' + this.lastName;
      },
      // Check to see if language option given is supported
      validate: function() {
        // We use indexOf to check if language param exists in array above...
        if (supportedLangs.indexOf(this.language) === -1) {
          throw "Invalid language";
        }
      },
      greeting: function() {
        // We use bracket notation here to get name / value pair of object above...
        return greetings[this.language] + ' ' + this.firstName + '!';
      },
      formalGreeting: function() {
        return formalGreetings[this.language] + ', ' + this.fullName();
      },
      // Here we will create the chainable property that can invoke others...
      greet: function(formal) {
        var msg;

        // ‘formal’ parameter will either be true or false, due to coercion. Thus...
        if (formal) {
          msg = this.formalGreeting();
        } else {
          msg = this.greeting();
        }
        if (console) {
          console.log(msg);
        }

        // Last, but not least, we mimic jQuery style with return 'this'
        // Allows us to chain methods by returning the same object after each method gets popped off, post invocation...
        return this;
      },
      log: function() {
        // First check to make sure console object is available...
        if (console) {
          console.log(logMessages[this.language] + ': ' + this.fullName());
        }

        // Make this method chainable as well...
        return this;
      },
      setLang: function(lang) {
        this.language = lang;

        this.validate();

        return this;
      },
      HTMLGreeting: function(selector, formal) {
        // First check that jQuery exists...
        if (!$) {
          throw 'jQuery not loaded';
        }
        // Also check for selector...
        if (!selector) {
          throw 'Missing jQuery selector'
        }

        // This line could be refactored later...
        var msg;
        if (formal) {
          msg = this.formalGreeting();
        } else {
          msg = this.greeting();
        }

        // Begin jQuery, since it was passed directly to this library...
        $(selector).html(msg);

        return this;
      }

    };

    // Build function constructor here.
    // Greetr.init is not yet invoked, thus this goes into memory for future...
    Greetr.init = function(firstName, lastName, language) {
      // Create ‘self’ helper variable to prevent confusion about ‘this’...
      var self = this;

      // Setup defaults for the new object using Logical OR Operator...
      self.firstName = firstName || '';
      self.lastName = lastName || '';
      self.language = language || 'en';

      // Validate at the beginning
      self.validate();

    }

    // Recall that any object created using the function constructor Greetr.init will point its __proto__ property to Greetr.init.prototype.
    // Instead, we want to call it with the simplified Greetr.init. Thus...
    Greetr.init.prototype = Greetr.prototype;

    // We want to expose Greetr to global object and simplify the call to G$()
    // Recall that the global object is being passed into this function at the top.
    // Thus, we can simply make Greetr and G$ a method for global with the following...,
    global.Greetr = global.G$ = Greetr;
    // This is essentially the entry point for the G$() alias.
    // When it is invoked, it will invoke Greetr main function that then creates new object.

    // Later down the road, you could enhance that call to global with certain checks like jQuery, but that's not a requirement.

  }
  // Here we invoke the IFFE, passing in ‘window’ — the global object for a browser — and jQuery.
  (window, jQuery));
