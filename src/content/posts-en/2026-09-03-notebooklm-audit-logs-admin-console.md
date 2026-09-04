---
title: "Gemini Notebook Gets Comprehensive Audit Logs in the Workspace Admin Console"
description: "Google added detailed audit logging for Gemini Notebook (formerly NotebookLM) to the Workspace Admin console, letting administrators track notebook visibility, user identity, and access details for compliance and oversight."
pubDate: 2026-09-03
category: notebooklm
type: news
tags: [NotebookLM, Gemini Notebook, Google Workspace, Admin console, Compliance]
source: https://workspaceupdates.googleblog.com/2026/08/introducing-comprehensive-audit-logs-for-Gemini-Notebook-in-the-Workspace-Admin-console.html
draft: false
importance: low
---

Google began rolling out comprehensive audit logs for Gemini Notebook (the product formerly known as NotebookLM) in the Google Workspace Admin console on September 3, 2026, giving IT administrators much finer visibility into how the tool is used across their organizations.

## Details

- **What's logged**: a wide range of user actions across multiple categories, including notebook visibility, user identity, IP address, and resource context
- **Where to find it**: available through Workspace's existing security investigation tool and audit and investigation tool in the Admin console
- **On by default**: audit logs are enabled automatically for eligible customers, though exporting logs to BigQuery must be turned on separately by an administrator
- **Data storage caveat**: while audit log storage follows standard Workspace regional routing policies, Gemini Notebook's own user data — notebooks, sources, and chat histories — is stored globally and does not currently support data regionalization
- **Rollout**: a gradual rollout that started September 3, 2026, taking up to 15 days to reach full visibility, across both Rapid Release and Scheduled Release domains
- **Eligibility**: available to all Google Workspace customers who already have access to the security investigation and audit and investigation tools

## What happened next

The feature extends the same kind of enterprise oversight Google already offers for other Gemini products to Gemini Notebook specifically, addressing a gap for IT and compliance teams as the research tool — renamed from NotebookLM in July 2026 — continues to be integrated more deeply into Workspace. Full documentation on log events, the BigQuery schema, and export setup is available through the Workspace Admin Help Center.
