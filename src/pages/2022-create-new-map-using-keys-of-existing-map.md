---
  title: "Create new map using keys of existing map"
  description: "Create new map using keys of existing map"
  slug: "create-new-map-using-keys-of-existing-map"
  tags: ["elixir"]
  pubDate: "2022-09-25"
  layout: "../layouts/BlogPostLayout.astro"
---

Let's start the party by defining an Elixir Map that we will use to pull keys from to create our new map:
```
pinteresting = %{
  pumpkin: true,
  snowfall: false,
  apple: true,
  pine_tree: false
}
```

Now to complete the objective of this titled blog post we will reach from the `Map` module and the `split/2` function on that module. This function accepts a map as its first argument and a list of keys as a second argument. The function will use the keys defined in the second argument to create the new map containing only those keys and it will also return another map containing the remaining keys. Example below:
```
=> {truly_pinteresting, not_very_pinteresting} = Map.split(pinteresting, [:pumpkin, :apple])
{%{apple: true, pumpkin: true}, %{pine_tree: false, snowfall: false}}
```

In the above you can see that we are returned a two item tuple, containing the previously mentioned maps. The first with all the keys we passed as the second argument to `split/2`. The second is a map containing the remaining keys.

And because Elixir is immutable we still have access to the original object, unchanged:
```
=> pinteresting
%{
  pumpkin: true,
  snowfall: false,
  apple: true,
  pine_tree: false
}
```

Now if you need to remove multiple k/v pairs there is a `drop` function on the `Map` module that can be utilized. I review that [here](https://tinytechtuts.com/2022-remove-single-key-value-pair-from-map/).

