## WSL

## HOW DO YOU OPEN A PROJECT IN VS CODE FROM WSL?

- go to the project folder

`code .`

## HOW DO YOU INSTALL ANACONDA ON WSL?

- install from user-level 

<https://gist.github.com/kauffmanes/5e74916617f9993bc3479f401dfec7da>

<https://www.hostinger.com/tutorials/how-to-install-anaconda-on-ubuntu/>

## HOW DO YOU PERMANENTLY ADD PRIVATE KEY TO SSH?

!!! IMPORTANT!!! ADD THIS ASAP

## HOW TO CONNECT TO AZURE FROM WSL2?

- `sudo -i` - change user to `root`
- `cd /mnt/c/Users/User/Projects/project_name`
`chmod 400 user-vm_key.pem` - change permissions to protect the vm_key
`ssh -i user-vm_key.pem user@user.westeurope.cloudapp.azure.com` - connect

## HOW DO YOU TERMINATE ALL RUNNING WSL MACHINES?

`wsl --shutdown`

## HOW DO YOU TERMINATE A SPECIFIC WSL MACHINE?

`wsl --terminate <distribution name>`

## WSL BASIC COMMANDS

<https://learn.microsoft.com/en-us/windows/wsl/basic-commands#shutdown>

## WSL STARTUP ISSUES (WSL DIDN'T TERMINATE PROPERLY)

<https://github.com/microsoft/WSL/issues/5092>