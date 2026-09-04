---
title: "Google Launches Gemini 3.8 Flash and a Restricted 'Flash Cyber' Variant for Vulnerability Defense"
description: "Google released Gemini 3.8 Flash, its third Flash model in six weeks, alongside Gemini 3.8 Flash Cyber — a specialized variant restricted to approved defenders that found critical vulnerabilities in under two hours in Google Cloud testing and beat commercial tools 2.6x on patch accuracy."
pubDate: 2026-09-02
category: gemini
type: news
tags: [Gemini, Google, GeminiFlash, Cybersecurity, GoogleAIStudio]
source: https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/
draft: false
importance: high
---

Google released two new models: Gemini 3.8 Flash, a general-purpose upgrade for software engineering and complex reasoning, and Gemini 3.8 Flash Cyber, a specialized variant for vulnerability detection and automated patching restricted to approved defenders — its third Flash release in six weeks.

## Details

- **3.8 Flash "works harder"**: Google says the model executes additional reasoning steps and iteratively calls tools on complex tasks, using more tokens in exchange for better results; on DeepSWE v1.1 it outperforms most larger frontier models at substantially lower cost, and it beats 3.7 Flash on Vals Finance Agent V2, Harvey's Legal Agent Benchmark, and scores 54.9% on HLE-Verified across STEM, humanities, and professional fields
- **3.8 Flash pricing unchanged**: it keeps 3.7 Flash's introductory pricing of $0.75 per million input tokens and $3.75 per million output tokens, available via Google AI Studio, Android Studio, Gemini Enterprise, Google AI Pro/Ultra subscriptions, the Gemini app, and Google Search
- **Flash Cyber's real-world results**: Google's Chrome Security team found it produces 2.6x more correct patches than comparable commercial models; a Wiz assessment found 7.5-9.7% higher recall on penetration testing at 2.3-5.2x lower cost; and Google Cloud's Vulnerability Research team discovered critical vulnerabilities in under two hours versus a typical months-long timeline
- **Flash Cyber's benchmarks**: frontier-level performance on the CyberGym vulnerability-discovery benchmark, over 70% success across 20 programming languages on internal tests, and 47.2% pass@1 on CWE-Bench for automated patching, comparable to leading frontier models at far lower cost
- **Restricted access**: Flash Cyber is available only through Google's new Fairwind Program, exclusively to approved governments, critical infrastructure operators, and software maintainers, and runs with more permissive cybersecurity mitigations to enable full defensive capability for vetted users
- **Shared safety baseline**: both models include safeguards against CBRN (chemical, biological, radiological, nuclear) misuse and cyber-offensive abuse, plus improved prompt-injection robustness measured on Gray Swan benchmarks

## What happened next

The Flash Cyber release and its accompanying Fairwind access program land in the same week as OpenAI's GPT-6 Astra safety disclosure and its Daybreak for Frontline Defenders initiative — both companies now shipping their most cyber-capable models alongside tightly gated programs aimed at getting equivalent defensive capability to critical-infrastructure operators before offensive misuse becomes widespread.
