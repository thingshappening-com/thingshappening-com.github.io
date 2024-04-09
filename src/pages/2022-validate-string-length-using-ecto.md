---
  title: "Validate string length using Ecto"
  description: "How to validate string length using Ecto"
  slug: "how-to-validate-string-length-using-ecto"
  tags: ["elixir", "ecto"]
  pubDate: "2022-09-01"
  layout: "../layouts/BlogPostLayout.astro"
---

As a quick refresher, the Ecto library comes with a Changeset module to aid in making changes to our database safely. Many of the functions that you have access to are validation functions to ensure your data is formatted properly. 

One of the validation functions `Ecto.Changeset` ships with is `validate_length/3`. This function accepts three arguments:
1. A changeset
2. The field to validate the length of
3. Options (like `min:` and `max:`)

These functions are typically piped to after casting your parameters and creating a changeset. A typical implementation looks like this:

```
params = %{"title" => "Walking by Henry David Thoreau"} 

changeset =					
%Post{}
|> cast(params, [:title])
|> validate_length(:title, min: 5) 
```

In the above implementation we validated that the "title" key's value had at least 5 characters. We can also validate that it doesn't have more than X characters, below we validate that the title is no more than 30 characters:

```
params = %{"title" => "Walking by Henry David Thoreau"} 

changeset =					
%Post{}
|> cast(params, [:title])
|> validate_length(:title, max: 30) 
```
