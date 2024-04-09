---
  title: "Steps to configure Git and remote origin"
  description: "Learn how to configure Git and remote origin"
  slug: 'learn-how-to-configure-git-and-remote-origin'
  tags: ["git"]
  pubDate: "2022-06-08"
  layout: "../layouts/BlogPostLayout.astro"
---

These were the steps I took to setup Git on my new computer to work with Github through SSH.

First, set your global git config on your machine. I am using a Mac so Git came preinstalled. You'll want to configure your username and email associated with your account using the commands below.
```
git config --global user.name "coldsoup23"
git config --global user.email "coldsoup23@gmail.com"
```

Then to push your commits using SSH you will need to create a new public / private key pair:
```
ssh-keygen -t rsa
```

On a Mac this will create a file at `/Users/username/.ssh/id_rsa` and also `/Users/username/.ssh/id_rsa.pub`.

You will need to add the contents of the pubic key to your Github profile, you can print the contents to your terminal using the command:
```
cat /Users/username/.ssh/id_rsa.pub
```

Lastly, you will need to paste that into your Github profile:
1. Click on your profile
2. Click SSH keys at settings
3. Click SSH and GPG keys
4. Add a new key and paste the contents of id_rsa.pub

After that last step you will be configured to use Git on your local machine and push commits to a remote origin, in this case, Github.

If you found this post juicy, wait until you check out [How to run two different git branches locally](https://tinytechtuts.com/2022-running-two-git-branches-locally/)
