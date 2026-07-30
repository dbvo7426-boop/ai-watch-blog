---
title: "Copilot Code Review: Agent Skills and MCP Support Reach General Availability"
description: "GitHub has made agent skills and MCP server support in Copilot code review generally available across all plans, letting teams bring their own internal tools and documentation into the review process."
pubDate: 2026-07-29
category: copilot
type: news
tags: [Copilot, GitHub, MCP, Code Review, Agent Skills]
source: https://github.blog/changelog/2026-07-29-copilot-code-review-agent-skills-and-mcp-now-generally-available
draft: false
importance: medium
---

GitHub has made agent skills and MCP server support in Copilot code review generally available for all Copilot Pro, Pro+, Business, and Enterprise users. Teams can now bring their own internal tools, documentation, and coding standards directly into the review process.

## Details

- **GA date**: As of July 29, 2026, agent skills and MCP server support for Copilot code review is generally available for Copilot Pro, Pro+, Business, and Enterprise users
- **Agent skills**: Let Copilot invoke a team's internal tools and coding standards during a review. Teams configure this by adding a `SKILL.md` file under `.github/skills` subdirectories with context specific to their repository or organization
- **MCP server connections**: Integrate third-party platforms — issue trackers, documentation systems, service catalogs — directly into code reviews. Tool access is restricted to read-only, and GitHub's and Playwright's MCP servers are included by default
- **New visibility feature**: Copilot code review now indicates when a comment was generated using agent skills or MCP context, making it clear which capability contributed to each review comment
- **Configuration (MCP)**: Connect servers via repository settings → Copilot → MCP servers, and store authentication tokens under repository settings → Secrets and variables → Agents
- **Configuration (agent skills)**: Create skill-specific directories under `.github/skills` and add a `SKILL.md` file with the desired instructions and context
- **Migration**: Configurations set up during the public preview continue working without any changes required

## How to try it

- No additional signup is needed on eligible plans (Pro, Pro+, Business, Enterprise)
- To connect your team's own tools, add an MCP server via repository settings → Copilot → MCP servers
- To bring in coding standards, create a `SKILL.md` file under `.github/skills`
- If you already configured this during the public preview, no changes are needed — it keeps working as-is
