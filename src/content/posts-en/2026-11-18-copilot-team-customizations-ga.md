---
title: "Copilot team customizations are generally available for organization teams"
description: "Team maintainers and org owners can set default Copilot plugins for a team from the Customize Copilot tab."
pubDate: 2026-11-18
category: copilot
type: news
tags: [GitHub Copilot, plugins, teams]
source: https://github.blog/changelog/2026-11-18-customize-github-copilot-for-your-team
draft: false
importance: medium
---

Team customizations became generally available for organization teams on November 18, 2026. Teams can share the Copilot plugins they use so members do not each set them up manually; team defaults sit between individual setup and organization-wide policy.

**Who and where:** team maintainers and organization owners, on Copilot Business and Copilot Enterprise. On github.com, open the organization team and select the Customize Copilot tab.

**How:**
- Browse plugins from Copilot built-in marketplaces, your enterprise marketplaces and any marketplaces the team adds, then add plugins to the team.
- Add a marketplace from a GitHub repository that contains one, making its plugins available to browse.

**Behavior:** selected plugins are enabled by default for the direct members of the team in VS Code, the GitHub Copilot app and Copilot CLI; child-team members do not inherit them. Members can turn a team plugin off in their client if policy allows. Enterprise and organization policies override team choices, and team defaults cannot override allowed marketplaces or required or blocked plugins.
