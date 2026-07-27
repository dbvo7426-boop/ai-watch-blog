---
title: Cognition Launches "Devin Security Swarm" to Automate Vulnerability Validation and Fixes
description: Devin maker Cognition has introduced "Devin Security Swarm," which uses a swarm of parallel agents to find codebase vulnerabilities, validate them at runtime, and auto-generate fix pull requests.
pubDate: 2026-07-01
category: devin
type: news
tags: [Devin, Cognition, security]
source: https://cognition.com/blog/introducing-devin-security-swarm
draft: false
importance: medium
---

Cognition, the maker of autonomous AI software engineer Devin, has launched "Devin Security Swarm," an agent that automates vulnerability detection, runtime validation, and fix-PR generation. The product addresses a growing gap: AI-assisted coding is piling up security findings faster than security teams can validate and remediate them.

## Details

- **How it works**: A swarm of parallel agents investigates separate segments of the codebase, analyzing code relationships to surface business-logic flaws and chained vulnerabilities
- **Validation process**: Detected vulnerabilities are confirmed as actually exploitable inside an isolated sandbox before Devin automatically generates a fix pull request — only for confirmed issues
- **Benchmark results**: Tested against 50 real-world vulnerabilities from GitHub Security Advisories across 14 languages, Devin Security Swarm hit 72% recall at $90.23 per run, beating Claude Security (68% recall, $131.87), Codex Security (48%, $118.20), and Cursor Security (26%, $4.60) on recall, while uniquely surfacing three critical vulnerabilities every other tool missed
- **Companion program**: Cognition also offers a six-week enterprise "Vulnerability Remediation Program," with embedded engineers helping clear CVE backlogs and set up continuous remediation workflows

## How to try it

- Devin Security Swarm was available immediately at launch
- Detailed pricing was not published; enterprise adoption appears to go through individual consultation
