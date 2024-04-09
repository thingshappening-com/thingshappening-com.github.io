---
  title: "Create your first Rails app cluster with Kubernetes and Docker - Part 1"
  description: "create a rails cluster with Kubernetes"
  slug: 'create-your-first-rails-app-cluster-with-kubernetes-and-docker---part-1'
  tags: ["kubernetes"]
  pubDate: "2021-08-10"
  layout: "../layouts/BlogPostLayout.astro"
---

The goal of this post is to get a cluster of Rails application servers running on your local machine. Part one will not include connecting to a database.

Assumptions in this post:
* You have Docker installed and running on your local machine, if that is not the case follow the steps outlined [here](https://docs.docker.com/get-docker/) for your respective OS.
* This will use Homebrew for package installation. If you don't have Homebrew or are unfamiliar with how to download packages on your local machine and are using a Mac you can [follow this guide](https://docs.brew.sh/Installation).
* You understand K8s terminology such as pod, deployment, service, replica.

Steps we will go through to stand up the cluster:
1) Create a local Rails app Docker Image.
2) Push the local Docker Image to Docker Hub.
3) Install packages needed for local Kubernetes clustering.
4) Create a Kubernetes config file to build the cluster from.
5) Apply the config file and establish the external connection.

<h3>Create a local Rails app Docker Image</h3>

To create the Docker image first create a new rails app `rails new k8s-test-app`.

Then you need to create a Dockerfile at the root of the app directory:
```
cd /path/to/k8s-test-app && touch Dockerfile
```

Paste these directives into the Dockerfile. These are the commands that will be used to build your Docker image.
```
FROM ruby:2.5
RUN apt-get update -qq && apt-get install -y nodejs
WORKDIR /app
COPY Gemfile ./Gemfile
COPY Gemfile.lock ./Gemfile.lock
RUN gem install bundler -v 2.0.1
RUN bundle install
COPY . /app
EXPOSE 3000:3000
CMD ["rails", "server", "-b", "0.0.0.0"]
```

From the app root directory run the following command to build your image:
```
docker build --tag=k8s-test-app .
```

Find your image locally through the command `docker image ls`.

<h3>Push the local Docker Image to Docker Hub</h3>

You will need to push your image to a Docker Repository, for this tutorial that will be Docker Hub. I have outlined those steps in [this post](https://tinytechtuts.com/2021-pushing-docker-image-to-dockerhub-tutorial/).

<h3>Install packages needed for local Kubernetes clustering</h3>

To begin using K8's locally you will need to have a few packages installed. See the commands below to install these packages and their annotations for what their purpose is:
```
<!-- install a virtual machine to run the cluster -->
brew install hyperkit

<!-- link the vm -->
brew link hyperkit

<!-- install a local K8s environment that gives you access to K8s functionality -->
brew install minikube
```

Also note that Minikube will give you access to Kubectl which is the command line interface for working with K8s clusters.

<h3>Create a Kubernetes config file to build the cluster from</h3>

Create a YAML file at the root of your rails application directory:
```
cd /path/to/k8s-test-app && touch deployment.yml
```

Next Paste of the below code snippet into the deployment.yml file. This is your configuration from which the cluster will be built. This file will create two instances of your container and link them to the service created in the second part of the file. A few things to note about this spec:
1. Use the image you created in Docker Hub to build your containers replace `spec.template.spec.containers.image` with your image.
2. The port under `spec.template.spec.containers.ports.containerPort` must match what we declared in our Dockerfile so the container can be reached. In our case port 3000.
3. The service is connected to the deployments pods through the label in the deployment (`metadata.labels.app`) and the selector in the service (`spec.selector.app`)
4. We denote we want two container instances created through `spec.replicas` in the deployment.

```
apiVersion: apps/v1
kind: Deployment
metadata:
  name: k8s-test-app-deployment
  labels:
    app: k8s-test-app
spec:
  replicas: 2
  selector:
    matchLabels:
      app: k8s-test-app
  template:
    metadata:
      labels:
        app: k8s-test-app
    spec:
      containers:
      - name: k8s-test-app
        image: joe-britton/first-repo:v.0.0.1
        ports:
        - containerPort: 3000
---
apiVersion: v1
kind: Service
metadata:
  name: k8s-test-app-service
spec:
  selector:
    app: k8s-test-app
  type: LoadBalancer
  ports:
    - protocol: TCP
      port: 80
      targetPort: 3000
      nodePort: 30000
```

<h3>Apply the config file and establish the external connection.</h3>

First start the Minikube application using the Hyperkit VM.
```
minikube start --vm-driver=hyperkit
```

Now run the deployment to stand up the K8s cluster. This command will create the nodes and pods to run the Docker container, it will also create the service that will be used to communicate with the pods.
```
kubectl apply -f deployment.yml
```

To connect to the container through the browser locally an additional step is required:
```
minikube service k8s-test-app-service
```
This command will link the service you created to an IP address reachable from your browser. In most production deployments this step will not be required.

After running this command minikube will open the app for you automatically and you should see  the default rails page rendered. If that is the case then you have successfully deployed your first K8s cluster 🎉🎉.

Similar post:
- [How to view the status data in a Kubernetes Deployment](https://tinytechtuts.com/2021-how-to-view-the-status-data-of-a-kubernetes-deployment/)