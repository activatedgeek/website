---
title: The Stack
description: Tools powering this website.
date: Jun 19 2020, 14:32 -0700
updated: Dec 28 2020, 21:34 +0530
area: meta
cat: sys
---

This page details the tools powering this website.

The pages are generated by [GatsbyJS](https://www.gatsbyjs.org) which abstracts
away the build process for me. All the page layouts are built in [React](https://reactjs.org) using
[Theme UI](https://theme-ui.com) _styled components_. I've modified parts of the style
system from [Tailwind](https://theme-ui.com/presets/tailwind).

All content is written in extended markdown via [MDX](https://mdxjs.com) and [Remark](https://remark.js.org).

Math is rendered via [KaTeX](https://github.com/KaTeX/KaTeX), and I've written
[some custom plugins](https://github.com/activatedgeek/www/tree/main/plugins)
for other tiny utilities. Images are lazy loaded via React hooks, which is also
implemented as a tiny plugin.

Search is powered by [FlexSearch](https://github.com/nextapps-de/flexsearch). The
search index contains text extracted by parsing the MDX AST. Eventually, I would
like this to be more refined with word stemming and other language processing
goodies. I use [Vega Lite](https://vega.github.io/vega-lite/) to embed charts, allowing me
to use the same specification across both Python and the web. Images are
hosted on [Imgur](https://imgur.com).

The website is deployed on [Netlify](https://www.netlify.com) and the domain
registrar is [GoDaddy](https://godaddy.com). Simple and private analytics are
powered by [GoatCounter](https://www.goatcounter.com). Uptime is monitored via
[UptimeRobot](https://uptimerobot.com). [short.io](https://short.io) is used
occasionally for URL aliases. The nameservers are hosted on [Cloudflare](https://www.cloudflare.com).

The complete source is available on [Github](https://github.com/activatedgeek/www).
