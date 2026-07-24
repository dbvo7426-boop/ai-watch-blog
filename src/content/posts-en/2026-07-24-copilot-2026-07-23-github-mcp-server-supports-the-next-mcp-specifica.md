---
title: "GitHub MCP Server Adds Early Support for the Next, Stateless MCP Specification"
description: "Ahead of the MCP protocol's official move to a 'stateless' next specification on July 28, 2026, GitHub says its MCP Server already supports it, having dropped Redis sessions and switched to HTTP-header-based inspection."
pubDate: 2026-07-23
category: copilot
type: news
tags: [MCP, GitHub, Copilot, Protocol]
source: https://github.blog/changelog/2026-07-23-github-mcp-server-supports-the-next-mcp-specification
draft: false
importance: low
---

GitHub announced that its GitHub MCP Server already supports the next MCP protocol specification, ahead of its official release on July 28, 2026. The new spec removes sessions and the `initialize` step, making the protocol "stateless" so clients can connect to servers faster and more easily.

## Details

- **What's changing in the next spec**: Sessions and `initialize` are both removed, letting clients connect to servers faster and more simply. It also scales more easily, since client-server handshakes can happen in parallel
- **What "stateless" means here**: Eliminating persistent session management and the database work tied to connection setup — removing the dependency on stored sessions makes deployments more scalable and responsive
- **Changes in the GitHub MCP Server**:
  - Dropped Redis-backed sessions, cutting database overhead
  - Replaced payload inspection with HTTP header reads for logging and security scanning
  - Strengthened its elicitation implementation, via the Go SDK, to support both old and new client protocols
- **Availability**: Ahead of the official spec release (July 28, 2026), the GitHub MCP Server already supports the latest spec
- **Verifying compatibility**: Point Copilot at your codebase and give it access to the conformance suite, the draft specification, and Tier 1 SDK implementations to check compatibility

## How to try it

- If you use the GitHub MCP Server, you already benefit from the new spec with no migration needed
- To verify your own MCP client or server implementation against the new spec, see the conformance suite and draft specification linked in the source post
