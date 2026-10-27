---
title: "GitHub Copilot assisted permissions reach general availability"
description: "Assisted permissions, where an LLM reviews Copilot requests and lets safe ones proceed automatically, are now generally available in Copilot CLI, the Copilot app and VS Code."
pubDate: 2026-10-26
category: copilot
type: news
tags: [GitHub Copilot, Permissions, Copilot CLI, VS Code]
source: https://github.blog/changelog/2026-10-26-github-copilot-assisted-permissions-generally-available
draft: false
importance: medium
---

GitHub announced that assisted permissions are now generally available in GitHub Copilot CLI, the GitHub Copilot app and Visual Studio Code.

## Details

- **How it works:** When Copilot asks to run a command, access a file system path or open a URL, a large language model reviews the request. Requests classified as safe proceed automatically; all others need user approval.
- **Enabling it:** In Copilot CLI run `/permissions` and select assisted. In the Copilot app open the mode picker, choose Tool permissions and select Assisted. In VS Code open the permissions picker and select Assisted permissions.
- **Enterprise controls:** Administrators can use enterprise-managed settings to block Allow All while keeping Assisted available, or disable Assisted on its own. They can also set the default permission mode for new sessions; developers can still pick any other mode policy allows.
- **Fallback:** If the default mode is unavailable or prohibited by policy, new sessions start with manual approval.

## What happened next

The feature sits between approving every action by hand and Allow All, aiming to cut approval prompts in agent sessions. The changelog does not describe the classifier model or its error rates; how requests are evaluated is left to GitHub docs. Admin controls make it practical to allow Assisted while keeping Allow All off.
