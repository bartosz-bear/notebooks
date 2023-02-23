// https://www.freecodecamp.org/news/execution-context-how-javascript-works-behind-the-scenes/

// FUNCTION DECLARATION - a function that has assigned name
// function doSomething() {/* ... */};

// FUNCTION EXPRESSION - anonymous functions, without a name, usually used
// in statements.
// let someValue = function () {/* ... */}

// SCRIPT LOADING

// - when a user enters an URL to request HTML from a server, then server
// sends back HTML with JS code. This code is loaded by V8 Engine or some other
// - when a user clicks on an HTML object with a special hook like 'onClick',
// assuming a script is assigned to that hook

// EXECUTION CONTEXT

// EXECUTION CONTEXT is an environment created by the engine after a script
// was loaded to the engine

// During execution context run-time:
// - script code gets parsed by a parser
// - variables and functions are stored in memory
// - executable byte-code gets generated
// - machine code gets executed

// TYPES OF EXECUTION CONTEXTS
// - GLOBAL EXECUTION CONTEXT (GEC)
// - FUNCTION EXECUTION CONTEXT (FEC)

// GLOBAL EXECUTION CONTEXT

// GEC is created after an engine receives a script file
// GEC is the base Execution Conext where all JS code that IS NOT INSIDE OF
// A FUNCTION gets executed
// For every JS file, there can only be one GEC

// FUNCTION EXECUTION CONTEXT
// FEC is created for every function call (not function declaration)
// there can be more than one FEC, as a new FEC is created for each function call

// PHASES OF EXECUTION CONTEXT (BOTH GEC AND FEC)

// PHASE 1: CREATION PHASE
// PHASE 2: EXECUTION PHASE

// CREATION PHASE

// EXECUTION CONTEXT OBJECT (ECO) - this object is created during creation
// phase and stores information which are later used in the Execution Phase

// CREATION PHASE CONSISTS OF THE FOLLOWING STEPS

// 1. CREATION OF THE VARIABLE OBJECT (VO)
// 2. CREATION OF THE SCOPE CHAIN
// 3. SETTING THE VALUE OF THE 'this' KEYWORD

// CREATION OF THE VARIABLE OBJECT

// VARIABLE OBJECT IN GEC - is an object-like container created within an Execution
// Context. It stores variables and function declarations defined within the
// Execution Context.

// In the Global Execution Context, for each variable declared with the var
// method, a property is added to VO that points to that variable and is set
// to 'undefined'.

// for every function declaration, a property is added to the VO, pointing to
// that function, and that property is stored in memory. This means that all
// the function declarations will be stored and made accessible inside the VO,
// even before teh code starts running.

// ARGUMENT OBJECT IN FEC - FEC generates an array-like object called the
// 'arguments' object, which includes all of the arguments supplied to the 
// function.

function func1(a,b,c) {
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
}

func1(1,2,3)

// HOISTING

// HOISTING is the process of storing variables and function declarations in 
// memory prior to the execution of the code.

// Function and variable declarations are hoisted in Javascript. This means
// that they are stored in memory of the current Execution Context's VO and
// made available within the Execution Context even before the execution of
// the code begins.

// FUNCTION HOISTING

// Hoisting allows us to call a function before it was defined in code. 

getAge(1985)

function getAge (yearOfBirth) {
  console.log(new Date().getFullYear() - yearOfBirth)
}

// Hoisting only works for function declarations, not expressions.
// It won't work because var getAge2 will hoisted to 'undefined', it will 
// be treated as a variable. Only function declarations are hoisting as
// functions.

//getAge2(1990); // TypeError: getAge2 is not a function
var getAge2 = function (yearOfBirth) {
  console.log(new Date().getFullYear() - yearOfBirth)
}

// VARIABLE HOISTING

// variable initialized with 'var' keyword are stored in the memory of the 
// current Execution Context's VO as a property, and initialized with the 
// value 'undefined'. This means, unlike functions, trying to access the value
// of the variable before it is defined will result in 'undefined'

console.log(greetings);

var greetings = 'some string.'

