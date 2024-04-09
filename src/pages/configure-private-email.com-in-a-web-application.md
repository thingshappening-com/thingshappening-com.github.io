---
  title: "How to configure privateemail.com smpt connections"
  description: "learn to configure privateemail.com in a web application"
  tags: ["smtp"]
  slug: "learn-to-configure-privateemail.com-in-a-web-application"
  pubDate: "2023-12-22"
  layout: "../layouts/BlogPostLayout.astro"
---

The domain name provider (amongst other services), Namecheap, offers an email service through privateemail.com. It's a cost effective email provider that easily maps to whichever domain name you've registered with Namecheap. 

I had a need to send emails through the privatemeail.com smtp server in a Ruby on Rails web application I built. It took me some time to find the correct configuration to make this work, you can find that below:

```
  config.action_mailer.smtp_settings = {
    address: "mail.privateemail.com",
    port: 587,
    domain: 'barksalot.com',
    user_name: 'jack@barksalot.com’,
    password: 'password',
    authentication: 'plain',
    enable_starttls: true
  }
```w

For your case the values `address`, `port`, `authentication`, and `enable_starttls` in the settings hash should be the same as mine. The `enable_starttls` is for the security requirement that privateemail.com has. You will need to update the values for `domain`, `password`, and `user_name`.

I first tested the connection to the service in my `development.rb` file, this where you set your applications configuration for your development environment. I only set it here temporarily to test the connection. Typically you will want to use a third party gem like mailhog to catch your smtp requests and not actually send the emails, at least after you verifying everything is working the way you expect.

After testing I was able to move this configuration to my `production.rb` configuration file to be used in my applications live environment. 

I hope this helped! Have a good one!