---
  title: "Setting asdf package versions"
  description: "How to set asdf package versions"
  slug: "how-to-set-asdf-package-versions"
  tags: ["asdf"]
  pubDate: "2022-09-13"
  layout: "../layouts/BlogPostLayout.astro"
---

There a few different options you have when setting a package version in ASDF.

1. You can set a version locally using a .tool-versions file
2. You can set a version globally using a .tool-versions file
3. You can set a version locally using an asdf command 
4. You can set a version globally using an asdf command 

If you want to specify a local package version using a .tool-versions file, you will need to create the file at the root of your project directory and then list the packages you want to use for that project in the file.

```
touch .tool-versions
```

And then in the file add packages, ex:

```
nodejs 14.11.0
ruby 2.7.1
```

If you want to specify default packages for your computer you can create at your .tool-versions file at the user root directory and specify packages there. These packages will be overridden in any project specific (local) .tool-versions file.

You can also set package versions through the command line using the commands:
```
asdf local package_name version
asdf global package_name version
```