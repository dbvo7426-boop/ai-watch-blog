---
title: "GitHub Copilot adds server-to-server authentication for GitHub Apps (public preview)"
description: "GitHub Apps installed on an organization can now call the Copilot SDK with installation tokens instead of a signed-in user's credentials. Usage is billed to the organization."
pubDate: 2026-10-27
category: copilot
type: news
tags: [Copilot, GitHub Apps, Copilot SDK, Authentication]
source: https://github.blog/changelog/2026-10-27-github-copilot-supports-server-to-server-authentication
draft: false
importance: medium
---

GitHub announced on October 27, 2026 that GitHub Copilot now supports server-to-server authentication for GitHub Apps installed on organizations. The feature is in public preview. Agents and services built with the GitHub Copilot SDK can make requests on behalf of an organization without relying on an individual user's credentials.

## Details

- **Purpose:** Authentication and usage are tied to the workload rather than to individual people.
- **Setup:** A developer grants a GitHub App the read-only "Copilot Requests" organization permission, installs the app on the organization, and passes a short-lived installation access token to the SDK.
- **Billing and controls:** Usage is attributed and billed to the organization that owns the installation. The organization's model policies, budgets, and spending controls apply.
- **Admin oversight:** Organization owners can review which apps have access, find app-attributed usage in AI usage CSV reports through the `app_client_id` field, and revoke access by suspending or uninstalling the app.
- **Status:** Public preview; pricing changes beyond organization billing are undisclosed.

## What happened next

Until now, automated Copilot-powered agents generally had to borrow a person's login, which blurred accountability and tied usage to someone who might leave the team. App-level tokens move that identity to the workload and let admins apply the same budget and policy controls they already use. It also makes the Copilot SDK more practical for unattended bots and CI-style services. How the preview will graduate to general availability has not been disclosed.
