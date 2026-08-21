# GSAP Case Studies Scroll Demo

A standalone HTML/CSS/JS demo designed to be converted into a WordPress theme later.

## Structure

- `index.html` — page markup
- `css/style.css` — all styling
- `js/main.js` — GSAP + ScrollTrigger animation
- `images/` — local image directory for your own project images

## Animation

1. Hero occupies the first viewport.
2. Case Studies scrolls over the hero.
3. Case Studies pins at the top of the viewport.
4. Large heading reveals.
5. Three cards rise from below.
6. First card moves left and rotates slightly.
7. Third card moves right and rotates slightly.
8. Middle card stays centered.
9. Timeline finishes and the Case Studies section releases.
10. The next section continues normally.

## Run

Open `index.html` in a browser. GSAP and ScrollTrigger are loaded from jsDelivr.

For WordPress, move:

- `css/style.css` → theme stylesheet
- `js/main.js` → theme JS
- the HTML inside `<main>` → a page template or front-page template
- images → your theme's assets or WordPress media/ACF fields

## WordPress conversion

The three case cards are intentionally separate HTML elements so they can later be generated with a WordPress loop or ACF repeater without changing the GSAP animation selectors.
