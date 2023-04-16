# PostgreSQL

## SUBSETS OF SQL

`DDL` - data definition language, is a syntax for creating, modyfing and deleting database objects such as tables, indices, and users. `DDL` statements are similar to computer programming languages for defining data structures, especially database schemas. Common examples are: `CREATE`, `ALTER` and `DROP`

`DML` - data manipulation language, is a syntax for inserting, modifying and deleting DATA in a database. Common examples: `INSERT INTO`, `UPDATE SET`, `DELETE`

`DCL` - data control langugage, is a syntax for controlling access (authorizations) to data and schema of a database. Examples: `GRANT`, `REVOKE`. Operations for which privilages may be granted to or revoked from a user or role apply to both the `DDL` and `DML`, ex. `GRANT SELECT` or `REVOKE DELETE`

```sql
REVOKE INSERT ON 'role1', 'role2' FROM 'user1'@'localhost', 'user2'@'localhost'
GRANT ALL ON db1.* TO 'jeffrey'@'localhost'
```

## `NULL` AND NULLABLE COLUMNS

- `NULL` is a marker indicating absent value
- if you do not provide a `DEFAULT` clause and the column is NULL-able, the sytem will provide `NULL` value by default
- if all that fails you get a an error message about missing data
- the most important columns constraint is `NOT NULL`, which forbids to using `NULL`s in a column. Use this constraint automatically, then remove it only if you have a good reason. It will help you to avoid the complications of `NULL` when you make queries against the data
- the `NULL` is a special value in SQL that belongs to all data types. SQL is the only language which has such a creature. If you understand how it works, you will have a good grasp of SQL. In Relational Theory, the `NULL` has no data type, but in SQL, we have to allocate storage for a column of a data type. This means we can write `CAST (NULL as <datatype>)` in our code.
- `NULL` is the smallest value in the sorting order 

## `NULL` IS NOT THE SAME AS ZERO

- a `NULL` should not be confused with a value of 0. A `NULL` value indicates ABSENCE OF A VALUE, which is not the same as a value of zero. Eg. consider a question "How many books does Adam own?". The answer may be zero, which means he doesn't own any book. Or the answer may be `NULL`, which means we don't know how many books Adam owns.
- `NULL` is a marker not a value

## `NULL` CONTROVERSY

- `NULL` has been a controversy due to it's associated three-value logic(3VL)
- the controversy stems from the fact that even thought 3VL is implemented in SQL (eg. is used for `NULL` = `NULL` comparison), it is not consistently implemented (eg. `UNION` and `INTERSECT` don't implement it, within these operations `NULL` = `NULL`). This inconsistency makes SQL less intuitive
- SQL standard defines an optional feature called F571, which adds unary operators, which is `IS UNKNOWN` which makes it 3VL complete

## `NULL` = `NULL` RETURNS `FALSE`

- it's a wrong implementation
- `NULL`(1) represents absent value in the database. Value is not recorded in the database but it exists in the real world (eg. age of an employee). `NULL`(2) also represents absent value in the database. And similarly to `NULL`(1) this value exists in the real world. However, RDBMS doesn't know if these two values in the world are the equal or not. Therefore it returns `UNKNOWN`.

## LOGICAL OPERANDS AND `NULL`

- using logical operands with `NULL` will result in an empty set, therefore you can't do name = `NULL`
- logical operands like '=' or '!=' can't used to check for `NULL`, instead `IS NULL`, `IS NOT NULL` and `EXISTS`


## `IS NULL()` AND `IS NOT NULL()`

- because `NULL` = `NULL` is equal to `FALSE` 
- these two unary operators should be used to check if a value recorded in a database is or is not `NULL`

```sql
SELECT *
FROM customers
WHERE address IS NOT NULL;
```

## AGGREGATE FUNCTIONS AND `NULL`

- aggregate functions like `SUM()` or `COUNT()` don't include `NULL` values in its calculations sets
- the only exception is `COUNT(*)` !!! COUNT STAR !!! function, which also counts rows with `NULL` values

## `NULL` AND `GROUPBY()`

- if rows contain `NULL` values, those will be grouped into one group

## `NULLIF()` FUNCTION

- a function which returns `NULL` if both arguments are equal, otherwise it returns the first argument

```sql
SELECT NULLIF(2, 2); -- returns NULL because both arguments are equal
```

```sql
SELECT NULLIF(NULL, NULL); -- returns NULL because both arguments are equal
```

```sql
SELECT NULLIF(5, NULL); -- returns 5
```

```sql
SELECT NULLIF(NULL, 5); -- return NULL because first argument is NULL
```

## USING `NULLIF` TO PREVENT DIVISION BY ZERO ERRORS

var1 = 1
var2 = 0

```sql
SELECT var1/(NULLIF(var2, 0)) -- doesn't trigger division by zero error
```

## THREE VALUE LOGIC (3VL)

- logic systems where there are three possible value: 'True', 'False' and 'Value is unkown'
- SQL implements ternary logic as a means of handling comparisons with `NULL` field content

## SENTINEL VALUE

- `NULL` was originally intended to be used as a sentinel value representing missing value (with the assumption that an actual value exists but the value is currently not recorded in the database)

## `NULL` VALUE RESEARCH

<https://betterprogramming.pub/how-to-deal-with-null-values-in-sql-the-right-way-69861f2debbf>

## ACID (ATOMICITY, CONSISTENCY, ISOLATION, DURABILITY) PROPERTIES OF DATABASE TRANSACTIONS

- is a set of properties of database transactions intended to guarantee data validity despite errors, power failures and other issues
- in the context of databases, a sequence of operations that satisfies the ACID properties (which can be perceived as a single logical operation on data) is called a transaction
- eg. transfer of funds from one bank account to another is a transaction, it's single operation from the perspective of a database even if it includes at least two operations on data (debiting one account and crediting another one)

## ATOMICITY

Atomicity guarantees that each transaction is treated as a single unit, which either succeeds completely or fails completely. If any of the statements constituting a transaction fails to complete, the entire transaction fails and the database is left unchanged. A guarantee of atomicity prevents updates to the database from occurying only partially, which can cause greater problems than rejecting the whole series outright.

## CONSISTENCY

Consistency refers to the maintaining integrity of all constraints and rules imposed on the database. If there is a transaction which influences a table which has constraints, cascades or triggers on it's field, this transaction will only succeed if ALL these constraints are fulfilled, if even one of them is not fulfilled, the whole transaction will fail and roll back.

Consistency principle also has to be maintained when it comes to declarative constraints.

Consistency is mainained by holding to declarative constraints set up during schema definiton.

Examples: `NOT NULL`, `UNIQUE`, `CHECK()`

## ISOLATION

Transactions are isolated from each other, meaning that one transaction cannot be affected by the incomplete processing of another transaction. Isolations are related to concurrent processing of transactions. Transactions can be processed concurently only if one transaction have no impact on the second one. Otherwise, transactions have to happen sequentially.

## OPTIMISTIC TRANSACTION SCHEMA

- assumes that the same transaction will not read or write to the same place twice
- if that happens, both transactions will be aborted and state will be rolled back

## PESSIMISTIC TRANSACTION SCHEMA

- if transaction is assumed to read or write twice, transactions have to run sequentially

## DURABILITY

- durability guarantees that once a transaction has been commited, it will remain commited even in the case of a system failure (power outage of crash). This usually means that completed transactions (or their effects) are recorded in the non-volatile memory.

## REFERENTIAL INTEGRITY

Referential integrity is a property of data stating that all its referenes are valid. They are only valid if there are no orphaned records. Orphaned records are records which reference records in the second table which don't exist. If this condition holds, the database didn't maintain referential integrity.

- when we use `REFERENCES` on the foreign key we apply referential integrity

<https://www.red-gate.com/simple-talk/databases/theory-and-design/constraints-and-declarative-referential-integrity/>

## REFERENTIAL ACTIONS

- referential actions determine what happens to referenced records when you delete or update the table which is referencing other tables

`ON DELETE`
`ON DEMAND`

## POSSIBLE OPTIONS

`CASCADE` - will change the values in the referencing table to the new value in the referenced table. This method allows you to set up a single table as the trusted source for the value of a data element. This way the database engine can propagate changes automatically.

`SET NULL`- will change values in the referencing table to `NULL`

`SET DEFAULT` - will change values in the referencing table to `DEFAULT` value of that column, provided that this `DEFAULT` value was defined during schema creation.

`NO ACTION` - nothing changes. If no other referential action is defined, all columns are implicitly set as `NO ACTION`.

## DEFERRABLE CONSTRAINTS

Deferrable constraints allows you to switch off constraints temporarily during a session. When the session closes, constraints are switched back on.

## SYNTAX

Keywords are not case-sensitive in SQL, but data is.

## KEYWORDS

`SELECT` field/column

`FROM` table

```sql
SELECT name, card_number FROM patrons;
```

```sql
SELECT * FROM patrons;
```

## HOW DO YOU CHANGE ALTER COLUMN CONSTRAINT?

```sql
ALTER TABLE clients DROP CONSTRAINT clients_set_split_check;
```

```sql
ALTER TABLE clients ADD CONSTRAINT clients_set_split_check CHECK (set_split IN ('TEST', 'TRAIN'));
```

## HOW DO YOU ADD `NOT NULL` CONSTRAINT ON A COLUMN?

```sql
ALTER TABLE transfers
ALTER COLUMN account_id SET NOT NULL;
```

## KEYWORDS ORDER

1. `FROM` - specifies a starting table to work with
2. `JOIN` - merges data from multiple tables
3. `WHERE` - filters the set of rows
4. `GROUP BY` - groups rows by a unique set of values
5. `HAVING` - filters the set of groups

TABLE -> JOINED VIRTUAL TABLE -> FILTERED TABLE -> GROUPED BY TABLE -> FILTERED GROUPED BY TABLE

## IDENTIFIERS

Identifier is a name of a particular part of a database (table name, field name).

Identifiers are always lower case.

## ALIASING

```sql
SELECT name AS first_name, year_hired
FROM employees;
```

`name` is a name of a field in a table, while `first_name` will be a name of the field in the result set

## CREATING A DATABASE

## DATABASE DESIGN QUESTIONS

1. What kind of thing are we storing?

cities

2. What properties does this thing have?

name, country, population, area

3. What type of data does each of those properties contain?

name (string)
country (string)
population (number)
area (number)

## CREATING A TABLE

```sql
CREATE TABLE cities (
  name VARCHAR(50),
  country VARCHAR(50),
  population INTEGER,
  area INTEGER
);
```

Creating a table with auto-increment primary key.

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50)
);
```

Creating a table with a foreign key

```sql
CREATE TABLE photos (
  id SERIAL PRIMARY KEY,
  url VARCHAR(200),
  user_id INTEGER REFERENCES users(id)
);
```

## DELETING A TABLE

```sql
DROP TABLE photos;
```

## CHANGING A NAME OF A COLUMN

```sql
ALTER TABLE comments
RENAME COLUMN contents TO body;
```

## INSERTING DATA

- actual values are matching in the exact order of specified fields

```sql
INSERT INTO cities (name, country, population, area)
VALUES ('Tokyo', 'Japan', 38505000, 8223);
```

## INSERTING SEVERAL ROWS AT THE TIME

```sql
INSERT INTO cities (name, country, population, area)
VALUES
	('Delhi', 'India', 28125000, 2240),
  ('Shanghai', 'China', 22125000, 4015),
  ('Sao Paulo', 'Brazil', 20935000, 3043);
```

## INSERT AND RETURN - `RETURNING`

- when you want to insert an item into a database and get the details about the insert coming directly from the database use `RETURNING` keyword

```sql
INSERT INTO users (username, bio) VALUES ($1, $2) RETURNING *;
```

## SELECTING DISTINCT RECORDS

```sql
SELECT DISTINCT year_hired
FROM employees;
```

## SELECTING A DISTINCT COMBINATION OF TWO FIELDS

- `DISTINCT` is the same operation as `UNIQUE`, `DISTINCT` is used inside `SELECT` statement while `UNIQUE` is a column constraint

```sql
SELECT DISTINCT dept_id, year_hired
FROM employees;
```

## VIEWS

- View is a virtual table that is the result of a saved SQL `SELECT` statement
- Result set is not stored in the database. Views (saved queries) are stored.
- Views automatically update in response to updates in the underlying data.

```sql
CREATE VIEW employee_hire_years AS
SELECT id, name, year_hired
FROM employees;
```

Once a view has been created, we can query is as it was a normal table.

```sql
SELECT id, name
FROM employee_hire_years;
```

## RESULT SET

Result set is a result of a query.

## CALCULATED COLUMNS

```sql
SELECT name, population / area AS density
FROM cities;
```

### OPERATORS FOR CALCULATED COLUMNS

- +
- -
- *
- /
- ^ (exponent)
- |/ (square root)
- @ (absolute value)
- % (remainder)

```sql
SELECT @area AS density FROM cities;
```

```sql
SELECT |/area AS density FROM cities;
```

## STRING OPERATORS AND FUNCTIONS

- || - join two strings
- CONCAT() - join two strings
- LOWER() - gives a lower case string
- LENGTH() - gives number of characters in a string
- UPPER() - gives and upper case string


## CONCATANATING STRINGS

```sql
SELECT name || ' ' || country
FROM cities;
```

```sql
SELECT CONCAT(name, ' ', country) AS location
FROM cities;
```

## UPPER()

```sql
SELECT UPPER(name) FROM cities;
```

```sql
SELECT CONCAT(UPPER(name), ' ', UPPER(country)) AS location FROM cities;
```

```sql
SELECT
  UPPER(CONCAT(name, ' ', country)) AS location
