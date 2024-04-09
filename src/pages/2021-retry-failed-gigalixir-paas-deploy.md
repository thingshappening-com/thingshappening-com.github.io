---
  title: "Retry failed Gigalixir/PAAS deploy"
  description: "Retry failed Gigalixir/PAAS deploy"
  slug: 'retry-failed-gigalixir/paas-deploy'
  tags: ["gigalixir"]
  pubDate: "2021-10-05"
  layout: "../layouts/BlogPostLayout.astro"
---

Maybe your internet cut out in the middle of your deploy or another issue where your deployment to your PAAS provider failed (in my case the provider was Gigalixir but this also applies to Heroku and others). When you go try and rereun your failed deploy from the command line again, you are met with the message "Everything up to date". Now you need to find a way to deploy your changes. You could update some trivial text in your codebase and make a commit, but the route I prefer is to create an an empty commit with no changes to the files Git is tracking. You can do this through the following command:

```
git commit --allow-empty -m "rebuild"
```

The command above creates a commit with no changes to the files being tracked and sets a message for that commit of "rebuild". Since your PAAS provider has not built this commit before you are now ready to try to rerun your application deployment:

```
git push gigalixir master
```

For your continued enjoyment:
- [Deploying a clean build to Gigalixir](https://tinytechtuts.com/2020-gigalixir-deploy-no-cache/)
