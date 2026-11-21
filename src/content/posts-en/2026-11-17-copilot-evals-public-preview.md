---
title: "GitHub Copilot Evals enters public preview"
description: "Repeatable tests for skills, custom agents and MCP tools in your Copilot setup, runnable from VS Code, Copilot CLI and the Copilot app."
pubDate: 2026-11-17
category: copilot
type: news
tags: [GitHub Copilot, Evals, public preview]
source: https://github.blog/changelog/2026-11-17-github-copilot-evals-is-now-in-public-preview
draft: false
importance: medium
---

GitHub Copilot Evals is in public preview as of November 17, 2026. It lets you test how the skills, custom agents and MCP tools in your Copilot setup behave. GitHub defines an eval as a repeatable test for AI behavior, and recommends rerunning the same eval after changing a customization to check for regressions, since AI output varies between runs.

What you can do:
- Create an eval for a skill, custom agent or MCP tool in your project, by asking Copilot in plain language or with the `/eval` command.
- Run it and see which checks passed or failed; you approve each run before it starts.
- Investigate why a check failed and decide what to change.
- Compare runs from before and after a change.

Evaluations run on Vally, an extensible local eval tool.

**Install:**
- VS Code: the GitHub Copilot Evals extension (GitHub.copilot-evals) from the Visual Studio Marketplace.
- Copilot CLI: the Evals plugin, following the instructions at github.com/github/evals.
- Copilot app: open Customize, add the `github/evals` marketplace and install the plugin.

**Availability:** public preview for Copilot Individual, Business and Enterprise. Docs are at aka.ms/evals; feedback goes to github.com/github/evals/issues.
