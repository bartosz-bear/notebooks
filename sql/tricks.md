## USE `COALESCE` AND `NULLIF` TO CREATE A NEW COLUMN WHICH RETURNS ONE OF THE TWO NUMBER, WHERE THE WORK NUMBER HAS A PRIORITY

INPUT TABLE: Sample
+==============+==============+
|     work     |     cell     |
+==============+==============+
|              | 717-735-6382 |
+--------------+--------------+
| 546-373-9363 | 493-353-3638 |
+--------------+--------------+
| NULL         | 657-428-3639 |
+--------------+--------------+

```sql
SELECT COALESCE(NULLIF(work,''), cell) as primary FROM sample;
```

OUTPUT
+==============+
|   Primary    |
+==============+
| 717-735-6382 |
+--------------+
| 546-373-9363 |
+--------------+
| 657-428-3639 | 
+--------------+

