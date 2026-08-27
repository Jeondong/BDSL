# Biological Data Science Lab (BDSL)

Official website for the Biological Data Science Lab at Kunsan National University.

## About

BDSL integrates genomics, bioinformatics, quantitative genetics, phenomics, and artificial intelligence to understand complex biological variation. The website is a lightweight, responsive multi-page site built with semantic HTML, CSS, and vanilla JavaScript.

## Local preview

No build step is required. Open `index.html` directly, or serve the repository with any static web server. For example:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## GitHub Pages deployment

The `main` branch is the single source of truth for the website. The `.github/workflows/sync-gh-pages.yml` workflow mirrors `main` to `gh-pages` after every push, and GitHub Pages publishes the `/ (root)` folder of `gh-pages`.

Edit `main` only. Do not edit `gh-pages` manually.

The live site is available at [https://jeondong.github.io/BDSL/](https://jeondong.github.io/BDSL/).
## Updating content

- Add new lab news at the top of the `.news-list` container in `news.html`.
- Add verified publications by year in `publications.html`.
- Update the PI biography, appointments, education, research interests, and skills in `pi.html`.
- Add new member profiles to `people.html` as the lab grows.
- Add the office and laboratory room numbers to `contact.html` after space assignment.

## Files

- `index.html` — home page and primary entry points
- `news.html` — appointments, publications, and laboratory updates
- `pi.html` — principal investigator profile, CV, research interests, and skills
- `people.html` — laboratory members and prospective-member information
- `research.html` — research areas and current projects
- `publications.html` — selected peer-reviewed publications and profile link
- `contact.html` — email and institutional address
- `join.html` — compatibility redirect to `people.html`
- `assets/donghyun-jeon.jpg` — optimized PI portrait
- `styles.css` — visual system and responsive layouts
- `script.js` — mobile navigation, active section state, and subtle reveal effects
- `assets/bdsl-research-landscape.png` — homepage hero image
- `assets/bdsl-social-card.jpg` — social sharing preview image
- `assets/ksnu-symbol-favicon.png` — source image for the university-symbol favicon
