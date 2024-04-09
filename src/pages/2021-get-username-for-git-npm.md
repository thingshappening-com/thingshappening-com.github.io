---
  title: "How to get your username in Git and NPM"
  description: "get usernames in git and npm"
  slug: 'get-usernames-in-git-and-npm'
  tags: ["git", "npm"]
  pubDate: "2021-03-11"
  layout: "../layouts/BlogPostLayout.astro"
---

This is a cheatsheet/reference guide for accessing your username for the titled technologies:

Get git username:
```
git config --list
```
The above command will provide your current git username and email. If you run it from a directory with git tracking it will provide additional git repo information such as the git url.

Get NPM username:
```
npm whoami
```
The above command will provide your username with no additional information.

