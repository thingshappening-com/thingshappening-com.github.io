---
  title: "How to get and filter a list of previously executed commands on macOS"
  description: "base64 encode a string using Mac"
  slug: 'base64-encode-a-string-using-mac'
  tags: ["macos"]
  pubDate: "2021-08-15"
  layout: "../layouts/BlogPostLayout.astro"
---

```
history
=> output the the last 10000 or so commands executed.
```

The `history` command on macOS will output your previously executed commands in the order they were executed.

You can filter the output by piping it to the `grep` command like so:

```
history | grep docker
```

The above command will output only Docker commands from your history.

The output will also provide you the uid of the command executed and you can use that to rerun the command you were looking for. For example if your history's output was the below list and you wanted to rerun `docker image ls`...

```
10080  cd docker
10088  docker image ls
10089  history | grep docker
10090  docker build --tag=reporting-app .
10095  docker build --tag=reporting-app .
```

You could do so by executing this on your terminal:

```
!10088
```

Similar post:
- [How to base64 encode a string using the command line on macOS](https://tinytechtuts.com/2021-how-to-base64-encode-string-from-command-line/)