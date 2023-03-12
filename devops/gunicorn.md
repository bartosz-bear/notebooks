## NGINX

## CHECKING NGINX PROCESS LOGS

`sudo journalctl -u nginx`

## CHECKING NGINX ACCESS LOGS

`sudo less /var/log/nginx/access.log`

## CHECKING NGINX ERROR LOGS

`sudo less -F /var/log/nginx/error.log`

## GUNICORN



## RESTART GUNICORN

`sudo systemctl restart gunicorn`

## RELOAD DAEMON

`sudo systemctl daemon-reload`

## CHECK SOCKET STATUS

`sudo systemctl status gunicorn.socket`

## CHECK GUNICORN APPLICATION LOGS

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


sudo systemctl restart gunicorn
sudo systemctl daemon-reload
sudo journalctl -e -u gunicorn