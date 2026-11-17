# Linux With Joanna

How does Linux really work? Let's find out together.

A personal Linux diary by Joanna Jablonski, built with [AstroPaper](https://github.com/satnaing/astro-paper).

[Read the blog](https://linuxwithjoanna.com/)

## Publishing in the browser

Create a Markdown file in `src/content/posts/` using GitHub's file editor. Include frontmatter like this, followed by your post:

```markdown
---
title: Your post title
description: A short description of the post.
pubDatetime: 2026-11-17T09:00:00-08:00
tags:
  - linux
draft: true
---

Your Markdown content goes here.
```

Set the publication date and timezone offset for your post. The site displays dates using `America/Vancouver`. Set `draft: false` when ready, then commit directly to `main`. The Deploy blog to GitHub Pages workflow checks and publishes changes automatically; check its result in the Actions tab. A failed deployment leaves the previous successful site online.

This repository is public: draft files and committed history are readable even when a post is hidden from the website. Do not commit credentials or other sensitive information.

Edit `src/content/pages/about.md` for the About page and `astro-paper.config.ts` for site details and profile links.

## Licensing

The AstroPaper theme and site code are licensed under the [MIT License](./LICENSE).

Joanna Jablonski's original written content, including blog posts and pages, is not covered by the MIT license. Copyright (c) 2026 Joanna Jablonski. All rights reserved.

Third-party material remains subject to its respective licenses.
