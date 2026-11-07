---
title: "Copilot usage metrics API adds BYOK, code review addressed rate, and telemetry gap fields"
description: "Three updates to the Copilot usage metrics API separate BYOK and custom model usage, track how developers act on Copilot code review comments, and flag users with missing telemetry or outdated clients."
pubDate: 2026-11-05
category: copilot
type: news
tags: [Copilot, Usage metrics API, BYOK, Code review, Enterprise]
source: https://github.blog/changelog/2026-11-03-byok-and-enterprise-custom-models-in-the-copilot-usage-api
draft: false
importance: medium
---

GitHub shipped three additions to the Copilot usage metrics API between November 3 and 5. They help enterprises see bring your own key (BYOK) usage, measure whether Copilot code review feedback is acted on, and find users whose reports are incomplete.

## BYOK and enterprise custom models (November 3)

- **Local BYOK:** Developer-configured keys and local models (such as Ollama, Foundry Local, LM Studio, and llama-server) used from Copilot CLI or the Copilot app. New fields include `used_local_byok`, `totals_by_local_byok` (broken out by `byok_kind` and `surface`), and daily, weekly, and monthly active local BYOK user counts.
- **Enterprise custom models:** Admin-configured models routed through GitHub. A new boolean `is_custom_enterprise_model` appears on `totals_by_client[].totals_by_model[]` entries and covers every client, including IDEs.
- **Scope:** Enterprise and organization reports, user-level and aggregate, 1-day and 28-day. Existing totals do not change and there is no backfill.
- **Caveats:** Local BYOK relies on client telemetry, so it is a lower bound, and some local providers do not report tokens. Custom model names that are not recognized appear as `unknown`.

## Code review details and addressed rate (November 5)

- A new `copilot_code_review` object on each `repos-1-day` row of the repository-level reports.
- `total_comments_evaluated` and `total_comments_addressed` give an addressed rate per repository. A comment counts as addressed if the developer applied the suggestion, asked Copilot to fix it, edited the code, or replied that the fix will come later.
- Breakdowns by severity, review tier (`lite`, `balanced`, `max`), comment type (such as `bug`, `security`, `custom`), and customization (custom instructions, skills, MCP servers, or none).
- `total_merged_no_human_change_request_after_review` counts merged Copilot-reviewed pull requests with no later change request from a person.
- Comments are evaluated when the pull request merges, and comments on bot-opened pull requests are usually not evaluated.

## Telemetry and version gaps (November 5)

- Per-user `client_telemetry_present` and `usage_metrics_requirements` (each IDE or extension marked `met`, `unmet`, or `unknown` against minimum versions).
- Daily counts `missing_client_telemetry_user_count` and `below_usage_metrics_minimum_user_count`. These overlap, so they should not be added together.
- Users without telemetry still count as active but lack details such as lines of code and model breakdowns. Common causes are old editors, disabled IDE telemetry, and proxies or firewalls.

## Access

Enterprise owners, enterprise billing managers, organization owners, and holders of a custom role with the View Copilot Metrics permission, with the Copilot usage metrics policy enabled.
