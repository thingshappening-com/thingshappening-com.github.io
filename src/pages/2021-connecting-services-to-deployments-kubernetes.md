---
  title: "Connecting Kubernetes Services to Deployments"
  description: "How to connect Kubernetes Services to Deployments"
  slug: 'how-to-connect-kubernetes-services-to-deployments'
  tags: ["kubernetes"]
  pubDate: "2021-08-27"
  layout: "../layouts/BlogPostLayout.astro"
---

When using Kubernetes services need to be connected to deployments so that all of the pods in the deployment can receive traffic to the services static IP and its port. This requires specific key/value pair matchings in each of these components (service and deployment) configurations. This mapping is known as matching labels with selectors where the declared label for the deployment needs to be selected by the service.

First your deployment configuration you must declare a value for `metadata.labels.app`; this value will be used by the service as a way to select the deployment to connect to. Example:
```
metadata:
  name: reporting-db-deployment
  labels:
    app: reporting-db
```

Then to map this deployment to a service you would specify it in the services configuration through `spec.selector.app`. Example:
```
spec:
  selector:
    app: reporting-db
```

Similar posts:
- [How to use a secrets file for postgres credentials using Kubernetes](https://tinytechtuts.com/2021-how-to-use-a-secrets-file-for-postgres-credentials-kubernetes/)
- [When to use which service type in Kubernetes](https://tinytechtuts.com/2021-when-to-use-kubernetes-service-types-configip-loadbalancer-nodeport/)
- [Connecting Kubernetes Deployments to Pods](https://tinytechtuts.com/2021-connecting-pods-to-deployments-kubernetes/)
- [How to view a Kubernetes pods IP address](https://tinytechtuts.com/2021-how-to-view-kubernetes-pod-ip-address/)
- [How to view the status data in a Kubernetes Deployment](https://tinytechtuts.com/2021-how-to-view-the-status-data-of-a-kubernetes-deployment/)
- [Create your first Rails app cluster with Kubernetes and Docker](https://tinytechtuts.com/2021-create-your-first-kubernetes-rails-app-pt1/)
- [Kubernetes kubectl commands for newbies](https://tinytechtuts.com/2021-kubernetes-kubectl-commands-for-newbies/)
