## By Value

If you assign a primitive value to a variable `a` an address is created within the memory. Then, if we set `b = a` or we pass `a` to a function `function b(){...};`, a copy of the primitive value is made to a new place in the memory. **These variables become the same by copying the value to another memory location.**

## By Reference

However, this is different for objects - *ALL* objects, including functions. If you set a variable equal to an object, you still get an address in memory. But when `b = a` or you pass `a` to function, the new `b` will point to the *same location* as `a`. No new object is created, no new value is copied, there is just a reference. Both variables will have the same value because they look at the same place in the memory.

This can cause weird problems if you do not understand the differences...
