## REVERSE A STRING

```js
function reverseString(str) {
  let reversedStr = "";
  for (let i of str) {
    reversedStr = i + reversedStr;
  }
  return reversedStr;
}

reverseString("hello");
```

## FACTORIALIZE A NUMBER

```js
function factorialize(num) {
  if (num < 1) {
    return 1;
  }
  return num * factorialize(num - 1);
}

factorialize(5);

```

## FIND THE LONGEST WORD IN A STRING

```js
function findLongestWordLength(str) {
  const strAsArr = str.split(" ");
  const lenArr = strAsArr.map(s => s.length);
  const len = lenArr.indexOf(Math.max(...lenArr));
  return strAsArr[len].length;
}

function findLongestWordLength2(str) {
  return str
    .split(' ')
    .reduce((longest, word) => Math.max(longest, word.length), 0);
}
```

## RETURN LARGEST NUMBERS IN AN ARRAY OF ARRAYS

```js
function largestOfFour(arr) {
  return arr.reduce((acc, cVal) => [...acc, Math.max(...cVal)], []);
}
```

## REPEAT A STRING N TIMES

```js
function repeatStringNumTimes(str, num) {
  if (num < 1) {
    return '';
  }
  return str + repeatStringNumTimes(str, num - 1);
}

repeatStringNumTimes("abc", 3);
```

## RETURN A FIRST ELEMENT OF AN ARRAY WHICH HAS PASSED A TRUTH TEST

```js
function findElement(arr, func) {
  return arr[arr.map(func).indexOf(true)];
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
```

## BETTER SOLUTION

```js
function findElement2(arr, func) {
  return arr.find(func);
}
```

## RECURSIVE SOLUTION

```js
function findElement3(arr, func) {
  if (arr.length > 0 && !func(arr[0])) {
    return findElement(arr.slice(1), func);
  } else {
    return arr[0];
  }
}

console.log(typeof false);
```

## CHECK IF A VALUE IS OF BOOLEAN TYPE

```js
function booWho(bool) {
  if (typeof bool === 'boolean') {
    return true;
  } else {return false;}

}
booWho(null);
```

## TITTLE CASE A SENTENCE

```js
function titleCase(str) {
  const arr = str.split(" ");
  let capArr = arr.map(Function.prototype.call, String.prototype.toLowerCase);
  let capArr2 = capArr.map(toCamel);
  const a = capArr2.join(" ")
  return a;
}

function toCamel(str) {
  return str[0].toUpperCase().concat(str.slice(1));
};

titleCase("I'm a little tea pot");
```

## SLICE AND SPLICE

```js
function frankenSplice(arr1, arr2, n) {

  const arr3 = arr2.slice(0,n).concat(arr1).concat(arr2.slice(n,arr2.length))

  return arr3;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
```

## FILTER OUT FALSY VALUES

```js
function bouncer(arr) {
  const arr2 = arr.filter((s) => !!s === true);

  return arr2;
}

bouncer([7, "ate", "", false, 9]);
```

## FINDING A PLACE (INDEX) IN A ARRAY BASED ON ORDER

```js
function getIndexToIns(arr, num) {
  return arr
    .concat(num)
    .sort((a, b) => a - b)
    .indexOf(num);
}

getIndexToIns([1, 3, 4], 2);
```

## ANOTHER NEAT SOLUTION

```js
function getIndexToIns(arr, num) {
  return arr.filter(val => num > val).length;
}
```

## My old solution:

```js
function getIndexToIns(arr, num) {
  const arr2 = arr.sort((a,b) => (a-b));
  const res = arr2.reduce((acc, cVal) => {
    if (cVal >= num) {
      return [...acc, cVal];
    } else {
      return [...acc];
    }
  }, []);
  const res2 = res[0];
  if (res2 === undefined) {
    return arr2.length;
  }
  return arr2.indexOf(res2);
}

getIndexToIns([40, 60], 50);
```

## CHECK IF ALL LETTERS FROM STRING 1 ARE PRESENT IN STRING 2

```js
function mutation(arr) {

  let s1 = arr[0].toLowerCase();
  let s2 = arr[1].toLowerCase();

  for (let i =0; i < s2.length; i++) {
    if (s1.includes(s2[i])) {

    } else {
      return false;
    }
  }

  return true;
}

[].split()
```