FROM
  cities;
```

## COUNT()

```sql
SELECT COUNT(birthdate) AS count_birthdates
FROM people;
```

```sql
SELECT COUNT(name) AS count_names, COUNT(birthdate) AS count_birthdates
FROM people;
```

## COUNT(*) TOTAL NUMBER OF RECORDS IN A TABLE

- includes `NULL` values to the count

```sql
SELECT COUNT(*) AS total_records
FROM people;
```

## COUNT() WITH DISTINCT

- excludes duplicates

```sql
SELECT COUNT(DISTINCT birthdate) AS count_distinct_birthdates
FROM people;
```

## FILTERING WITH WHERE()

- it works like Excel filter

```sql
SELECT *
FROM tutorial.us_housing_units
WHERE month = 1
```

- FIRST: `FROM cities`
- SECOND: `WHERE area > 4000` -- filtering rows
- THIRD: `SELECT name` -- filtering columns

## WHERE COMPARISON OPERATORS

- `=` (comparison using single equal sign)
- `>`
- `<`
- `>=`
- `<=`
- `IN` (values present in a list)
- `<>` (not equal)
- `!=` (not equal)
- `BETWEEN` (values between two numbers)
- `NOT` (values not present in a list)

## `BETWEEN` OPERATOR

```sql
SELECT name, area
FROM cities
WHERE area BETWEEN 2000 AND 4000;
```

## `IN` AND `NOT IN` OPERATORS

```sql
SELECT name, area
FROM cities
WHERE
  name IN ('Tokyo', 'Shanghai');
```

```sql
SELECT name, area
FROM cities
WHERE
  name NOT IN ('Delhi', 'Tokyo');
```

## COMBINING `NOT IN` AND `AND`

Filter for all records where area IS NOT 8223 or 3044 AND where name of the city is Dehli.

```sql
SELECT
  name,
  area
FROM
  cities
WHERE
  area NOT IN (8223, 3044) AND name = 'Delhi';
```

We can chain as many AND, OR statements as well like.

```sql
SELECT
  name,
  area
FROM
  cities
WHERE
  area NOT IN (8223, 3043)
  OR name = 'Delhi'
  OR name = 'Tokyo';
```

## COMBINING CALCULATED COLUMNS WITH `WHERE` CLAUSE

```sql
SELECT
  name,
  population / area AS population_density
FROM
  cities
WHERE
  population / area > 6000;
