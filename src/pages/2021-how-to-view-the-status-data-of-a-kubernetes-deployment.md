---
  title: "How to view the status data in a Kubernetes Deployment"
  description: "How to view the status data in a Kubernetes Deployment"
  slug: 'how-to-view-the-status-data-in-a-kubernetes-deployment'
  tags: ["kubernetes"]
  pubDate: "2021-08-19"
  layout: "../layouts/BlogPostLayout.astro"
---

Note:
If you are interested in creating a Kubernetes Deployment check out this previous post:
- [Create your first Rails app cluster with Kubernetes and Docker](https://tinytechtuts.com/2021-create-your-first-kubernetes-rails-app-pt1)

On with the show...

In every Kubernetes Deployment there are 3 sections to the configuration file:
1) metadata
2) spec
3) status

The first two are explicitly written in a configuration file by you the engineer but the status section gets added by K8's when the deployment is triggered. It is the clusters master node's etcd component that contains this data as it tracks the expected state vs the currently deployment state of the cluster.

To print the output of the K8's deployment to your terminal and also view the status data in YAML format use the following command:

```
kubectl get deployment reporting-app-deployment -o yaml
```

You will see a lot of data populated by K8's in each section of the output, but the key thing to note is the `status:` section which can be useful to see if your expected K8's environment matches what is currently running. Specifically check that the values for `status.availableReplicas` matches `spec.replicas`.

Similar post:

- [Connecting Kubernetes Deployments to Pods](https://tinytechtuts.com/2021-connecting-pods-to-deployments-kubernetes/)
