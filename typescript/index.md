## WHAT IS NEEDED?

npm
npx
node
typescript (npm i typescript)
vscode (IDE)

## CREATE A NEW NODE.JS PROJECT

mkdir project_directory
cd project_directory
npm init -y

## CREATE A NEW TYPESCRIPT PROJECT

npx tsc --init --rootdir src --outdir lib

## START TYPESCRIPT COMPLILATOR IN WATCH MODE (IT WILL RECOMPILE AFTER EACH FILE CHANGE)

npx tsc --watch

## RUN A JS SCRIPT AFTER IT WAS COMPLILED FROM TS

node ./lib/myfile.js

52114020040000300237649330

## COMPILYING ON-THE-FLY AND RUNNING TS FILE

INSTALL ts-node

npm -i ts-node

RUN ts-node

npx ts-node ./my_file.ts

## BUILD AND PUBLISH YOUR LIBRARY ON NPM

npm run build

npm publish

npm i my_library // install a library previously published

## [2.] PRIMITIVE TYPES

```ts
import { Type } from "typescript";

let message: string = 'Hello world!';
console.log(message);

let isPresent: boolean = false;
let magic: number = 66.5;
let hello: string = 'world';

let notDefined: undefined = undefined;
let notPresent: null = null;

let penta: symbol = Symbol('star');
//let biggy: bigint = 24n;
```

## [3.] INSTANCE TYPES

```ts
// Type for regular expressions
let regexp: RegExp = new RegExp('ab+c');

let array: Array<number> = [1,2,3];

let set: Set<number> = new Set([1,2,3]); // no duplicates
```

```ts
/**  A first in first out collection **/
class Queue<T> {
    private data: Array<T> = [];
    push(item: T) {this.data.push(item);}
    pop(): T | undefined {return this.data.shift();}
}

let queue: Queue<number> = new Queue();
```

## [4.] ARRAYS AND TUPLES


- array has variable length

```ts
let array2: Array<number> = [1,2,3];
let array3: number[] = [1,2,3]; // syntactic sugar for array
```

- tuple has a fixed length

```ts
let tuple: [number, number] = [0,0];

tuple = [1,2];
tuple = [2,5];
//tuple = [5]; // Error: requires two arguments
//tuple = [5,4,3]; // Source has 3 elements but target allows only 2.
//tuple = ['elite', 1337]; // Error: Type string is not assignable to type number
```

## [5.] OBJECT TYPES AND TYPE ALIASES

- name of the type allows us to indicate our intent
- aliases allows us to reduce code duplication (DRY)

```ts
type Point = {x: number, y: number}; // point in space

// object type
let center: {x: number, y: number} = {
    x: 0,
    y: 0,
};

let unit: Point = {
    x: 1,
    y: 1,
};
```

## [6.] CONST DECLARATIONS

```ts
type Point2 = {x: number, y: number};
const point: Point2 = {x: 0, y: 0};

//point = {x:1, y:8}; // ERROR: cannot assign to a point because its a constant

point.x = 123;
point.y = 345;

console.log(point);
```

## [21] ASYNC AWAIT

- `async await` works on top of JS promises
- `async await` functionality is built on top of Generators

```ts
async function foo() {
    try {
        let val = await getMeAPromise();
        console.log(val);
    } catch (err: any) {
        console.log('Error: ', err.message);
    }
}
*/

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

const mainAsync = async () => {
    await delay(1000);
    console.log('1s');
    //await delay(1000);
    //console.log('2s');
    //await delay(1000);
    //console.log('3s');
}

mainAsync();

const asyncFunc = async () => ':wave:';
const myPromiseString = asyncFunc();

console.log(myPromiseString);
```

You can use await keyword to convert a promise into its value

```ts
const myWrapperFunction = async () => {
    const myResolvedPromiseString = await asyncFunc(); // Convert a promise to a string
    console.log(myResolvedPromiseString);
};

myWrapperFunction();
```


Throwing an error. It will stop execution of the script

