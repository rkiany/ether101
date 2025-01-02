# Cluster Setup

Here we want to deploy a Proxmox VE cluster on at least three servers. After install Proxmox VE on each node, you will login to your first node at https://IP:8006 and create the cluster (Datacenter → Cluster) and then login to each addition node and join the cluster you just created. Creating a cluster is very easy and you can YouTube it to see many people explaining how to create one. Here are some important notes about Proxmox Cluster:

1- Cluster is created by [corosync](https://corosync.github.io/corosync/), a high availability development toolkit. This toolkit enables the Cluster to be have decentralized configurations and no node is more important than the other ones (by default).
