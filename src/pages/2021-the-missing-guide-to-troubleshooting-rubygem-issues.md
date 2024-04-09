---
  title: "The missing guide to troubleshooting RubyGem issues"
  description: "troubleshooting RubyGem issues"
  slug: 'troubleshooting-rubygem-issues'
  tags: ["ruby"]
  pubDate: "2021-08-14"
  layout: "../layouts/BlogPostLayout.astro"
---

* This post assumes you are using RVM to manage your Ruby versions.

In this post I run through:
1) How to get insight into your RubyGem env
2) Uninstalling a Gem and it's dependencies
3) Gem install vs bundle install
4) Resolving native file extension issues
5) A few more potentially useful notes

<h3>1) How to get insight into your RubyGem env</h3>
Type the command `gem env` into your terminal. The output here will show you useful information like:
- What RubyGems version you're using
- What RVM version you're using
- The Gem installation path
- Other potentially useful information...

With this output you can change directories to view what RubyGems are installed for your Ruby version:

```
cd /gem/installation-path/output && cd gems
```

Note that when you install a gem you are only installing it for the specific version of Ruby that you are running. If you update your Ruby version you will need to reinstall any gems that are missing.

A few additional RVM tips: If you want to use a different version of Ruby execute the command `rvm use ruby-2.5.7` and if you want to see a list of Ruby versions you have installed locally execute `rvm list`. If you want to see the current RVM version you are using `rvm -v` and if you want to install a different version `rvm install "ruby-2.6.0"`.

<h3>2) Uninstalling a Gem and its dependencies</h3>

When you install a gem that has dependencies, those dependencies are not automatically uninstalled. RubyGems will give you a warning before uninstalling a gem that has dependencies:

```
gem uninstall tty-cursor
=> You have requested to uninstall the gem:
	tty-cursor-0.7.1

tty-reader-0.9.0 depends on tty-cursor (~> 0.7)
If you remove this gem, these dependencies will not be met.
```

To satisfy this message first run `gem uninstall tty-reader-0.9.0`, which could have its own dependencies you will need to uninstall.

To find the list of dependencies a gem has you can view the profile page of the gem on the [RubyGems website](https://rubygems.org/).

<h3>3) Gem install vs bundle install</h3>

You never want to install a gem that you will use in a project with other dependencies using the command `gem install gemname`. If you have done that you should uninstall the gem and reinstall it by adding it to your projects Gemfile and running `bundle install`. The reason for this is Bundler is a dependency management tool that will install the version your project needs based on other gems in your project uses.

<h3>4) Resolving native file extension issues</h3>

If you are programming on a Mac and install Mac system updates you may find face a native file extensions error when updating or installing gems. This will occur when trying to install a gem that uses low level `C` bindings. To fix this issue I find it easiest to delete and reinstall CommandLineTools using the two commands below:
```
sudo rm -rf /Library/Developer/CommandLineTools
xcode-select --install
```

<h3>5) Two more potentially useful notes</h3>

```
gem 'wisper', '~> 1.0', '<= 1.4.0'
```
* The above Gemfile line asks for a version greater than or equal to 1.0 and less than or equal to 1.4.0. What happens if you have Wisper 1.3.0 installed locally? Will it use that or pull from remote because 1.4.0 exists remotely? It turns out it will pull the remote 1.4.0 version.
* If you install a gem for one project locally, that gem will be available for use by another local project as long as it is using the same version of Ruby.

I hope these notes helped you solve the RubyGem issue you're facing, I know they can be tricky.

Similar post:
- [How to read Ruby Gemfile versions](https://tinytechtuts.com/2021-how-to-read-gemfile-versions-in-ruby/)
