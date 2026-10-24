---
title: "Patch the Planet: OpenAI coordinates global response to critical PHP vulnerabilities"
description: "OpenAI led a coalition to fix two critical PHP vulnerabilities found with AI, released a PHP version-checker Codex skill, and proposed a five-stage framework for responding to critical flaws."
pubDate: 2026-10-21
category: chatgpt
type: news
tags: [OpenAI, Security, PHP, Patch the Planet, Codex]
source: https://openai.com/index/coordinated-disclosure-of-critical-vulnerabilities
draft: false
importance: high
---

Over two months, OpenAI led a coalition of maintainers, researchers and security providers to address critical vulnerabilities in PHP. Calif identified a critical flaw using GPT-5.6 Sol under OpenAI's Patch the Planet initiative, and Wiz independently found and reported both vulnerabilities. PHP's maintainers led the fixes and release.

## Details

- **Immediate action:** Organizations using PHP should apply the fixes. OpenAI released a PHP version checker as a Codex skill (openai/php2shell-checker) to help identify potentially vulnerable versions.
- **Severity:** OpenAI calls it one of the most impactful security issues in recent memory, and says frontier AI found the bugs before attackers did, opening a Defender's Window.
- **Partners and government:** Wiz, Cloudflare and others contributed; OpenAI engaged US bodies including ONCD and CISA, plus international partners.
- **Funding:** $1 billion in subsidized Daybreak access via Daybreak for Frontline Defenders, aimed at organizations with limited security resources protecting essential services.
- **Proposed five-stage framework:** validate and fix upstream (including adversarial testing with frontier models); give affected organizations time to act; coordinate with government; prepare updates across products; publish guidance and support deployment once a patch exists. Maintainers decide whom to involve.
- **Maintainer support:** Codex for OSS subscriptions for all maintainers, sponsorship such as the Rust Foundation, and hands-on help via Patch the Planet. OpenAI is also calibrating additional blocking classifiers for Daybreak, acknowledging they can block legitimate security work.
- **Secure foundations:** secure-by-default coding, memory-safe languages, formal verification and stronger isolation.
- **Open questions sought from the community:** disclosure windows, emergency patching (including when governments might patch systems they are authorized to manage), early-notice recipients, and secure-by-default downstream packages.

## What happened next

OpenAI says these bugs are among several significant vulnerabilities it has found and expects such findings to increase sharply in coming months. The framework is explicitly a proposal and feedback is requested, so how maintainers and government processes adopt it is still open. CVE identifiers and technical details of the PHP flaws were not given in the post.