// variable hoisting does not work for variables initialized with the 'let'
// and 'const' keywords. Trying to access a variable ahead of declaration and
// use the 'let' and 'const' keywords to declare it later will result in 
// a ReferenceError. In this case, they be will hoisted by not assigned with
// 'undefined' value.

// CREATION OF THE SCOPE CHAIN

// each Function Execution Context creates its scope: the space/environment
// where the variables and functions it defined can be accessed 

// LEXICAL SCOPING

// Lexical scoping means that when a function (inner function) is defined in
// another function (outer function), the inner function has access to the code
// defined in that of the outer function, and that of its parents.

// However, the outer function does not have access to the code within the 
// inner function.

// CLOSURES

// Closure allows us to remember an outer scope of a function, when the inner
// function is called after the inner function has no access to the outer scope anymore.

// Global scope: outer function scope: inner function scope.

// We want to keep variables inside the outer function scope, so it's not
// freely available in the global scope. However, we still want to maintain
// access to these variables (from the global scope) but from a 'safe' environment
// This safe environment is a closure of the inner function.

// Functions can remebember these referenced scoped variables via closure

// Closure is a function combined with references to the variables defined
// outside of it. Closures maintain the variable references, which allow
// functions to access variables outside of their scope. They 'enclose' the
// function and the variables in its environment.

// In other words, a closure can be defined as a persistent scope that is held
// onto by a variable.

// Variables can maintain references to their parent scope even after their
// programming block has been executed, as long as these variables have
// a reference somewhere.

// Closure is one of the most important language characteristics ever invented
// in programming—it underlies major programming paradigms, including
// Functional Programming (FP), modules, and even a bit of class-oriented
// design. Getting comfortable with closure is required for mastering JS and
// effectively leveraging many important design patterns throughout your code.

// Closure is a behavior of functions and only functions

// For closure to be observed, a function must be invoked, and specifically
// it must be invoked in a different branch of the scope chain from where
// it was originally defined.

// EXAMPLE 1

function sayWord(word) {
  return () => console.log(word); // a function returns another function
} // the returned function (() => console.log(word)) has access to 'word'
// thtrough lexical scoping

const sayHello = sayWord('hello');

sayHello(); // sayHello maintains access to 'word' parameter through a closure

// EXAMPLE 2

function outerFunction() {
  let delayed = veryLongOperation();

  let innerFunction = function() {someCallback(delayed); } // innerFunction
  // is a function that is able to access its parent scope elements like
  // the 'delayed' object.
}

// outer/global scope: RED(1)

function lookupStudent(studentID) {
  // function scope: BLUE(2)

  var students = [
    { id: 14, name: "Kyle" },
    { id: 73, name: "Suzy" },
    { id: 112, name: "Frank" },
    { id: 6, name: "Sarah" }    
  ];

  return function greetStudent(greeting) {
    // function scope: GREEN(3)

    var student = students.find( // reference to 'students' is a closure
      // function scope: ORANGE(4)
      student => student.id == studentID // ref to 'studentID' is a closure
    );

    return `${greeting}, ${student.name}!`;
  };
}

var chosenStudents =  [
  lookupStudent(6), // call to lookupStudent is completed, but closure remains
  lookupStudent(112) // call to lookupStudent is completed, but closure remains
];

console.log(chosenStudents[0].name);

console.log(chosenStudents[0]('Hello'));
// Output: 'Hello, Sarah!' // thanks to closure 'Sarah' is still available

console.log(chosenStudents[1]('Howdy'));
// Output: 'Hello, Frank!' // thankts to closure 'Frank' is still available

console.log(chosenStudents[0].studentID); // undefined

// EXAMPLE 3

function adder(num1) {
  return function addTo(num2) {
    return num1 + num2;
  };
}

var add10To = adder(10);
var add42To = adder(42);

add10To(15); // 25
add42To(9); // 51

// CLOSURE is associated with an instance of a function, rather than its
// single lexical definition. 

// Closure is a live link to a value, not a snapshot.  We are not limited to
// merely reading a value, the closed-over variable can be updated as well

// UPDATING A CLOSURE VALUE

function makeCounter() {
  var count = 0;

  return function getCurrent() {
    count += 1;
    return count;
  };
}

var hits = makeCounter();

