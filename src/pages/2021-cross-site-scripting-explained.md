---
  title: "Cross Site Scripting explained through q&a"
  description: "cross site scripting explained"
  slug: 'cross-site-scripting-explained-through-q&a'
  tags: ["web-security"]
  pubDate: "2021-08-02"
  layout: "../layouts/BlogPostLayout.astro"
---

This and the other "Deck" posts are a repurposing of flashcard study decks to Q&A blog posts. Google was not showing love to this content as a set of flashcards and I didn't want to delete them entirely, I hope you find it useful.

<h3>What is an XSS attack?</h3>
It is a type of application attack in which html, often a script, is inserted into the document of your application by a malicious user and when other users interact with this they could be giving away their credentials to the attacker and then the attacker can act on the unsuspecting users behalf.

<h3>What does the acronym XSS stand for?</h3>
Cross Site Scripting.

<h3>What is the difference between an XSS and CSRF attack?</h3>
With XSS the attackers end goal is often to steal user credentials.

With a CSRF attack the goal is to execute an unwanted action on behalf already logged in user, like a transfer money from victims account into the attackers account in a banking system.

<h3>Are there different types of XSS attacks?</h3>
Yes, there are three.
1. Reflected
2. Stored/Persisted
3. DOM/Client Side.

<h3>What is a stored XSS attack?</h3>
This attack is similar to a reflected attack in that it sends a request to the server, but with the intent of storing malicious data in a database that will be returned any time requests are made for this content.  

An often cited example is in the comments section of a website where an attacker leaves a comment that gets stored and then if that comment is interacted with by other users they will fall victim to the stored XSS attack.

<h3>How does a DOM/Client side XSS attack work?</h3>
This occurs when malicious data, often search parameters or form inputs, are taken directly from the client HTML page and inserted right back into that page without proper data sanitization. The attacker will inject malicious code into the vulnerable website and then it is immediately accessible for any user to interact with who browsing the same page.

 An example of a vulnerable site is one with a search field that shows all searches made from all users. If the website is not properly checking that data for malicious code all users interacting with that page would be susceptible to an attack.

<h3>What is the difference between a reflect and client-side XSS attack?</h3>
In reflected attacks the data submitted by the attacker makes its way back the app server before becoming accessible to other users. In client-side attacks data submitted by an attacker does not travel back to the server, instead the data (often a malicious script) is immediately accessible to other users.

<h3>How can I make my website less susceptible to an XSS attack?</h3>
Detect the attack by checking the URL string and HTML input fields for malicious values like `&lt;script&gt;` tags either on the client or server and whenever possible properly encode that data before presenting it to users.

Many web frameworks handle these XSS mitigation techniques out of the box.

<h3>How does a Session Hijacking relate to XSS?</h3>
When an attacker uses a valid session of another user to make requests on their behalf this can be described as session hijacking. So if the XSS attack being executed is one where the attacker tries to steal the session token of another user, that is an example of both Session Hijacking and XSS where an XSS attack is being used to hijack the session.

<h3>If an attacker is listening for HTTP network traffic to inject malicious headers into the request, is this an example of an XSS attack?</h3>
No this would be a man in the middle attack (MITM).

<h3>Do most modern web frameworks help in mitigating XSS by escaping or encoding inputs and search parameters?</h3>
Yes they do. Thanks be to internet 2.0.

<h3>How does Phishing relate to XSS?</h3>
Phishing can be an XSS attack. Phishing occurs when a user is tricked into handing over sensitive data like credit card information, SSN, user name and password, etc. to an attacker. Example:  

If you click on a random link in the comment section of a website that claims to be giving you a gift for $20,000 as a reward for being the millionth viewer of the content and then you click on it and the attacker is able to steal your username and password of the website you came from it could correctly be said that you were a victim of a Phishing attack but it is also correct to say you were the victim of an XSS attack because the attacker had to use XSS to place the comment there to begin with.

More Web Attack/Security Decks:
1. [Cross Site Request Forgery](https://tinytechtuts.com/2021-cross-site-request-forgery-explained/)
2. [Man In The Middle Attack](https://tinytechtuts.com/2021-man-in-the-middle-attack-explained/)