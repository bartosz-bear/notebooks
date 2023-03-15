## PHILOSOPHY

“If 80 percent of our work is data preparation, then ensuring data quality is the important work of a machine learning team.” – Andrew Ng

## JUPYTER NOTEBOOK

jupyter notebook - starts jupyter notebook

ctrl + c - terminates running program in cmd

cls - clears the prompt in cmd

cd .. - lists folders

Shift + Enter - runs a Python code in jnotebook

Alt + Enter - runs a code and inputs a new cell below

Kernel/Restart - if you get into infinite loop

Markdown Language - https://www.markdownguide.org/

virtual environments for anaconda: https://conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html

conda create --name mypython3version python=3.5 anaconda - virt env with p3.5 and anaconda

## JUPYTER NOTEBOOKS

help(MinMaxScaler) # prints actual documentation (usually accessed on internet) in the console/Jupiter Notebook

## PYTHON LANGUAGE ITSELF

TYPE HINTS

- these are just hints, not type requirements

weather: str = "cloudy" # string is a type, and value is assigned in the same line

degrees: int
degrees: 32   # hint the data type first, and assign the value later

- its possible to assign a different type to the variable even if a certain type was hinted, and assigned earlier

degrees: int = 32
degrees = "thirty-two"

- type hinting in a function

def sum(a: str, b: str):	# types are hinted for for the input variables only
    return a + b

def sum(a, b) -> int:		# in this case, the output variable's type is hinted
    return a + b

https://stackoverflow.com/questions/32557920/what-are-type-hints-in-python-3-5
https://peps.python.org/pep-0483/
https://peps.python.org/pep-0484/

BUILT-IN FUNCTIONS AND METHODS

ORD()

- returns Unicode code for the passed character (unit lenght of 1 only)

ord('a')
97

ord('!')
33

ord('7')
55

ord('€')
8364

CHR()

- inverse of ord()
- inputs Unicode number and returns actual character
- there used to unichr() in Python 2 to distinguish between ASCII (chr) and Unicode (unichr) encoding, but in Python 3 only chr() is in use because Unicode is a 'default' system

chr(97)
'a'

chr(33)
'!'

chr(55)
'7'

chr(8364)
'€'

### STRINGS ###

- there are methods on the string object (type) but there is also a string built-in module which provides a more advanced formatting possibilities
- also string module has built-in ASCII constants like, ascii_lowercase = 'abcdefghijklmnopqrstuvwxyz', digits = '0123456789' or whitespace = ' \t\n\r\v\f'

INSERTING STRING VARIABLE

https://pytutorial.com/python-variable-in-string

TRIPLE QUOTES

my_str_single_quotes = ''' I can't go there "TOM" '''
my_str_double_quotes = """ I can't go there "TOM" """

https://stackoverflow.com/questions/7487145/having-both-single-and-double-quotation-in-a-python-string

USING SLASH TO ESCAPE

a = '"Isn\'t," she said.'       single coma is escaped here

SELECTING LETTERS IN A STRING USING INDEX

s = 'hello'
s[0]
'h'

s[included : not-included]
s[3:6] - will include fourth digit (because Python starts with zero) and will NOT include seventh digit

SLICING INDEXING

- returns everything up to a certain digit but NOT INCLUDING this digit)

s[:0] - give me everything until first character but without this first character
'' returns nothing

s[:1]
'h'

SLICING FROM THE BOTTOM

s[:-1]
'hell'

s[3:]
'lo'

s[-2:]
'lo'

s[1:3]
'el'

REVERSE STRING

letters = 'abcde'
letters[::-1]
'edcba'

REMOVING WHITE SPACES OR ANY DEFINED CHARACTERS AT THE END OR BEGINING OF THE STRING

my_string.rstrip() "banana   " -> "banana"
my_string.lstrip() "   banana" -> "banana"
my_string.lstrip('!') "!!!banana" -> "banana"

STRIP ALL PUNCTUATION FROM A STRING

import string

s = "What's wrong with ASCII?!?!?"
s.rstrip(string.punctuation)
'What's wrong with ASCII'

SPLIT STRING TO EXTRACT DOMAIN FROM EMAIL ADDRESS

s = 'user@domain.com'
domain = s.split('@')[1]

PRINTABLE CONSTANT AND ISPRINABLE METHODS

string.printable is a constant defined in the string.py module

my_string.isprintable() is a method which tells you if a string is printable (in this context it means that it has none of the following:  {'\v', '\n', '\r', '\f', '\t'}, different way at looking at isprintable() is that it considers a string printable if 'all of its characters are considered printable in repr()."

PYTHON ENCODING/DECODING

- Python uses different "techniques" for code parsing, transcoding and I/O (print, repr)

DECODING

- translation from bytes (binary system) to characters (Unicode)

ENCODING

- translation from characters (Unicode) to bytes (binary system)
- Python 2 uses ASCII
- Python 3 uses Unicode (UTF-8) as a default encoding system

SMALL LETTERS AS INDICATION OF ENCODING SYSTEM

- these letters are relevant for Python 2 (because it used ASCII as a default encoding system)

str_u = u'This is unicode string.'
str_b = b'This is a bytes type.'
str_r = r"Characters can't be escaped. /n is not a new line, it's just a forward slash and letter n."

https://stackoverflow.com/questions/49991870/python-default-string-encoding
https://www.joelonsoftware.com/2003/10/08/the-absolute-minimum-every-software-developer-absolutely-positively-must-know-about-unicode-and-character-sets-no-excuses/

F-STRINGS (FORMATTED STRING LITERALS)

- released in Python 3.6
- other sting formatting conventions like:
 "Hello, %s." % name
 "Hello, {}. You are {}.".format(name, age)) ARE NOT recommended any more (but will still work)
- inside brackets code is evaluated at runtime and you can put any valid Python expressions inside them (variables, operations, functions, classes, loops)

SIMPLE SYNTAX

name = 'Eric'
age = 74
f"Hello, {name}. You are {age}."

EVALUATING FUNCTIONS, OPERATIONS, ETC INSIDE A F-STRING

f'{2 * 37}'

def to_lowercase(input):
    return input.lower()

name = 'Eric Idle'
f"{to_lowercase(name)} is funny."

f"{name.lower()} is funny." # calling a method of a string 

INSTANTIATING A CLASS INSIDE A F-STRING



class Comedian:
    def __init__(self, first_name, last_name, age):
        self.first_name = first_name
        self.last_name = last_name
        self.age = age

    def __str__(self):
        return f"{self.first_name} {self.last_name} is {self.age}."

    def __repr__(self):
        return f"{self.first_name} {self.last_name} is {self.age}. Surprise!"

f"{Comedian('Eric', 'Idle', '74')}"

- by default __str__ will be used in the F-string, but if you want to you __repr__ include the !r flag

f"{Comedian('Eric', 'Idle', '74')!r}" # class call with !r flag to use __repr__ method


https://realpython.com/python-f-strings/

TUPLE

- immutable list

s = (1,2,)

SET

- list of unique elements

s = {1,1,2,2,3,3}
print (s)
{1,2,3}

PYTHON INDENTATION IS 4 SPACES

ELIF (else if, other if)

- executes only the first condition

if 1 == 2:
    print ('First')
elif 3 == 3:
    print ('Middle')
else:
    print ('Last')

RANGE

- range is a GENERATOR of numeric values
- starts with zero or specified number


LIST COMPREHENSION

- its a short-cut syntax to create a list by iterating operation on existing list items

-long version

x = [1,2,3,4]
out  = []

for num in x:
    out.append(num**2)

- short version (list comprehension)

x = [1,2,3,4]
out = [num**2 for num in x]

SHIFT + TAB IN JUPITER

- returns function summary (docstring and expected arguments)

MAP FUNCTION

- its an iterator (iterates over a list and applies a function on each iterated object of this list)
- returns a map object not a list, so if you want to convert this to a list, you have to list[map(func, seq)]

DUNDER METHOD

__dundermethod__

- a method which has two underscores before it and two underscores after it
- it's a contract between the person who implemented a certain class and the Python interpreter, which knows when to call this particular dunder method
- they are used so the third-party objects feel like native Python objects
- as Python programmers we are not allowed to call dunder methods directly, instead we are meant to use the high-level operations (like the + for __add__ method, or = for __eq__ method), its Python job to call the dunder method directly, we are supposed to operate on the higher level
- dunder methods power pretty much all operations in python and even some of the built-in functions
- if you make your own classes in Python, you can use dunder methods for operator overloading (this is what authors of third-party libraries do, in order to make the objects in their libraries act like native Python objects)

https://www.pythonmorsels.com/what-are-dunder-methods/

NOTIMPLEMENTED

NotImplemented is a type NotImplementedType, singleton object used with a very specific purpose(it is used to indicate that a particular operation is not defined on an object).
- when NotImplemented is returned, it should be understood that it is not a valid result, rather an indication that the equality comparison is invalid
- is used to warn against using __dundermethod__ by calling it directly

OPERATOR OVERLOADING

- giving extended meaning beyond their predefined operational meaning
- for example, operator '+' is used to add two integers as well as join two strings and merge two lists
- it is achievable because '+' operator is overloaded by int class and str class
- operator overloading allows for different behavior for objects of different classes

ITERATOR OBJECT

- iterators are mostly useful in object-oriented paradigm
- iterator is an object used to iterate over iterable like lists, typles, dicts and sets
- the iterator is initialized using the iter() method, returns an interator object
- it uses next() method for iteration, returns the next value for the iterable
- StopIteration is used a signal that it has finished iterating all items of the iterable

ITERABLE
- list, tuple, dict or set
- used as input data type for an iterator object

CREATE AN ITERATOR

my_iterator = iter([1,2,3])

ITERATE OVER USING NEXT FUNCTION

print(next(my_iterator))

YIELD STATEMENT

- yield statement suspends' a function's execution and sends a value back to the caller, but retains enough state to enable the function to resume where it left off, it will not affect the local state
- when the function resumes, it continues execution immediately after the last yield run, this is different to a normal function, which always start with new set of values (doesn't maintain state)
- this allows its code to produce a series of values over time, rather than computing them at once and sending them back like a list
- yield statement returns a generator object instead of simply returning a value, if you want to get values stored inside the generator object, you have to iterate over it
- return sends a specified value back to its caller whereas yeild can produce a sequence of values
- we should use yield when we want to iterate over a sequence, but don't want to store the entire sequence in memory
- yield is used in Python generators
- a generator function is defined just like a normal function, but whenever it needs to generate a value, it does so with the yield keyword rather than return
- if the body of a def contains yield, the function automatically becomes a generator
- if you want to return multiple values from a function, you can use generator functions with yield keywords. The yield expressions return multiple values. They return one value, then wait, save the local state, and resume again.
- you can use multiple yield statements in a generator function


# A generator function that yields 1 for the first time,
# 2 second time and 3 third time
 
def simpleGeneratorFun():
    yield 1
    yield 2
    yield 3
 
# Driver code to check above generator function
for value in simpleGeneratorFun():
    print(value)

1
2
3

https://www.simplilearn.com/tutorials/python-tutorial/yield-in-python

NEXT() FUNCTION

- its a function used on iterators and generators to return the next value from the function

GENERATOR

- generator is an object (function) is created by yield expression
- its an object but its also a function, a function which can maintain state
- you can access or read values returned from the generator function stored inside a generator object one-by-one using next() and list() methods or iterating over it using for loop
- generator is an interator which generates a list using next() function
- you can get values from the generator by
- you can call generators instance only once per assigned variable, once values from a particular variable are exhausted, it won't return anything
- very efficient for dealing with large data sets
- disadvantage is that it adds complexity to the program due to maintaining state

DEMONSTRATION OF A GENERATOR BEHAVIOR

print(next(gen_object))
print('break')
for i in gen_object:
    print(i)

SIMPLE WAY TO GET A VALUES FROM THE GENERATOR OBJECT IS USING LIST

def filter_odd(numbers):
    for number in range(numbers):
        if (number%2 != 0):
            yield number

odd_numbers = filter_odd(20)

print(list(odd_numbers))

[1, 3, 5, 7, 9, 11, 13, 15, 17, 19]

STOPITERATION ERROR

- this error is raised when you call a next() function on an iterator/generator which has already returned all values

REAL LIFE USE OF GENERATORS

- they can be memory efficient because processing is halted until the last moment it is needed
- example: let's assume that generating a random number for a person is an expensive, computational operation, generator let us perform a random number operation (choosing a random number from a list without replacement) on first 10 digits because only the first 10 people came in (out of expected 100), when someone new comes, we perform another operation, until expected 100 arrives [THIS EXAMPLE IS LITTLE WEAK AS I DON'T HAVE A REAL LIFE EXAMPLE YET, SO ITS JUST A SILLY, INTUITIVE EXAMPLE]

REPR() - REPRESENTATION

- function to call a dunder method of an object
- __repr__ returns a sting representation which is machine readable, while __str__ returns a string representation which is human readable
- __str__ calls __repr__ internally by default
- repr() can be used for visualisation purpose during programming, method can be used to escape the newline character so that you can explicitly see '\n' instead of an empty line

https://www.pythontutorial.net/python-oop/python-__repr__/

LAMBDA EXPRESSION

- anonymous, one-off use function
- no need for name

lambda var:var2

seq = [1,2,3,4,5]
ll = list(map(lambda var:var*2,seq))
print (ll)
[2,4,6,8,10]

LAMBDA WITH TWO ARGUMENTS

adderlam = lambda x,y: x+y
adderlam(2,3)
5


IN OPERATOR

'x' in [1,2,3]
False

1 in [1,2,3]
True

TUPLE UNPACKING

x = [(1,2), (3,4), (5,6)]
for a,b in x:
   print(a)

1
3
5

for a,b in x:
    print(a)
    print(b)

1
2
3
4
5
6

ENUMERATE

- enumerate is an iterable object (object supporting iteration)
- it's a structure containing pairs (index, item)

en = enumerate(messages[:10])

for i in en:
    print(i)

(0, 'string1')
(1, 'string2')

Example when index and item is printed separately:

