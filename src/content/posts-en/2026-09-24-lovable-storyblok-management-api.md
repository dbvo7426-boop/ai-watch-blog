---
title: "Lovable's Storyblok Connector Gains Full Content Management API"
description: "Lovable's September 24 changelog adds a Storyblok Management API option so apps can create, update, and publish stories directly, plus new credit-limit-source columns in the People export for workspace admins."
pubDate: 2026-09-24
category: lovable
type: news
tags: [Lovable, Storyblok, Connectors, ProductUpdate]
source: https://docs.lovable.dev/changelog
draft: false
importance: low
---

Lovable's September 24, 2026 changelog entry upgrades the Storyblok connector from read-only access to full content management, alongside a smaller admin-facing improvement to the workspace People export.

## Details

- **Storyblok Management API**: the Storyblok connector now offers a Management API option; after signing in with a Storyblok account, an app can create, update, and publish stories, and manage assets and components, within the spaces a user approves
- **Chat-driven edits**: users can also ask Lovable directly in the project chat to make those Storyblok content changes on their behalf
- **CDN API retained**: the existing read-only CDN API option remains available for pulling published or preview content
- **People export credit-limit columns**: workspace admins and owners exporting the member list from Settings → People now see two new CSV columns, Effective Credit Limit and Credit Limit Source, showing which limit applies to each member and whether it comes from a personal setting, the workspace default, or is unset
- **Existing Credit Limit column unchanged**: that column continues to show personal limits only, so the new columns fill in the gap for members without a personal override

## What happened next

The update follows a steady run of connector expansions through September, including Discord and Google Business Profile support added the next day. Giving the Storyblok connector write access moves it in line with Lovable's other CMS integrations, letting apps manage content directly rather than only reading it, while the People export change gives workspace admins clearer visibility into how credit limits are actually being applied across their teams.
