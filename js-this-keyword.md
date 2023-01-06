---
layout: page
title: "js-this-keyword"
permalink: /js-this-keyword/
---

# `this` keyword

### **`this` IN A GLOBAL CONTEXT**

<br>

1. `this` in global context refers to different things depending on the interpreter context

2. `this` in the browser refers to a `windows` object

<br>

### `this` in a `node.js` script, global scope is the current `module.exports` object

<br>

```js
console.log(this) // {}

module.exports.foo = 5

console.log(this) // { 'foo': 5 }
```

---

### `this` in a `node.js` REPL refers to the environment global object, which exposes a variety of useful properties of the global environment like `setTimeout` or `performance`

```js

console.log(this) // <ref *1> Object [global] { setTimeout: [Function: setTimeout],  performance: Performance }

```
<https://stackoverflow.com/questions/43627622/what-is-the-global-object-in-nodejs>


---

### `this` IN A FUNCTION