for mess_no, message in enumerate(messages[:10]):
    print(mess_no, " break ", message)
    print('\n')

0  break  string 1


1  break  string 2

NUMPY

ARRAYS
- vectors (one dimensional)
- matrix (two dimensional)

ORDER OF ARGUMENTS
- rows first
- columns second
- this is called C-style(row-major, row first), this is default
- optional is Fortran-style(column major, column first)

np.zeros((2,3)) - 2 rows, 3 columns of zeros

RANGE GENERATOR IN NUMPY

np.arange(0,10)

ONES

np.ones(4)
np.ones(3,4)

LINSPACE

- takes a range, to define total number of items, a generates defined number of evenly spaced items within this range
- one dimensional

np.linspace(0,5,10) #range from 0 to 5, and 10 evenly spaced items within this range

array([0.        , 0.55555556, 1.11111111, 1.66666667, 2.22222222,
       2.77777778, 3.33333333, 3.88888889, 4.44444444, 5.        ])

IDENTITY MATRIX
- square matrix (even number of rows and columns)
- has 1s diagonally, and all the rest is 0s

np.eye(4) #creates an identify matrix of 4 rows and 4 columns

array([[1., 0., 0., 0.],
       [0., 1., 0., 0.],
       [0., 0., 1., 0.],
       [0., 0., 0., 1.]])

RANDOM

np.random.rand(5)

- one dimensional arrays of random numbers in the range from 0 to 1

np.random.rand(5,5)

RESHAPE

- number of items in both arrays has to match

arr = np.arange(25)

array([ 0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15, 16,
       17, 18, 19, 20, 21, 22, 23, 24])

arr.reshape(5,5)

array([[ 0,  1,  2,  3,  4],
       [ 5,  6,  7,  8,  9],
       [10, 11, 12, 13, 14],
       [15, 16, 17, 18, 19],
       [20, 21, 22, 23, 24]])

single_house.values.reshape(-1,19) # negative one means keep old dimensions along that axis, this add another dimension with the same size, so 1-dimensional array can become a 2-d array with the same shape, 

array([ 3, 2]) becomes array([[3, 2]))

CASTING

- its transforming one data type to another

x = int(1)   # x will be 1
y = int(2.8) # y will be 2
z = int("3") # z will be 3

arr = np.array(my_list) # casting a list to an array

BROADCASTING AN ARRAY

Broadcasting refers to how numpy treats arrays with different Dimension during arithmetic operations which lead to certain constraints, the smaller array is broadcast across the larger array so that they have compatible shapes. 

arr = np.arange(0,11)

arr[0:5] = 100 # new array will the size of the original array, however all "missing" elements caused by slicing will be replaced by 100

arr

array([100, 100, 100, 100, 100,   5,   6,   7,   8,   9,  10])

COPY

- creates an actual copy of an array instead of a view of array as provided by broadcasting

arr = np.arange(0,11)

arr[5:] = 99

array([99, 99, 99, 99, 99, 99,  6,  7,  8,  9, 10])

arr # just a view of the sliced and broadcasted array

copy_of_arr = arr.copy[:] = 77 # actual copy of sliced and broadcasted array

copy_of_arr

array([77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77])

DOUBLE BRACKET FORMAT FOR ACCESSING ELEMENTS OF 2D ARRAY

arr_2d = np.array([[5,10,15],[20,25,30],[35,40,45]])

arr_2d[0][0]

5

arr_2d[0]

[5,10,15]

COMA, SINGLE BRACKET NOTATION

arr_2d = np.array([[5,10,15],[20,25,30],[35,40,45]])

arr_2d[0,0]

5

GETTING SUBSECTIONS OF 2D RANGE

arr_2d

array([[ 5, 10, 15],
       [20, 25, 30],
       [35, 40, 45]])

arr_2d[:2,1:]

# get every row up to second index row (without including it), and the get all columns starting from index 1 column (including index 1 column)

array([[10, 15],
       [25, 30]])

CONDITIONAL SELECTION

arr = np.arange(1,11)

arr

array([ 1,  2,  3,  4,  5,  6,  7,  8,  9, 10])

arr > 5

array([False, False, False, False, False,  True,  True,  True,  True,
        True])

arr[arr>5]

array([ 6,  7,  8,  9, 10])

SPECIAL DATA TYPES

inf - infinity
nan - not a number

RANDOM NUMBER BETWEEN 0 AND 1 IN NUMPY

np.random.rand()

FLATTEN AN ARRAY OF LISTS (LIST OF LISTS) .ravel()

x = np.array([[1, 2, 3], [4, 5, 6]])
np.ravel(x)
array([1, 2, 3, 4, 5, 6])

SERIES

- equivalent to hash tables
- can store functions as values

RANDOM.SEED

from numpy.random import randn

np.random.seed(101) - allows to non-random random numbers

INPLACE ARGUMENT

df.drop('new', axis=1, inplace=True)

- use this to apply the operation to the object, to make the change permanent

ROWS AND COLUMNS
- row = axis 0
- columns =axis 1

SUMMING ALL ROWS VALUES EQUAL TO ONE IN A SERIES

sum(sal[sal['Year']==2013]['JobTitle'].value_counts() == 1)

SELECTION

AT (SINGLE ROW OR COLUMN) - ACCESSING SINGLE VALUE BY REFERENCING KEY AND INDEX

df.iat[0,2] - get value from intersection of the 0th row and 2nd column
sal.at[0, 'JobTitle']

INDEX SELECTION IN DATAFRAME

bac[bac.index.year == 2008].plot(figsize=(12,8))
returns.ix['2015-01-01':'2015-12-31'].std()

LOCATION (GROUP OF ROWS/COLUMNS) - ACCESSING ROWS BY KEY AND INDEX

df.loc['A'] - access row 'A' in a Series format
df.iloc[0] - access first row in a Series format

SUBSET OF LOCATION

sal.loc[([2],['JobTitle','BasePay'])]
df.loc[['A','B'],['W','Y']]

ISIN - TO CHECK WHETHER EACH VALUE FROM A DATAFRAME SERIES IS WITHIN A SPECIFIED RANGE

sal['Year'].isin((1999,2011))

WHERE - PASS A CONDITIONAL AND CHANGE VALUE IF FALSE

sal['Year'].where(sal['Year']>2011,'888')

0          888
1          888
2          888
3          888
4          888
          ... 
148649    2014
148650    2014
148651    2014
148652    2014
148653    2014

MASK - PASS A CONDITIONAL AND CHANGE VALUE IF FALSE

sal['Year'].where(sal['Year']>2011,'888')

0          888
1          888
2          888
3          888
4          888
          ... 
148649    2014
148650    2014
148651    2014
148652    2014
148653    2014

QUERY

- use to filter whole DataFrame, pass a condition, get results when condition is true

sal.query('OvertimePay > BasePay')

INSERTING A COLUMN

sal.insert(1,'Test','Value') # 1=insert after first column, 'Test' is name of the column, 'Value' is the value of 

REPLACE COLUMN BY ADDING NEW DATA

df['timeStamp'] = pd.to_datetime(df['timeStamp']) #replace strings series with TimeStamp series

CREATING A DUPLICATE COLUMN

sal.insert(1,'DuplicateOfEmployeeName',sal['EmployeeName'])

REMOVING DUPLICATES FROM A DATAFRAME

`df[df.duplicated(keep=False)]`

CHANGE COLUMN NAME IN A DATAFRAME

df.rename(columns={'old_column_name':'new_column_name'})

CHECK DATATYPES OF A DATAFRAME

df.dtypes

SELECT COLUMNS BY DATA TYPE

df_num = df.select_dtypes(include='number') # select numerical columns
df_cat = df.select_dtypes(include=['object','category']) # select non-numerical columns

ITERATOR OVER INFO AXIS

for x in df.__iter__():
    x.capitalize()

ITERROWS

- can be used to access a Series, of column names and a single row

row = next(sal.iterrows())[1]
row

Id                                                               1
Test2                                               NATHANIEL FORD
Test                                                          True
EmployeeName                                        NATHANIEL FORD
JobTitle            GENERAL MANAGER-METROPOLITAN TRANSIT AUTHORITY

POP (Cut and Paste)

- return a single column and remove from the DataFrame

CONDITIONAL SELECTION

EXAMPLE: df[df>0]

df = pd.DataFrame(randn(5,4),['A','B','C','D','E'],['W','X','Y','Z'])

booldf = df > 0

booldf

	W 	X 	Y 	Z
A 	True 	True 	True 	True
B 	True 	False 	False 	True
C 	False 	True 	True 	False
D 	True 	False 	False 	True
E 	True 	True 	True 	True

df[booldf]

 	W 	X 	Y 	Z
A 	2.706850 	0.628133 	0.907969 	0.503826
B 	0.651118 	NaN 	NaN 	0.605965
C 	NaN 	0.740122 	0.528813 	NaN
D 	0.188695 	NaN 	NaN 	0.955057
E 	0.190794 	1.978757 	2.605967 	0.683509

CONDITIONAL SELECTION - IDENTITY

** What is the job title of JOSEPH DRISCOLL ? Note: Use all caps, otherwise you may get an answer that doesn't match up (there is also a lowercase Joseph Driscoll). **

sal[sal['EmployeeName'] == "JOSEPH DRISCOLL"]['JobTitle']

OPERATIONAL CONDITIONING SIGNS IN PANDS

- only these signs can be used, otherwise it will be ambigous for Python

& - and
| - or

df[(df['W']>0) | (df['Y']>1)]

ALSO, pass each condition in parenthesis

RESETTING INDEX

df.reset_index()

- if you want this to be permanent, use inplace=True argument

SETTING INDEX

df.set_index('States')

WHAT IS THE INDEX OF A ROW WHICH MAXIMUM VALUE BY EMPLOYEEPAY?

df['EmployeePay'].idxmax()

ZIP

- creates a list of typles from two lists

MULTI-INDEX

# Index Levels
outside = ['G1','G1','G1','G2','G2','G2']
inside = [1,2,3,1,2,3]
hier_index = list(zip(outside,inside))
hier_index = pd.MultiIndex.from_tuples(hier_index)

df = pd.DataFrame(randn(6,2),hier_index,['A','B'])

CROSS SECTION

- this one is used to get cross-sectional data in a multi-index situation

df.xs

REPLACE SPECIFIC VALUES IN A SERIES WITH ANOTHER SPECIFIC VALUES

df['home_ownership'].replace('NONE', 'OTHER', inplace=True)

REPLACE SEVERAL SPECIFIC VALUES WITH ONE SPECIFIC VALUE

df['home_ownership']=df['home_ownership'].replace(['NONE', 'ANY'], 'OTHER') # replace "None" and "Any", with "Other"

NAN VALUES

- nan in dataframe/numpy is different than python nan due to linear algebra considerations
- see the link below for good extensive explanations

df.dropna() #drops every row with missing values
df.dropna(thresh=2) # drops every row with at least 2 missing valeus
df.fillna(value='fill value') # will fill missed values with value arguments
df['A'].fillna(value=df['A'].mean()) # will fill misssed values with mean of non-missed values
df.dropna(subset=['pub_rec_bankruptcies', 'pub_rec'], inplace=True) #remove missing values in two specified columns

https://medium.com/analytics-vidhya/dealing-with-missing-values-nan-and-none-in-python-6fc9b8fb4f31

GROUPBY

- groups data by specificed value and then you can run an AGGREGATE FUNCTION, like sum() or std()

byComp = df.groupby('Company')
byComp.sum()
byComp.sum().loc['FB']
df.groupby('Company').describe().transpose()['FB']

sal.groupby(['JobTitle']).mean()['BasePay'].sort_values(ascending=False).head(20)

Group by one column and then select a second column and calculate mean on the second column

df.groupby('title')['rating'].mean()

SELECT COLUMNS BASED ON TYPE

df.select_dtypes(include=['object'])
df.select_dtypes(exclude=['float64'])

LIST OF COLUMNS NAMES OF A SPECIFIC TYPE

df.select_dtypes(include=['object']).columns # include colums with type 'object'
df.select_dtypes(exclude=['float64']).columns # exclude columns with type 'float64'

Index(['term', 'grade', 'sub_grade', 'home_ownership', 'verification_status',
       'issue_d', 'loan_status', 'purpose', 'earliest_cr_line',
       'initial_list_status', 'application_type', 'address'],
      dtype='object')

CONCATENATION

- glueing together DataFrames

pd.concat([df1,df2,df3])

MERGE FUNCTION

pd.merge(left,right,how='inner',on='key')
pd.merge(left,right, on=['key1','key2'])

JOINING

- when two dataframes share a common index, they can be joined together using .join. Index column doesn't have to be implicitly specified

corr_starwars = corr_starwars.join(ratings['num of ratings']) 

left = pd.DataFrame({'A': ['A0', 'A1', 'A2'],
                     'B': ['B0', 'B1', 'B2']},
                      index=['K0', 'K1', 'K2']) 

right = pd.DataFrame({'C': ['C0', 'C2', 'C3'],
                    'D': ['D0', 'D2', 'D3']},
                      index=['K0', 'K2', 'K3'])

left.join(right)

 	A 	B 	C 	D
K0 	A0 	B0 	C0 	D0
K1 	A1 	B1 	NaN 	NaN
K2 	A2 	B2 	C2 	D2

OPERATIONS

FINDING UNIQUE VALUES

df['col2'].unique() # returns array of unique values
df['col2'].nunique() # returns number (count) of unique values
df['col2'].value_counts() # returns number of occurence of unique values

SELECTING DATA

df = pd.DataFrame({'col1':[1,2,3,4],'col2':[444,555,666,444],'col3':['abc','def','ghi','xyz']})

 	col1 	col2 	col3
0 	1 	444 	abc
1 	2 	555 	def
2 	3 	666 	ghi
3 	4 	444 	xyz

df[df['col2']>550]

 	col1 	col2 	col3
1 	2 	555 	def
2 	3 	666 	ghi

SELECTING MULTIPLE COLUMN (OF THE SAME NAME) WITH TWO LEVEL COLUMNS DATAFRAME

