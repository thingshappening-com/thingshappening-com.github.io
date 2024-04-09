---
  title: "Opening VScode in new window on Mac + shortcut"
  description: "new vscode window mac"
  slug: "new-vscode-window-mac"
  tags: ["vscode"]
  pubDate: "2022-08-02"
  layout: "../layouts/BlogPostLayout.astro"
---

Once you've installed VScode you will have access to the following command to open a new window:
```
code -n .
```

In order to create an alias for this command open your .bashrc or .zshrc or equivalent and create the alias:
```
alias code="code -n ."
```

After restarting your terminal you could now be able to execute `code` to open a new window.