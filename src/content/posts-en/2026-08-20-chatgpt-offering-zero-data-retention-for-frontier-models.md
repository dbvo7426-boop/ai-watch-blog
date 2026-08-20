---
title: "OpenAI Reaffirms Zero Data Retention, Previews \"Private Safety Processing\""
description: "OpenAI is reaffirming Zero Data Retention for eligible API customers and previewing Private Safety Processing, a new system that detects misuse patterns across related interactions without exposing content to OpenAI staff, in testing now with a September rollout planned."
pubDate: 2026-08-19
category: chatgpt
type: news
tags: [OpenAI, API, Enterprise, Privacy, Zero Data Retention]
source: https://openai.com/index/offering-zero-data-retention-for-frontier-models
draft: false
importance: medium
---

OpenAI has reaffirmed its Zero Data Retention (ZDR) policy for eligible API customers and previewed a new companion system called Private Safety Processing, designed to let OpenAI detect misuse patterns across related interactions without giving staff access to the underlying content.

## Details

- **Zero Data Retention, core promise**: OpenAI does not retain prompts or model responses after a request is processed, customer content is unavailable to OpenAI personnel for review, and enterprise data is not used for model training without explicit opt-in
- **Eligibility**: The announcement describes ZDR as available to "eligible API customers" using "frontier models," but does not specify which particular models or exact eligibility criteria beyond that
- **The problem it addresses**: OpenAI says prior frontier-model deployments required customers to permit some content retention to enable safety monitoring, which could conflict with customers' own security obligations — Private Safety Processing is meant to resolve that tension
- **How Private Safety Processing works**: it analyzes customer content across related interactions to spot misuse patterns, operates regardless of whether content is stored on customer-controlled infrastructure or OpenAI's systems, uses customer-controlled encryption keys for anything stored on OpenAI systems, and returns only a "narrowly defined signal" about the type of activity to OpenAI staff — personnel cannot see the flagged content itself, even when a risk is identified; customers can appeal using their own system information and choose whether to share further details with OpenAI
- **Timeline**: Private Safety Processing is currently in testing with early customers, with a broader rollout and a technical white paper planned for September
- **Customer quote**: Glean CISO Sunil Agrawal is quoted saying enterprise AI adoption "depends solely on customer control of data" and that the approach "shows safety can advance without compromising...privacy"

## What happened next

The announcement is light on specifics that would let enterprise buyers evaluate exact scope — which frontier models qualify, and what the formal eligibility bar is — leaving those details for the promised September white paper. The core tension it's trying to resolve (safety monitoring vs. strict no-retention guarantees) is a recurring theme for enterprise AI vendors, and Private Safety Processing represents OpenAI's specific technical answer: pattern-level signal without content access, similar in spirit to techniques increasingly used for content moderation on encrypted platforms elsewhere.
