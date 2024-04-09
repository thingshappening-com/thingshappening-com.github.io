---
  title: "Github Pages builds for Astro applications not working"
  description: "fix github pages builds for astro applications"
  tags: ["astro", "github-pages"]
  slug: "fix-github-pages-builds-for-astro-applications"
  pubDate: "2023-12-23"
  layout: "../layouts/BlogPostLayout.astro"
---

I continuously received build errors from Github Pages when trying to deploy an Astro application I was working on (aka this website). 

It turns out that Github Pages expects by default that your static site application is going to be a Jekyll application and so it will try to build it as a Jekyll application unless you explicitly tell it not to.

Fortunately for myself (and hopefully you as well) the fix was straightforward. 

At the root of your codebase add the following dotfile, `.nojekyll`. You can leave the contents of the file empty, the only thing github pages looks for is the existence of that file in order to skip the Jekyll build process.

I hope this helped you! Have a nice rest of your day!