---
  title: "How to run two different git branches locally"
  description: "How to run two different git branches locally"
  slug: 'how-to-run-two-different-git-branches-locally'
  tags: ["git"]
  pubDate: "2022-04-23"
  layout: "../layouts/BlogPostLayout.astro"
---

To handle this you will need to use a git worktree. This will create a new directory in your local system that has the same git tracking information.

To accomplish this execute `git worktree add` and pass it the name of the directory and branch name (in that order). 

```
git worktree add ../new-directory branch-name
```

Later when you need to remove that worktree you can use the command `git worktree prune` from your original directory (not the newly created directory) which will remove the worktree, or you can use `git worktree remove path-to-worktree`.
