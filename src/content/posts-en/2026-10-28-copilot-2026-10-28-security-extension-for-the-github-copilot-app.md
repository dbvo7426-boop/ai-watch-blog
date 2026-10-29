---
title: "Security extension for the GitHub Copilot app enters public preview"
description: "The GitHub security extension lets you browse code scanning alerts, ask Copilot to explain or fix them, and run /security-review without leaving the Copilot app."
pubDate: 2026-10-28
category: copilot
type: news
tags: [GitHub Copilot app, Code scanning, Security, GitHub Universe]
source: https://github.blog/changelog/2026-10-28-security-extension-for-the-github-copilot-app
draft: false
importance: medium
---

A new GitHub security extension for the GitHub Copilot app, in public preview, lets you work through a repository's code scanning alerts and have Copilot explain or help fix them in one place.

## Details

- **Alerts:** Browse open alerts ordered by severity with search and filters; open details and affected code, or the full page on github.com; see linked pull requests; dismiss alerts (sent for approval if delegated dismissal is used).
- **Explain and Fix:** Select alerts and ask Copilot. Fixes are made only in your local working copy; nothing is committed or pushed.
- **Before a pull request:** Run `/security-review` on current changes and see findings next to existing alerts; the extension flags when code changed since the last review.
- **Install:** `copilot plugin install github-security@awesome-copilot`, or in the app click Customize, search for `github-security`, then Install. It is enabled automatically; open the Security canvas from a session.
- **Cost:** Explain, Fix, and `/security-review` use your selected model and consume AI credits; browsing and dismissing do not.
- **Availability:** github.com and GitHub Enterprise Cloud with data residency; GitHub Enterprise Server is not supported. Any Copilot plan can install it and run `/security-review`; Business and Enterprise need the Copilot app policy enabled by an admin. Viewing and fixing existing alerts needs code scanning enabled and permission; private repositories need GitHub Code Security.

## What happened next

The extension shortens the loop from alert to local fix, and keeping fixes uncommitted preserves human review. It is delivered as a plugin, which fits the managed-settings controls admins already have over plugins. Credit cost per fix is undisclosed.
