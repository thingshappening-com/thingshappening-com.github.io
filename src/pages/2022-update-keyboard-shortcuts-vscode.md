---
  title: "How to update keyboard shortcuts in VScode"
  description: "update vscode shortcuts"
  slug: "update-vscode-shortcuts"
  tags: ["vscode"]
  pubDate: "2022-08-04"
  layout: "../layouts/BlogPostLayout.astro"
---

If you need to update your shortcuts in VScode first open the command palette, on a mac you can do this through `cmd+shift+p`. This is not to be confused with your [user settings](https://tinytechtuts.com/2022-trim-spaces-vscode/) file.

Next type "Open Keyboard Shortcuts" and select it. This will open a JSON configuration file that you can paste your shortcuts in. Each configuration object has at two keys "key" and "command" which are fairly self explanatory and here is an example for reference:

```
[
  {
    "key": "alt+x",
    "command": "editor.action.selectToBracket"
  },
  {
    "key": "cmd+k",
    "command": "workbench.files.action.collapseExplorerFolders"
  }
]
```
