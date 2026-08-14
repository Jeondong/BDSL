# Plant Data Science Lab (PDSL)

Official website for the Plant Data Science Lab at Kunsan National University.

## About

PDSL integrates plant genomics, bioinformatics, quantitative genetics, and artificial intelligence to accelerate crop improvement. The website is a lightweight, responsive one-page site built with semantic HTML, CSS, and vanilla JavaScript.

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

- Add publications inside the commented publication area in `index.html`.
- Add new lab news at the top of the `.news-list` container.
- Replace the profile placeholder when an official photograph is available.
- Replace `your-email@ksnu.ac.kr` only after confirming the PI's email address.

## Files

- `index.html` — page content and semantic structure
- `styles.css` — visual system and responsive layouts
- `script.js` — mobile navigation, active section state, and subtle reveal effects
