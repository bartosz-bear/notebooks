// ARRAY

let simpleArray = ['one', 2, {}, true, "", undefined, null, [[],[]]];
console.log('Length', simpleArray.length);

// INDEXING

let ourArray = ['a','b','c'];

let ourVariable = ourArray[0];
console.log(ourVariable);

// SETTING VALUES

ourArray[1] = 'new';

console.log(ourArray);

// OPERATIONS ON ARRAYS

// ADDING: unshift() [] push()
// REMOVING: shift() [] pop()

// pop() - removes last item from an array and returns it

const myArray = [1,2, 'a'];

const returned = myArray.pop()

console.log(returned);

// shift() - removes first item from an array and returns it

const lastItem = myArray.shift()

console.log(lastItem);

// push() - add an item at the end of an array

myArray.push(3);

myArray.push(7, 8, 'a'); // push several items at the same time

console.log('After push', myArray);

// unshift - add an item at the begining of an array

myArray.unshift(0);

myArray.unshift(1,2,3, 'a');

console.log('After unshift', myArray);

// SPLICE .splice()

// mutating the original array
// returns a new array which is spliced part of the old array

// another major difference: first argument is the inclusive index to start
// splicing, second argument is number of items to include

let array = ['today', 'was', 'not', 'so', 'great', 1];

console.log('Array before splice:', array)

let newArray = array.splice(2,2); // arg1: start removing at index 2, arg2:
// remove 2 elements, returns: an array of removed elements

console.log('old array ', array, 'removed elements ', newArray);

// USE SPLICE TO ADD REMOVE AND ADD NEW ELEMENTS SIMULTANEOUSLY

array.splice(0,1, 'new item', 1, 'and one more item');

console.log('Splice (remove and add) ', array);

// - if the second argument is not provided, splice will remove items until
// the end

// SLICE .slice()

// shallow copy - inital array is untouched
// slice copies or extracts a given number of elements to a new array, the original
// array is left untouched
// - takes two arguments (startIndex, endIndex)
// [0,1,2,3,4].slice(2, 4) // startIndex inclusive, endIndex non-inclusive

console.log('$$$', [0,1,2,3,4].slice(2,4)); // OUTPUT: [2,3]

// - it can be used to create a new (shallow copy of the same array)

const arr9 = [0,1,2,3,4];
const arr99 = arr9.slice();

console.log(arr9, arr99);


let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

let todayWeather = weatherConditions.slice(1,3); // arg1: startSlice index,
// arg2: stopSlice index (its not compulsory)

console.log('weather old array is untoucched, ', weatherConditions);
console.log('new array after slice ', todayWeather);

let tomorrowW = weatherConditions.slice(0, -2);

// SPLIT A STRING INTO AN ARRAY OR CHARACTERS OR WORDS

const sArr = 'string'.split('');
console.log('Previously a string', sArr);

const wArr = 'hello there how are you'.split(' ');
console.log('Previously a sentence', wArr);

// USING SPLIT WITH REGULAR EXPRESSIONS

const rArr = 'Hello World,I-am code'.split(/\W/);
console.log('Bad punctuation previously', rArr);

// COPY ARRAY WITH REST PARAMETERS (SPREAD OPERATOR)

const oldArray = [1,2,3,4,5];
const newArray2 = [...oldArray];

console.log('newArray2', newArray2)

// INSERT AN ARRAY INSIDE OF ANOTHER ARRAY USING REST PARAMETERS

let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];
let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];
// ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander'].

// INDEXOF()
// returns an index number of the first occurence of a specific item in an array
// if it doesn't exist - it returns -1

let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears', 1];

const indices = [fruits.indexOf('dates'), fruits.indexOf('oranges'), fruits.indexOf('pears')];

console.log('Indices !!!!!!!!!! ', indices);

// CONCATANATE TWO ARRAYS

// concat allows merging two arrays in pure function (no side effects) way

const arrC = [1, 2, 3].concat([4, 5, 6]);
console.log('Concatanated', arrC)

// SORT AN ARRAY

// sorts the elements in place (deep copy) and returns a refence to the same 
// array, now sorted
// default sort order is ascending, built upon converting the elements into
// strings, then comparing their sequence of UTF-16 code units values
// for that reason it works without providing extra arguments with strings, but it 
// doesn't with numbers

// sort works on an array of strings, numbers and objects

