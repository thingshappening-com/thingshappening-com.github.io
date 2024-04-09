---
  title: "How to paginate an in memory array"
  description: "How to implement pagination using Elixirs Nimblepublisher"
  slug: 'how-to-implement-pagination-using-elixirs-nimblepublisher'
  tags: ["nimblepublisher", "elixir"]
  pubDate: "2022-03-29"
  layout: "../layouts/BlogPostLayout.astro"
---

This is an example of how you can implement in memory pagination using Elixir and NimblePublisher. If you are unfamiliar with NimblePublisher you can check out this [blog post](https://dashbit.co/blog/welcome-to-our-blog-how-it-was-made) from Jose Valim and Dashbit.

First I want to address that there are many different methods for handling pagination in an application, but what I wanted to do was paginate an in memory array, or List, in Elixir. This is a list of blog posts gets compiled with my Elixir application on startup. 

The end goal here was to be able to render 10 posts per page with the first ten showing on the homepage of this website and every subsequent ten posts being displayed at https://tinytechtuts.com/page/2/, https://tinytechtuts.com/page/3/, etc.

To handle this you first need to define two routes in your `router.ex` file. You only need to define two routes if you want the same setup I have (homepage and /page), you could also just have a single route for `/page/:count`.

```elixir
get "/", BlogController, :index
get "/page/:count", BlogController, :paginate
```

Below is the code for accessing the list of blog posts. This code injects the NimblePublisher macro into the module which creates the `@posts` variable and then the posts are sorted by date and filtered for published posts, from there it sets the data for `@tags` and defines two getter methods for that data.

```elixir
defmodule DevDecks.Blog do
  alias DevDecks.Blog.Post

  use NimblePublisher,
    build: Post,
    from: Application.app_dir(:dev_decks, "priv/posts/**/*.md"),
    as: :posts,
    highlighters: [:makeup_elixir, :makeup_erlang]

  @posts Enum.sort_by(@posts, & &1.date, {:desc, Date})
  @published_posts Enum.filter(@posts, fn (p)-> p.published end)
  @tags @published_posts |> Enum.flat_map(& &1.tags) |> Enum.uniq() |> Enum.sort()

  def all_posts, do: @published_posts
  def all_tags, do: @tags
end
```

Then in the controller define the two functions referenced in our router code, one for handling `index` requests and one for handling `paginate` requests.

The `index` action will only need to worry about setting state for `has_next_page` to see if a next page is available, `next_page_link`, which holds the next link for pagination and `posts` for paginated blog posts. The `paginate` action will declare an extra state value for `previous_page_link` to handle previous page navigation. The code for the `Blog` methods will be covered later.

```elixir
defmodule DevDecksWeb.BlogController do
  alias DevDecksWeb.Router.Helpers, as: Routes
  use DevDecksWeb, :controller
  alias DevDecks.Blog

  def index(conn, _p) do
    page = 1
    next_page_link = "/page/#{page + 1}"

    render(
      conn,
      "index.html",
      posts: Blog.paginated_posts(page),
      has_next_page: Blog.has_next_page(page),
      next_page_link: next_page_link
    )
  end

  def paginate(conn, %{"count" => count}) do
    {count, _} = Integer.parse(count)
    next_page = count + 1
    previous_page = count - 1
    next_page_link = next_page == 1 && "/" || "/page/#{next_page}"
    previous_page_link = previous_page == 1 && "/" || "/page/#{previous_page}"

    render(
      conn,
      "paginate.html",
      posts: Blog.paginated_posts(count),
      next_page: count + 1,
      next_page_link: next_page_link,
      previous_page_link: previous_page_link,
    )
  end
end
```

In the previously referenced `Blog` application context is where the behavior for the pagination functionality will live. The `paginated_posts` function below creates a range of a count up to 9, which will give us 10 items if using a starting point of 0, eg. `0..9`. The function then filters the NimblePublisher `@published_posts` using the index of each post and the `start..stop` range, if a post exists at the index, it will be included in the paginated page.

The `has_next_page` function takes the current page value and checks to see if there are any more posts in the collection at then next index value.

```elixir
  def paginated_posts(page) do
    start = (page * 10) - 10
    stop = start + 9

    @published_posts
    |> Enum.with_index
    |> Enum.filter(fn({_, index}) ->
      Enum.member?(start..stop, index)
    end)
    |> Enum.map(fn(tuple) ->
      elem(tuple, 0)
    end)
  end

  def has_next_page(page) do
    first_index = (page * 10) - 10

    cond do
      Enum.at(@published_posts, first_index) -> true
      true -> false
    end
  end
```

Then in the html template make use of the state delcared in the controllers by rendering the posts using an elixir comprehension and render a link for the next page if relevant.

Index page:
```elixir
  <%= for post <- @posts do %>
    <div id="<%= post.id %>" style="margin-bottom: 1.5rem;">
      <div class="flex-row-d-column-m">
        <h2>
          <%= link post.title, to: Routes.blog_path(@conn, :show, post), class: "blog-title" %>
        </h2>
        <time><%= post.date %></time>
      </div>

      <div class="flex-row-no-space">
        <img class="icon-sm" src="<%= Routes.static_path(DevDecksWeb.Endpoint, "/images/tag.svg") %>" />&nbsp<%= Enum.map(post.tags, fn t -> link("#{t}", to: "/tags/#{t}", class: "blog-tag") end) %>
      </div>
    </div>
  <% end %>
  <%= link("More Blog", to: @next_page_link) %>
```


Paginate page:
```elixir
 <%= for post <- @posts do %>
    <div id="<%= post.id %>" style="margin-bottom: 1.5rem;">
      <div class="flex-row-d-column-m">
        <h2>
          <%= link post.title, to: Routes.blog_path(@conn, :show, post), class: "blog-title" %>
        </h2>
        <time><%= post.date %></time>
      </div>

      <div class="flex-row-no-space">
        <img class="icon-sm" src="<%= Routes.static_path(DevDecksWeb.Endpoint, "/images/tag.svg") %>" />&nbsp<%= Enum.map(post.tags, fn t -> link("#{t}", to: "/tags/#{t}", class: "blog-tag") end) %>
      </div>
    </div>
  <% end %>


  <%= link("Less Blog", to: @previous_page_link) %>
  &nbsp
  &nbsp
  <%= if length(@posts) == 0 do %>
  <% else %>
    <%= link("More Blog", to: @next_page_link) %>
  <% end %>
```