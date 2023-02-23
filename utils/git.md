# Git and GitHub

## How do you remove the most recent commit pushed to remote repo and keep your local code intact?

```git
git push -f origin HEAD^:master
```


## GIT COURSES

COMPREHENSIVE

The Git & Github Bootcamp (Udemy)

FOCUS ON TEAM WORK

Collaborative Coding with Git (FutureLearn)

<https://www.futurelearn.com/courses/collaborative-coding-with-git>

## WHAT IS `origin`?

Origin is a shorthand name for the remote repository that a project was originally cloned from.

It is used instead of that original repository's URL making referencing much easier.

## WHAT IS `origin/HEAD`?

`origin/HEAD` represents the default branch on a remote and is a local reference representing a local copy of the HEAD in the remote repository.

`origin/HEAD` reference is created automatically during the `clone` process.

## HOW TO CREATE A NEW REFERENCE TO A REMOTE REPOSITORY?

```
git remote add reference_name git@bitbucket.org:user_name/remote_repo_name.git
```

## WHAT IS `DETACHED HEAD` STATE?

In git, `HEAD` refers to the currently checked-out branch's latest commit. However, in a detached `HEAD` state, the `HEAD` does not point to any branch, but a specific commit or the remote repository.

<https://circleci.com/blog/git-detached-head-state/>

## WHAT ARE `TAGS`?

Tags are used to tag a specific point in repository's history. Eg. it's a common practice to tag important commits with versioning tags like `v1.0` or `v2.0`.

<https://git-scm.com/book/en/v2/Git-Basics-Tagging>

## LISTING TAGS

`git tag`

## WHAT DOES CARET `^` CHARACTER MEANS IN GIT?

`HEAD^` means the first parent of the tip of the current branch.

`HEAD^` is a short-cut for `HEAD^1`

<https://stackoverflow.com/questions/1955985/what-does-the-caret-character-mean-in-git>

## COMPARE A LOCAL AND REMOTE REPOSITORY TO SEE DIFFERENCE IN COMMITS BETWEEN THE TWO

`git log main..origin/main`

Or if you only want to see the summary:

`git log --oneline main..origin/main`

## WHAT IS `git fetch` COMMAND?

`git fetch` is similar to `git pull` however `git fetch` is only downloading the latest version of the repository, while `git pull` does two things sequentially: first it runs `git fetch` and immediately after it runs `git merge`.

<https://www.atlassian.com/git/tutorials/syncing/git-fetch>

## FULL MERGING PROCESS

Download the latest version of the remote repo:

`git fetch origin/main`

See the changes between the repos

`git log main..origin/main`

Merge the repo (assuming you are checkout to the local repo)

`git merge origin/main`