```ts
const myThrowingFunction = async () => {
    throw new Error('Do not call this'); // throw error in runtime
};

//myThrowingFunction();

const asyncFunctionCatching = async () => {
    const myReturnValue = 'Hello world';
    try {
        await myThrowingFunction();
    } catch (error) {
        console.error('myThrowingFunction failed', error);
    }
    return myReturnValue;
};

const exampleSquareRootFunction = async (input: any) => {
    if (isNaN(input)) {
        throw new Error('Only numbers are accepted');
    }

    if (input < 0) {
        return {success: false, message: 'Cannot square root negative number'}
    } else {
        return {success: true, value: Math.sqrt(input)};
    }
};

console.log(exampleSquareRootFunction(2));

//console.log(isNaN('a'));

const checkSquareRoot = async (value: number) => {
    const response = await exampleSquareRootFunction(value);
    if (response.success) {
        response.value;
    }
};
```

## INTERMEDIATE

## [23] LEXICAL THIS

- `this` keyword

There are two ways of thinking about 'this' keyword' in JS

1. calling context
2. lexically scoped 

Arrow functions don't define their own 'this' so they go to enclosing scope and look for 'this' as they would for any other variable.

`this` in a normal function defines their own `this`, therefore `this` from outer scope is not available

Example of 'calling context' use of `this` keyword

```ts
class Person {
    private _age: number
    constructor(_age: number) {
        this._age = _age;
    }
    growOld() {
        this._age++;
    }
    age() {
        return this._age;
    }
}

const person = new Person(0);
person.growOld(); // this=Person 'calling context'
console.log('age:', person.age());
```

Example of 'lexically scoped' `this` - Arrow function

```ts
class LexicalPerson {
    private _age: number
    constructor(_age: number) {
        this._age = _age;
    }
    growOld = () => {
        this._age++;
    }
    age = () => {
        this._age;
    }
}

const lex = new LexicalPerson(0);
const growLexOld = lex.growOld;
setTimeout(lex.growOld, 1000);
```

## [42] ASSERTION FUNCTIONS

- this is relevant for event driven paradigm
- assertion function is a software pattern

```ts
type Person = {
    name: string,
    dateOfBirth?: Date
}

// Assertion Function
function assert(condition: unknown, message: string): asserts condition {
    if (!condition) throw new Error(message);
}

function assertDate(value: unknown): asserts value is Date {
    if (value instanceof Date) return;
    //else throw new TypeError('value is not a Date');
}

const maybePerson = 'loadPerson()';

assert(maybePerson != null, 'Could not load a person')
console.log('Name', maybePerson.name);

assertDate(maybePerson.dateOfBirth);
//console.log('Date of Birth:', maybePerson.dateOfBirth.toISOString());
```

## USER DEFINED TYPE GUARDS VS ASSERTION FUNCTIONS

In application code: use user defined type guards. In tests: use assertion functions.

## [43] FUNCTION OVERLOADING

function overloading = one implementation with multiple signatures

- function overloads are considered possible signatures for a function
- the implementation signature must be compatible with all the overloads
- function overloading is compile time only
- this is only for the author of the function, not intended for comments, library distribution or as part of API

```ts
function reverse(string: string): string; // won't be part of JS file
function reverse(stringArray: string[]): string[]; // won't be part of JS file
function reverse(stringOrStringArray: string | string[]) {
    if (typeof stringOrStringArray === 'string') {
        return stringOrStringArray.split('').reverse().join('');
    } else {
        return stringOrStringArray.slice().reverse();
    }
}

const hello1 = reverse('hello');
const h_ello1 = reverse(['h','e','l','l','o']);

function makeDate(timestamp: number): Date;
function makeDate(year: number, month: number, date: number): Date;
function makeDate(timestampOrYear: number, month?: number, day?: number): Date {
    if (month != null && day != null) {
        return new Date(timestampOrYear, month - 1, day);
    } else {
        return new Date(timestampOrYear);
    }
}

const doomsday = makeDate(2000, 12, 12);
const epoch = makeDate(0);

console.log(doomsday);
```