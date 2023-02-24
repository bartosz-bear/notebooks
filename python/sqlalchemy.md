# SQLAlchemy

## SQLAlchemy

SQLAlchemy is the Python SQL toolkit and Object Relational Mapper that gives application application developers the full power and flexibility of SQL.

It provides a full suite of well known enterprise-level persistence patterns, designed for efficient and high-performing database access, adapted into a simple and Pythonic domain language.

SQLAcademy generates SQL statements from Python code, and psycopg2 sends SQL statements to the database. SQLAcademy depends on psycopg2 or other database drivers to communicate with a database.

<https://www.sqlalchemy.org/>

## How to connect to a DB from Python?

```python
import sqlalchemy

from sqlalchemy import create_engine

engine = create_engine('postgresql://user_name:passoword@localhost:5432/Database_Name')
```

## How to show tables in the database?

```python
print(engine.table_names())
```

## How to read data using SQLAlchemy and pandas?

```python
import pandas as pd

df = pd.read_sql('select * from datacamp_courses', engine)

df.head()
```

```python

```
