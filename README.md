# Jasiri Tech Solutions — Website

A multi-page static website for **Jasiri Tech Solutions**, an ICT company based in Kenya.
Hosted via **GitHub Pages**.

---

## File Structure

```
/
├── index.html        ← Homepage
├── about.html        ← About Us
├── services.html     ← Our Services
├── contact.html      ← Contact Us (with enquiry form)
├── blog.html         ← Blog listing
├── post1.html        ← Blog: How to Choose the Right ICT Solutions
├── post2.html        ← Blog: Benefits of Network Optimisation
├── post3.html        ← Blog: Digital Marketing Essentials
├── styles.css        ← Shared stylesheet
├── script.js         ← Shared JavaScript
└── README.md
```

---

## Deploying to GitHub Pages

1. Push all files to your GitHub repository (e.g. `username/jasiri-tech`).
2. Go to **Settings → Pages**.
3. Under **Branch**, select `main` (or `master`) and `/ (root)`.
4. Click **Save**. Your site will be live at `https://username.github.io/jasiri-tech/`.

---

## Enabling the Contact Form

GitHub Pages is static — it cannot process server-side form submissions on its own.

**Recommended free solution: [Formspree](https://formspree.io)**

1. Sign up at formspree.io (free tier handles 50 submissions/month).
2. Create a new form and copy your endpoint URL, e.g.:
   `https://formspree.io/f/xabc1234`
3. In `contact.html`, replace:
   ```html
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```
   with your actual endpoint.
4. Remove the `id="contactForm"` attribute from the `<form>` tag
   (this disables the JS demo handler and lets Formspree take over).

---

## Adding Images

- Place image files in the root directory (or an `/images/` subfolder).
- In `about.html`, replace the placeholder div with:
  ```html
  <img src="images/team.jpg" alt="Jasiri Tech team">
  ```
- For blog posts, add a hero image at the top of each post file.

---

## Customisation

| What to change | Where |
|---|---|
| Brand colours | `styles.css` — `:root` CSS variables |
| Fonts | `styles.css` — Google Fonts `@import` |
| Stats (50+ projects etc.) | `index.html` — `.stats-row` section |
| LinkedIn URL | `about.html` |
| Phone / Email | `contact.html` |
