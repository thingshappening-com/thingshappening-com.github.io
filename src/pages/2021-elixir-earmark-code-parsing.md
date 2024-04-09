---
  title: "Migrating to Elixir's Earmark for markdown processing"
  description: "Migrating to Elixir's Earmark for markdown processing"
  slug: "migrating-to-elixir's-earmark-for-markdown-processing"
  tags: ["elixir"]
  pubDate: "2021-06-05"
  layout: "../layouts/BlogPostLayout.astro"
---

Prior to migrating to Earmark any html needed for the DevDeck cards had been hard coded. Switching to Earmark for markdown processing now saves me a lot of time in card creation. Previously I would have to save a card question or answer with a code block resembling this:
```
"""Multi-line string of text
  <br />
  <pre><code>IO.inspect "some code"</code></pre>
"""
```

Now I can accomplish the same thing with:
```
"""Multi-line string of text
  \n
  ```IO.inspect "some code"</code></pre>```
"""
```

It might not look like a big deal but the minutia required to get HTML formatted correctly for each of the of questions and answers requires extra attention to detail and is prone to mistakes.

If you're unfamiliar with markdown processors, they essentially take a set of rules and convert those rules to HTML nodes. For example the open and closed backticks above (```repetitions sake example```) get converted the `<pre><code></code></pre>` html nodes for displaying code snippets in a web browser.

The migration to Earmark included three steps:
1) Add Earmark as a project dependency
2) Use the Earmark client to process markdown
3) Write and execute a migration to convert hard coded HTML to markdown.

<h2>Step one: adding Earmark as a project dependency</h2>

Include Earmark as a project dependency in your `mix.exs` file:

```
defp deps do
  [
    ...
    {:earmark, ">= 1.4.15"}
  ]
end
```

And update dependencies with the command `mix deps.get`.


<h2>Step two: use the Earmark client to process markdown</h2>

I have to use the Earmark client when my server calls for the cards. For this application I am using LiveView for websocket based client/server data transactions so I added the Earmark functionality to my `card_live.ex` file which will include the card data in the rendering of the `card.html.leex` template. I use the `as_html` function on the `Earmark` module to accomplish this. That update looked like:

```
def mount(%{"uuid" => uuid} = params, _session, socket) do
  cards = Card.from_uuid(uuid)
  cards = Enum.map(cards, fn (card) ->
    {:ok, answer, _opt} = Earmark.as_html(card.answer)
    {:ok, question, __opt} = Earmark.as_html(card.question)
    %{card | answer: answer, question: question}
  end)

  {:ok, assign(socket, cards: cards)}
end
```
Above I am mapping over a list of cards and processing the question and answer markdown before assigning the cards to the socket.

The rendering didn't change but this is what the template code looks like in my `card.html.leex` file:
```
<%= @cards |> Enum.with_index |> Enum.map(fn({card, index}) ->  %>
  <div id="card">
    <span><%= raw card.question %></span>
    <span><%= raw card.answer %></span>
  </div>
<% end) %>
```

<h2>Step 3: Write and execute a migration against existing cards to convert hard coded HTML to markdown.</h2>

First generate a new migration file on the command line through:
```
mix ecto.gen.migration earmark_cards
```

And then in the migration file I convert all of the question and answer strings using `String.replace` and replace the html code matched with its markdown equivalent, I annotate some of the script where I think it could be helpful.

```elixir
defmodule DevDecks.Repo.Migrations.EarmarkCards do
  use Ecto.Migration

  def up do
    # Get all decks and then all the cards from those decks (this could be simplified)
    DevDecks.Deck.query_uuids |> Enum.map(fn(uuid) -> DevDecks.Card.from_uuid(uuid) end)
    |> Enum.map(fn(card_set) ->
      Enum.map(card_set, fn(card) ->
        # some test cards don't have answers so add a default blank string
        answer = card.answer || ""
        # pipe the answer string through all of the regex string replacement
        updated_answer = answer
        |> String.replace(~r/<pre><code>/, "```")
        |> String.replace(~r/<\/code><\/pre>/, "```")
        |> String.replace(~r/<code>/, "`")
        |> String.replace(~r/<\/code>/, "`")
        |> String.replace(~r/<br \/>/, "\n")
        |> String.replace(~r/<br\/>/, "\n")
        |> String.replace(~r/<br>/, "\n")

        # repeat steps for question (this could have been extracted to a function)
        question = card.question || ""
        updated_question = question
        |> String.replace(~r/<pre><code>/, "```")
        |> String.replace(~r/<\/code><\/pre>/, "```")
        |> String.replace(~r/<code>/, "`")
        |> String.replace(~r/<\/code>/, "`")
        |> String.replace(~r/<br \/>/, "\n")
        |> String.replace(~r/<br\/>/, "\n")
        |> String.replace(~r/<br>/, "\n")

        # call the update function on the card context with the card uuid to find the card and the updated answer and question.
        DevDecks.Card.update(%{"uuid" => card.uuid, "answer" => updated_answer, "question" => updated_question})
      end)
    end)
  end

  # add a down method for rollbacks if needed.
  def down
    nil
  do
end
```

After testing this locally I deployed it using Gigalixir and ran the migration in production from the command line through `gigalixir run mix ecto.migrate` and could watch the migration through the logs using `gigalixir logs`.

Following the successful migration the transition was complete.

If you found this useful I also wrote a post about a migrating to add timestamps to the DevDecks database retroactively [here](https://tinytechtuts.com/2021-retroactively-add-timestamps-in-phoenix-ecto/):