console.log('hits', hits());

console.log('hits', hits());
console.log('hits', hits());

// ENCLOSING SCOPE OF A CLOSURE IS TYPICALLY A FUNCTION, BUT IT DOESN'T HAVE
// TO BE. EXAMPLE WITH AN OBJECT

var hits2;

{ // an outer scope (but not a function)
  let count = 0;
  hits2 = function getCurrent() {
    count = count + 1;
    return count;
  };
}

console.log('hits2', hits2());

console.log('hits2', hits2());
console.log('hits2', hits2());

// CLOSURE IS VARIABLE ORIENTED, NOT VALUE ORIENTED

var keeps = [];

for (var i = 0; i < 3; i++) {
  keeps[i] = function keepI() {
    return i;
  };
}

keeps[0](); // 3 because i=3 at this point of time, for loop run its course
keeps[1](); // 3 because i=3 at this point of time, for loop run its course
keeps[2](); // 3 because i=3 at this point of time, for loop run its course

// DIFFERENCE BETWEEN let i; AND var i; IN A FOR LOOP

var keeps2 = [];

for (let i = 0; i < 3; i++) {
  keeps2[i] = function keepEachI() {
    return i;
  };
}

// Since we are using 'let', three 'i's are created, one for each loop
keeps2[0](); // 1
keeps2[1](); // 2
keeps2[2](); // 3

// CLOSURE IS MOST COMMONLY ENCOUNTERED WITH CALLBACKS

// studentID will be held in a closure

/*
function lookupStudentRecord(studentID) {
  ajax(
    `https://some.api/student/${studentID}`,
    function onRecord(record) {
      console.log(
        `${record.name} (${studentID})`
      );
    }
  );
}

lookupStudentRecord(114); // Frank (114)
*/

// EVENT HANDLERS ARE ANOTHER COMMON USAGE OF CLOSURE

// label will be held in a closure

/*
function listenForClicks(btn, label) {
  btn.addEventListener('click', function onClick() {
    console.log(
      `The ${label} button was clicked!`
    );
  });
}

var submitBtn = document.getElementById('submit-btn');

listenForClicks(submitBtn, 'Checkout');
*/

// VARIABLES THAT ARE MERELY PRESENT BUT NEVER ACCESSED DON'T RESULT IN CLOSURE

function lookupStudent2(studentID) {
  return function nobody() {
    var msg = "Nobody's here yet";
    console.log(msg);
  };
}

var student = lookupStudent2(112);

student();

// IF THERE'S NO FUNCTION INVOCATION, CLOSURE CAN'T BE OBSERVED

function greetStudent(studentName) {
  return function greeting() {
    console.log(
      `Hello, ${studentName}!`
    );
  };
}

greetStudent('Kyle'); // greeting() is not invoked, therefore no console.log

// CLOSURE is observed when an inner function uses variable from outer scope
// while running in a scope where those variable wouldn't be accessible

// This observation-oriented definition means that we shouldn't dismiss 
// closure as some indirect, academic trivia. Instead, we should look and plan
// for the direct, concrete effects closure has on our program behavior.

// THE CLOSURE LICECYCLE AND GARBAGE COLLECTION

// since closure is inherently tied to a function instance, its closure over
// a variable lasts as long as there is still a reference to that function

// variable is garbage collected after a reference to function ceases to exist


function manageBtnClickEvents(btn) {
  var clickHandlers = [];

  return function listener(cb) {
    if (cb) {
      let clickHandler = 
        function onClick(evt) {
          console.log('clicked!');
          cb(evt);
        };
      clickHandlers.push(clickHandler);
      btn.addEventListener(
        'click',
        clickHandler
      );
    }
    else {
      for (let handler of clickHandlers) {
        btn.removeEventListner(
          'click',
          handler
        );
      }

      clickHandlers = [];
    }
  };
}

var onSubmit = manageBtnClickEvents(mySubmitBtn);

onSubmit(function checkout(evt) {
  // handle checkout
});

onSubmit(function trackAction(evt) {
  // log action to analytics
});

onSubmit();

// https://www.digitalocean.com/community/tutorials/js-closures
// https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/ch7.md