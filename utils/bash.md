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

`export VAR_NAME = "var value"`

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