---
  title: "How to migrate wireguard tunnel through export"
  description: "Learn how to migrate wireguard tunnel through export"
  slug: 'learn-how-to-migrate-wireguard-tunnel-through-export'
  tags: ["wireguard"]
  pubDate: "2022-06-14"
  layout: "../layouts/BlogPostLayout.astro"
---

This Wireguard tunnel migration took place on a Mac and was moved to another Mac. Steps may be slightly different on Windows.

To start, open the Wireguard application and navigate to the "Manage Tunnel" page, while on the manage tunnel page select the tunnel you need to migrate

After that navigate to click on "file" and then "export tunnels to zip". If you get no response from this action, try quitting and restarting Wireguard, this was something that happened to me.

From there complete the export and email yourself the zip file.

On your new computer download the zip file and extract the contents.

In the new Wireguard app click "import tunnel(s) from file" and select the unzipped config.

You should now be ready to connect to your VPN.

While were on the topic of web routing you might find this article, [DNS system request flow explained](https://tinytechtuts.com/2022-dns-system-request-flow-explained/) interesting.