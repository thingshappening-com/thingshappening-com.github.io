---
  title: "Create and set the innerText for in JavaScript for option element"
  description: "Set the innerText for in JavaScript for option element"
  tags: ["javascript", "option"]
  slug: "Set-the-innerText-for-in-JavaScript-for-option-element"
  pubDate: "2023-12-24"
  layout: "../layouts/BlogPostLayout.astro"
---

This is a quick code snippet post for someone having the same experience I did, which was "why in the hecking heck can't I get this simple javascript action to work". Lucky for you I finally got it.

```
let exportBookmarksTeamOption = document.createElement("option");
exportBookmarksTeamOption.setAttribute("id", user.team.id);
exportBookmarksTeamOption.innerText = user.team.name;
```

In the above code snippet I first create the option element, then add an id to it using the `setAttribute` function and finally set the `innerText` attribute. 

I hope this helped! Have a good one!