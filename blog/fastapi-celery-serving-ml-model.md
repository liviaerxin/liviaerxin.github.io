---
foam_template:
  name: Blog Docusaurus Template
  description: Creates Docusaurus blog/slip
  filepath: blog/fastapi-celery-serving-ml-model.md
authors:
  - frank
tags:
  - fastapi
  - celery
  - machine learning
description: FastAPI Celery Serving ML Model
keywords:
  - FastAPI Celery Serving ML Model
image: https://i.imgur.com/mErPwqL.png
date: 2023-08-09
draft: false
enableComments: true # for Gisqus
---

# FastAPI Celery Serving ML Model


## Celery Worker

Celery Worker Mechanism:

To start a Celery worker will start a main process that will spawn child processes or threads(based on the `--pool` option): the main process will handle receiving task/sending task result the and these child processes/threads(a.k.a `execution pool`) execute the actual tasks.

To increase the number of child processes/threads(via `--concurrency` option) will increase the number of tasks the Celery worker can process in parallel. More processes are usually better.

However, in reality, there are some situations in following modes:

1. Run N workers with M child processes each.
2. Run 1 worker with N*M child processes.
3. Run N workers with only 1 main process each.
4. Run N workers with M child threads each.
5. Run 1 worker with N*M child threads.

Whether to use `processes` or `threads` depends on what your tasks will actually do and whether they are GPU bound or IO bound.

### Option --pool=prefork

It spawns multiple processes.

When start a Celery worker via `celery -A tasks worker --loglevel INFO --concurrency 3 --pool=prefork`, what will happen underneath?

1. Celery start a main process.
2. The main process will then spawn 3 child processes. The default `concurrency` is based on the number of `CPU` available on the machine. The default `pool` is `prefork` which uses `multiprocessing` library from Python.
3. These child processes will execute the tasks assigned from the main process.

### Option --pool=eventlet or --pool=gevent

It creates multiple threads.

When start a Celery worker via `celery -A tasks worker --loglevel INFO --concurrency 3 --pool=eventlet`

### Option --pool=solo

It will not create any child process or thread to run task. The tasks will be executed in main process, which causes the main process to be blocked.

It seems as: Run 1 worker with 1 process, however `--concurrency` will not take any effect when `--pool=solo`!

When coming to a microservices environment, this option becomes useful and practical especially running CPU intensive tasks. The container manager such as `Docker` can increase the task processing capabilities through managing the number of worker containers instead of managing the number of pool processes per worker.

When start a Celery worker via `celery -A tasks worker --loglevel INFO --pool=solo`

## Celery Task

### What is Task in Celery

### How Task be Executed

```py
from celery import Celery, Task

app = Celery(...)

@app.task(base=Task)
def add(x, y):
  return x + y

@app.task(base=Task)
def mul(x, y):
  return x * y
```

The `@app.task` decoration will use `Task` class in default if you don't specify explicitly.

When a worker start by `celery -A tasks worker`,

1. Worker will spawn child Processes, the number of child Processes is based on CPU cores in default.
2. Each child Process will initialize a `Task` instance for every decorated function. Here `add()` has its own `Task` instance and `mul()` also has its own `Task` instance respectively.

When a client call `add.delay(1, 2)`,
  
1. Worker receive a Task in Queue.
2. Worker assign the Task to a child Process, which will determine to use which `Task` instance to execute. A `Task` instance is initialized in each decorated function and registered with a task name using function name in default(such as `add`, `mul`). Here is the `Task` instance with name `add()` should be picked up to run the task.
3. When be decorated in `add()`, the `Task` instance `run()` method will be `add()` original function body. The child Process will use the `Task` instance's `__call__()` method to run task, and `__call__()` will invoke the `run()` within itself.  

## Known Issues

[Result state is always PENDING in windows](https://github.com/celery/celery/issues/2146)

> FIX: use `--pool=solo` instead of `--pool=prefork` in default. `multiprocessing` may cause this problem as its some defect in windows!


## References

[Celery Execution Pools: What is it all about?](https://distributedpython.com/posts/celery-execution-pools-what-is-it-all-about/)

[Celery Exececution Pool: The worker and the pool - separation of concerns](https://distributedpython.com/posts/celery-pool-types-part-1-the-worker-and-the-pool/)

[Serving ML Models in Production with FastAPI and Celery | by Jonathan Readshaw | Towards Data Science](https://towardsdatascience.com/deploying-ml-models-in-production-with-fastapi-and-celery-7063e539a5db)

[GitHub - liviaerxin/FastAPISpamDetection: Code for my Medium article: "How you can quickly deploy your ML models with FastAPI"](https://github.com/liviaerxin/FastAPISpamDetection)