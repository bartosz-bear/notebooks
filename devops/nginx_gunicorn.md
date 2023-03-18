## NGINX

## CHECKING NGINX PROCESS LOGS

`sudo journalctl -u nginx`

## CHECKING NGINX ACCESS LOGS

`sudo less /var/log/nginx/access.log`

## CHECKING NGINX ERROR LOGS

`sudo less -F /var/log/nginx/error.log`

## `sites-available`-`sites-enabled` VS `conf.d` DISCUSSION

<https://serverfault.com/questions/527630/difference-in-sites-available-vs-sites-enabled-vs-conf-d-directories-nginx>

## GUNICORN

## RESTART GUNICORN

`sudo systemctl restart gunicorn`

## RELOAD DAEMON

`sudo systemctl daemon-reload`

## CHECK SOCKET STATUS

`sudo systemctl status gunicorn.socket`

## START UNICORN AND BIND TO A SPECIFIC HOST

Go to your project folder

`~/bapi/bapi_django`

`gunicorn --bind 0.0.0.0:8000 bapi_django.wsgi`

## RUN GUNICORN IN DEBUG MODE

Go to your project folder

`~/bapi/bapi_django`

`gunicorn --log-file=- --bind 0.0.0.0:8000 bapi_django.wsgi`

## USEFUL DIRECTORIES

`cd /bapi/bapi/bapi_django/`

`cd /etc/systemd/system/`

## CHECK GUNICORN LOGS FOR DEBUGGING

`sudo journalctl -u gunicorn`

## CHECK GUNICORN LOGS - LAST PAGE FIRST

`sudo journalctl -e -u gunicorn`

`sudo less -f +G /home/bapi/bapi/logs/gunicorn.log`

## HOW TO SET ENVIRONMENT VARIABLE IN GUNICORN CONFIGURATION FILE?

<https://stackoverflow.com/questions/25076295/gunicorn-environment-variable-setting>

## GUNICORN DOCS

<https://docs.gunicorn.org/en/stable/index.html>

## HOW TO DEPLOY DJANGO AN AZURE VM WITH NGINX AND GUNICORN?

<https://www.digitalocean.com/community/tutorials/how-to-set-up-django-with-postgres-nginx-and-gunicorn-on-ubuntu-18-04>

<https://stackoverflow.com/questions/24488891/gunicorn-errors-haltserver-haltserver-worker-failed-to-boot-3-django/55623889#55623889>

## RESTART SERVER AFTER CODE CHANGE

`sudo systemctl restart gunicorn`108.142.247.13:80