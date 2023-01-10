function curry(fn) {
  const arity = fn.length

  return function curried(...args) {
    if (args.length < arity) {
      return curried.bind(null, ...args)
    }

    return fn.call(null, ...args)
  }
}

const match = curry((what, s) => s.match(what))
const replace = curry((what, replacement, s) => s.replace(what, replacement))
const filter = curry((f, xs) => xs.filter(f))
const map = curry((f, xs) => xs.map(f))

const hasLetterR = match(/r/g) // x => x.match(/r/g)
hasLetterR('hello world') // ['r']
hasLetterR('just j and s and t etc') // null

filter(hasLetterR, ['rock and roll', 'smooth jazz']) // [ 'rock and roll' ]

const removeStringsWithoutRs = filter(hasLetterR) // [Function: bound $curry] xs => xs.filter(x => x.match(/r/g))
removeStringsWithoutRs(['rock and roll', 'smooth jazz', 'drum circle']) // ['rock and roll', 'drum circle']

const noVowels = replace(/[aeiou]/ig) // (r, x) => x.replace(/[aeiou]/ig, r)
const censored = noVowels('*') // x => x.replace(/[aeiou]/ig, '*')
censored('Chocalate Rain') // 'Ch*c*l*t* R**n'

function mergeWords(string) {
  return function(nextString) {
    if (nextString === undefined) {
      return string
    } else {
      return mergeWords(string + ' ' + nextString)
    }
  }
}

const mergeWords2 = string => nextString =>
  nextString === undefined ?
  string :
  mergeWords2(`${string} ${nextString}`)

console.log(mergeWords('Ala')('ma')('kota')())

console.log(mergeWords2('Jan')('ma')('psa')())

function sum(a, b) {
  return a + b
}

const curriedSum = curry(sum)

console.log(curriedSum(2)(3))