## HOW DO YOU CONNECT TO AZURE POSTGRES DATABASE FROM VM CONSOLE?

`psql "sslmode=verify-full sslrootcert=/etc/ssl/certs/DigiCert_Global_Root_CA.pem host=user-db.postgres.database.azure.com dbname=db_name user=username"`

## HOW TO QUITE PSQL?

`\q`

## SHOW ALL AVAILABLE DATABASES

`\l`

## SHOW INFO ABOUT A SPECIFIC DATABASE

`\l postgres`

## SHOW DETAILED INFO ABOUT A SPECIFIC DATABASE

`\l+ postgres`

## CONNECT TO A DATABASE

`\c postgres`

## SHOW TABLES FOR THE DATABASE

`\dt`

## SHOW SCHEMA OF THE DATABASE

`\d`

## FORMAT OUTPUT

`\x on` - extended output on
`\x off` - extended output off

## GOOD BASIC TUTORIAL

<https://tomcam.github.io/postgres/>