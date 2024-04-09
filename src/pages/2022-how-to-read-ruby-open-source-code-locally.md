---
  title: "How to read Ruby open source code locally"
  description: "How to read RubyGem code locally"
  slug: 'how-to-read-rubygem-code-locally'
  tags: ["ruby", "oss"]
  pubDate: "2022-04-02"
  layout: "../layouts/BlogPostLayout.astro"
---

I’m sure TMTOWTDI here but I hope this helps you get started. The end goal here is to be able to run the following command in your terminal `bundle open gem_name` and have the code for the library opened in your text editor.

To start, use your bash, zsh, or other terminal shell to export a variable called `BUNDLER_EDITOR`. Bundler will use this environment variable to open the ruby gem library code in your text editor I’m using vscode and pass the appropriate command to open it `code -a .`. The full command on the terminal looks like:

`export BUNDLER_EDITOR="code -a ."`

From there navigate to the ruby project that is using the gem you want to read source code for, you will need to have the gem declared in your Gemfile for this to work. After the gem you want to read is included in a ruby project, navigate to the root directory of that project on your command line and run:

`bundle open gem_name`

A more explicit example:

Generate a new rails project:
`rails new test_project`

Open the Gemfile and add the YAML gem to your dependencies:
```ruby
gem "yaml"
```

Navigate to the project root directory:
```
cd test_project
```

Open the source code the for yaml gem:
```
bundle open yaml
```

After running the `bundle open` command the library code for YAML should be opened in your text editor. 

Note that if you run the `bundle open` command without setting a value for `BUNDLE_EDITOR` you will be met with the following message:

"To open a bundled gem, set `$EDITOR` or `$BUNDLER_EDITOR`"

So you could alternatively set a value for `$EDITOR` and you should have the same outcome. Dealers choice.

Further reading:
- [Ruby on Rails integration testing cheatsheet](https://tinytechtuts.com/2022-rails-integration-testing-cheatsheet/)
