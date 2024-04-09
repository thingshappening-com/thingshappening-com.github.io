---
  title: "Installing Localstack in a Python virtual environment"
  description: "Learn how to instal Localstack in a Python virtual environment"
  slug: 'learn-how-to-instal-localstack-in-a-python-virtual-environment'
  tags: ["python", "localstack"]
  pubDate: "2022-06-13"
  layout: "../layouts/BlogPostLayout.astro"
---

This post assumes you are creating this environment on macOS.

The first step here is to create the virtual environment directory. The command below will install the virtual environment in the current directories venv folder:

```
python3 -m venv ./venv
```

This will create a number of files for you, if you `cd` into the the venv directory you can list them:

```
=> cd venv && ls
bin    include    lib    pyvenv.cfg
```

To start the virtual environment execute the `activate` executable located in the bin folder of venv:
```
=> source bin/activate
```

Running this will pull you into the virtual environment, which you can check by running: 
```
=> which python
venv/bin/python
```

Now you can install the localstack package from within the virtual environment:
```
=> python3 -m pip install localstack
```

Once complete check that you have successfully installed localstack by executing the command `localstack` in your terminal.

Enjoy installing / configuring things? Then you may enjoy the post [Steps to configure Git and remote origin](https://tinytechtuts.com/2022-configure-git-and-remote/).
