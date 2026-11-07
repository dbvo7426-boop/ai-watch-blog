---
title: "GitHub Copilot is now available in JetBrains Air"
description: "JetBrains Air adds GitHub Copilot as an agent through the Agent Client Protocol, with local tasks in the IDE and cloud tasks billed to your Copilot plan."
pubDate: 2026-11-03
category: copilot
type: news
tags: [Copilot, JetBrains, Air, ACP, Cloud agent]
source: https://github.blog/changelog/2026-11-03-github-copilot-is-now-available-in-jetbrains-air
draft: false
importance: medium
---

GitHub Copilot is now available in JetBrains Air. You can delegate coding tasks, guide execution, and review results using your existing Copilot subscription. The integration uses the Agent Client Protocol (ACP) and supports tasks both in your JetBrains IDE and in the cloud.

## Details

- **Agent picker:** Select GitHub Copilot in Air's agent picker and use your Copilot subscription for coding tasks. It works alongside the GitHub Copilot plugin.
- **Parallel work:** Track multiple agent sessions, use project context and IDE tools, and review changes next to your code.
- **Cloud tasks:** Run Copilot in isolated cloud environments through Air Teams, from the IDE or a browser. Tasks use your Copilot plan, not JetBrains AI credits.
- **Setup for cloud tasks:** You need a JetBrains account in an Air Teams-enabled business organization, a Copilot subscription, and Copilot enabled by your Air administrator. In the browser, connect GitHub under Settings > VCS Providers; in the IDE, pick Cloud in the environment selector.
- **Sandboxing:** Cloud tasks run in a Docker container on a fresh virtual machine, all traffic goes through a proxy, and no state carries over between tasks.

## Limitations

- You cannot choose per task whether the personal or the organization Copilot plan is used.
- Air's governance and analytics features do not include Copilot usage.
- Air administrators can disable Copilot through a governance policy but cannot set Copilot spending limits in Air.
- Air may only check subscription or credit availability when the cloud environment starts, so a task can fail at that point.

## What happened next

Copilot now reaches JetBrains users through a second route besides the existing plugin, and ACP is the common thread. Pricing details beyond using the existing Copilot plan are not disclosed in the announcement.
