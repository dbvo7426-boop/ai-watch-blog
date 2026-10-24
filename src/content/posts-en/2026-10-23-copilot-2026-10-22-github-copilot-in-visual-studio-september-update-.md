---
title: "GitHub Copilot in Visual Studio September update adds PR exploration, BYOM preview and NuGet fixes"
description: "The September 2026 Visual Studio update lets the Git agent summarize pull requests, previews Bring Your Own Model on a new Agent (Preview), and adds a Copilot fixer for NuGet vulnerability warnings."
pubDate: 2026-10-22
category: copilot
type: news
tags: [GitHub Copilot, Visual Studio, BYOM, NuGet]
source: https://github.blog/changelog/2026-10-22-github-copilot-in-visual-studio-september-update-2
draft: false
importance: medium
---

GitHub published the September 2026 update for GitHub Copilot in Visual Studio on October 22, 2026. It centers on pull request exploration in chat, Bring Your Own Model (BYOM) in preview, and Copilot-assisted fixes for vulnerable NuGet packages.

## Details

- **Pull request exploration:** In Copilot Chat, select the Git agent and attach a pull request from the Git Repository window. The agent returns a summary with links to related comments and files. This requires connecting your Git provider's MCP server; GitHub and Azure DevOps are supported.
- **BYOM (preview):** Use models your team prefers, either through GitHub Copilot or your own deployments, whether or not you are signed in to GitHub. It is on by default in the Community, Professional and Enterprise editions. Supported providers are Microsoft Foundry, OpenAI, Anthropic and Ollama.
- **Breaking change:** BYOM now requires the new Agent (Preview), which runs on the GitHub Copilot SDK-powered harness. The earlier Ask and Agent modes no longer support BYOM, and previously configured Ollama models must be re-added after updating.
- **NuGet vulnerability fixes:** NuGet Audit warnings in the Error List now include a fixer action that opens Copilot Chat in agent mode and asks Copilot to fix the vulnerable packages using the NuGet MCP server. You must be signed in to GitHub Copilot and have the NuGet MCP server enabled in the Copilot Chat tools menu.
- **Availability:** All Copilot plans: Free, Student, Pro, Pro+, Max, Business and Enterprise.

## What happened next

The update continues the shift of Visual Studio Copilot toward agent workflows built on MCP servers and the Copilot SDK. The BYOM change is the item to watch: moving it onto the new Agent (Preview) gives teams model choice, but anyone using Ask or Agent mode with their own models, or with Ollama, has to switch modes and reconfigure. The changelog points to the Visual Studio blog and release notes for further detail.
