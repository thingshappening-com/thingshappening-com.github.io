---
  title: "Reading image text using Elixir"
  description: "Learn how to read text of an image using Elixirs OCR"
  slug: "learn-how-to-read-text-of-an-image-using-elixirs-ocr"
  tags: ["elixir", "ocr"]
  pubDate: "2022-07-20"
  layout: "../layouts/BlogPostLayout.astro"
---

This post will detail how you can read text off of an image using the Elixir programming language.

To handle this we will use a technology called Optical Character Recognition which is used to find printed or handwritten text characters inside of an image.

The steps we will take to complete this project are:

1. Install the system package for tesseract (an OCR engine).
2. Include the tesseract-ocr-elixir lib in your elixir dependencies.
3. Test the library functionality using IEx.

<h2> Important note before installation:</h2>
If you don't install the tesseract engine before trying to use the Elixir library tesseract-ocr-elixir you will likely be met with this error:

```
iex(1)> TesseractOcr.read(".lib/testocr.png")

** (ErlangError) Erlang error: :enoent

    (elixir 1.12.0) lib/system.ex:1041: System.cmd("tesseract", [".lib/testocr.png", "stdout"], [])

    (tesseract_ocr 0.1.5) lib/tesseract_ocr.ex:19: TesseractOcr.read/2
```

This error is letting you know you haven't installed tesseract, not that the file path is empty (which without reading the stacktrace you might suspect because of the :enoent eror).

Once you install tesseract this error should go away. You can see the system request to tesseract in the screenshot below:

replace_image_0_x

<br />
<h2>1. Installing Tesseract</h2>

I use Homebrew to install system dependencies on my mac. So for me installing this library was straightforward:

```
brew install tesseract
```

The [tesseract website](https://tesseract-ocr.github.io/tessdoc/Installation.html) has more options for installation.

<h2>2. Add tesseract-ocr-elixir lib to deps</h2>

In your mix application add the library tesseract-ocr-elixir to deps. This is an Elixir wrapper for OCR.

```
def deps do
  [
    {:tesseract_ocr, "~> 0.1.5"}
  ]
end
```

Run `mix deps.get` to install the package.

<h2>3. Test the library functionality</h2>

To do a quick test of the library you will need an image with text, so grab your favorite meme and then load your application using `iex -S mix`.

Now you can test the library by the `read` function which will print out any words OCR finds:

```
iex> TesseractOcr.read("test/resources/testocr.png")
"OH YOU FOUND SOME INTERNET MEMES YOU MUST BE FUNNY"
```

That was the last step! You can also use the library to read PDFs and do other fun things.


