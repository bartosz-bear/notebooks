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

- `RangeIndex` is a series of increasing or decreasing integers (0,1,2,3)
-  it's immutable

`RangeIndex(start=0, stop=2, step=1)`
`<class 'pandas.core.indexes.range.RangeIndex'>`

## CREATING RANGEINDEX

`i = pd.RangeIndex(start=2, stop=10, step=2)`
`list(i) # returns [2,4,6,8]`

## MULTIINDEX

`pandas.core.indexes.multi.MultiIndex`

multiindex_internals

![](/assets/images/pandas/multiindex_internals.png)

## CREATING A MULTIINDEX

```python
df.set_index(['date', 'name'], inplace=True)
```

## CREATING MULTIINDEX WHEN READING FROM A CSV FILE

```python
pd.read_csv(url, index_col=['date', 'name'])
```

## ADDING INDEX TO AN EXISTING MULTIINDEX

```python
df.set_index('column3', append=True)
```

## INFO ABOUT MULTIINDEX

```python
df.index.nlevels # number of index levels
df.index.level2[0] # show unique values of the index level 0
df.index.leves[2]
df.index.values # show tuples of values, one value per index
```

## FETCHING FROM A DATAFRAME WHICH IS USING A MULTIINDEX

```python
df.loc['2013-02-02', 'GOOGL'].close
df.loc[('2013-02-02', 'GOOGL'), 'close'] # using a tuple for the index dimension, and a column name as the second dimension
df.iloc[2,4] # 2 correspondsto 
df.loc[('2014-01-03', 'AAPL'), 'open':'close']
df.loc[(slice('2019-01-01', '2019-01-31'), slice(None), 'high'), :] # tuple with 3 values, triple MultiIndex
```

## INDEXING RANGES AND SLICES IN MULTI-INDEX

```python
df.loc[(['2015-01-06', '2015-01-07'], ['FB', 'AMZN']), ] #use tuple for the index dimension, and comma to separates index and columns dimension
df.loc[(['2015-01-06', '2015-01-07'], ['FB', 'AMZN']), ['close', 'volume']]
```

## SLICING MULTI-INDEX USING SLICE OBJECT

```python
df.loc[(slice('2015-01-06', '2015-01-07'), 'GOOGL'), 'open':'low']
```

## `slice(None)`

```python
tech.loc[(slice(None),['FB', 'AMZN']), :]
```

## `pd.IndexSlice` OBJECT

```python
df.loc[pd.IndexSlice[:, ['FB', 'GOOGL']], 'high':'low']
idx = pd.IndexSlice
df.loc[idx[:, ['FB', 'GOOGL']], 'high':'low']
```

## CROSS SECTIONS WITH `xs()`

`.xs()` is usuful when using with MultiIndex, it allows us to specify which level of the MultiIndex we want to filter or slice

```python
df.xs('FB', level=1, drop_level=False)
df.xs(('2019-01-02', 'FB'), level=(0,1))
df.xs(('2019-01-02', 'FB', 'high'), level=(0,1,2)) # triple MultiIndex
```

## CHANGING ORDER OF INDICES IN A MULTIINDEX WITH `.swaplevel()` METHOD

```python
df.swaplevel(2,1) # swap second and third indices
df.swaplevel('volume_type', 'name')
```

## SORTING INDICES IN MULTIINDEX

- MultiIndex method, not a DataFrame method

```python
df.index.sortlevel([0,1,2], ascending=[True, False, True])
```

## CHANGE NAMES OF INDICES IN MULTIINDEX

```python
df.index.set_names(['Trading Date', 'Volume Category', 'Ticker'], inplace=True)
```

## CONVERTING MULTIINDEX TO AN INDEX OF TUPLES CONTAINING THE LEVEL VALUES

```python
df.index.to_flat_index()
```

## STACKING COLUMNS INTO MULTIINDEX VALUES

- a row becomes a column (similar to pivot)

```python
df.stack()
df.stack().unstack()
```

BEFORE STACK

![](/assets/images/pandas/before_stack.png)

AFTER STACK

![](/assets/images/pandas/after_stack.png)

## CHECKING IF A MULTIINDEX IS SORTED

