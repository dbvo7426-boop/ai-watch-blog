---
title: "GitHub Copilot CLI Speeds Up C++ Navigation With Whole Codebase Indexing"
description: "GitHub Copilot CLI now builds a persistent symbol index across entire C++ projects, letting the Microsoft C++ Language Server resolve types, symbols, and file relationships without repeatedly rediscovering them, speeding up finding definitions and references."
pubDate: 2026-09-22
category: copilot
type: news
tags: [GitHubCopilot, GitHub, Cpp, DeveloperTools]
source: https://github.blog/changelog/2026-09-22-faster-c-code-intelligence-with-whole-codebase-indexing
draft: false
importance: low
---

GitHub Copilot CLI added whole codebase indexing for C++ repositories, building a persistent symbol index instead of rediscovering project structure on every operation.

## Details

- **What it does**: creates a persistent symbol index across an entire C++ project, letting the Microsoft C++ Language Server resolve types, symbols, includes, and file relationships without repeatedly rediscovering them
- **Performance effect**: faster results when finding definitions, locating references, understanding unfamiliar code, and running symbol searches
- **Availability**: enabled automatically in Copilot CLI for C++ repositories; the initial index build can take extra time and memory for large projects, though later usage benefits from the reusable index
- **Monitoring and control**: progress can be tracked via `/lsp logs`, and the feature can be disabled if needed

## What happened next

The change targets a workflow-level friction point specific to large C++ codebases — repeated project-structure discovery — rather than adding new capability, trading a slower first index build for consistently faster navigation afterward.
