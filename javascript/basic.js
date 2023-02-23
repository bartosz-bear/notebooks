// let SCOPING

// var creates a variable in a global scope regardless of when it's declared
// for that reason it should not be used

// scope of let variable depends when a variable was defined
// possible: block scope, statement scope, expression scope
// scope can be a limited to for loop scope, or if/else scope

function checkScope() {
  let i = 'function scope'; // FUNCTION SCOPE
  if (true) {
    let i = 'block scope'; // BLOCK SCOPE
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}

// const MUTABILITY

// objects (including arrays and functions) assigned to a variable using const
// are still mutable
// using const declaration only prevents reassignement of variable identifier

const s = [5,6,7];
s[2] = 45
console.log(s); // will print out [5,6,45]
// s = [1,2,3]; // this is illegal

// OPERATORS

// LOOSE (COERCIVE) EQUALITY OPERATORS

// ==
// !=
// >
// <
// >=
// <=

// STRICT EQUALITY OPERATOR

// strict equality operator ( === ) doesn't do type coercion
// !==

// LOGICAL OPERATORS

// && - AND

if (10 > 9 && 15 < 16) {
  console.log('AND OPERATOR');
}

// || - OR

if (10 > 9 || 16 < 15) {
  console.log('OR OPERATOR')
}

// NULLISH COALESCING OPERATOR (??)

// - a logical operator that returns its right-hand side operand when it's left
// hand side operand is null or undefined
// - otherwise, it returns its left-hand side operand

const foo = null ?? 'default string';
console.log(foo);

const baz = 1 ?? 42;
console.log(baz);



// ELSE IF
// order is important (goes from top to bottom)

const a = 2;

if (a === 1) {
  console.log(1);
} else if (a === 2) {
  console.log(2);
} else {
  console.log('Else');
}

// SWITCH STATEMENT
// cases are excuted from the first matches case value until a break is encountered
// case values are tested with strict equality (===)

function caseInSwitch(val) {
  let answer = "";

  switch (val) {
    case 1:
      answer = 'alpha';
      break;
    case 2:
      answer = 'beta';
      break;
    case 3:
      answer = 'gamma';
      break;
    case 4:
      answer = 'delta';
      break;
  }
  return answer;
}

caseInSwitch(1);

// DEFAULT STATEMENT IN SWITCH CLAUSE
// if none of the case options was executed, default case will be executed
// think of it like the final else statement in an if/else chain

function switchOfStuff(val) {
  let answer = "";

  switch (val) {
    case 'a':
      answer = 'apple';
      break;
    case 'b':
      answer = 'bird';
      break;
    case 'c':
      answer = 'cat';
      break;
    default:
      answer = 'stuff'
  }
  return answer;
}

switchOfStuff(1);

// EMPTY SWITCH CASES

// if the break statement is omitted from a switch case, the following case
// statements are executed until break is encountered

function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = 'Low';
      break;
    case 4:
    case 5:
    case 6:
      answer = 'Mid';
      break;
    case 7:
    case 8:
    case 9:
      answer = 'High';
      break;
  }


  // Only change code above this line
  return answer;
}

sequentialSizes(1);

// SWITCH WITH CONDITIONAL CASES - switch(true)
// in order to activate this switch, pass true in the switch conditional

let count = 0;

switch (true) {
  case count <= 0:
    console.log(count + " " + "Hold");
    break;
  case count >0:
    console.log(count + " " + "Hold");
    break;
};


// BOOLEAN COMPARISON

console.log(1 === 1);
console.log(1 > 1);

// ARRAYS

// CHECK IF AN ITEM IS IN AN ARRAY

console.log([2,3,4,5,6].includes(2));

// OBJECTS

// objects are similar to arrays, but they don't use indexes, they use properties
// objects are are useful for storing data in a structured way, to represent
// real life objects, like a cat
// strings, numbers and quotes are not necessary for single word properties
// no quotes properties will be coerced into strings
// different types are eligible as object properties

