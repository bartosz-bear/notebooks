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

## `@PROPERTY`

- `@property` decorator is used within a class
- it's decorating a class method
- it allows to access a method as it was an attribute

```python
class Person():

    def __init__(self, firstname, lastname):
        self.first = firstname
        self.last = lastname

    @property
    def fullname(self):
        return self.first + ' ' + self.last

    @fullname.setter
    def fullname(self, name):
        firstname, lastname = name.split()
        self.first = firstname
        self.last = lastname

    @fullname.deleter
    def fullname(self):
        self.first = None
        self.last = None

    def email(self):
        return '{}.{}@email.com'.format(self.first, self.last)

# Init a Person
person = Person('selva', 'prabhakaran')
print(person.fullname) #> selva prabkaharan

# Change last name to Prasana
person.last = 'prasana'

# Print fullname
print(person.fullname) # selva prasana

# Setting fullname
person.fullname = 'velu pillai'

# Print the changed values of 'first' and 'last'
print(person.fullname) #> velu pillai
print(person.first) #> velu
print(person.last) #> pillai

del person.fullname

print(person.first) #> None
print(person.last) #> None
```


<https://www.machinelearningplus.com/python/python-property/?utm_content=cmp-true>

## DATACLASS

- `@dataclass` decorator is a syntactic sugar which helps us to create classes with `__init__`, `__repr__`, `__eq__` and `__hash__` methods, without explicitly defining these methods
- once we decorate our class, these methods will be added to our class by the `@dataclass` decorator

<https://mmazurek.dev/dataclasses-w-pythonie/>

<https://www.studytonight.com/post/python-dataclass-field-function-part-3>

## `dataclass.field`

- allows better control of the behavior of class attributes, assiging default values, etc

## `default_factory`

-  If provided, it must be a zero-argument callable that will be called >when a default value is needed for this field. Among other purposes, this can be used >to specify fields with mutable default values, as discussed below. It is an error to >specify both default and default_factory.
- can be used to provide a callable (a function) as the default value which acts as a factory method to create a default value for a specific class attribute

```python
from dataclasses import dataclass, field
from random import choice

def get_language_version():
    languages = ['python2', 'python3']
    return choice(languages)

@dataclass
class data_class:
    value: str
    title: str
    language_version: str = field(default_factory = get_language_version)

class_instance_1 = data_class("10", "Studytonight")
print(class_instance_1) # data_class(value='10', title='Studytonight', language_version='Python3')
```