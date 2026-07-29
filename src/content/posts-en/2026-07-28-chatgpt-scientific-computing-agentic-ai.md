---
title: "Scientific Computing in the Age of Agentic AI: OpenAI Publishes Field Report"
description: "An OpenAI field report shows researchers using coding agents like Codex and Claude Code to modernize eight scientific computing projects, including genomics tools, while highlighting that expert verification remains essential."
pubDate: 2026-07-28
category: chatgpt
type: news
tags: [ChatGPT, Codex, Scientific Computing, Research, Field Report]
source: https://openai.com/index/scientific-computing-agentic-ai
draft: false
importance: medium
---

OpenAI has published a field report examining how AI coding agents are changing the way scientific computing software gets built. Drawing on eight projects where researchers used Codex and Claude Code to modernize their own tools — including genomics software — the report finds that while agents can take over much of the implementation work, the researcher's role in verifying and directing that work has become more important, not less.

## Details

- **Projects studied**: Eight projects, mostly in the life sciences. Examples include modernizing the build and packaging system of cyvcf2, a Python library for parsing genomic variant files; contributing improvements back to the immunology tool MHCflurry; and reviving rustar-aligner, a previously abandoned project, under new community stewardship
- **Agents used**: Codex alone in five projects; Codex combined with Claude Code in the other three
- **Problems tackled**: Routine maintenance, targeted performance optimization, large-scale language migrations, and GPU-native redesigns
- **How the researcher's role shifted**: Away from hands-on implementation and toward "verification and orchestration" — setting goals, defining correctness criteria, and deciding when something is ready to ship
- **Remaining challenges**: Agents can confidently produce incorrect work, so human verification is still required. Checking edge cases and numerical differences still takes significant time, and neglecting long-term maintenance and contributor attribution risks fragmenting a project
- **Quote**: Brent Pedersen, a maintainer involved in projects like cyvcf2, said: "With coding agents, it's quite easy to go fast; for now, to go far in science, there's still a need for expert guidance."

## How to try it

- This is a field report and analysis piece, not a new product or feature announcement
- Teams looking to use coding agents like Codex to maintain or modernize their own scientific software may find useful guidance here on structuring verification processes and maintenance practices
- The full report is available on OpenAI's official site
