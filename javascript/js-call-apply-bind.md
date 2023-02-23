# `this` explicit context

Using `call`, `apply` and `bind` allows you to change the context of `this` keyword present inside the invoked function.

The important part is to know how to determine what object `this` refers to, which you can do implicitly by knowing the context of when `this` was used, or explicitly with `call`, `apply` and `bind`.

These functions are useful for:
- transforming methods to utility functions
- in class-based components of React

---

## `call` in `function.prototype.call`

Using `call`, it's possible to pass a different `this` context to a function.

`call` takes `this` as a first argument, and optional arguments separated by coma.

```js
call(thisArg, arg1, ..., argn)
```

```js
const book = {
  title: 'Brave New World',
  author: 'Aldous Huxley'
}

function summary() {
  console.log(`${this.title} was written by ${this.author}.`)
}

summary() // 'undefined was written by undefined' because 'this' refers to global context and there is no title variable in the global context

summary.call(book) // Brave New World was written by Aldous Huxley
```

## Using `call` to combine context between two functions

WARNING: this is really weird. `this` inside of `setBrand()` function has access to `Car` parameters, even though call to `Car` wasn't stored anywhere.

```js
function Car(type, fuelType) {
  this.type = type
  this.fuelType = fuelType
}

function setBrand(brand) {
  Car.call(this, 'convertible', 'petrol')
  this.brand = brand
  console.log('Car details ', this)
}

const newBrand = new setBrand('BMW')

// OUTPUT: Car details  setBrand { type: 'convertible', fuelType: 'petrol', brand: 'BMW' }
```

Another example:

```js
function Car(type, fuelType) {
  this.type = type
  this.fuelType = fuelType
}

function definePrice(price) {
  Car.call(this, 'convertible', 'diesel')
  this.price = price
  console.log('Car details ', this)
}

const newCarPrice = new definePrice(100000)

// OUTPUT: Car details  definePrice { type: 'convertible', fuelType: 'diesel', price: 100000 }

```


## How to create your own `map` utility function using `call`?

```js

function newMap(func) {
  let destArr = []
  const srcArrLen = this.length
  for (let i=0; i < srcArrLen; i++) {
    destArr.push(func.call(this, this[i]))
  }
  return destArr
}

// WARNING: do not follow this approach in your production code!
Object.defineProperty(Array.prototype, 'newMap', {
  value: newMap
})

const arr = [1,2,3]
const newArr = arr.newMap(item => item + 1)
console.log(newArr) // [2,3,4]

```

## `apply` in `function.prototype.apply`

`Apply` and `call` are almost identitical, except that `call()` accepts arguments one by one, while `apply()` accepts an array of arguments

```js
func.call(this, 'eat', 'bananas')

func.apply(this, ['eat', 'bananas'])
```

You can use three different types of syntax:

1. `func.apply(thisObj, [arg1, arg2])`

```js
function Car(type, fuelType) {
  this.type = type
  this.fuelType = fuelType
}

function setBrand(brand) {
  Car.apply(this, ['convertible', 'petrol'])
  this.brand = brand
  console.log('Car details ', this)
}

const newBrand = new setBrand('Audi')

```

2. `func.apply(thisObj, new Array(arg1, arg2))`


```js
function Car(type, fuelType) {
  this.type = type
  this.fuelType = fuelType
}

function definePrice(price) {
  Car.apply(this, new Array('convertible', 'diesel'))
  this.price = price
  console.log('Car details ', this)
} 

const newCarPrice = new definePrice(2000000)
```

3. `func.apply(thisObj, arguments)`

```js
function addUp() {
  const args = Array.from(arguments)
  this.x = args.reduce((prev, curr) => prev + curr, 0)
  console.log('this.x, ', this.x)
}

function driverFunc() {
  const obj = {
    inps: [1,2,3,4,5,6]
  }
  addUp.apply(obj, obj.inps)
}

driverFunc()
```

## Using `apply` as a wrapper

`fn.apply(null, args)` is equivalent to `fn(...args)`, where in case of `fn.apply(null, args)`, `args` is an array-like object, while in case of `fn(...args)` is an iterable object

```js
function wrapper() {
  return anotherFn.apply(null, arguments) // no need to change 'this' context, but we want arguments from wrapper function to be applied on the wrapped function
}

// equivalent syntax
function wrapper(...args) {
  return anotherFn(...args)
}
```

## Using `apply` to append an array to another (without creating a new array)

```js
const array = ['a', 'b']
const elements = [0,1,2]

array.push.apply(array, elements)
console.info(array)

// the same using spread syntax
array.push(...elements)
console.info()

```