```python
df.index.is_monotonic_increasing
df.index.is_lexsorted() # deprecated
```

## CHANGING ORDER OF INDICES IN A MULTIINDEX WITH `.reorder_levels()`

```python
df.reorder_levels(['date', 'volume_type', 'name'])
df.reorder_levels([0,1,2])
```

## REMOVING INDEX DIMENSION FROM MULTIINDEX

- removes from index but doesn't restore it into the dataframe

```python
df.droplevel(1)
df.dropleve('date')
df.droplevel(['date', 'volume_type'])
df.droplevel([0,1])
```

## REMOVE INDEX AND RESTORE IT INTO THE VALUES DATAFRAME

```python
df.reset_index(level=1)
df.reset_index(level=1, drop=True) # remove from the index and discard completely, works like .droplevel()
df.reset_index(level=['value_type', 'name'])
df.reset_index(level=[0,1])
```

## USING `.reset_index()` TO GET BACK FROM MULTINDEX TO A SIMPLE RANGE INDEX

- pass no parameter to the method

```python
df.reset_index()
```

## SORTING MULTINDEX

```python
df.sort_index(inplace=True) # sorts all levels of MultiIndex
df.sort_index(level=(0,2), ascending=[False, True])
```

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

`df.squeeze()` - converts a one dimensional DataFrame into a Series

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
df.insert(df.columns.get_loc('Official Time')+1, 'Name of the Inserted Col', other_df['Inserted Col'])
```

`df.insert(order_in_columns, 'column_name', 'data')`

## HOW DO YOU ADD A NEW COLUMN AND RETURN A COPY OF A DATAFRAME INSTEAD OF MODYFYING THE ORIGINAL ONE?

`new_df = df.assign(new_column=[1,2,3], one_more_column=['a, 'b', 'c'])` # original df will not change

## ADDING ROWS

- adding rows in `pandas` is a very inefficient process and should be avoided when possible
- data in `pandas` is organized in columns (np.Arrays, etc)

The old (deprecated) way of adding rows to a DataFrame is to use `.append()`. In the current version, `.concat()` is preferred.

```python
df_random = df_random.append(pd.Series({'region': 2,
                  'nationality': 'Poland',
                  'new_foreign': 0,
                  'age_cat': 2}, name=14))
```

## HOW DO YOU ADD DATAFRAMES WITH THE SAME NUMBER AND TYPE OF COLUMNS?

```python
dfs = [state_df, eng_df, liberal_df, ivies_df, party_df]
pd.concat(dfs)
```

## RESETTING INDEX AFTER CONCATENATION OF DATAFRAMES

```python
pd.concat(dfs).reset_index(drop=True) # create a new fresh, 0-based index and get rid of the old index
```

## RESET INDEX AUTOMATICALLY ON CONCATENATION OF DATAFRAMES

```python
pd.concat(dfs, ignore_index=True)
```

## ENFORCING INDEX UNIQUNESS DURING CONCATENATION

```python
try:
    pd.concat([df1, df2], verify_integrity=True)
except ValueError as e:
    return e
```

## CREATING A MULTIINDEX DURING CONCATENATION

```python
mdf = pd.concat([df1, df2], keys=['key1', 'key2'])
mdf.loc[('key2', 3)]
```

## JOIN PARAMETER OF `.concat()`

```python
df_outer = pd.concat([df1, df2], join='outer') # if one of the DataFrames has less columns, `NA`s will be used
df_inner = pd.concat([df2, df2], join='inner') # only those columns which exist in both dfs will be concatenated
```

## `.merge()`

```python
merged = pd.merge(left=df1, right=df2, left_on='column_from_df1', right_on='column_from_df2')
merged = pd.merge(df1, df2) # it will merge if there is a common column in both dataframes
```

## INNER MERGE

- intersection
- only include items which exist in both dataframes

```python
merged = pd.merge(df1, df2, how='inner')
```

![](/assets/images/pandas/inner_join.png)

## OUTER MERGE

- include data from both dataframes even if some items are missing
- fill with `NAs`

```python
merged = pd.merge(df1, df2, how='outer')
```

![](/assets/images/pandas/outer_join.png)

## INNER LEFT JOIN

```python
pd.merge(df_left, df_right, how='left') # that's a default behavior, equivalent to inner-left
```

![](/assets/images/pandas/left_join.png)

## INNER RIGHT JOIN

```python
pd.merge(df_left, df_right, how='right') # inner-right
```

![](/assets/images/pandas/right_join.png)

## MERGING BY INDEX

```python
pd.merge(df1, df2, left_index=True, right_index=True)
```

## MERGING BY INDEX-COLUMN COMBINATION

```python
pd.merge(df1, df2, left_index=True, right_on='School Name')
pd.merge(df1, df2, left_on='School Name', right_index=True)
```

## MERGING WITH DATAFRAME JOIN() METHOD

`merged_df = df1.join(df2)` # equivalent to `pd.merge(df1, df2)`
`merged_df = df1.join(df2, on='School Name')`

## GROUPBY

## POSSIBLE OPERATIONS ON GROUPBY

- `.agg()` - changes shape of the DataFrame, usually collapses dimenstions (eg. takes a vector as input and returns a scalar)
- `.filter()` - filters each subframe
- `.transform()` - applies a function on each row within each subgroup WITHOUT changing the shape of the subframe, eg. take a raw value input (scalar) and calculate z-score for this raw value (returns scalar value too)
- `.apply()` - the most flexible method which allows you to make anything which is possible with agg, filter or transform methods

## CUSTOMIZE INDEX TO GROUP MAPPINGS

```python
games.Platform.unique() # array(['X360', 'PS3', 'PS4', 'XOne'], dtype=object)

platform_names = {
    'PS3': 'PlayStation',
    'PS4': 'PlayStation',
    'X360': 'XBox',
    'XOne': 'XBox'
}

sales = games.loc[:, ['Platform', 'NA_Sales', 'EU_Sales', 'JP_Sales', 'Other_Sales']]

sales.set_index('Platform').groupby(platform_names).sum()
```

## HOW DO YOU ACCESS A SINGLE DATAFRAME FROM A DATAFRAME GROUPBY OBJECT?

- convert it from a lazy to eager structure
- this conversion will create a dictionary where the key are all unique values of column1 and values of the dictionaries are the individual dataframes created by the groupby operation

```python
eager_groupby = dict(iter(df.groupby('column1')))
eager_groupby['key1]
```

## BETTER APPROACH TO GET A SINGLE DATAFRAME

```python
df.groupby('Product').get_group('PS3)
```

## MULTIINDEX GROUPINGS

```python
top_sales = studios.groupby(['Genre', 'Publisher']).sum().sort_values(by='Global_Sales', ascending=False)
```

## AGGREGATE FUNCTIONS

`studios.groupby('Genre').agg('sum')`

##  CALCULATING MULTIPLE AGGREGATE FUNCTIONS

`studios.groupby(['Genre', 'Publisher']).agg(['sum', 'count', 'mean'])`

## SORTING MULTIINDEX AGGREGATED OBJECTS

`studios.groupby(['Genre', 'Publisher']).agg(['sum', 'count', 'mean']).sort_values(by=('Global_Sales', 'sum'), ascending=False)` ## columns axis has a multiindex, this is why a tuple is needed to sort values

## RENAMING AGGREGATED FRAME

```python
df.groupby(['Genre', 'Publisher']).agg(['sum', 'count', 'mean'])]\
                                  .rename({'sum': 'Total Sales', 'count': 'Number of Games'}, axis=1)
```

- alternative way to rename

```python
df.groupby(['Genre', 'Publisher']).agg(total_sales=('Global Sales', 'sum'), num_games=('Global Sales', 'count'))
```

## APPLYING DIFFERENT AGGREGATE FUNCTIONS TO DIFFERENT COLUMNS OF DATA

```python
df.groupby(['Genre', 'Publisher']).agg(
    total_global_revenue=('Global Sales', 'sum'), # sum of 'Global Sales' column
    average_EU_revenue=('EU_Sales', 'mean') # mean of 'EU_Sales' column
)
```

- alternative syntax

```python
df.groupby(['Genre', 'Publisher']).agg(
    'Global_Sales': 'sum',
    'EU_Sales': 'mean'
)
```

## FILTERING SUBGROUPS WITHIN GROUPEDBY DATAFRAME

- `filter()` is filtering the original DataFrame (before groupby()), not the result of the groupby()
- `filter()` is using a special type of boolean mask

```python
games.groupby(['Publisher', 'Genre']).filter(lambda sg: sg['NA_Sales'].sum() > 50) # sg stands for sub-group
# only show those subgroups where total 'NA_Sales' per each group, divided by a 'Publisher' and 'Genre' is
# above 50 MUSD
```

- another syntax

```python
def more_than_50(df):
    return df['NA_Sales'].sum() > 50

games.groupby(['Publisher', 'Genre']).filter(more_than_50)
```

## TRANSFORM ON GROUPBY SUBFRAMES

- calculate z-score on each subframe grouped by 'Genre'
- transforms doesn't change the shape of the dataframe (which is different, comparing to .agg() function)

```python
df.set_index(['Name', 'Platform']).groupby('Genre').transform(lambda x:(x - x.mean())/x.std())\
    .sort_values(by='Global_Sales', ascending=False)
```

## APPLY ON GROUPBY SUBFRAME

- the most flexible method which can be applied on groupby subframes
- it can return the same or a different shape, it can also be used to filter values

```python
ps3.groupby('Genre').apply(lambda sg: 'solid' if sg.EU_Sales.sum() > 50 else 'weak')
```

```python
def sales_detail(sf):
    level = 'solid' if sf.EU_Sales.sum() > 50 else 'weak'
    variability = 'volatile' if sf.EU_Sales.std()/sf.EU_Sales.mean() > 2 else 'steady'
    return (level, variability)

ps3.groupby('Genre').apply(sales_detail)
```

## PIVOTS

- pivot is a way to reorganize a dataframe visually and structurally
- it's a combination of steps which can be achieved using more standard pandas operations, however pivoting a more convenient, and more concise way of reorganizing data

```python
df.pivot(index='my_index', columns='my_column', values'scores')
```

## UNPIVOTING USING MELT METHOD

```python
pivoted.reset_index().melt(id_vars='School Name', value_name='Score')
```

## PIVOTING AND AGGREGATING IN ONE STEP - `pivot_table()`

- the default `aggfunc` is `mean`

```python
pivoted = sat.pivot_table(index='Borough', columns='SAT Section', values='Score', aggfunc='std')
```

## MARGINS PARAMETER OF PIVOT_TABLE

- calculates `aggfunc` for each row and for each column separately

```python
df.pivot(index='Borough', columns='SAT Section', values='Score', margins=True, margins_name='Grand Total')
```

## MULTIINDEX PIVOT TABLE

- multiindex pivot table is created by passing a list of columns or a list of indices

```python
pivoted = sat.pivot_table(index=['Borough', 'School Name'], columns='SAT Section', values='Score', aggfunc='std')
```

## APPLYING SEVERAL FUNCTIONS AT ONCE ON PIVOT_TABLE

```python
sat.pivot_table('Score', 'Borough', 'SAT Section', aggfunc=['min', 'max'])
```

## DATE AND TIME

## ISOFORMAT() OF PYTHON DATETIME

```python
my_time = time(12, 12, 5, 122434)
my_time_iso = my_time.isoformat()
```

## STRING PARSE TIME `strptime()` METHOD

- method to parse time from a string, and create a time object in Python

```python
datetime.strptime('2012-02-12', '%Y-%m-%d')

try_this = 'Jan 20 2020 4pm'
datetime.strptime(try_this, '%b %d %Y %I%p')

```

## PARSING DATETIMES STRINGS WITH `dateutil`

- it has a very forgiving behavior, it ignores stop words like 'at', 'and', as well as special characters like ';'

```python
from dateutil import parser
parser.parse('jan 21st 1990') # datetime.datetime(1990, 1, 21, 0, 0)
parser.parse('22 april 2068 at 4pm and 17minutes 20 seconds') # datetime.datetime(2068, 4, 22, 16, 17, 20)
```

## STRING FORMAT TIME `strftime()` METHOD

```python
datetime.strftime(datetime(2020, 2, 2), f'%Y:%-m:%-d') # '2020:Feb:2'

datetime.strftime(datetime(2020, 2, 2, 14, 15, 25, 324985), '%c') # 'Sun Feb  2 14:15:25 2020'

now = datetime.now()
now.strftime('%x %X')
```

## STRING FORMATTING AND DATETIME

```python
now = datetime.now()
'Current date and time is {:%c}'.format(now)
```

## USING NUMPY TO PERFORM LARGE SCALE VECTORIZED OPERATIONS ON ARRAYS OF DATATIMES

```python
a = np.datetime64('2002-03-04') # numpy.datetime64('2002-03-04')
b = np.datetime64(datetime.now()) # numpy.datetime64('2023-10-09T22:02:59.851845')
```

## RESCALING DATETIME

- changing the lowest common denominator, the lowest recorded time unit

```python
my_datetime = datetime.now()
np.datetime(my_datetime, 'D') # rescaling from microseconds to days 
np.datetime(my_datetime, 'D') + 10 # adding 10 days to the rescaled datetime
```

## PERFORMING VECTORIZED OPERATIONS ON ARRAY OF DATETIMES

```python
my_array = np.array([
    '2012-10-20',
    '2005-03-02',
    '1924-03-03'
], dtype=np.datetime64)
# array(['2012-10-20', '2005-03-02', '1924-03-03'], dtype='datetime64[D]')
my_array - 10
# array(['2012-10-10', '2005-02-20', '1924-02-22'], dtype='datetime64[D]')
```

## OFFSETING BUSINESS DAYS

```python
np.busday_offset(my_array, offsets=10, roll='backward')
```

## DATETIME STRING FORMAT CODES

<https://docs.python.org/3/library/datetime.html#strftime-and-strptime-format-codes>

<https://strftime.org/>

## PANDAS TIMESTAMP

- timestamp is the fundamental building block of pandas time and date related operations

```python
dt = pd.Timestamp('7/4/1877') # Timestamp('1877-07-04 00:00:00')
dt2 = pd.to_datetime('7/4/1877', dayfirst=True) # Timestamp('1877-04-07 00:00:00')
```

## CONVERT PANDAS STRING COLUMN INTO NP DATETIME

```python
df.Date = df.Date.astype(np.datetime64)
```

## MICRO AND NANOSECONDS

- microsecond is 1/millionth of a second
- nanosecond is 1/billionth of a secon

## DATETIME INDEX

```python
df.Date = df.Date.astype(np.datetime64)
df.set_index('Date', inplace=True)

dt_index = pd.to_datetime(['2012-01-01', '2008-07-07']) # DatetimeIndex object
```

## IMPORTING DATETIME DATA FROM CSV INTO DATETIMEINDEX

```python
oil = pd.read_csv("/BrentOilPrices.csv", index_col=0, parse_dates=True)
oil.index # DatetimeIndex object
```

## SELECTING DATA FROM DATETIME INDEX USING STRINGS

```python
oil.loc['2000-01-04']
oil.loc['2000-01-04':'2000-01-14']
```

## PARTIAL STRING INDEXING

```python
oil.loc['2000-01'] # selects all date for January 2000
oil.loc['2000-01':'2000-02'] # selects all dates for Jan and Feb 2000
oil.loc['2000-07':'2000-08-07']
```

## CREATING CATEGORICAL COLUMNS FROM DATETIME INDEX ATTRIBUTES

```python
df['Dayname'] = df.index.dayname()
df.groupby('Dayname').std()
```

`df.index.day_of_week`
`df.index.month`
`df.index.week`

## CALCULATE MEAN VALUE IN LEAP YEAR FEBRUARYS

```python
brent[(brent.index.is_leap_year == True) & (brent.index.month == 2)].mean() 
```

## CREATING DATETIME INDEX MANUALLY

```python
idx = pd.date_range(start='2012-01-01', end='2013-03-03')
idx = pd.date_range('Jan 1 2013', '13th of May 2014')
pd.date_range(start='2012-01-01', periods=10) # day is a default period
pd.date_range(start='2012-01-01', periods=10, freq='w') # creates 10 new dates with a week gap between each
pd.date_range(start='2012-01-01', periods=10, freq='2w')
pd.date_range(end='2012-01', periods=5, freq='m') #creates 5 new dates, each one monthe earlier
```

## DATE OFFSET

- `DateOffset` is calendar aware

```python
dt = pd.Timestamp('2020-03-09')
offset = pd.DateOffset(days=18)
offset2 = pd.DateOffset(days=25, minutes=10, nanoseconds=2)

new_dt = dt - offset
new_dt # Timestamp('2020-02-20 00:00:00')
```

## SETTING OFFSET DATE AS INDEX

```python
brent.set_index(brent.Date.astype(np.datetime64) + pd.DateOffset(hours=18)).drop(columns='Date')
```

## TIMEDELTA

- `Timedelta` is not aware of the calendar, it operates on absolute/abstract time

```python
td = pd.Timedelta(days=3, hours=4)
```

## DOWNSAMPLING DATETIME INDEX

- downsampling decreases frequency of observations (eg. from daily to monthly)
- aggregation function needs to be applied to let pandas know what method of downsampling should be used

```python
brent.resample('M').median()
```

## USING RESAMPLING METHOD TO FIND OUT MIN OR MAX VALUE IN EACH MONTH

```python
brent.resample('M').min()
```

## UPSAMPLE AND INTERPOLATION

```python
df.resample('8H').interpolate(method='linear')
```

## CHANGING FREQUENCY USING `asfreq()`

```python
brent.asfreq('10D', method='ffill') # fill NaNs with the most recent available value
brent.asfreq('10D', fill_value=brent.values.mean())
```

## WHAT IS THE DIFFERENCE BETWEEN `resample()` AND `asfreq()`

- `resample()` is like groupby with datetime capabilities, aggregation function has to be applied
- `asfreq()` is a simple selection method, no agggregate function is required

## ROLLING WINDOWS

```python
brent.rolling(3).mean() # take 3 observations and calculate the mean for these 3 observations, repeat until there is no more data available in the series
```

## VECTORIZED STRING OPERATIONS

- fast
- automatically exclude NaN, NaN are not a problem, they stay NaN

```python
Brent.Name.str.len()
Brent.Name.str.startswith('a')
```

## CASE OPERATIONS ON STRINGS

```python
boston.Name.str.lower()
boston.Name.str.upper()
boston.Name.str.title()
boston.Name.str.swapcase()
boston.Name.str.capitalize()
```

## `find()` and `rfind()`


```python
my_string  = 'My first string'
my_string.find('f') # prints 4, index of the first 'f' letter
my_string.find('dupa') # print -1, which means 'not found'
my_string.find('string') # prints 9, the index when the string 'string' starts

df.Name.str.find('Andy') # returns a series with numbers
```

- `rfind()` is the same as `find()` but the function is search from right to left, instead of left to right (like in `find()`)

```python
p = 'pandas numpy numpy pandas'
p.find('pandas') # prints 0
p.rfind('pandas') # prints 19
```

## `isspace()`

```python
''.isspace() # False
' '.isspace() # True
'/t'.isspace() # True
'/n'.isspace() # True
'ho ho'.ispace() # False
```

## `lstrip()`,  `rstrip()` AND GENERIC `strip()`

```python
left_string = '    this is a pandas course'
left.string.lstrip() # removes leading whitespace
a_left_spaced = 'aaaaaathis is also a course'
a_left.spaced.lstrip('a') # removes leading 'a' and prints 'is also a course'
right_string = 'this is a pandas course     '
right_string.rstrip()
right_string_b = 'this is a pandas coursebbbbbbb'
right_string_b.rstrip('b') # # removes trailing 'b' and prints 'this is a pandas course'
that_string = '   hello\n\n\n'
that_string.strip() # prints 'hello'
```

EXAMPLE FOR PANDAS

```python
boston.Name.iloc[0:2].str.strip()
```

## SPLITTIG `split()`

- no argument will split in a different way that `split(' ')`
- when no argument is given, it splits on all whitespace characters, including `\n` and `\t`

```python
s = '  the name is: BOND \t JAMES BOND \n\n' # 
s.split() # ['the', 'name', 'is:', 'BOND', 'JAMES', 'BOND']
s.split(' ') # ['', '', 'the', 'name', 'is:', 'BOND', '\t', 'JAMES', 'BOND', '\n\n']
```

## CONTROLLING THE NUMBER OF SPLITS

```python
df.Name.str.split(', ', expand=True, n=2) # expand the results to separate columns but do maximum 2 splits
```

## ASSIGNING MULTIPLE COLUMNS AT THE SAME TIME

```python
df[['First Name', 'Last Name']] = df.Name.str.split(', ', expand=True)
```

## USING `str.get()` METHOD TO ACCESS AN INDEXED VALUE

```python
brent['First Name'] = brent.Name.str.split(', ').str.get(0)
brent['Last Name'] = brent.Name.str.split(', ').str.get(1)
```

## CONCATENATING USING `cat()`

```python
df['Full Name'] = df['First Name'].str.cat(df['Last Name'], sep=' ') 
```

## VECTORIZED SLICING

```python
boston.Country.str.slice(start=0, stop=2, step=1)
```

## BOOLEAN MASKING WITH STRINGS

```python
boston.loc[boston.Country.str.match('ITA')]
```

## `str.contains()`

```python
boston.loc[boston.Name.str.contains('Will')]
boston[boston.Name.str.contains('Will')] 
```

## FILTERING ON MULTIPLE ARGUMENTS

```python
boston[(boston['Ran 2015']==1) & (boston['Ran 2016']==1)].head()
```

## REPLACE OPERATION ON STRINGS

```python
boston['M/F'] = boston['M/F'].str.replace('M', 'male').str.replace('F', 'female')
boston.Country.str.replace('Usa', 'United States', case=False) # case-insensitive replacement
```

## INDICATOR VALUES OR `get_dummies()` METHOD

```python
boston['Years Ran'].str.get_dummies(sep=':') # converts a single categorical Series into multiple Boolean columns
boston['M/F'].str.get_dummies() # will create two new columns, one called 'M' and another called 'F', the column names are equal to unique values from the source column
```

## REGEX

- regex `compile()` method only made sense in Python 1.0, since Python 2, regex is automatically compiled so this method can be ignored
- useful to experiment with regex `https://regex101.com/`

## REGEX EMAIL VALIDATOR

- <https://emailregex.com/>

```python
email_pattern = r"(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)"

```

## REGEX IN PANDAS STR METHODS

- `str.contains()` - equivalent to `re.match()`

`boston.Name[boston.Name.str.contains(pat=r'[wW]ill', regex=True)]`

- `str.replace()`, - equivalent to `re.replace()`

`boston['Official Time'].str.replace(r"(\d+):(\d+):(\d+)", r"\1 hours, \2 minutes, and \3 seconds")`

- `str.split()`, - equivalent to `re.split()`

`boston.Name.str.split(r'\s')`

with `split()` you don't need to enable `regex=True` parameter, it's enough if you just pass a raw string `r"pattern"`

## PLOTTING IN PANDAS

- pandas is using matplotlib behind the scene, therefore the matplotlib terminology and parameters names are useful to know (eg. figure, axis, pyplot, etc)

## QUICK PLOTTING

- default chart is a line chart

```python
ser.plot(color=purple)
df.Price.plot(c=purple)
pd.concat([ser1, ser2, ser3], axis=1).plot()
```

## BAR CHART

```python
ax = boston.Age.value_counts(sort=False).sort_index().plot(kind='barh', figsize=(12, 12));
```

## PIE CHART

```python
games.groupby('Platform')['JP_Sales'].sum().plot(kind='pie')
games.loc[:, ['JP_Sales', 'NA_Sales', 'Platform']]\
    .groupby('Platform')\
    .sum()\
    .plot(kind='pie', subplots=True)
```

## HISTOGRAM CHART

```python
ax = drinks.beer_servings.plot(kind='hist', bins=15)
ax = drinks.beer_servings.plot(kind='hist', bins=15, orientation='horizontal')
```

## SCATTER PLOT

```python
scores = pd.concat([math, reading, writing], axis=1)
scores.columns = ['Math', 'Reading', 'Writing']
scores.plot(kind='scatter', x='Reading', y='Writing')
```

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