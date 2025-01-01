# Connectivity Overview

Our infrastructure employs three primary connectivity methods:

1. **Internet Connectivity**: Each data center's network, including individual VLANs, maintains direct Internet access.

2. **Site-to-Site IPsec VPN**: Data centers are interconnected via IPsec VPNs, facilitating secure inter-network communication.

3. **Cloudflare Tunnels**: We utilize Cloudflare Tunnels to route external traffic into our network without exposing firewall ports. This approach enhances security by eliminating open inbound ports.

To ensure redundancy, each data center connects through multiple ISPs, providing backup paths. Consequently, we establish multiple Site-to-Site VPN connections and deploy several Cloudflare Tunnel endpoints per data center to maintain continuous availability.
