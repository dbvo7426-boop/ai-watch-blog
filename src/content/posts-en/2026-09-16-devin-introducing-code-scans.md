---
title: "Devin Adds Code Scans, Turning Broad Engineering Goals Into Ready PRs"
description: "Cognition's September 16 launch, Code Scans, uses a new Agentic MapReduce architecture to investigate open-ended goals like 'improve SEO' or 'reduce dead code' across a repo and turn the findings into pull requests, with an SEO scan on devin.ai and cognition.com surfacing 44 fixable issues."
pubDate: 2026-09-16
category: devin
type: news
tags: [Devin, Cognition, CodeScans, AgenticMapReduce, ProductUpdate]
source: https://devin.ai/blog/introducing-code-scans
draft: false
importance: medium
---

Cognition launched Code Scans for Devin on September 16, 2026, a feature built to handle the kind of broad, open-ended engineering goals — "improve SEO," "reduce maintenance overhead," "make the app compile faster" — that tend to sit on the backlog because investigating a whole codebase to find where to start is itself a substantial project.

## Details

- **What it does**: users describe a broad goal, and Devin investigates the codebase, evaluates what it finds, and turns the results into pull requests ready for review, covering both the "figure out what's wrong" and "implement the fix" halves of the work
- **Agentic MapReduce architecture**: the same architecture Cognition built for Devin Security Swarm, run in four phases — Plan (Devin analyzes the repo and sets rules for what's relevant), Shard (matching code splits into focused batches), Map (parallel agents examine each batch and report findings), and Reduce (a final agent merges results, removes duplicates, and prioritizes them)
- **Built-in scan types**: performance optimization, database query analysis, test coverage gaps, dead code detection, general code quality, accessibility compliance, and SEO, plus custom scans defined by a team's own criteria
- **SEO scan example**: run across the devin.ai and cognition.com repositories, the scan surfaced 44 findings, which Cognition then shipped as fixes over the following days — raising the site's Ahrefs health score from 87 to 92, cutting slow pages by 73%, and eliminating missing image alt text
- **Other results Cognition cites**: a Rust compilation scan on the Dioxus project cut a clean debug build from 58.6 to 21.0 seconds (a 64% reduction), and testing with Philips Enterprise Informatics reportedly produced a 96% PR merge rate across several repositories and an estimated 700+ engineering hours saved
- **How to use it**: type "/scan" in the Devin webapp to start one, with further detail in Devin's documentation

## What happened next

Code Scans extends the same parallelized-agent approach Cognition first built for security auditing (Devin Security Swarm) into general-purpose codebase investigation, positioning Devin less as a single assistant that responds to specific tickets and more as a tool that can independently sweep a whole repository for a fuzzy goal and come back with concrete, reviewable pull requests. It arrived the same week Cognition also shipped a live-speech upgrade to Devin's voice calls, continuing a run of near-daily feature releases through mid-September.
