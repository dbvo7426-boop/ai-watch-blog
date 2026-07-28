---
title: "GitHub Copilot App Access Gets Its Own Dedicated Policy"
description: "GitHub adds a standalone policy for controlling access to the Copilot app, separate from Copilot CLI, letting enterprises and organizations choose enabled everywhere, disabled everywhere, or delegate the decision."
pubDate: 2026-07-27
category: copilot
type: news
tags: [Copilot, Enterprise, Governance, Access Control]
source: https://github.blog/changelog/2026-07-27-manage-github-copilot-app-access-with-a-dedicated-policy
draft: false
importance: low
---

On July 27, 2026, GitHub announced that access to the GitHub Copilot app can now be managed through its own dedicated policy, separate from Copilot CLI. The change responds to customer requests for independent per-client control, and lets administrators set access rules at both the enterprise and organization level.

## Details

- **Background**: The Copilot app was previously governed by the same settings as Copilot CLI, but customers asked for the ability to manage each client independently, so it now has its own policy
- **Control levels**: The policy can be set at both the enterprise and organization level; administrators can set the rule themselves or delegate the decision to individual organizations
- **Configuration options**: Three choices are available — "Enabled everywhere," "Disabled everywhere," or "Let organizations decide"
- **Default setting**: "Enabled everywhere" is the default, so organizations that don't need to change anything can leave it as is
- **How to configure**: Go to enterprise or organization settings, open the "AI Controls" tab, find the "Copilot Clients" section, and select the Copilot app policy
- **Integration with existing settings**: The Copilot app also integrates with existing enterprise managed settings, so developer guardrails like plugin restrictions apply consistently alongside other Copilot clients such as CLI and VS Code

## How to try it

- Go to enterprise or organization settings, then "AI Controls" > "Copilot Clients," and select the Copilot app policy
- The default is "Enabled everywhere," so no action is needed to keep current behavior
- To restrict access or delegate the decision to organizations, an administrator can change the setting accordingly
