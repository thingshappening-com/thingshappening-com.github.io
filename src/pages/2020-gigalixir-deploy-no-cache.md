---
  title: "Deploying a clean build to Gigalixir"
  description: "Update elixir version with Gigalixir"
  slug: 'deploying-a-clean-build-to-gigalixir'
  tags: ["gigalixir", "elixir"]
  pubDate: "2020-12-09"
  layout: "../layouts/BlogPostLayout.astro"
---

I needed to update the Elixir version for the DevDecks app, for production app builds I use Gigalixir and Mix releases. To get version updated I had to first update the elixir_version value in `elixir_buildpack.config` and add an always_rebuild value set to `true`.

```txt
elixir_buildpack.config

always_rebuild=true

elixir_version=1.10.4
erlang_version=22.3.1
```

Then when I pushed this change to Gigalixir I added an extra http header of `GIGALIXIR-CLEAN: true`. Which on the on the command line, which looks like:
```
git -c http.extraheader="GIGALIXIR-CLEAN: true" push gigalixir master
```

This was in place of the command I run otherwise which is `git push gigalixir master` if when doing a regular deploy.

After making these changes I the Elixir version for DevDecks was updated.