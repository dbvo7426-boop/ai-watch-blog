---
title: "DeepSeek upgrades V4.1-Flash to 1017 and opens its in-house Search and Fetch API"
description: "DeepSeek released V4.1-Flash-1017 with unchanged API usage and pricing, and opened its in-house search engine through Search and Fetch APIs priced at $0.75 per 1,000 successful requests."
pubDate: 2026-10-17
category: deepseek
type: news
tags: [DeepSeek, V4.1-Flash, API, Search]
source: https://api-docs.deepseek.com/updates
draft: false
importance: high
---

On October 17, 2026, DeepSeek announced two changes in its API change log: an upgrade of DeepSeek V4.1 Flash to DeepSeek-V4.1-Flash-1017, and the opening of its in-house search engine as a Search and Fetch API.

## Details

- **Model update:** The official web and app models were updated, and developers reach the new model through `deepseek-flash`. API calling method and pricing are unchanged.
- **Reported scores (DeepSeek's figures):** HLE without tools 42.6 (44.0 on the pure-text subset), Terminal-Bench 4.0 42.3, DeepSWE v1.1 77.0, ProgramBench 29.1, NL2Repo-Bench 68.2, Automation-Bench v1.0.6 60.5, Agents' Last Exam 35.4, Apex Bench v1.1 72.1, Chartography (with tools) 83.0, BabyVision (with tools) 92.5, ZeroBench-main (with tools) 51.0. Terminal-Bench 4.0 used the Claude Code framework, DeepSWE used Mini-SWE-V2, and ZeroBench-main used Pass@5.
- **Efficiency:** Shorter task runtimes and output lengths, lowering cost and speeding up tasks. The model is optimized for DeepSeek Harness, Tencent CodeBuddy and WorkBuddy; DeepSeek Harness 0.2.1-rc.1 or later is recommended.
- **Search engine:** DeepSeek says its in-house, AI-native engine handles hundreds of millions of requests daily, supports multilingual queries, returns real-time results, and filters SEO spam, GEO manipulation and low-quality AI-generated content.
- **Endpoints:** `POST /v1/tools/search` takes a query (1-128 characters), an optional result count (1-50, default 10) and operators such as site, exact phrase, language and date; results include summaries, optional page content, a relevance score and an authority tier. `POST /v1/tools/fetch` takes one HTTP(S) URL and returns the title and content as Markdown.
- **Pricing and limits:** $0.75 per 1,000 successful requests for each API; empty results, failures and timeouts are free. Rate limits per account are 100 QPS for Search and 25 QPS for Fetch.
- **Free period:** Server-side tool calls through DeepSeek Harness, Claude Code or Codex are currently free; per-request billing starts at 00:00 Beijing time on November 1, 2026.

## What happened next

Offering search and page fetching as first-party, pay-per-success endpoints gives agent developers a way to ground models without a third-party search vendor, and the free window for calls from DeepSeek Harness, Claude Code and Codex lowers the cost of trying it before billing begins on November 1. The benchmark numbers are DeepSeek's own and have not been independently verified here.
