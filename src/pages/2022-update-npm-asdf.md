---
  title: "Update NPM when using ASDF"
  description: "How to update npm is you're using asdf"
  slug: "how-to-update-npm-is-you're-using-asdf"
  tags: ["npm", "asdf"]
  pubDate: "2022-09-03"
  layout: "../layouts/BlogPostLayout.astro"
---

To be able to updated NPM first make sure node is installed and added to your tool-versions or set a local / global version of nodejs.

You can set a version locally using:
```
asdf local package version
```

Or globally through:
```
asdf global package version
```

You can validate that npm and nodes are being run by asdf by running the command:
```
which npm
```

And that will print the working directory of the executable, which should have asdf in the path if you’re using npm through asdf. Something like:
```
/Users/user/.asdf/shims/npm
```

If you have nodejs installed through asdf and a version set, you can then install a different version of npm with the `npm install` command:
```
npm install -g npm@8.3.0
```

After that completes you will want to reshim:
```
asdf reshim
```

No you should be ready to work.
