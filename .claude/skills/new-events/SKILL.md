---
name: new-events
description: Crawl a local business website and refresh event MDX files — handles both recurring series and one-off calendar events
argument-hint: <business-slug>
---

You are executing the **new-events** content pipeline for this Astro site.

## Goal
Fetch upcoming events from a local business website and update the relevant MDX files under `src/pages/chattanooga/events/`.

## Step 1 — Load config
Read the config file at `.claude/event-sources/$ARGUMENTS.json`.

All configs have:
- `name` — human-readable business name
- `url` — the page to crawl (may be overridden per-section in mixed configs)
- `type` — `"recurring"`, `"calendar"`, or `"mixed"`

**If `type` is `"recurring"`**: follow Workflow A only.
**If `type` is `"calendar"`**: follow Workflow B only.
**If `type` is `"mixed"`**: fetch the page once, then run both Workflow A and Workflow B against the same content. The config will have a `recurring` object (containing `events`) and a `calendar` object (containing `outputDir`, `slugPrefix`, `defaultFrontmatter`). Top-level `url` is shared unless a section overrides it.

---

## Workflow A — type: "recurring"

Use this when the business runs the same events on a repeating schedule (weekly shows, trivia nights, etc.). Each event series has its own MDX file that persists indefinitely; only the `eventDates` array changes.

Config also contains:
- `events` — array of event series, each with:
  - `outputPath` — path to the MDX file to update (relative to project root)
  - `matchHint` — how to identify this series in the crawled page

### A1. Fetch the events page
Use WebFetch on `url`. Look for recurring shows, schedules, or day-of-week patterns.

### A2. Extract dates per series
For each entry in `events`:
- Use `matchHint` to identify matching events on the page
- Extract all upcoming dates (today or later) in YYYY-MM-DD format
- If no explicit dates are listed but a recurring day pattern is shown (e.g. "every Friday"), generate dates for the next 12 weeks from today

### A3. Update the MDX file
- Read the existing file at `outputPath`
- Replace only the `eventDates` array with the new sorted list of future dates
- Preserve every other frontmatter field and all body content exactly as-is
- Write the file back

### A4. Handle eventDatesDetails (if present)
See the **eventDates and eventDatesDetails** section below.

---

## Workflow B — type: "calendar"

Use this when the business posts individual one-off events with their own titles, descriptions, and details. Each event gets its own MDX file, named from the event title.

Config also contains:
- `outputDir` — directory to write event files into (relative to project root)
- `slugPrefix` — prefix for generated filenames (e.g. `"tap-house"` → `tap-house-national-bourbon-day.mdx`)
- `defaultFrontmatter` — frontmatter fields to apply to every generated file (venue, address, tags, iconPath, eventLink, entranceCost, layout)

### B1. Fetch the events page
Use WebFetch on `url`. Extract all upcoming events with their title, date, time, description, and any cost or ticket info.

### B2. For each upcoming event found
- Slugify the event title: lowercase, replace spaces and special characters with hyphens
- Construct the filename: `{slugPrefix}-{slugified-title}.mdx`
- Check if a file already exists at `{outputDir}/{filename}`
  - If it **exists**: skip it — do not overwrite manually curated content
  - If it **does not exist**: create it using the template below

### B3. New file template
```mdx
---
title: "{event title}"
pubDate: "{YYYY-MM-DD}"
time: "{time or omit if unknown}"
entranceCost: "{cost or 'Free' if none listed}"
seoDescription: "{1-2 sentence description of the event}"
venue: {from defaultFrontmatter}
address: {from defaultFrontmatter}
iconPath: {from defaultFrontmatter}
eventLink: {from defaultFrontmatter}
tags: {from defaultFrontmatter}
layout: {from defaultFrontmatter}
---

{2-3 sentence description of the event, written in the same casual local tone as other event files in this project}
```

### B4. Prune past events
After creating new files, scan all files in `outputDir` whose names start with `slugPrefix`. For any whose `pubDate` is in the past, set `published: false` in the frontmatter — do not delete them.

---

## How eventDates and eventDatesDetails work together

Every recurring event file uses `eventDates` as the source of truth — a simple array of date strings. This is always the field you update.

`eventDatesDetails` is an optional enrichment layer. Some files also contain an `eventDatesDetails` array where individual dates carry per-date content rendered on the event page:

```yaml
eventDatesDetails:
  - date: "2026-05-10"
    topDetails:
      title: "Market Fresh Idea"
      text: "Use fresh spring vegetables from the market to make a light pasta primavera."
    bottomDetails:
      title: "Visitor Tip"
      text: "Parking fills up by midday — arrive early or take the shuttle."
```

Not every date in `eventDates` needs a corresponding `eventDatesDetails` entry. When a date has no entry, the page renders with just the base event content.

### Handling eventDatesDetails when updating (recurring only)
- If the existing file has no `eventDatesDetails`, do not add one — leave it absent
- If the existing file already has `eventDatesDetails`:
  - **Preserve** all existing entries whose dates are still in the updated `eventDates` array
  - **Remove** entries for dates that are no longer in `eventDates` (past dates being pruned)
  - **Add new entries** for each newly added date — generate contextually appropriate `topDetails` and `bottomDetails` based on the event type and venue, matching the tone and style of existing entries

---

## Rules
- Only include dates that are today or in the future — never write past dates
- Date format must be YYYY-MM-DD (e.g. `"2026-05-10"`)
- Do not modify title, venue, address, tags, iconPath, time, entranceCost, eventLink, or body content of existing files
- Only modify eventDatesDetails as described above — never rewrite existing entries
- If the website is unreachable or returns no useful data, stop and report the error
- If $ARGUMENTS does not match any file in `.claude/event-sources/`, list the available slugs and stop

## Report (both workflows)
After completing, print a summary:
- Business name and type
- Each file created or updated, with date count or action taken
- Any events or series where no data was found (flag for manual review)
