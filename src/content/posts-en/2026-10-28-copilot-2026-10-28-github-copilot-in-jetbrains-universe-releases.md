---
title: "GitHub Copilot in JetBrains adds Fusion, local sandboxes GA, and NES GA"
description: "The JetBrains plugin gets Copilot Fusion in place of Auto, generally available local sandboxes and next edit suggestions, a new default agent harness, and default session permissions."
pubDate: 2026-10-28
category: copilot
type: news
tags: [GitHub Copilot, JetBrains, Copilot Fusion, Next edit suggestions, GitHub Universe]
source: https://github.blog/changelog/2026-10-28-github-copilot-in-jetbrains-universe-releases
draft: false
importance: medium
---

GitHub shipped a broad update to GitHub Copilot in JetBrains IDEs: Copilot Fusion arrives, local sandboxes and next edit suggestions (NES) become generally available, and several agent and settings improvements land.

## Details

- **Copilot Fusion:** Choose Standard, High, or Max by effort; Copilot decides whether to use one model or combine several, balancing quality, speed, and cost. It replaces the Auto model option and is rolling out gradually to all users. Usage is discounted 30% for the first 30 days.
- **Local sandboxes (GA):** Tools and commands started by Copilot run with restricted access to filesystem, network, credentials, and other system capabilities, per policies set by the developer or organization.
- **NES (GA):** Higher suggestion quality, better context awareness, and smoother inline review and apply.
- **Agent harness:** The Microsoft Copilot agent harness is now the default when available. A session sidebar button opens sessions side by side.
- **Default session permissions:** A default permission mode for new sessions can be set in settings.
- **UX:** GitHub Copilot at top level of IDE settings; Copilot listed ahead of Local in the agent picker; better coordination between inline completions and NES; concise account notifications; Plugins Marketplace link from update prompts; hover on an agent turn to see completion time, generation time, and per-model token usage.
- **Quality:** Fixes for edit reliability, cancellation recovery, selected-code context, customization access on Windows and WSL, prompt templates after language server restarts, and IDE responsiveness.

## What happened next

This release brings JetBrains closer to parity with VS Code on agentic features, notably sandboxing and the Fusion model router. The Fusion rollout is covered in the separate Fusion general availability article. Specific version numbers of the plugin are undisclosed in the announcement.
