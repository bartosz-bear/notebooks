## MODULES AND PACKAGES

- module means a .py file
- package means a .py file with corresponding `__init__.py` file in the same folder
- while importing from a package using dot notation, every element in the dot notation should be a package, eg. `from scrapy.shell.utils import my_func`, there should be three `__init__.py` files
- each module and package has an assigned variable, called `__name__` which is a string denoting module/package's name
- when a module is loaded from Python prompt, it has no `__name__`, instead it's name is assigned to `__main__` variable
- modules and packages have individual namespaces, usually in the form of `module1.function1`, `module1.function2`
- when a module is imported with `import module1` all functions and classes declared in this module are added to the namespace of the module which is importing
- also, when a module is imported, are statements are executed

## MODULES IN INTERPRETER MODE (PROMPT MODE)

For efficiency reasons, each module is only imported once per interpreter session. Therefore, if you change your modules, you must restart the interpreter – or, if it’s just one module you want to test interactively, use `importlib.reload()`, e.g. `import importlib; importlib.reload(modulename)`.

## RELATIVE IMPORTS

- relative imports are a secondary way of dealing with modules in Python, and should only be used if desired outcome cannot be achieved with absolute imports
- one useful case for relative imports is importing a module from within a package

`from .my_package import my_module` - imports from the current directory

## USE SEVERAL DOTS TO MOVE HIGHER UP IN THE DIRECTORIES HIERARCHY

`from ..another_package import another_module`
`from ...one_more_package import third_module`

<https://peps.python.org/pep-0328/#rationale-for-relative-imports>

## EXECUTING MODULES AS SCRIPTS

- in order to make a module usable as script, add a modified version of the following code

```python
if __name__ == "__main__":
    import sys
    fib(int(sys.argv[1]))
```

- this code allows you to pass arguments in the Python interpreter, like `python fibo.py 50`
- when a module is executed as a script, it's `__name__` becomes `__main__`

## `sys` MODULE

- `sys` module has objects used by Python interpreter and functions which that interact strongly with the interpreter, it's a module to control operating system

## HOW TO VIEW ALL BUILT-IN NAMES?

`sys.builtin_module_names`

## `sys ps1`

- it's a variable to control Python interpreter prompt notation

## `sys.path` ORDER

`sys.path` controls how packages are searched during import

1. Directory containing the input script (or the current directory when no file is specified)
2. `PYTHOPATH`