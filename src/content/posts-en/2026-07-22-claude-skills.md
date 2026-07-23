---
title: "Claude Adds Agent Skills, Bringing Specialized Expertise to Apps, Claude Code, and the API"
description: "Anthropic's Agent Skills let Claude load folders of instructions, scripts, and reference material so it behaves like a specialist for a given task. The same skill format works across Claude apps, Claude Code, and the API, with partners like Box, Canva, Notion, and Rakuten already shipping their own."
pubDate: 2026-07-22
category: claude
type: news
tags: [Claude, Claude Code, Agent Skills, Anthropic]
source: https://www.anthropic.com/news/skills
draft: false
importance: high
---

Anthropic offers a feature called Agent Skills, which lets Claude draw on specialized expertise when performing a given task. By giving Claude a "skill folder" — a bundle of instructions, scripts, and reference material — it behaves the way onboarding a new specialist would, adopting the practices needed for a particular domain. The same format works across Claude apps, Claude Code, and the API.

## Details

- **How it works**: A skill is a folder of instructions, scripts, and reference material. Claude automatically scans available skills during a task and loads only the ones it needs, when it needs them
- **Composable**: Skills stack together — Claude automatically identifies which ones are relevant and coordinates their use
- **Portable**: The same skill format works across Claude apps, Claude Code, and the API
- **Can execute code**: For tasks where traditional programming is more reliable than token generation, a skill can bundle executable code (requires the Code Execution Tool beta)
- **Availability**:
  - Claude apps: Available to Pro, Max, Team, and Enterprise users; Team and Enterprise admins must enable skills organization-wide
  - Claude Developer Platform (API): Skills can be added to Messages API requests, and a new `/v1/skills` endpoint provides programmatic control (requires the Code Execution Tool beta)
  - Claude Code: Skills install via plugins from the anthropics/skills marketplace and load automatically when relevant
- **Building skills**: A built-in "skill-creator" skill walks users through the process conversationally — asking about the workflow, then generating the folder structure, formatting files, and bundling resources with no manual file editing required
- **Partner examples**: Box (converting stored files into formatted documents), Canva (design customization for agentic workflows), Notion (seamless integration), and Rakuten (streamlining accounting workflows) have all published their own skills
- **Open standard**: Anthropic has published "Agent Skills" as an open standard so skills can be portable across platforms
- **Timeline**: First announced October 16, 2025; updated December 18, 2025 with organization-wide management, a partner-built skills directory, and publication of the open standard. The official page continues to be updated since then, most recently in July 2026 with related updates such as Claude Cowork's expansion to mobile and web

## How to try it

- In Claude apps (Pro/Max/Team/Enterprise), enable skills following the user guide in the Help Center
- In Claude Code, install skills as plugins from the anthropics/skills marketplace
- Via the API, enable the Code Execution Tool beta and add skills through the Messages API or the `/v1/skills` endpoint
- See Anthropic's Skills cookbook, Anthropic Academy courses, and the GitHub repository for further examples
