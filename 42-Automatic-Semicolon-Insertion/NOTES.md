# Automatic Semicolon Insertion

The syntax parser within the JS engine does something that *tries* to be helpful, but can be **very dangerous.**

Semicolons are actually *optional* in core JS. When the parser sees a carriage return character before a semicolon, the syntax parser will see the code and automatically replace the return with a semicolon.

**IMPORTANT: Always be sure to write your own semicolons in the code.** Also be aware that carriage returns in your code can cause unexpected issues in some special cases.
