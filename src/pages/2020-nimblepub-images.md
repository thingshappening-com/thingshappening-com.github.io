---
  title: "How to use images in NimblePublisher posts"
  description: "Learn how to use images in NimblePublisher blog posts"
  slug: 'learn-how-to-use-images-in-nimblepublisher-blog-posts'
  tags: ["cms", "elixir"]
  pubDate: "2020-12-08"
  layout: "../layouts/BlogPostLayout.astro"
---

As of this writing I am using Phoenix and NimblePublisher to write these posts. To load images in these posts I use image tags that point to this path in my application directory:
`my_app_name/assets/static/images/blog/:year/:month/:image_file`.

And the image tag in the *.md posts will use the relative path to the image file and that looks like:
`<image src="/images/blog/my_picture.png" alt="my_picture" />`.

Or using markdown:
`![alt my_picture](/images/blog/2020/december/my_picture.jpg)`

Explicit example in a post:
```
%{
  title: "How to add post scheduling to NimblePublisher",
  description: "Learn how to schedule posts using NimblePublisher",
  tags: ~w(elixir Phoenix CMS),
}
---
<image src="/images/blog/my_picture.png" alt="my_picture" />
```
It took me some time to get the routing right for images when I was building this CMS. I hope you found this to be useful.
