# Asynchronous Callbacks

*Asynchronous* = More than one at a time.

We've already discussed that the Javascript Engine parses code in a single-threaded, synchronous method. However, there are some features like click events, etc. that each have callback functions to permit asynchronous code.

To understand this, we first need to think of the Javascript Engine, which does not exist by itself. For example, within a browser, there's also the rendering engine, HTTP requests, etc. The Javascript has hooks that can interact with these parts.

**Although these outer events may be occurring asynchronously, the Javascript Engine is still processing in a synchronous manner.** Thus, the Execution Stack continues to operate as previously explained; however, there is a concurrent list known as the *Event Queue*.

## Event Queue

The Event Queue is full of events, notifications events, etc. that might be happening. For example, a click event might not have an attached function, but it will still be placed into the Event Queue when that trigger occurs.

**Once the Execution Stack is empty, the Javascript engine will then look at the Event Queue.** After everything is executed, the JS engine will periodically check in on the Event Queue. If something exists within the Event Queue, the JS engine starts to search for any corresponding functions to the trigger like a clickHandler(). Once the new stack is empty, it will repeat the process, searching for the next Event Queue item.

**Thus, the process isn't *really* asynchronous.** The **browser** is asynchronously adding events into the Event Queue, which the Javascript Engine then tackles synchronously until the Execution Stack is empty.
