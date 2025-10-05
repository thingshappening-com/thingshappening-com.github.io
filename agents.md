## MDX Syntax Rules (agents.md)

Authoritative rules for writing and editing `.mdx` content in this repo. Follow these to prevent MDX build errors and ensure consistent rendering.

### Frontmatter
- **YAML only**: Use valid YAML in the frontmatter block between `---` lines.
- **Strings vs arrays**: Quote strings; use YAML arrays for lists (e.g., `tags: [ {type: "guide", tag: "live"} ]`).
- **Booleans/dates**: Use unquoted booleans; use ISO-like strings for dates unless a component expects a specific format.

### Headings and Structure
- **Single H1**: One top-level title per page is preferred. Subsequent sections use `##`, `###`, etc., or the site’s heading components.
- **Anchor IDs**: For in-page links, add `id` to headings (e.g., `<h2 id="theatre">...</h2>`) or use Markdown headings with autolinked IDs if supported.

### HTML, JSX, and Components
- **Valid JSX**: Any HTML inside MDX is parsed as JSX. Close all tags, and self-close void elements (e.g., `<img />`, `<br />`).
- **Comments**: Use JSX comments `{/* ... */}`. Do not use HTML comments `<!-- ... -->`.
- **Attributes**: Use `className` in pure React MDX. In Astro MDX that renders to HTML, `class` is allowed where already used in project. Be consistent with surrounding code.
- **Components**: Capitalize component names (e.g., `OptimizedImage`). Import at the top of the MDX file before use.
- **Props**: Pass only serializable, expected props to components. Avoid functions or large objects in frontmatter.

### Lists and Tables
- **Lists**: Wrap `<li>` elements in `<ul>` or `<ol>`. Do not place standalone `<li>` directly in a `<div>`.
- **Tables**: Ensure valid HTML structure: `<table><thead><tr><th>..</th></tr></thead><tbody><tr><td>..</td></tr></tbody></table>`.

### Links and Media
- **Links**: Always include `href`. Use `target="_blank"` with `rel="noopener noreferrer"` for external links.
- **Images**: Prefer site components (e.g., `OptimizedImage`) when available. If using `<img>`, self-close: `<img src="..." alt="..." />`.
- **YouTube/Embeds**: Use the existing embed pattern/components in the project. Ensure attributes are valid in JSX.

### MDX Expressions
- **Interpolation**: Wrap JS expressions in `{}`. Keep expressions simple and deterministic.
- **Escaping**: Escape braces and angle brackets in text as needed (e.g., code fences) to avoid accidental JSX interpretation.

### Accessibility and Semantics
- **Headings**: Maintain a logical heading order.
- **Alt text**: Provide meaningful `alt` for images.
- **Buttons vs links**: Use anchors for navigation, buttons for actions.

### Consistency with Project Conventions
- **Classes**: Match existing utility classes and spacing patterns (`pb-`, `pt-`, `mt-`, grid utilities, etc.).
- **IDs**: Use kebab-case for anchor IDs (e.g., `id="live-music"`).
- **Imports**: Use relative imports consistent with nearby files.

### Common Pitfalls that Break Builds
- HTML comments `<!-- ... -->` inside JSX → use `{/* ... */}` instead.
- `<li>` not inside a `<ul>/<ol>`.
- Unclosed tags or missing self-closing on void elements.
- Mismatched quotes or invalid YAML in frontmatter.
- Using props/components without importing them.

### Quick Checklist (Before Commit)
- [ ] Frontmatter is valid YAML and matches component expectations.
- [ ] No HTML comments; only JSX comments.
- [ ] Lists are properly wrapped; tables have valid structure.
- [ ] All tags closed; void elements self-closed.
- [ ] Imports present for any used components.
- [ ] Anchor IDs exist for any in-page links.
- [ ] External links have `target` + `rel` where appropriate.
- [ ] Builds locally without MDX errors.


