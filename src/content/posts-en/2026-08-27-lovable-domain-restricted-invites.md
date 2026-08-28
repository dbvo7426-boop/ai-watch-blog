---
title: "Lovable Lets Business and Enterprise Admins Lock Publish Invites to Verified Company Domains"
description: "A new Lovable admin setting restricts external publish invites to email addresses on a workspace's verified domains, closing off a way outside collaborators could previously be added to published apps."
pubDate: 2026-08-27
category: lovable
type: news
tags: [Lovable, enterprise, security, admin controls]
source: https://docs.lovable.dev/changelog
draft: false
importance: low
---

Lovable rolled out a new workspace-level security control on August 27, 2026: Business and Enterprise admins can now restrict external publish invites so that only email addresses on the company's verified domains can be invited to a published app. The setting lives under Security → Privacy & security in the workspace dashboard.

## Details

- **Where it lives**: the new toggle sits under Security → Privacy & security, with a "Verified-domain emails only" option for external publish invites
- **Who it's for**: Business and Enterprise workspace admins who want to prevent apps from being shared or co-managed by addresses outside the company's approved email domains
- **Same-day companion update**: Lovable also shipped command palette (Cmd+K/Ctrl+K) performance improvements the same day, including faster load times, retained typed characters during startup, and prioritized recent projects
- **Context**: the release continues a run of admin and governance features Lovable has added for larger customers over the summer, including audit-log app attribution, commit attribution by team member, and read-only visibility into workspace build secrets

## What happened next

The domain restriction gives IT and security teams a lever to stop published apps from being opened up to outside collaborators by accident, closing a gap that larger customers had flagged as the platform scaled up enterprise adoption. It is a small addition on its own, but fits Lovable's broader push this year to backfill admin, audit, and access-control tooling as it courts bigger organizations following its $400 million Series C round.
