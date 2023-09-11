## NUMPY INTRO

- provides multidimensional array object and a number of functions for fast operations on arrays
- the core numpy object is 'ndarray' object (n-dimensional arrays of homogenous data types) with many operations performed in compiled C code
- all items in an array has to be of the same type
- numpy has a fixed size at creation, unlike Python lists, changing the size of ndarray will create a new array and delete old array
- very fast computations

## IMPLICIT UPCASTING

- increasing precision (eg. from integer to float)

```python
arr1 = np.array([1,2.0,3])
#> array([1., 2., 3.])
```

## PANDAS

## SERIES

- SERIES is a one-dimensional labeled array of any data type (both same and mixed data types)

## DIFFERENCE BETWEEN PARAMETERS AND ARGUMENTS

```python
students = ['John', 'Adam', 'Jen']
pd.Series(data=students) #> data is a parameter, students is an argument
```

## CHECKING IF TWO SERIES ARE THE SAME

```python
first_series.equals(second_series)
```

## INDEXING SERIES

- if indices are not provided explicitly, numeric index starting from 0 will be created

## dtype OBJECT

'dtype('O')

- it's a pointer to memory

## STRINGS ARE SAVED AS 'O' OBJECTS BY DEFAULT

- strings are saved as pointers in memory because they vary in size, therefore can't be stored in a predefined memory slots like numbers

`pd.Series(['a', 'b'])` # dtype: object

- in order to save string as strings, cast them to string using dtype parameter

`pd.Series(['a', 'b'], dtype='string')`

## DEFAULT INDEX IN SERIES

`RangeIndex` object is a default `Series` index

-  it's immutable

`RangeIndex(start=0, stop=2, step=1)`
`<class 'pandas.core.indexes.range.RangeIndex'>`

## CREATING RANGEINDEX

`i = pd.RangeIndex(start=2, stop=10, step=2)`
`list(i) # returns [2,4,6,8]`

## NAME OF A SERIES WILL BE USED AS A COLUMN NAME IN DATAFRAME

