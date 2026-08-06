---
title: Claude Enterprise Adds "Inference Hooks" — Real-Time Allow/Deny Checks Before Every Prompt Reaches the Model
description: Anthropic has launched Inference hooks in beta for Claude Enterprise, letting organizations route every governed prompt through their own AI security server for an allow-or-deny verdict before inference runs, across claude.ai, Cowork, and Claude Code.
pubDate: 2026-08-05
category: claude
type: news
tags: [Claude, Anthropic, Enterprise, Security, Compliance, DLP]
source: https://platform.claude.com/docs/en/manage-claude/inference-hooks
draft: false
importance: medium
---

Anthropic has introduced Inference hooks, a beta feature for Claude Enterprise organizations that lets security and compliance teams intercept every governed prompt before it reaches the model. Rather than auditing conversations after the fact, an organization's own "AI security server" now gets to issue a real-time allow or deny verdict on each request across claude.ai, Cowork, and Claude Code.

## Details

- **How it works**: When a user submits a prompt on a governed surface, Anthropic sends an HTTPS POST containing the conversation transcript to the organization's configured AI security server. The request is signed per the Standard Webhooks specification so the receiving server can verify it actually came from Anthropic
- **Verdict and timeout**: The security server must respond with a small JSON verdict — `{"action": "allow"}` or a deny with a user-facing reason — within a configurable timeout (5 seconds by default). A denied request never reaches the model, and the user sees a blocked-by-policy message combining the server's stated reason with an admin-configured standing message
- **What the server sees**: The security server receives transcript text, tool calls and their results, and text extracted from attachments — but never raw file or image bytes, system prompts, or Anthropic-internal context
- **Failure handling**: If the security server is unreachable, errors, or times out, the organization's own failure-handling setting decides whether the request is blocked or allowed to proceed uninspected
- **Gradual rollout tools**: Organizations can adopt this without an all-or-nothing switch — a shadow mode observes verdicts on live traffic without blocking anything, a rollout percentage inspects only a chosen fraction of requests, and role-based exclusions can exempt certain members entirely
- **Use cases Anthropic highlights**: inline data loss prevention (DLP) scanning, real-time transcript archival as a push-based alternative to polling the Compliance API, prompt telemetry, and custom policy engines (model allowlists, project restrictions, working-hours controls)
- **Current limitations**: only allow/deny verdicts are supported (no rewriting or redaction), image-only content like screenshots isn't inspected since raw bytes aren't sent, voice mode isn't covered, and the feature is unavailable on Amazon Bedrock, Google Cloud, or for Claude Platform (API-only) organizations
- **Access**: Configuring Inference hooks requires the `organization:manage` permission, held by default by Admin, Owner, and Primary owner roles
- **Related deprecation the same week**: In the same release-notes update, Anthropic also retired the Claude Opus 4.1 model (`claude-opus-4-1-20250805`) from the API, directing users to Claude Opus 5, with continued access available to researchers through the External Researcher Access Program

## What happened next

Inference hooks complements Anthropic's existing Compliance API: the Compliance API lets an organization pull activity, chats, and files after the fact, while Inference hooks blocks or allows requests inline, before the model ever sees them. Anthropic says a response-side hook event (acting after inference rather than only before it) is planned for a later release. Enterprise admins can find setup instructions in Anthropic's "Configure Inference hooks" and "Develop an Inference hooks integration" documentation pages.
