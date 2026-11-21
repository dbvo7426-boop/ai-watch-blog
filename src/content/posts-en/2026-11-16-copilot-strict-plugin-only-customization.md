---
title: "Enterprise admins can require Copilot customizations to come from plugins"
description: "A new strictPluginOnlyCustomization setting blocks standalone user and project customizations for Copilot Business and Enterprise members."
pubDate: 2026-11-16
category: copilot
type: news
tags: [GitHub Copilot, enterprise, plugins, admin]
source: https://github.blog/changelog/2026-11-16-control-where-github-copilot-customizations-come-from
draft: false
importance: medium
---

On November 16, 2026, GitHub let enterprise administrators require selected GitHub Copilot customizations to come from plugins or managed settings instead of standalone user or project configuration. Teams can then distribute approved MCP tools and canvases through a shared plugin library.

**Who:** admins on GitHub Enterprise Cloud; it applies to members with Copilot Business or Copilot Enterprise licenses issued by the enterprise or one of its organizations.

**Setting:** strictPluginOnlyCustomization blocks standalone customizations from user and project sources, while eligible plugins and managed settings stay allowed, subject to other policies. It covers five categories: skills, custom agents, hooks, MCP servers and executable Copilot extensions (executable canvas providers, not VS Code Marketplace extensions). Admins can restrict all of them or only some, for example MCP servers and extensions while leaving skills, agents and hooks open.

**Marketplaces:** plugin-only mode is not a marketplace allowlist. To restrict eligible marketplace sources, pair it with strictKnownMarketplaces; existing managed settings can also define marketplaces and require or block specific plugins. Rollout schedule and pricing are undisclosed.
