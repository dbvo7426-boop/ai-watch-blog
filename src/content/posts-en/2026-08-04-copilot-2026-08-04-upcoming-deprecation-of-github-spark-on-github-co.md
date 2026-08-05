---
title: "Upcoming Deprecation of GitHub Spark on github.com"
description: "Starting August 4, 2026, GitHub Spark no longer accepts new users or new app creation. Existing users can export their apps until August 31, 2026, after which the service winds down."
pubDate: 2026-08-04
category: copilot
type: news
tags: [Copilot, GitHub, GitHub Spark]
source: https://github.blog/changelog/2026-08-04-upcoming-deprecation-of-github-spark-on-github-com
draft: false
importance: medium
---

GitHub has begun winding down GitHub Spark, the rapid app-prototyping tool built into github.com. Starting today, August 4, 2026, Spark no longer accepts new users or allows the creation of new apps, and existing users have until August 31, 2026 to export their work before access ends.

## Details

- **What GitHub Spark was**: A platform that let people move quickly "from an idea to a working application" by prototyping apps directly on github.com
- **What changes today**: As of August 4, 2026, Spark stops accepting new users and no longer allows creating new apps — it moves from active development into a wind-down phase
- **Existing users**: Current Spark users retain access until August 31, 2026 to export their applications; after that date, access ends
- **Existing deployed apps**: Apps that are already deployed will keep running after Spark itself is retired
- **A related dependency already gone**: Any Spark app that calls GitHub Models' `llm()` function needs migration regardless of this timeline, since that inference function was retired separately on July 30, 2026
- **Recommended alternatives**: GitHub points developers toward GitHub Copilot in VS Code, Copilot CLI, and the GitHub Copilot app as the ongoing path for AI-assisted app development

## How to try it

- If you have a Spark account, export your app code before August 31, 2026 using the "Create repository" option
- Replace any `llm()` calls in your Spark apps with an alternative inference provider and supply your own API key
- Move new prototyping work to GitHub Copilot in VS Code, Copilot CLI, or the GitHub Copilot app instead of Spark
- Deployed Spark apps that don't rely on `llm()` should keep working without immediate action, but plan your export regardless before the deadline
