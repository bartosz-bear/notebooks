## TypeError (intermediate value)(...) is not a function in JS

- The "TypeError: (intermediate value)(...) is not a function" error occurs when we forget to place a semicolon between a function declaration and an immediately invoked function expression. To solve the error,
add a semicolon after the closing curly brace of the function declaration.

## ⛔️ TypeError: (intermediate value)(...) is not a function

```js
const logger = function () {
  console.log('hi');
} // 👈️ missing semicolon here

(function () {})();
```

<https://bobbyhadz.com/blog/javascript-intermediate-value-is-not-a-function>