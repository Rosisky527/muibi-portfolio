---
title: "Five Things I Check Before Calling a Website 'Done'"
date: "2026-05-22"
excerpt: "A short checklist I run through before handing off any client site — the unglamorous work that separates a finished project from a shipped one."
---

It's tempting to call a project done the moment it looks right in the browser. In practice, a handful of unglamorous checks are what separate a site that looks finished from one that's actually ready for real users.

## 1. Mobile-first, not mobile-afterthought

I test on an actual phone, not just a resized browser window. Tap targets, font sizes, and scroll behavior all feel different on a real device than in dev tools.

## 2. Lighthouse and Core Web Vitals

A slow site loses visitors before they ever see the design work. I run a Lighthouse audit and fix anything dragging down performance, accessibility, or SEO scores — usually image sizing and unused JavaScript are the biggest offenders.

## 3. Broken links and dead ends

Every internal link, every form submit button, every "back to home" — clicked, once, manually. Automated tools miss context that a human catches immediately.

## 4. Form validation and error states

What happens when someone submits an empty field, an invalid email, or hits the server while it's down? A form that only works on the happy path isn't finished.

## 5. What happens after launch

Who updates the content next month? Is there documentation, or does every change require calling me? I try to hand off something the client (or the next developer) can actually maintain.

None of this is exciting work. All of it is the difference between a demo and a product.
