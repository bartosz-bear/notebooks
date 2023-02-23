// FUNCTIONAL PARADIGM

// first class functions - functions that can be assigned into a variable,
// passed in as arguments, or be returned from another function

// higher order functions - functions that take another function as argument,
// and/or return a function

// callbacks - functions which are passed as argument to another function or
// method, and then these callback methods are executed inside the function 
// or method

// lambda - function which was passed as an argument or returned from a function

// Functions are first-class objects, because they can have properties and methods like any other object. They can also be passed as arguments to a function.
// They are function objects. What distinguishes them from objects, is that they can be called.

// A function without return statement will return a default value. Default value is 'undefined'.

// CREATING A DEEP COPY OF AN ARRAY

const arr0 = [1,2,3,4,5];

const deep_arr = [...arr0];

// FUNCTION CLOSURE DOESNT' PREVENT MUTTABILITY OF GLOBAL SCOPE OBJECTS

let testArr = [1,2,3];

function testClosure(x) {
  x.pop();
  return x;
}

console.log(testArr);
console.log(testClosure(testArr));
console.log(testArr);

// [ 1, 2, 3 ]
// [ 1, 2 ]
// [ 1, 2 ]

// Arguments may be passed by value (primitive types) or by reference (objects). If a function reaasigns a primitive type parameter, the value won't change outside the function.
// In the case of an object type parameter, if its properties are mutated, the change will impact outside of the function.

function myFunc(theObject) {
  theObject.brand = "Toyota";
}

const mycar = {
  brand: "Honda",
  model: "Accord",
  year: 1998
}

console.log(mycar.brand);

myFunc(mycar);

console.log(mycar.brand);

// DEFINING FUNCTIONS

// 1. FUNCTION DECLARATION
// - name is compulsory
// - are hoisted
// - creates a variable with the same name as function name
// - unlike function expressions, functions defined by function declarations
// can be accessed by their name in the scope they were defined in, as well
// as in their own body

function_name('Hello, there')

function function_name (argument) {
  console.log(argument) // statement
}

// 2. FUNCTION EXPRESSION
// name is optional
// are not hoisted
// function name can only be used inside function's body

// 2.1 ANONYMOUS FUNCTION EXPRESSION

const myFunction = function () {
  console.log('This is anonymous')
}

myFunction()

// 2.2.1 NAMED FUNCTION EXPRESSION ASSIGNED TO A VARIABLE
// useful for debugging - stacktrace will show the function name

const myNamedFunction = function namedFunction () {
  console.log('This is a named expression assigned to a variable.')
};

// 2.2.2 NAMED FUNCTION EXPRESSION NOT ASSIGNED TO A VARIABLE

(function namedFunction () {
  console.log('This is a named expression not assigned to a variable.')
})

// DIFFERENCE BETWEEN FUNCTION DECLARATION AND FUNCTION EXPRESSION

if (true) {
  function world() {} //function expression
}

function a() { // function declaration
  function b() {} // function declaration
  if (0) {
    function c() {} // function expression
  }
}

// 3. IMMEDIATELY INVOKED FUNCTION EXPRESSIONS
// function expressions which are invoked as soon as the function is declared

(function () {
  console.log('IIFE');
})()

// 4. GENERATOR FUNCTION

// 4.1 GENERATOR FUNCTION DECLARATION

function* generator_function() {
  console.log('Part before stop');
  yield 100;
  console.log('Part after stop');
}

const generator = generator_function();
generator.next();
generator.next();

// 4.1 GENERATOR FUNCTION EXPRESSION

const gen2 = function* () {
  yield 'a';
  yield 'b';
  yield 'c';
};

const gen2_ins = gen2();

console.log(gen2_ins.next());
console.log(gen2_ins.next());

// 5. ARROW FUNCTION EXPRESSION

// no need to use return
// - arrow functions don't have their own bindings to 'this', 'arguments' or 'super'
// and should not be used as methods
// - arrow functions can't be used as constructors, calling them with 'new'
// throws a TypeError
// - cannot use 'yield' within their body and can't be created as generators