## Using `apply` and built-in functions

```js
const numbers = [5,5,6,6,4]

let max = Math.max.apply(null, numbers)

let min = Math.min.apply(null, numbers)
```

# `bind` in `function.prototype.bind()`

`bind()` method creates a new function that when called, has its `this` keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called

- bound function - function which a context and/or arguments were bound upon using `bind()`

Example: `addition = calc.add.bind(context)`

- unbound function - a normal function which uses it's own `this` context

Example: `let addition = calc.add`

```js
var calc = {
  add: function (a, b) {
    return a + b
  },
  sub: function (a, b) {
    return this.add(a, -b)
  }
}

console.log(calc.sub(10, 9))

let subtraction = calc.sub // we are losing calc context when we assign it to 'subtraction'
console.log(subtraction(5,4)) // gives a TypeError, because 'this' is set to undefined

let minus = calc.sub.bind(calc)

console.log(minus(5,4)) // this works fine
```

## Description of `bind`

- the `bind` method creates a new bound function
- calling the bound function results in the execution of the function it wraps


```js
function targetFunction(...args) {
  console.log(this, ...args)
}

const boundFunction = log.bind('this value', 1, 2) // new bound function is created
boundFunction(3,4) // execution of targetFunction
``` 

- the bound function will store the parameters passed (value of `this` and following arguments) as it's internal state. These values are stored in advance, instead of being passed at call time.

```js
const boundFn = fn.bind(thisArg, arg1, arg2)
// the following expressiong
boundFn('myThis', 1, 2) 
// is equivalent to
const restArgs = ['myThis', 1, 2]
const boundFn = (...restArgs) => fn.call(thisArg, arg1, arg2, ...restArgs)
```

## Follow-up binding

- a bound function can be further bound by calling `boundFn.bind(thisArg, /* more args */)`, which creates another bound function `boundFn2`
- the newly bound `thisArg` is value is ignored, because the target function of `boundFn2`, which is `boundFn` already has a bound `this`
- when `boundFn2` is called, it would call `boundFn`, which in turn calls `fn`
- the arguments that `fn` receives are, in order: the arguments bound by `boundFn`, arguments bound by `boundFn`, and the arguments received by `boundFn2`

```js
"use strict"

function log(...args) {
  console.log(this, ...args)
}

const boundLog = log.bind('this value', 1, 2)
const boundLog2 = boundLog.bind('new this value', 3, 4)
boundLog2(5, 6) // 'this value', 1, 2, 3, 4, 5, 6
```

## Using `bind()` for partial application

```js
let increment = calc.add.bind(calc, 1)

console.log(increment(7)) // add() takes two arguments, we pre-fill one when binding (1) and give the second one (7) during invocation
```
full application looks like follows

```js
let fullApplication = calc.add.bind(calc, 6, 4)
```

Passing too many arguments

```js
function addTwoArguments(a1, a2) {
  return a1 + a2
}

const boundTen = addTwoArguments.bind(null, 10)

console.log(boundTen(10)) // 20
console.log(boundTen(10,5)) // also 20, because second argument '5' is ignored
```

## Using `bind()` to pass arguments but keep the original context

If you are happy with the function's current context, and only need to do partial application, you can pass `undefined` or `null` as the first argument.

```js
var eleven = calc.add.bind(null, 9, 2) // 11
```

## You can bind new arguments to already bound function

```js
var minus = calc.sub.bind(calc)
var minusOne = minus.bind(null, 0, 1)
console.log(minusOne()) // -1
```

## Usign `bind` with `setTimeout`

`this` keyword within `setTimeout` is set to `globalThis`. When working with class methods that require `this` to refer to class instances, you can bind `this` of the class instance to `this` of the callback function.

```js
class LateBloomer {
  constructor() {
    this.petalCount = Math.floor(Math.random() * 12) + 1
  }
  bloom() {
    setTimeout(this.declare.bind(this), 1000)
  }
  declare() {
    console.log(`I'm a beatiful flower with ${this.petalCount} petals!`)
  }
}

const flower = new LateBloomer()
flower.bloom()
```

You can achieve the same using arrow functions.

```js
class LateBloomer {
  bloom() {
    setTimeout(() => this.declare(), 1000) // arrow function binds automatically
  }
}
```

<https://glebbahmutov.com/blog/binding-vs-partial-application/#binding-context>

<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind>

<https://www.digitalocean.com/community/conceptual-articles/understanding-this-bind-call-and-apply-in-javascript>