```

## UPDATING RECORDS

```sql
UPDATE cities
SET population = 3505000
WHERE name = 'Tokyo';
```

## UPDATING `NULL` VALUES

```sql
UPDATE products
SET price = 9999
WHERE price IS NULL;
```

## DELETING RECORDS

```sql
DELETE FROM cities
WHERE name = 'Tokyo';
```

## ORDER OF QUERY EXECUTION

- it's important to know query order for debugging and aliasing purposes

1. TABLE SELECTION (`FROM people`)
2. COLUMNS SELECTION (`SELECT name`)
3. ROWS SELECTION (`LIMIT 10`)

## ALIAS DECLARATION AND REFERENCING

Aliases can only be referenced by a futher code if the alias was declared earlier on in the code.

## DEBUGGING SQL

- Incorrect or missing punctuation, especially a comma error is a very common error
- Misspelling
- Incorrect capitalisation

## SQL FORMATTING

- new lines, capitalization, indentation and semi-colons are not required in SQL

```sql
select title, release_year, country from films limit 3
```

<https://www.sqlstyle.guide/>

## SQL BEST PRACTICES

- capitalized keywords
- new lines between keywords
- indentations for multiple fields
- using semi-colons at the end of query
- using lowercase letters only for table and field names
- using underscore instead of space for table and field names

## DEALING WITH NON-STANDARD FIELD NAMES

```sql
SELECT title, "release year", country
FROM films
LIMIT 3;
```

## CONVENTIONS

Table names and field names should be named using small letters only and underscores. Table names should be called using plurals and field names using singulars.

`customers`

`customer_name`

## DATA TYPES

Data types are SQL implementation based (eg. different in PostreSQL and MySQL).

<https://www.postgresql.org/docs/current/datatype.html>

## POSTGRESQL DATA TYPES

## NUMERIC DATA TYPES

![](./images/postgresql/numeric_data_types.png)

## `INTEGER`

- signed integer number
- from -2.1B to 2.1B
- both negative and positive numbers who have no decimal points

## `SERIAL`

- positive sign integer from 1 to 2.1B
- positive sign numbers who have no decimal points, and which auto-increment

## NUMBERS WITH DECIMAL POINTS

- these are fully precise but they are less computationally efficient

## `NUMERIC`

- use to store very precise numbers with decimal points like scientific calculations, grams of gold
- databases storing information about money should use `NUMERIC`

## `DECIMAL`

- it's just an alias for `NUMERIC` and is widely used for monetary data, being an 'arbitrary precision' type

## FLOATING POINT MATH NUMERIC TYPES

- used to store numbers with a decimal where decimal is not that important, like kilograms of trash in a landfill, or number of liters in a lake
- floating point math numeric types are much more efficient when it comes to computations

## `REAL`

- full precision is not guaranteed, only about 6 digits of precision is guaranteed

## `FLOAT`

## FAST RULES FOR STORING NUMBERS

![](./images/postgresql/numeric_types_fast_rules.png)

## CHARACTER TYPES

- in PostgresSQL there are no performance differences between these different types unlike in other databases

## `CHAR(x)`

- a string with a fixed (defined) number of characters
- extra chars are trimmed
- unused chars and replaced with space

## `VARCHAR`

- variable length character

## `VARCHAR(40)`

- a string with up to 40 characters, automatically removes extra characters above the limit
- no extra space characters are added like in the `CHAR(x)` type
- this type is mostly used to prevent accidental storing of an extremely long character (which usually is a mistake not an intended behavior)

```sql
VARCHAR(50)
```

## `TEXT`

- stores a string of any length

## BOOLEAN DATA TYPES

Automatic conversion to boolean values:

'true', 'yes', 'on', 1, 't', 'y' => TRUE
'false', 'no', 'off', 0, 'f', 'n' => FALSE
'null' => NULL

```sql
SELECT('yes'::BOOLEAN) -- returns TRUE
```

```sql
SELECT(0::BOOLEAN) -- returns FALSE
```

## `NULL`

- absent value, nothing
- not True, not False

```sql
SELECT('null'::BOOLEAN) -- returns `NULL` 
```

## DATE AND TIME VALUES

## DATE CONVERSION

```sql
SELECT ('NOV-20-1980'::DATE); -- converts to 1980-11-20 (YYYY-MM-DD)
```

## TIME CONVERSION (WITH TIME ZONE OR WITHOUT TIME ZONE)

## TIME WITHOUT TIME ZONE

```sql
SELECT ('01:23 PM'::TIME); -- returns 13:23:00
```

## TIME WITH TIME ZONE

- UTC is a base time zone

```sql
SELECT ('01:23:23 AM EST'::TIME WITH TIME ZONE);
-- returns 01:23:23-05:00 
```

## DATETIME (`TIMESTAMP`) WITH TIME ZONE

```sql
SELECT ('NOV-20-1980 1:23 AM PST'::TIMESTAMP WITH TIME ZONE);
```

## AUTOMATIC `TIMESTAMP` ENTRY

```sql
CREATE TABLE users (
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

## HOW TO GROUP/BUCKET DATES IN WEEKS?

```sql
SELECT
  date
```

## AGE()

```sql
SELECT AGE('2021-02-28 20:15:21.298284+01', '2021-03-10 10:39:11.943206+01')
-- RETURNS 0 years 0 mons -9 days -14 hours -23 mins -50.644922 secs
```

## INTERVALS

```sql
SELECT ('1 D 2 H 30 M 15 S'::INTERVAL); -- returns '1 day 02:30:15' of type INTERVAL
```

```sql
SELECT ('NOV-11-2022'::DATE) - ('1 D 2 H'::INTERVAL); -- returns '2002-11-09 22:00:00" of type TIMESTAMP WITHOUT TIME ZONE
```

## CALCULATING INTERVALS BETWEEN TIMES OF DIFFERENT TIME ZONES

```sql
SELECT ('NOV-20-1980 1:23 AM EST'::TIMESTAMP WITH TIME ZONE)
- 
SELECT ('NOV-10-1980 5:43 AM PST'::TIMESTAMP WITH ZIME ZONE)
```

## `EXTRACT`

- extracting specific parts of `TIMESTAMP`
- `YEAR`, `MONTH`, `DAY`, `HOUR`, `MINUTE`, `SECONDS`, `MILISECONDS`

```sql
SELECT
  EXTRACT(YEAR FROM NOW()) AS year,
  EXTRACT(MONTH FROM NOW()) AS month,
  EXTRACT(DAY FROM NOW()) AS day;
```

## MORE ADVANCED `EXTRACT` OPTIONS

`WEEK` - extracts the week of the year
`DOW` - day of the week in the calendar year
`DOY` - day of the calendar year
`EPOCH` - Returns the UNIX timestamp. Calculated from 01-01-1970.
`QUARTER` - quarter
`TIMEZONE` - timezone information
`TIMEZONE_HOUR` - returns the timezone difference in hours
`TIMEZONE_MINUTE` - returns the timezone difference in minutes
`WEEK`


```sql
SELECT AGE('NOV-20-1980 1:23 AM EST'::TIMESTAMP WITH TIME ZONE, 'NOV-10-1980 5:43 AM PST'::TIMESTAMP WITH ZIME ZONE)
```

## TYPE CONVERSION

Converting a float into an integer

```sql
SELECT (2.0::INTEGER);
```

## OUT OF RANGE ERROR

```sql
SELECT (60000::SMALLINT); -- smallint accepts integer up to range 32767, therefore this will raise error
```

## `::regclass`

`::regclass` IS AN ALIASS FOR AN OBJECT IDENTIFIER WHICH ARE USED INTERNALLY BY POSTGRESQL as a primary key for several data dictionary tables. It can be used as a translator when querying the dictionary tables in postgres.

## COLLATION

Collation specifies how data is sorted and compared in a database. Collation provides the sorting rules, case and accent sensitivity properties for the data in the database. Theses rules are provided by the chosen locale.

For example, when you run a query using the `ORDER BY` clause, collation determines whether or not uppercase letters and lowercase letters are treated the same.

## PRIMARY KEY

Primary key uniquely identifies each row in a particular table.

- each row in every table has one primary key
- no other row in the same table can have the same primary key
- 99% of the time primary key is called `id`
- either an integer or a UUID (Universally Unique Identifier)
- will never change

## FOREIGN KEY

Foreign key identifies a record (usually in an another table) that a particular row with a foreign key has a relationship with. Foreign key in table A is a primary key in table B.

- in one-to-many relationship, the 'many' side of the relationship gets the foreign key column
- rows only have a foreign key if they 'belong' to another record in a different table
- many rows in the same table can have the same foreign key
- name of a foreign key varies, usually they are called something like `user_id` or `department_id`
- foreign keys are referring to concrete primary keys in a different table
- foreign keys will change when a relationship changes (eg. an employee changes a department)
- there is no rule to prevent several columns from referencing the same target column. For example, we might have a table of flight crews with pilot and copilot columns that both reference a table of certified pilots

## FOREIGN KEY IN POSTGRESQL

- PostgreSQL only allows an entry of a record with a foreign key, if this entry is referencing an existing record in the second table. In order words, it's not possible to enter a new record if this new record is referencing a record which doesn't exist in the second table.

## CIRCULAR REFERENCE

- a circular reference is a relationship in which one table references a second table, which in turn references the first table. "You cannot get a job unitl you have experience, and you cannot get experience until you have a job."

# DATABASE RELATIONSHIPS

There are 4 different kinds of relationships

## one-to-one relationship

One record of the first table will be linked to zero or one records of second table.

Eg. each employee in the `Employee` table will have a corresponding row in `EmployeeDetails` table that stores the current personal details of an employee. So each employee will have zero or on record in `EmployeeDetails` table.

![](./images/postgresql/one-to-one.png)

`EmployeeID` is a PRIMARY KEY in `Employee` table and a FOREIGN KEY in the `EmployeeDetails` table.

Each employee has either one or zero records in the `EmployeeDetails' table.

![](./images/postgresql/one-to-one2.png)

## one-to-many relationship

- one-to-many is the most common among tables relationships
- a single column from one table can be linked to zero or more columns in another table
- 'employee has many addresses'

`Employee` table stores employee records. `Address` table stores adresses of employees. Each employee will have only one record in the `Employee` table but it can have zero, one or several records in `Address` table. This is because each employee can have zero, one or several addresses (Home address, Office address, Vacations address).

![](./images/postgresql/one-to-many2.png)

`Employee` table and `Address` table are linked by the key column `EmployeeID`'. `EmployeeId` is a primary key in `Employee` table and a foreign key in `Address` table.

In one-to-many relationship, the 'many' side of the relationship gets the foreign key column

![](./images/postgresql/one-to-many.png)

## many-to-one relationship

- vice versa of one-to-many relationship
- 'many addresses belong to one employee'
- 'many employees work in one department'

## many-to-many relationship

- many-to-many relationship allows you to relate each row in one table to many rows in another table, and vice versa
- eg. an employee can have many skills, and a particular skill can be associated with one or more employees

Many-to-many relationship is created using a `JUNCTURE` table. `EmployySkill` is a junction table that contains `EmployeeID` and `SkillID` as foreign key columns, which allow formation of many-to-many relationship between `Employee` and `SkillDescription` tables.

Indivindually, the `Employee` and `EmployeeSkill` have a one-to-many realtionship and `SkillDescription` and `EmployeeSkill` also have one-to-many relationship. But, they form form many-to-many relationshipo using a juncture table `EmployeeSkill`.

```sql
CREATE TABLE product (
  product_id SERIAL PRIMARY KEY, -- implicit pk
  product TEXT NOT NULL,
  price NUMERIC NOT NULL DEFAULT 0
);

CREATE TABLE bill (
  bill_id SERIAL PRIMARY KEY,
  bill TEXT NOT NULL,
  billdate DATE NOT NULL DEFAULT CURRENT_DATE
);

CREATE TABLE bill_product (
  bill_id INTEGER REFERENCES bill (bill_id) ON UPDATE CASCADE ON DELETE CASCADE,
  product_id INTEGER REFERENCES product (product_id) ON UPDATE CASCADE,
  amount NUMERIC NOT NULL DEFAULT 1,
  CONSTRAINT bill_product_pkey PRIMARY KEY (bill_id, product_id) -- explicit pk, composite key
)

);
```

![](./images/postgresql/many-to-many.png)


![](./images/postgresql/many-to-many2.png)

<https://www.tutorialsteacher.com/sqlserver/tables-relations>

## COMPOSITE KEY

Key which constists of multiple key columns (from other table)

## SELF-REFERENCING RELATIONSHIP

- when a table is referencing itself
- self-referencing relationship (also known as a recursive relationship) in a database occurs when a column in a table relates to another column in the same table
- for example: `staff` table contains information about company employees and their managers, however managers themselves belong to staff too

```sql
CREATE TABLE category (
  category_id SERIAL PRIMARY KEY,
  category_name VARCHAR(45),
  parent_category_id INTEGER,
  CONSTRAINT fk_category FOREIGN KEY (parent_category_id)
    REFERENCES category (category_id)
    ON DELETE RESTRICT
    ON UPDATE CASCADE
)
```

![](../assets/images/postgresql/self_referencing.png)

## What is a DATABASE SCHEMA?

Database schema is the organization and structure of a database. A schema contains schema objects, which could be tables, fields, data types, views, stored procedures, relationships, primary keys, foreign keys, etc.

![](./images/postgresql/database_schema.png)

## FOREIGN KEY CONSTRAINT ERROR DURING INSERTION

This error pops up when we try to enter a record with a foreign key, and the foreign key specified by us doesn't exist as a primary key in a different table.

```sql
INSERT INTO photos (ulr, user_id)
VALUES ('http://df.jpg', 999);
```

This query will results in an error because there is no user with `id` 999.

`insert or update on table "photos" violates foreign key constraint "photos_user_id_fkey"`

## FOREIGN KEY CONSTRAINT ERROR DURING DELETION

```sql
DELETE FROM users
WHERE id = 1;
```

`update or delete on table "users" violates foreign key constraint "photos_user_id_fkey" on table "photos"`

## DATA CONSISTENCY DURING INSERTION 

We are not allowed to add a record with a foreign key when this foreign key doesn't exist as a primary key in a different table.

However, we are allowed to insert a record with a `NULL` value as a foreign key.

## DATA CONSISTENCY DURING DELETION

- we can `ON DELETE` parameter to define a default behavior of the records with foreign key, in case records with the corresponding primary keys are being deleted

```sql
CREATE TABLE photos (
  id SERIAL PRIMARY KEY,
  url VARCHAR(200),
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);
```

`ON DELETE RESTRICT` - throw an error

`ON DELETE NO ACTION` - throw an error

`ON DELETE CASCADE` - delete the corresponding items in the second table Eg. when you delete a post in a blog, you also want to delete all corresponding comments on that post.

`ON DELETE SET NULL` - change foreign key values to `NULL`. Eg. when a user wants to delete his account but we want to keep his photos (in case he changes his mind in the future).

`ON DELETE SET DEFAULT` - change foreign key values to a default value, if one is provided

## `JOINS` AND AGGREGATIONS

## `JOINS`

- produce values by merging together rows from multiple (minimum 2) related tables
- use joins most of the times when you're asked to find data that involves multiple resources
- during `JOIN` operation an additional, virtual table is created which constists all rows of the selected table, merged together using a primary and a foreign key
- in the last step, the virtual table is stripped of all fields but the ones defined in the `SELECT` statement
- when there is no match between a foreign key and a primary key for a particular record, this record is not added to the results set

## AGGREGATIONS

- aggregations take several rows and calculate a single value (like `groupBy` in `pandas` )
- keywords like `most`, `average`, `least` are examples of aggregations

## `JOINS` SYNTAX

```sql
SELECT contents, url
FROM comments
JOIN photos ON photos.id = comments.photo_id;
```

- in the `SELECT` statement we select fields from BOTH tables
- in the `FROM` statement we specify the first table (the one with a foreign key)
- in the `JOIN` statement we specify the second table (the one with a primary key which is referenced by a foreign key of the first table)
- in the `ON` statement we define the primary key of the second table first, and then a foreign key in the first table

## ALTERNATE FORMS OF `JOINS` SYNTAX

- sometimes it makes a difference which table is defined first and which is defined as a second, and sometimes it doesn't

## PRECISE FIELD REFERENCING SYNTAX

- `id` field exists in both tables (photos and comments), therefore in order to avoid an error we must specify which field (from which table) we are looking for

```sql
SELECT photos.id
FROM photos
JOIN comments ON photos.id = comments.photo_id;
```

## RENAMING FIELD NAMES FOR EXTRA PRECISION

```sql
SELECT comments.id AS comments_id, photos.id AS photos_id
FROM photos
JOIN comments ON photos.id = comments.photo_id;
```

## RENAMING TABLE REFERENCES

- if a table is renamed, it can be refered with a new name already in the same query
- good practice

```sql
SELECT comments.id, p.id
FROM photos AS p
JOIN comments ON p.id = comments.photo_id;
```

## ALTERNATIVE SYNTAX FOR TABLE RENAMING

- bad practice

```sql
SELECT comments.id, p.id
FROM photos p
JOIN comments ON p.id = comments.photo_id;
```

## ERROR: `COLUMN REFERENCE "ID" IS AMBIGOUS`

`COLUMN REFERENCE "ID" IS AMBIGOUS` happens when two tables have the same field name and it's not clear which field we are refering to in our query.

## FOUR TYPES OF `JOINS`

## `INNER JOIN`

- this is a default `JOIN`
- `JOIN` is equal to `INNER JOIN`
- when there is no match between a foreign key and a primary key, the record will not be included in the result set

```sql
SELECT url, username
FROM photos
JOIN users ON users.id = photos.user_id;
```

![](./images/postgresql/inner_join.png)

## `LEFT OUTER JOIN`

- when there is no match between a foreign key and a primary key, the record from the FIRST (LEFT) table (the one defined in the `FROM` statement) will be included in the set, and the rest of the fields in the result set will be populated with `NULL` values
- order of the tables defined in the query MATTERS, switching tables will give different results

```sql
SELECT url, username
FROM photos
LEFT JOIN users ON users.id = photos.user_id;
```

![](./images/postgresql/left_outer_join.png)

## `RIGHT OUTER JOIN`

- when there is no match between a foreign key and a primary key, the record from the SECOND (RIGHT) table (the one defined in the `JOIN` statement) will be included in the set, and the rest of the fields in the result set will be populated with `NULL` values
- order of the tables defined in the query MATTERS, switching tables will give different results


```sql
SELECT url, username
FROM photos
RIGHT JOIN users ON users.id = photos.user_id;
```

![](./images/postgresql/right_outer_join.png)

## `FULL JOIN`

- when there is no match between a foreign key and a primary key, both records from both tables will be included as two separate records, and the rest of the fields of the added records will be populated with `NULL` value

```sql
SELECT url, username
FROM photos
FULL JOIN users ON users.id = photos.user_id;
```

![](./images/postgresql/full_join.png)

## COMBINING `WHERE` WITH `JOIN`

```sql
SELECT ulr, contents
FROM comments
JOIN photos ON photos.id = comments.photo_id
WHERE comments.user_id = photos.user_id;
```

## THREE-WAY `JOINS`

```sql
SELECT url, contents, username
FROM comments
JOIN photos ON photos.id = comments.photo_id
JOIN users ON users.id = comments.user_id AND users.id = photos.user_id
```

```sql
SELECT
  cli.first_name,
  cli.last_name,
  c.name,
  SUM(o_i.price) as total_amount
FROM categories AS c
JOIN products AS p
  ON c.id = p.category_id
JOIN order_items AS o_i
  ON p.id = o_i.product_id
JOIN orders AS o
  ON o.id = o_i.order_id
JOIN clients cli
  ON cli.id = o.client_id
GROUP BY 1, 2, 3
```

## SELF-JOIN

- both sides of `JOIN` reference the same table

```sql
SELECT
    band_member.nickname as member,
    leader.nickname as leader
FROM band_members as band_member
JOIN band_members as leader
ON band_member.band_leader_id = leader.id;
```

## `NON-EQUI JOIN`

Observe that the JOIN condition is a bit non-standard: it's a comparison instead of an equality. Such JOINs are called non-equi JOINs.

```sql
SELECT c1.rank, c1.suit,c2.rank,c2.suit
FROM playing_cards c1 
JOIN playing_cards c2 ON c1.id < c2.id  -- NON-EQUI JOIN HERE
ORDER BY c1.rank;
```

<https://learnsql.com/blog/illustrated-guide-sql-non-equi-join/>

## USING `JOIN` KEYWORD FOR JOINS IS NOT MANDATORY

```sql
JOINS WITHOUT `JOIN` KEYWORD

SELECT product.producer, product.model
FROM product, provider_offer, provider
WHERE provider_offer.product_id = product.id
  AND provider_offer.provider_id = provider.id
  AND product_category = 'bike'
  AND provider.country = 'USA';
```


## GROUPING AND AGGREGATE FUNCTIONS

## GROUPING USING `GROUP BY`

- `GROUP BY` finds a set of UNIQUE records for a given field and creates groups (buckets) for each of these unique items
- if there are several records for a particular group, these records are grouped into a subset and they are available from within the group
- essentially, `GROUP BY` creates a new table but the number of records and its contents remain the same, the only thing which changes is the order of the records within the result set 

Before

![](./images/postgresql/group_by_before.png)

After

![](./images/postgresql/group_by_after.png)


In `GROUP BY` we can only DIRECTLY select the same field which we define in `GROUP BY` clause. If we want to use other fields we need to use an AGGREGATE function.

Example

This is fine, because user_id is used twice

```sql
SELECT user_id
FROM comments
GROUP BY user_id;
```

And this one is going to raise an error:

```sql
SELECT contents
FROM comments
GROUP BY user_id;
```

## COMMON ERRORS

`ERROR: column "o.name" must appear in the GROUP BY clause or be used in an aggregate function`

## GROUP BY EXAMPLES

```sql
SELECT company, sum(revenue - production_cost) AS gross_profit_sum
FROM games
GROUP BY company
ORDER BY gross_profit_sum DESC;
```

```sql
SELECT company,
	   count(company) as number_of_games,
       sum(revenue) as revenue_sum 
