---
  title: "Everything you may have wanted to know about Dates and Times in Ruby and Rails"
  description: "Everything you may have wanted to know about Dates and Times in Ruby and Rails"
  slug: 'everything-you-may-have-wanted-to-know-about-dates-and-times-in-ruby-and-rails'
  tags: ["ruby", "rails"]
  pubDate: "2021-09-02"
  layout: "../layouts/BlogPostLayout.astro"
---


I wrote this post as a reference to myself for when I need to work with Dates/Times on different projects. I hope you find it helpful.

...

<h3>How do you change the an applications time zone using Rails?</h3>
Update the `config/application.rb` value for `config.time_zone = "American Samoa"`

<h3>If you update an applications time zone, what conflicts might arise between the system time and the application time?</h3>
Unless you have your application deployed in the same region that you set the time zone for, they will be on different time zones. On the `DateTime` object there is a `#now` method that will return the date and time using the systems timezone and this can be easily thought to be the applications timezone. In this scenario you will want to use `DateTime.current` which reflects the applications timezone. If you do not update the timezone for your application this does not apply.

<h3>Let's say you have a resource in your application which you would like to share with users, a report in this case. On the report you want to show the time the report was created in your users local time, how do you handle that?</h3>
There is no built in methodology to help with this. In your system you will have to capture the users time zone on the client and pass it to the server to be stored for future reference. [Thoughtbot](https://thoughtbot.com/blog/its-about-time-zones){:taget="_blank"} wrote a good blog that illustrates a clean way of handling this.
This post from [Viget](https://www.viget.com/articles/using-time-zones-with-rails/) also illustrates a few options for this.

<h3>What format should be used when sending dates and times to API's?</h3>
`ISO8601`. This is the most widely supported standard in systems today. To convert a date/time object to this standard in Ruby:
```
report.created_at.to_s(:iso8601)
```

<h3>How do time offsets work in regards to UTC and timezones?</h3>
Coordinated Universal Time aka UTC is the default "timezone" in Rails but it is not a timezone, rather it is a universal standard for keeping time based on atomic time. UTC offsets then are an amount of time subtracted from or added to UTC time to specify the local time.

<h3>In your Ruby codebase do you need to convert times/dates to a standard format to compare if two dates are the same?</h3>
No, that is handled for you:

```
t1 = Time.parse('2017-07-13T17:13:12-04:00')
#=> 2017-07-13 17:13:12 -0400

t2 = Time.parse('2017-07-13 21:13:12 UTC')
#=> 2017-07-13 21:13:12 UTC

t1 == t2
#=> true
```
[Source](https://stackoverflow.com/questions/45091068/how-to-compare-times-in-different-time-zones-in-ruby){:taget="_blank"}


<h3>How do you query for the current time in UTC when using Rails vs non Rails</h3>
Rails: `DateTime.current.utc`
Non Rails Project: `Time.current.utc`


<h3>How to get the current timezone:</h3>
```
=> Time.zone.name
"Perth"
```

<h3>When using Rails you can get all available time zones using the rake task:</h3>
```
rake time:zones:all
```

<h3>Rails records by default are saved in the UTC timezone.</h3>
1. Getting retrieving an ActiveRecord record from your DB and retrieving its timestamp:
```
User.first.created_at
=> Thu, 24 Jun 2021 18:39:01 UTC +00:00
```

Note here the zone is indicated by `UTC +00:00`

2. Check that against the output of `rake time:zones:all` and check that output for the previously mentioned `UTC +00:00`. You will find UTC in that timezone list.

```
* UTC +00:00 *
Casablanca
Dublin
Edinburgh
Lisbon
London
Monrovia
UTC
```

<h3>How to check if an object is an instance of date or Timeor DateTime in Ruby?</h3> [Source](https://stackoverflow.com/questions/37976719/how-to-check-if-variable-is-date-or-time-or-datetime-in-ruby)
```
if d.respond_to?(:strftime)
  # d is a Date or DateTime object
end
```


