---
title: "Lovable adds workspace Events and Hooks for Business and Enterprise and a Scrive connector"
description: "Lovable's October 27 changelog adds Events & Hooks so workspace admins can notify or gate actions via their own HTTPS endpoints, plus a Scrive connector for e-signatures and eID."
pubDate: 2026-10-27
category: lovable
type: news
tags: [Lovable, Events, Hooks, Scrive, Enterprise]
source: https://docs.lovable.dev/changelog
draft: false
importance: low
---

Lovable's changelog entry for October 27, 2026 adds Events & Hooks for workspaces and a Scrive connector, alongside a sidebar redesign.

## Details

- **Events & Hooks:** workspace admins and owners on Business and Enterprise plans can extend their workspace with their own services. Events notify an HTTPS endpoint when a project is created, published, transferred to another workspace, or deleted. Hooks let the endpoint allow or block an action first, for example checking a chat message for sensitive data before Lovable processes it. It lives in workspace settings.
- **Scrive connector:** apps can connect to Scrive eSign to send documents for signature and track status, and to Scrive eID Hub to verify users with national eIDs such as BankID and MitID. It is added from Connectors or by asking Lovable in a project.
- **Sidebar:** projects and chats are organized into Pinned, Projects and Recent chats; Pinned replaces Starred.
- **Naming:** Knowledge is renamed Instructions in workspace and project settings, with no behavior change.

## What happened next

Hooks that can block actions give security teams a way to enforce data policies before content reaches Lovable, complementing the audit log export and SSO items from earlier in October. Request schemas and limits are not covered in the changelog entry.
