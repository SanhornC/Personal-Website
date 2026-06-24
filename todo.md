# Website Redesign TODO — sanhornchen.website
> Instruction file for Claude Code. Read this fully before making any changes.

---

## Overview & Goals

Redesign `sanhornchen.website` from a **multi-page layout** into a clean, professional **single-page academic personal website**.

**Primary design references:**
- Layout & structure: [Sirui Chen](https://csr16.github.io/) — minimal, clean, one-page with anchor nav
- About/research interest format: [Zhining Liu](https://zhiningliu.com/) — bold research category format

**Key changes:**
1. Convert all separate pages into one scrollable page with anchor-link navigation
2. Implement two color themes: **Champagne Mode** (default) + **White Mode** (toggle)
3. Rewrite all content per the spec below
4. Responsive layout (desktop → tablet → mobile)

---

## Step 0: Pre-flight Audit

Before touching anything:
1. List the full directory structure
2. Identify the tech stack (plain HTML/CSS/JS, React, Next.js, Jekyll, etc.)
3. Catalog all existing pages and assets (especially the profile photo)
4. Do NOT delete any files until the new single-page version is fully built

---

## Color Palette & Theming

Use CSS custom properties on `:root`. Implement a **theme toggle button** in the navbar.

### Mode A — Champagne Mode (Default)
Warm cream/milk-tea/low-key luxury aesthetic.

```css
:root {
  --bg-primary:    #FAF6F0;
  --bg-secondary:  #F2E9DE;
  --bg-card:       #EDE0D0;
  --accent:        #B8955A;
  --accent-hover:  #9A7A40;
  --text-primary:  #2C2416;
  --text-secondary:#7A6555;
  --border:        #DCCFBB;
  --navbar-bg:     #2C2416;
  --navbar-text:   #FAF6F0;
  --navbar-link-hover: #C8A97E;
  --link-color:    #9A7040;
  --badge-workshop:#C8A97E;
  --badge-preprint:#A89A8A;
  --badge-submit:  #C0B8AC;
  --shadow:        rgba(44, 36, 22, 0.08);
}
```

### Mode B — White Mode
Pure white background; **same champagne gold accent** on all interactive elements.

```css
[data-theme="white"] {
  --bg-primary:    #FFFFFF;
  --bg-secondary:  #F8F6F3;
  --bg-card:       #F3F0EB;
  --accent:        #B8955A;
  --accent-hover:  #9A7A40;
  --text-primary:  #1A1A1A;
  --text-secondary:#666666;
  --border:        #DDD0BB;
  --navbar-bg:     #FFFFFF;
  --navbar-text:   #2C2416;
  --navbar-link-hover: #B8955A;
  --link-color:    #9A7040;
  --badge-workshop:#C8A97E;
  --badge-preprint:#B0A090;
  --badge-submit:  #C4BAB0;
  --shadow:        rgba(0, 0, 0, 0.06);
}
```

**Theme toggle implementation:**
- Small icon button (e.g., a leaf 🌿 for champagne, a circle ○ for white, or custom minimal SVG)
- Positioned at the far right of the navbar
- On click: toggle `data-theme="white"` on `<html>` element
- Persist preference via `localStorage.setItem('theme', ...)`
- On page load: read from localStorage and apply before render (prevent flash)

---

## Typography

```css
/* Suggested font stack */
--font-heading: 'Playfair Display', Georgia, serif;  /* For section headings */
--font-body:    'Inter', -apple-system, system-ui, sans-serif;  /* For body text */
```

Import from Google Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
```

- Section titles: Playfair Display, 28–32px
- Body text: Inter 400, 15–16px, line-height 1.7
- Author names in publications: Inter 400, 14px
- Venue badges: Inter 500, 12px, letter-spacing 0.03em

---

## Navbar

Sticky top navbar. Behavior:
- On scroll: add subtle `backdrop-filter: blur(8px)` + slight shadow
- In Champagne Mode: dark warm background (`--navbar-bg`) with light text
- In White Mode: white background with border-bottom: 1px solid `--border`

Structure:
```
[Sanhorn Chen]     [About] [News] [Publications] [Experience] [Projects] [Patents]     [🌿 toggle]
```

- Left: name "Sanhorn Chen" — clicking scrolls to `#about`
- Center/Right: anchor links to each section
- Far right: theme toggle icon button
- Mobile: hamburger menu (≤768px), links stack vertically in a dropdown
- Active section indicator: underline or dot in `--accent` color (update on scroll via IntersectionObserver)
- All links use smooth scroll: `scroll-behavior: smooth` on `html`, or JS `scrollIntoView({ behavior: 'smooth' })`

---

## Section 1 — About (`#about`)

### Layout
Two-column on desktop: **left column** (photo + social icons) | **right column** (intro text + research interests)
Stack to single column on mobile (photo centered above text).

### Left Column — Photo & Social Links

- **Profile photo:** Use existing profile photo from current site
  - Style: rounded circle or softly rounded square (border-radius: 50% or ~16px)
  - Size: 160–180px diameter on desktop
  - Border: 2px solid `--border`
  - Optional: subtle box-shadow using `--shadow`

- **Social icon links** (horizontal row, centered below photo):
  - Email → `mailto:sanhorn2@illinois.edu`
  - LinkedIn → `https://linkedin.com/in/sanhorn-chen-898941260`
  - Google Scholar → `<!-- TODO: Add Scholar link -->`
  - GitHub → `<!-- TODO: Add GitHub link -->`
  - Use simple SVG icons or a lightweight icon library (e.g., Simple Icons or Heroicons)
  - Icon color: `--accent`, hover: `--accent-hover`
  - Size: 20–22px, spacing: 16px gap

### Right Column — Intro Text

```
Hi! I am Sanhorn Chen (陳聖閎). I am a first-year M.S. student in Computer
Science at the University of Illinois Urbana-Champaign (UIUC), advised by
Prof. Jingrui He. Prior to this, I received my B.S. in Computer Science +
Economics from University of Illinois Urbana-Champaign (UIUC), where I worked
closely with Prof. Hanghang Tong.
```

**Hyperlinks in the text:**
| Text | URL |
|------|-----|
| University of Illinois Urbana-Champaign (UIUC) (first) | https://illinois.edu/ |
| Prof. Jingrui He | https://www.hejingrui.org/ |
| University of Illinois Urbana-Champaign (UIUC) (second) | https://illinois.edu/ |
| Prof. Hanghang Tong | http://tonghanghang.org/ |

All external links: `target="_blank" rel="noopener noreferrer"`

Link style: `--link-color`, underline on hover, no underline by default.

### Research Interests

Place below the intro paragraph. Follow Zhining Liu's format but keep it **high-level** — no sub-bullet details.

Render as bold inline text separated by `·` or as a clean 2×2 grid of interest pills:

```
My research interests include LLM Reasoning, Information Retrieval & RAG,
Agentic AI, and Time Series AI.
```

Or styled as four interest tags:

```
[LLM Reasoning]  [Information Retrieval & RAG]  [Agentic AI]  [Time Series AI]
```

Style these as **soft pills**: border 1px solid `--border`, background `--bg-card`, text `--text-primary`, padding 4px 12px, border-radius 999px. NOT colorful — keep them subtle and elegant.

---

## Section 2 — News (`#news`)

Simple two-column layout: **Date | Description**.
Most recent first. No card boxes, no heavy borders.

Use a clean `<table>` or styled `<dl>` list. Alternating row background: transparent / `--bg-secondary` (very subtle).

### Content

| Date | Item |
|------|------|
| Jun 2026 | 🎉 Paper accepted at **NL-GEMI Workshop @ ACL 2026** — TSAQA benchmark |
| May 2026 | 🎓 Started M.S. in Computer Science at UIUC, advised by Prof. Jingrui He |
| May 2025 | 💼 Joined **TSMC** CPO AI4BI Division as a Data Engineer Intern |

Style:
- Date column: `--text-secondary`, monospace or tabular nums, ~80–100px wide
- Description column: `--text-primary`, normal weight
- Bold venue/company names using `<strong>` as shown
- Row padding: 10px 0

---

## Section 3 — Publications (`#publications`)

**Style:** Text-only list. No thumbnails. Clean academic format.

**Sanhorn Chen's name** should be **bold** in every author list.

**Equal contribution note:** Show `* Equal contribution` as a small footnote line below the first paper that uses it.

### Entry Format (for each paper)

```html
<div class="pub-entry">
  <div class="pub-title"><a href="LINK">Paper Title Here</a></div>
  <div class="pub-authors">Author A, <strong>Sanhorn Chen</strong>, Author B, ...</div>
  <div class="pub-venue">
    <span class="badge badge-workshop">NL-GEMI Workshop @ ACL 2026</span>
  </div>
  <div class="pub-links">
    <a href="..." class="pub-link">arXiv</a>
    <!-- Add PDF, Code links when available -->
  </div>
</div>
```

### Badge Styles

```css
.badge {
  display: inline-block;
  padding: 2px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.03em;
}
.badge-workshop  { background: var(--badge-workshop);  color: #fff; }
.badge-preprint  { background: var(--badge-preprint);  color: #fff; }
.badge-submit    { background: var(--badge-submit);    color: var(--text-primary); }
```

### Paper 1 — TSAQA ✅ Published

**Title:** TSAQA: Time Series Analysis Question and Answering Benchmark

**Authors:** **Sanhorn Chen**\*, Baoyu Jing\*, Lecheng Zheng, Boyu Liu, Zihao Li, Jiaru Zou, Tianxin Wei, Zhining Liu, Zhichen Zeng, Ruizhong Qiu, Xiao Lin, Yuchen Yan, Qi Yu, Dongqi Fu, Jingchao Ni, Jingrui He, Hanghang Tong

**Venue badge:** `badge-workshop` → "NL-GEMI Workshop @ ACL 2026"

**Links:**
- arXiv → `https://arxiv.org/abs/2601.23204`

**Note:** Add `* Equal contribution` footnote below this entry (applies to Sanhorn Chen and Baoyu Jing).

---

### Paper 2 — TSQA Survey 📝 In Submission

**Title:** A Survey on Time Series Question Answering

**Authors:** **Sanhorn Chen**, Baoyu Jing, Lecheng Zheng, Zeya Wang, Jingchao Ni, Hanghang Tong

**Venue badge:** `badge-submit` → "In Submission to EMNLP 2026"

**Links:** None for now. (Add arXiv link later when preprint is available.)

---

### Paper 3 — Verifiable Agentic DS 📄 Preprint

**Title:** Towards Verifiable Agentic Data Science: Solving Irregular TSQA via Tool-Grounded Reasoning

**Authors:** **Sanhorn Chen**, Xiaoyang Chen, Baoyu Liu, Roy Zhao

**Venue badge:** `badge-preprint` → "arXiv Preprint, 2026"

**Links:**
- arXiv → `https://arxiv.org/abs/2606.15107`

---

### Paper 4 — Multimodal Gaming 📄 Preprint

**Title:** Accelerating Multi-modal LLM Gaming Performance via Input Prediction and Mishit Correction

**Authors:** Ziyang Lin, Zixuan Sun, **Sanhorn Chen**, Xiaoyang Chen, Roy Zhao

**Venue badge:** `badge-preprint` → "arXiv Preprint, 2025"

**Links:**
- arXiv → `https://arxiv.org/abs/2512.17250`

---

### Section Footer Note

Below the paper list, add a small line:
```
* Equal contribution  ·  † Corresponding author
```
(Use only the markers that actually appear in the list above.)

---

## Section 4 — Experience (`#experience`)

Keep **only TSMC and Foxconn**. Remove all research/lab entries from this section.

Style: Vertical timeline or clean card list. Each entry has:
- Company name + title (bold)
- Location + date range (right-aligned or below, in `--text-secondary`)
- Bullet list of accomplishments
- Optional: subtle left border in `--accent` color (2–3px) for visual anchor

### Entry 1 — TSMC

**Taiwan Semiconductor Manufacturing Company (TSMC)**
Data Engineer Intern · CPO AI4BI Division
Hsinchu City, Taiwan · May 2025 – August 2025

- Optimized Python-based ML pipeline for Fab's AI Wafer Output Forecast, leveraging XGBoost with grid search to improve wafer cycle time and output forecasting.
- Transitioned hardcoded scripts into reproducible code aligned with TSMC's MLOps architecture; integrated CI/CD enhancements and developed unit tests for reliable model retraining.
- Increased analysis efficiency by 10× through designing Star Schemas, cleaning and loading datasets via MariaDB API, and writing DAX formulas for PowerBI.

### Entry 2 — Foxconn

**Foxconn (Hon Hai) Research Institute**
AI Research Intern · Computer Vision Group
Taipei City, Taiwan · June 2023 – February 2024

- Proposed CARGAN, a GAN-based model generating weather-varied street view images for driving datasets using PyTorch, with outputs across sunny, snowy, rainy, and overcast conditions.
- Developed 3 novel loss functions (Source Preserving Loss, Style Similarity Loss, Content Contrastive Loss) to enhance image-to-image translation quality and content preservation.
- Organized the BDD100K dataset across 7 weather conditions; structured training and testing splits in StarGAN V2-compatible format.

---

## Section 5 — Projects (`#projects`)

**Layout:** Horizontal card carousel with left/right arrow navigation.

Currently 4 cards (AgentsClaw, ATLAS Data Analysis, Test Genie, ERA Law Firm Website), in this order. Build the carousel so it scales to more later:
- One card shown at a time on mobile; 1–2 on wider screens
- Arrows active; loop or clamp at the ends (designer's choice — keep behavior obvious)
- Reuse the existing project thumbnails from `src/assets/` where available (`atlas.png`, `testgenie.png`, `era.png`). AgentsClaw has no image yet → render a clean text-only card (no broken `<img>`).
- Do NOT carry over the old "Research Work / Internship Project / Personal Projects" three-bucket layout from the legacy `Projects.js`. Flatten into one carousel.
- CARGAN is intentionally excluded here (it is a publication, not a project).

### Card Structure

```html
<div class="project-card">
  <div class="project-name">Project Name</div>
  <div class="project-desc">One-paragraph description (2–3 sentences).</div>
  <div class="project-links">
    <a href="..." class="btn-accent">Website →</a>
    <!-- or: <a href="..." class="btn-accent">GitHub →</a> -->
  </div>
</div>
```

### Card Styling

```css
.project-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 28px 32px;
  max-width: 480px;
  box-shadow: 0 2px 12px var(--shadow);
}
.project-name {
  font-size: 18px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 10px;
}
.project-desc {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.65;
  margin-bottom: 16px;
}
.btn-accent {
  display: inline-block;
  padding: 6px 16px;
  border: 1.5px solid var(--accent);
  border-radius: 999px;
  color: var(--accent);
  font-size: 13px;
  font-weight: 500;
  text-decoration: none;
  transition: background 0.2s, color 0.2s;
}
.btn-accent:hover {
  background: var(--accent);
  color: #fff;
}
```

### Arrow Buttons

```css
.carousel-arrow {
  width: 40px; height: 40px;
  border-radius: 50%;
  border: 1.5px solid var(--accent);
  color: var(--accent);
  background: transparent;
  cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  transition: background 0.2s, color 0.2s;
}
.carousel-arrow:hover { background: var(--accent); color: #fff; }
.carousel-arrow:disabled { opacity: 0.3; cursor: default; }
```

### Card 1 — AgentsClaw

**Name:** AgentsClaw

**Description:** A multi-agent IEP meeting preparation system designed for Speech-Language Pathologists (SLPs). The platform enables pre-session planning, new-staff training, and realistic meeting practice through persona-based AI agent interactions.

**Link:** [Website →](https://www.agentsclaw.ai)

---

### Card 2 — ATLAS Data Analysis

**Name:** ATLAS Data Analysis

**Image:** `src/assets/atlas.png`

**Description:** Data cleaning scripts and documentation for the UIUC ATLAS Data Team's analysis of computer-room usage across campus.

**Link:** [GitHub →](https://github.com/SanhornC/ATLAS---Data-Team-Computer-Rooms-)

---

### Card 3 — Test Genie

**Name:** Test Genie

**Image:** `src/assets/testgenie.png`

**Description:** A web + LLM application that helps students prepare for exams by generating practice tests and lecture summaries from their uploaded materials.

**Link:** [GitHub →](https://github.com/sliao082/Test-Genie)

---

### Card 4 — ERA Law Firm Website

**Name:** ERA Law Firm Website

**Image:** `src/assets/era.png`

**Description:** A website designed and built for a law firm based in Hsinchu, Taiwan.

**Link:** [Website →](https://eralaw.web.app)

---

## Section 6 — Patents (`#patents`)

**Why a separate section:** Patents are distinct from academic publications and should not be mixed together. A dedicated section keeps the CV accurate for academic readers.

Style: Plain text list, no badges. Keep it compact and low-profile. Sanhorn Chen's name in **bold**.

### Patent 1

Shen-Hsuan Liu, Chi-En Huang, Muhammad Saqlain Aslam, Yung-Hui Li, **Sanhorn Chen**.
"Method and Apparatus Related to Data Generation Framework."
*US Patent Application 19/069,248*, 2025.

### Patent 2

Shen-Hsuan Liu, Chi-En Huang, Muhammad Saqlain Aslam, Yung-Hui Li, **Sanhorn Chen**.
"Method and Apparatus Related to Data Generation Framework."
*US Patent Application 19/069,242*, 2025.

---

## Section 7 — SEO, Favicon & Metadata (`public/`)

**Why this section exists:** The current site still ships Create React App's defaults, so Google shows the **React logo** as the site icon and the snippet *"Web site created using create-react-app"*. This makes the site look unprofessional in search results. Fix the static metadata in `public/` (the build step copies these verbatim, so search crawlers see them even before React hydrates).

**Canonical domain for all absolute URLs below:** `https://sanhornchen.website`

### 7.1 Favicon — replace the React logo

- Replace `public/favicon.ico` with a custom **"SC" monogram** favicon.
  - Style: champagne-gold (`#B8955A`) glyph on a dark warm (`#2C2416`) background, OR the inverse — match the site's Champagne aesthetic.
  - Provide multiple sizes so it renders crisply everywhere: `favicon.ico` (16/32/48), plus `favicon-32x32.png`, `favicon-16x16.png`, `apple-touch-icon.png` (180×180), and `icon-192.png` / `icon-512.png` for the manifest.
  - Keep the glyph bold and high-contrast — at 16px a thin serif "SC" is unreadable; prefer a simple, heavy letterform.
- Remove references to the default `logo192.png` / `logo512.png` once replaced.

### 7.2 `public/index.html` `<head>` rewrite

Replace the CRA defaults with real metadata:

```html
<!-- Primary -->
<title>Sanhorn Chen | M.S. Computer Science @ UIUC</title>
<meta name="description" content="Sanhorn Chen (陳聖閎) — M.S. Computer Science student at UIUC, advised by Prof. Jingrui He. Research in LLM Reasoning, Information Retrieval & RAG, Agentic AI, and Time Series AI." />
<meta name="author" content="Sanhorn Chen" />
<link rel="canonical" href="https://sanhornchen.website/" />
<meta name="theme-color" content="#2C2416" />

<!-- Favicons -->
<link rel="icon" href="%PUBLIC_URL%/favicon.ico" sizes="any" />
<link rel="icon" type="image/png" sizes="32x32" href="%PUBLIC_URL%/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="%PUBLIC_URL%/favicon-16x16.png" />
<link rel="apple-touch-icon" href="%PUBLIC_URL%/apple-touch-icon.png" />

<!-- Open Graph (link previews on LinkedIn / Slack / iMessage) -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://sanhornchen.website/" />
<meta property="og:title" content="Sanhorn Chen | M.S. Computer Science @ UIUC" />
<meta property="og:description" content="M.S. Computer Science student at UIUC. Research in LLM Reasoning, RAG, Agentic AI, and Time Series AI." />
<meta property="og:image" content="https://sanhornchen.website/og-image.png" />

<!-- Twitter / X card -->
<meta name="twitter:card" content="summary" />
<meta name="twitter:title" content="Sanhorn Chen | M.S. Computer Science @ UIUC" />
<meta name="twitter:description" content="M.S. Computer Science student at UIUC. Research in LLM Reasoning, RAG, Agentic AI, and Time Series AI." />
<meta name="twitter:image" content="https://sanhornchen.website/og-image.png" />
```

- **`og:image` / `twitter:image`:** create a `public/og-image.png`. Simplest option = a square crop of the existing profile photo (`src/assets/sanhorn.jpeg`) exported to `public/`. (A 1200×630 banner is nicer but optional.) Use `summary` card if square, `summary_large_image` if 1200×630.
- Update `<noscript>` text to something human (e.g., "Sanhorn Chen — please enable JavaScript to view this site.").

### 7.3 JSON-LD structured data (`Person` schema)

Add a `<script type="application/ld+json">` block in `<head>` so Google can build a proper knowledge panel. Fill `sameAs` with the real social URLs (replace TODOs once known):

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Sanhorn Chen",
  "alternateName": "陳聖閎",
  "url": "https://sanhornchen.website/",
  "image": "https://sanhornchen.website/og-image.png",
  "jobTitle": "M.S. Student in Computer Science",
  "affiliation": {
    "@type": "CollegeOrUniversity",
    "name": "University of Illinois Urbana-Champaign"
  },
  "email": "mailto:sanhorn2@illinois.edu",
  "sameAs": [
    "https://linkedin.com/in/sanhorn-chen-898941260"
    /* TODO: add Google Scholar, GitHub URLs */
  ]
}
</script>
```

### 7.4 `public/manifest.json` rewrite

Replace the `"React App"` / `"Create React App Sample"` defaults:

```json
{
  "short_name": "Sanhorn Chen",
  "name": "Sanhorn Chen — Personal Website",
  "icons": [
    { "src": "favicon.ico", "sizes": "16x16 32x32 48x48", "type": "image/x-icon" },
    { "src": "icon-192.png", "type": "image/png", "sizes": "192x192" },
    { "src": "icon-512.png", "type": "image/png", "sizes": "512x512" }
  ],
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#2C2416",
  "background_color": "#FAF6F0"
}
```

### 7.5 `public/robots.txt` + `public/sitemap.xml`

- Add `public/robots.txt`:
  ```
  User-agent: *
  Allow: /
  Sitemap: https://sanhornchen.website/sitemap.xml
  ```
- Add a minimal `public/sitemap.xml` listing the single page (`https://sanhornchen.website/`).

### 7.6 After deploy — force re-index

Metadata changes do NOT update Google instantly (can take days–weeks).
- Rebuild (`npm run build`) and redeploy to Firebase so the new `public/` files ship.
- In **Google Search Console**, use **URL Inspection → Request Indexing** on `https://sanhornchen.website/` to speed up recrawl.
- Verify the favicon updated by hard-refreshing and checking `https://sanhornchen.website/favicon.ico` directly.

> **Note (CSR caveat):** This is a client-rendered CRA app, so the static HTML has no real body content. The `<head>` metadata + JSON-LD above are what crawlers rely on. If SEO becomes a priority later, consider pre-rendering or migrating to a framework with SSR/SSG (e.g., Next.js / Astro) — out of scope for this pass.

---

## Footer

Minimal footer, full-width, `--bg-secondary` background.

```
© 2026 Sanhorn Chen  ·  sanhorn2@illinois.edu
```

Optional: repeat small icon links (Email, LinkedIn, Scholar).

---

## Responsive Breakpoints

| Breakpoint | Behavior |
|------------|----------|
| `> 1024px` (Desktop) | Two-column About; full horizontal navbar; full pub entries |
| `768–1024px` (Tablet) | Stack About to single column; navbar still horizontal (may shrink font) |
| `< 768px` (Mobile) | Everything single column; hamburger nav; carousel arrows as large tap targets |

On mobile, the navbar links collapse into a hamburger (☰). Tapping opens a full-width dropdown panel with the same anchor links.

---

## Technical Requirements

1. **Single page, anchor links:** All `<section>` elements have `id` attributes matching navbar links (e.g., `id="about"`, `id="news"`, etc.).
2. **No page reloads:** Remove all multi-page routing. Everything lives in `index.html` (or equivalent single-page entry).
3. **Smooth scroll:** Apply `html { scroll-behavior: smooth; }` plus a `scroll-margin-top` offset on each section to account for the sticky navbar height (e.g., `scroll-margin-top: 72px`).
4. **Active nav highlight:** Use `IntersectionObserver` to detect which section is in view and apply an active class to the corresponding navbar link.
5. **All external links:** `target="_blank" rel="noopener noreferrer"`.
6. **Theme persistence:** Read `localStorage.getItem('theme')` on `DOMContentLoaded` and apply before first paint to prevent flash.
7. **Assets:** Reuse existing profile photo. Do not delete any existing image files.
8. **No broken links:** Every `<a href>` should either point to a real URL or be clearly marked as `<!-- TODO -->` with a comment.

---

## Content Placeholders to Fill In Later

The following items need to be added by the user after initial build:

- [ ] Google Scholar profile URL → replace `<!-- TODO: Scholar link -->` in About social icons
- [ ] GitHub profile URL → replace `<!-- TODO: GitHub link -->` in About social icons
- [ ] ACL Anthology link for TSAQA (once published in proceedings)
- [ ] arXiv link for TSQA Survey (once preprint is posted)
- [ ] Profile photo: confirm path of existing photo, or replace with updated one
- [ ] Any additional project cards (IRTS-ToolBench, etc.) — carousel is ready
- [ ] Custom "SC" monogram favicon asset (Section 7.1) — or confirm Claude should generate it
- [ ] `og-image.png` (square crop of profile photo, or 1200×630 banner) → `public/`
- [ ] AgentsClaw thumbnail image (currently text-only card; add later if wanted)

---

## Summary Checklist for Claude Code

- [ ] Audit existing codebase and document structure
- [ ] Set up CSS custom properties for both color themes
- [ ] Implement theme toggle with localStorage persistence
- [ ] Build sticky navbar with smooth-scroll anchor links and active section indicator
- [ ] Build `#about` section (two-column, photo + intro + research interests + social icons)
- [ ] Build `#news` section (table/list format, 3 items)
- [ ] Build `#publications` section (4 papers, badges, bold author name, equal contribution note)
- [ ] Build `#experience` section (TSMC + Foxconn only, timeline/card style)
- [ ] Build `#projects` section (carousel, 4 cards: AgentsClaw, ATLAS Data Analysis, Test Genie, ERA Law Firm)
- [ ] Build `#patents` section (2 patents, plain text)
- [ ] Replace React favicon + rewrite `public/index.html` head, `manifest.json`, add OG/JSON-LD/robots/sitemap (Section 7)
- [ ] Build footer
- [ ] Make fully responsive (desktop / tablet / mobile)
- [ ] Verify all links open correctly
- [ ] Test both color modes
- [ ] Test smooth scroll and active nav highlight