const myDog = {
  "dog name": 'Kate',
  'legs': 4,
  tails: 1,
  friends: ['Tim', 'Phil']
};

console.log(myDog);

// OBJECTS DOT NOTATION AND BRACKET NOTATION
// these two notations can be used to get and set properties on an object

// DOT NOTATION

const legs = myDog.legs; //GETTER
const friends = myDog.friends;

myDog.tails = 5; //SETTER

console.log('tails: ', myDog.tails);

myDog.color = 'Brown'; //ADDING A NEW PROPERTY

console.log('dog color', myDog.color);

delete myDog.color; // DELETING A PROPERTY

// BRACKET NOTATION

// if a property of an object has a space in the name, you need to use bracket
// notation

console.log(myDog["dog name"]); //GETTER

myDog['dog name'] = 'Happy Kate'; //SETTER
console.log('dog name', myDog["dog name"]);

myDog['place of birth'] = 'Kyoto'; //ADDING A NEW PROPERTY

console.log(myDog['place of birth']);

delete myDog['place of birth']; //ADDING A PROPERTY

// ACCESS OBJECT PROPERTIES USING VARIABLES

const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

const playerNumber = 16;
const player = testObj[playerNumber];

// DOES OBJECT HAVE A PROPERTY?

// obj.hasOwnProperty('property');

function checkObj(obj, checkProp) {
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  }
  return 'Not Found';
}

// COMPLEX OBJECTS
// object can have different data types as properties

// An array of two comlex objects

const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  {
    'artist': 'Bon',
    'title': 'japa',
    'release_year': 1997,
    'formats': ['CD', 'LP']
  }
];

// ACCESSING NESTED OBJECTS

const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

const gloveBoxContents = myStorage.car.inside['glove box'];
console.log(gloveBoxContents);

// ACCESSING COMPLEX ARRAYS AND OBJECTS STRUCTURE

const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

const secondTree = myPlants[1].list[1];

// FOR IN STATEMENT

const users = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
}

for (let user in users) { // it iterates over the object and return keys
  console.log(user);
}

// OBJECT KEYS

// Object.keys(myObject) - creates an array of myObject keys

const users_keys = Object.keys(users);
console.log('keys ', users_keys);


// WHILE LOOP

const ourArray = [];
let i = 0;

while (i < 5) {
  ourArray.push(i);
  i++;
}

// FOR LOOP
// for (initialization_value, condition, change_expression)

const myArray2 = [];

for (let i = 1; i < 6; i++) {
  myArray2.push(i);
}

const myArray5 = [];

for (let i = 1; i < 10; i+=2) { // Iterate every second number
  myArray5.push(i);
}

// ITERATE THROUGH AN ARRAY

const myArr4 = [2, 3, 4, 5, 6];
let total = 0

for (let i = 0; i < myArr4.length; i += 1) {
  total += myArr4[i];
}

// NESTING FOR LOOPS OR LOOPING THROUGH NESTED ARRAYS

const arr = [
  [1, 2], [3, 4], [5, 6]
];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}


// DO-WHILE LOOP
// it will do one iteration of code no matter what, and then will continue
// to run the loop while the condition is true

const myArray3 = [];
let j = 10;

do { // execute code inside the bracket one and then start checking the condition
  myArray3.push(i);
  j++;
} while (j < 10)

console.log(myArray3);

// RECURSION

// they are used as an alternative to a for loop or while
// there are two necessary component of a recursive function: base case and
// update of a count
// base case is a constant value which acts as a stop bound so the recursion doesn't run forever
// a function should call itself in the body and update the the count, if the
// the count doesn't update, the function will also run forever

// IMPORTANT COMPONENTS
// - recursion is not a separate feature of a programming language, it's a pattern
// which emerges organically
// - operator precedence
// - stack data structure
// - call stack as the underlying data structure of functions
// - iteration over a call stack
// - base case (recursion bound)
// - inflation and deflation of the call stack

