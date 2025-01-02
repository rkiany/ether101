# Cluster Setup

In this guide, we will deploy a Proxmox VE cluster on at least three servers. After installing Proxmox VE on each node, log in to your first node at https://IP:8006, create the cluster (Datacenter → Cluster), and then log in to each additional node to join the cluster. Creating a cluster is straightforward, and there are many tutorials available on YouTube. Here are some important notes about Proxmox Cluster:

1. The cluster is created by [corosync](https://corosync.github.io/corosync/), a high availability development toolkit. This toolkit enables the cluster to have decentralized configurations, meaning no node is more important than the others (by default). It requires low latency and reliable network connectivity. Each datacenter needs its dedicated Proxmox Cluster, and you should not span a cluster over S2S VPN. While it does not use much data, it is best to avoid using the same network with a highly utilized switch. Ideally, have a redundant network defined for it from the beginning. If you did not create the second link during the initial configuration, you can follow [this guide](https://pve.proxmox.com/pve-docs/pve-admin-guide.html#_adding_redundant_links_to_an_existing_cluster) to create one.

2. Using shared storage such as NFS, Ceph, or iSCSI will enable the cluster's HA to work effectively. It is also needed for the Live Migrations feature of Proxmox VE. We are currently using NFS for cloning VM template images and are facing concurrency issues where we cannot spin up many VMs simultaneously. Additionally, performance is not great. We are considering using Ceph for the next data center, but it requires experimentation.

3. To allow your Terraform to communicate with your Proxmox API, you need to create a user and role for it and assign the role to the user. You can create the connection via username and API token (recommended). Here are the [docs](https://registry.terraform.io/providers/Telmate/proxmox/latest/docs) explaining these steps. We saved our Terraform API_URL in a provider.tf file in the root of our Terraform directory:

```provider.tf
terraform {
  required_providers {
    proxmox = {
      source  = "telmate/proxmox"
      version = ">=2.9.14"
    }
  }
}

provider "proxmox" {
  pm_api_url = var.pm_api_url
}
```

You need to set the following environment variables when running your Terraform so it has the credentials you created:

```bash
export TF_VAR_pm_api_url="https://192.168.10.21:8006/api2/json"
export PM_API_TOKEN_ID='terraform-prov@pve!terraform-token'
export PM_API_TOKEN_SECRET='long-secret'
```