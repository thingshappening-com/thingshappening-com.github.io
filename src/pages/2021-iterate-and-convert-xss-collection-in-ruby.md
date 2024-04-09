---
  title: "Iterate and convert an XSS collection to hash in Ruby"
  description: "xss elements formatted to hash"
  slug: 'xss-elements-formatted-to-hash'
  tags: ["ruby", "xml"]
  pubDate: "2021-02-06"
  layout: "../layouts/BlogPostLayout.astro"
---

I was working with a collection of elements in an XSS payload. Here's the payload:

```
<fields>
  <entry>
    <key>Email</key>
    <value>terry.blogger@blogs.com</value>
  </entry>
  <entry>
    <key>GivenName</key>
    <value>Terry</value>
  </entry>
  <entry>
    <key>FamilyName</key>
    <value>Blogger</value>
  </entry>
</fields>
```

In order to work with this payload I first used `Nokogiri` to turn the payload into an XML document:
`document = Nokogiri::XML(response_string)`

Then I passed that document to a class method that converted the values to a formatted hash that would be easier to work with. I used the css method to iterate ones over each field and then a second time to the entry field name and values for the hash:

```
def fields_to_hash(document)
  account_hash = {}

  document.css("fields").map do |additional_params|
    additional_params.css("entry").map do |param|
      account_hash[param.css("key").text] = param.css("value").text
    end
  end

  account_hash
end
```

I hope this helped you in solving whichever problem brought you here.