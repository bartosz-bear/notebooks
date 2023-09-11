## PYTHON 3

## WHAT ARE `dict_values`, `dict_keys` and `dict_items`

- in Python 3 `dict.values()` along with `dict.keys()` and `dict.items()` return a view, rather than a list. You therefore need to wrap your call to `dict.values()` in a call to `list` like

`vals = list(my_dict.values())`

## WHAT ARE VIEWS OR DICTIONARY VIEW ITERATORS IN PYTHON? STARTING FROM PYTHON 3

- in Python 3 objects like `keys`, `values`, `items`, `range`, `zip` and `filter` return iterators (for lazy evaluation) instead of lists
- this is a design decision aimed at conserving space in larger programs
- iterators are to be used with `for` loops, `list comprehensions`, etc to access the items of the iterator
- in order to see the items quickly, they can be packaged into a list `list(my_dict.values())`

<http://web.archive.org/web/20140219195551/http://answers.oreilly.com/topic/1576-new-iterables-in-python-3-0>

## HOW DO YOU CREATE A DICTIONARY FROM TWO LISTS?

```python
list1 = [0,1,2]
list2 = ['a', 'b', 'c']

my_dict = dict(zip(list1, list2)) # prints {0: 'a', 1: 'b', 2: 'c'}
```

## HOW DOES `enumerate` WORKS?

- `enumerate()` takes a list as an input and returns an iterable of tuples, where the first item is a an index starting with zero, and the second element is a an element from the list argument
- in order to see the elements, it has to be converted to a list `list(enumerate(my_list))`

```python
my_list = ['a', 'b', 'c']
list(enumerate(my_list))
# [(0, 'a'), (1, 'b'), (2, 'c')]
```

## HOW DOES `zip()` WORKS?

- `zip()` takes at least two lists and creates an iterable of tuples, where the first element of the tuple is an item from the first list, and the second element of the tuple is element from the second list
- `zip()` works with more than two lists

```python
my_list = ['a', 'b', 'c']
my_bools = [True, False, True]
list(zip(my_list, my_bools)
# [('a', True), ('b', False), ('c', True)]
```

## HOW DO YOU CREATE A DICTIONARY FROM TWO LISTS USING `zip()`?

```python
my_list = ['a', 'b', 'c']
my_bools = [True, False, True]
my_dict = {k:v for k,v in zip(my_list, my_bools)}
# {'a': True, 'b': False, 'c': True}
```

## DICTIONARY COMPREHENSION

`my_dict = {name:age for name, age in zip(actor_names, actor_ages)}`

## BOOLEAN VALUES ARE ONES AND ZEROS IN PYTHON

`sum([True, False, True])` # will return 2

## HOW DO YOU CHECK IF AN OBJECT IS AN ITERABLE?

```python
iter([1,2,3])
<list_iterator at 0x11be4bdf0>
```
