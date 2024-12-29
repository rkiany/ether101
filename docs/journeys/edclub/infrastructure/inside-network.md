# Traffic Flow

Here is an overview of simplifed version of inside each DataCenter:
![architecture](../../../assets/images/inside-network-data-flow.png)

Here we have a Load Balancer distributing the traffic between multiple web servers (app servers). We use HAProxy to achive this functionality. Behind these web application servers are many other resources that we use such as multiple Database Clusters, Redis, Background job runners and many cloud based services such as Amazon S3, Amazon SES and many Google Web serives. So, as mentioned before, we do still rely on some Cloud functionalities.

Please note that there is a replication of databases should be happening over another Site-to-Site VPN using between the firewalls connecting these two networks together. 

Next we will cover a complex topic for High Availablity (HA) of Databases. We love Postgresql and use the [following](https://autobase.tech/) project to create and mantain clusters of Database with replication across Data Centers. We will get to this broad topic later. Let's jump to another world which is hypervisors and talking to your hypervisor using automation tools such a Terraform.
