---
  title: "Multiline inline conditional rendering React"
  description: "Inline multiline conditional rendering React"
  slug: 'inline-multiline-conditional-rendering-react'
  tags: ["react"]
  pubDate: "2022-01-13"
  layout: "../layouts/BlogPostLayout.astro"
---

This style of rendering JSX can be thought of as less readable, but I prefer it for its conciseness and to me it looks pretty readable since once you know what a ternary expression is doing you know what this statement is doing. 

In this JSX below if `condition` evaluates to `true`, then the `<img>` is rendered and if `condition` is `false` then `<button>` will be rendered.

```javascript
return(
  <div>
    {condition
      ? (
        <img src={icon} alt="close" className="xl-btn" onClick={onClick} type="button" />
      )
      : (
        <button aria-label="Close" className="xl-btn" onClick={onclick} type="button">
          <i className="fa xl-fa-times" />
        </button>
      )
    }
  </div>
)
```
