---
  title: "301 vs 302 redirects using Phoenix"
  description: "redirects using Phoenix"
  slug: 'redirects-using-phoenix'
  tags: ["elixir", "phoenix"]
  pubDate: "2021-07-14"
  layout: "../layouts/BlogPostLayout.astro"
---

If you need a temporary redirect aka `302` using the `redirect/2` function:
```
def redirect_show(conn, %{"id" => id}) do
  conn
  |> redirect(to: Routes.blog_path(conn, :show, id))
end
```

If you are permanently moving a page and want to indicate that to mother Google and the rest of the web you need to first execute the `put_status/1` function and then pipe to `redirect/2`.

```
def redirect_show(conn, %{"id" => id}) do
  conn
  |> put_status(:moved_permanently)
  |> redirect(to: Routes.blog_path(conn, :show, id))
end
```

Check out other Phoenix posts:
- [Route static paths across LiveView and App templates](https://tinytechtuts.com/2020-liveview-conn-vs-socket/)
- [On-page SEO meta-tags and page-title for Phoenix applications](https://tinytechtuts.com/2020-seo-in-elixir/)