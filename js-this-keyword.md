---
layout: page
title: "js-this-keyword"
permalink: /js-this-keyword/
---

# `this` keyword

### **`this` IN GLOBAL CONTEXT**

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
