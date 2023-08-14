---
authors:
  - frank
tags:
  - docker
  - best practice
description: Docker Useful Commands
keywords:
  - Docker Useful Commands
image: https://i.imgur.com/mErPwqL.png
date: 2023-08-11
draft: false
enableComments: true # for Gisqus
---

# Docker Useful Commands

## Docker

- Famous `busybox` image that provide many common UNIX utilities for testing.

```sh
docker run -it --rm --privileged busybox sh
```

- Find the IP address of Docker container

```sh
docker inspect \
    -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' \
    nfs
```

- Delete all containers(include all status of running, stopped, created)

```sh
docker rm -f $(docker ps -a -q)
```

- Delete all volumes

```sh
docker volume rm $(docker volume ls -q)
```

- Keep container running for for testing and debugging

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

Rebuild image and restart a service which you specified,

```sh
docker-compose up --no-deps web-app -d
```

Remove a service,

```sh
docker-compose rm -s -v web-auth
```