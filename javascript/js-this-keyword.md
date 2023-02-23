---
layout: page
title: "js-this-keyword"
permalink: /js-this-keyword/
---

# `this` KEYWORD

# `this` in a global context

`this` in a global context refers to different things depending on the environment (eg. browser or node.js)

<br>

## `this` in a browser

refers to the `windows` object

<br>

## `this` in a `node.js` script

`this` refers to a global scope is the current `module.exports` object


```js
console.log(this) // {}

module.exports.foo = 5

console.log(this) // { 'foo': 5 }
```
<br>

## `this` in a `node.js` REPL


`this` refers to the environment global object, which exposes a variety of useful properties of the global environment like `setTimeout` or `performance`

```js

console.log(this) // <ref *1> Object [global] { setTimeout: [Function: setTimeout],  performance: Performance }

```
<https://stackoverflow.com/questions/43627622/what-is-the-global-object-in-nodejs>


---

# `this` in a function context


## `this` in a function (in `non-strict mode`)


Also refers to a global object.
In the browser, it's a `window` object. In `Node.js` it's an environment global object.

```js

function printThis() {
    console.log("Function's this", this) // global object
}

printThis()
```

---

# `this` in object's method context


## `this` in a non-nested object's method


Object's method uses `this` to refer to the properties of the object

```js
const america = {
    name: 'The United States of America',
    yearFounded: 1776,

    describe() {
        console.log(`${this.name} was founded in ${this.yearFounded}.`)
    }
}

america.describe()
```

<br>

## `this` in nested object's method


```js
const us = {
    name: 'The United States of America',
    yearFounded: 1776,
    details: {
        symbol: 'eagle',
        currency: 'USD',
        printDetails() {
            console.log(`The symbol is the ${this.symbol} and the currency is ${this.currency}.`)
        }
    }
}

us.details.printDetails()

```

`this` is the limited in current object's scope of the method and doesn't have access to the outer object's properties.

```js

const country = {
    name: 'The United States of America',
    yearFounded: 1776,
    details: {
        symbol: 'eagle',
        currency: 'USD',
        printDetails() {
            console.log(`This will be undefined: ${this.yearFounded}.`) // undefined
        }
    }
}

country.details.printDetails()

```
---

# `this` in a function contructor 

`this` is bound to the instance of the `Country` function, which is contained in the `usa` constant

```js

function Country(name, yearFounded) {
    this.name = name
    this.yearFounded = yearFounded

    this.describe = function() {
        console.log(`${this.name} was founded in ${this.yearFounded}.`)
    }
}

const usa = new Country('The USA', 1776)

america.describe()

```

---

# `this` in a class constructor

A constructor in a class acts the same as a constructor in a function.

`this` refers to an instance of a class. In the example aboveof `this` refrers to `america2`, which is an instance of `Country2` class.

```js

class Country2 {
    constructor(name, yearFounded) {
        this.name = name
        this.yearFounded = yearFounded
    }

    describe() {
        console.log(`${this.name} was founded in ${this.yearFounded}.`)
    }
}

const america2 = new Country('The USA', 1776)

america2.describe()

```

---

# `this` in the browser for DOM event handlers

`this` in a callback (event handler), called by `addEventListener` refers to `event.currentTarget`

```js
const button = document.createElement('button')
button.textContent = 'Click me'
document.body.append(button)

button.addEventListener('click', function(event) {
  console.log(this) // Output: <button>Click me</button>
})
```
---

# `globalThis`

`globalThis` variable refers to a global object.

```js
globalThis.globProp = 'Wisen'

function display() {
  console.log(`globProp value is ${this.globProp}`)
}

display.call() // Logs 'globProp value is Wisen' in the browser. [Non-strict mode]
// Logs 'globProp value is undefined' in Node.Js [strict mode]

```

```js
console.log('In node.js, "globalThis" is ', globalThis) // Object [global] {}

console.log('In the browser, "globalThis" is ', globalThis) // window object
```