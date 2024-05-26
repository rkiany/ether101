### edclub.com stack:

This is the stack that we use at edclub: 
* [Python/Django](https://www.djangoproject.com/)
* Postgresql database using [Postgresql Cluster](https://github.com/vitabaks/postgresql_cluster)
* [Redis](https://redis.io/)
* [Celery](https://docs.celeryq.dev/en/stable/index.html) as Task Queue (background job runner)

We employ load balancing using haproxy and reverse proxying with nginx.