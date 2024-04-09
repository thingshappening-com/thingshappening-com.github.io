---
  title: "Retroactively add timestamps to a Phoenix/Ecto project"
  description: "adding timestamps to ecto db tables"
  slug: 'adding-timestamps-to-ecto-db-tables'
  tags: ["ecto"]
  pubDate: "2021-02-07"
  layout: "../layouts/BlogPostLayout.astro"
---

I chose not to add timestamps to a couple of tables in the DevDecks application at first, mainly because I was moving fast to build the app and prioritized other things first. As you and I both guessed, I needed to do that later on and here's what I had to do to get things working.

First I created the migrations for the tables I was adding the datetime fields to; cards and decks. I created and ran the migrations one at a time, this example only shows what I did for cards but I mimicked these steps with decks as well.

<h3>The migration:</h3>

I found this [Stackoverflow answer](https://stackoverflow.com/questions/35744390/how-to-add-timestamps-to-an-existing-table-with-ectos-timestamps/52610636#52610636) to be helpful for creating the migration. I follow this migration file code snippet with explanations for what some the different steps are doing and why.
```
defmodule DevDecks.Repo.Migrations.AddTimestampsToCards do
  use Ecto.Migration

  def up do
    alter table(:cards) do      
      timestamps null: true
    end

    execute """
    UPDATE cards
    SET updated_at=NOW(), inserted_at=NOW()
    """

    alter table(:cards) do
      modify :inserted_at, :utc_datetime, null: false
      modify :updated_at, :utc_datetime, null: false
    end
  end

  def down do
    alter table(:cards) do
      remove :inserted_at
      remove :updated_at
    end
  end
end
```

<h3>The explanations</h3>
```
timestamps null: true
```
We need this because by default using the timestamps method creates a not null constraint and your code will error when trying to add timestamps against existing db rows because those rows wouldn't have values for the inserted_at and updated_at columns the timestamps method creates.

```
execute """
UPDATE cards
SET updated_at=NOW(), inserted_at=NOW()
"""
```
Update cards records to have `updated_at` and `inserted_at` values.

```
modify :inserted_at, :utc_datetime, null: false
modify :updated_at, :utc_datetime, null: false
```
Undo the original `timestamps null: true` call from above now that the existing records have values.

```
remove :inserted_at
remove :updated_at
```
If rolling back the migration is needed then remove the datetime columns.

After running this migration my cards table was setup properly to timestamp new records.

<h3>Adding to the schema and changeset:</h3>

In my `card.ex` context I updated the schema to include the `updated_at` and `inserted_at` fields and then also added them to the changeset:
```
schema "cards" do
  field :updated_at, :utc_datetime
  field :inserted_at, :utc_datetime
end

def changeset(params \\ %{}) do
  %DevDecks.Card{}
  |> cast(params, [:updated_at, inserted_at])  
end
```

The last step was to update my create method in the same `card.ex` file. I updated the params to include values for the dates using the `NativeDateTime` module and then could cast the updated params to the changeset and insert into the database:
```
def create(params \\ %{}) do
  params = Map.merge(params, %{"updated_at" => NaiveDateTime.utc_now, "inserted_at" => NaiveDateTime.utc_now})

  %DevDecks.Card{}
  |> cast(params, [:uuid, :answer, :question, :deck_uuid, :deck_position, :inserted_at, :updated_at])
  |> Repo.insert()
end
```

If you found this useful I also wrote a post about migrating to Elixir's Earmark for markdown processing [here](https://tinytechtuts.com/2021-elixir-earmark-code-parsing/):
