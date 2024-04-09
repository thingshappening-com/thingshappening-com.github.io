---
  title: "Ruby no preset version installed asdf"
  description: "fix ruby error no preset version installed"
  slug: 'understanding-elixir-range-through-explanation'
  tags: ["ruby"]
  pubDate: "2021-09-21"
  layout: "../layouts/BlogPostLayout.astro"
---

The issue I faced here was:
1. I installed a new version of ruby
2. I added that version to my .tool-versions file
3. I tried to run the application and was faced with the error `No preset version installed for ...`

I imagine others will face this issue with different plugins, but the answer for me was to reshim so that the exectuables were created for the Ruby version I wanted to use:

```
asdf reshim ruby 2.5.6
```

After that I was able to run ruby executables for Rbuy 2.5.6.
