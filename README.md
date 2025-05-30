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

## Task 2: Connecting to a Remote Repository

1. Add the remote repository to your local project.
```bash  
git remote add origin https://github.com/RichardOelschlager/GitWorkshop.git
```
2. Push all local changes to the remote repository.

```bash
git push -u origin main
```

## 3 Task 3 (Optional): Working with Branches

1. Create a new branch called feature-branch.
```bash
git branch feature-branch
```
2. Switch to the new branch.
```bash
git checkout feature-branch
```
3. Make changes and commit them.
```bash
git add . 
git commit -m "added random feature"
```
4. Push the new branch to the remote repository.
```bash
git push -u origin feature-branch
```
# Task 4 (Optional): Cloning and Updating a Remote Repository

1. Clone the following repository: 
https://github.com/Lexicon-Smaland/Hello-World.git
```bash
git clone https://github.com/Lexicon-Smaland/Hello-World.git
```
2. Remove the Existing Remote Link and Link to a New Repository.
```bash 
git remote remove origin
git remote add origin https://github.com/RichardOelschlager/HelloWorldLexicon.git
```
4. Add or modify files in the cloned project and commit the changes.
```bash
git add . 
git commit -m "changed readme"
```
5. Push all the committed changes to the newly linked repository.
```bash
git push -u origin main
```