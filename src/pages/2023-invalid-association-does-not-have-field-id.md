---
  title: "Invalid association: associated schema does not have field :id"
  description: "fix invalid association ecto"
  slug: "associated-schema-dies-not-have-field-id-ecto"
  tags: ["elixir", "ecto"]
  pubDate: "2023-01-13"
  layout: "../layouts/BlogPostLayout.astro"
---

When I came across this error it read in full:
```
invalid association `organization` in schema Barks.Team: associated schema Barks.Organization does not have field `id` 
```

This was because I hadn't updated what the new reference should be in my `belongs_to` association after I switched from [id to uuid](https://tinytechtuts.com/2023-set-primary-key-ecto/) for database primary keys.

My `belongs_to` declaration looked like the below when it was erroing:
```
belongs_to :organization, Organization
```

But what I need was to explicitly call out the reference:
```
belongs_to :organization, Organization, references: :uuid
```

Similar posts:
- [How to handle Ecto associations with UUIDs](https://tinytechtuts.com/2023-ecto-associations-with-uuids/)
