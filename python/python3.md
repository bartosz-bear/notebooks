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