FROM games
WHERE rating > 6 and (revenue - production_cost) > 0 and production_year BETWEEN 2000 AND 2009
GROUP BY company
HAVING sum(revenue) > 4000000;
```


## AGGREGATE FUNCTIONS

- aggregate functions takes a range of values and reduces them into a single value
- you can only use aggregate functions on a single field at once
- aggregate functions can't be nested

<https://www.postgresql.org/docs/15/functions-aggregate.html>

- `COUNT()`
- `SUM()`
- `AVG()`
- `MIN()`
- `MAX()`

```sql
SELECT MAX(id)
FROM comments;
```

## USING `GROUP BY` AND AGGREGATE FUNCTIONS TOGETHER

```sql
SELECT user_id, MAX(id)
FROM comments
GROUP BY user_id;
```

## `COUNT()`

- `NULL` values don't count in `COUNT()`

In order to count all records, also those including nulls, you `COUNT(*)`

```sql
SELECT COUNT(*) FROM photos;
```

```sql
SELECT user_id, COUNT(*)
FROM comments
GROUP BY user_id;
```

## `HAVING`

- `HAVING` is a filtering clause, similar to `WHERE`.
- `HAVING` always works with `GROUP BY` while `WHERE` works on raw data
- `HAVING` is used to filter set of groups (created by `GROUP BY`)
- most of the time `HAVING` uses an aggregate function as part of it's clause

```sql
SELECT photo_id, COUNT(*)
FROM comments
WHERE photo_id < 3
GROUP BY photo_id
HAVING COUNT(*) > 2;
```

## SORTING USING `ORDER BY`

- sorting is done in ascending order by default, however `ASC` keyword can be used for extra clarity
- sorting works on both numbers and strings

## `ASC` - SORTING BY ASCENDING ORDER (FROM SMALLEST TO LARGEST)

```sql
SELECT *
FROM products
ORDER BY price;
```

## `DESC` - SORTING BY DESCENDING ORDER (FROM LARGEST TO SMALLEST)

```sql
SELECT *
FROM products
ORDER BY price DESC;
```

## DOUBLE SORTING

```sql
SELECT *
FROM products
ORDER BY price, weight DESC;
```

## `OFFSET`

- `OFFSET` is used to skip the first x number of records, where x is defined by `OFFSET`

This query skips first 40 records from the result set.

```sql
SELECT *
FROM users
OFFSET 40;
```

## `LIMIT`

- `LIMIT` is used to limit the number of records to the the number specified by `LIMIT`

The following query skips the first 5 records from the result set

```sql
SELECT *
FROM users
LIMIT 5;
```

## USING `OFFSET` AND `LIMIT` TOGETHER

- they can be used together to display products in an e-commerce shop

Example: when we want to show the first page (first 20 products)

```sql
SELECT *
FROM products
ORDER BY price
LIMIT 20
OFFSET 0;
```

When we want to show the second page of products:

```sql
SELECT *
FROM products
ORDER BY price
LIMIT 20
OFFSET 20;
```

## RANK

## `UNION`, `INTERSECT` AND `EXCEPT`

- these three clauses are used on queries
- they are used to somehow filter results of two queries (usually on the same table)
- we can only use `UNION`, `INTERSECT` and `EXCEPT` if result sets of queries are the same of the same structure (same field names, and the same data types)

## `UNION`

- `UNION` joins result sets of two queries together
- if results of two queries which are in `UNION` have duplicate records, duplicates are removed and the record is included only once
- parentheses around queries are not mandatory but recommended
- we are only allowed to use `UNION` if result sets of queries are the same of the same structure (same field names, and the same data types)

```sql
(
  SELECT * FROM products
	ORDER BY price DESC
	LIMIT 4
)
UNION
(
	SELECT * FROM products
	ORDER BY price / weight DESC
	LIMIT 4
)
```

## `UNION ALL`

- if we don't want to remove duplicates but we want to keep all records, we should use `UNION ALL` instead

```sql
(
  SELECT * FROM products
	ORDER BY price DESC
	LIMIT 4
)
UNION ALL
(
	SELECT * FROM products
	ORDER BY price / weight DESC
	LIMIT 4
)
```

## DIFFERENCE BETWEEN `UNION` AND `JOIN`

- `JOIN` combines COLUMNS. If two tables are joined together, then the data from the first table is shown in one set of column alongside the second table's column in the the same row.
- `UNION` combines ROWS. If two tables are 'unioned' together, then the data from the first table is one set of rows, and data from the second table is another set. For that reason `UNION` can only be used on tables or results set if both of them have exactly the same columns.

![](./images/postgresql/join_vs_union.png)

<https://www.linkedin.com/pulse/sql-joins-vs-unions-nanthale-collins/>

## `INTERSECT`

- `INTERSECT` returns only those records which exist in result sets of both queries

```sql
(
  SELECT * FROM products
	ORDER BY price DESC
	LIMIT 4
)
INTERSECT
(
	SELECT * FROM products
	ORDER BY price / weight DESC
	LIMIT 4
);
```

## `INTERSECT ALL`

- `INTERSECT ALL` returns only those records which exist in result sets of both queries
- if record 1 is present in result set 1 twice and in result set also 2 twice (so four records accross two different result sets), then the `INTERSECT ALL` will return this record twice, or 3 times for 6 records (3 per each result set)

```sql
(
  SELECT * FROM products
	ORDER BY price DESC
	LIMIT 4
)
INTERSECT ALL
(
	SELECT * FROM products
	ORDER BY price / weight DESC
	LIMIT 4
);
```
## `EXCEPT`

- `EXCEPT` will return only those records which are present in the first query and ARE NOT present in the second query
- if there are records which exists in the second query and don't exist in the first query, they will not be returned. For that reason, order of queries matter for the `EXCEPT` clause.

![](./images/postgresql/except.png)

# SUBQUERIES

- subqueries (inner queries) are used to arrive a certain value which will be used as a 'variable' in a secondary query (outer query)
- subquery is returned first
- subquery doesn't require semi-colon at the end of it
- subquery is placed inside the parenthesis

```sql
SELECT name, price -- OUTER QUERY
FROM products
WHERE price > (
  SELECT MAX(price) -- SUBQUERY, INNER QUERY
  FROM products
  WHERE department = 'Toys'
)
```

We can use subqueries in many different locations, which make them challenging to use or understand in other people's code.

```sql
SELECT
  p1.name
  (SELECT COUNT(name) FROM products) -- source of value
FROM (SELECT * FROM products) as p1 -- source of records
JOIN (SELECT * FROM products) as p2 ON p1.id = p2.id -- source of records
WHERE p1.id IN (SELECT id FROM products); -- source of fields
```

In order to use subqueries effectively, it's necessary to understand the shape of the result set of the subquery.

EXAMPLES: SUBQUERY -> SHAPE

1. Full table shape. Both fields and records
2. An array of records. Many records from one field.
3. Scalar value/Scalar query. One record from one field.

Example 1:

```sql
SELECT * FROM orders;
```

![](./images/postgresql/full_shape_subquery.png)

Example 2:

```sql
SELECT id FROM orders;
```

![](./images/postgresql/array_subquery.png)

Example 3:

```sql
SELECT COUNT(*) FROM orders;
```

![](./images/postgresql/scalar_subquery.png)

## SUBQUERIES INSIDE OF A `SELECT` STATEMENT

Array Subquery

```sql
SELECT name, price, (
	SELECT price
	FROM products
  WHERE id = 3
)
FROM products
WHERE price > 867;
```

Scalar Subquery

```sql
SELECT MAX(price) -- returns a field and one value
FROM products
```

## SUBQUERIES INSIDE OF A `FROM` STATEMENT

- subquery of this type has to have an alias applied to it
- any subquery can be used inside the `FROM` statement as long as the result set is compatible with outer `SELECT` and `WHERE` statements. In other words, fields used in `SELECT` and `WHERE` statements must exist in the result set of the subquery

![](./images/postgresql/subquery_inside_from_statement.png)

Example 1

```sql
SELECT name, price_weight_ratio
FROM (
	SELECT name, price / weight AS price_weight_ratio
	FROM products
) AS p
WHERE price_weight_ratio > 5;
```

Example 2

```sql
SELECT *
FROM (SELECT MAX(price) FROM products) AS p;
```

Example 3

```sql
SELECT AVG(p.order_count) -- p. is not mandatory
FROM (
  SELECT user_id, COUNT(*) AS order_count
  FROM orders
  GROUP BY user_id
 ) AS p
 ```

 Example 4

 ```sql
SELECT MAX(p.avg_price) 
FROM (
  SELECT manufacturer, AVG(price) AS avg_price
  FROM phones
  GROUP BY manufacturer
) AS p
 ```

 ## SUBQUERIES IN A `JOIN` CLAUSE

 - any subquery that returns a data set compatible with the `ON` clause

```sql
SELECT first_name
FROM users
JOIN (
	SELECT user_id
	FROM orders
	WHERE product_id = 3
) AS o -- o is an alias for orders
ON o.user_id = users.id;
```

![](./images/postgresql/subquery_inside_join_clause.png)

## SUBQUERIES INSIDE A `WHERE` CLAUSE

- structure of data allowed in the subquery depends on the comparison operator (eg. a single column of records can be used with `IN` operator)
- these types of subqueries are very useful

Example 1

```sql
SELECT id
FROM orders
WHERE product_id IN (
  SELECT id
  FROM products
  WHERE price / weight > 50
);
```

Example 2

```sql
SELECT name, price
FROM products
WHERE price > (
	SELECT AVG(price)
	FROM products
);
```

![](./images/postgresql/data_structures_compatible_with_where_clause.png)

## `NOT IN` OPERATOR WITH A `WHERE` CLAUSE SUBQUERY

```sql
SELECT name, department
FROM products
WHERE department NOT IN (
  SELECT department
  FROM products
  WHERE price < 100
);
```

## `ALL` OPERATOR WITH A `WHERE` CLAUSE SUBQUERY

```sql
SELECT name, department, price
FROM products
WHERE price > ALL (
  SELECT price
  FROM products
  WHERE department = 'Industrial'
);
```

## `SOME` OPERATOR WITH A `WHERE` CLAUSE SUBQUERY

- `SOME` is an alias of `ANY`, they can be used interexchangably

Example

`50 < SOME` vs (20,100) will return True, because 50 is largest than some (or any) of the two values. In this case 50 is greater than 20.

```sql
SELECT name, department, price
FROM products
WHERE price > SOME (
  SELECT price
  FROM products
  WHERE department = 'Industrial'
)
```

## CORRELATED SUBQUERIES

- correlated subqueries are subqueries which use aliases to correlate values between two separate subqueries, in order to make some kind of comparison between records
- correlated subqueries are similar to nested loops, as some value from an outer loop is passed to an inner loop for a comparison
- we can use correlated subqueries inside `SELECT`, `FROM`, `WHERE` and `JOIN`, we can use it everywhere

Example: for each row of the outer query, 'where subquery' will be run 

```sql
SELECT name, department, price
FROM products AS p1 -- alias is necessary, outer query, p1 is passed as a variable to inner query
WHERE p1.price = (
  SELECT MAX(price)
  FROM products AS p2 -- alias is necessary, inner query/subquery
  WHERE p1.department = p2.department
);
```

Example 2: 'select subquery' will be run for every row in the outer query.

```sql
SELECT p1.name, (
  	SELECT COUNT(*)
  	FROM orders AS o1
  	WHERE o1.product_id = p1.id
  ) AS num_orders
FROM products AS p1
```

## USING CORRELATED SUBQUERY TO RUN A 'SELECT QUERY' WIHOUT ANY `FROM` CLAUSE

- in order to achieve this, a subquery have to return a single value (a subquery has to be a scalar subquery)

Example

```sql
SELECT (
	SELECT MAX(price)
  FROM products
);
```

Example 2

```sql
SELECT (
	SELECT MAX(price)
  FROM products
) / (
  SELECT AVG(price)
  FROM products
);
```

Example 3

```sql
SELECT (SELECT MAX(price) FROM phones) AS max_price,
       (SELECT MIN(price) FROM phones) AS min_price,
       (SELECT AVG(price) FROM phones) AS avg_price;
```

## MORE SUBQUERY EXAMPLES

```sql
SELECT name
FROM orchestras
WHERE year > (
	SELECT year
  	FROM orchestras
  	WHERE name = 'Chamber Orchestra'
) AND rating > 7.5;

SELECT name
FROM orchestras
WHERE city_origin = ANY(
	SELECT city
  	FROM concerts
  	WHERE year = 2013
);
```

```sql
SELECT avg(count.count)
FROM (
  SELECT o.name, count(m.id)
  FROM members AS m
  JOIN orchestras AS o ON m.orchestra_id = o.id
  GROUP BY o.name
) count;
```

```sql
SELECT o.name, count(m.id)
FROM members as m
JOIN orchestras as o ON m.orchestra_id = o.id
GROUP BY o.name
HAVING count(m.id) > (
  SELECT avg(count.count)
  FROM (
  	SELECT o.name, count(m.id)
  	FROM members AS m
  	JOIN orchestras AS o ON m.orchestra_id = o.id
  	GROUP BY o.name
) count);
```

## MORE EXAMPLES OF CORRELATED SUBQUERIES

```sql
SELECT m.name, m.wage, m.experience
FROM members m
JOIN orchestras o ON m.orchestra_id = o.id
WHERE m.wage = (
  SELECT max(m2.wage)
  FROM members m2
  JOIN orchestras o2 ON m2.orchestra_id = o2.id
  GROUP BY o2.name
  HAVING o.name = o2.name
  );
