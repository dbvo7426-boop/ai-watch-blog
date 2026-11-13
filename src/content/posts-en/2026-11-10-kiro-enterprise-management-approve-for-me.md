---
title: "Kiro previews Enterprise Management with one policy for IDE, CLI, Web and Crew LTS"
description: "Administrators write a single policy in the AWS console that applies across Kiro. The same day, IDE 1.4.154 added an Approve for me permission mode and Grok 4.7 became available experimentally."
pubDate: 2026-11-10
category: kiro
type: news
tags: [Kiro, Enterprise, Policy, Crew LTS]
source: https://kiro.dev/changelog/general/enterprise-management-preview/
draft: false
importance: medium
---

Kiro published a preview of Enterprise Management on November 10, 2026.

## Enterprise Management (preview)

- **Availability:** For newly created profiles in US East (N. Virginia), `us-east-1`. Existing profiles and European profiles come later.
- **One policy:** Administrators write one policy in the AWS console, and it applies to the Kiro IDE, CLI, Web and Crew LTS. Clients must be IDE 1.4.154 or later and CLI 3.1.0 or later.
- **Rules:** Rules can allow, deny or ask before Kiro uses a model, runs a shell command, reads or writes a file, searches the web, or calls an MCP tool. Policy settings also cover the default model, prompt logging and usage reports, and administrators can distribute steering files, Skills and Powers.
- **Scope and identity:** Rules apply to a whole profile, one group or one user, with IAM Identity Center, Okta or Microsoft Entra ID as the identity source.
- **Defaults:** Models, API keys, and Crew messaging and network access are denied until a rule allows them.

## Kiro Crew LTS 0.1.0

An edition of Crew for organizations using Enterprise Management. It applies the shared policy plus Crew-specific controls, installs beside the regular Crew app, updates only from its own `lts` channel, and requires SSO sign-in through Kiro CLI.

## Other changes the same day

- **IDE 1.4.154:** Adds an Approve for me permission mode alongside Supervised and Accept file changes. Kiro approves routine actions, blocks risky ones and asks when unsure. Your deny, ask and allow rules are checked first.
- **Grok 4.7:** Experimental support for Pro, Pro+, Pro Max and Power customers, with a 500K-token context window. Requests up to 200K tokens use a 2.7x credit multiplier, and larger requests use 5.4x.
- **CLI 3.2.0:** A full-screen viewer for wide Mermaid diagrams, and MCP sign-in for servers that support Client ID Metadata Documents.
- **Credit pooling:** Now works with Okta and Microsoft Entra ID as well as IAM Identity Center.
