// DESTRUCTURING ASSIGNEMENT FROM OBJECTS

const user = {name: 'John Doe', age: 34};

const name2 = user.name; // OLD WAY OF ASSIGNING OBJECT PROPERTIES TO VALUES
const age2 = user.age;

const {name, age} = user; // DESTRUCTURING ASSIGNEMENT, values names (name, age)
// have to correspond to properties names

console.log(name, age);

// DESTRUCTURING ASSIGNEMENT AND ADDING NEW VARIABLE NAMES

const player = {name: 'Fredrick Blat', age: 33};

const {name: playerName, age: playerAge} = player;

console.log(playerName, playerAge);

// DESTRUCTURING ASSIGNEMENT FROM NESTED OBJECTS

const worker = {
  johnDoe: {
    height: 180,
    email: 'johnDoe@freeCodeCamp.com'
  }
}

const {johnDoe: {height, email}} = worker; // only height and email variables
// are instantiated here, johnDoe is not a variable

console.log(height, email);

// DESTRUCTURING ASSIGNEMENT FROM NESTED OBJECTS AND ADDING NEW VARIABLE NAMES

const {johnDoe: {height: worker_height, email: worker_email}} = worker;

console.log(worker_height, worker_email);

// DESTRUCTURING ASSIGNEMENT FROM ARRAYS

const [a, b] = [1,2,3,4,5];

console.log(a, b);

const [x, y,, z,,, u] = [1,2,3,4,5,6,7]; //three comas (two additional) indicates how
// the index of the expected item

console.log(x,y,z,u);

// SWAPPING VALUES USING DESTRUCTURING ASSIGNEMENT

let aa = 8, bb = 6;

[aa, bb] = [bb, aa];

console.log(aa, bb);

// DESTRUCTURING ASSIGNEMENT AND REST PARAMETERS TOGETHER
// rest parameters are combined together into a seperate array
// rest element only works correctly as the last element

const [aaa, bbb, ...arr] = [1,2,3,4,5,6];

console.log(aaa, bbb, arr);

function removeFirstTwo(list) {
  const [_, __, ...shorterList] = list;
  return shorterList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);

// DESTRUCTURING ASSIGNEMENT TO PASS FUNCTION PARAMETERS

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

const half = ({max, min}) => (max + min) / 2.0; // FUNCTION DECLARATION
// it is not known what kind of object will be passed as argument, but it has
// to have properties max and min, in order to work

console.log(half(stats)); // object is only passed during function call,
// stats has to have max and min parameters


// TEMPLATE LITERALS

// template literals use ` (backticks) instead of single or double quotes
// string is multiline, therefore '/n' is not necessary
// variable placeholder ${variable} or expression placeholder ${a + b}

const person = {
  name: 'Zodiac Hasbro',
  age: 44
};