// sort() takes a compare function as a single argument
// this compare function takes two parameters as its arguments
// sort((a,b) => (a-b))
// a - first element for comparison
// b - second element for comparison
// (a-b) - actual comparison of two numbers

// return: reference to the original array, now sorted

// https://dev.to/felix/understanding-sort-b2f

// SORTING AN ARRAY OF NUMBERS IN ASCENDING ORDER

const sortedArr = [5,397,4,29,4,5].sort(function(a,b) {
  return a - b;
});

console.log('Sorted numbers arr', sortedArr);

// SORTING AN ARRAY OF NUMBERS IN DESCENDING ORDER

const sortedArr2 = [5,397,4,29,4,5].sort(function(a,b) {
  return b - a;
});

console.log('Sorted numbers arr', sortedArr2);

// SORTING AN ARRAY OF LETTERS IN ANSCENDING ORDER

const sortedLetters = ["x", "d", "c", "a", "z", "g"].sort(function(a, b) {
  return a === b ? 0: a > b ? 1 : -1;
})

console.log('Sorted letters', sortedLetters);

// SORTING AN ARRAY OF LETTERS IN DESCENDING ORDER

const descLetters = ["x", "d", "c", "a", "z", "g"].sort(function (a, b) {
  return a === b? 0: a < b ? 1 : -1;
})

console.log('Descending letters', descLetters);

// SORTING AN ARRAY OF OBJECTS BY NUMBER

const myObjectsArray= [
  { item: "chair", price: 400 },
  { item: "bed", price: 1200 },
  { item: "table", price: 800 },
  { item: "sofa", price: 1000 },
  { item: "desk", price: 500 }
];

myObjectsArray.sort((value1, value2) => {
  return value1.price - value2.price;
}); // [
      // { item: "chair", price: 400 },
      // { item: "desk", price: 500 },
      // { item: "table", price: 800 },
      // { item: "sofa", price: 1000 },
      // { item: "bed", price: 1200 }
  // ];

// SORTING AN ARRAY OF OBJECTS BY STRING

const myObjectsArray= [
  { item: "chair", price: 400 },
  { item: "bed", price: 1200 },
  { item: "table", price: 800 },
  { item: "sofa", price: 1000 },
  { item: "desk", price: 500 }
];

myObjectsArray.sort((value1, value2) => {
  if (value1.item === value2.item) {
      return 0;
  } 
  return value1.item > value2.item ? 1 : -1;
}); // [
      // { item: "bed", price: 1200 }
      // { item: "chair", price: 400 }
      // { item: "desk", price: 500 }
      // { item: "sofa", price: 1000 }
​        // { item: "table", price: 800 }
  // ];

// JOIN

// joins array elements to create a string

const arr8 = ['Hello', 'World'];

const str8 = arr8.join(" ");

console.log('Joined', str8);

// ITERATING OVER AN ARRAY

// ITERATING USING FOR LOOP

function filteredArray(arr, elem) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) !== -1) { // If elem was NOT found
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

// ARRAY PROTOTYPE CONSTRUCTOR

// Array.prototype.myMethod

// prototype allows you to add new properties and methods to arrays
// prototype is a property available with all JS objects

Array.prototype.myUpperCase = function() {
  for(let i = 0; i < this.length; i++) {
    this[i] = this[i].toUpperCase();
  }
};

let fruits2 = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits2.myUpperCase());

const upperFruits = fruits2.myUpperCase();

console.log('Upper Fruits', upperFruits);

// ARRAY.PROTOTYPE.MAP()

// map() iterates over each item an array and returs a new array (deep copy)
// containing the results of calling the callback function on each element
// - it doesn't mutate the original array

// map(callbackFn, thisArg?)
// thisArg is optional

// when callback function is called, it is passed three arguments
// (1st arg) - current element being processed
// (2nd arg) - index of current element
// (3rd arg) - array upon which map method was called



// First argument is compulsory, the other two arguments are optional
// map((element) => {})
// map((element, index) => {})
// map((element, index, array) => {})

// callbackFn is invoked only for array indexes which have integer values, it
// is not invoked for empty slots in sparse array [1, ,2 , 3]

// EXAMPLE 1

const watchList = [
  {
    "Title": "Inception",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
  },
  {
    "Title": "Interstellar",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
  },
  {
    "Title": "The Dark Knight",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
  },
  {
    "Title": "Batman Begins",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
  },
  {
    "Title": "Avatar",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
  }
];



