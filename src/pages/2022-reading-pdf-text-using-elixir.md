---
  title: "Reading pdf text using Elixir"
  description: "Learn how to read text of an pdf using Elixirs OCR"
  slug: "learn-how-to-read-text-of-an-pdf-using-elixirs-ocr"
  tags: ["elixir", "ocr"]
  pubDate: "2022-07-22"
  layout: "../layouts/BlogPostLayout.astro"
---

Let's say you want a use to be able to upload a PDF and then your system needs to understand what the text was in the PDF they uploaded, good news is there's an Elixir solution for that! It's OCR or Optical Character Recognition which is used to find printed or handwritten text characters inside of an [image](https://tinytechtuts.com/2022-reading-image-text-using-elixir/).

To quickly test how this works in Elixir we will take three steps:
1. Install the binaries for tesseract (an OCR engine).
2. Include the tesseract-ocr-elixir lib in your dependencies.
3. Test the packages functionality using IEx.

<h2>1. Installing Tesseract</h2>

If you're using a Mac you can install tesseract using Homebrew:

```
brew install tesseract
```

If not the [tesseract website](https://tesseract-ocr.github.io/tessdoc/Installation.html) has more options for installation.

<h2>2. Add the tesseract-ocr-elixir lib to dependencies</h2>

In your application add the library tesseract-ocr-elixir to deps. This is an Elixir wrapper for OCR.

```
def deps do
  [
    {:tesseract_ocr, "~> 0.1.5"}
  ]
end
```

To install the new dependency run `mix deps.get`.

<h2>3. Test the library functionality</h2>

To do a quick test run your application using `iex -S mix` or if you're using Phoenix `iex -S mix phx.server`.

Now you can test the library by the `read` function which will print out any words OCR finds:

```
iex> TesseractOcr.read("test/resources/testocr.pdf")
"test pdf content"
```


