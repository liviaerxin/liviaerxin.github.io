---
authors:
  - frank
tags:
  - docker
  - docker compose
  - best practice
  - cheat sheet
description: Docker Useful Commands
keywords:
  - docker
  - docker compose
  - cheatsheet
image: https://i.imgur.com/mErPwqL.png
date: 2023-08-11
draft: false
enableComments: true # for Gisqus
---

# Docker Cheat Sheet

- include `docker` and `docker compose` quick reference
- cover most useful commands

## Docker

### Test image `busybox`

Famous `busybox` image that provide many common UNIX utilities for testing.

```sh
docker run -it --rm --privileged busybox sh
```

### Find the IP address of Docker container

```sh
docker inspect \
    -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' \
    nfs
```

### Delete all containers(include all status of running, stopped, created)

```sh
docker rm -f $(docker ps -a -q)
```

### Delete the container by image name

```sh
docker rm -f $(docker ps -a -q  --filter ancestor=<image name here!>)
```

```sh
drmi() { docker rm -f $(docker ps -a | awk -v i="^$1.*" '{if($2~i){print$1}}'); }
```

### Delete all volumes

```sh
docker volume rm $(docker volume ls -q)
```

### Keep container running for for testing and debugging

```sh
# Use -t(-tty)
docker run --rm -d -t busybox
```

```sh
docker run --rm -d busybox tail -f /dev/null
```

```sh
docker run --rm -d busybox sleep infinity
```

## Docker Compose

### Check `docker-compose.yml` rendering

```sh
docker compose --env-file .env --env-file .prod.env config
```

### Rebuild image and restart a service which you specified

```sh
docker-compose up --no-deps web-app -d
```

### Remove a service

```sh
docker-compose rm -s -v web-auth
```

### `env_file` in `docker-compose.yml`

- `env_file` equals `environment` functions.
- If you use both the `env_file` and `environment` attribute, environment variables set by environment take precedence.
- `env_file` not used for variables substitution in `docker-compose.yml` file
- `env_file` is not the same as `--env-file` used in `docker-compose --env-file` cli.
  - `--env-file .env.prod` will be used for interpolation for `docker-compose.yml` file.

[Variables resolved from env_file but not taking effect in docker-compose.yaml](https://forums.docker.com/t/variables-resolved-from-env-file-but-not-taking-effect-in-docker-compose-yaml/105394/2)

```sh
docker compose --env-file .env --env-file .prod.env up -d
```

### Exclude sub folders when mounting a local folder

It's very useful when developing a node project. That will help only mount the local source codes while excluding the local `node_modules` folder only in the container.

```yml
version: "3"
services:
  node:
    image: "node:16"
    working_dir: /home/node/app
    volumes:
      - ./:/home/node/app
      - /home/node/app/node_modules
    expose:
      - "8081"
    command: "npm start"
```


## Dockerfile

### Download from GitHub release using wget

**tgz**

```dockerfile
RUN GH_USER=REPLACE_WITH_USER \
    GH_REPO=REPLACE_WITH_REPO \
    GH_BRANCH=REPLACE_WITH_BRANCH \
    wget https://github.com/${GH_USER}/${GH_REPO}/archive/refs/tags/${GH_BRANCH}.tar.gz -O "${GH_REPO}-${GH_BRANCH}.tar.gz" \
    && tar -xzvf ./"${GH_REPO}-${GH_BRANCH}.tar.gz" \
    && rm ./"${GH_REPO}-${GH_BRANCH}.tar.gz"
```

**zip**

```dockerfile
RUN GH_USER=REPLACE_WITH_USER \
    GH_REPO=REPLACE_WITH_REPO \
    GH_BRANCH=REPLACE_WITH_BRANCH \
    wget https://github.com/${GH_USER}/${GH_REPO}/archive/refs/tags/${GH_BRANCH}.zip \
    -O "${GH_REPO}-${GH_BRANCH}.zip" && \ 
    unzip ./"${GH_REPO}-${GH_BRANCH}.zip" && \
    rm ./"${GH_REPO}-${GH_BRANCH}.zip"
```

### Download from GitHub release using curl

```sh
curl -L https://github.com/yarnpkg/yarn/releases/download/v0.23.4/ya‌​rn-v0.23.4.tar.gz > yarn.tar.gz
```