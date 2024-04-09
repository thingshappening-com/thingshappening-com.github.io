---
  title: "Why private directories exist on macOS"
  description: "Why private directories exist on macOS"
  slug: 'why-private-directories-exist-on-macos'
  tags: ["macos", "operating-systems"]
  pubDate: "2021-10-17"
  layout: "../layouts/BlogPostLayout.astro"
---

When software is installed on an operating system, directories and links are created that tie the softwares componments together. Sometimes those folders or files will be hidden, this is to protect those files from accidental changes or deletion of those files/directories. If you were to make a change to one of those files unknowingly, the software may not perform as expected and most people using operating systems are not developers that can troubleshoot such issues. 

To see which files are hidden in a directory on macOS run the `ls` command and pass it the `-a` option:

```
ls -a /path/to-directory
```

To create a hidden file or directory you can use the `touch` command:

```
touch .my-hidden-file
```

To test that the file is hidden run the `ls` command in the directory without the `-a` option. If the file does not appear then run `ls -a` to ensure it is there.

```
=> touch .my-hidden-file
=> ls
# nothing to see here
=> ls -a
.my-hidden-file
```