## SLICE AN ARRAY INTO N NUMBER OF NESTED SUBARRAYS

```js
function chunkArrayInGroups(arr, size) {

  let res = [];
  for (let i = 0; i < arr.length; i+=size) {
    let aa = arr.slice(i, i+size); 
    res.push(aa);
  }

  return res;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
```

## RECURSIVE SOLUTION

```js
function chunkArrayInGroups(arr, size) {
  if (arr.length <= size) {
    return [arr];
  } else {
    return [arr.slice(0, size)].concat(
      chunkArrayInGroups(arr.slice(size), size)
    );
  }
}
```

## SUM ALL NUMBERS IN A RANGE

/*
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
*/

```js
function sumAll(arr) {
  const sortedArr = arr.sort((a,b) => (a-b));
  const count = sortedArr[1] - sortedArr[0];
  let intrapolatedArr = []
  for (let i = sortedArr[0]; i <= sortedArr[1]; i++ ) {
    intrapolatedArr.push(i)
  }
  return intrapolatedArr.reduce((acc, cVal) => acc + cVal, 0);
}

sumAll([1, 4]);
```

## BETTER SOLUTION

```js
const sumAll = arr => {
  ## Buckle up everything to one!
  const startNum = arr[0];
  const endNum = arr[1];

  //Get the count of numbers between the two numbers by subtracting them and add 1 to the absolute value. Eg. There are |1-4| + 1 = 4, (1, 2, 3, 4), 4 numbers between 1 and 4.
  const numCount = Math.abs(startNum - endNum) + 1;

  //Using Arithmetic Progression summing formula
  const sum = ((startNum + endNum) * numCount) / 2;
  return sum;
};
```

## DIFF TWO ARRAYS

Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

//Note: You can return the array with its elements in any order.

```js
function diffArray(arr1, arr2) {

  const newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
    } else {
      newArr.push(arr1[i]);
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (arr1.includes(arr2[i])) {
    } else {
      if (newArr.indexOf(arr2[i]) === -1) {
        newArr.push(arr2[i]);
      }
    }
  }

  return newArr;

}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
```

## BETTER SOLUTION

```js
function diffArray(arr1, arr2) {
  const difference = new Set(arr1);
  arr2.forEach((ele) =>
    difference.has(ele) ? difference.delete(ele) : difference.add(ele)
  );
  return Array.from(difference);
}
```

## SEEK AND DESTROY

You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

```js
function destroyer(arr) {

  const diff = new Set(arr);
  let args = Object.values(arguments);
  const tempArr = arr;

  tempArr.forEach(element => args.includes(element) ? diff.delete(element) : {});

  const diffArr = Array.from(diff);
  const finalArr = [];

  arr.forEach(element => diffArr.includes(element) ? finalArr.push(element) : {});

  return finalArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
```

## BETTER SOLUTION

```js
function destroyer(arr, ...valsToRemove) {
  return arr.filter(elem => !valsToRemove.includes(elem));
}
```

## CHECK IF AN OBJECT IS AT LEAST PART OF AN OBJECTS IN AN ARRAY OF OBJECTS

Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.

```js
function whatIsInAName(collection, source) {

  //Create an array of keys
  const sourceKeys = Object.keys(source);

  //Filter over collection. If filtering condition is true, an object is kept.
  return collection.filter(obj => sourceKeys
    //Check each key from SourceKeys it is able to access an object in collections
    //If so, map it as True  
    .map(key => obj.hasOwnProperty(key) && obj[key] === source[key])
    // Convert several Trues in an array created by map to a single True or False
    .reduce((accB, cumB) => accB && cumB)
    // Final filtering is done where each item of collection is filtered by either a 
    // True or False and a subset of collection is returned
  )
}
```

## PIG LATIN

Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.

```js
function translatePigLatin(str) {
  let regex = /([^aeiou]+)(\w+|$)/g;

  if (['a', 'e', 'i', 'o', 'u'].includes(str[0])) {
    str = str + "way";
  } else {
    str = str.replace(regex, '$2$1') + 'ay'
    
  }

  return str;
}

translatePigLatin("consonant");
```

## SEARCH AND REPLACE

Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word Book with the word dog, it should be replaced as Dog

