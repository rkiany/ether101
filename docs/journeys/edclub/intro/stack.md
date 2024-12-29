### edclub Stack

Our infrastructure is designed with key layers to ensure scalability, security, and performance. Here’s how it’s structured:

#### Global Layer: Traffic Management and Security
- **Cloudflare**:
  - **SSL Termination**: Handles secure connections globally for our applications.
  - **Load Balancing**: Ensures efficient traffic distribution across our data centers.
  - **CDN**: Speeds up content delivery worldwide.
  - **Security**: Protects against DDoS attacks and other threats with advanced WAF and rate limiting.

#### Data Center Layer: Compute and Networking
- **Load Balancing**: Traffic within the data center is managed by HAProxy.
- **Networking**:
  - **Firewalls**: FortiGate Firewalls (HA mode) secure the infrastructure.
  - **Switches**: FortiSwitches and Cisco Fiber Switches for robust and high-speed connectivity.

#### Application Layer: Compute and Services
- **Servers**: Supermicro servers for their reliability and performance.
- **Software Stack**:
  - [Python/Django](https://www.djangoproject.com/): Powers our web applications.
  - [PostgreSQL Cluster / autobase](https://github.com/vitabaks/autobase): Highly available PostgreSQL solution.
  - [Redis](https://redis.io/): For caching and real-time data processing.
  - [Celery](https://docs.celeryq.dev/en/stable/index.html): Manages background jobs.