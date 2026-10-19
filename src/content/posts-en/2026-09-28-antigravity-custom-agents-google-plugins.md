---
title: "Google Antigravity Ships Custom Agents Inside Official Google Plugins for Flutter, Firebase, and Google Play"
description: "Official Google plugins for Antigravity now include custom agents: a Flutter accessibility auditor, a Firebase security rules agent, and a read-only Google Play pre-submission release auditor."
pubDate: 2026-09-28
category: antigravity
type: news
tags: [Google, Antigravity, Custom Agents, Plugins, Flutter, Firebase, Android]
source: https://antigravity.google/blog/custom-agents-in-google-plugins
draft: false
importance: medium
---

Google has started packaging custom agents into the official Google plugins for Antigravity, distributed through the "Build with Google" plugin integration. Antigravity introduced custom agents on August 12. They are specialized agents with their own instructions, a dedicated context window, and their own tooling. Google's product teams, which already used custom agents internally, are now shipping them to developers. The first three cover Flutter, Firebase, and Google Play.

## Details

- **Flutter Accessibility agent** (Flutter and Dart plugin):
  - Built by the Flutter team together with Antigravity to audit accessibility from inside the workspace
  - Finds missing semantic labels, touch targets smaller than the recommended 48x48 dp, and color contrast violations
  - Writes a report and applies idiomatic Flutter fixes, such as wrapping widgets in `Semantics` or enlarging touch areas
- **Firebase Security Rules agent** (Firebase plugin):
  - Helps write, validate, and harden Firestore security rules
  - Turns an app's data schema and requirements into a rule set, and flags reads and writes that are too permissive before they reach production
  - Turned on from settings in the official Firebase plugin
- **Google Play pre-submission release auditor** (Android):
  - A read-only check that verifies release requirements before a release branch is cut: target SDK version, foreground service type declarations, exported intent-filter security, and R8 keep rules
  - Run from the terminal with `agy --agent play-release-audit`. The definition lives at `.agents/agents/play-release-audit.md`
  - The example definition uses `gemini-3.8-flash`, permission mode `plan` (read-only), the `view_file` and `run_command` tools, and the skills `play-policy-insights`, `r8-analyzer`, and `android-intent-security`
  - Runs in four phases (policy and permissions, intent and export security, R8/DEX optimization health, then a final report) and returns APPROVED, CONDITIONAL, or BLOCKED with a severity and remediation steps for each issue
- **Not disclosed**: pricing, a general availability date, or adoption numbers.

## What happened next

These plugins show what custom agents are meant to become: narrow, reusable specialists that a platform owner maintains, rather than one general-purpose coding agent. Because Google's own product teams build them, Antigravity gets a built-in advantage on Google's ecosystem (Flutter, Firebase, Android) that competitors like Cursor or Claude Code can only match through third-party plugins. Google invited developers to share their own custom agents, which points toward a broader plugin marketplace.
