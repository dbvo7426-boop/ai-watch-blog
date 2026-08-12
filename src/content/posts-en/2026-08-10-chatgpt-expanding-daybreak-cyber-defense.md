---
title: "OpenAI Expands Daybreak Cybersecurity Program, Launches GPT-5.6-Cyber"
description: "OpenAI is expanding its Daybreak defender access program with a new specialized model, GPT-5.6-Cyber, that completes 95% of advanced cybersecurity tasks versus 1.5% for a standard safety-guarded model, and has already surfaced real zero-day vulnerabilities."
pubDate: 2026-08-10
category: chatgpt
type: news
tags: [OpenAI, ChatGPT, Daybreak, Cybersecurity, GPT-5.6-Cyber, AI Safety]
source: https://openai.com/index/expanding-daybreak-as-the-cyber-defense-window-narrows
draft: false
importance: high
---

OpenAI is expanding Daybreak, its program that gives vetted cybersecurity defenders access to frontier models with guardrails tailored for defensive security work, and introducing a new purpose-trained model, GPT-5.6-Cyber, built specifically for vulnerability research and exploit validation.

## Details

- **Why now**: OpenAI frames the expansion around a "narrowing window" for defenders, arguing that threat actors are increasingly using AI to find and exploit vulnerabilities at speed and scale, and that legitimate defenders need comparable capability before that gap closes
- **Two access tiers**: Daybreak Blue gives approved users access to general-purpose models such as GPT-5.6 Sol with safeguards suited to defensive work like vulnerability discovery, secure code review, malware analysis, incident response, and patch validation; Daybreak Red gives access to specialized cybersecurity models, including the new GPT-5.6-Cyber, for authorized vulnerability research, exploit validation, and security testing
- **GPT-5.6-Cyber performance**: On OpenAI's internal benchmark of advanced cybersecurity requests, GPT-5.6-Cyber completes 95.0% of tasks, compared with just 1.5% for GPT-5.6 Sol running under standard safety guardrails, and a jump from GPT-5.5-Cyber's 57.3% completion rate
- **Real-world results**: Using GPT-5.6-Cyber, OpenAI's researchers say they found at least five vulnerabilities in a popular mobile operating system, three critical vulnerabilities in a popular database, and more than 400 privilege-escalation vulnerabilities in a popular OS kernel; the model also independently identified two previously unknown V8 engine vulnerabilities, one of which was assigned CVE-2026-15903
- **Access remains gated**: Daybreak access is limited to vetted defenders and partner organizations rather than being opened broadly, and OpenAI says it pairs the expansion with identity verification, defined scope of use, logging, monitoring, and human oversight
- **External validation**: Jared Atkinson, CTO of security firm SpecterOps, is quoted saying the model is "materially improving our specialist vulnerability-research workflows: it reasons more accurately about real exploit constraints"

## What happened next

The Daybreak expansion arrived alongside two related OpenAI announcements: a broadened Daybreak Cyber Partner Program bringing in major security and consulting firms including Accenture, IBM, Capgemini, Palo Alto Networks, and CrowdStrike as approved intermediaries, and the availability of Daybreak models through Amazon Bedrock so enterprises can access them inside existing AWS governance and procurement workflows. Together, the moves push Daybreak from a narrow research access program toward broader institutional distribution, while OpenAI continues to keep the underlying models gated rather than releasing them publicly — consistent with the company's separate disclosure days earlier that its upcoming Astra model had crossed into "Critical" cyber capability under its Preparedness Framework.
