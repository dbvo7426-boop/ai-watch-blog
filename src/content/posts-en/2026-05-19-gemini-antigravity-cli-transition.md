---
title: Google Announces Gemini CLI Will Merge into Antigravity CLI — Individual Access Ends After Less Than a Year
description: Google announced it will fold "Gemini CLI" into its new platform "Antigravity CLI." Free and Google AI Pro/Ultra individual access ends on June 18, 2026, and developers pushed back after learning the successor would not be open source.
pubDate: 2026-05-19
category: gemini
type: news
tags: [Gemini CLI, Google, Antigravity CLI, open source, "AI History"]
source: https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/
draft: false
importance: high
---

On May 19, 2026, timed with Google I/O, Google announced it would migrate "Gemini CLI" into a new unified platform called "Antigravity CLI." Gemini CLI had launched with fanfare as an open-source project in June 2025, but Google confirmed that free and Google AI Pro/Ultra individual access would end on June 18, 2026, and that its successor, Antigravity CLI, would not be open source — sparking a strong backlash from the developer community.

## Details

- **Reason for the merger**: Google explained that "Gemini CLI proved the terminal can be a great interface for agents, but needs have changed. Now what's required is for multiple agents to collaborate, split tasks, and solve complex problems together"
- **What Antigravity CLI is**: A newly built terminal experience that is part of Google's "agent-first development platform" Antigravity. It features fast execution powered by Go, asynchronous multi-agent orchestration, and a unified architecture shared with the desktop app "Antigravity 2.0"
- **Features being carried over**: Core Gemini CLI features such as Agent Skills, Hooks, Subagents, and Extensions (renamed "plugins" in Antigravity) will carry over, though Google explicitly stated that full feature parity (1:1) does not exist at launch
- **Timeline**: Antigravity CLI became available to all users starting the day of the announcement. On June 18, 2026, Gemini CLI and the Gemini Code Assist IDE extension will stop serving requests for free and Google AI Pro/Ultra individual users
- **Enterprise unaffected**: Organizations with Gemini Code Assist Standard/Enterprise licenses, or those using Google Cloud's Gemini Code Assist for GitHub, will continue to have access to Gemini CLI along with the latest models
- **Background to the backlash**: Over roughly the past year, Gemini CLI had racked up more than 100,000 GitHub stars and over 6,000 merged community pull requests. Developers criticized the move, saying "open-source contributions were used to improve an enterprise product that then excludes the very contributors who built it," and also took issue with the fact that Antigravity CLI's repository did not have its source code published

## What happened next

A month after the announcement, on June 18, 2026, individual access to Gemini CLI was indeed cut off as scheduled, and this surfaced CI/CD pipeline failures along with a sharp reduction in the free tier (from 1,000 requests per day down to roughly 20). Around the same time, the Linux Foundation cited the Gemini CLI case at the Open Source Summit North America 2026 while introducing its "Model Openness Tool," which assesses the substance of open-source claims — turning the episode into a catalyst for industry-wide debate over the sustainability of open-source AI tools.
