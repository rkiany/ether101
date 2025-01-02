### Challenges

Transitioning from AWS to our own infrastructure was a major step forward, but it came with its fair share of challenges. Reflecting on the journey, here’s what stood out:

1. **Initial Cost**: Moving out of AWS requires a significant upfront investment. While pre-paying isn’t necessary, committing to multi-year contracts with service providers is often required. For us, the initial hardware and network equipment cost around $300K or more, excluding engineering time and effort.
   
2. **Network Engineering**: Depending on your networking equipment, you may need specialized network engineering skills. In some cases, you might be able to handle it yourself, but it's crucial to assess your capabilities and requirements.

3. **Vendor Selection**: Finding reliable partners to supply network and server equipment is essential. This part is relatively easy but requires diligent research and negotiation to ensure you get the best deals and support.

4. **Hypervisor Selection and Preparation**: Choosing the right hypervisor is a critical and complex step. It’s not just about selecting a hypervisor like Proxmox or VMware; it’s about ensuring that it integrates seamlessly with Infrastructure as Code (IaC) tools like Terraform. Preparing the hypervisor and your systems to work with Terraform requires careful testing, configuration, and adjustments to ensure efficient and consistent management of your infrastructure.

5. **Database Migration**: Moving our database out of AWS was one of the most challenging aspects. It required careful planning and execution to avoid downtime and data loss.

6. **Firewall Configuration**: Configuring and fine-tuning our firewall was optional but highly recommended. Proper firewall settings enhanced our infrastructure’s security and performance.

These challenges highlight the difficulties of leaving AWS, but overcoming them builds a stronger and more cost-effective infrastructure.
