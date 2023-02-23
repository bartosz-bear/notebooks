// DYNAMIC PROGRAMMING

// DYNAMIC PROGRAMMING = DIVIDE & CONQUER + MEMOIZATION

// MEMOIZATION

// a way to remember a solution to a particular problem so you don't have to calculate 
// it again

// DIFFERENCE BETWEEN DYNAMIC PROGRAMMING AND MEMOIZATION

// both are optimization techniques; dynamic programming is bottom-up, while memoization
// is top-down; however both are meant to create a cache in order to 'save' on performing
// the same operations more than once

function addto80 (n) {
  return n + 80
}

console.log(addto80(5))

function memoizedAddTo80() {
  let cache = {}
  return function (n) {
    if (n in cache) {
      console.log('Short time')
      return cache[n]
    } else {
      console.log('Long time')
      cache[n] = n + 80
      return cache[n]
    }
  }
}

const memoized = memoizedAddTo80();

console.log('1', memoized(10))
//console.log('2', memoized(6))
//console.log('3', memoized(5))

// REDUCING TIME COMPLEXITY FROM EXPONENTIAL O(2^n) TO LINEAR O(n)

// Recursive functions can reduce time complexity using memoisation or dynamic programming

// DYNAMIC PROGRAMMING - STEP TO SEE IF IT CAN BE USED

// 1. Can the problem be divided into subproblems?
// 2. Can recursive solution be applied?
// 3. Are there repetitive subproblems?
// 4. Can subproblems be memoized?

let calculations = 0

function fibonacciMaster() {
  let cache = {};
  return function fib(n) {
    calculations++
    if (n in cache) {
      return cache[n]
    } else {
      if (n < 2) {
        return n
      } else {
        cache[n] = fib(n-1) + fib(n-2)
        return cache[n]
      }
    }
  }
}

const fasterFib = fibonacciMaster()

console.log('DP', fasterFib(10))
console.log('memoized ' + calculations + ' calculations')

// HOUSE ROBBER PROBLEM

var rob = function(nums) {
  let odds = 0
  let evens = 0
  for (let i = 0; i < nums.length; i++) {
      if (i % 2 === 0) {
          evens += nums[i]
      } else {
          odds += nums[i]
      }
  }
  return Math.max(odds, evens)
};

console.log('robbing', rob([1,2,3,1]))

// BEST TIME TO BUY AND SELL STOCK


/* NOT WORKING YET
var maxProfit = function(prices) {
  let bucket = []
  for (let i=prices.length-1; i=1; i--) {
    console.log('prices length', prices.length)
    console.log('i', i)
    for (let j=prices.length-2; j=0; j--) {
      console.log('j', j)
      bucket.push(prices[i] - prices[j])
      console.log(bucket)
    }
  }
  return Math.max(bucket)
};

console.log('stocks', maxProfit([7,1,5,3,6,4]))
*/
