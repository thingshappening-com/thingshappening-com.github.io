---
  title: "How to tell if an argument is required in Graphql?"
  description: "required arguments in graphql"
  slug: 'required-arguments-in-graphql'
  tags: ["graphql"]
  pubDate: "2021-10-07"
  layout: "../layouts/BlogPostLayout.astro"
---

One of the powerful features of Graphql is its dynamic nature. In this case referring to the ability to pass different data to the same queries and mutations, but what if you need to ensure one of those data fields is required?

<h3>Reading an existing schema</h3>
If you are looking at an existing schema in Graphiql you can tell if a data type is required based on whether the type declaration ends in a bang `!`. In the below example the only required data elements for the information node are `name` and `search`:

```
information(
search: String!
order: String
name: String!
value: String
before: String
after: String
first: Int
last: Int): InformationConnection
```

<h3>Marking a type as required in a schema</h3>
To mark a type as required go to the file which defines the schema object type and add the bang `!` to set it to required.

```
type InformationConnection {
  search: ID!
  name: String!
  ...
}
```

For your continued enjoyment:
- [How to set default values in Graphql Schemas](https://tinytechtuts.com/2021-graphql-schema-default-values/)