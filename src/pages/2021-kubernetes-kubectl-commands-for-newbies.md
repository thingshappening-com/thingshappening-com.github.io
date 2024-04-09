---
  title: "Kubernetes kubectl commands for newbies"
  description: "Kubernetes kubectl commands for people new to Kubernetes"
  slug: 'kubernetes-control-plane-processes-explained'
  tags: ["kubernetes"]
  pubDate: "2021-08-21"
  layout: "../layouts/BlogPostLayout.astro"
---


The goal with this post is to share K8's commands I've found useful in my first few attempts to deploy K8's components. I hope you find it to be a handy reference in your K8's journey.

...


```
kubectl get pods
```
This command can be replaced with many other K8's components like deployment, service, nodes etc. and will return a list of those components running in your environment and their status information

```
kubectl get pod pod_id
```

This command can be replaced with many other K8's components like deployment, service, node etc. and will return status information about the given component

```
kubectl get pod pod_id -o wide
```
This command will give you more detailed information about the component as well as its status information


```
kubectl exec -it pod_id -- sh
```
This command will bring you into the shell of the container pod


```
kubectl delete deployment deployment_id
```
This will delete the deployment and any pods associated. The same can be done with K8's services.


```
kubectl get endpoints
```
Use this command to get a list of service endpoints running in your environment and details about them such as IP address and port.


```
kubectl edit deployment deployment_id
```
This command will allow you to update a deployment from the command line. After executing the update any new changes to the deployment environment will take place.

```
kubectl apply -f config-file-name.yaml
```
This will take the config file and create the K8's components involved. This could be a service, deployment, configMap or secret.

```
kubectl describe service service_id
```
Use this command to get more detailed information about a K8's component such as a service, pod, etc.

```
kubectl get all
```
This command can be used to see all running components in a K8's environment

