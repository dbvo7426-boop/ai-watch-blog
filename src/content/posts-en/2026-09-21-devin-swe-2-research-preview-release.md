---
title: "Devin's September 21 Release Adds SWE-2 Research Preview, Auto Merge-Conflict Fixes, and Bitbucket Data Center Support"
description: "Cognition's biggest Devin release notes update in weeks bundles an SWE-2 research preview with selectable reasoning effort, automatic merge-conflict resolution on PRs, a redesigned PR tab with a new Checks tab, and Bitbucket Data Center support."
pubDate: 2026-09-21
category: devin
type: news
tags: [Devin, Cognition, SWE-2, Bitbucket, AzureDevOps, ProductUpdate]
source: https://docs.devin.ai/release-notes/overview
draft: false
importance: medium
---

Cognition shipped one of its densest Devin release notes updates in weeks on September 21, 2026, spanning a new SWE-2 research preview, automated PR maintenance, and several new integrations.

## Details

- **SWE-2 Research Preview**: users can now choose SWE-2 directly in the agent selector or mid-session toggle, and pick a reasoning effort level — Medium, High, or Max — for the session; it's also reachable in Slack via the `!swe2` command, with enterprise and organization admins controlling enablement in settings
- **Folder attachments**: users can attach a whole folder to a Devin message by dropping it on the composer or choosing "Upload folder," which Devin compresses in-browser and delivers as a single zip file
- **Automated merge-conflict resolution**: Devin now fixes merge conflicts on its own pull requests more often, addressing them within 12 hours of session activity (36 hours if the PR is already approved), including conflicts that recur
- **PR tab redesign**: a new file tree sidebar highlights the current file while scrolling, plus a Smart Diffs toggle for a flat file view, an "Open in editor" button, and repositionable file tree layout
- **New Checks tab**: PR tabs are now ordered Changes, Description, Discussion, Commits, Checks, and Bugs, with faster diff rendering and smoother scrolling on large PRs
- **Bitbucket Data Center support**: Devin Review now works with Bitbucket Data Center repositories, including automatic reviews on PR events, a merge bar showing merge/approval/build status, and webhook configuration in settings
- **Azure DevOps and MCP additions**: Azure DevOps gains label management and better org/project listing, while Microsoft 365 and Google Workspace MCPs join the marketplace with OAuth and custom scope configuration
- **Other changes**: plugin management tools for admins (create, update, manage plugins) with the size limit raised to 20 MiB, plus a reorganized automation menu and Spanish/Portuguese support in Devin Review

## What happened next

The SWE-2 research preview builds on the model Cognition launched on September 10, giving users a direct way to select it and its reasoning effort inside the normal session flow rather than only through Fusion's sidekick pairing. Combined with the merge-conflict automation and Bitbucket Data Center support, the update pushes Devin further into unattended PR maintenance and enterprise source-control coverage, continuing Cognition's cadence of frequent, feature-dense release notes through September.
