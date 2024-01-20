## HOW TO CREATE A NEW DIRECTORY

`mkdir directory`

## HOW TO CHECK PATH?

`echo $PATH`

## WHAT IS THE SHELL CONFIGURATION FILES?

`~/.bashrc`

<https://www.digitalocean.com/community/tutorials/bashrc-file-in-linux>

## ADD A NEW DIRECTORY TO PATH

`export PATH=~/anaconda3/bin:$PATH`

<https://www.digitalocean.com/community/tutorials/how-to-view-and-update-the-linux-path-environment-variable>

## HOW DO YOU REMOVE A FILE?

`rm filename`

## HOW DO YOU REMOVE EMPTY DIRECTORY?

`rmdir foldername`

## HOW DO YOU REMOVE NON-EMPTY DIRECTORY?

`sudo rm -r foldername`

## HOW TO SHOW YOUR CURRENT PATH?

`pwd`

## HOW TO CREATE A NEW FILE AND ADD TEXT TO IT?

`cat > sales.txt`

Prompt will open so you can paste your text. After you are done, press CTRL+D

## SHOW FILES WHICH ARE OTHERWISE NOT VISIBLE

`ls -alh`

## SHOW FILES BY LAST MODIFIED DATE

`ls -halt`

## FIND A FILE

`locate scrapyd.conf`

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

## HOW TO GIVE OWNERSHIP/PERMISSIONS TO A SPECIFIC FOLDER TO A SPECIFIC USER?

- from root, run the following command

`sudo chown -R myuser:myuser /home/myuser/myfolder` 

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

## HOW TO ADD A NEW FOLDER TO `PATH` ENV VARIABLE?

`export PATH=$PATH:home/user/folder`

## HOW DO YOU CREATE SHORTCUTS TO MOVE FOLDERS FAST?

`cd /home/user/`
`sudo nano .bashrc`

Add aliases or functions:

```bash
alias dp='cd /home/user/user/django_project'
sdl() {
  cd /home/user/logs/imdb/spider
  ls -halt
}
```

Reload bash
`source .bashrc`

Check if the aliases or functions work

`type dp`
`type sdl`

Run

`dp`
`sdl`

## HOW TO GO BACK TO THE PREVIOUS DIRECTORY?

`cd -`

## SYMBOLIC LINKS

<https://en.wikipedia.org/wiki/Symbolic_link>

## `journalctl` IS USING `less` READER

## STDIN, STDOUT, STDERR

`<` - reads from a file

`>1` or `>` - redirecting `stdout`, example: `./run.sh >1 text.txt`
`>2` - redirecting `stderr`, example `./run.sh >2 errors.txt`

`>>` - append to a file, example `echo 'Adding this string to a file' >> my_file.txt`

## `cat <<EOF`

`cat <<EOF` is very useful when working with multi-line text in Bash, eg. when assigning multi-line string to a shell variable, file or a pipe.

In thi case `EOF` can be replaced by any name, eg. `cat <<HERE line 1 line2 line 3 HERE`

```bash
cat <<EOF
line 1
line 2
line 3
EOF
```

Multi-line write to a file:

```bash
cat <<EOF > print.sh
echo \$PWD
echo $PWD
EOF
```

## REDIRECTING BOTH `STDOUT` AND `STDERR`

`./error.sh 1> capture.txt 2> error.txt`

## REDIRECTING `STDOUT` AND `STDERR` TO THE SAME FILE

`./error.sh > capture.txt 2>&1`

## DETECTING REDIRECTION WITHIN A SCRIPT

```bash
#!/bin/bash

if [ -t 0]; then

  echo stdin coming from keyboard

else

  echo stdin coming from a pipe or a file

fi
```

The `-t` (terminal) option returns true (0) if the file associated with the file descriptor terminates in the terminal window. We’ve used the file descriptor `0` as the argument to the test, which represents `stdin`.

`chmod +x input.sh`

ANOTHER EXAMPLE:

```bash
#!/bin/bash

if [ -t 1]; then

  echo stdout is going to the terminal window

else

  echo stdout is being redirected or piped

fi
```

The only significant change to this script is in the test in the square brackets. We’re using the digit `1` to represent the file descriptor for `stdout`.

Good intro
<https://www.howtogeek.com/435903/what-are-stdin-stdout-and-stderr-on-linux/>

## EOF - End of file

`EOF` - is a condition in a computer operating system where no more data can be read from a data source (a file or a stream)

`EOF` - absence of a character, something that cannot appear in a file

## EOT - End of transmission

`EOT` is a transmission control character. It's intended use is to indicate the conclusion of a transmission that may have included one or more texts and any associated message headings.

It's most common use today is to cause a Unix terminal driver to signal end of file and thus exit programs that are awaiting input.

IN ASCII and Unicode, the character is encoded at U+0004 <control-0004>. It can be referred to as Ctrl+D ^D in caret notation.



## SPECIAL PARAMETERS, $0, $#, $@, $?, $$

Glossary
<https://dannyda.com/2020/12/22/what-are-0-etc-in-linux-bash-shell-script-what-do-they-mean-what-are-n-etc/>

## `/dev/null`

`/dev/null` is used to avoid to having the script wait for input. `< /dev/null` is used to instantly send `EOF` to the program so that it doesn't wait for input.

`/dev/null`, the null device is a special file that discards all data written to it, but reports that the write operation succeeded

## `cat`

`cat` is a standard UNIX utility that read files sequentially, writing them to stdout

`cat` has two primary uses:
- to print out a single file, `cat file.txt`
- to concatenate two or more files and either print out the results or redirect it into a different file `cat file1.txt file2.txt > new_file.txt`

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

## STACKOVERFLOW USERS

<https://stackoverflow.com/users/1983854/fedorqui>