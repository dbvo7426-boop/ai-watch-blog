---
title: "OpenAI launches GPT-6 Cyber, rated Critical in cybersecurity, for Daybreak Red customers"
description: "GPT-6 Cyber scores 48.5% on ExploitGym and stays in scope 99.93% of the time without its deployment prompt, with new safeguards and a critical-infrastructure access group."
pubDate: 2026-11-05
category: chatgpt
type: news
tags: [OpenAI, GPT-6 Cyber, Security, Daybreak, Preparedness]
source: https://openai.com/index/introducing-gpt-6-cyber
draft: false
importance: high
---

OpenAI introduced GPT-6 Cyber, a cybersecurity model for finding exploitable vulnerabilities and developing fixes, trained to stay within the boundaries researchers set. Under its Preparedness Framework OpenAI rates it Critical in cybersecurity, up from High for GPT-5.6 Cyber.

## Benchmarks

- **ExploitGym:** 48.5%, up from 32.1% for GPT-5.6 Cyber (a 51% relative gain).
- **Web penetration testing (new evaluation, no source access):** 40.3% recall of vulnerabilities, versus 32.0% for GPT-6 Astra.
- **RemoteExploitBench (new; known flaws in GitLab, PostgreSQL, Jenkins in a controlled environment):** GPT-6 Astra with Daybreak Blue refused 100% of tasks; GPT-6 Cyber completed 95%, failing only on one exploit it could not get working remotely.
- **Scope adherence (ExploitGym Honeypot):** avoided exploiting out-of-scope services in 99.93% of cases without deployment safety prompts (94.49% for GPT-5.6 Cyber) and 100% with them.

## Real-world results

- **Firefox:** 81 novel vulnerabilities rated high severity by Mozilla, plus 30 known issues shown to be more severe than reported. Mozilla has begun landing fixes.
- **Linux kernel:** 1,724 vulnerabilities reproduced and 948 working exploits, versus 166 for GPT-5.6 Sol with the same harness; 304 critical findings disclosed to maintainers with candidate patches.
- **Brotli:** Used with other OpenAI models to validate exploits showing remote code execution in downstream applications.
- **Users:** Security teams at Cisco, Calif and CodeRabbit use it for vulnerability research and code review. In red-teaming of OpenAI's own training infrastructure, agents chained vulnerabilities to escape microVMs.

## Safeguards

- Cyber-specific misalignment monitoring and targeted monitoring for emerging threats (for example, live PHP server exploit attempts).
- Private Safety Processing: API customers on Zero Data Retention generally must use it; encrypted records are kept in customer storage for 30 days without exposing prompts and responses to OpenAI personnel.
- IP allowlisting for Daybreak Red API access by default, plus credential-compromise monitoring.
- New checks that block assistance that could compromise industrial controls or safety-critical systems. OpenAI says higher block rates are not always better, since legitimate security work uses similar techniques.
- Dragos ran evaluations on cyber-permissive Daybreak Red models in a lab, and OpenAI used the feedback to refine safeguards.

## Access

GPT-6 Cyber is initially available through the API and Codex to a select group of approved Daybreak Red customers, with progressive expansion to all Daybreak Red customers planned (no date given). GPT-5.6 Cyber is now available to all Daybreak Red customers. A new Daybreak Red for Critical Infrastructure group gives approved defenders permission for authorized testing of critical systems. The $1 billion Daybreak for Frontline Defenders grant program subsidizes access for resource-constrained teams, and Daybreak Blue alpha access for GPT-6 Astra is expanding. Pricing was not disclosed.