```

```sql
SELECT m1.name as member, o1.name as orchestra
FROM members m1
JOIN orchestras o1 ON m1.orchestra_id = o1.id
WHERE m1.experience = (
  SELECT max(m2.experience)
  FROM members m2
  JOIN orchestras o2 ON m2.orchestra_id = o2.id
  GROUP BY o2.name
  HAVING o1.name = o2.name
  );
```

```sql
SELECT m1.name
FROM members m1
JOIN orchestras o1 ON m1.orchestra_id = o1.id
WHERE m1.wage > (
  SELECT avg(m2.wage)--, m2.position
      FROM members m2
      JOIN orchestras o2 ON m2.orchestra_id = o2.id
      WHERE m2.position = 'violin'
      GROUP BY o2.name
  	  HAVING o1.name = o2.name
  );
```

## SELECTING `DISTINCT` VALUES

- `DISTINCT` keyword is always placed inside the `SELECT` clause
- `DISTINCT` provides a list of unique values inside a specific field
- useful in the exploratory phase of database analysis


```sql
SELECT DISTINCT department
FROM products;
```

```sql
SELECT COUNT(DISTINCT department)
FROM products;
```

## USING `DISTINCT` TO FIND A LIST OF UNIQUE COMBINATIONS OF RECORD VALUES FROM MULTIPLE FIELDS

- we can't make `COUNT()` in this case

```sql
SELECT DISTINCT department, name
FROM products;
```

## UTILITY OPERATORS

## `GREATEST`

```sql
SELECT GREATEST(200, 10, 30);
```

```sql
SELECT GREATEST(30,
  (SELECT MAX (price * weight) FROM products)
);
```

## `LEAST`

```sql
SELECT LEAST(1000, 20, 50, 100)
```

```sql
SELECT name, price, LEAST (400, price * 0.5)
FROM products;
```

## `CASE KEYWORD`

- if none of the conditions is satisfied, `NULL` is returned

```sql
SELECT name, price,
  CASE
  	WHEN price > 600 THEN 'high'
    WHEN price > 300 THEN 'medium'
    ELSE 'cheap'
  END
 FROM products;
```
## DATABASE-SIDE VALIDATION

## RECORD LEVEL VALIDATION

- is a given value defined at all?
- is provided value unique?
- is provided value larger, smaller, equal, not equal to?

## APPLYING `NOT NULL` CONSTRAINT

- apply during table creation

```sql
CREATE TABLE products (
  price INTEGER NOT NULL
);
```

- after table was created
- if there is already a `NULL` value inside the table, this query will return an error

```sql
ALTER TABLE products
ALTER COLUMN price
SET NOT NULL;
```

## `DEFAULT` COLUMN VALUES

- apply during table creation

```sql
CREATE TABLE products (
  price TIME DEFAULT '00:01 AM'
);
```

- apply after table was created

```sql
ALTER TABLE products
ALTER COLUMN price
SET DEFAULT 9999;
```

## COMBINING A `DEFAULT` AND `NOT NULL` IN ONE CONSTRAINT

- we can combine these two constraints in order to provide an empty string as minimum (when user decides to not add a bio)
- this can be useful for server processing, for example, in Javascript when we run len(x), an empty string would give us value of 0, while `NULL` would raise an error

```sql
CREATE TABLE users (
  bio VARCHAR(400) NOT NULL DEFAULT ''
)
```

## APPLYING A `UNIQUE` CONSTRAINT TO ONE COLUMN

- before table is created

```sql
CREATE TABLE products (
  name VARCHAR(50) UNIQUE
);
```

- applying after table was created
- this constraint can only be added if there are no duplicates in the specified column (all values are already unique)

```sql
ALTER TABLE products
ADD UNIQUE(name);
```

## REMOVING CONSTRAINTS

```sql
ALTER TABLE products
DROP CONSTRAINT products_name_key;
```

## MULTICOLUMN UNIQUENESS

- multi-column uniqueness constraint works over several column
- unique value in the same column is accepted as long as corresponding values in the other column or columns are different, eg. "Shirt, Light Clothes" and "Shirt, Heavy Clothes" are acceptable 

```sql
ALTER TABLE products
ADD UNIQUE (name, department);
```

## CHECK VALIDATION

- `CHECK` constraint tests the row of a single column (or multiple columns if specified) against logical expression, which SQL calls a search condition, and rejects rows whose search condition returns `FALSE`. However, the constaint accepts rows when the search condition returns `TRUE` or `UNKNOWN`. This is not the same rule as the `WHERE` clause, which rejects rows that test `UNKNOWN`.
- syntax if table wasn't created yet
- while it optional, it's a really good idea to use a contraint name. Without it, most SQL implementations will create a huge, ugly, unreadable random string for the name, since they need to have one in the schema tables

```sql
CREATE TABLE products (
  price INTEGER CHECK (price > 0)
);
```
- syntax after table was already created
- it's only possible to add this check constraint if existing records in the table already pass the constraint
- it's not possible to use subqueries within `CHECK` constraints statements

```sql
ALTER TABLE products
ADD CHECK (price > 0);
```

```sql
CREATE TABLE ratings (
  CHECK (ratings BETWEEN 1 AND 10)
)
```

```sql
CREATE TABLE sex_codes (
  CHECK (sex_code IN (0, 1, 2, 9))
)
```

```sql
CREATE TABLE posts (
  latitude REAL CHECK (latitude IS NULL OR (latitude >= -90 AND latitude <= 90>))
)
```

## CHECK VALIDATION OF MULTIPLE COLUMNS

```sql
CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  name VARCHAR(40),
  created_at TIMESTAMP NOT NULL,
  est_delivery TIMESTAMP NOT NULL,
  CHECK (created_at < est_delivery)
);
```

## HOW TO CHECK TWO VALUES IN TWO SEPARATE COLUMNS, IF THERE IS ALWAYS A VALUE IN ONE OF THEM, AND NEVER THERE ARE NO VALUES OR TWO VALUES AT THE SAME TIME?

```sql
CHECK
(
  COALESCE((post_id)::BOOLEAN:INTEGER, 0)
  +
  COALESCE((comment_id)::BOOLEAN:INTEGER, 0)
)
```

## WHERE SHOULD WE ADD VALIDATIONS?

WEB SERVER LEVEL
- most of the validation rules, non-critical ones should be applied at the web server level
- easier to express more complex validations
- far easier to apply new validation rules
- many libraries handle validations automatically

DATABASE LEVEL
- critical validation rules should be applied at the database level
- validation still apply even if you connect from a different client
- guaranteed that validation is always applied
- can only apply new validation rules if all existing rows satisfy it

## DATABASE STRUCTURE DESIGN PATTERNS

1. Polymorphic association
2. Separate column for each 'reaction' type
3. Separate table for each 'reaction' type

Disclaimer: 'reaction' here refers to a reaction type on a social media post (likes, loves, sads). These patterns were considered as possible solutions to implement a reaction system in a social media site.

## POLYMORPHIC ASSOCIATIONS

- they are not recommended to use, but they are used in practice quite often
- it's a situation where a column in one table refers to more than one table, but the reference is not enforced using foreign and private keys
- in this case, the task of figuring out to which referenced tables, the base table is referring to is outside of SQL (mearning is deciphered by server or client)
- IMPORTANT: foreign key can't be used in polymorphic association
- polymorphic association results in data inconsistency (and for that reason is not recommended)

## RATIONALE FOR CHOOSIGN DIFFERENT DESIGNS

1. When deciding whether to go for a solution with one table and extra columns or two tables, it's important to consider whether rate of query for each table is going to be different. If so, it is advisable to go for two tables solution because performance efforts can be applied to one table only. The one requiring it.

2. Another important consideration is expectation of future changes to any of the tables (due to change or further development of features). If you think it's likely that at least one of the tables can be modified in the future (by adding extra column), it is advisable to go for two tables solution. In this solution it is possible to change only one table. Doing this has two benefits: the second functionality will not be affected. Second, it's also about segregation of responsibilities. One program should be responsible for one behavior only.

## DERIVED DATA

- derived data is data which is not stored separately in a table, instead is calculated/queried on demand, it's derived from other existing data
- eg. number of followers is derived from followers table, the total number itself is not stored separately

## `COALESCE` FUNCTION

- `COALESCE` looks at the values which are provided as arguments and it returns the first value which is not `NULL`

```sql
SELECT COALESCE(NULL, 5); -- returns 5
```

```sql
SELECT COALESCE(NULL, 5, 8); -- returns 5
```

```sql
SELECT COALESCE(10, 5); -- returns 10
```

## USING `COALESCE` TO TURN DIFFERENT NUMERIC VALUES INTO ZERO OR ONE

```sql
SELECT COALESCE((post_id)::BOOLEAN:INTEGER, 0)'
```

## ADVANCED TOPICS

## `SHOW` KEYWORD

- `SHOW` shows a particular piece of Postgres configuration

## `SHOW data_directory`

- show where Postrgres stores data on the local machine

```sql
SHOW data_directory; -- C:/Program Files/PostgreSQL/15/data
```

## HOW TO GET A LIST OF DATABASE NAMES WITH CORRESPONDING IDENTIFIERS (`OID`)?

```sql
SELECT oid, datname
FROM pg_database;
```

## HOW TO GET A LIST OF ALL FILES STORED ON A LOCAL MACHINES WITH CORRESPONDING IDENTIFIERS (`OID`)?

```sql
SELECT * FROM pg_class;
```

## HOW IS DATA STORED IN POSTRESQL?

HEAP/HEAP FILE

- a file that contains all the data (rows) of a particular table
- heap data structure is not the same as heap file
- each heap file consists of several blocks
- 'users' table (OID: 17002) is a heap file

BLOCK/PAGE

- a heap file is divided into many different blocks or pages. Each page/block stores some number of rows
- each block consists of several different tuples/items
- each block is 8kb in size

![](./images/postgresql/block_structure.png)

![](./images/postgresql/block_binary.png)

TUPLE/ITEM

- individual row from the table

![](./images/postgresql/heap_block_tuple.png)

## PERFORMANCE - HOW PERFORMANCE OF SQL CAN BE IMPROVED?

1. Use faster storage. Instead of HDD, use SDD drives.
2. Processors. Use better and more processors.
3. Memory. Add more RAM, so more operations can be done in the RAM space, instead of in hard drives.
4. Network. In case you have plenty of traffic, analyse your traffic and improve load-balancing.
5. Use latest version of RDBMS software.
6. Tweaking configuration files.
7. Restructuring database schema for better performance.
8. Use Automatic Performance Improvement Tool. These tools suggest perfomance improvements based on automatic tests and analysis of your queries.
9. Dedicate particular machines to database only.
10. Reduce or eliminate unclosed connections.
11. Improve queries.
12. Replace sequential scan queries with index queries.

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

## FULL TABLE SCAN VS INDEX SCAN

- FULL TABLE SCAN - every time Postgresql loads records from hard drive to RAM, it has a relatively high performance cost
- items in an index structure are stored ordered (numerical order for numbers, alphabetical order for strings)

## INDEX - HOW IT'S STRUCTURED AND HOW IT WORKS

- Index is a data structure that efficiently tells us what block/item a record is stored at 
- most common index is a B-Tree index

![](./images/postgresql/index_structure.png)

## CREATING AN INDEX

- if you don't specify a name for an index, a name will be assigned automatically (eg. in the following example, the name of the index will be `users_username_idx`)

```sql
CREATE INDEX ON users(username); -- users is the name a table and username is a name of a column
```

```sql
CREATE INDEX users_username_idx ON users(username);
```

## DELETING AN INDEX

```sql
DROP INDEX users_username_idx;
```

## BENCHMARKING

- running the same query on indexed vs unindexed records can improve performance 10x
- the following query was tested, and performance without index was 0.50ms, and performance with index was 0.05ms

```sql
EXPLAIN ANALYZE SELECT * FROM users
WHERE username = 'Emil30'
```

## DOWNSIDES OF INDICES

- creating indices increases storage space and this can be very costly on large databases stored on cloud servers (or even locally, as it will require more hard drives, machines and DevOps engineers)
- indices slow down `INSERT/UPDATE/DELETE` operations because indices have to be updated after every single one of these operations
- users may not use an index alltogether

## GET SIZE OF A COLUMN

```sql
SELECT pg_size_pretty(pg_relation_size('users'));
```

## INDEX TYPES

- B-TREE INDEX - standard index, used 99% of the time, described in the section above

- HASH - speeds up simple equality checks

- GiST - geometry, full text search

- SP-GiST - clustered data, such as dates - many rows might have the same year

- GIN - for columns that contain arrays or JSON data

- BRIN - specialized for really large datasets

## AUTOMATICALLY GENERED INDICES

- PostrgreSQL automatically creates an index for the primary key column of every table, `column_name_pkey`
- PostgresSQL automatically creates an index for any `UNIQUE` constrained column, `column_name2_key`
- these indices don't get listed in the PGAdmin

## SHOW ALL INDICES (INCLUDING HIDDEN)

```sql
SELECT relname, relkind
FROM pg_class
WHERE relkind = 'i';
```

## POSTGRES EXTENSIONS

- extensions are out-of-the-box applications which gives us extra functionalities in PostrgreSQL

## `pageinspect` EXTENSION

```sql
CREATE EXTENSIONS pageinspect;
```

## DISPLAY INFORMATION ABOUT A PARTICULAR INDEX (B-TREE)

```sql
SELECT *
FROM bt_metap('users_username-idx')
```

- `bt` stands for B-Tree
- `metap` stands for meta page 

## `CTID` IDENTIFIER

```sql
SELECT ctid, *
FROM users
WHERE username = 'aali'; 
```

`CTID` is an identifier inside of an index. It has two separate storage conventions for two separate data types. 
- if stored data is a row (tuple), then `ctid` points out to where a particular row is stored within a block
- ctid is hidden unless specifically required by a query

ctid: (33, 43) -- page 33 in a heap, index 43 in a heap

## QUERY TUNING

## HOW QUERY IS EXECUTED?

1. Parsing (checking syntax, building a query tree)
2. Rewriting (taking a query tree and decomposing views into underlying table references)
3. Planner (finding the best possible to fetch data). Most important for the performance tuning.
4. Executer (runing the query)

## `EXPLAIN` KEYWORD

- `EXPLAIN` builds a query plan and displays info about it
- this keyword is not used for performance evaluation, it's never used in production

```sql
EXPLAIN SELECT username, contents
FROM users
JOIN comments ON comments.user_id = users.id
WHERE username = 'Alyson14';
```

## `EXPLAIN ANALYZE` KEYWORD

- `EXPLAIN ANALYZE` builds a query plan, runs it and displays info about it
- this keyword is not used for performance evaluation, it's never used in production

```sql
EXPLAIN ANALYZE SELECT username, contents
FROM users
JOIN comments ON comments.user_id = users.id
WHERE username = 'Alyson14';
```

## QUERY PLAN

- Query Plan is a query execution plan provided by PostgreSQL
- Query Plan is shown by running `EXPLAIN` or `EXPLAIN ANALYZE` queries

## SEQUENTIAL SCAN

- accessing all the rows of a given table

## ANALYSING QUERY PLAN

- `->` - a query node; it's a step where we access some data or we are doing some processing
- top line of the query plan is also a query node even thought is not marked with `->`
- we start by analysing the inner most steps
- when an inner most step is executed, it returns a result to the parent node

![](./images/postgresql/query_plan_analysis.png)

## `Hash Join` OPERATION

- `Hash Join` is telling us we are either accessing or processing data
- `cost` - we also see the amount of processing power required to perform this single step
- `rows` - an estimate at how many rows this step will produce
- `width` - an estimate at the average number of bytes of each row

![](./images/postgresql/hash_join.png)

## `COST` OF OPERATIONS (PERFORMANCE)

- `cost` is an estimate of amount of time to execute some of the query
- in order to make this estimate PostgreSQL takes a number of row and number of pages, and apply some estimatation ratios to each, in order to arrive at the estimation cost
- seqential scan executes in O(n)
- indexing executes in O(1)
- costs flow up (therefore a cost of a parent node includes the cost of its children)

![](./images/postgresql/cost_estimation.png)

## ACTUAL `COST` ESTIMATION RATIOS

- these values are constant (defined in PostgreSQL) and will remain constant unless you change them manually
- `seq_page_cost`, sequential page cost is a base value of 1, all other costs are relative to `seq_page_cost`

![](./images/postgresql/actual_cost_estimation_ratios.png)

<https://www.postgresql.org/docs/current/runtime-config-query.html>

## START-UP AND TOTAL COST

![](./images/postgresql/startup_total_cost.png)

## WHERE TO USE AN INDEX AND WHERE TO USE SEQUENTIAL SCAN?

- index is useful for finding a relatively small sample of a large population, if you are looking for a large sample out of a large population it makes more sense to use sequential index
- PostgreSQL will choose which method is more efficient (index or sequential scan) based on it's internal cost estimation

## COMMON TABLE EXPRESSIONS - `WITH` KEYWORD

- we define it with a `WITH` keyword in front of a main query
- `CTE` produces a virtual table
- `CTE` are used to make queries easier to read
- `CTE` is kind of a syntactic sugar
- `CTE` can be used to write recursive queries, which are otherwise impossible to express in plain SQL
- cost of running a `CTE` or a normal query is the same

```sql
SELECT users.username, tags.created_at
FROM users
JOIN (
	SELECT user_id, created_at FROM caption_tags
	UNION ALL
	SELECT user_id, created_at FROM photo_tags
) AS tags ON tags.user_id = users.id
WHERE tags.created_at < '2010-01-07';
```

```sql
WITH tags AS (
	SELECT user_id, created_at FROM caption_tags
	UNION ALL
	SELECT user_id, created_at FROM photo_tags
)

