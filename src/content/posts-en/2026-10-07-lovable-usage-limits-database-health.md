---
title: "Lovable Adds Workspace Usage Limits, Database Load Warnings, and Drizzle Migration Tracking"
description: "Lovable's October 7 changelog lets workspace admins set credit usage limits and alerts, adds high-load warnings for Lovable Cloud databases, records cloud database schema changes as Drizzle migrations, and speeds up inline text edits."
pubDate: 2026-10-07
category: lovable
type: news
tags: [Lovable, UsageLimits, Database, Drizzle, ProductUpdate]
source: https://docs.lovable.dev/changelog
draft: false
importance: medium
---

Lovable's October 7, 2026 changelog focuses on workspace cost control and database reliability, adding configurable credit usage limits, proactive database load warnings, automatic migration tracking for Lovable Cloud databases, and a speed-up for inline text edits.

## Details

- **Workspace usage limits and alerts**: admins and owners on paid plans can now set credit usage thresholds for the workspace and choose what happens when they're hit — email alerts, in-app notifications, or blocking further usage; the feature also supports balance-drop alerts and lets members request limit increases
- **Database high-load warnings**: when a Lovable Cloud database runs low on resources, Lovable now surfaces a warning that the app is under high load — shown in the project chat, the publish dialog, and project settings — and suggests optimizations or a resize
- **Drizzle migration tracking**: structural changes Lovable makes to a Cloud database are now recorded as individual migration files under `drizzle/migrations/`, and Lovable automatically blocks backward-incompatible schema changes
- **Faster inline text edits**: simple text changes made with "Edit text inline" in the preview toolbar now apply in a few seconds instead of the previous wait
- **Gemini 3.7 Flash deprecation**: Google is retiring `google/gemini-3.7-flash` for Lovable's AI features, with support ending January 28, 2027

## What happened next

The release pairs cost-governance tools for teams managing shared workspace credits with operational guardrails for apps running on Lovable Cloud — surfacing database strain before it causes downtime and giving developers a standard migration trail for schema changes, rather than opaque automatic edits. Combined with the previous day's connector additions, it continues Lovable's push toward treating Cloud-backed apps as production systems that need monitoring and auditability, not just prototypes.
