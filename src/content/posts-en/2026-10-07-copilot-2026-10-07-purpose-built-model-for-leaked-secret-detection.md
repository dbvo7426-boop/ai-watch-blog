---
title: "GitHub Ships a Purpose-Built Model for Detecting Leaked Secrets"
description: "GitHub deployed a context-aware model fine-tuned specifically for secret detection that reads surrounding code to catch likely credentials, including unstructured passwords without typical token formats, rolling out to AI-detected password alerts, push protection, and upcoming Copilot security review."
pubDate: 2026-10-07
category: copilot
type: news
tags: [GitHubCopilot, SecretDetection, Security, GHAS]
source: https://github.blog/changelog/2026-10-07-purpose-built-model-for-leaked-secret-detection
draft: false
importance: medium
---

GitHub deployed a purpose-built, fine-tuned model for detecting leaked credentials in code, moving beyond general-purpose language models for secret scanning.

## Details

- **What's new**: the model is context-aware, reading surrounding code to identify likely credentials "without generating code or prose," including unstructured passwords that don't follow recognizable token formats
- **Why it's different**: previous approaches relied more heavily on pattern/token matching or general-purpose models; this one is specifically fine-tuned for the secret-detection task
- **Rollout channels**: existing customers with AI-detected password alerts are automatically upgraded to the new model; push protection checks are in private preview for organizations with GitHub Secret Protection (GHSP) or GitHub Advanced Security (GHAS); Copilot security review integration is coming soon in private preview; GitHub Enterprise Server support is planned for GHES 3.23 in public preview
- **Billing**: AI-detected password alerts remain free with GHSP/GHAS; the new push protection and security review checks will consume GitHub AI Credits
- **No published benchmarks**: GitHub did not disclose accuracy figures or false positive/negative rate comparisons against previous detection methods

## What happened next

This is the third security- and control-focused Copilot release this week alongside local sandboxing's GA and local-model discovery in the CLI, reflecting a broader push to harden GitHub's AI tooling against credential leakage as agentic coding workflows generate and handle more code autonomously.
