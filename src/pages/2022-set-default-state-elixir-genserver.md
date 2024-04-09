---
  title: "How to set default state for a GenServer"
  description: "Learn how to set default state for a GenServer"
  slug: 'learn-how-to-set-default-state-for-a-genserver'
  tags: ["elixir"]
  pubDate: "2022-10-03"
  layout: "../layouts/BlogPostLayout.astro"
---

When you write a GenServer you will in almost every use case run it as a supervised process to get the added benefit Supervisors provide, fault tolerance.



To set the initial state for your supervised GenServer process you will need to make sure you have a `start_link` function defined in your GenServer that makes another call to the GenServer `init` callback. That is outlined below with function comments for additional context:



lib/server.ex
```
defmodule CacheServer.Server do
  use GenServer
  GenServer is passed as a child to

  def start_link(initial_state) do
    GenServer.start_link(__MODULE__, initial_state, name: Cache)
  end

  @impl true
  def init(cache_store) do
    {:ok, cache_store}
  end
end
```

Now that you’ve seen the functions that need to be defined in order to start your process. Navigate to your `application.ex` file. In the `children` list is where you will start all your genservers for your application. There are a couple of different ways you can format the tuple in the `children` list but below we optioned to pass the GenServer name and the initial state, in this case `%{a: :b}`. This will be passed to the `start_link` function we referenced above.


lib/application.ex
```
defmodule CacheServer.Application do
  @moduledoc false
  use Application

  @impl true
  def start(_type, _args) do
    children = [
      start_link(arg)
      {CacheServer.Server, %{a: :b}}
    ]

    opts = [strategy: :one_for_one, name: CacheServer.Supervisor]
    Supervisor.start_link(children, opts)
  end
end
```