---
  title: "Man In The Middle (MITM) attack explained through q&a"
  description: "Man In The Middle (MITM) attack explained"
  slug: 'man-in-the-middle-(mitm)-attack-explained-through-q&a'
  tags: ["web-security"]
  pubDate: "2021-08-11"
  layout: "../layouts/BlogPostLayout.astro"
---

This and the other "Deck" posts are a repurposing of flashcard study decks to Q&A blog posts. Google was not showing love to this content as a set of flashcards and I didn't want to delete them entirely, I hope you find it useful.

<h3>How does a man in the middle attack work?</h3>
MITM attacks generally occur on open wifi networks on users accessing a website over HTTP as opposed to HTTPS. In this event the attacker will be listening on the network for such requests, intercept them, and alter the transaction in a malicious way. The attacker may be trying to retrieve sensitive data like the users Social Security or Credit Card number.

A common scenario is for an attacker to go to a location where they know wifi is accessible like a coffeeshop. Once there they mimic the coffeeshop wifi name using a physical hotspot device they brought with them. They then name the network something similar to the coffeeshops for example coffeeshop-GUEST and hope that unsuspecting users will connect to this wifi connection. From there they can see all requests and read requests made using HTTP in plain text. This is also an example of Phishing, since the attacker is attempting to gain sensitive information by tricking the user into doing something they think is OK but really is malicious.

<h3>How does a MITM attack relate to Session Hijacking attack?</h3>
In a MITM if the attacker is listening on the network and is able to see your session token and the user it to act on your behalf, they have just used a MITM to hijack your session.

<h3>If you are on a secure wifi connection are you protected from MITM attacks?</h3>
Significantly more protected because the traffic from that wifi connection can only be viewed by someone with the username and password to that router over insecure HTTP.

<h3>How do JWT's help prevent successful MITM attacks?</h3>
Since JWT's are signed by the issuing server, if the MITM attempts to alter the data contained in the JWT the server will know it was tampered with and will return an error.

<h3>Does HTTPS help prevent MITM?</h3>
Yes it does on external network connections such as making an HTTPS request over the internet. Even if your computer is connected to public unprotected wifi the data will be encrypted through the HTTPS protocol which will be gibberish to the attacker.

HTTPS connections can still be vulnerable on local networks, like in an office or school that has their systems and computers on the same LAN network.

More Web Attack/Security Decks:
1. [Cross Site Request Forgery](https://tinytechtuts.com/2021-cross-site-request-forgery-explained/)
2. [Cross Site Scripting](https://tinytechtuts.com/2021-cross-site-scripting-explained/)
