---
title: "Lovable Adds a /goal Command for Up to 10 Hours of Uninterrupted Autonomous Building"
description: "Lovable introduced a /goal command that lets builders set a single objective and have Lovable work toward it continuously for up to 10 hours without pausing to ask questions, at a higher cost than a regular build message."
pubDate: 2026-08-30
category: lovable
type: news
tags: [Lovable, AI agent, Automation, ProductivityTools]
source: https://docs.lovable.dev/changelog
draft: false
importance: medium
---

Lovable added a `/goal` command that lets builders hand off a single, focused objective and have Lovable work on it continuously, without pausing for feedback, for up to 10 hours at a time.

## Details

- **How to start one**: type `/goal` at the start of a build message, or select "Goal" from the `/` command menu; the description that follows becomes the session's single, uninterrupted focus
- **How it behaves**: once started, Lovable "works on that one message until the goal is achieved, for up to 10 hours, without pausing to ask you questions," building the finished version of what was asked rather than checking in iteratively
- **Cost tradeoff**: Lovable says a goal session "costs noticeably more than a regular build message," reflecting the extended autonomous compute time
- **Still respects credit limits**: scheduled credit check-ins still pause a goal session once a project's configured threshold is hit, so it isn't fully exempt from usage controls

## What happened next

The feature targets builders with a well-defined, ambitious task who'd rather let Lovable run uninterrupted than steer it through many small iterative messages, trading a higher per-session cost for long, unsupervised build time — a similar bet to the long-running-agent features other coding tools have been shipping this year.
