# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with SvelteKit, using static site generation and deployed to Cloudflare. The design philosophy emphasizes simplicity, readability, and minimal JavaScript.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Type-check Svelte files
npm run check

# Type-check with watch mode
npm run check:watch

# Lint code (Prettier + ESLint)
npm run lint

# Format code with Prettier
npm run format
```

## Architecture

### Static Site Generation

The entire site is statically generated at build time. `prerender = true` is set in `src/routes/+layout.ts`, making all routes pre-rendered by default.

### Cloudflare Adapter Configuration

The Cloudflare adapter is configured with a deliberate quirk in `svelte.config.js`:

```javascript
adapter: adapter({
  routes: {
    include: ["/kausyd9asda9s8dsi94hf984"], // only include random url to prevent unneeded function invocation
    exclude: []
  }
})
```

This prevents Cloudflare from creating serverless functions. The site is purely static assets served from Cloudflare's CDN.

### Routing

Standard SvelteKit file-based routing:
- `src/routes/+page.svelte` → `/`
- `src/routes/resume/+page.svelte` → `/resume`
- `src/routes/bible/+page.svelte` → `/bible`

### Layout Structure

`src/routes/+layout.svelte` provides the global layout:
- Sticky header at top with fly transition
- Content wrapper with max-width: `min(1200px, 95vw)`
- Imports all global styles (Tailwind, theme.css, Fira Code)

The `Header` component (`src/lib/Header.svelte`) displays:
- Logo with light/dark theme variants (via CSS media queries)
- Site title linking to home
- External blog link

### Styling System

**Theme Colors** (defined in `src/theme.css`):
- Background: `#3f3f3f` (dark gray)
- Text: `#dcdccc` (beige/tan)
- Headings: `#efefef` (light gray)
- Links: `#cc9393` (dusty rose/salmon)

**Typography:**
- Fira Code monospace font (with variable font fallback)
- Font loaded via CDN in `src/lib/fira_code.css`

**Styling approach:**
- Tailwind CSS for layout utilities
- Custom global CSS in `src/theme.css` for colors/typography
- Minimal scoped `<style>` blocks in components
- Semantic HTML without complex styling

### Page Structure Pattern

Pages follow a consistent minimal structure:

```svelte
<svelte:head>
    <title>Page Title</title>
    <meta name="description" content="Description">
</svelte:head>

<h1>Main Heading</h1>
<br>
<p>
    Content with <a href="/link">links</a>
</p>

<style>
    /* Optional scoped styles for lists, images, etc. */
</style>
```

**Key patterns:**
- Use `<br>` for spacing between sections
- External links: `target="_blank" rel="noreferrer"`
- Internal links: relative paths (e.g., `/resume`)
- Semantic HTML: `<h1>`, `<p>`, `<ul>`, `<a>`
- No reactive state or JavaScript interactivity

### Static Assets

Files in `static/` are served from the root URL:
- `static/kev.webp` → `/kev.webp`
- `static/resume/geiss.pdf` → `/resume/geiss.pdf`
- `static/bible/img_2505.jpg` → `/bible/img_2505.jpg`

When adding new pages with images or documents, create a subdirectory in `static/` matching the route name.

### Design Philosophy

This site intentionally avoids:
- Complex component hierarchies
- Client-side state management
- JavaScript interactivity
- Heavy frameworks or abstractions
- Over-engineering

The focus is on:
- Fast loading static HTML
- Readable, maintainable code
- Content-first presentation
- Minimal dependencies