// OPERATOR PRECEDENCE
// - recursion is based on the highest precedence of a function call

// STACK DATA STRUCTURE
// - stack implementation has a maximum and minimum capacity
// - when we try to add one more items to the full stack, we get the
// stackoverflow error
// - when we try to remove an element from an empty stack we the underflow error
// - stack has two methods: push() and pop()
// - push() adds an element on top of the stack
// - pop() removes and element from the top of the stack
// - stack resembles a stack of clean plates after washing, when we wash one
// more plate, we add it on the top of the stack, when we want to use a clean
// place we grab it from the top of the stack

// CALL STACK
// whenever JavaScript engine executes a function, it pushes it to the Call Stack
// 

// DIFFERENT APPROACH TO TEACHING RECURSION

// https://www.quora.com/Which-programming-concept-do-people-usually-find-harder-loops-or-recursion/answer/Shriram-Krishnamurthi

// https://www.quora.com/How-does-professor-Shriram-Krishnamurthi-teach-the-concept-of-recursion/answer/Shriram-Krishnamurthi

// VERY DEEP EXPLANATION OF RECURSION
// https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-use-recursion-to-create-a-countdown/305925/2

// BOOK WHERE RECURSION IS TAUGHT PROPERLY

// https://htdp.org/2022-8-7/Book/index.html

function sum(arr, n) {

  if (n === 0) { // base case
    return 0;
  } else if (n === 1) { // base case
    return arr[0];
  }

  return arr[n-1] + sum(arr, n-1); // n-1 is the update of the count
}

function multiply(arr, n) {
  if (n <= 0) { //base case
    return 1;
  } else {
    return multiply(arr, n - 1) * arr[n - 1]; // n-1 is the update of the count
  }
}

// ANOTHER RECURSION EXAMPLE (COUNT-UP AND COUNT-DOWN)


function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray; // RESULT: [1, 2, 3, 4, 5]
  }
}

function countdown(n){
  if (n < 1) {
    return [];
  } else {
    const countArr = countdown(n - 1);
    countArr.unshift(n);
    return countArr; // RESULT: [5,4,3,2,1]
  }
}

function rangeOfNumbers(startNum, endNum) {
  if (startNum > endNum) {
    return [];
  } else {
    const countArr = rangeOfNumbers(startNum, endNum - 1);
    countArr.push(endNum);
    console.log(countArr);
    return countArr;
  }
}

rangeOfNumbers(1,5);

// RANDOM

// Math.random()
// returns a number between 0 (inclusive) and 1 (exclusive)

const r = Math.random();
console.log(r);

// Returning random integers between 0 and 9

const ri = Math.floor(Math.random() * 10);
console.log(ri);

// Returning a random integer between lower bound and upper bound

const myMin = 5;
const myMax = 15;

function randomRange(myMin, myMax) {
  // Only change code below this line
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

console.log(randomRange(myMin, myMax));

// CONVERT A STRING INTO INTEGER
// parseInt()
// if the function can't parse a string and covert to int, it returns NaN

const sti = parseInt("007");

console.log(typeof sti);

// PARSE STRING WITH RADIX (NUMERIC BASE SYSTEM)

const bin = parseInt("10011", 2); // binary
console.log(bin);

const hex = parseInt("0x45ff"); // hexadecimal
console.log(hex);

// TERNARY OPERATOR (CONDITIONAL)

function checkEqual(a, b) {
  return a == b ? 'Equal' : 'Not Equal';
}

console.log(checkEqual(1, 2));

// NESTED TERNARY OPERATOR

function checkSign(num) {
  return (num > 0) ? "positive"
    : (num == 0) ? "zero"
    : "negative";
}

console.log(checkSign(10));

// STRICT OBJECT IMMUTABILITY

// Object.freeze(myObject);
// if JS is running in strict mode, it won't be possible to change

function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // Only change code below this line
  Object.freeze(MATH_CONSTANTS);

  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
//const PI = freezeObj(); // uncomment this to demostrate immutability