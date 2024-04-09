---
  title: "Trim trailing spaces using VScode"
  description: "setup vscode to trim spaces"
  slug: "setup-vscode-to-trim-spaces"
  tags: ["vscode"]
  pubDate: "2022-07-31"
  layout: "../layouts/BlogPostLayout.astro"
---

To achieve this desired outcome, first install the trailing spaces extension.

After that is installed, open VScode commands (mac shortcut I use is cmd+shift+p) and navigate to Preferences: Open User Settings. When you select this a settings.json file will be displayed.

Add this to the object:
```
"trailing-spaces.trimOnSave": true
```

Or if this is your first update to the file create the whole object:
```
{"trailing-spaces.trimOnSave": true}
```

Now all that's left to do is give it a try. 