- 'Close' column is separated for each bank stock
- There are two levels of columns to select from ('Bank Ticker' and 'Stock Info')
- Axis=1 means select from columns

bank_stocks.xs(key='Close', axis=1, level='Stock Info').max()

SELECTING BY ROW

bank_stocks.xs(key='2006-01-03', axis=0)

SELECT BY COLUMN FIRST AND THEN BY ROW (AFTER FIRST OPERATION COLUMNS BECOME ROWS)

bank_stocks.xs(key='2006-01-03', axis=0).xs(key='Volume',axis=0, level='Stock Info')


AND OPERATOR
df[(df['col1']>2) & (df['col2']==444)]

OR OPERATOR

yelp_class = yelp[(yelp['stars'] == 1) | (yelp['stars'] == 5)]
yelp_class = yelp[(yelp.stars == 1) | (yelp.stars == 5)]


APPLY FUNCTION
df['col1'].apply(times)
df['col3'].apply(len)
df['col3'].apply(lambda x:x*2)

APPLY FUNCTION USING TWO COLUMNS FROM DATAFRAME

def impute_age(cols):
    Age = cols[0]
    Pclass = cols[1]
    
    if pd.isnull(Age):
        
        if Pclass == 1:
            return 37
        elif Pclass == 2:
            return 29
        else:
            return 24
    else:
        return Age
    
train['Age'] = train[['Age', 'Pclass']].apply(impute_age, axis=1)

REMOVE (DELETE) A COLUMN

df.drop('col'1, axis=1)

REMOVE (DELETE) A ROW

df.drop([183], axis=0, inplace=True)
df.drop([183,575], axis=0, inplace=True) # remove several rows

ACCESSING COLUMNS AND INDEX

df.columns
df.index

ACCESSING A DATAFRAME COLUMN VALUES AS A NP ARRAY (PD SERIES)

y = df['price'].values

GETTING THE DIMENSIONS (SIZE) OF A DATAFRAME

df.shape
(300, 2)

SORTING

df.sort_values('col2')
df.sort_values(by='Grad.Rate', ascending=False).head() # sorting from higest to lowest
df.sort_values(by='Grad.Rate').head() # sorting from lowest to highest

FILTER OUT TOP 1% OF THE VALUES

len(df)*0.01
215.97
non_top_1_perc = df.sort_values('price',ascending=False).iloc[216:]

FILTER OUT EMPTY LISTS FROM DATAFRAME

df = df[df[0].str.len() != 0]

COUNT TRUE AND FALSE VALUES

df['AWS'] = df['Skills'].apply(lambda x: True if 'aws' in x else False)
df['AWS'].value_counts()

MOVING AVERAGES ON DATAFRAME + PLOTING MA

bac.insert(0, '30 Day Avg', bac['BAC'].rolling(30).mean()) # calculating MA
bac[bac.index.year == 2008].plot(figsize=(12,8)) # ploting

CHECKING FOR EMPTY VALUES

df.isnull()

PIVOT TABLES

- can be used to create a matrix like dataframe

moviemat = df.pivot_table(index='user_id', columns='title', values='rating')

PIVOT TABLE - SIMPLE EXAMPLE

data = {'A':['foo','foo','foo','bar','bar','bar'],
     'B':['one','one','two','two','one','one'],
       'C':['x','y','x','y','x','y'],
       'D':[1,3,2,5,4,1]}

df = pd.DataFrame(data)


	A 	B 	C 	D
0 	foo 	one 	x 	1
1 	foo 	one 	y 	3
2 	foo 	two 	x 	2
3 	bar 	two 	y 	5
4 	bar 	one 	x 	4
5 	bar 	one 	y 	1


df.pivot_table(values='D',index=['A','B'],columns=['C'])

 	C 	x 	y
A 	B 		
bar 	one 	4.0 	1.0
two 	NaN 	5.0
foo 	one 	1.0 	3.0
two 	2.0 	NaN

CALCULATE NUMBER OF WORDS IN A STRING (WHEN STRINGS ARE STORED IN A SERIES OF A DATAFRAME)

df['text length'] = df['text'].apply(len)

DATAFRAME TIMEDELTAS

FREQUENCY ABBREVIATIONS (ALIASES)

https://stackoverflow.com/questions/35339139/what-values-are-valid-in-pandas-freq-tags
https://pandas.pydata.org/pandas-docs/stable/user_guide/timeseries.html#offset-aliases


DATA INPUT AND OUTPUT

- pandas can't import things like formulas, images, macros, only data

LIBRARIES TO WORK WITH INPUT/OUTPUT

sqlalchemy - SQL
lxml - XML
html5lib - HTML
BeautifulSoup4 - 

FIND LOCATION OF CURRENT JUPITER NOTEBOOK

pwd

READING FROM FILES

pd.read_csv('examples.csv')
pd.read_excel('Excel_Sample.xlsx', sheet_name='Sheet1')

READING TAB SEPARATED FILES (TSV)

messages = pd.read_csv('filename', sep='\t', names=['label', 'message'])


	label 	message
0 	ham 	Go until jurong point, crazy.. Available only ...
1 	ham 	Ok lar... Joking wif u oni...

READING BUILT-IN DATASETS

iris = sns.load_dataset('iris')

SAVING TO A FILE

dt.to_csv('My_output',index=False)

XLRD - library to work with Excel files

conda install xlrd

READING HTML

- passing url and receiving a list of all tables (HTML tables) from the HTML code
- list consists of DataFrames

HEADER (5 FIRST ITEMS) OF A DATAFRAME

df.head()

TAIL (LAST 5 ITEMS) OF A DATAFRAME

df.tail()

INFO ABOUT DATAFRAME

df.info()

DESCRIPTION ABOUT DATAFRAME

df.describe()
df.describe().T # transpose the dataframe (which columns with rows)
df.describe([0.05, 0.10, 0.25, 0.50, 0.75, 0.80, 0.90, 0.95, 0.99]).T # more detailed % brackets
df.describe(include=['o']) # describe only columns of 'object' type
df.describe(include=[np.number]) # describe only numeric columns
df.describe(include=['int64']) # describe only columns of int64 type
df.describe(include=['category']) # describe only categorical columns
df.describe(exclude=[object]) # describe all columns but those of 'object' type

WORKING WITH SQL

- the best way to work with SQL is use a SQL Database specific engine instead of using pandas
- MySQL = pymysql

from sqlalchemy import create_engine

engine = create_engine('sqlite:///:memory:')

df.to_sql('my_table', engine)

sqldf = pd.read_sql('my_table', con=engine)

MATPLOTLIB

from matplotlib import pyplot as plt

%matplotlib inline # this allows to see matplotlibs in jupiter

figure -> axes -> plot

plt.show() - print the plot

or

fig [in inline mode of jupiter notebook]

GENERAL CONCEPTS

- everything in matplotlib is organized in a hierarchy
- top of the hierarchy is 'state-machine environment' provided by matplotlib.pyplot module, at this level simple functions are used to add plot elements (lines, images, text)
- pyplot level can be dropped if plots are to be used outside of typical matplotlibe environment, for example in the GUI applications
- the next level down in the hierarchy is the first object-oriented interface, in which pyplot is used only for a few functions such as figure creation, and the user explicitly creates and keeps track of the figure and axes objects (one figure and one or more axes are created)
- axes are used for plotting actions

FIGURE

- Python object
- figure is the highest in the objects hierarchy of matplotlib objects
- figure keeps track of all the a) child Axes (not plural axis), b) canvas and c) artist objects like titles, figure legends
- canvas is not relevant to matplotlib user, its doing the drawing work behind the scene
- figure can have any number of axes

AXES

- in the matplotlib context, axes is not plural of axis
- its a container(image) for a chart within a figure
- a given figure can contain many axes, but a given axes can only be in one Figure
- axes contains two (or three in the case of 3D) axis objects
- each axes has a title, x-label and y-label
- axes class and its member functions are the primary entry point to working with the OO interface

AXIS

- actual axis
- usually there is x-axis and y-axis
- they take care of setting graph limits and generating the ticks (marks on the axis) and ticklabels (strings labelling the ticks)
- Locator object is responsible for the location of the ticks
- Formatter object is responsible for the ticklabel strings

ARTIST

- most of you can see on the figure is an artist (examples: Figure, Axes and Axis, Text, Line2D, collection, Patch)
- when figure is rendered, all of the artists are drawn to the canvas

HOW DOES IT WORK?

- the first call to plt.plot() automatically create the necessary figure and axes
- subsequent calls to plt.plot() re-use the current axes and each add another line
- setting the title legend, and axis labels also automatically use the current axes

TYPES OF INPUTS

- all plotting functions expect np.array or np.ma.masked_array
- pandas dataframe and np.matrix objects may or may not work correctly, so its best to convert these to np.array

OTHER MODULES WITHIN MATPLOTLIB

pyplot - responsible for charts rendering, interface
pylab - combines pyplot and numpy, its not recommended to use

BACKEND

- rendering engine
- sometimes problems with matplolib can be caused by rendering engine and not syntax itself

https://ryxcommar.com/2020/04/11/why-you-hate-matplotlib/

ISSUES WITH MATPLOTLIB

- its written in Java-sque, using global state for fig and set methods
- it has two APIs therefore seeking answers on StackOverflow can be problematics
- solutions? using seaborn and plotly

MATPLOT LIB HIGHEST LEVEL CONFIGURATION

from matplotlib import rcParams

rcParams['figure.figsize'] = 12,4
rcParams['lines.linewidth'] = 3
rcParams['xtick.labelsize'] = 'x-large'
rcParams['ytick.labelsize'] = 'x-large'


X AND Y LABELS

axes.set_xlabel()
axes.set_ylabel()

DATA LIMITS

- axes.set_xlim() - maximum number of data points on x axis
- axes.set_ylim() - maximum number of data points on y axis

FUNCTIONAL METHOD

plt.plot(x,y)
plt.xlabel('X label')
plt.ylabel('Y label')
plt.title('Title')

SUBPLOTS

- creates several axes with one call

fig, axes = plt.subplots(nrows=3, ncols=3, figsize=(15,7), sharex=False, sharey=False)

plt.subplot(1,2,1) #nr of rows, nr of columns, subplot nr
plt.plot(x,y,'r')
plt.subplot(1,2,2)
plt.plot(y,x,'b')

https://engineeringfordatascience.com/posts/matplotlib_subplots/ # good tutorial on subplots

OBJECT-ORIENTED METHOD

fig = plt.figure()
axes = fig.add_axes([0.1,0.1,0.8,0.8]) # creates one axes and define four intervals on left, bottom, width and height
axes.plot(x,y)
axes.set_xlabel('X label')
axes.set_ylabel('Y label')
axes.set_title('Title')

CREATING A FIGURE ONLY (no axis yet)

fig = plt.figure()

CREATE ONE AXES TO THE FIGURE OBJECT (WITH COMPULSARY INTERVALS ON EACH SIDE)

axes = fig.add_axes([0.1,0.1,0.8,0.8])

CREATING A FIGURE AND MULTIPLE AXES FROM PLT.SUBPLOTS

- this will create a figure which consists of 9 axes (chart areas)

fig, axes = plt.subplots(nrows=3, ncols=3, figsize=(15, 7), sharex = False, sharey = False)

TWO SETS OF AXES ON ONE FIGURE

fig = plt.figure()

axes1 = fig.add_axes([0.1,0.1,0.8,0.8]) # THESE ARE NUMBERS
axes2 = fig.add_axes([0.5,0.15,0.4,0.3]) # THESE ARE PERCENTAGES

axes1.plot(x,y)
axes2.plot(y,x)

DEALING WITH OVERLAPPING LABELS ON PLOTS

plt.tight_layout()

ITERATING OVER AXES

fig,axes = plt.subplots(nrows=1,ncols=2)
#plt.tight_layout()

for current_ax in axes:
    current_ax.plot(x,y)

ADD TITLE TO AXES

ax.set(title=f'Distribution of Variable: {col}', xlabel=None)

REMOVE AXIS

fig.delaxes(axes[8]) - removes the 9th axes from the figure

FIGURE SIZE AND DPI

fig = plt.figure(figsize=(8,4),dpi=100)

ax = fig.add_axes([4,4,1,1])
ax.plot(x,y)

SHOW FIGURE

instead of plt.show() in jupiter notebook, simply type fig

fig

WHEN PLOTS ARE TOO TIGHT

plt.tight_layout()

SORT PLOT BY CUSTOMIZED X-LABELS - order parameter

- create a list of x labels where count of the list is equal to number of unique values for x-axis
- pass this list as order= parameter's argument

ordered_sub_grade = np.sort(df['sub_grade'].unique()).tolist()
plt.figure(figsize=(12,6))
sns.countplot(x='sub_grade', data=df, order=ordered_sub_grade)

SAVING PLOTS

fig.savefig('my_picture.png')

LEGENDS

fig = plt.figure()

ax = fig.add_axes([0,0,1,1])
ax.plot(x,y)

ax.plot(x,x**2, label='X Squared') # DEFINE LEGEND LABELS DURING PLOTTING
ax.plot(x,x**3, label='X Cubed') # DEFINE LEGEND LABELS DURING PLOTTING

ax.legend() # YOU WILL GET A WARNING IF LEGEND LABELS ARE EMPTY

ax.legend(loc=0) # BEST
ax.legend(loc=10) # CENTRE
ax.legend(loc=(0.1,0.1)) # X, Y COORDINATES FOR LEGEND LOCATION ON THE PLOT

LINE COLORS

ax.plot(x,y,color='purple')
ax.plot(x,y,color='#FF8C00')
ax.plot(x,y,color='#FF8C00', linewidth=5)
ax.plot(x,y,color='purple', lw=5, alpha=0.2)
ax.plot(x,y,color='purple', lw=5, alpha=0.2, linestyle='--') # other: '-.' ':'
ax.plot(x,y,color='purple', lw=5, alpha=0.2, ls=':') # other: '-.' ':
ax.plot(x,y,color='purple', lw=5, alpha=0.2, linestyle='-', marker='o')
ax.plot(x,y,color='purple', lw=1, alpha=0.2, linestyle='-', marker='+', markersize=20)
ax.plot(x,y,color='purple', lw=1, alpha=0.5, linestyle='-', marker='o', markersize=20,
       markerfacecolor='yellow', markeredgewidth=5, markeredgecolor='green')

