---
title: "Claude Messages API adds message threads in public beta to speed up long-running agents"
description: "Message threads let agents send only new messages on each Messages API request, cutting time to first token by about 35% in long Claude Code sessions."
pubDate: 2026-11-02
category: claude
type: news
tags: [Claude, API, Messages API, Agents, Latency]
source: https://claude.com/resources/articles/message-threads
draft: false
importance: medium
---

Anthropic released message threads in public beta for the Messages API. Agents normally resend the full conversation and every tool result on each request, which adds delay in long sessions. With message threads, the first request sends the full conversation and starts a thread, and later requests send only the new messages plus the ID of the previous response.

## Details

- **How to use it:** Add a `thread` parameter to Messages API requests. The beta header is `message-threads-2026-08-12`.
- **Storage and expiry:** Threads are held in memory, encrypted, and not written to disk. A thread expires 5 minutes after its last request; the client must then resend the full conversation to start a new one. Per the API release notes, a thread is deleted no more than 1 hour after its last use.
- **Token usage:** Unchanged. Claude still reads the full conversation on every turn; the benefit is smaller requests, not fewer tokens.
- **Reported result:** For Claude Code, where message threads is on by default, requests of 500k to 1M tokens saw median time to first token drop by about 35%.
- **Availability:** Public beta on the Claude Platform, Claude Platform on AWS, Claude in Microsoft Foundry, and Claude Models on Google Cloud (Anthropic managed). Standard token rates and existing rate limits apply.
- **Best suited for:** Long-running coding agents, computer use agents (screenshots stay with the thread), and document- or image-heavy workflows.

## What happened next

The change targets latency rather than cost, so it matters most for agent loops with very large contexts. Because threads expire after 5 minutes of inactivity, workflows with long pauses between turns will still need to resend the full conversation.
