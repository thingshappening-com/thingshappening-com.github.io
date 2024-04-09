---
  title: "How to read Ruby Gemfile package versions"
  description: "How to read Ruby Gemfile versions"
  slug: 'how-to-read-ruby-gemfile-versions'
  tags: ["ruby"]
  pubDate: "2021-08-16"
  layout: "../layouts/BlogPostLayout.astro"
---

When I was looking into how to read RubyGem versions in Gemfile's I was hoping to find some examples to reference but didn't find quite what I was looking for. I hope these annotated examples are helpful:

```
gem 'rails', '~> 6.1.4'
```

The above `gem` method says to install Rails at a version greater than or equal to 6.1.4 (>= 6.1.4) and less than 6.2 (< 6.2).

```
gem 'wisper', '~> 2.0', '>= 2.0.1'
```

The above `gem` method has two arguments. The first says to install the Wisper gem at a version greater than or equal to 2.0 (>= 2.0) and less than 3.0 (< 3.0). The second argument makes it more specific and requires that the version be greater than or equal to 2.0.1.

Similar post:
- [The missing guide to troubleshooting RubyGem issues](https://tinytechtuts.com/2021-the-missing-guide-to-troubleshooting-rubygem-issues/)
