# ‘new’ and Functions

If you forget the ‘new’ keyword, JS will just try to execute the function, rather than create a new object. When this happens, the object will just be ‘undefined’ and none of your methods will work properly. You will receive an error.

## Preventing Errors

**IMPORTANT:** To prevent the issue mentioned above, get in the habit of naming any function constructor with a capital letter. This is a nice visual cue that will help you debug errors. If lots of unexpected errors pop up, you can look around for a capitalized function and check that it is preceded by the ‘new’ keyword.
