---
title: "Cursor Opens Origin App Marketplace to Public Submissions, Adds 20+ Integrations"
description: "Cursor's Origin platform now connects with more than 20 developer tools for deployments, CI, code review, security, and monitoring — including Cloudflare, Linear, Sentry, and Socket Security — and opens the marketplace to public app submissions from any team."
pubDate: 2026-10-13
category: cursor
type: news
tags: [Origin, Marketplace, Integrations, DeveloperTools, ProductUpdate]
source: https://cursor.com/changelog
draft: false
importance: medium
---

Cursor's October 13 changelog expands its Origin platform with a public app marketplace, connecting Origin to more than 20 developer tools across deployments, CI, code review, security, and monitoring, and opening submissions to any team building developer tools.

## Details

- **20+ integrations live today**, organized by category:
  - Deployments: Cloudflare, Netlify, Render, Spacelift, Vercel
  - CI: Buildkite, CircleCI, CloudBees, Depot, EngFlow, Namespace, RWX
  - Code review: CodeRabbit, Greptile, Tenki
  - Security: Artemis Security, Semgrep, Socket Security, Upwind
  - Monitoring: Sentry
  - Project management: Linear
- **Public submissions open**: any team building developer tools can now submit an app to the marketplace, not just launch partners
- **Publishing flow**: developers create an app in their namespace (private while in development), build against the Origin API using an app JWT and installation access tokens to receive webhooks and write check runs, PR comments, and reviews, then make the app public and submit it with a slug, suggested tags, and a demo video showing install, uninstall, and core flows
- **Review process**: Cursor reviews each submission and lists approved apps in the marketplace
- **Tooling for builders**: a publishing guide, an Origin API reference, and an "Origin Apps" plugin that can answer questions from the live API docs and help plan porting an existing app to Origin

## What happened next

By opening Origin to public submissions, Cursor is positioning the platform as a general integration point for developer tooling rather than a closed set of launch partners — similar in spirit to app marketplaces built around other developer platforms. The initial partner roster already spans the core categories teams need for a software delivery pipeline (deploy, CI, review, security, monitoring, planning), and the self-service publishing flow against a documented API suggests Cursor expects the catalog to grow quickly as more developer-tool vendors build native Origin integrations.
