## HOW TO CREATE A NEW DIRECTORY

`mkdir directory`

## HOW TO CHECK PATH?

`echo $PATH`

## WHAT IS THE SHELL CONFIGURATION FILES?

`~/.bashrc`

## ADD A NEW DIRECTORY TO PATH

`export PATH=~/anaconda3/bin:$PATH`

<https://www.digitalocean.com/community/tutorials/how-to-view-and-update-the-linux-path-environment-variable>

## HOW DO YOU REMOVE A FILE?

`rm filename`

## HOW DO YOU REMOVE EMPTY DIRECTORY?

`rmdir foldername`

## HOW DO YOU REMOVE NON-EMPTY DIRECTORY?

`rmdir -r foldername`

## HOW TO SHOW YOUR CURRENT PATH?

`pwd`

## HOW TO CREATE A NEW FILE AND ADD TEXT TO IT?

`cat > sales.txt`

Prompt will open so you can paste your text. After you are done, press CTRL+D

## SHOW FILES WHICH ARE OTHERWISE NOT VISIBLE

`ls -alh`

## HOW TO SET ENVIRONMENT VARIABLE?

`export BAPI_DJANGO_ENV='prod'`

## FOLDER STRUCTURE

`cd ~` - home directory
`cd /` - root directory

## HOW TO VIEW COMMANDS HISTORY/LOG?

`history`

## HOW TO GET ROOT PRIVILAGES?

`sudo -i`

## HOW TO SWITCH USER?

`su - bapi`

## HOW TO CHECK WHAT USER IS CURRENTLY LOGGED IN?

`whoami`

## HOW TO INSTALL SUDO?

`su -` - change to

`apt update` - update system's repository

`apt install sudo`

## DEFAULT EDITOR AS ENVIRONMENT VARIABLE

`$EDITOR`BAPI_DJANGO_ENV

## HOW TO ADD AN ENVRIONMENT VARIABLE PERMANENTLY ON THE USER LEVEL?

`sudo nano ~/.profile`

Add the following line at the end of the file:

`export ENV_VARIABLE='value'`

## RENAME A FOLDER

`mv old_folder_name new_folder_name`

## SHOW HIDDEN FILES

`ls -a`

## HOW TO REMOVE A LIBRARY/PACKAGE FROM LINUX?

`sudo apt remove uwsgi`

## HOW REQUEST A URL/ SEND HTTP GET REQUEST?

`curl "https://www.google.com/"`

## WHAT DIFFERENT COLORS MEAN IN `ls` COMMAND?

Blue: Directory
Green: Executable or recognized data file
Cyan (Sky Blue): Symbolic link file
Yellow with black background: Device
Magenta (Pink): Graphic image file
Red: Archive file
Red with black background: Broken link

## CHECK IF A FILE EXISTS

`ls -al /run/gunicorn.sock`

## HOW TO SHOW ALL ENVIRONMENT VARIABLES?

`env`

## SYMBOLIC LINKS

<https://en.wikipedia.org/wiki/Symbolic_link>

## `journalctl` IS USING `less` READER

## HOW TO EXIT `less`?

Ctrl+C

If that doesn't work then 

Ctrl + Z

## AUTO-COMPLETION FOR BASH

<https://www.hypexr.org/bash_tutorial.php#completion>

## RESEARCH

## CONFIGURATION FILES ON UNIX

Most of the configuration files in the Red Hat Linux system are in the /etc directory unless otherwise specified.

Users who are new to Linux (rightly) feel frustrated that each configuration file looks like a new challenge to figure out. In Linux each programmer is free to choose the configuration file format he or she prefers. Format options range from the /etc/shells file, which contains a list of possible shells separated by a newline, to Apache's complex /etc/httpd.conf file.

<https://developer.ibm.com/articles/l-config/>

## STUDY OR IMPROVE

- add autocompletion to bash
- learn about symbolic links
- learn more about unix (processes, deamons, configurations, file structure, kernel)
- learn more about types of configuration files

## HOW TO CHECK WHICH GROUPS A USER BELONG TO?

`groups user` - bapi sudo

## WHAT TO DO WHEN CTRL+C DOESN'T KILL THE PROCESS?

<https://superuser.com/questions/243460/what-to-do-when-ctrl-c-cant-kill-a-process>

## HOW TO SCROLL UP AND DOWN IN THE TERMINAL?

<https://www.linuxjournal.com/content/scrolling-up-and-down-linux-terminal>

## BASIC COMMANDS

<https://www.hostinger.com/tutorials/ssh/basic-ssh-commands>