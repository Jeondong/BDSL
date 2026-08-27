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

1. Open the repository on GitHub and go to **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
3. Select the `main` branch and the `/ (root)` folder, then click **Save**.
4. After GitHub finishes deployment, the site will be available at [https://jeondong.github.io/PDSL/](https://jeondong.github.io/PDSL/).

All site assets use relative paths so the project works from the `/PDSL/` subpath.

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
- `assets/bdsl-research-landscape.png` — homepage hero and social sharing preview image
