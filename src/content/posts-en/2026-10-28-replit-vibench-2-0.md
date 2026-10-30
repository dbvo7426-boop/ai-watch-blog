---
title: "Replit releases ViBench 2.0, a long-horizon benchmark for building whole software products"
description: "Replit released ViBench 2.0, in which an agent starts from an empty project and builds a product feature by feature; the best models pass every test plan in only 49-65% of builds."
pubDate: 2026-10-28
category: replit
type: news
tags: [Replit, Benchmark, ViBench, Coding Agents]
source: https://replit.com/blog/vibench-2-long-horizon-software-benchmark
draft: false
importance: low
---

Replit released ViBench 2.0 on October 28, 2026, a benchmark for long-horizon software development that joins the Specialized Intelligence Index (SII) from its inference partner Fireworks.

## Details

- **Setup:** the agent starts with an empty project, builds a first version from a short spec, then adds up to eighteen features on top of its own code, modeled on products like Uber, GitHub or Google Docs.
- **Size:** seventeen products, 241 feature requests and 544 test plans. Eight products are public on GitHub in the Harbor format and nine are held out.
- **Results:** GPT-6.1 Sol, GPT-6 Astra and Opus 5.5 pass all test plans in only 49-65% of their builds.
- **Grading:** a grading agent runs test plans in a real browser. Replit chose Opus 5.5 as grader because it made the fewest mistakes; it never passed a plan across 34 planted bugs, and GPT-6.1 Sol confirmed 99.2% of 477 re-graded passes.
- **Official runs:** Fireworks runs four builds of each product per model at medium effort and temperature 1.0. Results can be rerun with one command from release v2.0.6 on an OpenHands-based harness.

## What happened next

ViBench 2.0 extends the Vibe-on-Vibe setting from ViBench 1.0, where models score lower when adding a feature to their own code. Because the grader and the benchmark author are both commercial parties, the numbers are best read as Replit's own methodology rather than an independent standard.
