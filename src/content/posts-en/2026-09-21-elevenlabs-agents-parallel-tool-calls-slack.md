---
title: "ElevenAgents Adds Parallel Tool Calls, Slack Alerting, and a GPT-6-Astra Option"
description: "ElevenLabs' September 21 changelog gives ElevenAgents parallel tool execution within a single turn, Slack channel alerting alongside PagerDuty and webhooks, and gpt-6-astra as a selectable agent LLM."
pubDate: 2026-09-21
category: elevenlabs
type: news
tags: [ElevenLabs, ElevenAgents, VoiceAI, Slack, AgentTools]
source: https://elevenlabs.io/docs/changelog
draft: false
importance: low
---

ElevenLabs updated its ElevenAgents platform on September 21, 2026, with three changes aimed at making voice agents faster and easier to monitor in production: parallel tool execution, a new alerting channel, and an additional LLM option.

## Details

- **Parallel tool calls**: agents built on supported models can now execute multiple tools within a single conversational turn, controlled by a new `enable_parallel_tool_calls` boolean (default `true`), instead of calling tools one at a time
- **gpt-6-astra added**: the model is now selectable as an agent LLM alongside ElevenAgents' existing options
- **Slack alerting**: agent alerting now supports Slack channels as a notification target, joining the existing PagerDuty and generic webhook notifiers
- **Phone number search**: a new cursor-paginated endpoint lets teams filter phone numbers by provider, outbound support, assigned agent, branch, and labels

## What happened next

The changes are incremental additions to ElevenAgents' existing tool-calling and operations tooling rather than a standalone launch, but they matter for teams running agents at scale: parallel tool calls should cut latency on turns that need more than one lookup or action, and Slack alerting brings agent monitoring into a channel many support and ops teams already watch alongside PagerDuty. The updates shipped in the same week ElevenLabs also revised its Speech Engine retry timeout and turn-boundary markers, part of a steady cadence of infrastructure-level changelog updates the company has kept up through September.
