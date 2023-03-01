## ISNULL()

```sql
SELECT ISNULL(1, 2); --returns 1 because 1 is not null
```

```sql
SELECT ISNULL(NULL, 'replacement_value'); --returns 'replacement_value because NULL is NULL
```