const greeting = `Hello my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting);

// OBJECT PROPERTY SHORT-HAND
// syntactic sugar which allows you to create objects easier

// PRE-ES6

function createWardrobe() {
  var hat = 1;
  var shorts = 5;
  var jumper = 8;
  var socks = 2;
  var myWardrobe = {
    hat: hat,
    shorts: shorts,
    jumper: jumper,
    socks: socks
  };
  
  return myWardrobe;
};

// POST-ES6

function createWardrobe2() {
  var hat = 1;
  var shorts = 5;
  var jumper = 8;
  var socks = 2;
  
  let myWardrobe = {
    hat,  // SYNTACTIC SUGAR HERE: OBJECT PROPERTY SHORT-HAND
    shorts,
    jumper,
    socks
  };

  return myWardrobe;
}

// CONCISE DECLARATIVE FUNCTIONS

// PRE-ES6

const person2 = {
  name: 'Taylor',
  sayHello: function() {
    return `Hello! My name is ${this.name}.`;
  }
};

// POST-ES6

const person3 = {
  name: 'Taylor',
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};

// CLASS KEYWORD
// UpperCamelCase should be used for classes

// CLASS WITH EXPLICIT CONSTRUCTOR
// constructor is called if New command is used 

class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
  takeOff() {
    console.log('To ' + this.targetPlanet + '!');
  }
}

const zeus = new SpaceShuttle('Jupiter');

console.log(zeus.takeOff());

// CLASS WITH IMPLICIT CONSTRUCTOR

class Rocket {
  launch() {
    console.log('To the moon!');
  }
};

const atlas = new Rocket(); // even thought constructor is not explicitly added
// the Rocket object, constructor is inherited from class

atlas.launch();

// USE GETTERS AND SETTERS TO CONTROL ACCESS TO AN OBJECT

class Thermostat {
  constructor(f) {
    this._f = f;
    this._c = 5/9 * (this._f - 32)
  }
  get temperature() {
    return this._c;
  }

  set temperature(c) {
    this._c = c;
  }

};

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius

// MODULES

// Importing a script in HTML code
// <script type='module' src='index.js'></script>

// EXPORTING FUNCTIONS FROM A MODULE

const add = (x, y) => {
  return x + y;
};

// ANOTHER EXPORT WAY

const deduct = (x, y) => {
  return x - y;
};

export { deduct };

// IMPORTING

import {testing} from './functions.js'

console.log(testing());

import * as myFunctions from './functions.js'
import { createBuilderStatusReporter, reduceEachTrailingCommentRange } from 'typescript';

// SPREAD SYNTAX

const myArr = [3,5,1];

const myMax1 = Math.max(3,5,1);
const myMax2 = Math.max(...myArr); // each item of an array has to be passed
// separately, in order for Math.max() to work

console.log('Compare maxes ', myMax1 === myMax2);

let arr1 = [1, -2, 3 ,5];
let arr2 = [8, 3, -8, 1];

console.log('Two spread syntax examples, ', Math.max(...arr1, ...arr2, 25, 1));

// MERGING ARRAYS USING SPREAD SYNTAX

console.log([1,3].concat([1,4]));

const merged_arr = [77, ...arr1, 99, 24, 4, ...arr2];

console.log('merged arr ', merged_arr);

// SPREAD SYNTAX ON STRING ARRAY

let str = 'Hello';

console.log([...str]);

// CREATING AN OBJECT WITH SPREAD SYNTAX

const iniitialObject = {1: 'one',
2: 'two',
3: 'three'};

const biggerObject = {4: 'pi', 6: 'phil', ...iniitialObject, 5: 'tom'};

console.log(biggerObject);

// PROTOTYPE

// - prototypes is the mechanism by which JavaScript objects inherit features
// from one another
// - prototype chain endes when an object has null as its prototype

// - prototype is stored in __proto__ property, but it shouldn't be accessed
// or modified directly, use Object.getPrototypeOf(myObject) instead

// - if you try to access a property of an object, if property can't be found
// in the object itself, the prototype is searched for the property. If the
// property still can't be found, the prototype's prototype is searched, and
// so until either the property is found, or the end of chain is reached,
// in which case 'undefined' is returned

const myObject = {
  city: 'Madrid',
  greet() {
    console.log(`Greetings from  ${this.city}`)
  }
}

const p = Object.getPrototypeOf(myObject);

console.log('Prototype', p);

// Object.prototype - THE MOST BASIC PROTYPE

// - all objects have Object.prototype as prototype
// - the prototype of Object.prototype is null

// MIDDLEWARE PROTOTYPES

const myDate = new Date();
let object = myDate;

console.log('!!!', Object.getPrototypeOf(object));

// OVERWRITING PROPERTIES AND METHODS

const myDate2 = new Date(1995, 11, 17);

console.log(myDate2.getYear());

myDate2.getYear = function () {
  console.log('something else!');
}

myDate2.getYear(); // getYear() method from assigned specifically to myDate2

// CREATING AN OBJECT BASED ON A SPECIFIC PROTOTYPE USING CREATE()
// Object.create(Prototype)

const personPrototype = {
  greet() {
    console.log('hello!');
  }
};

const carl = Object.create(personPrototype);

carl.greet();

// CREATING AN OBJECT BASED ON A SPECIFIC PROTOTYPE USING ASSIGN()
// Object.assign(target, source)

const personPrototype2 = {
  greet() {
    console.log(`hello, my name is ${this.name}!`);
  }
}

function Person(name) {
  this.name = name;
}

Object.assign(Person.prototype, personPrototype2);
// (target, source)

const reuben = new Person('Reuben');

reuben.greet()

console.log(reuben);
console.log(typeof reuben);

// bind() vs apply() vs call()

// call()

// call() is a function method that you use to change the value of 'this' inside
// another function and execute it with arguments provided

// syntax: func.call(thisObj, args1, args2, ...)

// func is function that needs to be invoked with a different 'this' object

// 'thisObj' is an object or value that needs to be replaced with the 'this'
// keyword present inside the function 'func'

// CONSTRUCTOR FUNCTION
function Car(type, fuelType) {
  this.type = type;
  this.fuelType = fuelType;
}

// CONSTRUCTUR FUNCTION
function setBrand(brand) {
  Car.call(this, 'convertible', 'petrol');
  this.brand = brand;
  console.log(`Car details =`, this);
}

// CONSTRUCTOR FUNCTION
function definePrice(price) {
  Car.call(this, 'convertible', 'diesel');
  this.price = price;
  console.log(`Car details`, this);
}

const newBrand = new setBrand('Brand1');
const newCarPrice = new definePrice(10000);

// example 2: calling a function with no arguments in JS

// this code gives syntax error even though it was pasted from the tutorial
/*
const newEntity = (obj) => console.log(obj);

function mountEntity(){
	this.entity = newEntity;
	console.log(`Entity ${this.entity} is mounted on ${this}`);
}

mountEntity.call();
*/

// apply()

// apply() method is very similar to the call() method. The only difference
// is how arguments are passed. In apply(), you can pass an array with arguments

// syntax: func.apply(thisObj, [arg1, arg2, ...])
// syntax: func.apply(thisObj, new Array(args1, args2))

function Car2(type, fuelType) {
  this.type = type;
  this.fuelType = fuelType;
}

function setBrand2(brand) {
  Car2.apply(this, ['combi', 'petrol']);
  this.brand = brand;
  console.log(`Car details=`, this);
}

function definePrice2(price) {
  Car2.apply(this, ['convertible', 'diesel']);
  this.price = price;
  console.log(`Car details=`, this);
}

const newBrand2 = new setBrand2('Brand2');
const newCarPrice2 = new definePrice2(100);

// syntax: func.apply(thisObj, arguments)

function addUp() {
  const args = Array.from(arguments);
  this.x = args.reduce((prev, curr) => prev + curr, 0);
  console.log('this.x=', this.x);
}

function driverFunc() {
  const obj = {
    inps: [1,2,3,4,5,6]
  }
  addUp.apply(obj, obj.inps);
}

driverFunc();

// bind()

// bind() method creates a copy of a function with a new value to the 'this'
// present inside the calling function

// syntax: func.bind(thisObj, arg1, arg2, ... argN)

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {
      counter: 1
    };
  }
  handleCode() {
    console.log('HANDLE CODE THIS=', this.state);
  }
  render() {
    return <button onClick={this.handleCode}>Click Me</button>;
  }
}