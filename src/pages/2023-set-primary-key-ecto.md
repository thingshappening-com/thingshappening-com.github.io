---
  title: "How to set a primary key using Ecto"
  description: "learn to override default primary keys ecto"
  tags: ["elixir", "ecto"]
  slug: "learn-to-override-default-primary-keys-ecto"
  pubDate: "2023-01-07"
  layout: "../layouts/BlogPostLayout.astro"
---

I had some trouble getting this right and the information across the internet had varrying strategies that often didn't include all of the details needed to get this right so hopefully this is the answer you're looking for. In this example I use the primary key `:uuid`.

To start generate your migration file with `mix ecto.gen.migration organizations`. From there you will need to include two `primary_key` keyword list options. The first in the `table` function and the second in the `field` function. Example setup:

```
def change do
  create table("organizations", primary_key: :false) do
    add :name, :string
    add :uuid, :binary_id, primary_key: :true
  end
end
```

And then in your schema file at `lib/organization.ex` you will set the schema struct and use the module attributes `@primary_key` and `@foreign_key_type` to set the new primary key and foreign key (if needed) data.
```
@primary_key {:uuid, :binary_id, autogenerate: true}
@foreign_key_type :binary_id
schema "organizations" do
  field :name, :string
end
```

Similar posts:
- [Create a new DB record using Ecto](https://tinytechtuts.com/2023-create-db-record-ecto/)
