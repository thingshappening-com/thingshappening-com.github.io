---
name: fact-checker-guides
description: Verify factual claims in guide MDX files — checks website links, business existence, neighborhood tags, and specific description claims against live sources. Fixes confirmed mismatches, removes unverified claims.
user-invocable: true
allowed-tools:
  - Read
  - Write
  - Bash(python3 *)
  - Bash(curl *)
  - Bash(find *)
  - WebFetch
  - WebSearch
---

# /fact-checker-guides — Verify guide MDX content against live sources

Arguments passed: `$ARGUMENTS`

## Purpose

Cross-reference factual claims in `pageItems` guide files. Process one item at a time to stay within context. Fix confirmed mismatches. Remove claims that can't be verified.

---

## Argument parsing

**Source (required):**
- A path ending in `.mdx` → that file
- A directory path → all `.mdx` files in that directory that contain `pageItems`

---

## What to check per item

Each `pageItems` entry has a `title`, `description`, `tags[]`, and `links[]`. For each item:

| Check | How |
|---|---|
| Website links reachable | Fetch each link that is not a Google Maps URL |
| Business still open | WebSearch `"{title}" Chattanooga` and look for closure signals |
| Neighborhood tag correct | Cross-reference the neighborhood tag against the business address found in search |
| Factual claims in description | Flag and verify specific verifiable claims (see below) |

---

## Processing order

Do a full pass through all items **before** making any web calls. Then verify item by item.

### Pass 1 — Structural scan (no web)

Extract all `pageItems` via python3. For each item:
- Note the neighborhood tag (the tag that matches a known neighborhood — see list below)
- Note any verifiable factual claims in the description (see Factual claims section)
- Note all non-Google-Maps links

Known neighborhood tags: `downtown`, `north-shore`, `southside`, `st-elmo`, `innovation-district`, `signal-mountain`, `lookout-mountain`, `east-brainerd`, `east-ridge`, `red-bank`, `highland-park`, `normal-park`, `hamilton-place`, `ooltewah`

### Pass 2 — Web verification (one item at a time)

**Fetching pages:** Always use `curl` via Bash to fetch pages — it's cheaper and faster than WebFetch. Strip HTML with python3:

```bash
curl -sL --max-time 10 "$URL" | python3 -c "
import sys, html, re
txt = sys.stdin.read()
txt = re.sub(r'<[^>]+>', '', html.unescape(txt))
txt = re.sub(r'\s+', ' ', txt)
print(txt[:4000])
"
```

Only fall back to `WebFetch` if `curl` returns empty content or a JS-only page. Only use `WebSearch` if the site itself is ambiguous or there is no website link.

For each item, in order:

1. **Fetch the website link** (if present and not Google Maps) using `curl`. Look for signs the business is closed or the URL redirects to something unrelated.

2. **WebSearch the business name** if the site fetch is ambiguous or there is no website link. Search `"{title}" Chattanooga` and scan for closure notices, "permanently closed" on Google, or news articles.

3. **Verify neighborhood tag** using the address found in step 1 or 2. Cross-reference against the tag. If wrong and the correct neighborhood is known, fix the tag. If unconfirmed, leave as-is and flag.

4. **Check factual claims** (see below) — fix confirmed wrong ones, remove unverifiable ones from the description.

---

## Factual claims to check

Scan each description for these patterns and verify them:

| Claim type | Examples | How to verify |
|---|---|---|
| Roasting program | "in house roasting", "own roasting operation", "their own roasting program" | Check website for roasting mention |
| Hours claims | "24/7", "open late", "seasonal hours" | Check website or search for hours |
| Kitchen scope | "full kitchen", "full brunch menu", "breakfast and lunch" | Check website menu |
| Dietary claims | "vegan pastry focus", "plant-based" | Check website |
| Specific amenities | "dedicated coworking space", "patio", "drive thru" | Check website or Maps listing |
| Named nearby landmarks | "walkable to Coolidge Park", "near the Hunter Museum" | These are geography — only flag if the neighborhood tag is wrong |

Do not flag soft claims ("locals come for the aesthetic", "popular laptop stop") — those are editorial, not factual.

---

## Fixes to make

- **Dead link**: remove the link object from the `links[]` array
- **Business closed**: set a `closed: true` field on the item, or flag it clearly in the report if you are not sure the frontmatter supports that field
- **Wrong neighborhood tag**: replace the tag with the correct one
- **Wrong factual claim in description**: correct it with the sourced value
- **Unverifiable factual claim**: remove the specific claim from the description, preserve the rest of the sentence

All edits: minimal change only. Use python3 to write back the full frontmatter with the corrected value.

---

## Output format

Print one block per item:

```
── Goodman Coffee Roasters — Warehouse Row ──────────────────────────
  link (website)   ✓ reachable
  business         ✓ open
  neighborhood     ✓ downtown confirmed
  claims           ✓ "own roasting operation" confirmed on site

── City Cafe Diner — Downtown ───────────────────────────────────────
  link (website)   ✓ reachable
  business         ✓ open
  neighborhood     ✓ downtown confirmed
  claims           ✓ "24/7" confirmed
```

Use `✓` confirmed, `✗ FIXED` for corrected, `✗ REMOVED` for deleted claims, `?` for could not verify, `!` for closed or dead link.

### Summary at end

```
SUMMARY
  Items checked:  29
  All clear:      26
  Fixed:           2  — Velo Coffee (neighborhood tag), Frothy Monkey (link updated)
  Needs review:    1  — Plant Candy Collective (website unreachable, may have closed)
```

---

## Rules

- Never guess — only fix when the source clearly confirms the correct value
- Process one item at a time during web verification — do not fire parallel fetches
- Skip Google Maps links entirely — they are auto-generated search URLs, not business pages
- If a business appears closed, flag it but do not remove the item — that is a content decision for the user
- If `--no-web` is passed, run Pass 1 only and output the structural scan without any fixes
