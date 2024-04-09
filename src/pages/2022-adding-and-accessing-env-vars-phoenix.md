---
  title: "How to add and access env variables in Phoenix"
  description: "learn a simple env variable solution for phoenix"
  slug: "learn-a-simple-env-variable-solution-for-phoenix"
  tags: ["elixir", "phoenix"]
  pubDate: "2022-08-28"
  layout: "../layouts/BlogPostLayout.astro"
---

Adding environment variables for a Phoenix web app is fairly straightforward but if googling it can take some time to find a simple answer. In this tutorial I will show you how to set up your environment variables using a `.env` file.

1. In the root of your Phoenix directory create a new `.env` file.
2. Add that file to your `.gitignore` so you don't expose secrets to the outside world. If you accidentally forget to add this to your .gitignore and make a commit, anyone who gains to that commit will be able to view your secrets to that point.
3. Add and export your env variables in the .env file:
```
export STRIPE_API_KEY="some test_key"
```
4. On your terminal execute `source .env` from the root directory of your project.


Following the execution of that last step you will be able to access environment variables throughout your project through: 
```
System.get_env("STRIPE_API_KEY")
```

In my case I made reference to this config value in `config.exs`:
```
config :stripity_stripe, api_key: System.get_env("STRIPE_API_KEY")
```