const ratings = watchList.map(x => 
  ({title: x["Title"], rating: x["imdbRating"]}) // pay attention to parenthesis
  );

console.log(ratings);

// EXAMPLE 2

const numbers2 = [1,4,9];
const roots = numbers2.map((num) => Math.sqrt(num));

// EXAMPLE 3 - USING MAP TO REFORMAT OBJECTS IN AN ARRAY

const kvArray = [
  { key: 1, value: 10},
  { key: 2, value: 20},
  { key: 3, value: 30}
];

const reformattedArray = kvArray.map(({key, value}) => ({[key]: value}));

console.log('Reformatting an object', reformattedArray);

// EXAMPLE 4 - BE CAREFUL WITH MAP() AND PARSEINT()

["1", "2", "3"].map(parseInt); // output: [1, NaN, Nan]

// this happens because parseInt takes two arguments, therefore second argument
// of callback function (index) is used as a second argument for parseint()
// parseInt("1", 0) -> 1, parseInt("2", 1) -> NaN

// MY OWN IMPLEMENTATION OF ARRAY.MAP

Array.prototype.myMap = function(callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this))
  }
  return newArray;
};

// Array.prototype.map.call()

// this structures allows you to pass another Array-like object (string, object)
// as an argument, so this argument becomes 'this' instead of traditional
// myArray.map() // in this case 'this' is myArray


// EXAMPLE - CALLING MAP() ON NON-ARRAY OBJECTS
// map() method reads the length property of 'this' and then accesses each
// integer index

const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4
};

console.log('xxxxxxxxx');
console.log(Array.prototype.map.call(arrayLike, (x,y,z) => {
  return x;
}));

// EXAMPLE 2 - USING MAP() GENERICALLY ON A NODELIST

//const selectElems = document.querySelectorAll("select option:checked");
//const values = Array.prototype.map.call(selectElems, ({value}) => value);

// ARRAY.PROTOTYPE.FILTER()

// creates a shallow copy of a portion of an array, for those elements of the
// original array which are truthy in the filtering check

// similarly to map(), a callback function takes three args (single_element, 
// index and original array)
// it can also take additional argument, on top of the callbackFn, thisArg

// callbackFn in this method is the filter test
// callbackFn is not invoked for empty slots in sparse arrays

// EXAMPLE 1

const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const usersUnder30 = users.filter(user => user.age < 30);
console.log(usersUnder30);

// EXAMPLE 2

const watchList2 = [
  {
    "Title": "Inception",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
  },
  {
    "Title": "Interstellar",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
  },
  {
    "Title": "The Dark Knight",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
  },
  {
    "Title": "Batman Begins",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
  },
  {
    "Title": "Avatar",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
  }
];

const filteredList = watchList2.filter(x => Number(x.imdbRating) >= 8.0)
.map(x => ({title: x.Title, rating: x.imdbRating}));

// EXAMPLE 3 - MY OWN IMPLEMENTATION OF FILTER FUNCTION

Array.prototype.myFilter = function(callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};

console.log('myFilter', [23, 65, 98, 5, 13].myFilter(item => item % 2));

// ARRAY.PROTOTYPE.REDUCE()

// applies a specific operation on consecutive terms of an array
// eg. 1 is the first item of the array(a), 2 is the second(b) in the first operation
// then the result of the first operation beceomes a and the next element
// becomes b
// 0 is the value of first a, when index[0] is b

// THEORY
// reduce algorithm is an array algo
// it is based on the associative and communitative properties
// its a iteration algorithm, it iterates over each of the array item
// it converts an array into a vector (single integer, single object)

// STRUCTURE
// accumulator - first argument, it accumulates the results of all previous 
// operations, on each previous item
// accumulator can have a default value, but its optional
// currentValue - reduce performs the same operation (callbackFN) on each item
// on the array, currentValue holds the current item of the array
// ARRAY - this is the main input, all callback operations will be performed
// on each of the elements of the array
// CALLBACK FUNCTION - this is a callback function, this function will be called
// for each element of an array, it returns accumulator for the next iteration
// when it's called on the last item, it also returns accumulator, and the final
// accumulator is returned by the .reduce()
// INITIAL_VALUE - optional initial value, when callback function is run on 
// the first value of the array, accumulator = inital_value;

const numbers = [-5, 6, 2, 0];

