# Traffic Flow

Here is an overview of the visitors traffic being served:
![architecture](../../../assets/images/traffic-flow-CloudFlare.png)

Requests are route to CloudFlare network using DNS proxy feature of CloudFlare (CF) and goes through multiple layers of CF functionality before being routed to a tunnel endpoint. Of those layers are CF DDoS protection, URL Rewrite, Page Rules, etc. [Here](../assets/images/Cloudflare-traffic%20sequence.png) is a graph listing the layers. Once the traffic has gone through all those rules and layers, it will need to be routed to a Cloudflare tunnel that has been created using Cloudflared deamon that is installed and authenticated on a VM or an LXC on your hypervisor. Using this tunnels prevents us from opening any ports on our Firewall which will help increase our security posture. 

As you can see on the image above that the traffic can be balanced between two Data Centers and once it reaches the other side of the network, it can be send to a Load Balancer (after going through Firewall (optional step) for further packet/traffic inspection). At this point, the traffic is at the doors of internal web Load Balancer (LB) inside the network.