```js
function myReplace(str, before, after) {

  const arr = str.split(" ");
  const id = arr.indexOf(before)

  let beforeCase = 'lower';
  if (before === before.toLowerCase()) {
    {}
  } else {
    beforeCase = 'upper';
  }

  let arr2 = arr;

  if (beforeCase === 'lower') {
    arr2[id] = after.toLowerCase();
    console.log('lower baby');
  } else {
    arr2[id] = after[0].toUpperCase() + after.slice(1,);
  }

  return arr2.join(" ");
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
```

## BETTER SOLUTION

```js
function myReplace(str, before, after) {
  const strArr = str.split(" ");
  const [wordToReplace] = strArr.filter(item => item === before);
  const replacement = wordToReplace[0] === wordToReplace[0].toUpperCase()
    ? after[0].toUpperCase() + after.slice(1)
    : after[0].toLowerCase() + after.slice(1);
  return strArr.map(item => (item === before ? replacement : item)).join(" ");
}
```

## DNA PAIRING

Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.

The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the provided DNA strand. For each character in the provided string, find the base pair character. Return the results as a 2d array.

For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

```js
function pairElement(str) {

  str = str.split('').map(x => x === 'A' ? x = ['A', 'T'] :
                               x === 'T' ? x = ['T', 'A'] :
                               x === 'C' ? x = ['C', 'G'] :
                               x = ['G', 'C']);

return str;
}

pairElement("GCG");
```

## ANOTHER SOLUTION

```js
function pairElement(str) {
  ## create object for pair lookup
  const pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };

  ## map character to array of character and matching pair
  return str
    .split("")
    .map(x => [x, pairs[x]]);
}

//test here
pairElement("GCG");
```

## MISSING LETTERS

Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

```js
function fearNotLetter(str) {

  const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];

  if (str === alphabet) {
    return undefined;
  }

  let alphabetSlice = alphabet.slice(alphabet.indexOf(str[0]),)

  for (let i = 0; i < str.length; i++) {
    if (str[i] === alphabetSlice[i]) {
      {}
    } else {
      return alphabetSlice[i];
    }
  }
}

fearNotLetter("abce");
```

## BETTER SOLUTION

```js
function fearNotLetter(str) {

  for (let i = 0; i < str.length - 1; i++) {
    if (str.charCodeAt(i) - str.charCodeAt(i+1) !== -1) {
      return String.fromCharCode(str.charCodeAt(i) + 1)
    } 
  }
}
```

## SORTED UNION

Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.

```js
function uniteUnique(arr) {

  let tempSet = new Set(arr);
  for (let i = 1; i < Object.keys(arguments).length; i++) {
    arguments[i.toString()].forEach(item => tempSet.add(item));
  }
  
  return Array.from(tempSet);
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
```

## BETTER SOLUTION

```js
function uniteUnique(...arr) {
  return [...new Set(arr.flat())];
}
```

## Convert HTML Entities

Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

```js
function convertHTML(str) {

  const replacements = {'<': '&lt;',
                        '>': '&gt;',
                        '&': '&amp;',
                        '"': '&quot;',
                        "'": '&apos;'}

  return str
    .split('')
    .map(x => replacements[x] ? x = replacements[x]: x)
    .join('');
}

convertHTML("Dolce & Gabbana");
```

## Sum All Odd Fibonacci Numbers

Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

```js
function sumFibs(num) {

  let fiboSeq = [1,1];

  for (let i = 1; i < num; i++) {
    let currentSum = fiboSeq[i] + fiboSeq[i-1] 
    if (currentSum > num) {
      break;
    } else {
      fiboSeq.push(currentSum)
    }
  }

  return fiboSeq.filter(x => x % 2).reduce((a,b) => a+b, 0)
}

sumFibs(4);
```

## SUM ALL PRIME NUMBERS

A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

```js
function sumPrimes(num) {

  let arr = [];
  for (let i = 1; i <= num; i++) {
    arr.push(i)
  }

  return arr.filter(x => isPrime(x)).reduce((a,b) => a+b,0);
}

const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if(num % i === 0) return false;
    }
    return num > 1;
}

sumPrimes(10);
```

