---
title: "GitHub Copilot in Visual Studio's July Update Adds a New Agent and .NET/Azure-Built Skills"
description: "GitHub has shipped the July 2026 update to GitHub Copilot in Visual Studio, adding a new agent (preview) built on the Copilot SDK, built-in skills authored by the .NET and Azure teams, and improved code review."
pubDate: 2026-07-30
category: copilot
type: news
tags: [Copilot, Visual Studio, GitHub, .NET, Azure]
source: https://github.blog/changelog/2026-07-30-github-copilot-in-visual-studio-july-update
draft: false
importance: medium
---

GitHub has released the July 2026 update to GitHub Copilot in Visual Studio. It adds a new agent (preview) built on the same Copilot SDK that powers the GitHub Copilot CLI, built-in skills authored by the .NET and Azure teams, and enhanced code review capabilities.

## Details

- **New agent (preview) built on the Copilot SDK**: A new agent built on the same Copilot SDK that underpins the GitHub Copilot CLI. It's designed to "get more tasks right the first time with less back-and-forth," with responses that are "shorter and easier to scan." It can be selected from the agent picker at the bottom of the Copilot Chat window
- **Built-in .NET and Azure skills**: Visual Studio now ships with pre-authored skills from .NET and Azure team experts. They appear in the "Built-in" category of the tool picker when the relevant workloads are installed, but remain disabled by default so developers can opt in only to the ones that match their workflow
- **Code review on a selection**: Developers can select code, right-click, and choose "Copilot Actions" > "Review Selection" to get inline comments and actionable suggestions powered by GitHub Copilot's code review capabilities
- **Organization-level custom instructions**: Organization owners can now set custom instructions that automatically apply across all repositories in the organization, removing the need for per-developer configuration
- **Availability**: The new agent, built-in skills, and code review features are available on all Copilot plans. Organization-level custom instructions require GitHub Copilot Business or Enterprise

## How to try it

- Update Visual Studio to the latest version and pick the new agent (preview) from the agent picker at the bottom of the Copilot Chat window
- If you already have the relevant .NET or Azure workloads installed, enable the skills you need from the "Built-in" category in the tool picker
- Select code, right-click, and choose "Copilot Actions" > "Review Selection" to get an inline code review on the spot
- To apply custom instructions organization-wide, configure them with Copilot Business/Enterprise admin permissions
