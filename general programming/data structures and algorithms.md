## HOW TO COMPARE ALGORITHMS OBJECTIVELY?

- you can use time to run, because different machines or operating systems will give different results
- instead Big O Notation is used

## COMPARING ALGORITHMS

- BY TIME - how much time it takes to run
- BY MEMORY SPACE - how much memory it takes

## RUNTIME

- the length of time a program takes to run

## FORMAL DEFINITION OF BIG-O

- how quickly runtime or space requirements will grow RELATIVE to the input as the input get arbitrarily large
- RELATIVE means that we are comparing an algorithm which does arithmetic multiplication with another algorithm doing arithmetic multiplication, and NOT with an algorithm doing sometime else, eg. sorting a list of integers
- we want to compare how quickly runtime will grow, not compare exact runtimes, as this is machine dependent
- we are interested how quickly runtime will RELATIVE to the input (this is why we use n notation, as n is not specified, its considered in abstract terms)
- we are interested in the worst-possible scenario, when n gets arbitraly large, this is why we call it asymptotic analysis (eg. in bubble sort, when the input array is already sorted, the time taken by the algorithm is linear (best case scenario), but when the input array is in reverse condition, the algorithm takes the maximum time (quadratic) to sort the elements (worst case scenario)

## FROM FASTEST TO SLOWEST ALGOS:BIG O NOTATION

- constant: O(1)
- logarithmic: O(log(n)) - binary log, log 2n = x (power to which numer 2 must be raise to obtain n) 
- linear: O(n)
- log linear: O(nlog(n)) - linear multipied by logarithmic [1*log1, 2*log2, 3*log3]
- quadratic: O(n^2)
- cubic: O(n^3)
- exponential: O(2^n)
- factorial: O(n!)

## CONSTANT O(1)

- regardless of how large the input value is, the result will always be 1
- if list has one item, number of operations is going to be one, if list has 5 items, number of operations is going to be one, if list has 1000 items, number of operations is going to be one

## LOGARITHMIC O(log n)

- binary search (divide and conquer) is example of logarithmic complexity
- for a phone book of 3 names it takes 2 comparisons (at most), for 7 it takes at most 3, for 15 it takes 4, and for 1m it takes 20
- logarithm in question could be ln (base e), log 10 or log2, or some other base. It doesn't matter, it's still O(log n), just like O(2n^2) and P(100n^2) are still both O(n^2)
- the most common attributes of logarithmic run-time is: (a) choice of the next element on which to perform some action is one of several possibilites, (b) only one will need to chosen; or in other words, the elements on which the action is performed are digits of n
- a bigger phone book will still take a longer time, but it won't grow as quickly as the proportional increase in the additional size
- time goes up linearly while n goes up exponentially, so if it takes 1 second to compute 10 elements, it will take 2 seconds to compute 100 elements, 3 seconds to compute 1000 elements, and so on

## LINEAR O(n)

- number of operations that is going to take place in the algorithm is going to scale linearly with n
- if list has one item, number of operations is going to be, if list has 5 items, number of operations is going to be 5, if list has 1000 items, number of operations is going to be 1000

## LOG LINEAR O(n log n)

- there was a mix-up at the printer's office, and our phone book had all its pages inserted in a random order. Fix the ordering so that it's correct by looking at the first name on each page and then putting that page in the appropriate spot in a new, empty phone book.
- another example: we want to personalise the phone book, so we're going to find each person or bussiness's name in their designated copy, then circle their name in the book and write a short thank-you for their patronage

## QUADRATIC O(n^2)

- number of operations is going to scale quadratically
- if list has two items, number of operations is going to be 4 (2^2), if list has three items, number of operations is going to be 9 (3^2), it list has four items, number of operations is going to be 16(4^2)
- example: a mistake occured at the office, and every entry in each of the phone books has an extra "0" at the end of the phone number. Take some white-out and remove each zero

## EXPONENTIAL WITH A CONSTANT N - O(2^n)

- grows slowler than factorial

## FACTORIAL O(n!)

- TRAVELLING SALESMAN (EXAMPLE)
- there are N towns
- each of those towns is linked to 1 or more other towns by a road of a certain distance
- the travelling salesman problem is to find the shortest tour that visits every town
- with 3 towns, there are three possibilities, with 4 towns 12 possibilities, with 5 its 60, with 6 its 360
- by the time you get to 200 towns, ther isn't enought time left in the universe to solve the problem with traditional computers

ANOTHER EXAMPLE:
we're ready to load the phonebooks onto the shipping dock. Unfortunately, the robot that was supposed to load the books has gone haywire: it's putting the books onto the truck in a random order. Even worse, it loads all the books onto the truck, then checks to see if the're in the right order, and if not, it unloads them and starts over. [Bogo Sort, Slow Sort, Stupid Sort]

## EXPONENTIAL WITH N-BASE - O(n^n)

- grows faster than factorial when n gets increasingly large
- something absurd


## SIGNIFICANT/INSIGNIFICANT CONSTANTS

- we only care about the most significant part of complexity

O(1 + 1/2*n + 10) -> this can be simlified to O(n)

- as the n gets arbitraly large, 1 and 10 become insignificant, also n/2 when n approuches infinity, 1/2 becomes insignificant too

## WORST CASE AND BASE CASE SCENARIO

- base case
- expected or average case
- worst case

## GRAPH SHOWING DIFFERENT BIG O NOTATION

x-axis: n
y-axis: RELATIVE runtime

## TIME COMPLEXITY

- algorithms running time as the function of input size
- shows how the time of running the algorithm increases as the size of the input increases

## SPACE COMPLEXITY

- space complexity and time complexity, usually there is a trade-off
- for the same algorithm, space and time complexity can be different

## POLYNOMIAL TIME

- any algorithm that has a complexity of O(n^a), like O(n) or O(n^2), is said to have polynomial complexity, or is solvable in polynomial time
- some problems cannot be solved in polynomial time
- public key cryptography is based on this limitation (it's computationally hard to find two prime factors of a very large number)

## ARRAYS

- arrays or sequences, or array sequences
- Python 3 has three main sequence classes: list [1,2,3], tuple (1,2,3) and string '123'
- all support indexing

## STATIC ARRAY

- the number of elements stored in an array should be known in advance
- there is a fixed number of items
- once declared the size of the array cannot be modified (memory which is allocated to it cannot be increased or decreased)

## MEMORY ARCHITECTURE

- memory is stored in bits
- typical unit is byte, which is 8 bits
- each byte has associated unique address in the memory, byte #2144 or byte #2147
- memory is organized in the sequential system
- in theory, computer hardware is designed so that any byte of the main memory can be efficiently accessed
- RAM (Random Access Memory) is computer's main memory
- it is as easy to retrieve byte #45645644 as it is to retrieve byte #309
- individual byte of memory can be stored or retrieved in O(1) time

## MEMORY AND PROGRAMMING LANGUAGES

- programming language keeps track of the association between an identifier and the memory address
- a group of related variables can be stored one after another in a contigous portion of the computer's memory (denoted as an array)
- a text string is stored as an ordered sequence of individual characters
- Python internally represents each Unicode character with 16 bits (2 bytes)
- six character string such as 'SAMPLE' would be stored in 12 consecutive slots of memory
- each location within an array we call 'a cell' (two bytes of memory)
- integer index to descrive it's location
- each cell of an array uses the same number of bytes
- allows any cell to be accessed in constant time
- appropriate memory address can be computed using the formula, start + (cellsize)*(index)
- for Unicode characters, the cell size is 2 bytes, so if we start at memory address 100, and want to get the 3rd item from the list (index 2), the formulat is 100 + (2)*(2) = 104

## REFERENTIAL ARRAYS

- each element of an array is a reference to the object
- a single list instance may include multiple references to the same object as elements of the list
- a single object can be an element of two or more lists
- when computing the slice of the a list, the result is a new list instance
- new list has references to the same elements that are in the original list

## SINGLE CHARACTERS
- are immutable objects

## SHALLOW COPY
- a copy of a list, this operation creates a new list which references the same objects as the old list
- no new objects are created
- its possible for lists containing both mutable and immutable objects
- backup = list(primes) # shallow copy

## DEEP COPY
- import copy
- if the contents of the list were of mutable type, a new list with new elements can be produced by using deep copy from the copy module
- new objects are created
- only possible if the objects of the original list are mutable

## EXTENDING A LIST

```python
list_one = [1,2,3]
list_two = [4,5,6]
```

- list_one.extend(list_two) -> adding references from list_two, which are pointing to immutable objects [4,5,6] to the original address
- actual objects can be stored in different places in memory, we get access to these objects through references

## COMPACT ARRAYS

- strings are represented using an array of characters (not an array of references)
- compact arrays store characters itself in memory, not references
- compact arrays have better computational performance than referential arrays
- most sigfinicantly, the overall memory usage will be much lower for a compact array because there is no overhead devoted to the explicit storage of the sequence of memory references (in addition to primary data)
- referential structure will typically use 8 bytes for the memory address stored in the array, on top of whatever number of bytes are used to represent the object  that is considered the elements
- if each character were stored independently as a one-character string, there would be significantly more bytes used
- another important advantage to a compact structure for high performance computing is that the primary data are stored consecutively in memory, this not always the case for referential arrays (after it has been extended or somehow modified)

## ARRAY MODULE

- primary support for compact arrays is in a module named array
- that module defines a class, named 'array', providing compact storage for arrays of primitive data types
- public interface for the array class conforms mostly to that of a Python list
- however, the constructor for the array class requires a type code as a first parameter

```python
import array

arr = array('i', [2,3,4,5,6]) # array of signed integers, typically represented using at least 2 bytes each
```

- the type code allows the interpreter to determine precisely how many bits are needed per element of the array
- type codes supported by module array, are based upon native C data types

## C DATA TYPE TYPICAL NUMBER OF BYTES

b signed char 1
B unsigned char 1
u Unicode char 2 or 4
h signed short int 2
H unsigned short int 2
i signed int 2 or 4
I unsigned int 2 or 4
l signed long int 4
L unsigned long int 4
f float 4
d float 8

- array module does not provide support for making compact arrays of user-defined data types
- compact arrays of this type can be created with ctypes module

## LONG, INT AND SHORT

- these mostly refer to types of integers used in C programming language
- they all represent integers, but they vary on the range
- short (from -32 768 to 32 767), 2 bytes of memory usage
- int (from -2 147 483 648 to 2 147 483 647), 4 bytes of memory usage
- long (-9 223 372 036 854 775 808 to 9 223 372 036 854 775 807)

## SIGNED AND UNSIGNED (IN C LANGUAGE, IN PYTHON INTEGERS ARE SIGNED BY DEFAULT)

- unsigned int (0 to 4 294 967 295 -> double of signed int)
- unsigned short (0 to 65535 -> double of signed short)
- usigned long (0 to 18 446 744 073 709 551 615 -> double of signed long)

## LONG LONG

- in some platforms long long is a double of long, in other platforms is equal to long

## INTEGER OVERLOW

- when an integer larger than range defined in the integer type is assigned, this will result in integer overflow error

## INTEGERS IN PYTHON

int -> equivalent to long in Python 2, non-limited length in Python 3
long -> exists only in Python 2, long integer of unlimited length

## SIGNED AND UNSIGNED CHARS

- this distinction between signed and unsigned chars exists due to ASCII being a initially used as base encoding for char, therefore the first 128 characters are numeric values

## DYNAMIC ARRAYS

- you don't have to specify how large an array is beforehand
- size of dynamic arrays can be extended when the reserved space has been used

## MEMORY USAGE JUMP

- when a Python list grows in size, it reserves more and more memory stols
- it does that in jumps, first 4 slots, then 8 slots, then 12 slots
- jumps or memory reservations are created after an existing memory slots are extinguished

Length: 0; Size in bytes: 56
Length: 1; Size in bytes: 88
Length: 2; Size in bytes: 88
Length: 3; Size in bytes: 88
Length: 4; Size in bytes: 88
Length: 5; Size in bytes: 120
Length: 6; Size in bytes: 120
Length: 7; Size in bytes: 120
Length: 8; Size in bytes: 120
Length: 9; Size in bytes: 184
Length: 10; Size in bytes: 184
Length: 11; Size in bytes: 184
Length: 12; Size in bytes: 184
Length: 13; Size in bytes: 184
Length: 14; Size in bytes: 184
Length: 15; Size in bytes: 184
Length: 16; Size in bytes: 184

## DYNAMIC ARRAY IMPLEMENTATION

- the key is to provide means to grow the array A that stores the elements of a list
- if an element is appended to a list at a time when the underlying array if full, we'll need to perform the following steps

1) Allocate a new array B with larger capacity
2) Set B[i] = A[i] for i=0, ..., n-1, where n denotes current number of items. Now, both array A and B reference the same elements.
3) Set A=B, that is, we henceforth use B as the array supporting the list. This step REASSIGNS reference to array B. Reference B ceases to exist. Memory space taken by the old array A is freed.
4) Insert the new element in the new array

