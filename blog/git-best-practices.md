---
foam_template:
  name: Blog Docusaurus Template
  description: Creates Docusaurus blog/slip
  filepath: blog/git-submodules.md
authors:
  - frank
tags:
  - git
  - git submodules
  - best practice
description: Git Submodules
keywords:
  - Git Submodules
image: https://i.imgur.com/mErPwqL.png
date: 2023-08-02
draft: false
enableComments: true # for Gisqus
---

# Git Best Practices

Global configuration

```sh
git config --global --list
git config --local --list
```

**GIT** two popular authentication methods: [SSH Key](#git-ssh-key) and [Credentials](#git-credentials)

## Git SSH key

[How to Authenticate Your Git to GitHub with SSH Keys](https://hackernoon.com/how-to-authenticate-your-git-to-github-with-ssh-keys)

## Git credential

Store username/password instead of ssh for multiple remotes

To enable git credentials

```sh
# local
git config credential.helper store
# global
git config --global credential.helper store
```

Each credential is stored in `~/.git-credentials` file on its own line as a URL like:

```sh
https://<USERNAME>:<PASSWORD>@github.com
```

Configure credentials,

```sh
# Global
git config --global credential.https://github.com.username <your_username>

# Or 
git config --local user.name <your_username>
git config --local user.email <your_useremail>
# Then git pull or git push to let it cache your username/password after it prompt you to input password in the first time
```


Alternatively, we can directly edit our global Git config file `~/.gitconfig`,

```sh
[credential "https://github.com"]
	username = <username>
```

[Git - Config Username & Password - Store Credentials - ShellHacks](https://www.shellhacks.com/git-config-username-password-store-credentials/)

[Configuring Git Credentials](https://www.baeldung.com/ops/git-configure-credentials)

## Git submodule

1. Pull the repo and its all submodules in **the first time**.

```sh
git clone http://10.6.64.66:30000/mtr/mtr.git

cd mtr

git submodule update --init --recursive --progress
```

Or just one command to clone with all the submodules.

```sh
git clone --recursive http://10.6.64.66:30000/mtr/mtr.git
```

2. Pull the repo and its all submodules later

```sh
git submodule update --recursive --progress
```

3. Enter each sub repository to pull its own latest of `main` per repository, when the parent repo does point to the latest branch of its submodules!

Sometimes, it is very annoying to keep the parent repository up to date on the latest reference of its every sub repository!
This approach give you the flexibility while being like a shortcut.

```sh
git submodule foreach git checkout main
```

```sh
git submodule foreach git pull
```

```sh
git submodule foreach git pull origin main
```

```sh
git submodule update --recursive --remote
```

## Discard local commits

Assume your local repo has 10 commits ahead of the `origin/main`, and you want to move back to the `origin/main`.

```sh
git reset --hard origin/main
```


## Create a subdirectory inside Git and use it as Git submodule

First, create a subdirectory `./include/private` and initialize it as a new Git repository inside Git repo, then push it to remote.

Once done, we'll have subdirectory `./include/private` which has been gitted.

Check current parent Git submodule, and our `./include/private` sit outside.

```sh
$ git submodule
-96788d8ac53a815778a8cfd19addb3590a8be5ea code-snippets/assembly
-990e3db80c61c64ba9097adb7e729a6568c272ec code-snippets/c
-dd2097c0884363948877dea2b3f68efb90e6d204 code-snippets/cpp
-a4c753b89c423cd02718bece5a8a6302bd2385c7 code-snippets/docker-compose
-e23cfb82c6fefae4fdc6a144228bebb580bf7c13 code-snippets/python
```

- Option 1, Using `git submodule add` command in **parent** directory(note: works even `./include/private` folder exists):

```sh
git submodule add https://github.com/liviaerxin/private.git include/private
```

Finally, commit,

```sh
git commit -m "add submodule private"
```

- Option 2, Editing `.gitmodules` file in **parent** directory by adding:

```sh title=".gitmodules"
[submodule "include/private"]
	path = include/private
	url = https://github.com/liviaerxin/private.git
```

Indexing the submodule,

```sh
git add include/private
```

Verifying that the submodule has been included,

```sh
$ git submodule
-96788d8ac53a815778a8cfd19addb3590a8be5ea code-snippets/assembly
-990e3db80c61c64ba9097adb7e729a6568c272ec code-snippets/c
-dd2097c0884363948877dea2b3f68efb90e6d204 code-snippets/cpp
-a4c753b89c423cd02718bece5a8a6302bd2385c7 code-snippets/docker-compose
-e23cfb82c6fefae4fdc6a144228bebb580bf7c13 code-snippets/python
-e9e1b5f114e5da1896dae6c08ca01bc83b844b4d include/private
```

For managing the submodule,
1. Sync local private file: `.git/config` by running `git submodule init`, which will let the submodule update when running `git submodule update` later. 

Finally, commit,

```sh
git commit -m "add submodule private"
```

In conclusion, `git submodule add` equals:

1. Run `git clone {submodule} include/{submodule}`.
2. Add submodule configuration such as `path = include/{submodule}` and `url=https://github.com/xxx/{submodule}.git` into `.gitmodules` file.
3. Add the sub folder `include/{submodule}`: `git add include/{submodule}`.
4. Sync `.git/config` file: `git submodule init`.


## Carve out a subdirectory from Git and use it as Git submodule