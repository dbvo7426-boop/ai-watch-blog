---
title: "Repository plugin defaults and enterprise plugin controls are generally available"
description: "GitHub Copilot in VS Code, Copilot CLI, and the Copilot app now lets repositories ship default plugins and lets enterprises require, block, and restrict plugins through managed settings."
pubDate: 2026-10-28
category: copilot
type: news
tags: [Copilot, Plugins, Enterprise, Copilot CLI, VS Code]
source: https://github.blog/changelog/2026-10-28-repository-plugin-defaults-and-enterprise-plugin-controls-generally-available
draft: false
importance: medium
---

Repository plugin defaults and enterprise-managed plugin controls are now generally available in VS Code, Copilot CLI, and the GitHub Copilot app. Repositories can set up plugins for contributors automatically, and enterprises can govern which plugins are allowed.

## Details

- **Repository defaults:** Maintainers can define a plugin marketplace and default plugins, so contributors do not repeat setup for each project. Trusted repositories can install and enable the defaults. Contributors can turn off repository defaults where policy permits.
- **Enterprise controls:** Administrators can supply approved marketplaces and require or block plugins through managed settings. Required plugins are installed and enabled automatically, and users cannot disable them. Managed settings take precedence over repository and personal choices.
- **Availability:** Repository defaults are available to individual Copilot users and to Copilot Business and Copilot Enterprise users. Managed controls require GitHub Enterprise Cloud with Copilot Business or Copilot Enterprise licenses issued by the enterprise or one of its organizations.
- **Surfaces:** VS Code, Copilot CLI, and the GitHub Copilot app.

## What happened next

The precedence order (managed, then repository, then personal) gives enterprises a clear way to standardize agent tooling while still letting teams share project setup through the repository. It extends the plugin model from individual convenience to something administrators can audit and enforce. Details such as the managed settings format and plugin vetting are not covered in the announcement.
