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

## HOW TO IMPROVE INSERT PERFORMANCE BY FACTOR OF 10?

- save the file as CSV and upload it using native Postgres `copy_from` function

```python
def insert_values_multi(table_name, table_data):
    
    conn_string = "postgresql+psycopg2://" + config('DB_USER') + ':' + config('DB_PASSWORD') + '@' + config('DB_HOST') + ':' + config('DB_PORT') + '/' + config('DB_NAME')

    engine = create_engine(conn_string)

    table_data.to_sql(table_name, engine, if_exists='replace', index=False)

    conn = engine.raw_connection()
    cur = conn.cursor()
    output = io.StringIO()
    table_data.to_csv(output, sep='\t', header=False, index=False)
    output.seek(0)
    cur.copy_from(output, table_name, null='')
    conn.commit()
    cur.close()
    conn.close()
```

## HOW DO YOU ROUND NUMBERS IN A DATA FRAME?

counties.round({'URBAN_RATIO': 2, 'UNEMP_95': 2, 'UNEMP_96': 2})

## MASTERING PANDAS FOR FINANCE

<https://github.com/PacktPublishing/Mastering-Pandas-for-Finance>