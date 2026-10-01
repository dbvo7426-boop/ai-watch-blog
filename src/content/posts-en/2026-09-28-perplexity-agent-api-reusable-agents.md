---
title: "Perplexity's Agent API Adds Reusable Profiles, Versioned Skills, and Managed Connectors"
description: "Perplexity upgraded its Agent API so teams can configure an agent once and reuse it everywhere, bundling model settings, tools, and instructions into versioned Profiles and Skills with centrally managed connectors."
pubDate: 2026-09-28
category: perplexity
type: news
tags: [Perplexity, Agent API, Profiles, Skills, Connectors]
source: https://www.perplexity.ai/hub/blog/agent-api-now-supports-reusable-agents
draft: false
importance: medium
---

Perplexity announced on September 28, 2026 that its Agent API now supports reusable agents, letting development teams configure an agent once in the API Portal and reuse that exact configuration across every application and workflow instead of rebuilding it each time.

## Details

- **Profiles**: a Profile stores a versioned configuration for the model, tools, instructions, Skills, and managed connectors used by an agent workflow, all bundled under one shareable, versioned ID
- **Skills**: packaged, reusable procedures and instructions that teams can invoke repeatedly; publishing a new version of a Skill updates behavior everywhere it's used, instead of editing instructions separately in every application
- **Managed connectors**: pre-configured integrations for GitHub, Slack, Google Drive, Datadog, Linear, and Notion, currently in preview, that let teams manage approved credentials and access at the project level rather than per application
- **Goal**: cut down on redundant configuration work and keep agent behavior and access controls consistent across every app that calls the same agent

## What happened next

The update positions Perplexity's Agent API closer to how enterprise teams want to operate agents at scale — define an agent's model, tools, and guardrails once, version it, and let every downstream application pull the same configuration rather than drifting out of sync. It builds on the Agent API that Perplexity first launched in mid-August 2026, extending it from a way to call agents into a platform for managing them as shared, governed assets across a team.
