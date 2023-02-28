## ANACONDA

## SHOW LIST OF AVAILABLE ENVIRONMENTS

`conda env list`

## SHOW LIST OF INSTALLED LIBRARIES

`conda list`

## HOW TO INSTALL A LIBRARY

`conda install -c conda-forge library_name`

`conda-forge` is a name of a channel

## SHOW A VERSION OF AN INSTALLED LIBRARY

`conda list library`

## GOOD ANACONDA GUIDE

<https://towardsdatascience.com/introduction-to-conda-virtual-environments-eaea4ac84e28>

<https://jakevdp.github.io/blog/2016/08/25/conda-myths-and-misconceptions/>

## HOW TO CHECK WHAT VERSION OF ANACONDA YOU HAVE INSTALLED?

`conda list anaconda$`

## HOW TO CHECK WHAT VERSION OF CONDA DO YOU HAVE INSTALLED?

`conda info`

## HOW TO CREATE `requirements.txt` FILE WITH CONDA?

`conda list -e > requirements.txt`

## HOW TO INSTALL PACKAGES FROM `requirements.txt` FILE?

`conda activate your_environment`

`conda install --file requirements.txt`

<https://linuxhint.com/conda-install-requirements-txt/>

## HOW TO REMOVE A CONDA ENVRIONMENT?

`conda deactivate`

`conda remove -n my_env --all`

## HOW TO RENAME A CONDA ENVIRONMENT?

`conda rename -n old_name new_name`

## CONDA-FORGE CHANNEL

<https://anaconda.org/conda-forge/python-decouple>

## HOW TO MAKE PYTHON INSTALLED IN A PARTICULAR ANACONDA ENVIRONMENT FIND YOUR PROJECT SCRIPTS?

Find your PYTHONPATH

`python -c "import sys; print('\n'.join(sys.path))"`

C:\Users\User\anaconda3\envs\my_env\python311.zip
C:\Users\User\anaconda3\envs\my_env\Lib
C:\Users\User\anaconda3\envs\my_env\DLLs
C:\Users\User\anaconda3\envs\my_env
C:\Users\User\anaconda3\envs\my_env\Lib\site-packages

Create a file of any name, eg. `project_scripts.pth` to `site-packages` folder of your conda environment.

`C:\Users\User\anaconda3\envs\my_env\Lib\site-packages`

Inside of this file add the path to your project root folder.

`C:\Users\User\Desktop\Python\Projects\myproject`

<http://evantilton.com/guides/anacondapythonpath/>

## HOW DO YOU REMOVE A LIBRARY FROM THE CURRENTLY ACTIVATE ENVIRONMENT?

`conda remove library`