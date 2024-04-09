---
  title: "Git: nuke and pave"
  description: "deploy to staging or test using gits nuke and pave strategy"
  slug: "deploy-to-staging-or-test-using-gits-nuke-and-pave-strategy"
  tags: ["git"]
  pubDate: "2022-09-05"
  layout: "../layouts/BlogPostLayout.astro"
---

On some programming teams, you might not need permission to push your code changes to a test/staging environment. There is likely a dedicated test/staging/regression branch your team will use to push testing changes to. In that circumstance, when you want to execute a test environment build you have a couple of options many of us are familiar with:
1. Merge your changes into the testing branch through `git merge`.
2. Merge your changes into the testing branch through `git rebase`.

An issue that might come up though is you might not need whichever changes currently exist in the regression branch, it’s possible someone already pushed testing changes to that branch that you don’t need. To get around this dilemma you can use a strategy known as nuke and pave. It works like this:
1. From your current branch, delete the current local testing branch `git branch -D staging`.
2. Create a new regression branch from your branch `git checkout -b staging`.
3. Force push your branch `git push origin -f staging`.

That should trigger your build hooks to start deploying your changes to your testing environment. 