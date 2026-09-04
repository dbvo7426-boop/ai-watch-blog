---
title: "Devin Adds a Dead-Code Cleanup Scan, Sidebar Grouping, and Richer Automation Triggers"
description: "Cognition shipped a September 2 update to Devin adding a new cleanup scan type for dead code, a /scan composer command, sidebar grouping by PR status or repository, scheduled scan automations, and richer trigger details for GitLab, Jira, and incident.io."
pubDate: 2026-09-02
category: devin
type: news
tags: [Devin, Cognition, CodeReview, Automation]
source: https://docs.devin.ai/release-notes
draft: false
importance: medium
---

Cognition pushed a batch of workflow and code-quality updates to Devin on September 2, 2026, centered on a new "cleanup" scan type for finding dead code and several usability improvements to sessions and automations.

## Details

- **New cleanup scan type**: a scan mode dedicated to identifying dead code and other cleanup opportunities across a repository, joining Devin's existing code-scanning capabilities
- **`/scan` composer command**: users can kick off a code scan directly from the composer instead of navigating to a separate scans interface
- **Sidebar grouping and filters**: sessions in the sidebar can now be grouped by pull request status or by repository, with a filter option that includes Devin mode
- **Scans in automations**: code scan agents can now run as automations, supporting scheduled recurring scans or automatic re-scans triggered by new commits
- **Findings tab redesign**: the scan findings interface was redesigned for faster, more streamlined triage
- **Richer trigger event details**: automation runs now surface more detailed event information for GitLab, Jira, incident.io, and GitHub triggers
- **Clearer Slack delivery warnings**: Slack users outside a session's organization now get a warning when their reply can't reach Devin

## What happened next

The update leans further into Devin as an ongoing code-maintenance agent rather than a one-off task runner — scheduled cleanup scans and richer automation triggers both point toward Devin running unattended against a codebase over time, with the redesigned findings tab and sidebar grouping aimed at making the growing volume of scan output and sessions easier to triage. Full details are tracked in Cognition's release notes at docs.devin.ai/release-notes.
