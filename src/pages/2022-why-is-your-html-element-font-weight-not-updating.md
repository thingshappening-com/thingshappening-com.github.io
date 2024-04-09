---
  title: "Why is your HTML elements font weight not updating?"
  description: "troubleshooting html element font weight"
  slug: 'troubleshooting-html-element-font-weight'
  tags: ["html", "active-record"]
  pubDate: "2022-01-12"
  layout: "../layouts/BlogPostLayout.astro"
---

If you're dealing with this issue currently, I'd just like to offer some moral support. You know that increasing the font-weight up to a value of 900 should adjust the way the font appears, but nothing seems to be happening, right? Chances are in this situation you did not include the font specifically for that font-weight. That's right, if you didn't know that (like I didn't when troubleshooting this on my own) you need to specify each font-weight you want to use for each of the fonts in your application.

In practice in a Ruby on Rails web application that meant adjusting where I was loading the font and adding the value of the desired font-weight, you will need something similar in your application where you load your font types.

```
= stylesheet_link_tag "//fonts.googleapis.com/css?family=Roboto:500,400,300", media: "all"
```