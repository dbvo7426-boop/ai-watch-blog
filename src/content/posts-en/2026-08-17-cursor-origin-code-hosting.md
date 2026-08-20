---
title: "Cursor Launches \"Origin,\" a Built-In Code Hosting Platform to Rival GitHub"
description: "Cursor introduced Origin, a git hosting platform built directly into the Cursor editor with repos, pull requests, and CI integrations, positioning it as a GitHub alternative built for AI coding agents rather than a full migration away from GitHub."
pubDate: 2026-08-17
category: cursor
type: news
tags: [Cursor, Anysphere, Origin, GitHub, code hosting, developer tools]
source: https://cursor.com/changelog/origin-code-hosting
draft: false
importance: high
---

Cursor has launched "Origin," a git code hosting platform built directly into the Cursor editor, giving developers repositories, pull requests, and CI integrations without leaving the app. It is Cursor's first major product launch since SpaceX closed its $60 billion acquisition of the company, and it positions Cursor as a direct competitor to GitHub rather than just a client that sits on top of it.

## Details

- **Origin Repos**: A new Codebase tab lets users create and host repositories directly on Cursor's own infrastructure, with CLI-based installation and push support
- **GitHub interoperability**: Cursor is not asking teams to abandon GitHub — existing GitHub repos can be connected and synced alongside Cursor-hosted repos, with real-time bidirectional updates, and GitHub remains the "source of truth" for teams that want it that way
- **Pull requests**: Full PR management is built in, including timelines, diffs, comments, and merging, kept in sync with GitHub
- **Agent-native workflow**: Because code, PRs, and agents now live in the same place, an agent can read a review comment and revise a pull request without switching context — Cursor's own framing is "your code, PRs, and agents are now in the same place"
- **App integrations at launch**: Vercel (automatic preview deployments for every PR, production deploys on merge), Depot, and Buildkite (both running CI, including existing GitHub Actions workflows without modification)
- **Admin controls**: A settings dashboard covers access management, sync status, and connected apps; enterprise orgs can opt out
- **Availability**: Rolling out in early beta starting August 17, 2026, to all paid plan users

The launch also landed in the middle of a major GitHub outage, which briefly amplified attention on Cursor's timing, though Cursor said the release had been planned independently.

## What happened next

- Origin is live now in beta for Cursor's paid subscribers; users can start by naming a codebase and creating their first Cursor-hosted repository
- Cursor has framed Origin as a low-risk, additive layer rather than a forced migration, so teams can adopt it gradually while keeping GitHub as their system of record
- Further detail is available on Cursor's official changelog at cursor.com/changelog/origin-code-hosting
