---
title: "GitHub Copilot Automations Can Now Be Triggered by Comments"
description: "GitHub Copilot cloud agent automations can now be triggered by specific comments posted on issues or pull requests, enabling workflows like auto-generating docs or investigating errors from a comment."
pubDate: 2026-08-03
category: copilot
type: news
tags: [Copilot, GitHub, Automations, Cloud Agent]
source: https://github.blog/changelog/2026-08-03-trigger-copilot-automations-with-comments
draft: false
importance: low
---

GitHub now lets developers create Copilot cloud agent automations that activate when a specific comment is posted on an issue or pull request, adding a new trigger type beyond existing automation options.

## Details

- **What's new**: Automations can be configured to trigger when a specific comment text is posted on an issue or pull request
- **Example use cases**: Automating documentation generation in response to code-change comments, triggering error-investigation workflows from an issue comment, and automatically creating follow-up tasks for technical debt
- **Setup**: Users specify the exact comment text that should initiate the automation when configuring it
- **Where to find it**: Available through the **Agents** tab in a repository, under **Automations** in the sidebar
- **Availability**: Copilot Pro, Pro+, Max, Business, and Enterprise users can use this feature; Business and Enterprise users need their administrator to enable the cloud agent policy first

## How to try it

- Open the **Agents** tab in a repository and select **Automations** in the sidebar
- Create a new automation and set a comment-based trigger with the exact text to watch for
- Business/Enterprise admins should confirm the cloud agent policy is enabled before use
