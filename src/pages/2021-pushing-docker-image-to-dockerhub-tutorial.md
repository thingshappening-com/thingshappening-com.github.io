---
  title: "How to push a local Docker Image to Docker Hub"
  description: "Pushing a local Docker Image to Docker Hub"
  slug: 'pushing-a-local-docker-image-to-docker-hub'
  tags: ["docker"]
  pubDate: "2021-08-08"
  layout: "../layouts/BlogPostLayout.astro"
---

* This post assumes you have Docker installed and running on your local machine, if that is not the case follow the steps outlined [here](https://docs.docker.com/get-docker/) for your respective OS.
* This post assumes you have already built the image locally.

The steps required to push your first Docker image to Docker Hub:
1) Login to or signup for Docker on their [website](https://www.docker.com/).
2) Create an empty repository on the website. The only thing required here is a name for the repository. Make sure it is public, which it will be by default. Follow [this link](https://docs.docker.com/docker-hub/repos/) for more details.
3) Login to docker on the command line `docker login` using the same credentials as the website.
4) Find the local image you want to push to Docker Hub through the command `docker image ls`.
5) Tag the Docker image, which is the equivalent to staging it for release:

```
<!-- template -->
docker tag local-image:local-tag-name docker-username/empty-repo-name:tag-name

<!-- example -->
docker tag k8s-test-app:latest joe-britton/first-repo:v.0.0.1
```
6) Check that the tag was created through the command `docker image ls`.
7) Push the image to Docker Hub through the command `docker push joe-britton/first-repo:v.0.0.1`
8) Revisit the repository you created on Dockers website and you should see your image.

