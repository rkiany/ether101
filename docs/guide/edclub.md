### Our Stack

This is the stack that we use at edclub:

#### Software
* [Python/Django](https://www.djangoproject.com/)
* Postgresql database using [Postgresql Cluster](https://github.com/vitabaks/postgresql_cluster)
* [Redis](https://redis.io/)
* [Celery](https://docs.celeryq.dev/en/stable/index.html) as Task Queue (background job runner)
* We employ load balancing using haproxy and reverse proxying with nginx

#### Hardware
* **Servers**: We use Supermicro servers due to their excellent build quality and reliability.
* **Firewalls**: FortiGate Firewalls (in HA mode) provide security for our infrastructure.
* **Switches**: FortiSwitches (Fiber and Ethernet).

By combining these software and hardware solutions, we have built a resilient and efficient infrastructure to support our applications and services.