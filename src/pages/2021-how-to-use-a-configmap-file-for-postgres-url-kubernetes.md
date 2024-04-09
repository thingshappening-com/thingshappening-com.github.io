---
  title: "How to use a ConfigMap file for postgres environment variables in Kubernetes"
  description: "How to use a ConfigMap file for postgres environment variables in Kubernetes"
  slug: 'how-to-use-a-configmap-file-for-postgres-environment-variables-in-kubernetes'
  tags: ["kubernetes"]
  pubDate: "2021-09-05"
  layout: "../layouts/BlogPostLayout.astro"
---

In order to keep environment variables independent of the application itself in a Kubernetes environment there is a specific component called a ConfigMap. After a ConfigMap configuration is applied in a Kubernetes environment its values will be available for configuring pods to connect to services such as a postgres db.

Making the ConfigMap available in a K8's environment requires 2 steps:
1) Defining the ConfigMap component in a configuration file
2) Applying the ConfigMap file to the Kubernetes environment

<h3>Defining the ConfigMap component in a configuration file</h3>

NOTE: all of the ConfigMap values that you want to reference reside under the `data` key. In this example `data.database_url`.

```
apiVersion: v1
kind: ConfigMap
metadata:
  name: reporting-app-configmap
data:
  database_url: reporting-db-service
```

<h3>Applying the ConfigMap file to the Kubernetes environment</h3>

To make the ConfigMap available in your environment run the `kubectl apply` command with a `-f` flag and pass in the filename.
```
kubectl apply -f /fullpath/to/reporting-app-configmap.yaml
```

After the ConfigMap is deployed to your environment you can reference them in deployments and services. They can be referenced in the `env` section of on of those files. Take this deployment file as an example

```
apiVersion: apps/v1
kind: Deployment
metadata:
  name: reporting-app-deployment
  labels:
    app: reporting-app
spec:
  replicas: 2
  selector:
    matchLabels:
      app: reporting-app
  template:
    metadata:
      labels:
        app: reporting-app
    spec:
      containers:
      - name: reporting-app
        image: jtburum/project1:v.0.0.4
        ports:
        - containerPort: 3000
        env:
        - name: POSTGRES_USER
          valueFrom:
            secretKeyRef:
              name: reporting-app-secrets
              key: postgres-db-username
        - name: POSTGRES_PASSWORD
          valueFrom:
            secretKeyRef:
              name: reporting-app-secrets
              key: postgres-db-username
        - name: POSTGRES_URL
          valueFrom:
            configMapKeyRef:
              name: reporting-app-configmap
              key: database_url
```

There is extra data in the snippet above unrelated to the secrets accessors, but I figured it would be more relevant to post the entire file. The secrets as you can see are accessed under `spec.template.spec.containers.env-name.valueFrom.configMapKeyRef.key`. You mostly need to remember to pull secrets using `valueFrom.configMapKeyRef.key`.

Similar posts:
- [When to use which service type in Kubernetes](https://tinytechtuts.com/2021-when-to-use-kubernetes-service-types-configip-loadbalancer-nodeport/)
- [Connecting Kubernetes Deployments to Pods](https://tinytechtuts.com/2021-connecting-pods-to-deployments-kubernetes/)
- [How to view a Kubernetes pods IP address](https://tinytechtuts.com/2021-how-to-view-kubernetes-pod-ip-address/)
- [How to view the status data in a Kubernetes Deployment](https://tinytechtuts.com/2021-how-to-view-the-status-data-of-a-kubernetes-deployment/)
- [Create your first Rails app cluster with Kubernetes and Docker](https://tinytechtuts.com/2021-create-your-first-kubernetes-rails-app-pt1/)
- [Kubernetes kubectl commands for newbies](https://tinytechtuts.com/2021-kubernetes-kubectl-commands-for-newbies/)