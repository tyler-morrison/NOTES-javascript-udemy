# JSON and Object Literals

*JSON* = JavaScript Object Notation

It is **inspired** by object literal syntax, but a common mistake is to think they're the exact same thing. This leads to a few common mistakes...

Data used to be sent across the Internet in XML format...
```
<object>
  <property>Something</property>
  <anotherProperty>Else</anotherProperty>
</object>
```
...however, this was incredibly inefficient. Each property has to be written twice, which doubles bandwidth. Thus, they looked at object literal and noticed that there were lot of benefits to the structure.

**IMPORTANT:** There are several key differences between object literal syntax and JSON...

**JSON properties *MUST* be wrapped in quotes.** Quotes are valid within object literal, so JSON is like a stricter subset. Similar to square / rectangle classification - all squares are rectangles but not all rectangles are squares - all JSON is valid object literal syntax, but not all object literal syntax is valid JSON.

Interestingly enough, JSON isn't actually built into JS. However, there is a built in utilities to convert the two...

`JSON.stringify(objectLiteral);` converts JSON ----> Object literal
`JSON.parse({...Some JSON...});` converts Object literal ----> JSON
