---
  title: "How to view a Kubernetes pods IP address"
  description: "How to view a Kubernetes pods IP address"
  slug: 'kubernetes-control-plane-processes-explained'
  tags: ["kubernetes"]
  pubDate: "2021-08-20"
  layout: "../layouts/BlogPostLayout.astro"
---

To begin you will first need to get the ID of the pod whose IP address you are looking for using the command:

```
kubectl get pods
```

This will give you a list of pods your Kubernetes environment knows about along with status data. The `NAME` column is the ID for each pod.

Then you can use the below command to get the IP address and additional data about the pod:

```
kubectl get pod reporting-app-deployment-8678d5688b-n2xvb -o wide
```

Using the above command without the option `-o wide` would only have rendered the status data mentioned previously.

Similar post:
- [Kubernetes kubectl commands for newbies](https://tinytechtuts.com/2021-kubernetes-kubectl-commands-for-newbies/)