SELECT username, tags.created_at
FROM users
JOIN tags ON tags.user_id = users.id
WHERE tags.created_at < '2010-01-07';
```

## RECURSIVE COMMON TABLE EXPRESSIONS - `WITH RECURSIVE`

- it's very different to a simple `CTE`
- you will use a recursive CTE every time you work on a tree like or graph-type data structure (may represent some type of hierarchy)
- they must use `UNION` keyword
- recursive `CTE`s are one of the most challenging parts of SQL
- there are two virtual tables created during execution of recursive `CTE`, the results table and the working table
- query in the recursive `CTE` (before `UNION` keyword) is a non-recursive query and it's run only once (before the recursive function runs) and is used to populate the the results table AND the working table with some initial records
- query after the `UNION` keyword is a recursive query and is run several time based on the `WHERE` condition and some statement which modifies a condition (eg. `depth + 1`)
- columns of both of these tables are defined by the arguments passed into the recursive `CTE` name (eg. `WITH RECURSIVE rec_cte_name(column1, column2, column3)`)
- after the recursive query returns final results, the results set is renamed to a name of the recursive CTE and becames a table which the final query is run against

```sql
WITH RECURSIVE countdown(val) (
  SELECT 3 AS val -- Initial, non-recursive query
  UNION
  SELECT val - 1 FROM countdown WHERE val > 1 -- Recursive query
)
SELECT *
FROM countdown;
```

```sql
WITH RECURSIVE suggestions(leader_id, follower_id, depth) AS (
		SELECT leader_id, follower_id, 1 AS depth
		FROM followers
		WHERE follower_id = 1
	UNION
		SELECT followers.leader_id, followers.follower_id, depth + 1
		FROM followers
		JOIN suggestions ON suggestions. leader_id = followers.follower_id -- `suggestions` is the working table
		WHERE depth < 3
)
SELECT DISTINCT users.id, users.username
FROM suggestions
JOIN users ON users.id = suggestions.leader_id
WHERE depth > 1
LIMIT 30;
```

## MECHANICS OF A RECURSIVE QUERY

![](./images/postgresql/mechanics_of_recursive_queries.png)

## USE CASE FOR A RECURSIVE CTE

- recursive CTEs are used in tree and graph likes data structures, for example to find a suggestion for a particular user inside a tree of people he follows on Instagram, and other people these other people follow
- eg. I follow 'The Rock' and 'The Rock' follows 'Jennifer Lopez' and 'Snoop Dogg' and 'Snoop Dogg' follows 'Dr Dre' and 'Eminem'

## HOW TO MERGE TWO TABLES INTO ONE (AND DELETE THE ONES WE DON'T NEED ANYMORE)?

MANUAL APPROACH

- this approach can work by have some major downsides
- original IDs are not copied, therefore any existing queries which rely on these IDs will break

1. Create a new table with column (and their corresponding data types and constraints) which exactly match the structure of the tables which will be merged into.

```sql
CREATE TABLE tags (
	id SERIAL PRIMARY KEY,
	created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
	user_id INTEGER NON NULL REFERENCES users(id) ON DELETE CASCADE,
	post_id INTEGER NON NULL REFERENCES posts(id) ON DELETE CASCADE,
	x INTEGER,
	y INTEGER
);
```

2. Select only those columns from table 1 which are not automatically entered (don't choose the primary key) and insert them into the newly created table.

```sql
INSERT INTO tags(created_at, updated_at, user_id, post_id, x, y)
SELECT created_at, updated_at, user_id, post_id, x, y
FROM photo_tags;
```

3. Repeat the same process for table 2

```sql
INSERT INTO tags(created_at, updated_at, user_id, post_id, x, y)
SELECT created_at, updated_at, user_id, post_id, x, y
FROM caption_tags;
```

4. Delete two original tables

## `VIEW`
'
- `VIEW` is a virtual table which access to data from different tables in the database
- it is used to merge tables together without deleting the original tables
- because it's virtual, it's created everytime is used which guarantees that data in the merged, virtual table is always up to date
- very similar to Common Table Expression, however a view is not attached to any particular query, it can be reused over several queries at any point in time
- we can `UNION` or `JOIN` or any other query inside a view, they can also use computed values
- views can be used to make other queries more readable and are often used to write repeatable queries as 'save' them as a variable (as a view)

## CHANGING A `VIEW`

```sql
CREATE OR REPLACE VIEW recent_posts AS (
  SELECT *
  FROM posts
  ORDER BY created_at DESC
  LIMIT 15
)
```

## DELETING A `VIEW`
```sql
DROP VIEW recent_posts;
```

## `MATERIALIZED VIEW`

- a view is a query that gets executed every time you refer to it
- a materialized view gets executed only at very specific times, but the results are saved and can be referencd without rerunning the query

```sql
CREATE MATERIALIZED VIEW weekly_likes AS (
  SELECT 
	date_trunc('week', COALESCE(posts.created_at, comments.created_at)) AS week,
	COUNT(posts.id) AS likes_on_posts,
	COUNT(comments.id) AS likes_on_comments
FROM likes
LEFT JOIN posts ON posts.id = likes.post_id
LEFT JOIN comments ON comments.id = likes.comment_id
GROUP BY week
ORDER BY week
)
WITH DATA

SELECT * FROM weekly_likes;
```

## UPDATING `MATERIALIZED VIEW`

```sql
REFRESH MATERIALIZED VIEW weekly_likes;
```

## DIFFERENCE BETWEEN COMMON TABLE EXPRESSIONS AND VIEWS

- views can be indexed but CTE can't (for that reason CTEs don't store statistics)
- CTE works excellent on tree hierarchies (recursive CTE)
- views being a physical object on database (but does not store data physically) and can be used on multiple queries, thus provide flexibility and centralized approach
- CTE, on the other hand, are temporary and will be created when they are used (sometimes CTEs are called inline views)
- CTEs can be used encapsulated by a view when a recursive functionality is used repeatadly, and therefore it can used accross the code base

<https://stackoverflow.com/questions/30918633/sql-cte-vs-view>

## `TRANSACTIONS`

- transactions are useful when we have to run multiple operations, and we can only accept these operations if ALL of them were succesful
- if even one operation failed, we cancel all other succesful operations
- every `CONNECTION` in Postgres has it's own copy of a database environment
- `LOCKED RECORDS` - when a record was modified during a transaction, no other transaction or even the main connection will not be able to access to that record until first transaction commits or rolls back

## OPENING A TRANSACTION SESSION

- when a transaction opens, it opens in a separate connection with a copy of the whole database environment, all tables
- therefore, when a transaction session starts, a new environment (a copy) is created and therefore after the session is opened, two separate copies of the database exist

```sql
BEGIN; 
```

## `COMMIT`

```sql
COMMIT;
```

- if all operations has been succesful, you can run `COMMIT` query in order to merge the copy with the original image (root image)

## `ROLLBACK`

- if you make an error, session state will change to `aborted` and you have to `ROLLBACK` to the original database image
- if a session is in `aborted` state you will not be able to run any more queries/operations in this session anymore
- in order to restore the ability to run queries again, you have to rollback to the valid state

```sql
ROLLBACK;
```

## SCHEMA MIGRATIONS

Schema migration file is a code that describes precise changes we want to make to the database.

- it can be written in any programming language
- there are langugage specific libraries to support creation of migration files
- migration files are generated from CLI, and then newly created files can be edited to add upgrade and downgrade code in either a programming language of your choice or SQL
- UP/UPGRADE PART - contains a statement that advances, or upgrades the structure of the database
- DOWN/DOWNGRADE PART - contains a statement that exactly undos the 'UP' command, or reverts to the previous stage of the database
- any project can have multiple migration files, so you need an identifier for each of them
- it is highly recommend to write schema migrations files in SQL if you have enough knowledge about SQL, because programming language libraries make intrinsic assumptions about the actual SQL code you want to generate (which is not always in line with what you want to generate)
- schema migrations are typically performed using transactions

![](./images/postgresql/schema_migration.png)

BIG LESSONS

1. Changes to the database and changes to clients need to be made at precisely the same time

2. When working with other engineers, we need a really easy way to tie the structure of our database to our code

## MIGRATING DATA USING PROGRAMMING LANGUAGES LIBRARIES - PROCESS

- different programming languages offer different libraries supporting database migrations from CLI or scripts

INSIDE A NODE.JS PROJECT

ADD A SYSTEM VARIABLE IN ORDER TO CONNECT TO POSTGRES

```powershell
$env:DATABASE_URL="postgres://username:password@localhost:5432/socialnetwork";
```

CREATE A MIGRATION FILE

```powershell
npm run migrate create migration name
```

EDIT A MIGRATION FILE

```js
exports.up = pgm => {
  pgm.sql(`
    CREATE TABLE comments (
      id SERIAL PRIMARY KEY,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      contents VARCHAR(240) NOT NULL
    );
  `)
};

