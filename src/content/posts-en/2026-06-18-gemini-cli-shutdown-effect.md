---
title: Gemini CLI Individual Access Actually Shuts Down, Triggering a Wave of CI/CD Pipeline Failures
description: As announced, free/individual API access to Gemini CLI stopped on June 18, 2026. Authentication began returning HTTP 410 errors, and configuration differences with the successor Antigravity CLI caused CI/CD pipelines to fail one after another.
pubDate: 2026-06-18
category: gemini
type: news
tags: [Gemini CLI, Google, Antigravity CLI, open source]
source: https://www.techtimes.com/articles/318660/20260618/gemini-cli-shutdown-takes-effect-ci-cd-pipelines-break-go-based-antigravity-cli-arrives.htm
draft: false
importance: high
---

As announced on May 19, 2026, free and Google AI Pro/Ultra individual access to Gemini CLI actually stopped on June 18, 2026. The authentication endpoint began returning HTTP 410 (Gone), and automation infrastructure that depended on the `gemini` command — including GitHub Actions, cron jobs, and Docker containers — broke down across many organizations.

## Details

- **Immediate cutoff**: API access stopped with no grace period, affecting not only free users but also individual Google AI Pro and Ultra subscribers
- **CI/CD failures**: Automation built around Gemini CLI — GitHub Actions workflows, Docker containers, cron jobs, Makefile targets, and more — broke down across the board. Multiple teams reported build failures and failed automation jobs within hours
- **Silent configuration breakage**: The successor, Antigravity CLI, renamed the MCP configuration field from `url` to `serverUrl`, causing some configurations to silently stop working without any error message
- **Sharp reduction in the free tier**: The roughly 1,000 requests per day available under Gemini CLI's free tier was reportedly cut to around 20 requests per day under Antigravity CLI (a roughly 98% reduction)
- **The project's track record**: The shutdown came after about 12 months in operation, during which Gemini CLI had racked up 105,000 GitHub stars and more than 6,000 merged community pull requests
- **Developer reactions**: Contributor Andrea Alberti commented, "So in the end we were working for free on a codebase that only companies get to use?" Another contributor criticized the move, saying, "They got people to contribute to the open-source Gemini CLI, then migrated it into a closed-source project"

## How to try it

- Individual users of Gemini CLI must migrate to the successor "Antigravity CLI." Note that some configuration formats, including MCP server settings, have changed, so existing scripts and CI configurations need to be reviewed individually
- Organizations with Gemini Code Assist Standard/Enterprise licenses, or those using Gemini Code Assist for GitHub via Google Cloud, can continue using the legacy Gemini CLI
