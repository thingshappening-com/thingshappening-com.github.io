---
  title: "Elixir: ensure all tests pass before commit"
  description: "using pre-commit in eliixr"
  slug: "using-pre-commit-in-eliixr"
  tags: ["elixir"]
  pubDate: "2022-09-07"
  layout: "../layouts/BlogPostLayout.astro"
---

If you want to run automated tests or a formatter before making a git commit in your project there is a helpful Elixir library called `elixir-pre-commit`. This library is a hook that will run before a commit is finalized. The module works by overwriting your pre-commit file in your `.git/hooks` directory.

To use the library add it to your deps in `mix.exs` and update your dependencies with `mix deps.get`.

```
def deps do
  [{:pre_commit, "~> 0.3.4", only: :dev}]
end
```

And then you will need to add the config to your development config. In Phoenix applications that would be `.config/dev.exs`. Below is an example configuration, the verbose keyword is optional but helps with debugging:

```
config :pre_commit,
  commands: ["formatter”, "test"]
  verbose: true
```

Now when you run `git commit` within this project your formatter will be run and then your test suite, if either of those fail then the commit will not succeed.

If you enjoyed this post you may also enjoy [Helper function for setting default Struct key](https://tinytechtuts.com/2022-helper-function-set-default-struct-key/).
