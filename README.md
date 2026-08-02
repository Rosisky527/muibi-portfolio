# Muibi Rasaq — Portfolio

A full multi-page portfolio site built with Next.js (App Router) and Tailwind CSS.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Pages

| Page | Route |
|---|---|
| Home | `/` |
| About | `/about` |
| Services | `/services` |
| Projects | `/projects` |
| Blog | `/blog` and `/blog/[slug]` |
| Contact | `/contact` |
| Privacy Policy | `/privacy-policy` |
| Terms of Service | `/terms-of-service` |
| 404 | shown automatically for any unmatched route |

## Edit your content

Almost everything (name, bio, contact info, services, skills, projects, stats) lives in:

```
lib/data.js
```

Edit that file and the whole site updates — no need to touch individual page files unless
you're changing layout.

To replace your résumé, drop a new PDF into `public/resume.pdf` (keep the same filename, or
update `resumeUrl` in `lib/data.js`).

## Blog posts

Blog posts are plain Markdown files in `content/posts/`. To add a new post, create a new
`.md` file there with this format at the top:

```md
---
title: "Your Post Title"
date: "2026-08-01"
excerpt: "One or two sentences shown on the blog list page."
---

Your post content goes here, written in Markdown.

## You can use headings

And **bold text**, lists, links, etc.
```

The file name (minus `.md`) becomes the URL — `my-post.md` becomes `/blog/my-post`. No code
changes needed.

## Contact form — enabling real email delivery

The contact form works out of the box: submissions are validated on the backend
(`app/api/contact/route.js`) and logged server-side, so nothing is lost even before email is
configured. To actually receive emails from form submissions:

1. Use a Gmail account (or adapt the transporter in `app/api/contact/route.js` for another
   provider).
2. Create a Gmail **App Password**: Google Account → Security → 2-Step Verification → App
   Passwords. (Regular Gmail passwords won't work here — it must be an App Password.)
3. Add these environment variables. Locally, create a file named `.env.local` in the project
   root:
   ```
   EMAIL_USER=youraddress@gmail.com
   EMAIL_PASS=your16characterapppassword
   EMAIL_TO=whereyouwanttoreceivemessages@gmail.com
   ```
4. On Vercel, add the same three variables under Project Settings → Environment Variables,
   then redeploy.

Once configured, form submissions are emailed to `EMAIL_TO` with the sender's address set as
reply-to, so you can just hit reply.

## SEO

- `app/sitemap.js` and `app/robots.js` auto-generate `/sitemap.xml` and `/robots.txt`.
- Each page exports its own `metadata` (title/description) in its `page.js` file.
- **Before deploying for real**, update the placeholder domain (`https://example.com`) in
  `app/layout.js`, `app/sitemap.js`, and `app/robots.js` to your actual domain once you have
  one.

## Project structure

```
app/
  layout.js               — root layout: Nav, Footer, WhatsApp button, SEO defaults
  page.js                 — Home page
  about/page.js
  services/page.js
  projects/page.js
  contact/page.js
  blog/page.js             — blog list
  blog/[slug]/page.js      — individual blog post
  privacy-policy/page.js
  terms-of-service/page.js
  not-found.js             — custom 404
  sitemap.js
  robots.js
  api/contact/route.js     — backend endpoint for the contact form
  globals.css              — colors, fonts, animation keyframes
components/
  Nav.js, Footer.js, WhatsAppButton.js
  ServiceCard.js, ProjectCard.js
  ContactForm.js
  FadeIn.js, AnimatedCounter.js, TypingEffect.js, AnimatedBackground.js, FloatingIcons.js
lib/
  data.js     — all site content (name, bio, services, skills, projects, stats)
  posts.js    — reads and parses the Markdown blog posts
content/
  posts/      — your blog posts as .md files
public/
  resume.pdf  — downloadable résumé
```

## Deploy to Vercel

1. Push this project to a GitHub repository (see below).
2. Go to https://vercel.com/new and import the repository.
3. Vercel auto-detects Next.js — no configuration needed.
4. Add the `EMAIL_USER` / `EMAIL_PASS` / `EMAIL_TO` environment variables if you want the
   contact form to send real emails (see above).
5. Click Deploy.

## Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/Rosisky527/YOUR_REPO_NAME.git
git push -u origin main
```

Then connect that repo to Vercel as above.
