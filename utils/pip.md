## PIP - How to create a `requirements.txt` file?

```powershell
pip freeze > requirements.txt
```
## If PIP generates file in the format @ file///home/conda use the following

```powershell
pip list --format=freeze > requirements.txt
```

## How do you remove indentation from multiple lines in VS Code?

Shift + Tab