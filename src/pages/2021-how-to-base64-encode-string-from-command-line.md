---
  title: "How to base64 encode a string using the command line on macOS"
  description: "base64 encode a string using Mac"
  slug: 'how-to-base64-encode-a-string-using-the-command-line-on-macos'
  tags: ["macos"]
  pubDate: "2021-08-13"
  layout: "../layouts/BlogPostLayout.astro"
---

```
echo -n 'blueballoons' | base64
=> Ymx1ZWJhbGxvb25z
```

The `echo` commands job is to output the string that is passed to it as an argument. By passing the `-n` flag we do not get the trailing newline in our output. Then we use the `|` to pipe the output to `base64` which base64 encode the string, in this case "blueballoons".

Similar post:
- [How to get and filter a list of previously executed commands on macOS](https://tinytechtuts.com/2021-how-to-get-and-filter-previously-executed-commands-macos/)