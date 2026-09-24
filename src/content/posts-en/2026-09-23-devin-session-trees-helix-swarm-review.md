---
title: "Devin's September 23 Update Adds Session Trees, Faster Permission Resumes, and Helix Swarm Reviews"
description: "Cognition's latest Devin release notes bundle session-tree visibility, quicker resumes after permission approvals, admin-configurable auto-review rules, and new review support for self-hosted Git servers, Helix Swarm, and Bitbucket Data Center."
pubDate: 2026-09-23
category: devin
type: news
tags: [Devin, Cognition, ReleaseNotes, CodeReview, ProductUpdate]
source: https://docs.devin.ai/release-notes
draft: false
importance: medium
---

Cognition shipped another dense round of Devin release notes on September 23, 2026, focused on session navigation, faster resumes after permission approvals, and wider code-review coverage for self-hosted and enterprise Git tooling.

## Details

- **Session tree from parent sessions**: sessions that spawn child sessions now show a session-tree icon; clicking it reveals the full set of child sessions launched from that parent
- **Renameable sessions**: team members with edit permissions can now rename any session they can edit, not just ones they started themselves
- **Faster permission resumes**: Devin resumes work immediately after a permission request is approved, cutting the wait users previously saw after granting access mid-session
- **Clearer model names in the picker**: the capability picker now spells out what each tier runs on — for example, "Ultra" reads as "Highest intelligence available with Fable 5.1 and GPT-6 Astra"
- **Performance fixes**: reduced UI stuttering in Safari and lower CPU/memory use during streaming responses
- **Admin-configurable auto-review**: organization admins can now configure automatic review settings and build more composable custom trigger rules for when Devin reviews a pull request automatically
- **Self-hosted Git and Helix Swarm support**: Devin Review now works with self-hosted Git servers running on non-default ports and adds review integration for Helix Swarm (Perforce)
- **Bitbucket Data Center improvements**: better comment handling and reviewer management for Bitbucket Data Center repositories
- **Code scan findings tabs**: individual findings from Devin's code scans now get their own tabs, alongside assorted Microsoft Teams, MCP, and plugin-management refinements

## What happened next

The update lands two days after Devin's September 21 release, which introduced the SWE-2 research preview and automated merge-conflict resolution, showing Cognition keeping up its rapid release-notes cadence through late September. The mix of session-management polish and expanded review coverage for self-hosted and Perforce-based Git infrastructure continues to push Devin toward broader enterprise source-control support alongside its day-to-day usability fixes.
