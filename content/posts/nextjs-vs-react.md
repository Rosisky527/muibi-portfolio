---
title: "Choosing Between Next.js and Plain React for a New Project"
date: "2026-06-10"
excerpt: "A practical look at when the extra structure of Next.js actually pays off, and when a simpler React setup is the better call."
---

When a client asks me to build a new web app, one of the first decisions is which framework to reach for. Next.js has become the default recommendation for a lot of developers, but it isn't automatically the right tool for every project.

## When Next.js earns its keep

Next.js shines when a project needs server-side rendering or static generation for SEO, file-based routing across many pages, or built-in API routes so the backend and frontend can live in one codebase. A marketing site, a blog, or a content-heavy business site benefits enormously from this — pages load fast, and search engines can actually read the content properly.

## When plain React is enough

For an internal dashboard, an authenticated single-page app, or a tool that lives behind a login wall, SEO doesn't matter and server rendering adds complexity without a real payoff. A Vite-powered React app is lighter, has a faster dev loop, and is easier to reason about for that kind of project.

## How I decide

I ask three questions early: Does this need to rank on Google? Does the content change per-request in a way that benefits from server rendering? Does the client want a single deployable unit instead of separate frontend/backend services? If the answer to any of those is yes, Next.js is usually worth it. If not, I'd rather keep the stack simple.

The right framework is the one that solves the actual problem in front of you — not the one that's trending this month.
