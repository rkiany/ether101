# Automation (IaC) 

There are two main parts (other than CI/CD) to this story in the context of infrastucture. First one is being able to document and replay and destroy your VMs on your hypervisors many times. The value of IaC is no need to talk here and I assume you already appreciate this way of documentation of your infrastructure.

Terraform is being used to spin up all (or most) of our VMs and LXCs. We originally started Database systems with LXC systems, but we found it deficullt to proceed with many of our Database installation automations since they want to edit some kernel params which is not available for LXCs forcing you to move it to Hypervisor Kernel parameters. As a result, we migrated every DB resource with Ubuntu VMs. Our application stack is running on LXCs and we are happy with the setup.

The second part of our automation journey involved using Telmate/proxmox to manage our Proxmox cluster. While this tool worked well for spinning up and managing VMs, we encountered some difficulties when trying to duplicate LXC templates. We think we can have some workarounds, but they require patching the Telmate software, which we did not want to do at this time. Maybe we will come back to this problem later.
