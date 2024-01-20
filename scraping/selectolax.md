## SELECTOLAX

- `selectolax` is a hmlt/xml parser, alternative to bs4 with better performance (due to Cython implementation)
- it's focused mostly on parsing CSS

## BASIC USE

```python
from selectolax.parser import HTMLParser

tree = HTMLParser(response.text)

tree.css('p') # returns a list of <p> nodes
```

## ACCESS BY TAG, CLASS, ID, ATTRIBUTE

`tree.css('a')` # by tag
`tree.css('#some_id')` # by id
`tree.css('.class-name)` # by class
`tress.css['attr-name']` # by attribute

## COMPOUND SELECTORS

`tree.css('p.class-name')`

## CLASS EXISTS

`tree.css('p[class]')` # selects all <p> nodes which have some class

## CHAINING

`tree.css('.noexcerpt.shortdescription')` # finds nodes with 'noexcerpt' and 'shortdescription' class values

## `css_item.text()` METHOD

- `text()` returns text from the top node as well from it's descedent nodes
- in order to return from the top node only, pass `deep=False` argument

```python
tree.css('p')[0].text(deep=False)
```

## COMPLEX SELECTORS

```python
tree.css('a > img[src*='upload.wikimedia.org']')
```

## SELECTORS LISTS

```python
tree.css('a > span, p') # selects all <span> nodes which are children of <a> node and all <p> nodes 
```

## DESCENDANT SELECTORS (DESCENDANT COMBINATOR)

- separator here is 'space'
- choose all elements which are descendents of a specific tag

```python
edit_anchore = tree.css('h2 a') # choose all <a> nodes which are descendents of first 'h2' element encountered
```

## CHILD COMBINATOR

- `>` is a seperator here
- similar to descendant combinator, however it selects only direct descendants (children) of a tag

```python
children_a = tree.css('h2 > a')
children_a = tree.css('h2 > span > a') # select all <a> which are children of <span> and <span> is a child of <h2>
```

## ADJACENT SIBLING COMBINATOR

- it's represented by `+` sign

```python
all_edits = tree.css('.mw-editsection-bracket + a') # it will return a list of <a> nodes who are descendants of any node of class mw-editsection-bracket
```

## GENERAL SIBLING COMBINATOR

- less restrictive version of adjacent sibling combinator

- it's represented by `~` sign

```python
all_edits = tree.css('.mw-editsection-bracket + a')
```

## HOW DO YOU SEARCH FOR A SPECIFIC WORD? CONTAINS A WORD INSTEAD OF MATCHING A WORD. SIMILAR TO SQL LIKE

- use `*=` instead of `=`

```python
divs = tree.css('div[class*="specific_words"]')
```