CONTROLLING AXES RANGE (ZOOMING IN AND ZOOMING OUT)

ax.set_xlim([0,1])
ax.set_ylim([0,2])

SEABORN

- more interactive, and more extensive library similar to matplotlib

import seaborn as sns

SEABORN STYLING

https://seaborn.pydata.org/generated/seaborn.set_style.html
http://seaborn.pydata.org/tutorial/aesthetics.html

INTERNAL TEST DATASETS

sns.load_dataset('tips')

LINE PLOT (SINGLE LINE)

sns.lineplot(data=df['sig'])

# loading dataset
data = sns.load_dataset("iris")
  
# draw lineplot
sns.lineplot(x="sepal_length", y="sepal_width", data=data)
plt.show()


LINE PLOT (MULTI-LINES)

bank_stocks.xs(key='Close', axis=1, level='Stock Info').plot() # option 1

for tick in tickers:						# option 2
    bank_stocks[tick]['Close'].plot(figsize=(12,4),label=tick)
plt.legend()

bank_stocks.xs(key='Close',axis=1,level='Stock Info').iplot() # option 3, plotly

DISTRIBUTION PLOTS

DISTRIBUTION PLOT

sns.displot(tips['total_bill'], kde=False, bins=30)

JOINT PLOT

sns.jointplot(x='total_bill', y='tip', data=tips, kind='hex')

PAIR PLOT

sns.pairplot(tips, hue='sex', palette='coolwarm')

RUG PLOT

sns.rugplot(tips['total_bill'])

KDE PLOT

sns.kdeplot(tips['total_bill'])

KERNEL DENSITY ESTIMATION

- probability density function of a random variable based on kernels as weights

KERNEL (WINDOW FUNCTION)

- 

BANDWIDTH OF A KERNEL

- is a free parameter which exhibits a strong influence on the resulting estimate

CATEGORICAL PLOTS

GENERAL CATEGORY PLOT

sns.catplot(x='day', y='total_bill', data=tips, kind='violin')

BAR PLOT

- bar plot + estimator (aggregate function)

import numpy as np
sns.barplot(x='sex', y='total_bill', data=tips, estimator=np.std) # without defining estimator, default function is mean

COUNT PLOT

- counts number of items per category defined in x axis

sns.countplot(x='sex', data=tips)


BOX PLOT

sns.boxplot(x='day', y='total_bill',data=tips)

USING SCATTER PLOT WITH LATITUDE AND LONGITUDE DATA TO PLOT DATA POINTS AS ACTUAL MAP

plt.figure(figsize=(10,8))
sns.scatterplot(x='long', y='lat', hue='price', data=df)

PLOTTING STRAIGHT LINE AS AN IDEA OF A PERFECT LINEAR REGRESSION (TRICK)

plt.plot(y_test,y_test,'r') # both x and y values will always be the same, so the line will be straight

VIOLIN PLOT

split=True - with this argument set to True, hue KDE will split, male KDE on the left, female KDE on the right

sns.violinplot(x='day', y='total_bill', data=tips, hue='sex', split=True)

STRIP PLOT

sns.stripplot(x='day', y='total_bill', data=tips, hue='sex', split=True)

SWARM PLOT

sns.violinplot(x='day', y='total_bill', data=tips)
sns.swarmplot(x='day', y='total_bill', data=tips, color='black')

MATRIX PLOTS

- matrix plots require data in a matrix form (both rows and columns have to have meaning), indices in rows are not acceptable
- example of matrix data type is my_table.corr()
- matrix type can also be created using pivot table, flights.pivot_table(index='month', columnds='year', values='passengers')

HEATMAP PLOT

tc = tips.corr()
sns.heatmap(tc, annot=True, cmap='coolwarm')
sns.heatmap(fl, cmap='coolwarm', linecolor='black', linewidth=1)

USING HEATMAP AS A VISUALISATION OF MISSING VALUE (NULL)

sns.heatmap(df.isnull(), yticklabels=False, cbar=False, cmap='viridis') #yticklabels, cbar, and cmap are just estaethics configurations

CLUSTER PLOT

fl = flights.pivot_table(index='month', columns='year', values='passengers')
sns.clustermap(fl, cmap='coolwarm') # numerical values
sns.clustermap(fl, cmap='coolwarm', standard_scale=1) #% of values

GRID PLOTS

- grid plots are more customizable pair plots

PAIR GRID

iris = sns.load_dataset('iris') # empty grid
g = sns.PairGrid(iris) # add values
g.map_diag(sns.distplot) # define type of plot
g.map_upper(plt.scatter)
g.map_lower(sns.kdeplot)

FACETGRID

- this is not an actual plot(chart), its a grid, and then you have to use a plot of your choice (dist, scatter, hist) and plot it on the grid
- it can be used to plot two charts on one area

