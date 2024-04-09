---
  title: "Kubernetes configuration ports explained"
  description: "Kubernetes configuration ports explained"
  slug: 'kubernetes-configuration-ports-explained'
  tags: ["kubernetes"]
  pubDate: "2021-08-25"
  layout: "../layouts/BlogPostLayout.astro"
---

When starting to work with Kubernetes there are many port declarations in configuration files and it can be easy to forget which port is responsible for which traffic, I hope this post can be a reference for you when those situations arise.

Ports defined in deployment configuration:
1) `spec.containers.ports.containerPort` - This is the port at which the pod/container is reachable.

Ports defined in service configuration:
1) `spec.ports.nodePort` - This is the port of the node(s) in the cluster. It is the port at which the node can be reached from external traffic.
2) `spec.ports.port` - This is the port of the cluster service itself. After receiving a valid request the traffic will be forwarded to the pod/containers `targetPort`
3) `spec.ports.targetPort` - This is the port the service will forward requests to. It is the port your pod/container is listening for requests on.
