---
  title: "Ecto: Save nested records example"
  description: "Using elixir ecto learn to save nested records by example"
  tags: ["elixir"]
  pubDate: "2023-12-31"
  slug: "Using-elixir-ecto-learn-to-save-nested-records-by-example"
  layout: "../layouts/BlogPostLayout.astro"
---


To start this tut let me introduce the Parent and Child schemas, engaged in a standard one-to-many relationship:

```
defmodule MyApp.Parent do
  use Ecto.Schema

  schema "parents" do
    field :name, :string
    has_many :children, MyApp.Child
  end
end

defmodule MyApp.Child do
  use Ecto.Schema

  schema "children" do
    field :name, :string
    belongs_to :parent, MyApp.Parent
  end
end
```

The crux lies in the changesets. Here are the structured changesets for both the parent and child records:

```
defmodule MyApp.Parent do
  # ...

  def changeset(parent, attrs \\ %{}) do
    parent
    |> cast(attrs, [:name])
    |> validate_required([:name])
    |> cast_assoc(:children, with: &MyApp.Child.changeset/2)
  end
end

defmodule MyApp.Child do
  # ...

  def changeset(child, attrs \\ %{}) do
    child
    |> cast(attrs, [:name])
    |> validate_required([:name])
  end
end
```

Now, let's navigate the process of creating and inserting records:

```
parent_attrs = %{name: "Parent Name", children: [%{name: "Child 1"}, %{name: "Child 2"}]}

changeset = MyApp.Parent.changeset(%MyApp.Parent{}, parent_attrs)
case MyApp.Repo.insert(changeset) do
  {:ok, parent} ->
    # Insertion successful
  {:error, changeset} ->
    # Handle errors
end
```

This example assumes the creation of a new parent with associated child records.

For those inclined towards updating existing records, the process is straightforward. Retrieve the parent, apply the updated attributes, and execute the update:

```
parent = MyApp.Repo.get!(MyApp.Parent, parent_id)
updated_attrs = %{name: "Updated Parent Name", children: [%{id: 1, name: "Updated Child 1"}, %{name: "New Child"}]}

changeset = MyApp.Parent.changeset(parent, updated_attrs)
case MyApp.Repo.update(changeset) do
  {:ok, updated_parent} ->
    # Update successful
  {:error, changeset} ->
    # Handle errors
end
```

Ensure to provide the id for existing child records for the update to succeed.

I hope this helped! Have a good one!

Check out another post:
[ELIXIR ENUM.MAP/2 VS RUBY ARRAY#MAP](https://tinytechtuts.com/elixir-enum-map-vs-ruby-array-map/)