g = sns.FacetGrid(df, hue='Private, size=6, aspect=2, palette='coolwarm')
g.map(sns.hist, 'Outstate', bins=30) # 'Outstate' is a name of a column

g = sns.FacetGrid(yelp,col='stars') # there are 5 unique ratings items, so sns will create 5 small charts in one row
g.map(plt.hist,'text length')

g = sns.FacetGrid(yelp,row='stars') # there are 5 unique ratings items, so sns will create 5 small charts in one column
g.map(plt.hist,'text length')


tips = sns.load_dataset('tips')
f = sns.FacetGrid(data=tips, col='time', row='smoker')
f.map(sns.scatter, 'total_bill', 'tip')



LINEAR REGRESSION PLOTS

sns.lmplot(x='total_bill', y='tip', data=tips, hue='sex', markers=['o','v'],
          scatter_kws={'s':100})

sns.lmplot(x='total_bill', y='tip', data=tips,col='day',hue='sex', aspect=0.6, size=8)

PLOT TWO LM PLOTS NEXT TO EACH OTHER (SPLITTING BY COLUMN)

sns.lmplot(x='fico', y='int.rate', data=loans, hue='credit.policy', col="not.fully.paid")

STYLES AND COLORS

sns.lmplot(x='total_bill', y='tip', data=tips, palette='seismic', hue='sex')

EDGE COLOR

df3.plot.hist(stacked=False, color='darkBlue', edgecolor='black')

USING PLOT STYLES

plt.style.use='ggplot'
df3.plot.hist(bins=24, alpha=0.5)

LEGEND STYLING

df3.[:30].plot.area(alpha=0.4,ax=f.gca())
plt.legend(loc='center left', bbox_to_anchor=(1.0, 0.5))
sns.countplot(x='Day of Week', data=df, hue='Reason').legend(bbox_to_anchor=(1.0,0.5))

IMPORTING VISUALISATIONS LIBRARIES

ACCESS TO ONLINE FINANCIAL INFORMATION DIRECTLY INTO PANDAS DATAFRAME

https://pandas-datareader.readthedocs.io/en/latest/remote_data.html

MACHINE LEARNING

SUPERVISED LEARNING - algorithms are trained using labeled examples
- using historical data to predict future events
- spam vs legitimate email (classification)
- positive vs negative movie review (classification)

- training data is used to design model
- validation data - used to determine what model hyperparameters to adjust
- test data is used to test the model, and model is adjusted accordingly (final data set, you shouldn't adjust immediately after test data)

EXPLORATORY DATA ANALYSIS AND FEATURES ENGINEERING

CHECK IF THERE ARE ANY MISSING VALUES (#N/A Values)

df.isnull().sum()

person_age                       0
person_income                    0
person_home_ownership            0
person_emp_length              895
loan_intent                      0
loan_grade                       0
loan_amnt                        0
loan_int_rate                 3116
loan_status                      0
loan_percent_income              0
cb_person_default_on_file        0
cb_person_cred_hist_length       0
dtype: int64

CALCULATE PERCENTAGE OF MISSING VALUES

percent_missing = (df.isnull().sum().sort_values(ascending=False) * 100 / len(df))

CHECK IF THERE ARE ANY MISSING VALUES (#N/A Values)

df.isna().sum()

person_age                       0
person_income                    0
person_home_ownership            0
person_emp_length              895
loan_intent                      0
loan_grade                       0
loan_amnt                        0
loan_int_rate                 3116
loan_status                      0
loan_percent_income              0
cb_person_default_on_file        0
cb_person_cred_hist_length       0
dtype: int64

DESCRIBE

df.describe().transpose()

INFO

df.info()

EXPLORING CORRELATIONS BETWEEN FEATURES

df.corr()['price'].sort_values(ascending=0) # we pick the independent variable (then one to be predicted in the test set), in order how all other features correlate to this label

df.corr()['loan_repaid'][:-1].sort_values(ascending=1) # the same but ignore correlations with one self ('loan_repaid')

GET NUMBER OF NUMERIC COLUMNS

len(df.corr().columns)

REPLACE NAN WITH ZEROS

df['DataFrame Column'] = df['DataFrame Column'].fillna(0)

https://datatofish.com/replace-nan-values-with-zeros/

GET NUMBER OF UNIQUE VALUES FOR CATEGORICAL COLUMNS

df.describe(include = "O").T

GET THE MOST FREQUENT VALUE (MODE) FROM CATEGORICAL COLUMNS

cat_col = ["person_home_ownership", "loan_intent", "loan_grade"]
df[cat_col].mode()

VARIANCE THRESHOLDING

from sklearn.feature_selection import VarianceThreshold

- variance = squared deviation from the mean
- feature selector that removes all features below threshold and those of variance zero (when two features are identical to each other)

ZERO-VARIANCE THRESHOLDING

- removes identical features
- only removes features if all elements are identical

from sklearn.feature_selection import VarianceThreshold

v_thresholder = VarianceThreshold(threshold=0)

v_thresholder.fit(df)

VERIFY WHICH FEATURES ARE ABOVE THE THRESHOLD

v_thresholder.get_support()

array([ True,  True,  True,  True,  True,  True,  True,  True]) # all features are above the threshold

QUASI VARIANCE THRESHOLDING

- removes features if there is variance of 1% only

quasi_v_thresholder = VarianceThreshold(threshold=0.01)

quasi_v_thresholder.fit(df)

BALANCED VS IMBALANCED DATASETS

Problems with imbalanced datasets:
- algos may get biased towards the majority class thus tend to predict output of the majority class
- minority class observations look like noise to the model and are ignored by the model
- imbalanced datasets give misleading accuracy score

UNDERSAMPLING

- in this technique, we reduce the sample size of Majority class and try to match it with the sample size of Minority Class
- only beneficial for huge datasets as some patterns might get lost

Before Under Sampling :

Target class ‘Yes’ = 900 records
Target class ‘No’ = 100 records
After Under Sampling :

Target class ‘Yes’ = 100 records
Target class ‘No’ = 100 records

OVERSAMPLING

- in this technique, we increase the sample size of Minority class by replication and try to match it with the sample size of Majority class
- replication of data can lead to overfitting
- high computation power is needed
- SMOTE algo can be used for oversampling

Before Over Sampling :

Target class ‘Yes’ = 900 records
Target class ‘No’ = 100 records
After Over Sampling :

Target class ‘Yes’ = 900 records
Target class ‘No’ = 900 records

https://machinelearningmastery.com/smote-oversampling-for-imbalanced-classification/

SMOTE

- syntethic minority oversampling technique

USING TREE BASED MODELS AS A SOLUTION TO IMBALANDED DATA SETS

- 'tree-based models' find it easy to deal with Imbalanced Sets compared to Non-tree Models due to their hierarchical structure
- decision trees, random forests, gradient boosted trees

USING ANOMALY DETECTION ALGORITHMS

- if subset of outliers these types of algos can be useful because they get rid of outliers and run only the data without outliers

ROUNDING NUMBERS IN A DATAFRAME

df_num.describe().round(2) # round to 2 numbers

EVALUATING PERFORMANCE (CLASSIFICATION)

KEY CLASSIFICATION METRICS
- accuracy
- recall
- precision
- f1-score

CLASSIFICATION
- either model was correct or incorrect (BINARY CLASSIFICATION)
- several options (4 options)

MODEL EVALUATION
- predicting whether an image is cat or dog
1. fit/traing a model on traning data
2. test model on testing data
3. compare results from the model performance to true y values (correct labels)

CONFUSION MATRIX

- type 1 error (false positive) - telling a man he is pregnant
- type 2 error (false negative) - telling a woman with a pregnant belly that she is not pregnant

ACCURACY
- accuracy is the most general (good fits vs total population), and precision and recall are more specific, precision (focused on false positives) and recall (focused on false negatives)
- number of correct predictions / total number of predictions
- useful when target classes are balanced (50% of dogs and 50% of cats)
- not useful when target classes are imbalanced (99% of dogs and 1% of cats), we could guess with 99% by always saying dog

total sample: 165

true positives (model predicted disease, and there was a disease): 100
true negatives (model predicted no disease, and there was no disease): 50

accuracy = (true positives + true negatives) / total sample

accuracy % = (100 + 50) / 165 = 0.91 = 91% accuracy 

MISCLASSIFICATION RATE (ERROR RATE)

error rate = 100% - accuracy rate = 100% - 91% = 9%
error rate = (false positives + false negatives) / total sample

ACCURACY

- the most general metric

Formula: ALL CORRECT LABELS: dogs identified as dogs + cats identified cats / all data points

PRECISION
- for those situations when model guesses True, how often is he right?
- ability to identify only the relevant data points
- number of true positives divided by number of true positives plus the number of false positives

Formula: IDENTIFIED DOGS dogs identified as dogs / TOTAL GUESSES (BOTH CORRECT AND INCORRECT) (actual dogs corretly labeled dogs + actual cats incorrectly labeled as dogs)

RECALL
- out of all dogs in a set (true positives + false negatives, they were all dogs), how many dogs did in find?
- ability of a model to find all the relevant cases within a dataset
- number of true positives divived by the number of true positives plus the number of false negatives

Formula: IDENTIFIED DOGS dogs identified as dogs / TOTAL DOGS (actual dogs corretly labeled dogs + actually dogs incorrectly labeled as cats, but still dogs*gods*)


RECALL-PRECISION TRADEOFF
- often you have a trade-off between Recall and Precision
- while recall expresses ability to find all revelant instances in a dataset, precision expresses the proportion of the data points our model says was relevant actually were relevant

F1-SCORE
- optimal trade-off between recall and precision
- harmonic mean of precision and recall
- f1-score = 2 * ((precision*recall)/(precision+recall))
- punished extreme values
- precission = 1.0 and recall 0.00, gives 0.5 average mean which is bad

SUPPORT

- its simply a ratio of true values vs false values
- eg. survival rate support, 163 survived out of 267, 104 died out of 267

FALSE POSITIVE (TYPE 1 ERROR) - when prediction is positive and actual value is negative (when diagnosis is positive but there really is not disease)
FALSE NEGATIVE (TYPE 2 ERROR) - when prediction is negative and actual value is  positive (when diagnosis is negative but there really was a disease)

BALANCED VS UNBALANCED CLASSES

- balanced - when a disease is balanced within a population
- unbalanced - when a disease is not balanced within a population

EVALUATING PERFORMANCE

REGRESSION
- model attempts to predict continous values (unlike categorical values, which is classification)
- precision, accuracy and recall are not useful for regression models
- example: attempting to predict price of a house given its featuters, while predicting which country a house is in based on its features would be a classification model

MOST COMMON EVALUATION METRICS FOR REGRESSION

ERROR METRICS

MEAN ABSOLUTE ERROR (MAE)
- mean of the absolute value of errors (both negative and positive, overvaluations and undervaluations)
- prediction of a house price vs actual house price
- issue: it won't punish large errors

from sklearn import metrics

metrics.mean_absolute_error(y_test, predictions)

MEAN SQUARED ERROR (MSE)
- mean of squared error (do potęgi drugiej)
- large errors are noted more
- we don't take absolute values because anything squared ends up positive

from sklearn import metrics

metrics.mean_squared_error(y_test, predictions)

ROOT MEAN SQUARE ERROR
- root of the mean of the squared errors (pierwiastek)
- most popular method for regression
- rmse of $10 is fantastic for predicting the price of a house, but horrible for predicting the price of a candy bar
- compare error metric to the average value of the label in your data set to try to get an intuition of its overall performance, domain knowledge also plays an important role here

from sklearn improt metrics

np.sqrt(metrics.mean_squared_error(y_test, predictions))

SCIKIT LEARN
- the most popular Python library for ML with plenty of libraries built-in

from sklearn.linear_model import LinearRegression

ESTIMATORS 

All following methods are available on different types of estimators:

model.fit(), two arguments for supervised models model.fit(X_train, y_train), and one argument for unsupervised models model.fit(X_train)

SUPERVISED ESTIMATORS

model.predict(), given a trained model, predict the label of a new set of data. This method accepts one argument, the new data X_new (model.predict(X_new)) and returns the learned label for each object in the array

model.predict_proba(), for classification problems, some estimators also provide this method, which returns the probability that a new observation has each categorical label. In this case, the label with the highest probability is returned by model.predict()

model.score(), for classification or regression problems, most estimators implement a score method. Scores are between 0 and 1, with a larger score indicating a better fit.

UNSUPERVISED ESTIMATORS

model.predict(), predict labels in clustering algorithms

model.transform(), given an unsupervised model, transform new data into the new basis.  This also accepts on argument X_new, and returns the new representation of the data based on the supervised model

model.fit_transform(), some estimators implement this method, which more efficiently performs a fit and transform on the same input data


ESTIMATOR PARAMETERS
- all parameters of an estimator can be set when it si instantiated, and have suitable default values

EXAMPLES:

model = LinearRegression(normalize=True)
print(model)

LinearRegression(copy_X=True, fit_intercept=True, normalize=True)

NORMALIZATION

- adjusting values measured on different scales to a notionally common scale, often prior to averaging

FULL ML PROCESS

1. Download, understand, clean, reorganize data
2. Split data into train and test sets
3. Create instance of Model
4. Train data (.fit) using train data
5. Make predictions (.predict) using test data
6. Analysing metrics (.metrics)

CROSS VALIDATION

- splitting data set into a training set (portion of a dataset) and testing set (rest of the dataset)

from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3)

TRAINING/FITTING DATA

SUBERVISED MODEL

predictions = model.predict(X_test) # not actual code

LINEAR REGRESSION

- goal of the linear regression is to find the function (equation) that can best predict values, for linear regression this involves coefficient relative to each input feature and also the the default bias (intercept)

from sklearn.linear_model import LinearRegression

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.4, random_state=42)

lm = LinearRegression()
lm.fit(X_train, y_train)

FEATURES - these are variables which are used to explain the label, eg. avg area income, avg. area house age, avg. are number of rooms, avg. area number of bedrooms, area population. These are all features. And they are used to predict the price (label).

RESIDUAL - difference between observation (y-value of a dot) and the regression line (y-value of a regression line), at the same x point

y = b + wx
y - label we are trying to predict
w - weight (the slope)
x - features (input values)
b - intercept, additional shift on top of the slope

INTERCEPT

- constant term, default bias

lm.intercept_

When are features' values are zero, the label will be equal to intercept

INFERENCE

Inference is when the trained model is used to infer (predict) values. Like putting the model into production.

FEAUTURE SCALING

- method used to normalize the range of independent variables or features of data
- its usually done during the data preprocessing step

COEFFICENTS OF FEATURES

- they indicate features' importance

2x**2 - x + 3 (coefficients are 2, -1 and 3)

HOW TO INTERPRET COEFFICENTS?

 	Coeff
Avg. Area Income 			21.528276
Avg. Area House Age 			164883.282027
Avg. Area Number of Rooms 		122368.678027
Avg. Area Number of Bedrooms 		2233.801864
Area Population 			15.150420

Additional 1 unit of "Avg. Area Income" will increase the Price by 21 dollars.
Additional 1 year of "Avg. House Age" will increase the Price by 164k dollars
Additional 1 room will increase the Price by 122k dollars
Additional 1 bedroom will increase the Price by 2233 dollars
Additional 1 unit of Area will increase the Price by 15 dollars

lm.coef_

IMPORTING DATA SETS FROM SKLEARN

from sklearn.datasets import load_boston

boston = load_boston()

PREDICTING

predictions = lm.predict(X_test)

ANALYSING PREDICTIONS

If the histogram of residuals shows a normal distribution, it means that the linear regression algorithm was the correct choice for the data.

BIAS-VARIANCE TRADE-OFF

bias and variance are inversely connected

models with high bias will have low variance
models with high variance will have a low bias

- fundamental topic of understanding your model's performance
- it's a point where we are adding noise by adding more model complexity (flexibility)
- the training error goes down as it has to, but the test error is starting to go up
- the model after the bias trade-off begins to overfit
- adding bias can cause model to overfit to your training data and cause large erros on new data

BIAS

- difference between actual values (test sample) and model predictions
- high bias leads to underfitting
- high bias = oversimplified
- high error rate

- low bias leads to overfitting
- low bias = complexity
- low bias forces the function line to fit testing data points
- leads to poor performance on the new test set, if the set is different to the training set

VARIANCE OF THE MODEL

- variance is an error from sensitivity to small fluctuations in the training set, high variance may result from an algorithm modelling the random noise in the training data (overfitting)
- variance refers to the changes in the model when using different proportions fo the training data set
- variance is the variability in the model prodiction, how much ML funcion can adjust depending on the given data set

UNDERFITTING

- high error between model predictions and train data

OVERFITTING

- too low error between model predictions and train data, leading to poor performance on the test data

IRREDUCIBLE ERROR


LOGISTIC REGRESSION

- method for classification (binary classification)
- examples: spam identification, loan default (yes, no), disease diagnosis
- two classes: 0 or 1
- logistic function (sigmoid) - it can take any value, and the result will always be between 0 and 1, good for estimation of probabilities between 0 and 100%
- we can take a linear model and place into sigmoid function
- we can set a cut-off point (true if prop > 50%, false if prop < 50%, we assign classes based on the cut-off point)
- you can use a confusion matrix to evaluate logistic model

from sklearn.linear_model import LogisticRegression

logmodel = LogisticRegression()
logmodel.fit(X_train,y_train)

predictions = logmodel.predict(X_test)

from sklearn.metrics import classification_report

print(classification_report(y_test,predictions))

IMPUTATION

- process of replacing missing data with substituted values
- if there are missing values for 'age' column, we can impute them using other categories of data (eg. 'passenger class' or 'ticket price')

def impute_age(cols):
    Age = cols[0]
    Pclass = cols[1]
    
    if pd.isnull(Age):
        
        if Pclass == 1:
            return 37
        elif Pclass == 2:
            return 29
        else:
            return 24
    else:
        return Age
    
train['Age'] = train[['Age', 'Pclass']].apply(impute_age, axis=1)

LABEL ENCODER

- use it convert categorical values to booleans (0 or 1) for binary classification problems
- use when there are only two possible values of a categorical feature
- does the same as get_dummies()

ONE HOT ENCODER

- use it convert categorical values to booleans (0 or 1) for binary classification problems
- can be used for several possible values of a categorical feature
- does the same as get_dummies()

DUMMY VARIABLE/INDICATOR VARIABLE

- a variable which takes either 1 or 0 to indicate absence or presence of some categorical effect that may be expected to shift the outcome
- for logistic function

pd.get_dummies(train['Sex'],drop_first=True) # Instead of 'male', 'female' values, you get 0 or 1 for male column

pd.get_dummies(train['Embarked'], drop_first=True) # Instead of 'S', 'Q', 'C' values you get two columns 'Q' and 'S' with 0 or 1 values, C is indicated by 0 0, Q by 1 0 and S by 0 1

DUMMY VARIABLE FOR SEVERAL COLUMNS WITH ONE CALL

dummies = pd.get_dummies(df[['verification_status', 'application_type','initial_list_status','purpose' ]],drop_first=True)

DUMMY VARIABLE FOR MULTIPLE VALUES OF THE COLUMN

- number of new columns will depend on the number of unique values - 1 (if drop_first=True)

cat_feats = ['purpose']
pd.get_dummies(loans, columns=cat_feats, drop_first=True)

K NEAREST NEIGHBOURS

- supervised learning
- used for classification
- works with any number of classes
- very few parameters (K and distance metric)
- K - number of nearest items which will be used by the algorithm
- K is n_neighbors in the KNeighborsClassifier algorithm

CONS

- high prediction cost (computationally)
- not good with high dimensional data
- categorical features don't work well

FULL PROCESS:

1. Data import, cleaning, exploration
2. Standarization of data (scaling)
3. Train-Test-Split
4. Instantiating and training KNN algo for k=1
5. Making predictions
6. Analysing predictions vs test set (confusion matrix and classification report)
7. Using elbow method to pick a good K 
8. Visualising elbow method results 
9. Analyse predictions using optimal K

SCALING

- part of data preprocessing (preparation)
- method of standardizing (making comparable accross) different features values of a data set
- example of standarization, we have a set with features: volume (1.0-2.0), weight (200-1200kg), CO2 (80-100), then we use a standarization scaling: scaled_data = (initial_data - mean_of_initial data) / standard_dev_of_initial data

weight: (790 - 1292) / 238 = -2.1
volume: (1.0 - 1.6) / 0.38 = -1.59

Now, these values can be compared.

STANDAR SCALER

This type of scaling is done using StandardScaler()

from sklearn.preprocessing import StandardScaler

scaler = StandardScaler()

scaler.fit(df.drop('TARGET CLASS', axis=1)) # scaling on a dataframe, one column was removed

scaled_features = scaler.transform(df.drop('TARGET CLASS', axis=1))

MINMAX SCALER

- transform features by scaling each feauture to a given range


from sklearn.preprocessing import MinMaxScaler

scaler.fit(X_train)

X_train = scaler.transform(X_train)


USING KNN

from sklearn.neighbors import KNeighborsClassifier

knn = KNeighborsClassifier(n_neighbors=1)

knn.fit(X_train, y_train)

MAKING PREDICTIONS

preds = knn.predict(X_test)

ANALYSING PREDICTIONS

from sklearn.metrics import confusion_matrix, classification_report

print(confusion_matrix(y_test, preds))

print(classification_report(y_test, preds))

ELBOW METHOD TO CHOOSE OPTIMAL K

- algorithm for choosing optimal K value in KNN

error_rate = []

for i in range(1,40):
    knn = KNeighborsClassifier(n_neighbors=i)
    knn.fit(X_train, y_train)
    pred_i = knn.predict(X_test)
    error_rate.append(np.mean(pred_i != y_test))

PLOTTING FOR BEST K

plt.figure(figsize=(10,6))
plt.plot(range(1,40), error_rate, color='blue', marker='o', markerfacecolor='red', markersize=10)
plt.title('Error Rate vs. K Value')
plt.xlabel('K')
plt.ylabel('Error')

RETRAIN AND ANALYSE PREDICTIONS WITH OPTIMAL K

knn_best = KNeighborsClassifier(n_neighbors=31)
knn_best.fit(X_train,y_train)
best_predict = knn_best.predict(X_test)

print(confusion_matrix(y_test,best_predict))

print(classification_report(y_test,best_predict))

TREE METHODS

- supervised learning algo
- prone to bias and overfitting

ELEMENTS

- decision trees
- random forest
- predicting if something is going to happen

- nodes
- edges (outcomes of nodes' split)
- root node
- leafs (terminal nodes that predict the outcome)

INTUITION BEHIND SPLITTING

- entropy and information gain are the mathematical methods of choosing the best split

ENTROPY

- measure of computational effort required to randomly select a desired event
- low skew in probability distribution = high entropy, high effort required
- high skew in probability dist = low entropy, low effort required

INFORMATION GAIN

- the amount of information gained about a random variable from observing another random variable
- information gain is the reduction of information entropy, it determined how decision tree is going to split the data
- maximizing information gain = finding the best way to split the data

RANDOM FORESTS

- random forest model is made up of multiple decision trees
- combines the output of multiple decision trees to reach a single result
- decision trees seek to find the best split of data
- method for classification, regression and other tasks that operates by constructing a multitude of decision trees at training time (a new set of random sample of features is chosen for every single tree at every single split)
- slight variation of bagging, but with better performance

- m - random set of features
- p - full set of features
- a new random sample of features is chosen at every single split for every single tree
- averaging highly correlated quantities does not significantly reduce variance
- by randomly leaving out candidate features from each split, Random Forests "decorrelates" the trees, such that the averaging process can reduce the variance of the resulting model

https://stats.stackexchange.com/questions/464200/why-highly-correlated-means-higher-variance

- for classification tasks, the output of the random forest is the class selected by most trees
- for regression tasks, the mean or average predicion of the individual trees is returned
- random forests generally outperform decision trees, but their accuracy is lower than gradient boosted trees
- when multiple decicion trees form an ensemble (zbiór, zespół, całość, forest), they predict more accurate results, particularly when the individual trees are uncorrelated with each other
- separate decision trees are combined into a decision forest, and their predictions are aggregated to identify the most popular result

CLASSIFICATION TREE EXAMPLE

- class labels: surf or don't surf
- nodes: wind (is there wind?), wind direction (off-shore, on-shore)
- the idea is to ask questions to arrive at the decision to surf or not to surf

SPLIT OF DATA

- can be evaluated by Gini impurity, information gain or mean square error (MSE)

ENSEMBLE METHODS
- bagging (bootstrap aggregation)
- boosting

BAGGING (BOOTSTRAP AGGREGATION)

- random sample of data in a training set is selected with replacement
- after several data samples are generated, these models are then trained independently, average or majority of these predictions yield a more accurate estimate
- this approach is commonly used to reduce variance within a noisy dataset
- random forest algo is an extension of the bagging method as it utilizes both bagging and feature randomness to create an uncorrelated forest of decision trees (this is the key diference between decision trees and random forests (higher randomness of data)
- while decision trees consider all the possible feature splits, random forests only select a subset of these features

BOOTSTRAP SAMPLE FROM THE TRAINING SET
- generating new training and data set
- sampling from a training set with replacement

SELECTION WITH REPLACEMENT
- individual data points can be chosen more than once

GINI INDEX (GINI IMPURITY)
- estimates probability, number between 0 and 1
- probability of a specific feature that is classified incorrectly when selected randomly
- 0 = purity of classification, all elements belong to a specified class or only one class exists
- 1 = random distribution of elements across various classes
- 0.5 equal distribution of elements over some classes

-while designing a decision tree, the features possessing the least value of the Gini Index would get preferred
- its calculated by deducting the sum of squared of probabilities of each class 1
- classification and regression tree algorithm deploys the method of the gini index to originate binary splits

SUPPORT VECTOR MACHINES

- supervised learning models with associated learning algos that analyse data and recognize patterns
- used for classification and regression analysis
- given a set of training examples, each markeed for belonging to one of two categories, an SVM training algo builds a model that assigns new examples into one category or the other
- non-probabilistic binary linear classifier
- svm model is a representation of the examples as points in space, mapped so that the examples of the separate categories are divided by a clear gap that is as wide as possible
- new examples are then mapped into that same space and predicted to belong to a category based on which side of the gap they fall on
- hyperplane - separating lie
- model is trying to find the best hyperplane, we want to maximise the margin between classes
- vector points that the margin lines touch are known as Suppor Vectors
- we can exapnd this idea to non-linearly separable data through the "kernel trick" (higher dimension)

PARAMETERS

C

- penalty parameter of the error term
- it controls the trade-off between smooth decision boundary and classifying the training points correctly
- too high C leads to overfitting
- error means how many wrong category classifications are on the other side of the hyperplane
- C=1 means one data point can be on the wrong side, while C=10 means that 10 points can be on the wrong side 

GAMMA

- parameter for non-linear hyperplanes
- used with Gausian RBF kernel
- controls the distance of the influence of a single training point
- low gamma means less line curvature of the hyperline (fitting) and high gamma means more curvature (more fitting)
- the higher the gamma, the harder it tries to fit the training data set
- too high gamma leads to overfitting

GRID SEARCH

- allows us to control both C and gamma

KERNELS

- kernels allow computers to learn without being explicitly programmeed
- we place the input database into a higher dimensional space with the help of a kernel method or trick and use any of the available classification algos in this higher-dimensional space
- linear, rbf, poly

KERNEL TRICK

- its a way to achieve benefits of adding the extra dimension to the data set without increasing computational cost and overfitting
- its based on similarity of features of data

RBF (RADIAL BASIS FUNCTION) KERNEL

- non linear kernel

DEGREE

- degree is used when kernel is set to 'poly'
- its the degree of the polynomial used to find the hyperplane to split the data
- degree:1 is a linear kernel
- increasing this parameter leads to higher training times

UNSUPERVISED LEARNING

- there is no outcome to be predicted, instead algo is trying to find patterns in data
- eg. in k-means algo we try to find the optimum number of clusters (labels)

K-MEANS !!! THIS WILL COME LATER !!!

- unsupervised learning method for clustering data points (takes unlabeled data)
- examples: clustering similar documents, cluster customers based on features, market segmentation, identify similar physical groups

K

- k refers to the number of groups that a diven data sample is to be split into

HOW ALGO WORKS

- choose a number of clusters 'K'
- randomly assign each point to a cluster
- until clusters stop changing, repeat the following:
 - for each cluster, compute the cluster centroid by taking the mean vector of points in the cluster
 - assign each data points to the cluster for which the centroid is the closest

ELBOW METHOD FOR CHOOSING K

- compute the sum of squared error (SSE) for some vlaues of k (2,4,6,8)
- SSE is defined as the sum of the squared distance between each member of the cluster and its centroid
- if you plot K against the SSE, you will see that the error decreases as k gets larger, this is because when the number of clusters increases, they should be smaller, so distortion is also smaller
- the idea of the elbow method is to choose the k at which the SSE decreases abruptly

GETTING LABELS AFTER ALGO HAS BEEN RUN

kmeans.labels_

algo doesn't actually name them, he just gives them a number to distinguish between different labels

CREATING RANDOM DATA SETS USEFUL FOR K-MEANS ALGO

from sklearn.datasets import make_blobs

COLORING EACH POINT ON THE PLOT SEPARATELY BASED ON ARRAY OF COLORS

kmeans.labels_ # each point in this array indicates a color from 0 to 3

array([0, 2, 3, 2, 2, 1, 2, 3, 2, 3, 0, 3, 2, 2, 0, 3, 2, 3, 1, 0, 1, 3,
       3, 1, 0, 1, 1, 3, 2, 2, 0, 1, 2, 3, 3, 0, 1, 1, 1, 3, 1, 0, 0, 0,
       3, 2, 0, 3, 1, 3, 3, 0, 2, 3, 1, 0, 3, 3, 0, 2, 1, 2, 1, 0, 2, 3,
       1, 2, 2, 1, 2, 3, 1, 3, 1, 2, 2, 3, 0, 3, 3, 1, 2, 1, 3, 3, 3, 0,
       3, 1, 1, 1, 1, 3, 3, 1, 2, 0, 1, 2, 3, 1, 3, 3, 2, 3, 1, 2, 1, 1,
       2, 0, 0, 2, 1, 2, 0, 0, 2, 0, 3, 0, 3, 0, 3, 2, 0, 3, 1, 0, 0, 0,
       3, 1, 1, 0, 2, 0, 2, 3, 1, 2, 1, 0, 0, 2, 3, 1, 0, 0, 0, 0, 3, 2,
       3, 0, 2, 2, 2, 3, 2, 3, 3, 0, 1, 0, 3, 2, 0, 3, 2, 3, 0, 2, 3, 0,
       2, 2, 1, 2, 0, 1, 1, 0, 1, 1, 1, 1, 1, 3, 1, 2, 2, 0, 1, 3, 2, 2,
       1, 3])

# using the colors array to color each point of a dataset

ax1.set_title('K Means')
ax1.scatter(data[0][:,0],data[0][:,1],c=kmeans.labels_,cmap='rainbow')

CROSS-VALIDATION

- statistical method used to estimate the skill (metrics) of different machine learning models (of the same type)

K-FOLD CROSS-VALIDATION

RESAMPLING PROCEDURE

- creation of new samples based on one observed sample

1. bootstraping where sampling is done with replacement
2. permutation (randomization tests) where sampling is done without replacement
3. cross validation

PRINCIPAL COMPONENT ANALYSIS (PCA)

- unsupervised statistical technique used to examine the iterrelations among a set of variables in order to identify the underlying structure of those variables
- PCA is just a transformation of data and an attempt to find out what features explain the most variance in your data
- also known as general factor analysis
- where regression determines a line of best fit to a data set, factor analysis determines several orthogonal lines of best fit to data set
- orthogonal means 'at right angles' (lines are perpendicular to each other in n-dimensional space)
- n-dimensional sace is teh variable sample space. There are as many dimensions as there are variables, so in a data set with 4 variables the sample spce is 4-dimensional
- components are a linear transformation that chooses a variable system for the data set such that the greates variance of the data set comes to lie on the first axis, the second greatest variance on the second axis (eg. first line explains 70% of variation, second line explains 28% of variation, 2% remains unexplained)
- this process allows u to reduce the number of variables used in an analysis
- components are uncorrelated (because they are orthogonal)
- we can continue doing this into higher dimensions
- the most challenging part of PCA is interpreting the components
- we usually want to standardize data for PCA
- this algo is usually used for analysis of data and not a fully deployable model
- principal components don't refer one-to-one to any specific features of data, instead they are a combination of all features (with different correlations) providing highest variance reduction

PROCESS

SCALING

- this is almost required for data sets with high number of features

from sklearn.preprocessing import StandardScaler

scaler = StandardScaler()

scaler.fit(df)

scaled_data = scaler.transform(df)

FITTING .fit

- calculating mean and std for a feature to be used for future scaling

TRANSFORM .transform

- method used for actual scaling using mean and std from fitting operation

FIT_TRANSFORM .fit_transform

- perform both operations on a feature

RUNNING THE PCA (REDUCING NUMBER OF FEATURES FROM N PRINCIPAL COMPONENTS)

from sklearn.decomposition import PCA

pca = PCA(n_components=2)

pca.fit(scaled_data)

x_pca = pca.transform(scaled_data)

scaled_data.shape
(569, 30) #reducing nr of features from 30

x_pca.shape
(569, 2) #to 2 principal components

PLOTTING

plt.figure(figsize=(8,6))
plt.scatter(x_pca[:,0],x_pca[:,1], c=cancer['target'])
plt.xlabel('First Principal Component')
plt.ylabel('Second Principal Component')

df_comp = pd.DataFrame(pca.components_, columns=cancer['feature_names'])

plt.figure(figsize=(12,8))
sns.heatmap(df_comp,cmap='plasma')

RECOMMENDER SYSTEMS

CONTENT-BASED RECOMMENDER SYSTEM

- focuses on the attributes of the items and give you recomendations based on the similarity between them

COLLABORORATIVE FILTERING SYSTEM

- produces recomendations based on the knowledge of users' attitude to items, that is it uses the 'wisdom of the crowd' to recommend items
- its used more often as usually it gives better results
- this algo has the ability to do feature learning on its own, which means that it can start to learn for itself what features to use

MEMORY-BASED COLLABORATIVE FILTERING

MODEL-BASED COLLABORATIVE FILTERING

EXAMPLE OF CONTENT-BASED RECOMMENDER SYSTEM

- corrwith() can be used to calculate correlations between ratings of a target movie and all other movies in the dataset

corr_starwars[corr_starwars['num of ratings'] > 100].sort_values('Correlation', ascending=False).head()

NATURAL LANGUGAGE PROCESSING (NLP)

- large part of NLP is features engineering
- better domain knowledge, the better models you can design

PROCESS
- compile documents
- featurize them
- compare these features

BAG OF WORDS
- document represented as a bag of words

'Blue House' -> (red,blue,house) -> (0,1,1)
'Red House' -> (red,blue,house) -> (1,0,1)

CORPUS
- group of all documents

TERM FREQUENCY

-Consider a document containing 100 words wherein the word cat appears 3 times. The term frequency (i.e., tf) for cat is then (3 / 100) = 0.03.

INVERSE DOCUMENT FREQUENCY

Now, assume we have 10 million documents and the word cat appears in one thousand of these. Then, the inverse document frequency (i.e., idf) is calculated as log(10,000,000 / 1,000) = 4.

TERM-FREQUENCY-INVERSE-DOCUMENT-FREQUENCY WEIGHT (TF-IDF WEIGHT)

Thus, the Tf-idf weight is the product of these quantities: TF: 0.03  * IDF: 4 = TF-IDF: 0.12. This is a weight (frequency) of a particular word adjusted for both frequency in particular document as well as frequency in all documents.


TF-IDF (Term Frequency - Inverse Document Frequency)
- we can improve on Bag of Words by adjusting word counts on their frequency in corpus (the group of all documents)
- Term Frequency - importance of the term within that document
- TF(d,t) - number of occurences of term t in document d
- Inverse Document Frequency - importance of the term in the corpus (sellection of all documents)
- IDF(t) = log(D/t)




LOGARITHM REMINDER

- Logarithm is inverse to the the function of the exponentiation, the logarithm of a given number x is the exponent to which another fixed number, the base b, must be raised, to produce that number x. 
1000 = 10 × 10 × 10 = 103, the "logarithm base 10" of 1000 is 3

TSV - TAB SEPARATED VALUES FILE

- different version, similar to CSV
- '\t' - tab separation

STOP WORDS

- the most common words in any language that do not carry any meaning and are usually ignored by NLP
- "a", "and", "the", "of"

from nltk.corpus import stopwords

stopwords.words('english')

['i',
 'me',
 'my',
 'myself',
 'we',
 'our',

Eliminating stop words from your list

nopunc

'Sample message Notice it has punctuation'

nopunc.split()

['Sample', 'message', 'Notice', 'it', 'has', 'punctuation']

clean_mess = [word for word in nopunc.split() if word.lower() not in stopwords.words('english')]

clean_mess

['Sample', 'message', 'Notice', 'punctuation']

CREATE WORDS FROM LIST OF LETTERS

print(nopunc)

['S', 'a', 'm', 'p', 'l', 'e', ' ', 'm', 'e', 's', 's', 'a', 'g', 'e', ' ', 'N', 'o', 't', 'i', 'c', 'e', ' ', 'i', 't', ' ', 'h', 'a', 's', ' ', 'p', 'u', 'n', 'c', 't', 'u', 'a', 't', 'i', 'o', 'n']

nopunc = ''.join(nopunc)

'Sample message Notice it has punctuation'

x = ['a','b',c','d']

'+++'.join(x)

'a+++b+++c+++d'

STEMMING

- stem is a base/root word
- finding a root word for set of similar words
- 'run' is the root word for 'running', 'runs', 'runned', 'runly'
- stemmed words may result in invalid words (eg. 'computer', 'comput')
- its more mechanical form, it cuts suffixes and prefixes

LEMMATIZATION

- another way of reducing a list of similar words to its root word
- context is used
- lemma its a base word/root that forms the basis for other words
- lemmatized words always result in meaningul words, because they are checked against dictionary
- lemmatization returns a valid word from a dictionary

VECTORIZATION

- tranformation of data to a format suitable for ML algorithms
- first, it identifies all unique words, these words are stored in an array and they can be accessed by vectorizer.get_feature_names_out() method
- then it parses each item of the corpus and creates and array of boolean values for each word of the item
- the result is a separate array of bools for each item of the corpus segregated by unique words, if a word is present in the item, its marked as 1 otherwise its marked as 0

corpus = [
     'This is the first document.',
     'This document is the second document.',
     'And this is the third one.',
     'Is this the first document?',
]

from sklearn.feature_extraction.text import CountVectorizer

vectorizer = CountVectorizer()

X = vectorizer.fit_transform(corpus)

vectorizer.get_feature_names_out()

array(['and', 'document', 'first', 'is', 'one', 'second', 'the', 'third',
       'this'], ...)

X.toarray()

[[0 1 1 1 0 0 1 0 1]
 [0 2 0 1 0 1 1 0 1]
 [1 0 0 1 1 0 1 1 1]
 [0 1 1 1 0 0 1 0 1]]

TOKENISATION OF MESSAGES

SPARSE MATRIX

- matrix in which most of the elements are zero
- usuful in ML where this situation is common

DENSITY OF MATRIX

- number of non-zero elements divided by total number of elements in the matrix

SPARSITY OF MATRIX

- number of zero elements divided by total number of elemetns in the matrix

EMBEDDING MATRIX

- Way of translating non-mathematical objects (words) into mathematical objects, which can be used within ML or ANN

- Suppose you have N objects that do not directly have a mathematical representation. For example words.

- As neural networks are only able to work with tensors you should look for some way to translate those objects to tensors. The solution is in a giant matrix (embedding matrix) where it relates each index of an object with its translation to tensor.

https://stackoverflow.com/questions/42762849/keras-embedding-layers-how-do-they-work

NAIVE BAYES ALGORITHMS

- The naive Bayes Algorithm is one of the popular classification machine learning algorithms that helps to classify the data based upon the conditional probability values computation.
- Naive Bayes Algorithm is a fast algorithm for classification problems. This algorithm is a good fit for real-time prediction, multi-class prediction, recommendation system, text classification, and sentiment analysis use cases.

GAUSIAN NAIVE BAYES ALGO

- continuous values corresponding to each feature are distributed according to Gaussian distribution, also called Normal distribution.

PRIOR VS POSTERIOR PROBABILITY

PRIOR - probability that an observation will fall into a group before you collect the data (probability is based on models - eg. Gausian (Normal) Distribution. If we split land into 2 parts, there is 50% that oil will on either of them, if we split into 3 parts, the prior probability is 33%.

POSTERIOR - probability is calculated after new data has been collected. We calculate posterior probabilities based on prior probabilities and new data using Bayes theorem.

For example, three acres of land have the labels A, B, and C. One acre has reserves of oil below its surface, while the other two do not. The prior probability of oil being found on acre C is one third, or 0.333. But if a drilling test is conducted on acre B, and the results indicate that no oil is present at the location, then the posterior probability of oil being found on acres A and C become 0.5, as each acre has one out of two chances. 

https://www.investopedia.com/terms/p/prior_probability.asp

MULTINOMIAL NAIVE BAYES ALGO

The frequencies of the occurrence of certain events represented by feature vectors are generated using multinomial distribution. This model is widely used for document classification.

MULTINOMIAL DISTRIBUTION - its a generalization of binomial distribution. For example, it models the probability of counts for each side of a k-sided dice rolled n times.

BERNOULLI NAIVE BASES ALGO

In this model, the inputs are described by the features, which are independent binary variables or Booleans. This is also widely used in document classification like Multinomial Naive Bayes.

BERNOULLI DISTRIBUTION

When k is 2 and n is 1, the multinomial distribution is the Bernoulli distribution. When k is 2 and n is bigger than 1, it is the binomial distribution.

Example: one roll of a coin which has two sides.

ARTIFICIAL NEURAL NETWORKS

- modeled on biological neuronal network

PERCEPTRON = NEURON
- inputs, function, output
- adjustable weights (weights are adjusting inputs, not the function)
- bias term +b (can be positive and negative)

y = x1w1 + x2w2
y = (x1w1 + b) + (x2w2 + b)

TENSOR
- n-dimensional matrix

NEURAL NETWORKS

- this framework can be used to approximate any function
- it has been proved mathematically that Neural Networks can approximate any convex continous function

BASIC ARITIFICAL NEURAL NETWORK

- multi-layer perceptron model
- y of first neuron becomes x of the second neuron

FULLY CONNECTED NEURONAL NETWORK
- every neuron of one layer is connected to every neuron of next layer

INPUT LAYER
- first layer of neurons

OUT LAYERS
- last layer of neurons

HIDDEN LAYERS
- all layers between input and output layers
- they are difficult to interpret, due to their high interconnectivity and distance away from input or output values
- the more hidden layers, the more they become like a black box, there is less certainty what is happening there

DEEP NEURAL NETWORKS
- neutral network which contains more than 2 hidden layers

ACTIVATION FUNCTIONS

- functions used to convert outputs to 0 to 1 values for classfication reasons
- z = total inputs
- changing the activation function can be very beneficial based on the task
z = wx + b

f(z) - activation function or f(Z) to denote tensor input consisting of multiple values

SIMPLEST MODEL FOR CLASSICATION 

z = wx + b
if > 0, then output is 1
if < 0, then output is 0

this is a very "strong" function, sm

SIGMOID FUNCTION (LOGISTIC FUNCTION)

- output values from 0 to 1
- f(x) = 1 / (1 + e^-x)

HYPERBOLIC TANGENT FUNCTION

- output values from -1 to 1
- tanh(z)

RECTIFIED LINEAR UNIT (ReLU)

- output values from 0 to z
- if input is lower than 0, we return 0, if its higher than 0, we return input value
- it has very good performance
- it can be applied to minimize interaction effect between features
- vanishing gradient problem is avoided in RELU, because slope doesn't plateu, therefore it converges faster

f(x) = max(0,x)

https://deepai.org/machine-learning-glossary-and-terms/rectified-linear-units#:~:text=A%20Rectified%20Linear%20Unit%2C%20or%20ReLU%2C%20is%20a,function%20will%20return%20back%20the%20same%20positive%20value.

MULTI-CLASS CLASSIFICATION

NON-EXCLUSIVE CLASSES
- a data point can have multiple classes assigned to it
- eg. photos can have multiple tags (beach, family, vacation)
- simuid function can be used for activation function
- each output neuron assigns values independent of results of each other neurons

MUTUALLY EXCLUSIVE CLASSES
- a data point can only have one class assigned to it
- eg. photos can be categorized as being in grayscale (b&w) or full color, a photo can't be both at the same time
- we can use softmax function

SOFTMAX FUNCTION
- calculates the probabilities distribution of the event over K different events
- this function will calculate the probabilities of each target class over all possible target classes
- the range will be from 0 to 1, and the sum of all probabilities will be equal to one
- the function returns the probabilities of each class and the target class chosen will have the highest probability
- [Red, Green, Blue] [0.1, 0.6, 0.3], model chooses 'green' with 60%

f(Z)i = e^^z_i / sum(e^^z_j)
K - number of categories

ONE OUTPUT NODE PER NODE
- this single output node can be either binary or continous

ONE-HOT ENCODING
- creating dummy variables
- each datapoint is checked against each category class, and assigned either 1 or 0

COST FUNCTIONS (ERROR FUNCTIONS, LOSS FUNCTION)
- must be an average so it can output a single value, this way we can monitor performance

Y HAT
- y with a "bird" on top of it
- refers to esimated value of a response variable in a linear regression model

NETWORK ESTIMATION
- y - true value
- a - represent's neuron prediction
- w*x + b = z
- pass z into activation function f(Z) = a

QUADRATIC COST FUNCTION
- C = 1/2n * (sum(y(x) - a(x))**2
- y(x) - prediction of the model
- a(x) - actual data 
- square makes everything positive and punishes extreme values

GRADIENT DESCENT
- when dealing with n-dimensional vectors (tensors), the notation changes from derivative to gradient

G C(w1,w2,...,wn)

LEARNINGS RATE

ADAPTIVE GRADIENT DESCENT
- gradient descent with learning rate

CROSS ENTROPY LOSS FUNCTION
- it assumes that your model is predicting a probability distribution for each class
- function minimizes loss for each probability distribution
- this is used for classification problems
- -(y log(p) + (1 - y) log(1 - p)) for binary classification

ADAM OPTIMIZER
- algorithm for gradient descent

BACKPROPAGATION
- calculate cost at the last layer, then pass it back to the previous layer to adjust weights and biased, calculate cost for the second last year, pass it back to the second last layer, and all the way down to the input layer

TENSORFLOW
- open-source project for deep learning developed by Google, and available for different langugages

KERAS
- high-level python library that can use the variety of deep learning libraries underneath, such as TensorFlow, CNTK, or Theano
- Keras is official Python API for TensorFlow
- no need for separate installation, as Keras is included in the TensorFlow package
- easy to use and builds models by simply adding layers on top of each other through simple calls

SEQUANTIAL MODEL

from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense

DENSE LAYER

- normal feed-forward network where every neuron of one layer is connected to every other neuron in the next layer

BUILDING A NN MODEL

- creating a model structure, and further we add data into it

model = Sequential()

model.add(Dense(4,activation='relu'))
model.add(Dense(2,activation='relu'))
model.add(Dense(1,activation='relu'))

MODEL COMPILER

model.compile()

CHOOSING OPTIMIZER AND LOSS FUNCTION FOR THE COMPILER

- choice for the loss function depends on the type of classification/regression

# For a multi-class classification problem
model.compile(optimizer='rmsprop',
              loss='categorical_crossentropy',
              metrics=['accuracy'])

# For a binary classification problem
model.compile(optimizer='rmsprop',
              loss='binary_crossentropy',
              metrics=['accuracy'])

# For a mean squared error regression problem
model.compile(optimizer='rmsprop',
              loss='mse')

VALIDATION DATA

- chunk of data set used for early stopping, when model's error diverges too much from the validation data set, its a sign for the callback to stop training

If you want to build a solid model you have to follow that specific protocol of splitting your data into three sets: One for training, one for validation and one for final evaluation, which is the test set.

The idea is that you train on your training data and tune your model with the results of metrics (accuracy, loss etc) that you get from your validation set.

Your model doesn't "see" your validation set and isn't in any way trained on it, but you as the architect and master of the hyperparameters tune the model according to this data. Therefore it indirectly influences your model because it directly influences your design decisions. You nudge your model to work well with the validation data and that can possibly bring in a tilt.

Exactly that is the reason you only evaluate your model's final score on data that neither your model nor you yourself has used – and that is the third chunk of data, your test set.

Only this procedure makes sure you get an unaffected view of your models quality and ability to generalize what is has learned on totally unseen data.


EARLY STOPPING

- this callback prevents the model from overfitting (usually happens when we selected too many epochs to run)
- keras can automatically stop training based on a loss condition on the validation data passed during model.fit() call
- when loss and val_loss diverges, this is fine until val_loss starts to increase

from tensorflow.keras.callbacks import EarlyStopping

early_stop = EarlyStopping(monitor='val_loss', mode='min', verbose=1, patience=25)

model.fit(x=X_train, y=y_train, epochs=600, validation_data=(X_test, y_test),
         callbacks=[early_stop])

DROPOUT LAYERS

- dropout layers can be added to layers to 'turn off' neurons during training to prevent overfitting
- each dropout layer will 'drop' a user-defined percentage of neuron units in the previous layer every batch
- for example model.add(Dropout(0.5)) will turn-off 50% of the neurons
- selection of neurons to be dropped is chosen randomly, so different neurons will be dropped every time

EVALUATING MODEL'S PERFORMANCE

model_loss = pd.DataFrame(model.history.history)
model_loss.plot() # plotting model's error line vs validation data error line

PREDICTING

predictions = (model.predict(X_test) > 0.5)*1  # using trained model to predict on the X_test, converting into 0-1 results

METRICS

from sklearn.metrics import classification_report, confusion_matrix

print(classification_report(y_test, predictions))

print(confusion_matrix(y_test, predictions))

VERIFY IF MODEL CORRECTLY PREDICTS A RANDOM CUSTOMER

import random
random.seed(101)
random_ind = random.randint(0,len(df))

new_customer = df.drop('loan_repaid',axis=1).iloc[random_ind]
new_customer

loan_amnt           25000.00
term                   60.00
int_rate               18.24
installment           638.11
annual_inc          61665.00
                      ...   
48052                   0.00
70466                   0.00
86630                   0.00
93700                   0.00
earliest_cr_year     1996.00
Name: 305323, Length: 78, dtype: float64

model.predict(new_customer.values.reshape(1,78)) # reshape from pandas series into numpy array, in order to fit the shape expected by model.predict
1.0

df.iloc[random_ind]['loan_repaid']
1.0

TENSORBOARD

- visualisation tool for tensorflow and keras

from tensorflow.keras.callbacks import TensorBoard

https://www.tensorflow.org/tensorboard/get_started

#############################

CREATING UNIQUE LOG FOLDER FOR EACH TIME YOU RUN A LAYER

log_directory = 'logs\\fit'

from datetime import datetime

datetime.now().strftime("%Y-%m-%d--%H%M")

timestamp = datetime.now().strftime("%Y-%m-%d--%H%M")
log_directory = log_directory + '\\' + timestamp

ADDING TENSOR BOARD TO THE MODEL

from tensorflow.keras.callbacks import TensorBoard

log_directory = 'logs\\fit'

board = TensorBoard(log_dir=log_directory,histogram_freq=1,
    write_graph=True,
    write_images=True,
    update_freq='epoch',
    profile_batch=2,
    embeddings_freq=1)

- instantiate the model

model.fit(x=X_train, 
          y=y_train, 
          epochs=600,
          validation_data=(X_test, y_test), verbose=1,
          callbacks=[early_stop,board] # this is important part, we add board here
          )

RUNNING TENSORBOARD

- go cd/ to the jupiter notebook file with the model

tensorboard --logdir logs\fit # run this in appropriate conda env from cmd

http://localhost:6006/

BIG DATA

- large data sets are stored on distributed systems (cloud) instead on the local machine
- you can have more processing power (more computers working on your computations) and more space
- after a certain point, it is easier to scale out to many lower CPU machines, than to try to scale up to a single machine with a high CPU
- distributed machines are easier to scale, you can just add another machine
- fault tolerance - if one machine fails another machine is turned on

HADOOP

- way to distribute very large files across multiple machines
- it uses Hadoop Distributed File System (HDFS)
- HDFS duplicates blocks of data for fault tolerance
- uses MapReduce

HDFS

- use blocks of data with size of 128 MB by default
- each of these blocks is replicated 3 times
- blocks are distributed in a way to support fault tolerance
- smaller blocks provide more parallelization during processing
- multiple copies of a block prevent loss of data due to a failure of a node

MapReduce

- distribution of computational task to a distributed data set
- way of splitting a computation task to a distributed set of files (such as HDFS)
- it consists of a Job Tracker and multiple Task Trackers

JOB TRACKER

- sends code to run on the Task Tracker

TASK TRACKER

- task tracker allocate CPU and memory for the tasks and monitor the tasks on the worker nodes

SPARK

- used to handle Big Data
- can use HDFS file system
- flexible alternative to MapReduce
- can store data in a variety of forms (Cassandra, AWS S3, HDFS, and more)

DIFFERENCES BETWEEN SPARK AND MAPREDUCE

- mapreduce requires files to be stored in HDFS, Spark does not
- Spark can perform operations up to 100x faster than MapReduce

RESILIENT DISTRIBUTED DATASET (RDD)

- has 4 main features
- distributed collection of data
- fault-tolerant
- parallel operation - partitioned
- ability fo use many data sources (not just HDFS)

- immurable, lazily evaluated, and cacheable

TWO TYPES OF RDD OPERATIONS

- transformations
- actions

BASIC ACTIONS

- spark operation that produces an RDD

- collect - return all the elements of the RDD as an array at the driver program
- count - return the number of elements in the RDD
- first - return the first element in the RDD
- take - return an array with the first n elements of the RDD

BASIC TRANSFORMATIONS

- spark operation that produces a local object

- RDD.filter() - applies a function to each element and returns elements that evvalute to true
- RDD.map() - transforms each element and preserves the same number of elements, like pandas .apply(). Example: grabbing first letter of a list of all names.
- RDD.flatMap() - transforms each element into 0-N elements and changes # of elements Example: tranforming a corpus of text into a list of words

RDD ARE USUALLY STORED AS TUPLES (key, value)
- this offers better partitioning of data and leads to functionality based on reduction

SPARK JOB

- sequence of transformations on data with a final action

REDUCE AND REDUCEBY

- these ideas are similar to Pandas groupby

Reduce() - an action that will aggregate RDD elements using a function that returns a single element

ReduceByKey() - an action that will aggregate Pair RDD elements using a function that returns a Pair RDD

AMAZON WEB SERVICES AWS

PuTTY - allows for secure connection from local Windows machine to AWS Linux instance

https://repo.anaconda.com/archive/Anaconda3-2022.10-Linux-x86_64.sh

PYSPARK (PYTHON AND SPARK)

LEAVE-ONE-OUT CROSS VALIDATION (LOOCV)

- special type of cross validation (splitting data into training and test set)
- statistically related to statistical method 'Jack-knife estimation"
- procedure used to estimate the performance of machine learning algorithms when they are used to make predictions on data not used to train the model
- computationally expensive, though reliable and unbiased method (not recommended for large data sets or computationally demanding model)
- k - number of subsets that a dataset is split into
- cross-validation involves fitting and evaluating k models
- further, summary statistics like mean or sth can be run on k subsets
- typical values for k are 3,5, 10, providing a good balance between low computational cost and low bias
- leave-one-out is a configuration of k-fold cross validation where k is set to the number of examples in a dataset
- LOOCV is an extreme version of k-fold cross-validation that has the maximum computational cost
- it requires one model to be created and evaluated for each example in the training dataset
- the benefit of so many fit and evaluated models is a more robust estimate of model performance as each row of data is given an opportunity to represent the entirety of the test dataset
- this method can help reduce overfitting on small data-sets

from sklearn.model_selection import LeaveOneOut

cv = LeaveOneOut()

#########################################

MATHEMATICAL NOTATION

SCIENTIFIC NOTATION

6.022e23 = 6.022 *10 to the power of 23 [very large numbers]
1.6E-35 = 1.6 * 10 to the power of -23 [very small numbers]

5.000000e+03 = 5 000 (+3 = 3 zeros, thousands) Python: 5.00 * 10 ** 3
1.593866e+04 = 15 938 (+4 = 4 zeros, tens of thousands) Python:  1.59 * 10 ** 4
3.531176e+05 = 353 117 (+5 = 5 zeros, hunders of thousands) Python:  3.53 * 10 ** 5
1.232073e+06 = 1 232 073 (+6 = 6 zeros, millions) Python: 1.23 * 10 ** 6

HEXADECIMAL NUMERIC SYSTEM

- base 16 or simply hex numeral system
- radix = base
- unlike the decimal system representing numbers using 10 symbols, hexadecimal uses 16 distinct symbols, most often the symbols "0"-"9" represent values from 0 to 9, and "A"-"F" represent values from 10 to 15 (16 symbols including 0)
- software developers and system designers widely use hexadecimal numbers because they provide a human-friendly representation of binary-coded values. Eg. an 8-bit byte can have values ranging from 00000000 to 11111111 in binary form,  which can be conveniently represented as 00 to FF in hexadecimal
- in mathematics, a subscript is used to specify the base (eg. the decimal value 9025 would be expressed in hexadecimal as 2341(base16)
- The prefix 0x is used for numeric values in C, Unix, Python, JavaScript which would denote this value as 0x2341, or 0x5A3, and \x for characters codes, followed by two hex digits '\x1B' (represents Esc character)
- in contexts where the base is not clear, hexadecimal numbers can be ambigous and confused with numbers expressed in other bases
- in URIs (including URLs), character codes are written as hex pairs prefixed by %, 'http://www.example.com/name%20with%20spaces' where %20 is the code for the space (blank) character
- in XML and XHTML, character can be expressed as hex numeric character references using the notation &#xcode; for instance &#x2019 represents the character U+2019 (the right single quotation mark). If there is no x, the number is decimal (thus %#8217 is the same character)
- in Unicode, a character value is represented with U+ followed by the hex value, eg. U+20AC is the Euro sign
- any IPv6 address can be written as eight groups of hour hexadecimal digits, where each group is separated by colon, eg. 2001:0db8:85a3:0000:0000:8a2e:0370:7334
- Conversion from hexademical to decimal, B3AD = (11*16^3) + (3*16^2) + (10*16^1) + (13*16^0) = 45056 + 768 + 160 + 13 = 45997 [B=11, 16 is constant, power of 3 depends on the order of hex digid in the hex number, and goes down by one for each digit, from left to right]

HEXDUMP
- it's a hexidecimal view (on screen or paper) of computer data, from memory or from computer file/storage. Looking at the hex dump of data is usually done in the context of either debugging, reverse engineering or digital forencisc

0123456789ABCDEF
/* ********************************************** */
	Table with TABs (09)
	1       2       3
	3.14	6.28	9.42

hexdump -v

00000000  30 31 32 33 34 35 36 37  38 39 41 42 43 44 45 46  |0123456789ABCDEF|
00000010  0a 2f 2a 20 2a 2a 2a 2a  2a 2a 2a 2a 2a 2a 2a 2a  |./* ************|
00000020  2a 2a 2a 2a 2a 2a 2a 2a  2a 2a 2a 2a 2a 2a 2a 2a  |****************|
*
00000040  2a 2a 20 2a 2f 0a 09 54  61 62 6c 65 20 77 69 74  |** */..Table wit|
00000050  68 20 54 41 42 73 20 28  30 39 29 0a 09 31 09 09  |h TABs (09)..1..|
00000060  32 09 09 33 0a 09 33 2e  31 34 09 36 2e 32 38 09  |2..3..3.14.6.28.|
00000070  39 2e 34 32 0a                                    |9.42.|
00000075

- each row represents 16 bytes
- the leftmost column is the address (hexadecimal displacement) for the values of the corresonding columns
- the last line represents the number of bytes taken from the input

https://en.wikipedia.org/wiki/Hexadecimal

UNICODE

https://home.unicode.org/

BOM - BYTE ORDER MARK

- particular usage of the special Unicode character, U+FEFF BYTE ORDER MARK, whose appearance as a magic number at the start of a text stream can signal several things to a program reading the text;
- the byte order (endianness) of the text stream in the cases of 16-bit and 32-bit encodings
- the fact that the text stream's encoding is Unicode, to a high level of confidence
- which Unicode character encoding is used (16 or 32-bit)
- BOM use is optional, its presence interferes with the use of UTF-8 by software that does not expect non-ASCII bytes at the start of a file, but that could otherwise handle the text stream
- BOM is non-character Unicode code point
- generally the receiving computer will swap the bytes to its own endianness, if necessary, and would no longer need the BOM for processing
- Unicode signature - using BOM as a way to communicate type of Unicode used
- if BOM character appears in the middle of a a data stream, unicode says it should be interpreted as a "zero-width non-breaking space"

ENDIANNESS (BYTE ORDER)

- is the order or sequence of bytes of a word of digital data in computer memory
- either big-endian(BE) or little-endian(LE)
- BE stores the most significant byte of a word at the smallest memory address and the least significant byte at the largest
- LE stores the least significant byte at teh smallest address
- endianness may also be used to describe the order in which the bits are transmitted over a communication channel, big-endian in a communications channel transmits the most significant bits first

MAGIC NUMBERS

- a constant numberical or text value used to identify a file format or protocol
- magic numbers implement strongly typed data and are a form of in-band signalling to the controlling program that reads the data type at program run-time. Many files have such constants that identify the contained data. Detecting such constants in files is a simple and effective way of distinguishing between many file formats and can yield further run-time information.

NULL CHARACTER (NULL TERMINATOR)

- it's a control character with the value zero
- it is available in nearly all mainstream programming languages
- is often abbreviated as NUL or NULL
- in 8-bit codes, it is known as a null byte
- in C and its derivatives when serving as a reserved character its used to signify the end of a string, often called null-terminated string; this allows the string to be any length with only the overhead of one byte
- null character is often represented as the escape sequence '\0' in source code, string literals or character constants
- a null character can be placed in a URL with the percent code %00
- In Unicode, there is a character with a corresponding glyph for visual representation of the null character, symbol for null, U+2400 (␀)—not to be confused with the actual null character, U+0000.
- the hexadecimal notation for null is 00

ESTIMATION NOTATION

- when we are estimating a variable x, we add a line or dash, or coma, or a hat on top of x

CURSIVE D
- used to denote a partial derivative


#############################

MACHINE LEARNING ADVICE

- embrace chaos and incompletion of learning - this is a state of being which is going to be with you until end of life, so embrace it now
- study maths when you need not for the sake of it (only the most useful things + notation)
- learn algorithms by using them
- choose the best algoritms by testing them all, find the best one, understand only the best one
- learn from practice, add theory along the way
- math advice - embrace chaos - if you can't undertand theory, go to examples, and return to theory
- implement functions and algos on your own (scripting) to increase understanding
- be shrewd, clever, slick - this is your inner strength, have confidence in yourself and use it when you can
- emotional regulation is very important - do not let your negative thinking stop your progress
- focus on progress not on completion
- trust your intuition - when ideas pop up in your mind, use them, they are for you, they can be life changing, situation changing
- intuitive learning - trust your own intuition which gives you best advice on how to learn and how to program
- recruitment - focus on relationship instead of sending job offers
- hard work is the foundation of everything
- feature engineering, data exploration and domain knowledge are real value generating activities in ML, once you understand how to use ML algos


RESEARCH

https://machinelearningmastery.com/basics-mathematical-notation-machine-learning/

MORE ABOUT PYTHON LANGUAGE ITSELF:
https://www.freecodecamp.org/news/truthy-and-falsy-values-in-python/
https://medium.com/the-andela-way/idiomatic-python-coding-the-smart-way-cc560fa5f1d6

BEST ADVANCED PYTHON BOOKS
https://www.best-books.dev/list/best-advanced-python-books

USEFUL PEOPLE
https://stackoverflow.com/users/771848/alecxe

PYTHON LEARNING PATHS eg. "Write more pythonic code", "Ace Your Python Coding Interviews"
https://realpython.com/learning-paths/

PYTHON PATTERNS
https://python-patterns.guide/python/sentinel-object/