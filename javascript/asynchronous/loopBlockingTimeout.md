## SINGLE-THREADED ASYNCHRONOUS MODEL

## QUEUE = EVENTS LOOP (execution queue for asynchronous calls)

## EXAMPLE 1

```js
let start = new Date;

setTimeout(function() { // goes to the Queue
  let end = new Date;
  console.log('Time elapsed:', end - start, 'ms');
}, 500);

while (new Date - start < 1000) {};

// OUTPUT: 'Time elapsed: 1002ms'
// EXPLANATION: JS is exucuted in a single thread. All syncronous code (in this
// case, including while()) has to finished executing (has to be evaluated),
// before ANY asynchronous code (setTimeout in this case) STARTS being executed.
// Therefore, the while has to run for the full 1000ms before callback function
// of the setTimeout even starts to be executed.

let start = new Date;

while (new Date - start < 1000) {};

setTimeout(function() {
  let end = new Date;
  console.log('Time elapsed:', end - start, 'ms');
}, 500);
```

## EXAMPLE 2

```js
for (var i = 1; i <= 3; i++) {
  setTimeout(function() {console.log(i);}, 0); // goes to the Queue
};

console.log('loop1')
// OUTPUT: 4 4 4
```

## EXAMPLE 3

```js
for (let i = 1; i <= 3; i++) {
  setTimeout(function() {console.log(i);}, 0); // goes to the Queue
};

console.log('loop2')
// OUTPUT: 1 2 3
```