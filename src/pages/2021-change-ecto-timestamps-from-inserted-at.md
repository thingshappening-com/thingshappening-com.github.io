---
  title: "Change Ecto timestamps from inserted_at to created_at"
  description: "learn how to update Ecto timestamps"
  slug: 'learn-how-to-update-ecto-timestamps'
  tags: ["ecto", "elixir"]
  pubDate: "2021-09-20"
  layout: "../layouts/BlogPostLayout.astro"
---

When you generate a schema or migration that will create database tables your Elixir app will utilize there will usually be a call to `timestamps/0` in the newly generated file, if not you can add it manually. 

The `timestamps` function will add timestamp columns to your table to track when records are created and updated. By default this will create columns `intserted_at` and `updated_at`, but you can override these column names to suit your needs by passing a keyword list argument containing the column you want to override and the column that should take its place. Example:

```
  def up do
    create table("weather") do
      add :city,    :string
      add :temp_lo, :integer
      add :temp_hi, :integer
      add :prcp,    :float

      timestamps(inserted_at: :created_at, updated_at: :updated_time)
    end
  end
```