## BEST PRACTICE FOR INCREASING THE SIZE OF A DYNAMIC ARRAY

- double the size is the common practice

## AMORTIZATION OF DYNAMIC ARRAYS

- amortization is algorithmic pattern design
- we used this pattern allows us to reduce time complexity of append operation to O(1) from O(n)
- def: the amortized cost per operation for a sequence of n operations is the total cost of the operations divided by n
- the reason for considering amortized cost is that we will interested in data structures that occasionally can incur a large cost as they perform some kind of rebalancing or improvement of their internal state, but where such operations cannot occur too frequently
- In this case, amortized analysis can give a much tighter bound on the true cost of
using the data structure than a standard worst-case-per-operation bound.

## POTENTIAL FUNCTION

- a difference name for a piggy-bank method, when we amortize cost of future opperations by saving operations/money in the biggy-bank
- it is very important in this analysis to prove that the bank account doesn't go negative, otherwise if the bank account can slowly drift off to negative infinity, the whole proof breaks down
- a potential function is a function of the state of the system, that generally should be non-negative and start at 0, and is used to smooth out analysis of some algorithm or process

## INTERVIEW TIPS

- in interview enviornment, you are almost always considering the worst case runtime of algorithm, sometimes average case
- inteviewer can ask about both space and time complexity
- idea of referencing (in arrays) is critical
- set() is a common strategy to reduce complexity from n^2 to linear in algorithimic problems
- start each exercise with edge case scenario (eg. you need to find pairs of items, but provided list has only one item) if len(arr)<2: return
- in continuous sum exercise, the interviewer often ask for the start point and end point