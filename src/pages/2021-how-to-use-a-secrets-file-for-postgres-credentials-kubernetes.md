---
  title: "How to use a secrets file for postgres credentials using Kubernetes"
  description: "How to use a secrets file for postgres credentials using Kubernetes"
  slug: 'how-to-use-a-secrets-file-for-postgres-credentials-using-kubernetes'
  tags: ["kubernetes"]
  pubDate: "2021-08-24"
  layout: "../layouts/BlogPostLayout.astro"
---

In order to keep credentials safe in a Kubernetes environment there is a specific component called a secret. After a secrets configuration is applied in a Kubernetes environment its values will be available for configuring pods to connect to services such as a postgres db.

Making the secrets available in a K8's environment requires 3 steps:
1) Encoding the values for the secrets in base64
2) Defining the secrets component in a configuration file
3) Applying the secrets file to the Kubernetes environment

<h3>Encoding the values for the secrets in base64</h3>
To encode the credentials in base64 utilize the following command in the terminal:

```
echo -n 'postgres_un' | base64
```

This will output 'postgres_un' in base64.

<h3>Defining the secrets component in a configuration file</h3>

A few notes on the secrets configuration below:
- `type: Opaque` - This indicates that the secrets in the file are unstructured, as opposed to types such as `ServiceAccount` or `ImagePullSecret` which have restrictions on the values that can be declared.
- All of the secrets values that you want to reference reside under the `data` key. In this example `data.postgres-db-username` and `data.postgres-db-password`.

```
apiVersion: v1
kind: Secret
metadata:
  name: reporting-app-secrets
type: Opaque
data:
  postgres-db-username: cG9zdGdyZXM=
  postgres-db-password: cG9zdGdyZXM=
```

<h3>Applying the secrets file to the Kubernetes environment</h3>

To make the secrets available in your environment run the `kubectl apply` command with a `-f` flag and pass in the filename.
```
kubectl apply -f /fullpath/to/reporting-app-secrets.yaml
```

After the secrets are deployed to your environment you can reference them in deployments and services. They can be referenced in the `env` section of on of those files. Take this deployment file as an example

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

There is a lot of extra data in there unrelated to the secrets accessors, but I figured it would be more relevant to post the entire file. The secrets as you can see are accessed under `spec.template.spec.containers.env-name.valueFrom.secretKeyRef.key`. You mostly need to remember to pull secrets using `valueFrom.secretKeyRef.key`.

Similar posts:
- [When to use which service type in Kubernetes](https://tinytechtuts.com/2021-when-to-use-kubernetes-service-types-configip-loadbalancer-nodeport/)