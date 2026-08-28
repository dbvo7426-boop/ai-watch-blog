---
title: "Lovable Adds GitLab API Access and Firebase Push Notifications to Its Connector Lineup"
description: "Lovable shipped two new integrations on the same day: a GitLab API connector for managing repositories, issues, and merge requests, and Firebase Cloud Messaging support for sending push and browser notifications from Lovable-built apps."
pubDate: 2026-08-28
category: lovable
type: news
tags: [Lovable, GitLab, Firebase, integrations, connectors]
source: https://docs.lovable.dev/changelog
draft: false
importance: medium
---

Lovable's changelog logged two new connector integrations on August 28, 2026: a GitLab API connector that lets apps manage repositories, commits, issues, and merge requests, and Firebase Cloud Messaging (FCM) support for sending push notifications. The pairing extends Lovable's app-building platform further into DevOps and end-user engagement territory that were previously out of reach without custom code.

## Details

- **GitLab API connector**: apps built on Lovable can now manage projects, branches, commits, repository files, issues, and merge requests across GitLab.com, GitLab Self-Managed, and GitLab Dedicated instances
- **Per-user GitLab access**: the connector supports per-user authentication, meaning individual app users can connect their own GitLab accounts rather than sharing a single team credential
- **Firebase Cloud Messaging**: Lovable-built apps can now send push notifications to mobile and desktop devices, broadcast to topics, and deliver browser push notifications
- **Use cases cited**: Lovable points to order tracking, appointment reminders, and operational alerts as typical FCM use cases
- **Same-day preview fix**: Lovable also shipped a preview-stability improvement on August 28 so that in-progress edits no longer force a full preview reload, keeping the current screen and element selection in place between changes
- Both connectors join Lovable's growing library of one-click integrations, following earlier additions like Supabase, ElevenLabs-style third-party API connectors, and per-user app connectors introduced in July

## What happened next

The GitLab and Firebase additions continue a pattern Lovable has followed all year: rather than building every capability natively, it keeps widening the set of third-party services an app can plug into with minimal setup. Combined with the per-user connector model rolled out in late July, developers building on Lovable can now hand end users direct control over their own GitLab or notification permissions rather than routing everything through a shared account.
