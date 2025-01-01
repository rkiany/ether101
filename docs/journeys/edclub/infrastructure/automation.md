# Automation (IaC) 

There are two main parts (other than CI/CD) to this story in the context of infrastructure. The first part involves being able to document, replay, and destroy your VMs on your hypervisors multiple times. The value of IaC needs no explanation here, and I assume you already appreciate this method of documenting your infrastructure.

Terraform is being used to spin up all (or most) of our VMs and LXCs. We originally started the database systems with LXC systems, but we found it difficult to proceed with many of our database installation automations since they require editing some kernel parameters which are not available for LXCs, forcing us to move to Hypervisor Kernel parameters. As a result, we migrated every DB resource to Ubuntu VMs. Our application stack is running on LXCs, and we are satisfied with the setup.

<<<<<<< HEAD
The second part of our automation journey involved using Telmate/proxmox to manage our Proxmox cluster. While this tool worked well for spinning up and managing VMs, we encountered some difficulties when trying to duplicate LXC templates. We think we can have some workarounds, but they require patching the Telmate software, which we did not want to do at this time. Maybe we will come back to this problem later.
=======
The second part of our automation journey involved using Ansible Playbooks to automate the installation of programs inside VMs. We intend to move and migrate the hosting of our application (not databases) to Kubernetes this year (2025).
>>>>>>> 25d5d72 (update to content)
