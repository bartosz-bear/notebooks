## PANDAS

## SHOW COUNTS FOR EACH UNIQUE VALUE IN A SERIES

```python
Series.value_counts()
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

## REFERNCE VALUES IN A SERIES USING INDEX

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

## MASTERING PANDAS FOR FINANCE

<https://github.com/PacktPublishing/Mastering-Pandas-for-Finance>