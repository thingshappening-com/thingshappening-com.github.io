---
  title: "Check if a value is present and is not a blank string on one line in JavaScript"
  description: "JavaScript one line value present and not blank"
  slug: 'javascript-one-line-value-present-and-not-blank'
  tags: ["javascript"]
  pubDate: "2022-09-25"
  layout: "../layouts/BlogPostLayout.astro"
---

To check if a reference is present and does not contain a blank string in JavaScript reference the following code snippet:

```javascript
(options.override_text && options.override_text !== "") ? "some-className" : "other-className"
```

The first part of the code snippet checks to see if there is a truthy value for `options.override_text`, if that Boolean expression is true the second part of the logical conjunction (&&) checks to make sure that if it is a string, that string is not blank. 
