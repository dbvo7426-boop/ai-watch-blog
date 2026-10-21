---
title: "GitHub adds Copilot model policy REST API for enterprises, orgs and teams"
description: "GET and PATCH endpoints are now generally available to read and update Copilot model policies at enterprise, enterprise team, agent app and organization level."
pubDate: 2026-10-19
category: copilot
type: news
tags: [GitHub Copilot, API, Enterprise, Administration]
source: https://github.blog/changelog/2026-10-19-copilot-model-policy-api-for-enterprise-orgs-and-teams
draft: false
importance: low
---

GitHub announced that administrators can now use the REST API to retrieve and update Copilot model policies for enterprises, enterprise teams, agent apps and organizations.

## Details

- **Endpoints:** GET and PATCH are generally available at `/enterprises/{enterprise}/copilot/model-policies`, `/enterprises/{enterprise}/teams/{team_slug}/copilot/model-policies`, `/enterprises/{enterprise}/copilot/apps/model-policies` and `/orgs/{org}/copilot/model-policies`.
- **Delegation modes:** Enterprise policies can hand off model control to individual organizations (organization mode) or to teams and apps (enterprise teams mode).
- **Docs:** Covered under the enterprise-admin AI controls section of the REST API reference.

## What happened next

Programmatic control lets large enterprises automate model availability as models are added and retired, for example alongside the October 19 deprecations. GitHub did not disclose rate limits or permission details in the changelog.
