// ASYNCHRONOUS JAVASCRIPT AND EVENT-DRIVEN PROGRAMMING

// JavaScript is single-threaded, each JS statement is synchronous and blocking
// In order to run the code asynchronously, you need to use setTimeout() method
// of the browser's Web API

// MAIN STACK
// this is where all your JS code gets pushed and executed one by one as the
// interpreter reads your program
// synchronous code comes first here
// asynchronous code cannot interrupt synchronous code, because synchronous
// code always has a higher priority, therefore no asynchronous code gets
// started executing before all synchronous code finishes executing

// EVENT TABLE
// if some of your statements are asynchronous (setTimeOut, ajax(), promise, click)
// then that asynchronous code gets forwarded to Event Table
// Event table is responsible for moving your asynchronous code to callback/
// event queue after specifed time

// HEAP/PRIORITY QUEUE
// this is where all the memory allocation happens for your variables and 
// declarations

// CALLBACK/EVENT QUEUE
// this is where your asynchronous code gets pushed to, and waits for the
// execution

// EVENT LOOP
// - event loop makes sure that your asynchronous code runs AFTER all the
// synchronous code is done executing
// - event loop is running continously and check the Main stack, if it has
// any frames to execute, if not then it checks Callback Queue, if Callback
// Queue has codes to execute then it pops he message from it to the Main Stack
// for execution

// JOB QUEUE
// - apart from callback queue, browsers have introduced 'Job Queue', reserved
// only for new Promise() funcionality
// - when you use promises in your code, you add .then() method, which is 
// a callback method
// - these 'then' methods are added to Job Queue once the promise has returned
// - job queue has a higher priority than callback/even queue

// QUEUE PRORITIES
// 1. Synchronous code
// 2. Promises
// 3. setTimeout

// MORE ON TASKS QUEUE PRIORITIES
//https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/

// There is no guarantee that your setTimeout() or any other sync code will run
// exactly after the time that you have specified. delay parameter is the
// minimum time after which your code will execute. It can be delayed if Main
// Stack is busy exeuting existing code (both synchronous code and promises)

// PROMISES
// Promise is a constructor function, it needs 'new' keyword
// It's used in  asynchronous programming
// Promise takes a single function with two parameters (resolve and reject)
// These methods are used to determine the outcome of the promise

const myPromise = new Promise((resolve, reject) => {}); // will stay in pending for ever

// Promise states: pending, fulfilled, rejected
// resolve is used when you want the promise to succeed, reject when you want
// it to fail

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;
    
  if(responseFromServer) {
    resolve('We got the data'); // argument of this method will be used by .then
  } else {  
    reject('Data not received');
  }
});

// HANDLING A FULFILLED PROMISE (RESOLVE METHOD)

//makeServerRequest.then(result => { // result was passed in the promise resolve()
//  console.log(result);
//});

// HANDLING A REJECTED PROMISE (REJECT METHOD)

makeServerRequest.catch(error => { // error is a parameter of the reject() method
  console.log(error);
});

// setTimeout()

// executes a callback function once after a delay time passes

// setTimeout is a timer feature of Web API

// JavaScript is single-threaded, meaning that code is being executed synchroniously
// line by line

// As soon as we start running our code we create global execution context

// Properties of setTimeOut()

// onCompletion = a function that was passed to setTimeout as the first parameter
// completed = true or false, false BEFORE delayed time has passed, true AFTER
// delayed time has passed

function printHello() {console.log('Hello world')};

setTimeout(printHello, 1000);

(function() {
  console.log(1); 
  setTimeout(function(){console.log(2)}, 1000); 
  setTimeout(function(){console.log(3)}, 0); 
  console.log(4);
})();

// PASSING ADDITIONAL ARGUMENTS TO A CALLBACK FUNCTION
function animal(animalName, punctuation = '.') {
  const name = animalName.charAt(0).toUpperCase() + animalName.slice(1);

  console.log(`${name}${punctuation}`);
}

setTimeout(animal, 2500, 'shark', '!');

// setInterval()

// executes a callback function ad inifinitum, executes every x miliseconds (delay argument)

// method accepts two arguments: a callback function and a delay in milisecs
// method also accepts additional arguments to pass into the callback function
// method invokes the callback function regularly with a specified delay between calls

let i = 0;

function increment() {
  i++;
  console.log(i);
}

//setInterval(increment, 1000);

// recursive setTimeout()

//The recursive approach is useful for situations that require ensuring a task
// that may take longer than the delay finishes before running again.

let timer = setTimeout(function myTimer() {
  increment();
  timer = setTimeout(myTimer, 1000);
}, 1000);

// clearTimeout()

// clearTimeout accepts a callback function as an argument

// variable animalTimer() stores a call to setTimeout() as its value
const animalTimer = setTimeout(animal, 800, 'ant', '!');

setTimeout(() => {
  clearTimeout(animalTimer);
}, 2000);

// clearInterval()

// clearInterval accepts a callback function as an argument

// variable incrementTimer() stores a call to setInterval() as its value
const incrementTimer = setInterval(increment, 1000);

setInterval(() => {
  clearInterval(incrementTimer);
}, 3000)

// tutorial for setTimeout, setInterval, clearTimeout, clearInterval
// https://www.digitalocean.com/community/tutorials/js-settimeout-setinterval

