# Functional Programming

## Currying

Currying is a process of calling a function with fewer arguments than it expects. This call returns a function that takes the remaining arguments.

```js
const add = x => y => x + y // add is a function which takes argument 'x' and returns a function which takes argument y, and returns the result of 'x + y' 

const increment = add(1) // a newly created function will remember '1' as x, thanks to closure
const addTen = add(10)

console.log(increment(2)) // 3
console.log(addTen(2)) // 12
```