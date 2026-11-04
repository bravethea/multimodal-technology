# Multimodal Technology Group — website

Website of the Multimodal Technology Group at the Department of Computational
Linguistics, University of Zurich. Published with GitHub Pages at
<https://multimodaltechnology.github.io>.

## Structure

Plain HTML, one stylesheet, one small script. No build step, no framework and no
third-party requests: fonts are self-hosted, so no visitor IP address is
disclosed to an external provider.

| File | Contents |
| --- | --- |
| `index.html` | About the group, research areas, news, funders |
| `research.html` | Research topics, current projects, earlier work |
| `team.html` | Group leader, doctoral researchers, collaborators, alumni |
| `publications.html` | Publications by year, work under review listed first |
| `teaching.html` | Courses, workshops, theses |
| `resources.html` | Software, corpora and datasets |
| `contact.html` | Address, open positions, prospective students |
| `styles.css` | All styling, including the colour and type variables in `:root` |
| `script.js` | Mobile navigation toggle only |
| `assets/` | Self-hosted fonts, favicon, funder logos |

## Editing

Each page is self-contained, so the header and footer are repeated in all seven
files. When a navigation item changes, change it in every page.

Passages that still need a decision are marked in the source with
`<span class="placeholder">[...]</span>` and appear on the page with a yellow
left border, so that nothing unverified goes unnoticed.

## Preview locally

```bash
python3 -m http.server 8787
```

Then open <http://localhost:8787>.

## Publishing

The repository is named `multimodaltechnology.github.io`, so GitHub Pages serves
the default branch at the root of that domain. Pushing to `main` publishes.
