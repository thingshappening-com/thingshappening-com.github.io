---
  title: "Create scheduled posts using NimblePublisher"
  description: "learn how to create scheduled posts using NimblePublisher"
  slug: 'learn-how-to-create-scheduled-posts-using-nimblepublisher'
  tags: ["elixir", "cms"]
  pubDate: "2021-03-27"
  layout: "../layouts/BlogPostLayout.astro"
---

To accomplish this I first tried creating a scheduled_posts folder in my app and then could use the Quantum library to move posts from the scheduled_posts folder to the posts folder, which contains the published posts, on a nightly.

The issue I ran into there was that the storage there was ephemeral and was overwritten on each deploy/new instance so my scheduled posts would be overwritten quickly.

I was eventually able to get this working by adding a published key to the Post struct:
```
defstruct [:id, :title, :body, :description, :tags, :date, :published]
```

And then when the posts are queried for in the Blog I filter them based on their date, if the date of the post is later than today's date then that post will not be published, otherwise it will be. The code for that, which exists in my `blog.ex` file as:

```
@posts Enum.map(@posts, fn (p)->
  cond do
    Date.compare(p.date, Date.utc_today) == :lt -> %{p | published: true}
    true -> p
  end
end)
@published_posts Enum.filter(@posts, fn (p)-> p.published end)
```

