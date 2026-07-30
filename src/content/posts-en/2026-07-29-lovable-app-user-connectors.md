---
title: Lovable Launches App User Connectors, Letting Each App User Connect Their Own External Tools
description: Lovable has announced App User Connectors, a new feature that lets each user of a Lovable app connect their own Google, Slack, Salesforce, and other external accounts under their own existing permissions, with credentials brokered by a gateway that never touches the app or browser.
pubDate: 2026-07-29
category: lovable
type: news
tags: [Lovable, integrations, security]
source: https://lovable.dev/blog/app-user-connectors
draft: false
importance: medium
---

Lovable has announced App User Connectors, a new feature that lets each individual user of a Lovable app connect their own external tools. Users of apps shared with a team or customers can now link accounts like Google, Slack, or Salesforce under their own existing permissions, removing the need for developers to build a centralized authentication system themselves.

## Details

- **Problem solved**: Previously, sharing a Lovable app with multiple people meant access to external services had to be managed centrally by the app. App User Connectors lets each user connect external tools under their own existing permissions instead
- **How it works**: A "connector gateway" temporarily holds credentials only for the duration of a request, so credentials never reach the app itself or the browser. Each user authenticates directly through the connected tool's own OAuth-style login, and existing permission structures from the connected platform are respected rather than Lovable creating a new permission system
- **Supported tools**: Examples cited include Google Workspace, Microsoft, Slack, Salesforce, HubSpot, Snowflake, Linear, Miro, and Granola
- **Example use cases**: Sales teams building CRM dashboards with call-recording integration, recruiters building ATS-based interview prep tools, and support teams building permission-aware custom tools
- **Live examples**: Published apps already using the feature include Lumoo (fashion), Backchannel (recruiting), Fire Fairness (insurance), Plinq (background checks), and NHS healthcare apps

## How to try it

- Developers register their app with the target platform, obtain credentials, and add them to their Lovable workspace — then build normally
- Lovable handles the sign-in flow, tokens, and refresh cycle automatically
- See Lovable's official blog post at lovable.dev/blog/app-user-connectors for full details