```python
names = ['Joe', 'Jan', 'Tom']`
names_series = pd.Series(names)
names_series.name = 'Most popular names'
```

## IT'S ALSO POSSIBLE TO ADD NAME TO AN INDEX

`names_series.index.name = "My index name"`

## HOW DO YOU CREATE A SERIES FROM RANGE-LIST

`pd.Series(range(50))`

## HOW DO YOU CONFIGURE NUMBER OF DISPLAYED ROWS WHEN PRINTING A SERIES OR DATAFRAME

`pd.options.display.min_rows = 40`

## INDEXING USING SERIES INDEX (KEYS)

`alphabet[:'letter_k']` # this will display all items BEFORE and INCLUDING item with index 'letter_k'

`alphabet['letter_f':'letter_k']`

## ADDING PREFIX AND SUFFIX TO INDEX

`my_series.add_prefix('label_')` will output 'label_0', 'label_1'
`my_series.add_suffix('_post')` will output '0_post', '1_post'

## BOOLEAN MASKS

- can be used to select a subset of items from a series (eg. every second item or every third item)
- works with [] and .loc
- boolean mask needs to be the same length as the series

`pd.Series(['a', 'b', 'c']).loc([True, False, True])`

`pd.Series(['a', 'b', 'c', 'd', 'e', 'f'])[[True if x%3==0 else False for x in range(6)]]`
- this one will return a ndarray of 'a' and 'd'

## .loc - INTEGER LOC - INDEXING BY POSITION

- you can only pass integers as arguments

![](/assets/images/pandas/loc_iloc_diff.png)

## DIFFERENCE BETWEEN .loc .iloc [] square bracket and .get()

![](/assets/images/pandas/selection_by_label.png)

![](/assets/images/pandas/selection_by_position.png)

- .loc can be used with indexes labels, eg. `my_series.loc['label_f:'label_k']`
- .iloc can be used with integer (order) indexes, eg. `my_series.iloc[3:5]`
- square bracket can be used with both labeled indexes and integer indexes, and pandas will decide whether to use .loc or .iloc to perform an underlying search

<https://stackoverflow.com/questions/31593201/how-are-iloc-and-loc-different>

## Series.get()

- .get() can be used with integer index, label index
- .get() returns `None` if the index doesn't exist
- it's also possible to return a different value through default parameter

`my_series.get('some_index', default='No index, sorry')`

![](/assets/images/pandas/chimera.webp)

## INDEXING WITH CALLABLES (LAMBDAS AND REGULAR FUNCTIONS GENERATING A BOOLEAN MASKS)

`my_series.loc[lambda x: [True for i in range(x.size)]]`
`my_series.loc[lambda x: [True for i in range(len(my_series))]]`

```python
def every_fifth(x):
    return [True if i%5==0 else False for i in range(x.size)]

my_series.loc(every_fifth) ## will show every fifth element of the series
my_series.iloc(every_fith)
```

## pd.read_csv()

- this function can be used to read .csv files from a hard drive or from internet (pass url)
- data is converted to a DataFrame by default

`pd.read_csv('https://andybek.com/pandas-drinks', usecols=['Country', 'Wine Servings')`

## HOW TO MAKE ONE THE COLUMNS TO BE AN INDEX OF A SERIES

`pd.read_csv('https://andybek.com/pandas-drinks', usecols=['Country', 'Wine Servings'], index_col='Country')`

## HOW DO YOU RETURN A SERIES IN CASE THE DATA HAS ONLY ONE COLUMN

- set `squeeze` parameter to `True`

`pd.read_csv('https://andybek.com/pandas-drinks', usecols=['Country', 'Wine Servings'], index_col='Country', squeeze=True)`

## HOW DO YOU CHECK IF A SERIES CONTAINS ALL UNIQUE VALUES?

`my_series.is_unique`

## HOW DO YOU CHECK THE COUNT OF UNIQUE VALUES?

`my_series.nunique`

- `NA` values are not counted unless 'dropna' attribute is set to `False`

`my_series.nunique(dropna=False)`

## HOW DO YOU CHECK IF VALUES ARE INCREASING/DECREASING IN A SERIES?

`pd.Series([1,2,3]).is_monotonic_increasing` # prints `True`
`pd.Series([3,2,1]).is_monotonic_decreasing` # prints `True`

## DIFFERENCE BETWEEN count() and SIZE

`count()` counts only non-NA/null values
`size` counts all values, inclusing non-NA/nulls

## CHECK IF A SERIES HAS ANY NANs VALUES

`my_series.hasnans`

## HOW DO YOU CREATE A BOOLEAN MASK BASED ON NULL OR NULL VALUES?

`my_series.isnull()`

## HOW DO YOU FILTER FOR `NAN` VALUES ONLY IN A SERIES?

`my_series[my_series.isnull()]` - using Boolean Mask inside the square brackets selection here

## HOW DO YOU COUNT THE NUMBER OF NAN/NULL VALUES IN A SERIES?

`my_series.isnull().sum()`

## SUMMARY OF ELEMENTS COUNTING

`all = my_series.size`
`non_nulls = my_series.count()`
`nulls_only = my_series.isnull().sum()`
`all == non_nulls + nulls_only`

## `isnull()` AND `isna()` ARE THE SAME

- these two area aliases for each other, and they both return a Boolean Mask

## USING NUMPY UNIVERSAL FUNCTIONS FOR SERIES FILTERING

- there is a good cooperabililty between pandas and numpy

`my_series(np.isnan)` - returns a list `NaN` only

## `notnull()` ON SERIES

- `notnull()` is the opposite of `isnull()`
- it returns a bollean mask, where non-null values are marked as `True` and null values as `False`

This boolean mask can be used to filter items:

`my_series.loc[my_series.notnull()]`

## `notna()` ON SERIES

`notna() is simply an alias for notnull()`

## HOW DO YOU GET RID OF `NA`s?

`my_series.dropna()` # this will create a copy
`my_series.dropna(inplace=True)` # this will modify the original series

## MODE `.mode()`

- returns the most frequent value from the series

`my_series.mode()`

## HOW DO YOU FILL `NA`s WITH A CERTAIN VALUE?

`my_series.fillna('fill_value')`

## SHOW COUNTS FOR EACH UNIQUE VALUE IN A SERIES

```python
Series.value_counts()
```

## SHOW VALUE COUNTS IN FREQUENCIES

`my_series.value_counts(normalize=True)`

## USING idxmax() and idxmin() TO FIND THE MAX OR MIN VALUE IN A SERIOUS AND RETURN IT'S INDEX

`my_series.idmax()` == `my_series[my_series == my_series.max()].index[0]`

- important: if there are several rows with the same min or max value, only one value will be returned (according to alpabetical order)

## SORTING VALUES WITH .sort_values()

`my_series.sort_values()`
`my_series.sort_values(ascending=False)`

## HOW TO FIND N LARGEST OR N SMALLEST ITEMS IN A SERIES?

`my_series.nlargest(10)`
`my_series.nsmallest(10)`

## SORTING BY INDEX - `sort_index`

`my_series.sort_index()`

## HOW DO YOU ADD A SHORTER SERIES USING fill_values ARGUMENT?

```python
fifty_plus = pd.Series(data)
more_drinks = pd.Series({'Albania': 1000, 'Argentina': 2000})

fifty_plus.add(more_drinks, fill_value=0)
```

- the same principle apply to `pd.Series.add()`, `pd.Series.subract()`, `pd.Series.multiply()`, `pd.Series.divide()` 

```python
fifty_plus = pd.Series(data)
more_drinks = pd.Series({'Albania': 2, 'Argentina': 3})
fifty_plus.multiply(more_drinks, fill_value=1)
```

## CUMULATIVE OPERATIONS - `cumsum`, `cumprod`

- `cumsum` adds each element to the sum of all previous elements

```python
ser = pd.Series([1,2,3,4,5])
ser.cumsum() # will return a Series, [1,3,6,10,15], it adds previous and current object
```

- `cumprod` multiplies each element to the multiplication of all previous elements

## `cummin` and `cummax`

- `cummin` holds a cumulative minimum, and this minimum is only updated if the function arrives at a even lower number eg. 5 5 5 3 2 2 2 1 1 1 0

- `cummax` does the same, but with local maximum

## diff() IN SERIES

- calculates the difference between each element in the series (when using default), or the difference between elements specified by `periods` argument

```python
ser = pd.Series([1,1,2,3,5,8])
ser.diff()
0    NaN
1    0.0
2    1.0
3    1.0
4    2.0
5    3.0
dtype: float64
```

```python
ser = pd.Series([1,1,2,3,5,8])
ser.diff(periods=3)
0    NaN
1    NaN
2    NaN
3    2.0
4    4.0
5    6.0
dtype: float64
```

## SERIES ITERATIONS - Series.items() and Series.iteritems()[DEPRECATED]

- creates a lazy iterable (generator)
- returns a tuple of an index and value on each iteration
- `.iteritems()` does the same but it's deprecated

```python
for i in drinks.items():
    print(i)

('Afghanistan', nan)
('Albania', 54.0)
('Algeria', 14.0)
('Andorra', 312.0)
('Angola', 45.0)
```

## FILTERING INDEX LABELS WITH Series.filter()

- filter can be used on both index and columns
- `filter()` has three options: `regex`, `like` and `items` 

```python
my_series.filter(like='stan')
my_series.filter(regex='^V')
my_series.filter(items=['Poland', 'Germany'])
```

## CHAINING FILTERS

`nutrition.filter(regex='(?i)octopus', axis=0).filter(like='cholesterol', axis=1)` # first filter is filtering rows, and the second one is filtering columns

```python
nutrition.filter(regex='(?i)octopus', axis=0)\
         .filter(items=['cholesterol_mg', 'serving_size_g', 'calories'], axis=1)
```

## COMBINING `filter()` AND `loc()`

```python
nutrition.filter(regex='(?i)octopus', axis=0)\
         .loc[:, ['cholesterol_mg', 'serving_size_g', 'calories']]
```

## `where()` AND `mask()`

`where()` and `mask()` are very similar. 'where' is used to keep items where the condition is `True`. While 'mask' is used to keep items where the condition is `False`

```python
drinks.where(lambda x: x > 200).dropna() # keep only items where x > 200
drinks.mask(lambda x: x > 200).dropna() # keep only items where x is not > 200
```

## DATA TRANSFORMATION AND UPDATE

- there are three methods which can be used for transformation of a series: `update()`, `apply()` and `map()`

![](/assets/images/pandas/transform.png)

## UPDATING VALUES

`drinks.loc['Canada'] = 15`
`drinks['Albania'] = 300`

## `.update()` METHOD

`drinks.update(pd.Series(data=[200, 20], index=['Albania', 'Algeria']))`

## `.apply()` METHOD 

- applies a transformation to each element of the Series
- takes a callable (a function, method or lambda function) as an argument

`drinks.apply(lambda x: x*2)`

`drinks.apply(np.square)`

```python
def multiply_by_itself(x):
    return x*x

drinks.apply(multiply_by_itself)
```

## PASSING ARGUMENTS TO `apply()`

```python
def multiply_by_self_with_min(x, min_servings):
    if x < min_servings:
        return x*x
    return x

drinks.apply(multiply_by_self_with_min, args=(200,))
```

## `.map()`

- used for substituting each value in a Series with another value, that maybe be derived from a function, a dictionary or a Series

```python
# before
0      cat
1      dog
2      NaN
3   rabbit
dtype: object

my_series.map({'cat': 'kitten', 'dog': 'puppy'}) # passing a dictionary
# after
0   kitten
1    puppy
2      NaN
3      NaN
dtype: object
```

```python
my_series.map('I am a {}'.format)
0       I am a cat
1       I am a dog
2       I am a nan
3    I am a rabbit
dtype: object
```


## INTERSECT OF TWO SERIES

```python
np.intersectd(ser1, ser2)
```

## UNION OF TWO SERIES

```python
np.uniond(ser1, ser2)
```

## CHECK IF VALUES OF ONE SERIES EXIST IN THE SECOND SERIES

```python
ser.isin(ser2)
```

## CHECK PERCENTILE/QUANTILE OF A DATA SET IN A SERIES

```python
ser.quantile(0.25)
```

## REFERENCE VALUES IN A SERIES USING INDEX

```python
ser = pd.Series(list('abcdefghijklmnopqrstuvwxyz'))
pos = [0, 4, 8, 14, 20]
ser.take(pos)
```

## FIND INDEX A PARTICULAR VALUES IN A SERIES

```python
pd.Index(ser1).get_loc(6)
```

## CALCULATE THE DIFFERENCE BETWEEN IN CONSECUTIVE ITEMS IN A SERIES

```python
ser.diff()
```

## PARSING A DATE STRING

```python
from dateutil.parser import parse
ser = ser.map(lambda x: parse(x))

ser.dt.year
ser.dt.month.to_list()
```

# DATAFRAMES

## HOW TO CHECK THE NUMBER OF DIMENSIONS OR SHAPE OD DATA - `ndim` AND `shape`

`ser.ndim`
`df.ndim`

## HOW TO CHECK DATA TYPE OF EACH OF THE DF'S SERIES'

`df.dtypes`

## CREATING A DATAFRAME FROM A DICTIONARY. DICTIONARY OF COLUMN NAMES (KEYS) AND PD.SERIES (VALUES)

- all series have to be of the length

```python
names = ['Olga', 'Andrew', 'Brian', 'Telulah', 'Nicole', 'Tilda']
ages = [29, 21, 45, 23, 39, 46]
married = [False, True, True, True, False, True]

df = pd.DataFrame({'names': names, 'ages': ages, 'married': married})
```

## ALTERNATIVE WAYS TO CREATE A DATAFRAME

## CREATING A DATAFRAME FROM A DICTIONARY OF TUPLES

```python
tuple_names = tuple(names)
tuple_ages = tuple(ages)
tuple_married = tuple(married)

tdf = pd.DataFrame({'names': tuple_names, 'ages': tuple_ages, 'married': tuple_married})
```

## CREATING A DATAFRAME FROM A DICTIONARY OF PD SERIES

```python
series_names = pd.Series(names)
series_ages = pd.Series(ages)
series_married = pd.Series(married)

sdf = pd.DataFrame({'names': series_names, 'ages': series_ages, 'married': series_married})
```

## CREATING A DATAFRME FROM DICTIONARIES

```python
dict_names = dict(enumerate(names))
dict_ages = {k:v for k,v in enumerate(ages)} # this is equivalent to dict(enumerate(my_list))
dict_married = {k:v for k,v in enumerate(married)}

df = pd.DataFrame({'names': dict_names, 'ages': dict_ages, 'married': dict_married})
```

## CREATING A DATAFRAME ROW-WISE - FROM LIST OF DICTS

```python
rowwise = [{'name': name, 'age': age, 'married': married} for name, age, married in zip(list_names, list_ages, list_married)]

df = pd.DataFrame(rowwise)
```

## HOW DO YOU SET AND INDEX FROM ONE OF THE COLUMN WHEN READING FROM CSV?

```python
df = pd.read_csv(url, index_col=['column_name']) # reference the column by name
df2 = pd.read_csv(url, index_col=[0]) #reference the column by integer index
```

## CHOOSE A RANDOM ROW FROM THE DATAFRAME

`df.sample()` # random row
`df.sample(3)` # 3 random rows
`df.sample(random_state=12)` #pseudo-random row
`df.sample(frac=0.1)` # randomly choose 10% of available rows

## SAMPLING WITH REPLACEMENT

`my_sample = nutrition.sample(5, replace=True)`

- sampling with replacement means that we can get the same item chosen several times 

BOOTSTRAP SAMPLE = sample with replacement from the original sample, using the same sample size. Eg. let's say we pick a random number from [1,2,3], first sample: 1, second sample:2, third sample 1 again

## SAMPLING WITH WEIGHTS

```python

weights = pd.Series(data=[10,10,10,1,2], index=[7,17,29,5,6]) # this will create a Series where index labels are just random labels, but data digit is determinining the index label weight

weighted_sample = nutrition.sample(n=3, weights=weights)
```

## HOW DO YOU DISPLAY ALL INDEX LABELS AND ALL COLUMN LABELS>

- axis 0 - rows
- axis 1 - columns

`df.axes`

## INDICES

## `RangeIndex`

`pd.RangeIndex(start=0, stop=8789, step=1)`
`df.index = pd.RangeIndex(start=0, stop=8789, step=1)`

- `RangeIndex` is a special case of `Int64Index`
- both are immutable, sequences of numbers
- `RangeIndex` is an optimized alternative



## HOW DO YOU REMOVE A COLUMN FROM A DATAFRAME

`df.drop('column_nam', axis=1, inplace=True)`

## HOW DO YOU USE ONE OF THE COLUMNS AND MAKE IT AN INDEX?

`df.set_index('column_name', inplace=True)`

- if you want to keep the column modify `drop` parameter

`df.set_index('column_name', drop=False)`

- if you want to create a MultiIndex, use `append=True` parameter

`df.set_index('column_name', append=True)`

## HOW DO YOU TURN OFF AND ON UNIQUENESS OF INDEX?

- by default `verify_integrity` is set to `True`, therefore each index value has to be unique, this can be turned off thought

`df.set_index('column_name', verify_integrity=False)`

## DATAFRAME SELECTION - EXAMPLES

`nutrition.iloc[:3, :5]` # choose the first 3 rows and the first 5 columns
`nutrition.loc[:'Eggplant, raw', :'cholesterol']` # choose all rows before 'Eggplant, raw' label, and all columns before 'cholesterol' column
`nutrition.loc[['Nuts, pecans', 'Eggplant, raw'], ['calories', 'cholesterol', 'serving_size']]` # pass the names of all index labels and column names you would to extract
`nutrition.iloc[[1, 5, 6], [5, 8, 9]]` # extract rows with index number 1, 5 and 6, and columns 5, 8 and 9
`nutrition.loc[0:5, ['sodium', 'choline']]` # combining numeric and label-based indexing
`nutrition[0:5][['sodium', 'choline']]` #combining using square bracket notation
`nutr_minimum.loc[:, ['total_fat', 'cholesterol']]` # all rows and two columns

## WHAT ARE `.at()` and `iat()` FOR?

- they do the same job as `loc()` and `iloc()` but ONLY FOR SINGLE values
- because they are only do this job, they are much faster than `loc()` and `iloc()`

`df.at('index_label', 'column_name')`
`df.iat(1,1)`

## `get_loc()` SUPPORT METHOD

- `get_loc()` method is used to return the index of a column, this index number can later be used in `iloc()` or `iat()`

```python
column_loc = df.columns.get_loc('vitamin_k')
df.iloc(rows_loc, column_loc)
```
## HOW DO YOU REPLACE CHARACTERS?

`df.replace('target', 'new_value')`

## REPLACING WITH REGEX

`df.replace('\sg', '', regex=True)`

## TYPE CASTING

`df.astype(int)`

## HOW DO YOU RETURN THE MOST FREQUENT VALUE IN EACH COLUMN OF THE DATAFRAME?

`df.mode()`

## HOW DO YOU RENAME INDEX LABELS AND COLUMN NAMES?

`df.rename(index={'old_index_name': 'new_index_name}, inplace=True)`
`df.rename(columns={'old_col_name', 'new_col_name'}, inplace=True)`
`df.rename(mapper={'old_col_name', 'new_col_name'}, axis=1, inplace=True)` # does the same as index and columns, but axis has to be specified instead

## `.dropna()` IN A DATAFRAME

`df.dropna()` # by default, it will drop all rows where there is at least one `NA`
`df.dropna(how='any', axis=0)` # this is a default option, `any` is default
`df.dropna(how='all', axis=0)` # drop these rows where all fields are `NA`
`df.dropna(how='all', axis=1)` # drop all columns where all fields are `NA`

- `how=` parameter is an exclusion criteria, while `thresh=` is an inclusion criteria

## `.dropna(tresh=)` WITH TRESH PARAMETER

- only keep rows with at least `n` `non-NA` values

`df.dropna(thresh=1, axis=0)` # only keep these rows which have at least one `non-NA` value
`df.dropna(thresh=2, axis=1)` # onnly keep these columns which have at least two `non-NA` values

<https://www.statology.org/pandas-dropna-thresh/>

## `.dropna(subset=)` WITH SUBSET PARAMETER

- the `dropna()` is applied to columns/rows specified in `subset=` parameter

`dropna(how='any', axis=1, subset=['third_column'])` # specify which columns should be checked
`dropna(how='any', axis=0, subset=[2])` # specifiy which rows should be checked

## SORTING DATAFRAME - `sort_values()`

## SORT ONE COLUMN

`nutrition.sort_values(by=['cholesterol_mg], ascending=False)`

## SORT SEVERAL COLUMNS

`nutrition.sort_values(by=['cholesterol_mg', 'sodium_mg'], ascending=[False, True])`

## `.between()`

- works on `Series`
- returns a Boolean Mask, which then be used to filter a DataFrame

## COMPARATORS

`lt() gt() le() ge() eq()` - less than, greater than, less or equal, greater or equal, equal

- these comparators work exactly the same as `<`, `>`, etc
- they will generate a boolean mask

`players[players.market_value.le(50)]`

## BINARY OPERATORS WITH BOOLEANS

```python
# OR
True | False # True
False | False # False
False | True # True
True | True # True

# AND
True & False # False
False & False # False
False & True # False
True & True # True

# XOR (exclusive or)
True ^ False # True
False ^ False # False
True ^ True # False
False ^ True # True

# COMPLEMENT OPERATOR ~ TILDE OPERATORS ON BITS (IT NEGATES BITS)
# a = 0011, ~a = 1100
~False # -1
~True # -2
```

```python
s1 = pd.Series(data=[False, True, True], index=['c', 'b', 'a'])
s2 = pd.Series(data=[True, False, False], index=['a', 'b', 'c'])

s1 & s2

a     True
b    False
c    False
dtype: bool
```

## HOW DO YOU INVERT BOOLEAN MASK?

```python
ser = pd.Series([True, False, True])
ser
0     True
1    False
2     True
dtype: bool

~ser
0    False
1     True
2    False
dtype: bool
```

## LOGICAL CONDITIONS SHOULD BE SEPARATED USING BRACKETS, EACH CONDITION IN A SEPARATE BRACKETS

```python
players[(players.position == 'LB') &
        (players.age <= 25) &
        (players.market_value >= 10) &
        ~(players.club.isin(['Tottenham', 'Arsenal']))]
```

## SELECT COLUMNS WHICH START WITH LETTER 'P'

```python
p_cols = players.columns.str.startswith('p')
df.loc[rows_boolean_mask, p_cols]
```

## FANCY INDEXING WITH `.lookup()` - DEPRECATED

`.lookup()` takes a single value from the first array, and a single value from a second array and use this values pair to search for a specific position in the DataFrame. First value is the row label and second value is a column name.

The following example will return 3 values. First value will be (row_label='Petr Cech', column_name='age'), second value will be (row_label='Mesut Ozil', column_name='market_value')

```python
names = ['Petr Cech', 'Mesut Ozil', 'Alexis Sanchez']
attributes = ['age', 'market_value', 'page_views']
players.set_index('name').lookup(names, attributes)
```

## SORTING INDEX - `.sort_index()`

`df.sort_index()`

## SORTING COLUMNS

`df.sort_index(axis=1)`

## HOW TO MAKE AN INDEX A REGULAR COLUMN?

`df.reset_index()` # current index will become a new column, and a new, numerical index will be created

## HOW DO YOU REORDER THE ORDER OF INDEX LABELS AND COLUMNS? - `.reorder()`

`df.reorder(index=[2,1,3,0], columns=['age', 'name', 'position',])`


## HOW TO IMPROVE INSERT PERFORMANCE BY FACTOR OF 10?

- save the file as CSV and upload it using native Postgres `copy_from` function

## HOW DO YOU RETURN A MAX AND MIN FOR EACH COLUMN IN A DATAFRAME?

`df.min()`
`df.max()`

## HOW DO YOU RETURN A MAX OR MIN VALUE FOR A SINGLE COLUMN?

`df.my_column.max()`

## HOW DO YOU RETURN AN INDEX OF THE MIN OR MAX VALUES FROM A SINGLE COLUMN?

`df.my_column.idxmax()`

## HOW TO FIND TOP N OR BOTTOM N IDEAS IN A DATAFRAME (BY AS SPECIFIC COLUMN)?

- this function filter and sorts at once
- improved performance comparing to filter() + sort_values()

`df.nlargest(10, ['my_column'])`
`df.nsmallest(10, ['my_column1', 'my_column2'])`

## IDENTIFY DUPLICATES

## IDENTIFY DUPLICATES FROM DATAFRAME BASED ON THE SUBSET OF COLUMNS

`df.duplicated(subset=['club', 'market_value', 'age'])`
`players[players.duplicated(subset=['club', 'age', 'position', 'market_value'],keep='last')]` # keep parameter defines which duplicates should be kept, 'first', 'last' or False (keep all)

## REMOVING DUPLICATES

`df.drop_duplicates(keep='first')` # keep= parameter defines which duplicate should be kept

## HOW DO YOU REMOVE SINGLE OR MULTIPLE ROWS OR COLUMNS?

`df.drop(labels=[1,2,3], axis=0)` # removing rows with index labels 1, 2, 3
`df.drop(labels=['market_value', 'age'], axis=1)` # removing columns with names 'age', 'market_value'
`df.drop(index=[13,14,15])` # removing rows with index values 13,14,15
`players.drop(columns=['club', 'age', 'position'])` # removing columns 'club', 'age', 'position'

## REMOVING COLUMNS USING `.pop()`

- `pop()` returns a Series with the popped column, also it modifies the original df inplace, and it only works with a single argument (single column)

`df.pop('club')`

## HOW DO YOU RETURN ITEMS WITH `NA` VALUES IN A SERIES?

`ser[ser.isna()]`

## HOW DO YOU COUNT `NA` VALUES IN A DATAFRAME?

`np.count_nonzero(df.isna())`

## HOW DO YOU RETURN ROWS WITH `NA` VALUES IN A DATAFRAME?

`df[df.isna().values]`

- each row will appear as many times as there are `NA` in it, eg. if in one row there there are three `NA` (three different columns with `NA` values), this row will appear three times in this operation

In order to receive unique values, we need to get rid of duplicates

`df[df.isna().values].drop_duplicates()`

## FILLING `NA` VALUES

`df.fillna('replacement value')` - replace all `NA` values with the same replacement value
```python
df.fillna({
    'column1': 100,
    'column2': 'some string'
    'column3': players.market_value.mean()
})
```

## FORWARD FILL AND BACKWARDS FILL `NA` VALUES

`df.fillna(method='ffill')` - forward fill from a previous row
`df.fillna(method='ffill', axis=1)` - forward fill from a previous column

Alias for 'ffill' is 'pad'

`df.fillna(method='pad')`

- it can be useful in financial analysis
- `NA` values are filled using the previous value

`df.fillna(method='bfill')`
`df.fillna(method='bfill', axis=1)`

Alias for 'bfill' is 'backfill'

`df.fillna(method='backfill')`

## REMOVING ROWS OR COLUMNS WITH `NA` VALUES

- it's possible to get rid of both rows and columns with `NA` values

`df.dropna()` - remove rows with `NA` values
`df.dropna(axis=1)` - remove columns with `NA` values

## AGGREGATE FUNCTIONS - `.agg()` OR `.aggregate()`

```python
df.agg('mean')
df.agg(min)
df.select_dtypes(int).agg(['min', 'max', 'mean']) # calculate minimum, maximum and mean for each column of the integer type
```

## SELECT COLUMNS OF A SPECIFIC TYPES ONLY

```python
df.select_dtypes(int) # integers only
df.select_dtypes(object) # strings
df.select_dtypes([int, float]) # numbers: integers and floats
df.select_dtypes(np.number) # numbers
```

## APPLYING STRING TRANSFORMATIONS TO A SERIES

- these operations apply to string series only

```python
ser = df['club']
ser.str.upper() # make each item an upper case
ser.str.len() # get length of each item in the series
```

## SAME-SHAPE TRANSFORMATIONS WITH TRANSFORM `.transform()`

```python
df['market_value'].transform(lambda x: x * 0.91)
df['market_value'] * 0.91
```

```python
def random_case(x):
    funcs = [x.str.swapcase, x.str.lower, x.str.title, x.str.upper]

    return random.choice(funcs)

players.select_dtypes(include=object).tranform(random_case)
```

## `.apply()` FORMS LIKE `.transform()` AND `.agg()`

- `apply()` can perform either way, depending on what is requireds
- `apply()` can be used across rows and columns
- operates on the ENTIRE column or row at once

## SELECT COLUMNS USING BOOLEAN MASK

```python
df.loc[450, [dtype != object for dtype in df.dtypes]]
```

## `.applymap()` WORKS THE SAME AS `.apply()` BUT IT WORKS ELEMENT-WISE

## VIEW VS COPY AND `SettingWithCopy` WARNING

2-POINT RULE:
- `pandas` loves to gives us copies, but
- if we use `loc/iloc` or `at/iat`, we are guarenteed to get a view

## EXAMPLES OF BAD USAGES OF `.loc/.iloc` WHICH WILL TRIGGER `SettingsWithCopy` WARNING

`df.drop_duplicates().iloc[4]` # drop duplicates may return a copy
`df['value'].loc[3]` # df['value'] may return a copy

## HOW DO YOU ADD A COLUMN TO A DATA FRAME USING `.insert()` METHOD

```python
players_nicknames = Series(['Johnny', 'Timmy', 'Flo'])
df.insert(0, 'nickname', players_nickanmes)
```

`df.insert(order_in_columns, 'column_name', 'data')`

## HOW DO YOU ADD A NEW COLUMN AND RETURN A COPY OF A DATAFRAME INSTEAD OF MODYFYING THE ORIGINAL ONE?

`new_df = df.assign(new_column=[1,2,3], one_more_column=['a, 'b', 'c'])` # original df will not change

# 10X IMPROVEMENT IN PERFORMANCE

```python
def insert_values_multi(table_name, table_data):
    
    conn_string = "postgresql+psycopg2://" + config('DB_USER') + ':' + config('DB_PASSWORD') + '@' + config('DB_HOST') + ':' + config('DB_PORT') + '/' + config('DB_NAME')

    engine = create_engine(conn_string)

    table_data.to_sql(table_name, engine, if_exists='replace', index=False)

    conn = engine.raw_connection()
    cur = conn.cursor()
    output = io.StringIO()
    table_data.to_csv(output, sep='\t', header=False, index=False)
    output.seek(0)
    cur.copy_from(output, table_name, null='')
    conn.commit()
    cur.close()
    conn.close()
```

## HOW DO YOU ROUND NUMBERS IN A DATA FRAME?

counties.round({'URBAN_RATIO': 2, 'UNEMP_95': 2, 'UNEMP_96': 2})

## MASTERING PANDAS FOR FINANCE

<https://github.com/PacktPublishing/Mastering-Pandas-for-Finance>

## 100 PANDAS PUZZLES

<https://ajcr.net/100-pandas-puzzles/>

## 100 NUMPY EXERCISES

<https://github.com/rougier/numpy-100>