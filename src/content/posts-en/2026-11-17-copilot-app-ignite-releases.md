---
title: "GitHub Copilot app adds Azure DevOps support and browser use in public preview"
description: "Microsoft Ignite release for the Copilot app: Azure DevOps repositories and browser use in public preview, and GitHub Enterprise Server support now generally available."
pubDate: 2026-11-17
category: copilot
type: news
tags: [GitHub Copilot, Copilot app, Azure DevOps, browser use]
source: https://github.blog/changelog/2026-11-17-github-copilot-app-microsoft-ignite-releases
draft: false
importance: medium
---

GitHub shipped three updates to the GitHub Copilot app on November 17, 2026.

**Azure DevOps repositories (public preview).** Clone an Azure DevOps repo, have an agent create a branch, make changes and open a pull request. Track status in the sidebar, click Fix on a review comment so an agent addresses it, or enable agent merge so an agent fixes CI failures and completes the PR once checks and policies pass. Turn on Azure DevOps integration under Settings > Experimental, then add your account under Accounts and sign in with your Microsoft account. Cloud sessions are not available for Azure DevOps repos.

**Browser use (public preview).** Copilot can fill out forms, pull information from webpages, and test or debug the web app you are building in your signed-in browser. It works in Chromium-based browsers such as Google Chrome and Microsoft Edge through the GitHub Copilot Chrome extension, in an isolated tab group, alongside computer use. It is off by default: install the extension, then enable both Enable Computer Use and Enable Browser Use under Settings > Computer Use. Permission levels are managed in the extension settings. Browser use is also offered in Copilot CLI, VS Code and JetBrains IDEs.

**GitHub Enterprise Server (generally available).** Work with remote repositories, issues and pull requests from a GHES account, moving from opt-in preview to GA. It needs Copilot app 1.2.0 or later; sign in with a GitHub.com or GHE.com account, then add GitHub Enterprise Server under Settings > Accounts. Cloud sessions are not available for GHES.
