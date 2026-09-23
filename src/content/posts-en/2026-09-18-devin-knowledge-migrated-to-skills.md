---
title: "Devin Retires Standalone 'Knowledge' Notes, Folds Them Into Skills"
description: "Cognition's September 18 release note migrates Devin's legacy Knowledge notes into the newer Skills system automatically, preserving content and folder structure while making the old Knowledge page read-only."
pubDate: 2026-09-18
category: devin
type: news
tags: [Devin, Cognition, Skills, Knowledge, ProductUpdate]
source: https://docs.devin.ai/release-notes/overview
draft: false
importance: low
---

Cognition began migrating Devin's Knowledge notes feature into its newer Skills system on September 18, 2026, consolidating two overlapping ways of teaching Devin about a codebase into one.

## Details

- **Automatic conversion**: existing Knowledge notes are converted automatically into skills inside a dedicated "knowledge" plugin, created separately for each scope — organization, enterprise, or personal
- **Content preserved**: the migration keeps note content and folder structure unchanged, and Devin continues to use the converted notes in sessions the same way it used the original notes
- **Legacy page goes read-only**: once an organization is migrated, its old Knowledge page becomes read-only and points users to Customize → Skills to view and manage the migrated content going forward
- **No action required**: Cognition is rolling the migration out gradually across accounts, with nothing for admins or users to manually trigger

## What happened next

The change is a consolidation rather than a new capability: Knowledge and Skills had grown into two separate mechanisms for giving Devin persistent context, and folding the older one into the newer one gives admins a single place — Customize → Skills — to manage what Devin knows about a repository or organization. It lands alongside a much larger September 21 release covering SWE-2's research preview and Bitbucket Data Center support, continuing Cognition's pattern of near-daily incremental updates to Devin's release notes.
