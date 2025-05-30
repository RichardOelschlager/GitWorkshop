# Git Workshop

## Task 1: Initialize a New Repository, Create Files, and Make Commits

1. Create a new project folder and initialize a Git repository.

``` git init```

2. Stage and commit the files with descriptive messages.

```bash 
git add .
git commit -m "Added readme and dummy function" 
```
3. Make additional changes to the files and commit them.

```bash  
git add .
git commit -m "continued readme and added complex dummy function"
```
4. Restore one of the files to a specific version in the repository

```bash
git log
git checkout 492df2 -- foo.js
git commit -m "restored foo.js to first commit"
```