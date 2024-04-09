---
  title: "When to use which service type in Kubernetes"
  description: "When to use which service type in Kubernetes"
  slug: 'when-to-use-which-service-type-in-kubernetes'
  tags: ["kubernetes"]
  pubDate: "2021-08-26"
  layout: "../layouts/BlogPostLayout.astro"
---

When creating a K8's service there are 3 types to choose from:
1) ConfigIP
2) NodePort
3) LoadBalancer

<h3>ConfigIP</h3>
This is the default K8's service type. If no type is explicitly declared this is will be what K8's uses. Use this type when you do not need external communication from outside the cluster, said another way, use this type when you only need app to app traffic. This would be a commonly used service type in a microservice architecture environment.

<h3>NodePort</h3>
This service needs to be explicitly declared in your service configuration at the key-path `spec.type`. This service type assigns a static port to each node in your K8's cluster and makes the service accessible outside of the cluster. When using this service you will also need to declare the port you want to reach the nodes in the cluster using the following key-path in your service configuration `spec.ports.nodePort`. The value of the nodePort port is limited in range to 30000-32767. When applied this service will be accessible using the IP address of the node and the defined port. This is used the least frequently in practice because it gives external clients (ex web browser) access to the nodes directly.

<h3>LoadBalancer</h3>
This is the most frequently used service type for accepting external traffic. Using this type makes the service available externally using your cloud providers load balancer. This load balancer will need to use created to make use of this service type. This makes the external requests for secure because they are not hitting the nodes directly.

Final note:
These three service types is an extension of the previous types. NodePort is an extension of ConfigIP with additional functionality and LoadBalancer is an extension of NodePort.
