# Functional Programming

## Currying

Currying is a process of calling a function with fewer arguments than it expects. This call returns a function that takes the remaining arguments.

## Research

<https://blog.bitsrc.io/currying-by-example-for-javascript-developers-b1c8bc02dd5a>


```js
const add = x => y => x + y // add is a function which takes argument 'x' and returns a function which takes argument y, and returns the result of 'x + y' 

const increment = add(1) // a newly created function will remember '1' as x, thanks to closure
const addTen = add(10)

console.log(increment(2)) // 3
console.log(addTen(2)) // 12
```

# `curry` helper function

```js

function curry(fn) {
  const arity = fn.length

  return function $curry(...args) {
    if (args.length < arity) {
      return $curry.bind(null, ...args)
    }

    return fn.call(null, ...args)
  }
}
```

## Examples of currying

```js
const match = curry((what, s) => s.match(what))
const replace = curry((what, replacement, s) => s.replace(what, replacement))
const filter = curry((f, xs) => xs.filter(f))
const map = curry((f, xs) => xs.map(f))

const hasLetterR = match(/r/g) // x => x.match(/r/g)
hasLetterR('hello world') // ['r']
hasLetterR('just j and s and t etc') // null

filter(hasLetterR, ['rock and roll', 'smooth jazz']) // [ 'rock and roll' ]

const removeStringsWithoutRs = filter(hasLetterR) // [Function: bound $curry] xs => xs.filter(x => x.match(/r/g))
removeStringsWithoutRs(['rock and roll', 'smooth jazz', 'drum circle']) // ['rock and roll', 'drum circle']

const noVowels = replace(/[aeiou]/ig) // (r, x) => x.replace(/[aeiou]/ig, r)
const censored = noVowels('*') // x => x.replace(/[aeiou]/ig, '*')
censored('Chocalate Rain') // 'Ch*c*l*t* R**n'
```

## Use cases for currying

- currying gives us ability to transform any function that works on a single element into a function that works on arrays simply by wrapping it with map. We typically don't define functions that work on arrays, because we can just call `map(singleElementFunction)` inline. Same with `sort`, `filter` and other higher order functions

```js
const getChildren = x => x.childNodes
const allTheChildren = map(getChildren)
```

- curried functions are pure functions, they take a single argument and return a function expecting the remaining arguments

- currying makes functional programming less verbose and tedious

- currying allows making new, useful functions on the fly simply by passing in a few arguments

## Why is currying useful?

Currying is useful because it lets you specialize/partially apply functions using a lightweight syntax and then pass these partially applied functions to higher order functions such as `map` or `filter`. Higher order functions are bread and butter of functional programming, and currying and partially applied functions enable higher order functions to be used much more effectively and concisely.