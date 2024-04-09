---
  title: "How to login to ngrok on the command line"
  description: "Login to ngrok account on the command line"
  slug: 'login-to-ngrok-account-on-the-command-line'
  tags: ["ngrok"]
  pubDate: "2022-04-05"
  layout: "../layouts/BlogPostLayout.astro"
---

The only time I've found I've had to do this is when logging into an ngrok account for a company and the primary reason I've had to do that is to get access to custom domains the account has created for tunneling through a custom URL. If you're doing this individually you will need to create an ngrok account through their website and follow these same steps below.

To authenticate your ngrok account this way you will first need login credentials to the ngrok accounts web dashboard. Once logged into the system on the left sidebar navigation should be a link to "Your auth token" (or similar depending on how far into the future this is being read). Copy the token from that link and on your command line run `ngrok authtoken your_copied_auth_token`. 

From now on when you stand up an ngrok tunnel you will be logged into that account and have access to the custom domains and other features created in the account.

Further reading:
- [DNS system request flow explained](https://tinytechtuts.com/2022-dns-system-request-flow-explained/)
- [How subdomains work with DNS](https://tinytechtuts.com/2022-how-do-subdomains-work-with-dns/)