<https://stackoverflow.com/questions/5811151/why-do-we-check-up-to-the-square-root-of-a-number-to-determine-if-the-number-is/5811176#5811176>

## GREATEST COMMON DIVISOR

GREATEST COMMON DIVISOR (GCD) of two or more integers, which are not all zero, is the largest
positive integer that divides each of the integers, into an integer (no remainder).
For two integers x, y, the greatest common divisor of x and y is denoted as gcd(x,y).
GCD of 8 and 12 is 4, that is, gcd(8,12) = 4

8 can be divided without remainder by dividing itself by 2, 4 and 8
12 can be divided without remainder by dividing itself by 2, 4, 6 and 12

A largest common integer among these two sets is 4, therefore gcd(8, 12) is 4

## GREATEST COMMOND DIVISOR OF TWO DIGITS

```js
const gcd = (a, b) => (b === 0) ? a : gcd(b, a % b);

gcd([8,12]);
```

1. a=8, b=12 => return gcd(12, 8(result of 8%12))
2. a=12, b=8 => return gcd(8, 4(result of 12%8))
3. a=8, b=4 => return gcd(4, 0(8%4))
4. a=4, b=0 => return 4


## LEAST COMMON MULTIPLE

Least Common Multiple of two integers a and b, usually denoted as lcm(a,b) is the smallest
positive integer that is divisible by both a and b.

Applies only for integers different than 0.

For a=2 and b=5, the least common multiple is 10. Also, for a=-2 and b=-5, the lcm is also
10.

Least common multiple can be used as a lowest common denominator in fractions.

2/21 + 1/6 = 4/42 + 7/42 = 11/42 where 42 is the lowest common denominator and also
the least common multiple among denominators.

```js
const lcm = (a, b) => a * b / gcd(a, b);

lcm(21, 6);
```

1. a=21, b=6 => returns 21 * 6 / gcd(21, 6) -- processing lcm
2. a=21, b=6 => returns gcd(6, 3(21%6)) -- processing gcd
3. a=6, b=3 => returns gcd(3, 0) -- recursive gcd
4. a=3, b=0 => returns 3 -- gcd returns
5. 21 * 6 / 3 = 42

## SMALLEST COMMON DENOMINATOR IN A CONSECUTIVE ARRAY OF NUMBERS FROM MIN TO MAX

```js
function smallestCommons(arr) {
  const [min, max] = arr.sort((a, b) => a - b);
  const range = Array(max - min + 1)
    .fill(0)
    .map((_, i) => i + min);

    const gcd = (a, b) => (b === 0) ? a : gcd(b, a % b); ## Greatest Common Divisor

    const lcm = (a, b) => a * b / gcd(a, b); ## Least Common Multiplier

    return range.reduce((multiple, curr) => lcm(multiple, curr));
}
```

## DROP ITEM IF A FUNCTION CONDITION IS TRUE AND KEEP THE REST OF THE ARRAY

Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

```js
function dropElements(arr, func) {

  let index = arr.findIndex(e => func(e)) ## returns first index when a condition is true
  
  return index != -1 ? arr.slice(index): []; // if no index was found by findIndex,
  // findIndex() returns -1, in this case an empty array is returned, otherwise the 
  // original array is sliced starting from the index which satisfied the condition
}

dropElements([1, 2, 3], function(n) {return n < 3; });
```

## FLATTEN NESTED ARRAYS

## Flatten a nested array. You must account for varying levels of nesting.

```js
function steamrollArray(arr) {

  let arr2 = [];

  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      arr2.push(arr[i])
    } else {
      arr2.push(...steamrollArray(arr[i]))
    }
  }

  return arr2
}

steamrollArray([1,[2],[3,[[4]]]]);
```

## CONVERT FROM BINARY TO UNICODE

Return an English translated sentence of the passed binary string.

The binary string will be space separated.

```js
function binaryAgent(str) {

  return str.split(' ').map(b => String.fromCharCode(parseInt(b, 2))).join(''); 
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
```

## CHECK IF EACH OBJECT HAS A DEFINED PROPERTY AND IF PROPERTIES VALUE IS TRUTHY

Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.

In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

Remember, you can access object properties through either dot notation or [] notation.

```js
function truthCheck(collection, pre) {
  return collection.every(x => x.hasOwnProperty(pre) && Boolean(x[pre]));
}

truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");
```

