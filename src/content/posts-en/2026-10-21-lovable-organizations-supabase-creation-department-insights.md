---
title: "Lovable Adds Workspace Organizations, In-Chat Supabase Project Creation, and Department Insights"
description: "Lovable's October 20-21 changelog lets Enterprise companies group workspaces into an organization, creates Supabase projects from chat, adds LlamaParse and n8n connectors, and shows adoption by department for SSO workspaces without SCIM."
pubDate: 2026-10-21
category: lovable
type: news
tags: [Lovable, Enterprise, SSO, Supabase, Connectors]
source: https://docs.lovable.dev/changelog
draft: false
importance: medium
---

Lovable's changelog entries for October 20 and 21 focus on enterprise administration and backend setup. Enterprise customers can now group several workspaces into one organization, and Lovable can create a Supabase project for apps that have no backend.

## Details

- **Organizations (Enterprise)**: companies with several workspaces can manage them together. SSO is set up once for all of them, and with SCIM the identity provider adds and removes members automatically. Each workspace keeps its own projects, members, groups, and billing. Lovable sets this up on request through the account team.
- **Adoption by department without SCIM**: Business and Enterprise admins and owners can see adoption by department in Insights when the workspace uses SSO without SCIM. The `department` attribute must be mapped in the SAML or OIDC app. Lovable reads it at each sign-in, so the breakdown fills in as members return.
- **Lovable creates your Supabase project**: for an app with no backend, Lovable can create a Supabase project, with the user choosing the organization and region, and connect it to the app. It works where the built-in backend is disabled. The region cannot be changed later, and Supabase bills the project to the user's own organization.
- **New app and chat connectors**: LlamaParse Platform and n8n.

## What happened next

These changes follow a month of enterprise controls from Lovable, including audit logs, SSO, and publishing policies. Organizations address multi-workspace management, while the Supabase option helps teams whose workspace policy disables the built-in backend.
