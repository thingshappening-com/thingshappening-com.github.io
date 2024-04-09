---
  title: "Connecting Kubernetes Deployments to Pods"
  description: "How to connect Kubernetes deployments to pods"
  slug: 'how-to-connect-kubernetes-deployments-to-pods'
  tags: ["kubernetes"]
  pubDate: "2021-08-23"
  layout: "../layouts/BlogPostLayout.astro"
---

When using Kubernetes pods need to be connected to deployments so the deployment knows which pods it is responsible for. This requires specific key/value pair mappings in your K8's deployment configuration. This mapping is known as matching labels with selectors where the declared label for the pod(s) needs to be selected by the deployment.

First to declare the pods label add a value in the deployment configuration for the path `spec.template.metadata.labels.app`. Example:
```
spec:
  template:
    metadata:
      labels:
        app: reporting-db
```

Then to map the pod(s) to the deployment using a selector you would specify a value in the deployments configuration for `spec.selector.matchLabels.app`. Example:
```
spec:
  selector:
    matchLabels:
      app: reporting-db
```


Similar posts:
- [How to use a secrets file for postgres credentials using Kubernetes](https://tinytechtuts.com/2021-how-to-use-a-secrets-file-for-postgres-credentials-kubernetes/)
- [When to use which service type in Kubernetes](https://tinytechtuts.com/2021-when-to-use-kubernetes-service-types-configip-loadbalancer-nodeport/)
- [Connecting Kubernetes Services to Deployments](https://tinytechtuts.com/2021-connecting-services-to-deployments-kubernetes/)
- [How to view a Kubernetes pods IP address](https://tinytechtuts.com/2021-how-to-view-kubernetes-pod-ip-address/)
- [How to view the status data in a Kubernetes Deployment](https://tinytechtuts.com/2021-how-to-view-the-status-data-of-a-kubernetes-deployment/)
- [Create your first Rails app cluster with Kubernetes and Docker](https://tinytechtuts.com/2021-create-your-first-kubernetes-rails-app-pt1/)
- [Kubernetes kubectl commands for newbies](https://tinytechtuts.com/2021-kubernetes-kubectl-commands-for-newbies/)
