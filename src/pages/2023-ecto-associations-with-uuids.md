---
  title: "How to handle Ecto associations with UUIDs"
  description: "properly define ecto associations with uuids"
  slug: "properly-define-ecto-associations-with-uuids"
  tags: ["elixir", "ecto"]
  pubDate: "2023-01-11"
  layout: "../layouts/BlogPostLayout.astro"
---

Overriding default database configurations can be tricky business and that's no exception when trying to go from using `id` for primary keys to using `UUID`. In a previous post I went over how to set [different primary keys](https://tinytechtuts.com/2023-set-primary-key-ecto/) in Ecto, which setup our app to use UUID's at the database level. 

Now we'll be working to make this function at the app level, and it only requires a few changes to our schema files. This example will use a standard `has_many` and `belongs_to` association, piggy backing off of the previously mentioned [post](https://tinytechtuts.com/2023-set-primary-key-ecto/).

In both the `has_many` and `belongs_to` side of the association the setup is going to look the same. It takes the format of `association_function: :ecto_schema, EctoSchemaModule, references :field_name`.

For the has many side that looks like this:
```
defmodule Barks.Organization do
  use Ecto.Schema
  alias Barks.Team

  @primary_key {:uuid, :binary_id, autogenerate: true}
  @foreign_key_type :binary_id
  schema "organizations" do
    field :name, :string
    has_many :teams, Team, references: :uuid
  end
end
```

And for the belongs_to side of the assocation that looks like:
```
defmodule Barks.Team do
  use Ecto.Schema
  alias Barks.Organization

  @primary_key {:uuid, :binary_id, autogenerate: true}
  @foreign_key_type :binary_id
  schema "teams" do
    field :name, :string
    belongs_to :organization, Organization, references: :uuid
  end
end
```

Similar posts:
- [invalid_foreign_key - no unique constraint](https://tinytechtuts.com/2023-invalid_foreign_key-no-unique-constraint/)
