---
  title: "How to push to Github Pages using a personal access token"
  description: "using a personal access token to push to github pages"
  slug: "personal-access-token-for-github-pages"
  tags: ["git", "github", "tokens"]
  pubDate: "2023-12-18"
  layout: "../layouts/BlogPostLayout.astro"
---

<h2>Step 1: Generate a Personal Access Token</h2>
-Navigate to the GitHub Settings page.
<br>
- Select "Developer settings" from the left sidebar.
<br>
- Click on "Personal access tokens."
<br>
- *Important* when generating make sure you use the Tokens Classic token and not the Fine-grained one in this tutorial
<br>
- Click "Generate token" and provide a note, and select the scopes you want the token to have access to. In my case I selected `repo` which gave full access to the repository.
<br>
- Copy the generated token. Keep this private.

<h2>Step 2: Add the origin with your token structure</h2>
If you currently have a remote origin set for the repository you're using make sure you remove it using the following command:

```
git remote remove origin
```

<h2>Step 3: Add the origin with your token example</h2>
And then using your newly generated access token run the next command:

```
git remote add origin https://<your_token_here@github.com/yourgithubusername/yourgithubusername.github.io.git
```
In practice that would look something like the below:

```
git remote add origin https://ghp_1RKguuSgjhddjkhreBGB7hSMT0ddd3A@github.com/scadoo2/scadoo2.github.io.git
```

<h2>Step 4: Try using the token</h2>
From there you can make updates to your repository like pushing to the main branch, try pushing a new commit using the command:

```
git push origin main
```
