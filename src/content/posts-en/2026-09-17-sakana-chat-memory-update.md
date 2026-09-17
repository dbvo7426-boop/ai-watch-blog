---
title: "Sakana Chat Moves to Fugu Max and Adds Cross-Conversation Memory"
description: "Sakana AI updated its Sakana Chat playground on September 17, 2026 to run on the Fugu Max orchestrator by default and added a memory feature that carries user context like role and formatting preferences across conversations."
pubDate: 2026-09-17
category: sakana
type: news
tags: [Sakana AI, Sakana Chat, Fugu Max, Memory, Chatbot]
source: https://sakana.ai/chat-fugumax/
draft: false
importance: medium
---

Sakana AI updated Sakana Chat, its free browser-based playground for the Tokyo lab's models, on September 17, 2026. The update brings the Fugu Max orchestrator into the chat interface and adds a memory feature that carries context across conversations.

## Details

- **Model refresh**: Sakana Chat now runs on Fugu Max, the orchestrator model Sakana released on September 11 that routes each prompt to whichever model in its pool — including open-weight and Nemotron-family models — is best suited to it, aiming for frontier-comparable quality without relying on one large proprietary model
- **Memory feature**: what a user states once — their role, the project they're working on, how they like answers formatted and written — carries over into later conversations instead of needing to be repeated each time
- **User control**: stored memories are reviewable in settings and can be disabled entirely
- **Scope limits**: only conversations started after the update contribute new memories; earlier chat history is not retroactively used, and the change does not extend to the API, where integrations must continue to manage their own conversation state

## What happened next

The update is live immediately at chat.sakana.ai with no configuration needed. It arrives one day after a related update to Sakana's Marlin research platform, rounding out a week in which Sakana pushed its new Fugu Max orchestrator into both its consumer chat product and its research tooling.
