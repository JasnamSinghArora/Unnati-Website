# Unnati

The website for [Unnati](https://unnatiorg.com), a youth-led non-profit helping students in India find scholarships, government schemes, courses and career resources. Pages and program details are available in Hindi and English.

## Run locally

This is a static site with no build step or package dependencies. Serve the repository folder:

```sh
python3 -m http.server 8000
```

Open http://localhost:8000. Use a local server so language preferences behave consistently between pages.

## Editing the site

- The five HTML files contain the home, about, programs, career fest and contact pages.
- `css/style.css` contains shared styles and mobile layouts.
- `js/main.js` handles the language switch, navigation, program filters and scroll effects.
- `js/programs.js` contains the bilingual program records and the details dialog.
- `images/` holds team photos, event photos, press clippings and letters.

When updating a program, change its card in `programs.html` and its matching record in `js/programs.js`. Keep the Hindi and English versions together and retain the program key used by the dialog. Check each category filter and the details link after editing.

The language preference is saved in the browser. The contact form currently shows a local acknowledgement; it does not send email or store submissions. The email link in the footer is available for direct contact.

## Publishing

GitHub Pages serves `main` from the repository root. `CNAME` keeps the custom domain at `unnatiorg.com`. No generated files need to be committed.
