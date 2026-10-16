---
title: "Lovable Changelog: Audit Log Exports to SIEM Tools, Claude SSO Access, and GPT-6.1 Sol Support"
description: "Lovable's October 15, 2026 changelog adds scheduled audit log exports to Splunk and cloud storage, enterprise-managed SSO for using Lovable's MCP server inside Claude, GPT-6.1 Sol as an available model for app AI features, and smaller chat and file-management improvements."
pubDate: 2026-10-15
category: lovable
type: news
tags: [Changelog, Enterprise, SSO, Audit Logs, GPT-6.1 Sol, ProductUpdate]
source: https://docs.lovable.dev/changelog
draft: false
importance: medium
---

Lovable shipped a batch of enterprise and workflow features in its October 15, 2026 changelog, led by audit log exports to external security tools and enterprise SSO access to Lovable's MCP server from inside Claude.

## Details

- **Audit log exports to SIEM**: Enterprise workspace admins and owners can schedule exports of audit logs to Amazon S3, Google Cloud Storage, Azure Blob Storage, Splunk, or Azure Log Analytics, delivered hourly or every 3 hours; Lovable charges nothing for the exports, though the destination provider bills for storage and ingestion
- **Use Lovable from Claude via company SSO**: Business and Enterprise admins can enable enterprise-managed authentication so members can use the Lovable MCP server inside Claude with their Okta identity, keeping their existing Lovable permissions; this requires Claude Team or Enterprise
- **Sign in with Lovable by default on login pages**: login pages built for apps on Lovable Cloud now include Sign in with Lovable by default alongside email/password and Google; these sign-ins consume no credits, and builders can name different methods in their prompt to change them
- **GPT-6.1 Sol available for app AI features**: the model `openai/gpt-6.1-sol` can now be used for complex coding and professional work inside apps built on Lovable, accepting text and image input and returning text
- **Document previews in chat**: documents referenced in chat replies now show as a list with file-type icons, and a single previewable document (PDF or Markdown) appears as a larger preview card
- **Faster file selection and sorting**: the Files tab now supports multi-select via checkboxes for adding files to chat or a collection, downloading, or deleting; collections can be sorted by Updated, Name, or Size, and list view shows file-type icons

## What happened next

The changes lean toward enterprise operations rather than headline features: security teams get a standing pipeline for audit data into their existing SIEM stack, IT admins get a way to govern Lovable access through Claude without juggling separate credentials, and builders get one more foundation model option plus incremental chat and file UI polish. Taken together with the AI-models bundle and the Azure BYOC preview shipped the same day, October 15 was a dense release day for Lovable's enterprise and platform roadmap.
