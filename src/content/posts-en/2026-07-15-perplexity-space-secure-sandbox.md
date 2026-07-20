---
title: "Perplexity Unveils New Sandbox Platform 'SPACE,' Balancing Agent Safety and Speed"
description: Perplexity has unveiled "SPACE," a new sandbox technology for its agent runtime platform "Computer." Designed so credentials never enter the sandbox itself, it also launches five times faster than before.
pubDate: 2026-07-15
category: perplexity
type: news
tags: [Perplexity, Agents, Security]
source: https://www.perplexity.ai/hub/blog/secure-sandboxes-for-agents
draft: false
importance: medium
---

Perplexity has unveiled "SPACE," a new sandbox technology underpinning its agent runtime platform "Computer." By design, credentials never enter the sandbox itself, boosting both safety and execution speed at the same time.

## Details

- **Background**: Because agents edit files, execute code, and carry out multi-step tasks lasting hours or even days on a user's behalf, "where it runs" matters just as much as "how smart the model is"
- **How it works**: An ephemeral, disposable sandbox is spun up for each task and destroyed entirely as soon as the task ends. For longer-running work, sandboxes are wrapped in "sessions" that can be paused, resumed, and branched, with rolling snapshot technology preserving context
- **Three layers of security**:
  - **Control Plane**: Accepts all requests through a single API and centrally manages sandbox creation, state, and when sandboxes are destroyed
  - **Node-level Services**: Passes credentials in from outside the sandbox only at the exact moment they're needed. Sign-ins, such as Google account linking, are handled without ever exposing credentials inside the sandbox, and outbound network traffic is controlled at the node level
  - **In-sandbox**: Each task runs fully isolated in an AWS Firecracker microVM, preventing any impact on the host or other concurrent tasks
- **Performance**: Sandbox startup latency has dropped to a median of 60 milliseconds (down from 185ms) and a P90 of 89 milliseconds (down from 447ms) — roughly a fivefold speedup

## How to try it

- SPACE is already running as the internal infrastructure behind Perplexity's agent platform "Computer," so users of Computer and Personal Computer benefit from it automatically, with no additional setup
- Technical details are also available in Perplexity Research's article, "Making SPACE: Secure and Efficient Runtimes for Long-Running Agents"
