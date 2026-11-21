---
title: "OpenAI details the Performance Factory, a Codex system that investigates ChatGPT slowdowns"
description: "OpenAI describes a cloud system of Codex-powered workflows that root-causes and proposes fixes for performance regressions."
pubDate: 2026-11-19
category: chatgpt
type: news
tags: [OpenAI, Codex, ChatGPT, performance, engineering]
source: https://openai.com/index/how-openai-performance-factory-keeps-chatgpt-fast
draft: false
importance: medium
---

OpenAI published an engineering post on the Performance Factory, a cloud-based system that uses Codex and OpenAI models to automate investigating and fixing performance problems in ChatGPT.

- **Results so far:** In just over three months, the first workflow (the Regression Workflow) tracked more than 1,700 investigations and root-caused over 600 cases, about 17 automated investigations per day.
- **Components:** a task service where engineers define workflows with configuration files and Markdown prompts; a dispatch loop that starts a Codex turn for each ready task; Codex running in the cloud inside the company network under a service identity with scoped permissions; and subscriptions that wake tasks on events such as review comments, failed CI checks or deployments.
- **Workflow stages:** needs investigation, root caused, fix proposed, resolved. Agents find the root cause and propose a fix, an engineer reviews and deploys, and an agent verifies recovery.
- **Adversarial review:** a separate Codex session tries to disprove each diagnosis. In a manual review of 100 root-cause suggestions, 70% were graded accurate; the other 30% needed refinement or did not fully establish causality.
- **Lessons:** related incidents are linked and ranked by estimated impact to protect engineers' attention; investigations are backtested against past incidents; a daily agent scans runs for tool failures and creates fix tasks.
- **Planned:** proactive monitoring without waiting for alerts, a service rightsizing skill, synthetic performance tests, and exploring whether agents could ship low-risk fixes without human review.
