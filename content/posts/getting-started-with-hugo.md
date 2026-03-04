---
title: "Getting Started with Hugo"
date: 2026-03-01
draft: false
description: "A quick overview of why Hugo is a great choice for building fast, simple websites."
---

[Hugo](https://gohugo.io) is one of the fastest static site generators available. Here's why I chose it for this site.

## Speed

Hugo builds sites in milliseconds, even for sites with thousands of pages. There's no runtime to spin up — it just outputs static HTML files.

## Simplicity

No database. No server-side code. Just Markdown files, templates, and a single binary.

## Flexibility

Hugo's templating system is powerful enough for complex sites, yet simple enough to get started quickly. The theme system makes it easy to customize the look and feel.

## Getting Started

Install Hugo, run `hugo new site my-site`, pick or build a theme, and start writing. That's really all there is to it.

```bash
hugo new site my-site
cd my-site
hugo server -D
```

Visit `http://localhost:1313` and your site is live locally. Simple!
