## BEAUTIFULSOUP

## HTML TAGS AND ATTRIBUTES AS PYTHON DATA STRUCTURES

- html subtags (eg. div in <li class='first'><div></div></li>) are represented as python variable attributes, and can be accessed by attribute accessor, eg. li.div
- html attributes are represented as python dictionaries and get by accessed by dictionary key or get method, li['class'] or li.get('class')

## HOW DO YOU CHECK OBJECT TYPES IN A GENERATOR RETURNED BY BS4?

```python
descendants = [*soup.ul.descendants]
desc_types = list(map(lambda x: type(x), descendants))
print(desc_types)

[
    <class 'bs4.element.NavigableString'>,
    <class 'bs4.element.Tag'>,
    <class 'bs4.element.NavigableString'>,
    <class 'bs4.element.Tag'>,
    <class 'bs4.element.NavigableString'>,
    <class 'bs4.element.NavigableString'>,
    <class 'bs4.element.NavigableString'>,
    <class 'bs4.element.Tag'>,
    <class 'bs4.element.NavigableString'>,
    <class 'bs4.element.NavigableString'>
]

```

## HOW DO YOU FILTER OUR WHITESPACE CHARACTERS IN LIST ITERATORS RETURNED BY SOUP?

```python
from bs4.element import NavigableString

children = list(filter(lambda x: type(x) != NavigableString, soup.ul.children))
```

```python
from bs4.element import NavigableString

def no_nav_strings(iterable):
  return list(filter(lambda x: type(x) != NavigableString, iterable))

no_nav_strings(soup.ul.children)
```

## DIFFERENCE BETWEEN `Tag.get_text()`, `Tag.text` AND `Tag.string`

- `Tag.get_text()` and `Tag.text` will return text of all tags which are descendants of the main tag,, eg. <ul><li>text 1<li><li>text 2<li><ul> `ul.get_text()` and `ul.text` will return 'text 1 text 2', while `ul.string` will return nothing

- `Tag.string` will only return something if a Tag doesn't have any descendant with text in it

- another difference is the return type, `get_text()` and `text` return Python string, while `string` returns bs4 NavigableString

- also `Tag.get_text()` has some additional method attributes like `get_text(separator=",")` or `get_text(strip=True)` which manipulates the string during extraction

## HOW DO ACCESS NEXT SIBLING AND AVOID NAVIGABLE STRING

```python
next_li = soup.ul.li.findNext('li')
```

## `.stripped_strings` GET ALL TEXT ELEMENTS AT ONCE FROM A DOCUMENT

- this method can be used on the full document as well as each element of the document separately

```python
all_strings = soup.stripped_strings
```

## DATA EXPLORATION PHASE WITH BS4

## HOW DO YOU CREATE A LIST OF ALL ELEMENTS?

`soup.find_all()`
`len(soup.find_all())`

## HOW DO YOU CREATE A LIST OF TAG NAMES?

```python
tags = list(map(lambda x: x.name, [*soup.find_all()]))
```

## FINDING TAGS OF MULTIPLE TYPES

```python
p_and_div = soup.find_all(['a', 'div'])
```

## FINDING TAGS WITH SPECIFIC ATTRIBUTES

```python
p_tags_with_attrs = soup.find_all('p', {'class': 'price_color'})
p_tags_with_attrs = soup.find_all('p', class_='price_color') # works for 'class' attribute but doesn't work for more unique attribute names

prices = [p.text for p in p_tags_with_attrs]
prices = list(map(lambda x: x.text, p_tags_with_attrs )) # second option
```

## WHAT IS THE EASIEST WAY TO CONVERT A PYTHON LIST GENERATOR INTO A LIST

```python
buttons_generator = soup.find_all('button', attrs={'data-loading-text': 'Adding...'})
buttons = [*buttons_generator]
```

## SEARCHING FOR TAGS USING FUNCTIONAL APPROACH

```python
soup.find_all('button',
              attrs={'data-loading-text': lambda x: 'add' in x.lower() or 'remove' in x.lower()})
```

## SEARCHING FOR ELEMENTS WITH A SPECIFIC ID

```python
soup.find_all(id='specific_id')
soup.find_all(attrs={'id': 'specific_id'}) # second option
```

## SEARCHING FOR ELEMENTS WITH ANY ID

```python
soup.find_all(id=True)
```

## SEARCHING FOR ELEMENTS WITH ANY CUSTOM, NON-EMPTY ATTRIBUTE

```python
price_div = soup.find('div', attrs={'data-last-price': True})
```

## FILTER ITEMS WITH CUSTOM FUNCTIONS

- a function will take each element separately and will return a boolean mask (True or False)
- use custom selector (filtering function) for this purpose

```python
def has_id_and_class(item):
  return item.has_attr('id') and item.has_attr('class')

tags_with_id = soup.find_all(has_id_and_class)
```

Easy option:

```python
soup.find_all(id=True, class_=True)
```

## HOW DO YOU FIND ALL THE TAGS IN THE DOCUMENT AND SKIP ALL THE TEXT STRINGS?

```python
only_tags = soup.find_all(True)
```

## USING REGEX TO SEARCH TEXT/STRING OF HTML TREE

- find all tags which contain 'Fiction' in their string

```python
import re

strings = soup.find_all(string=re.compile('Fiction', re.I))
```

- find all <a> anchors which contain 'Fiction' in their string

```python
fictions = soup.find_all('a', string=re.compile('Fiction', re.I))
```

## LIMIT NUMBER OF FOUND ITEMS WITH `limit` ARGUMENT

- works for `find_all()` and `select()`

```python
anchors = soup.find_all('a', limit=5)
anchors = soup.select('a', limit=5)
```

## `select()` FOR SELECTING WITH CSS

```python
titles = soup.select('[title]')
titles_with_human_string = soup.select('[title*=human]')
buttons = soup.select('button.btn-primary[data-loading-text][class*=primary]') # select all buttons with 'btn-primary' in the class attribute, with attribute 'data-loading-text' and with word 'primary' in the class attribute
```

## `select_one()` CSS SELECTOR

- `select_one()` works like `select()` but returns only one item, the first encountered