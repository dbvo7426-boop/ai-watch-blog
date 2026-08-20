---
title: "OpenAI Details Its Monitoring, Alignment, and Security Safeguards for Cyber-Critical Models"
description: "Following its disclosure that the upcoming Astra model may cross the 'Critical' cyber capability threshold, OpenAI lays out a three-pillar safeguard framework — monitoring, alignment, and security — that it says will evolve into an updated Preparedness Framework."
pubDate: 2026-08-18
category: chatgpt
type: news
tags: [OpenAI, Astra, Cybersecurity, AI Safety, Preparedness Framework]
source: https://openai.com/index/pacing-model-development-cyber-capabilities
draft: false
importance: high
---

OpenAI has published a follow-up to its August 7 disclosure that its upcoming model, Astra, may meet the "Critical" cybersecurity capability threshold under its Preparedness Framework. Where the earlier post focused on the finding itself, this one goes deeper on the specific safeguards OpenAI is building around monitoring, alignment, and security — distinct from, though related to, the separate Daybreak defender-access program and its new GPT-5.6-Cyber model, which this article does not mention.

## Details

- **Astra's status**: A "significant number" of Astra's training and evaluation workloads remain paused pending migration to hardened, more secure environments, and monitoring now covers all inference involving tools, not just RL training, following the August 7 determination
- **Three-pillar framework**: OpenAI organizes its safeguards into monitoring ("detects and allows us to respond to concerning behavior"), alignment ("reduces the likelihood of harmful or unauthorized actions"), and security measures ("limit what AI systems can access or affect")
- **Monitoring specifics**: A multistage chain-of-thought monitoring system uses activation classifiers running on every sampled token; OpenAI aims to issue an alert within 30 minutes of concerning activity, with the highest-priority alerts paging safety/security staff and halting activity if a false positive can't be ruled out in that window; the overhead is estimated at roughly 20% of the inference compute being monitored, and coverage is mandatory for all RL training and tool-using evaluations for Sol-capability models and above
- **Alignment work**: Training changes include improved reward models for detecting unsafe behavior, pushing models toward greater honesty about their own actions, capabilities, and limitations, and reducing behaviors that exploit weaknesses in rewards, graders, tools, or oversight, including behaviors that could cause harm when models interact with external systems
- **Security infrastructure**: Sandboxed isolation for untrusted or model-generated code execution, network isolation to prevent a single compromise from reaching the internet or internal networks, removal of vulnerable shared services, reduced standing privileges, automated continuous security testing using models to simulate attacks, and expanded security log collection
- **Tie to a past incident**: OpenAI notes that after the earlier Hugging Face-related incident, it paused frontier-model inference in research clusters for workloads involving code execution or internet access, later resuming under more limited, individually reviewed controls
- **Framework evolution**: OpenAI says it will "evolve our Preparedness Framework to bring these safeguards together across training and deployment," indicating this is an expansion of the existing framework rather than a replacement

## What happened next

This reads as the operational detail behind OpenAI's August 7 Astra disclosure — the earlier post announced that a model had crossed into Critical cyber territory for the first time; this one describes the specific technical scaffolding (monitoring latency targets, compute overhead, sandboxing) OpenAI says it's using to manage that risk during development. It sits alongside, but is organizationally distinct from, the Daybreak program's expansion of defender access to GPT-5.6-Cyber — one track focuses on giving vetted defenders comparable capability, while this one focuses on containing the risk from OpenAI's own frontier development.
