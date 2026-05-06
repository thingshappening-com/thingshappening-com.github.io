---
name: fact-checker
description: Verify factual claims in event MDX files — checks venue addresses, ticket prices, dates, times, and body copy against live sources. Reports confirmed facts, mismatches, and anything that couldn't be verified.
user-invocable: true
allowed-tools:
  - Read
  - Write
  - Bash(find *)
  - Bash(git diff --name-only *)
  - Bash(git status *)
  - Bash(python3 *)
  - WebFetch
  - WebSearch
---

# /fact-checker — Verify event MDX content against live sources

Arguments passed: `$ARGUMENTS`

## Purpose

Cross-reference factual claims in MDX event files against the event link and/or web search. Fix confirmed mismatches directly. Flag anything that couldn't be verified so the user can handle it manually.

---

## Argument parsing

**Source (pick one, in priority order):**
- A path ending in `.mdx` → single file
- A directory path → all `.mdx` files in that directory
- No file arg → fall back to git-modified `.mdx` files (`git diff --name-only` + untracked)

**Flags (optional):**
- `--address-only` → only verify venue addresses, skip ticket/date checks
- `--no-web` → skip all external fetches, only flag structural issues (past dates, missing fields)

---

## What to check

For each file, extract these frontmatter fields and verify them:

| Field | What to verify |
|---|---|
| `pubDate` | Is it in the past? (flag as stale if so) |
| `time` | Does it match what the eventLink page says? |
| `entranceCost` | Does it match the eventLink page? |
| `venue` | Does the name match what the eventLink page calls it? |
| `address` | Does it match the venue's actual address (web search if needed)? |
| `eventLink` | Is the URL reachable? Does it 404? |
| Body copy | Are named support acts, ages, or specific prices mentioned that contradict the event page? |

---

## Verification process per file

### Step 1 — Extract frontmatter

Use python3 or Bash to parse frontmatter fields without loading the Read tool for every file in a batch.

### Step 2 — Check pubDate

If `pubDate` is present and earlier than today (2026-05-06), flag it as **stale** — no web fetch needed.

### Step 3 — Fetch eventLink

If `eventLink` is set and `--no-web` is not passed:
- Fetch the page with WebFetch
- Look for the specific event (match on title, date, or venue name)
- If not found on the page, note it as **not found on source page**
- If found, compare: time, price, venue name, age restriction, support acts
- For any confirmed mismatch, update the frontmatter field directly

### Step 4 — Verify address

If the address doesn't look clearly right from the event page, do a targeted WebSearch: `"{venue name}" Chattanooga address` and compare the result to the frontmatter `address`. If wrong and the correct address is confirmed, fix it.

### Step 5 — Body copy scan

Read the body text and identify any specific factual claims:
- Named support acts (cross-check against event page) — if wrong and correct act is confirmed, fix it
- Ticket prices mentioned in prose (cross-check against `entranceCost` and event page) — fix if confirmed wrong
- Age restrictions mentioned in prose (cross-check against event page) — fix if confirmed wrong
- Any venue-specific facts (capacity, etc.) — fix if confirmed wrong, flag if contradicted but unresolvable

### Step 6 — Neighborhood verification

If the body copy names a Chattanooga neighborhood (e.g. "St. Elmo", "Southside", "North Shore", "downtown", "Northgate", "East Brainerd", "Highland Park", etc.):
- WebSearch `"{venue name}" Chattanooga neighborhood` to confirm the neighborhood
- If confirmed: mark `✓`
- If wrong and the correct neighborhood is confirmed: fix it
- If unconfirmed (can't find a clear answer): remove the neighborhood mention — do not leave an unverified claim

For all edits: make the minimal change, preserve the rest of the sentence.

---

## Output format

Print a report per file:

```
── barrelhouse-ballroom-of-montreal-with-cormae.mdx ──────────────────
  eventLink    ✓ reachable
  pubDate      ✓ future (2026-07-02)
  time         ✓ matches (8:00pm)
  entranceCost ✗ FIXED — was "$25 advance / $30 door", updated to "$28 advance"
  venue        ✓ matches ("Barrelhouse Ballroom")
  address      ✓ confirmed (1501 Long St)
  body copy    ✓ no contradictions found
```

Use `✓` for confirmed, `✗` for mismatch, `?` for could not verify (page didn't contain the info), and `!` for structural issues (stale date, dead link, missing field).

### Summary block at the end

```
SUMMARY
  Files checked: 4
  All clear:     2
  Needs review:  2
    barrelhouse-ballroom-of-montreal-with-cormae.mdx — entranceCost mismatch
    woodshop-wednesday-trivia.mdx — eventLink returned 404
```

---

## Rules

- Fix confirmed mismatches directly; flag anything that can't be confirmed for manual review
- Never guess — only fix when the source clearly confirms the correct value
- Do not flag `published: false` files as stale — they're already deprioritized
- If a field is missing from the frontmatter entirely, mark it as `! missing` but do not treat it as an error unless it's `pubDate` on a calendar event or `eventLink` on any event
- Recurring events (those with `eventDates` instead of `pubDate`) skip the stale-date check; instead check if `eventDates` is empty and flag that
- If `--no-web` is passed, only run Steps 1, 2, and body-copy structural scan
- Rate-limit WebFetch calls: fetch one URL at a time, do not fire parallel fetches