const myFunc1 = () => "value";

const magic = () => new Date;

const doubler = (item) => item * 2;
doubler(4);

const doubler2 = item => item * 2; // no need for parenthesis if its a single argument

const multiplier = (item, multi) => item * multi;
multiplier(4,2);

const materials = ['hydrogen', 'helium', 'lithium', 'beryllium'];

const met_len = materials.map(material => material.length);

console.log(met_len);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

// 6. FUNCTION CONSTRUCTORS

// - its not recommended to use, should be avoided whenever possible
// - calling the constructor directly can create functions dynamically, but
// suffers from security and similar performance issues like eval()
// - constructor creates functions which execute in the global scope
// - arguments are passed as strings
// - it doesn't inherit any scope other than the global scope
// - function body string passed to the function constructor must be parsed
// each and every time a constructor is called

const sum = new Function ('a', 'b', 'return a + b');

console.log(sum(2,6));

// 7. GENERATOR-FUNCTION CONSTRUCTOR

// - its not recommended to use

const GeneratorFunction = function* () {}.constructor;
const g = new GeneratorFunction("a", "yield a * 2"); // arg and function body
const iterator = g(10);
console.log(iterator.next().value);

// FUNCTION PARAMETERS

// default function parameters allow formal parameters to be initialized
// with default values if no value or undefined is passed

const multiply = function (a, b=1) {
  return a * b;
}

console.log(multiply(15, 2));
console.log(multiply(15));

const greeting = (name="Anonymous") => "Hello " + name;

console.log(greeting('John'));
console.log(greeting());

// REST PARAMETERS

// rest parameters syntax allows representing an indefinite number of arguments
// as an array

function total (...args) {
  let total = 0;
  for (const a in args) {
    total += a;
  }
  return total;
}

console.log(total(1,2,3));
console.log(total(1,2,3,4));

// ARGUMENTS OBJECT

function arg_fun (a,b,c) {
  console.log(arguments);
  console.log(arguments.length);
  //console.log(arguments.callee);
}

arg_fun(1,2,3);
//[Arguments] { '0': 1, '1': 2, '2': 3 }
//3
//[Function: arg_fun]

// GETTER AND SETTER
// you can define getters and setters on any standard built-in object or
// user-defined object that supports the addition of new properties
// these are LIGHT-WEIGHT methods

// GETTER
// - it can have an identifier which is either a number or a string
// - it must have exactly zero parameters
// - it's only possible to have one getter per object


const obj = {
  log: ['a', 'b', 'c'],
  get latest() {
    return this.log[this.log.length - 1];
  }
};

console.log(obj.latest);

// SETTER
// - it can have an identifier which is either a number or a string
// - it must have exactly one parameter

const language = {
  set current(name) {
    this.log.push(name);
  },
  log: []
};

language.current = 'EN';
language.current = 'FA';

console.log(language.log);

// METHOD DEFINITION SYNTAX

// - in object literals, you are able to define own methods in a shorter syntax
// similar to the getters and setters

const obj3 = {
  foo() {
    return 'bar';
  }
};

console.log(obj3.foo());

// DIFFERENT BEHAVIOR IN STRICT AND STRICT MODE

'use strict';

function f() {
  return 1;
}

{
  function f() {
    return 2;
  }
}

f() === 1; // true

// f() === 2 in non-strict mode

// DETERMINING WHETHER A FUNCTION EXISTS

if (typeof total === 'function') {
  // use noFunc()
} else {
  // do something else
}

// TESTING FUNCTION

export function testing () {
  return 'Import worked!';
}

// CURRYING 

// - translating a function with multiple arguments into a sequence of
// several functions with a single argument

function curried_add(x) {
  return function(y) {
    return function(z) {
      return x+y+z;
    }
  }
}

function curried_add2(x) {
  return y => z => x + y + z;
}

console.log(curried_add2(10)(20)(30));