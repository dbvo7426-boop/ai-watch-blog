---
title: "ElevenLabs Adds Conversation Triage Tickets and Twilio Answering Machine Detection to Agents Platform"
description: "ElevenLabs' September 7 update gives ElevenAgents workspace-wide conversation tickets, dynamic conversation filters, and Twilio answering machine detection for outbound calls, alongside SDK and CLI updates."
pubDate: 2026-09-07
category: elevenlabs
type: news
tags: [ElevenLabs, ElevenAgents, VoiceAI, Twilio, DeveloperTools]
source: https://elevenlabs.io/docs/changelog/2026/9/7
draft: false
importance: medium
---

ElevenLabs shipped a batch of ElevenAgents platform updates on September 7, 2026, adding conversation triage tooling, dynamic filtering, and answering-machine detection for outbound calls — features aimed squarely at teams running AI voice agents for customer support and outbound calling at scale.

## Details

- **Conversation triage tickets**: a new endpoint retrieves conversation triage tickets across all agents in an account, with filtering by status or assignee and cursor-based pagination for up to 100 tickets per page
- **Dynamic variable filters**: conversation listing and message search now support repeatable `name:op:value` filters, including equality and comparison operators (`eq`, `gt`, `gte`, `lt`, `lte`) on numeric values
- **Twilio answering machine detection**: outbound calls can now enable machine detection in two modes — an immediate-verdict `enable` mode or a `detect_message_end` mode that waits for voicemail greetings to finish — with results delivered through new webhook events
- **Agent metadata and knowledge base updates**: branch responses now include draft creation timestamps and version tracking; RAG query chunks now require `source_url` fields; WebSocket `agent_response` events support optional message attachments with URL, name, and MIME type
- **Data collection changes**: properties now use an `allowed_values` field referencing dynamic variables, deprecating the previous field name
- **SDK and CLI updates**: JavaScript, Python, and CLI SDKs received version bumps for dynamic variable support and regenerated types; the CLI adds an `elevenlabs say` command and now defaults to the `eleven_v3` TTS model

## What happened next

The updates are live now across ElevenLabs' API, SDKs, and CLI as documented in its changelog. Answering machine detection in particular addresses a long-standing pain point for outbound voice-agent deployments — distinguishing a live person from voicemail — while the new ticketing and filtering tools point to ElevenLabs pushing ElevenAgents further into enterprise contact-center territory rather than treating it purely as a conversational-AI demo layer.
