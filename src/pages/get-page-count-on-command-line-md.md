---
  title: "Get a count of all .md files in a directory on the command line"
  description: "Get a count of all .md files on the command line"
  tags: ["shell", "script"]
  pubDate: "2023-12-29"
  slug: "Get-a-count-of-all-.md-files-on-the-command-line"
  layout: "../layouts/BlogPostLayout.astro"
---

In building my Astro website I wanted to know how many posts I had published to my webiste. I thought about finding a way to do this in the UI so I could just go to a certain page and visualize the post count there, but I found a simple command line script that gets the job done just fine for my purpose.

```
ls -l src/pages | grep -c '\.md'
```

The above script will return a count of all files with the `.md` file extension in the `src/pages` directory, which is where all of my posts are stored. This could be done for any type of file extension you want to use.

```
=> ls -l src/pages | grep -c '\.md'
252
```

I hope this helped! Have a good one!

Check out another post:
- [How to handle Ecto associations with UUIDs](https://tinytechtuts.com/2023-ecto-associations-with-uuids/)