## A FUNCTION WHICH TAKES OPTIONAL ARGUMENTS AND RETURNS ANOTHER FUNCTION IF ONLY ONE
## ARGUMENT IS PROVIDED

Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);
sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.

```js
function addTogether(...args) {

  if (typeof args[0] !== 'number') {
    return undefined
  } else if (args.length === 1) {
    return (x) => typeof x === 'number' ? x + args[0] : undefined;
  } else if (typeof args[1] !== 'number') {
    return undefined
  } else {
    return args[0] + args[1];
  }
};

addTogether(2,3);
```

## BETTER SOLUTION

```js
function addTogether() {
  const [first, second] = arguments;
  if (typeof(first) !== "number")
    return undefined;
  if (arguments.length === 1)
    return (second) => addTogether(first, second);
  if (typeof(second) !== "number")
    return undefined;
  return first + second;
}
```

## PALINDROME CHECKER

Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.

```js
function palindrome(str) {

  str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

  let str2 = str.split('').reduce((a,b) => [b, ...a], []).join('')

  if (str === str2) {
    return true
  } else {
    return false
  }
}
```

## ARABIC DECIMALS TO ROMAN NUMERAL CONVERTER

```js
function convertToRoman(num) {

  let str = '';
  const orderNames = ['thousands','hundreds','tens','digits']

  let parsedNum = separateNumberIntoUnits(num)

  if (num < 10) {
    parsedNum.unshift(0)
    parsedNum.unshift(0)
    parsedNum.unshift(0)
  } else if (num < 100) {
    parsedNum.unshift(0)
    parsedNum.unshift(0)
  } else if (num < 1000) {
    parsedNum.unshift(0)
  }

  parsedNum = parsedNum.map((x,i) => x !== 0 ? x / (1000 / Math.pow(10, i)) : x );
 
  for (let i = 0; i < 4; i++) {
    str = str + singularConverter(parsedNum[i], orderNames[i])
  }
  
  console.log('str.', str)

 return str;
}

function separateNumberIntoUnits(n) {
  if (n == 0) return [0];
  let arr = [];
  let i = 1;

  while (n > 0) {
    arr.unshift((n % 10) * i);
    n = Math.floor(n / 10);
    i *= 10
  }

  return arr;
}

function singularConverter (myNum, currentOrder) {
  
  let tempStr = '';

  if (currentOrder === 'thousands') {
    tempStr = tempStr + Array(myNum)
        .fill('M')
        .join('') 
  } else {
    const romansMapping = {'hundreds': ['C', 'D', 'M'],
                          'tens': ['X', 'L', 'C'],
                          'digits': ['I', 'V', 'X']}

    switch (true) {
      case myNum < 4:
        tempStr = tempStr + Array(myNum)
          .fill([romansMapping[currentOrder][0]])
          .join('') 
        console.log(tempStr);
        break;
      case myNum === 4:
        tempStr = tempStr
          + romansMapping[currentOrder][0]
          + romansMapping[currentOrder][1]
        console.log(tempStr);
        break;
      case myNum === 5:
        tempStr = tempStr + romansMapping[currentOrder][1]
        console.log(tempStr);
        break;
      case myNum > 5 && myNum < 9:
        tempStr = tempStr
          + romansMapping[currentOrder][1]
          + Array(myNum-5).fill(romansMapping[currentOrder][0]).join('') 
        console.log(tempStr);
        break;
      case myNum === 9:
        tempStr = tempStr
          + romansMapping[currentOrder][0]
          + romansMapping[currentOrder][2]
        console.log(tempStr);
        break;
    }
  }

  return tempStr;
}

convertToRoman(36);
```

## CEASARS CIPHER

```js
function rot13(str) {

  const convert = (str2) => {
    if (str2.charCodeAt() > 77 ) {
      return (str2.charCodeAt() % 13) + 65;
    } else {
      return str2.charCodeAt() + 13;
    }
  }

  return str.split('')
    .map(x =>  x.split('')
      .map(y => y.charCodeAt() > 64 && y.charCodeAt() < 91
        ? String.fromCharCode(convert(y))
        : y).join('')).join('');
}

rot13("SERR PBQR PNZC");
```