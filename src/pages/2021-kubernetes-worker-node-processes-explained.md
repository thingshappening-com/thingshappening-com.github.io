---
  title: "Kubernetes node processes explained"
  description: "Kubernetes node processes explained"
  slug: 'kubernetes-node-processes-explained'
  tags: ["kubernetes"]
  pubDate: "2021-08-22"
  layout: "../layouts/BlogPostLayout.astro"
---

* This post assumes some familiarity with Kubernetes components such as pods, nodes, and services.

Every worker node in a K8's environment will have 3 processes running on the server.
1) Container runtime
2) Kubelet
3) kube-proxy

<h3>1) Container runtime</h3>
This is the process responsible for running the pod containers. It is a not a K8's specific process, it is the process of the container system you are using, for example Docker.

<h3>2) kubelet</h3>
This is a K8's process that is responsible for running and stopping pods on a node as well as assigning resources to the pods container. This process interfaces with both the container runtime and the node itself.

<h3>3) kube-proxy</h3>
In a K8's environment there will usually be replicas of each node for failover and load balancing. The K8's components that are responsible for managing what requests go to which node is called a service and a service uses another K8's worker process called kube-proxy to actually do the intelligent request forwarding.


- [Connecting Kubernetes Services to Deployments](https://tinytechtuts.com/2021-connecting-services-to-deployments-kubernetes/)