exports.down = pgm => {
  pgm.sql(`
    DROP TABLE comments;
  `)
};

```

MIGRATE A MIGRATION

Following command will run ALL uncommited migrations not only the most recent one.

```powershell
npm run migrate up
```

After a succesful migration, migration library will create a table in Postgres called `pgmigrations` which will store a table of all executed migrations along with their execution time.

## CODE REVIEW REQUEST

![](./images/postgresql/code_review_request.png)

## WHEN A CONNECTION CRASHES

- when a connection crashes, Postgres will automatically rollback to the original state

## DATA MIGRATION

- difficult topic in database world
- there are several reasons to not run data migrations at the same time as schema migrations
- one reason is that a production server is still running during migration transaction which can result in a loss of data which was added to the database between the time when a migration was started and when it was completed
- it's possible to run schema and data migrations as one migration file or separate migrations files
- data migrations are typically done using transactions

## DESIGN STYLE FOR SCHEMA AND DATA MIGRATIONS

1. Add a new column
2. Deploy a new version of server code, so new entries are inserted into both old and columns
3. Copy values from old columns to a new column (new format)
4. Deploy a new version of server code, so new entries are inserted into the the new columns only
5. Drop old columns

## ACCESSING POSTGRES FROM API


- CLIENT - it's responsible for a single query to a database, usually a class provided by a library

- POOL - it's a collection of clients, usually a class provided by a library

```js
const pg = require('pg');

class Pool {
  _pool = null;

  connect(options) {
    this._pool = new pg.Pool(options);
    return this._pool.query('SELECT 1 + 1;');
  }

  close() {
    return this._pool.end();
  }

  // REALLY BIG SECURITY ISSUE HERE
  query(sql) {
    return this._pool.query(sql);
  }

}

module.exports = new Pool();
```

- CONNECTION - it's a piece of code responsible for establishing a connection between an API server and a database

```js
pool.connect({
  host: 'localhost',
  port: 5432,
  database: 'socialnetwork',
  user: 'username',
  password: 'password'
})
  .then(() => {
    app().listen(3005,  () => {
      console.log('Listening on port 3005');
    });
  })
  .catch((err) => console.log(err));
```

- CONNECT - a method of a client or a pool class which takes credentials and database details arguments and connects to a database

```js
  connect(options) {
    this._pool = new pg.Pool(options);
    return this._pool.query('SELECT 1 + 1;');
  }

```

- CLOSE - a method of a client or a pool which disconnects from a database

```js
  close() {
    return this._pool.end();
  }
```

## COMPLETE REST-BASED IP IMPLEMENTATION

`users.js` ROUTING

```js
const express = require('express');
const UserRepo = require('../repos/user-repo');
const toCamelCase = require('../repos/utils/to-camel-case');

const router = express.Router();

router.get('/users', async (req, res) => {

  const users = await UserRepo.find();

  res.send(users);

});

router.get('/users/:id', async (req, res) => {
  const { id } = req.params;

  const user = await UserRepo.findById(id);

  if (user) {
    res.send(user);
  } else {
    res.sendStatus(404);
  }

});

router.post('/users', async (req, res) => {
  const { username, bio } = req.body;

  const user = await UserRepo.insert(username, bio);

  res.send(user);
});

router.put('/users/:id', async (req, res) => {
  const { id } = req.params;
  const { username, bio } = req.body;

  const user = await UserRepo.update(id, username, bio);

  if (user) {
    res.send(user);
  } else {
    res.sendStatus(404);
  }
});

router.delete('/users/:id', async (req, res) => {
  const { id } = req.params;

  const user = await UserRepo.delete(id);

  if (user) {
    res.send(user);
  } else {
    res.sendStatus(404);
  }
});

module.exports = router;
```

`user-repo.js` REPOSITORY PATTERN IMPLEMENTATION

```js
const pool = require('../pool')
const toCamelCase = require('./utils/to-camel-case')
 
class UserRepo {
  static async find() {
    const { rows } = await pool.query('SELECT * FROM users;')
    return toCamelCase(rows)
  }
 
  static async findById(id) {
    const { rows } = await pool.query(
      'SELECT * FROM users WHERE id = $1;', [id]
    );

    return toCamelCase(rows)[0];
  }
 
  static async insert(username, bio) {
    const {rows } = await pool.query('INSERT INTO users (username, bio) VALUES ($1, $2) RETURNING *;', 
    [username, bio]
    );

    return toCamelCase(rows)[0];
  }
 
  static async update(id, username, bio) {
    const { rows } = await pool.query(
      'UPDATE users SET username = $1, bio = $2 WHERE id = $3 RETURNING *;',
      [username, bio, id]
    );

    return toCamelCase(rows)[0];
  }

  static async delete(id) {
    const { rows } = await pool.query(
      'DELETE FROM users WHERE id = $1 RETURNING *;', [id]
    );

    return toCamelCase(rows)[0];
  }
}
 
module.exports = UserRepo
```

```http
http://localhost:3005/users

###

http://localhost:3005/users/1

###

POST http://localhost:3005/users HTTP/1.1
content-type: application/json

{
  "username": "minty3",
  "bio": "I'm a mint"
}

###

PUT http://localhost:3005/users/1 HTTP/1.1
content-type: application/json

{
  "username": "Alyson1567",
  "bio": "I am alyson55"
}

###


DELETE http://localhost:3005/users/2 HTTP/1.1
content-type: application/json
```

## REPOSITORY PATTERN

- Repository Object is one signle object (usually a class with methods) with central access point to data from a particular table
- API calls correspond to standard REST methods + additional calls not defined by standards REST set

![](./images/postgresql/repository_pattern.png)

## SQL INJECTION EXPLOIT

- it's a security vulnerability where user-provided input (a form, url) is concatanated with additional SQL query which is executed by the database server with malicious intent
- in order to mitigate this risk we never concatanate user provided strings and a SQL query

EXAMPLE OF SQL INJECTION

```
http://localhost:3005/users/1DROP_TABLE_users;
```

## SOLUTION TO SQL INJECTION EXPLOIT RISK

1. Use postgres to sanitize values (preferable option most of the times)
2. Add code on the server side to sanitize values

USING POSTGRES TO SANITZE VALUES

How to sanitize?
- pass a SQL query as one parameter, and user defined values as second paramater


```js
  static async findById(id) {
    const { rows } = await pool.query(`
      SELECT * FROM users WHERE id = $1;
    `, [id]);

    return toCamelCase(rows)[0];
  }
```

```js
  query(sql, params) {
    return this._pool.query(sql, params);
  }
```

- use `PREPARED STATEMENTS` functionality of Postgres to receive a string and user-defined values
- `$1` is how Postgres recognizes a variable

<https://www.postgresql.org/docs/current/sql-prepare.html>

## TESTING

- there are different database environment modes for different purposes: test, development, production

## SCHEMA

- schemas are like folders containing tables, but also data types, functions and operators
- every database gets a default schema called `public`
- each schema can have it's own separate copy of a table
- schemas can be useful for testing purposes, each testing file can connect to the same table, however separated into different schemas

```sql
CREATE SCHEMA test;
```

```sql
CREATE SCHEMA schema_name AUTHORIZATION roleName;
```

<https://www.postgresql.org/docs/current/ddl-schemas.html>

## SEARCH PATH

- search path controls the default schema

```sql
SHOW search_path; -- "$user, public"
```

`$user` variable stores the current user

## CHANGING SEARCH PATH

```sql
SET search_path TO test, public;
```

## CREATING A NEW USER (NEW `ROLE`)

```sql
CREATE ROLE role_name WITH LOGIN PASSWORD 'password';
```

## CURSOR

Cursor is a database functionality which takes a result set, assigns it into a variable and allows you to process the result set row by row. While the unit of processing in SQL is typically a set of rows, in the cursor 'paradigm' the unit of processing is a single row. This way data can processed in similar fashion like in procedural programming (eg. through loops).

Normally cursors should be avoided due to performance penalty as compared to regular SQL operations.

## WHEN USING CURSOR HAS MERIT?

- calculating a running total
- executing stored procedures in certain situations
- processing batches of records to reduce the impact of locks on tables

## `PL/pgSQL`

`PL/pgSQL` is a loadable procedural language for PostgreSQL.
- can be used to create functions and trigger procedures
- adds control structures to the SQL language
- can perform complex computations
- inherits all user-defined types, functions and operators
- can be defined to be trusted by the server

<https://www.postgresql.org/docs/current/plpgsql.html>

## FOUR STEPS OF USING A CURSOR

1. `DECLARE` - specify the name of the cursor and SQL statement that is used to populate it
2. `OPEN` - processes and runs the SQL statement that is mentioned in the `DECLARE` step
3. `FETCH` - reads a single row from the set of rows stored in the cursor and stores this single row into another variable. When you fetch the cursor, you can perform actions and logic on the data in the row. You can modify other variables, run SQL commands, perform IF statements, and more. The `FETCH` is usually run on each row in the overall result.
4. `CLOSE` - relases cursor from memory

```sql
CREATE OR REPLACE FUNCTION fn_test_cursor() RETURNS text
language plpgsql AS $$
DECLARE
  test_cursor CURSOR FOR
  SELECT id, product_name, price
  FROM products;
  currentID INT;
  currentProductName VARCHAR(100)
  currentPrice INT;
BEGIN
  OPEN test_cursor;
  LOOP
    FETCH test_cursor INTO currentID, currentProductName, currentPrice;
    EXIT WHEN NOT FOUND;
RAISE NOTICE '% % (ID: %)', currentProductName, currentPrice, currentID;
  END LOOP;
  CLOSE test_cursor;
  RETURN 'done';
END $$;

SELECT * FROM fn_test_cursor();
```

## TRIGGER

- trigger is a piece of code executed automatically in response to a specific event occured on table in a database
- trigger is always associated with a specific table. If the table is deleted, the trigger will also be deleted
- trigger is invoked either before or after one of the following instructions to the table (`INSERT`, `DELETE`, `UPDATE`)

```sql
CREATE TRIGGER trigger_name [BEFORE|AFTER] event
ON table_name [FOR EACH ROW|FOR EACH STATEMENT]
BEGIN
-- trigger logic
END;
```

## ROW LEVEL TRIGGER

- a row level trigger executes each time a row is affected by query statement
- eg. if the `UDPATE` statement affects 10 rows, the row level trigger would execute 10 times, each time per row

## STATEMENT LEVEL TRIGGER

- a statement level trigger is called once regardless of how many rows are affected by the query
- trigger will be executed once even if no rows were affected

## COMMON USAGE OF TRIGGERS

- LOGGING TABLES - some tables have sensitive data such as customer email, employee salary, etc that you want to log all the changes. If salary changes in the main 'salaries' table, a trigger will be triggered and 'salaries_changes logging table will also be updated

```sql
CREATE TRIGGER before_update_salary
BEFORE UPDATE ON employees
FOR EACH ROW
BEGIN
  IF NEW.salary <> OLD.salary THEN
    INSERT INTO salary_changes (employee_id, old_salary, new_salary)
    VALUES (NEW.employee, OLD.salary, NEW.salary);
  END IF;