const doubledPositiveNumbers = numbers.reduce((accumulator, currentValue) => {
  if (currentValue > 0) { //              CALLBACK FUNCTION BODY
    const doubled = currentValue * 2; //  CALLBACK FUNCTION BODY
    return [...accumulator, doubled]; //  CALLBACK FUNCTION BODY
  }                                   //  CALLBACK FUNCTION BODY
  return accumulator;                 //  CALLBACK FUNCTION BODY
}, []);

// EXAMPLE 1: SUM

const arr = [1,2,3,4]

const sum = arr.reduce((a, b) => a + b, 0);

console.log(sum);

// EXAMPLE 2: COUNT NAMES IN A AN ARRAY AND RETURN AN OBJECT WITH COUNT

const names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

const countedNames = names.reduce((allNames, my_name) => {
  const currCount = allNames[my_name] ?? 0;
  return {
    ...allNames,
    [my_name]: currCount + 1,
  };
}, {});

console.log('Counted names ', countedNames);

// EXAMPLE 3: FLATTENED ARRAY OF ARRAYS

const flattened = [
  [0, 1],
  [2, 3],
  [4, 5]
].reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);

console.log('flattened ', flattened);

// EXAMPLE 4: SUM OF VALUES IN AN ARRAY OF OBJECTS

const objects = [{x: 1}, {x: 2}, {x: 3}];

const sum2 = objects.reduce((accumulator, currentValue) =>
  accumulator + currentValue.x, 0);

console.log('sum2 ', sum2);

// EXAMPLE 5: GROUPING OBJECTS BY A PROPERTY

const people = [
  {name: 'Max', age: 20},
  {name: 'Jane', age:20},
  {name: 'Alice', age: 21}
]

function groupBy(objectArray, property) {
  return objectArray.reduce((acc, obj) => {
    const key = obj[property];
    const curGroup = acc[key] ?? [];

    return {...acc, [key]: [...curGroup, obj]};
  }, {});
}

const groupedPeople = groupBy(people, 'age');

console.log(groupedPeople);

// EXAMPLE 6: CONCATENATING ARRAYS CONTAINED IN AN ARRAY OF OBJECTS USING
// THE SPREAD SYNTAX AND INITIAL VALUE

const friends = [
  {
    name: "Anna",
    books: ["Bible", "Harry Potter"],
    age: 21,
  },
  {
    name: "Bob",
    books: ["War and peace", "Romeo and Juliet"],
    age: 26,
  },
  {
    name: "Alice",
    books: ["The Lord of the Rings", "The Shining"],
    age: 18,
  },
];

const allbooks = friends.reduce(
  (accumulator, currentValue) => [...accumulator, ...currentValue.books],
  ['Alphabet'],
);

console.log('All books', allbooks);

// EXAMPLE 7: REMOVE DUPLICATES

const myArray6 = ["a", "b", "a", "b", "c", "e", "e", "c", "d", "d", "d", "d"];
const noDups = myArray6.reduce((acc, curV) => {
  if (!acc.includes(curV)) {
    return [...acc, curV];
  }
  
  return acc;
}, []);

console.log('No duplicates', noDups);


// ARRAY UNPACKING (SPREADING)

console.log(Math.max(1,2,3,4,5)); // max works on coma separated values

const myArr = [1,2,3,4,5]; // it's not gonna work with max

console.log('Array Unpacking', Math.max(...myArr)); // unless, array is unpacked first

const secondArr = [...myArr]; // unpacking from one array to another 

// ARRAY.FROM 

let str = 'hello';

const myArr4 = Array.from(str);

console.log(myArr4);

// ARRAY.EVERY

// Check if EVERY value in the array meets a certain criteria
// True if every element in the array meets certain criteria
// False if at least one element in the array doesn't meet certain criteria

console.log('Is every?', [1,2,3,-4,5].every(v => v > 0));

// ARRAY.SOME

// This is equivalent to ANY()
// True if ANY (at least one) element in the array meets certain criteria
// False if none of the elements in the array meets certain criteria

console.log('Is some/any?', [1,2,3,-4,5].some(v => v < 0));

// DIFFERENCE BETWEEN 'FOR OF' AND 'FOR IN'

// both iterate over arrays (or other iterables)
// for i in array - returns keys (or index) of an array
// for i of array - returns values of an array

console.log('!!!!');

let array10 = [4,5,6];

// returns indices of an array
for (let i in array10) {
  console.log(i); // '0', '1', '2'
}

// returns values of an array
for (let i of array10) {
  console.log(i); // 4, 5, 6
}

