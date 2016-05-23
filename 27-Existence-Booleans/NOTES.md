# Existence and Booleans

While coercion can be tricky and produce unexpected bugs, there are some scenarios where it can be useful. For example...

`Boolean(undefined); // false`
`Boolean(null);      // false`
`Boolean("");        // false`

...All of the statements above imply the lack of existence. Because of coercion, we can then use this to our advantage.
