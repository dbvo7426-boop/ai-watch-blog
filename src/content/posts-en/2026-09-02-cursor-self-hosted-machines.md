---
title: "Cursor Lets Cloud Agents Run Entirely on Your Own Infrastructure with Self-Hosted Machines"
description: "Cursor launched self-hosted machines for Cloud Agents, keeping code, build outputs, and secrets inside a customer's own network while adding dynamic pool scheduling and computer use on Linux and Mac."
pubDate: 2026-09-02
category: cursor
type: news
tags: [Cursor, Anysphere, Cloud Agents, self-hosted, developer tools, computer use]
source: https://cursor.com/changelog/self-hosted-machines
draft: false
importance: medium
---

Cursor introduced self-hosted machines for Cloud Agents on September 2, 2026, letting organizations keep tool execution entirely inside their own network instead of Cursor-managed cloud infrastructure. Codebases, build outputs, and secrets stay on internal machines while the agent handles tool calls locally.

## Details

- **My Machines**: connects a single laptop or VM to a user's account for personal workflows, letting an individual point Cloud Agents at their own hardware
- **Team pools**: named worker queues that scale capacity up or down with demand, shared across a team rather than tied to one person's machine
- **Existing infrastructure support**: self-hosted workers can run on infrastructure organizations already use, including AWS Lambda, Coder, Cloudflare, Daytona, Modal, Namespace, Vercel, and E2B
- **Cost control**: idle machines in a pool can hibernate and restore within a reconnect window, avoiding the cost of keeping capacity warm between prompts
- **Computer use on Linux and Mac**: self-hosted workers now support computer use, letting agents click, type, capture screenshots, and control a browser or desktop, with optional desktop packages for fuller control

## What happened next

The feature is live now for Cursor customers with access to Cloud Agents, requiring no additional pricing tier beyond existing Cloud Agents plans. By letting tool execution stay on infrastructure a company already controls, Cursor is addressing a common enterprise objection to cloud-based coding agents — that code, build artifacts, and credentials must leave the corporate network. It follows Cursor's broader push through August to make Cloud Agents behave like a persistent, always-available system rather than a single request-response session.
