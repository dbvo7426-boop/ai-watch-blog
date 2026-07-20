---
title: "Lovable Apps Now Usable Directly Inside ChatGPT and Claude"
description: Lovable has unveiled agent integration through MCP servers, letting published Lovable apps be called directly and operated from external AI tools like ChatGPT and Claude.
pubDate: 2026-07-15
category: lovable
type: news
tags: [Lovable, MCP, Integrations]
source: https://lovable.dev/blog/agent-integrations
draft: false
importance: medium
---

Lovable has unveiled an "agent integration" feature that lets published Lovable apps be called directly from external AI tools like ChatGPT and Claude. Built on the Model Context Protocol (MCP), it exposes an app's functionality to AI assistants, so users can access a Lovable app's features from within the AI tool they already use, without switching screens.

## Details

- **How it works**: Each Lovable app spins up a dedicated MCP server that exposes, in plain language, the list of actions the app can perform — like "submit an expense," "create a quote," or "generate a report" — to the AI tool. MCP-compatible AI tools such as ChatGPT and Claude select the appropriate action based on the user's request, execute it, and return the result to the user
- **Who can use it**: Any publicly published Lovable app can enable this — you simply "ask Lovable to turn it on" to get started
- **Scope configuration**: Lovable automatically proposes an MCP server's exposure scope based on the app's logic. You can customize which actions are exposed and access permissions (anyone, signed-in users only, or paying users only)
- **Hosting and sync**: The MCP server is hosted and maintained by Lovable and automatically stays in sync with the published version of the app
- **Security**: Requires OAuth sign-in by default, and a security check is performed at publish time
- **Example use cases mentioned**: A creator reviewing bid submissions, a marketer validating content against a target customer persona, or a sales team generating quotes and analyzing their pipeline through ChatGPT

## How to try it

Agent integration can be enabled at no extra cost for any published Lovable app. Just ask Lovable's chat to turn on the feature to get started; detailed setup instructions are available in Lovable's official docs (docs.lovable.dev).
