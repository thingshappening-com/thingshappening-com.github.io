---
  title: "How to pretty print JSON in ruby"
  description: "How to pretty print a JSON object in ruby"
  slug: 'how-to-pretty-print-a-json-object-in-ruby'
  tags: ["ruby", "json"]
  pubDate: "2022-04-30"
  layout: "../layouts/BlogPostLayout.astro"
---

The easiest way I’ve found to accomplish this is using `puts`

The call below will print the json object and return nil

```
puts data.to_json
{"admin":true,"email":"admin@gmail.com"}
```

If you need the object to be printed on a multi-line basis you can use the command line tool [jsonpp](https://github.com/jmhodges/jsonpp).

After installing you can copy an object like the one above and paste it into its own file and then run the command:

```
jsonpp path/to/file.json
```

Which will produce the following output:

```
{
  "admin": true,
  "email": "admin@gmail.com"
}%
```

Further reading:
- [Migrating to Elixir's Earmark for markdown processing](https://tinytechtuts.com/2021-elixir-earmark-code-parsing/)