END;
```

## WILDCARDS

## GET ALL RECORDS WHICH CONTAIN A SPECIFIC STRING AND ANY NUMBER OF ADDITIONAL CHARACTERS AFTER

```sql
SELECT * FROM example_table WHERE example_column LIKE 'Mel%'; -- Melissa, Melli
```

## GET ALL RECORDS WHICH CONTAIN A SPECIFC STRING AND ONE MORE ADDITIONAL CHARACTER AFTER

```sql
SELECT * FROM example_table WHERE example_colum LIKE 'Mel_'; -- Melo, Mela
```

## GET ALL RECORDS WHICH CONTAIN A SPECIFIC STRING AND TWO MORE ADDITIONAL CHARACTERS AFTER

```sql
SELECT * FROM example_table WHERE example_column LIKE 'Mel__'; -- Melon, Melan
```

## GET ALL RECORDS WHICH CONTAIN A STRING AND STRING AND NUMBER OF CHARACTERS AFTER OR BEFORE THE STRING

```sql
SELECT * FROM example_table WHERE example_column LIKE '%Mel%'; -- Melissa, Emelio, Mel
```

## SQL LESSONS FROM SENIOR SQL DEVELOPER

- `DEFAULT` clause is underused. The default option can be a literal value of the relevant data type or something provided by the system, such as the current timestamp , current date
- it's a good way to make the database do a lot of work for you that you would otherwise have to code into the applications program. The most common tricks are to use a zero in numeric columns, a string to encode a missing value `('{{unknown}}')` or a true default 'same address' in character columns, and the system timestamp to mark transactions
## `VACUUM`

- `VACUUM` reclaims storage occupied by dead tuples

## PARTITION

Partitioning referst to splitting what is logically one large table into smaller physical pieces.

Partitioning can provide several benefits:
- query performance can be improved dramatically in certain situations, particularly when most of the heavily accessed rows of the table are in a single partition or a small number of partitions. Partitioning effectively substitutes for the upper tree levels of indexes, making it more likely that the heavily-used parts of the indexes fit in memory
- when queries or updates access a large percentage of a single partition, performance can be improved by a sequential scan of that partition of that partition instead of using an index, which would require random-access reads scattered across the whole table
- bulk loads and deletes can be accomplished by adding or removing partitions, if the usage pattern is accounted for in the partitioning design. Dropping an individual partition using `DROP TABLE` or doing `ALTER TABLE DETACH PARTITION` is far faster than a bulk operation. These commands also entirely avoid the `VACUUM` overhead caused by a bulk `DELETE`
- seldom used data can be migrated to cheaper or slower storage media

These benefits will be normally worthwhile only when a table would be very large. Rule of thump is that the size of the table should exceed the physical memory of the database server.

## MEMORY CONSIDERATIONS

Reading from memory will always be more performant than doing to disk, so far all database technologies you would want to use as much RAM memory as possible.

## TABLESPACE

- tablespaces give database administrator ability to control how and where SQL is saving database files
- this can be very useful for performance optimization, if there is heavily used query on a particular table, this table can be moved to a faster, more expensive machine, and the rest of tables can remain on the slowler, cheaper machine

## CASTS

- casts specify how to perform a conversion between data types

## CATALOG

- catalogs are the place where Postgres stores schema metadata, such as information about tables and columns

Postgres System > Catalog > Schema > Table > Columns & Rows

## PUBLICATIONS

- publications are the mechanism Postrgres uses to make tables available for replication
- these are different from schemas
- publications can be used to connect to two separate databases

## SUBSCRIPTION

- subscription defines the connection to another database and set of publications to which it wants to subscribe
- subscriber database behaves in the same way as any other PostgreSQL instance and can be used as a publisher for other databases by defining its own publications

## AGGREGATES

- users can defined their own aggregate functions, these functions will be stored in 'Aggregates' folder

## COLLATIONS

- collations are useful when a database stores data in a foreign langugage
- we can set collations for different languages, which will include special sorting rules for foreign characters, accents, etc

```sql
COLLATE 'fr_FR' -- this defines a french locale
```

```sql
COLLATE "C"; -- turns off collate
```

## STORED PROCEDURES

- stored procedures are kind of functions holders for user-defined functions and triggers, written in the `pspgsql` procedural language
- this allows user to create functions with complex logic and SQL inside the procedure and easily reuse within the RDBMS
- PostgreSQL supports two procedural languages: `pspgsql` and `C`
- stored procedures can be reused by the same user, different users in the same database, or even between different `PostgreSQL` instances

## SEQUENCES

- sequences are user-defined schema-bound object that generates a sequence of integers based on a particular specification
- similar to Python's `range`

## SELECT ALL AVAILABLE SEQUENCES

```sql
SELECT
    relname sequence_name
FROM 
    pg_class 
WHERE 
    relkind = 'S';
```

## INSERT INTO A TABLE FROM SEQUENCE

```sql
INSERT INTO
	order_details(order_id, item_id, item_text, price)
VALUES
	(100, nextval('order_item_id'), 'DVD, 100),
	(100, nextval('order_item_id'), 'Android, 550),
	(100, nextval('order_item_id'), 'Spea', 250);
```

## SEQUENCE WHICH REPEATS

```sql
CREATE SEQUENCE mysequence
	MINVALUE 1
	MAXVALUE 5
	INCREMENT 1
	START 1
	CYCLE;
```

## SEQUENCE WHICH BELONGS TO A SPECIFIC COLUMN IN A TABLE

```sql
CREATE SEQUENCE mysequence
	MINVALUE 1
	MAXVALUE 5
	INCREMENT 1
	START 1
	CYCLE;
	OWNED BY table_name.column_name
```

## WINDOW FUNCTIONS

- window function is very similar to `GROUP BY` clause; the difference is that `GROUP BY` always aggregates grouped rows into one using aggregate functions, while window function calculates the same aggregate result but inputs the results in seperate rows
- therefore `GROUP BY` will reduce number of rows to a number equal to number of unique values (based on the chosen column to be used to group by), while window function results in the same number of rows as the original input set
- `OVER()` keyword is necessary in all window functions, other keyword are compulsory (`ORDER BY`, `PARITION BY`, `RANK()` etc)

## EXAMPLES OF WINDOW FUNCTIONS

```sql
SELECT 
	  order_id,
    product_id,
    quantity,
    MAX(quantity) OVER() as max_quantity
FROM order_items;
```

```sql
SELECT
	  product_id,
    unit_price,
    avg(unit_price) over() as average_unit_price
FROM products
WHERE discontinued = 'f';
```

```sql
SELECT
	  order_id,
    total_amount,
    ROUND(100 * total_amount / sum(total_amount) OVER(), 2) as total_sales_participation
FROM orders;
```

```sql
SELECT
	  ROW_NUMBER() OVER (ORDER BY last_order_date DESC) AS place,
	  customer_id,
    full_name,
    last_order_date
FROM customers
WHERE last_order_date IS NOT NULL;
```

```sql
SELECT
	  DENSE_RANK() OVER (ORDER BY total_amount DESC, order_date) as rank,
    order_id,
    total_amount
FROM orders;
```

## WINDOW FUNCTION AND CTE TOGETHER

```sql
WITH customers_with_ranking as (
SELECT
  DENSE_RANK() OVER(ORDER BY total_amount DESC, order_date) AS rank,
  order_id,
  total_amount
FROM orders
)

SELECT
	  rank,
    order_id,
    total_amount
FROM customers_with_ranking
WHERE rank <= 3;
```

```sql
WITH ranking as (
SELECT
	  order_date,
    order_id,
    total_amount,
    RANK() OVER(PARTITION BY order_date ORDER BY total_amount DESC) as rank
FROM orders
)

SELECT order_date, order_id, total_amount
FROM ranking
WHERE rank = 1;
```

## `NTILE()`

```sql
SELECT
	  product_id,
    product_name,
    category_name,
    unit_price,
    NTILE(5) OVER(ORDER BY unit_price) as price_group
FROM products as p
JOIN categories as c ON p.category_id = c.category_id;
```

## RUNNING TOTAL

```sql
SELECT
	  order_id,
	  total_amount,
    SUM(total_amount) OVER (ORDER BY order_date) as running_total 
FROM orders;
```

## MAX IN A RANGE

```sql
SELECT
	order_id,
    customer_id,
    total_amount,
    max(total_amount) over(partition by customer_id) as max_customer_order
FROM orders;
```

## OTHER WINDOW FUNCTION EXAMPLES

```sql
SELECT 
	  customer_id,
    full_name,
    email,
    country,
    channel_name,
    count(customer_id) over(partition by channel_name) as customers_from_channel
FROM customers c
JOIN channels ch ON c.channel_id = ch.id;

```

```sql
SELECT
	  p.product_id,
	  p.product_name,
    c.category_name,
    p.unit_price,
    avg(p.unit_price) over(partition by c.category_name) as average_category_price,
    avg(p.unit_price) over(partition by c.category_name) < p.unit_price as price_above_average
FROM products as p
JOIN categories as c ON p.category_id = c.category_id;
```

```sql

SELECT
	  oi.order_id,
    oi.product_id,
    p.product_name,
    (oi.quantity * oi.unit_price) * (1 - oi.discount) as income_from_product,
    sum(oi.quantity) over (partition by oi.product_id) as total_sold_quantity
FROM orders o
JOIN order_items oi ON o.order_id = oi.order_id
JOIN products p ON p.product_id = oi.product_id;
```

## HOW DO YOU DELETE ALL DATA FROM A TABLE, BUT LEAVE TABLE SCHEMA INTACT?

`TRUNCATE TABLE table_name`

## PYTHON AND SQL

## HOW TO READ SQL FILES AND EXECUTE THEM FROM PYTHON

<https://www.somethingaboutdata.com/something-about-python/python-read-sql-data>

## DOMAIN

- domain is a user-defined data type (eg. having additional constraints) that is based on built-in underlying type
- domain may be attached to a schema but it doesn't have to

## OPERATORS

- PostgreSQL supports operator overloading

## ANSI (AMERICAN NATIONAL STANDARDS INSTITUTE)

ANSI is a body governing the SQL standard.

## SQL FLAVORS

Standard keywords are the same for all SQL flavors. Only additional keywords on top of the standard set of keywords, make SQL flavors unique.

Difference between different SQL flavors is similar to differences between British and American English.

PostgresSQL

```sql
SELECT id, name
FROM employees
LIMIT 2;
```

SQL Server

```sql
SELECT id, name
FROM employees
TOP 2;
```

## `\dt` - SHOW TABLES COMMAND LINE

```
\dt
```
## GOOD PSQL GUIDE

<https://www.postgresguide.com/utilities/psql/>

## KEYBOARD SHORTCUTS

- `CTRL + /` - comment/uncomment a single or multiple lines

<https://www.pgadmin.org/docs/pgadmin4/6.18/keyboard_shortcuts.html>

## SQL FIDDLE

<http://www.sqlfiddle.com/#!17>

## SQL SCHEMA DESIGNERS

- configuration file-like diagraming

<https://dbdiagram.io>

- manual diagraming

<https://ondras.zarovi.cz/sql/demo>

## SCHEMA MIGRATIONS TOOLS FOR PYTHON

From author of SQLAlchemy
<https://pypi.org/project/alembic/>

<https://pypi.org/project/yoyo-migrations/>

## ISSUE WITH SLOW POSTGRESQL ON WINDOWS 10

In my `C:\Program Files\PostgreSQL\14\data\postgresql.conf` file I found `listen_addresses = "*"` which I changed to `listen_addresses = '127.0.0.1,::1'`.

<https://dba.stackexchange.com/questions/201646/slow-connect-time-to-postgresql-on-windows-10>

## LEARNING

Basic: Datacamp, Introduction to SQL

<https://www.datacamp.com/tutorial/beginners-introduction-postgresql>

Intermediate: Udemy, SQL & Database Design A-Z
<https://www.udemy.com/course/sqldatabases/?LSNPUBID=JVFxdTr9V80&ranEAID=JVFxdTr9V80&ranMID=39197&ranSiteID=JVFxdTr9V80-YaWKvZjwH58FdJLO_nQI4g&utm_medium=udemyads&utm_source=aff-campaign>

Intermediate: Mode Intermediate SQL

<https://mode.com/sql-tutorial/intro-to-intermediate-sql/>

Advanced: Advanced SQL for Query Tuning and Performance Optimization

<https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization>

Advanced: High Performance SQL

<https://vladmihalcea.teachable.com/p/high-performance-sql-online?coupon_code=HPSQLV150OFF&affcode=172599_kuoszt8s>

COMPLETE: Beginner to Advanced

<https://www.udemy.com/course/sql-and-postgresql/>

SQL Style Guide

<https://www.sqlstyle.guide/>

Diagrams

<https://www.diagrams.net/>

PostgresSQL Online

<https://www.pg-sql.com>

## TOP SQL INTERVIEW QUESTIONS FROM TOP TAL

<https://www.toptal.com/sql/interview-questions>

## TOPICS TO REPEAT AND DO MORE EXERCISES

- `UNION`
- `INTERSECT`
- `EXCEPT`

## TOPICS TO STUDY

- SELF JOIN
- SELF-REFERENCES (PRIMARY AND FOREIGN KEY IN THE SAME TABLE)