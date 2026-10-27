---
title: "Kiro CLI V3 starts rolling out as the default experience"
description: "Kiro CLI V3 brings the shared agent harness, workflows, cloud sessions, memory and spec mode to the terminal, with a gradual switch prompt from October 12."
pubDate: 2026-10-09
category: kiro
type: news
tags: [Kiro, KiroCLI, AgenticIDE, Workflows]
source: https://kiro.dev/blog/cli-3/
draft: false
importance: high
---

Kiro announced that Kiro CLI V3, opt-in since June, is rolling out as the default CLI experience. V3 runs the same agent harness as Kiro IDE and Kiro Web.

## Details

- **Rollout:** Starting October 12, a startup prompt gradually invites users to switch ("Switch to V3 and upgrade my configs", "Remind me later", "Don't ask again"). CLI 3.0 is expected by the end of October and retires inline shell autocomplete, the CLI desktop app and Classic.
- **Workflows:** Multi-step tasks run through agents that plan, implement and review, each step in a fresh session. They are opt-in via settings.
- **Cloud sessions:** `kiro-cli --cloud` with an attached repository keeps working after you disconnect and can be resumed from another machine. An IAM Identity Center administrator must enable it, and it runs only in us-east-1 today.
- **Memory, spec mode, tangents:** `/memories` manages retained context, `/spec new` reviews requirements and design before implementation, and `/tangent` opens side conversations without touching main context.
- **Switching and reverting:** `kiro-cli --v3` tries it for one session, `kiro-cli settings chat.agentEngine v3` makes it default, and `kiro-cli --v2` returns to V2 for a launch. V2 sessions resume in V3 but not the reverse.
- **Config migration:** Originals are backed up as `<name>.json.bak`; `/upgrade-agent` migrates or repeats it. Prompts, models, resources and MCP definitions carry over, while unconvertible hooks are dropped with warnings.
- **Permissions and removals:** Trusted-tool lists become action and resource rules (deny beats ask beats allow). The `use_aws` tool is removed in favor of shell rules, and Classic is unsupported.

## What happened next

On October 20 Kiro shipped memory for the IDE and CLI, which in the CLI works in local V3 sessions, so V3 is now the path to Kiro's newest terminal features. Teams relying on V2 hooks, `use_aws` allow lists or ACP integrations should check migration warnings before the CLI 3.0 release.
