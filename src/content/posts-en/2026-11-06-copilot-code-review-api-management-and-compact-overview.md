---
title: "Copilot code review settings can now be managed through REST and GraphQL APIs"
description: "Copilot code review gets API management from enterprise policy down to repositories, review attribution fields, and a more compact review overview with feedback reasons."
pubDate: 2026-11-06
category: copilot
type: news
tags: [Copilot, Code review, REST API, GraphQL, Enterprise]
source: https://github.blog/changelog/2026-11-06-copilot-code-review-api-management-and-review-overview-updates
draft: false
importance: medium
---

You can now manage GitHub Copilot code review settings through the REST and GraphQL APIs, from enterprise policy down to individual repositories. The review overview comment is also more compact. The updates are available on Copilot Pro, Pro+, Max, Business, and Enterprise plans.

## API changes

- **Attribution and metadata:** Identify Copilot's reviews and comments through explicit attribution fields, see the review effort used when available, and see which skills, MCP servers, and custom instructions Copilot reported as sources for a comment.
- **Enterprise administrators:** Enable or disable code review for all organizations, or leave the choice to organization administrators.
- **Organization administrators:** Manage enablement, default review effort, and the runner configuration. Settings managed by the enterprise cannot be overridden.
- **Repository administrators:** Manage review effort and whether reviews use custom instructions and MCP tools.
- **Token support:** Enterprise and organization settings endpoints (including the organization runner endpoint) do not support GitHub Apps or fine-grained personal access tokens. Repository endpoints support both, with Administration read or write permission.

## Review overview

- The effort used and any surveys move into a compact footer, and skipped or content-excluded files share one "Files not reviewed" section with linked exclusion reasons.
- Empty sections are omitted and long lists show an overflow count.
- After a thumbs-down you can pick a reason, such as an approval assessment you disagree with, an overly verbose comment, or incorrect or nitpicky findings.

The update also mentions fixes for billing, automatic reviews, and reliability; specifics are not detailed in the announcement.
