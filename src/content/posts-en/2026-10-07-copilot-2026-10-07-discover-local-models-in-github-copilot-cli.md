---
title: "GitHub Copilot CLI Adds Discovery for Local Ollama Models"
description: "GitHub Copilot CLI 1.0.94-0 lets users browse and select local models running on Ollama alongside cloud models via the /model command, without automatically installing runtimes or enabling offline mode."
pubDate: 2026-10-07
category: copilot
type: news
tags: [GitHubCopilot, LocalModels, Ollama, DeveloperTools]
source: https://github.blog/changelog/2026-10-07-discover-local-models-in-github-copilot-cli
draft: false
importance: low
---

GitHub Copilot CLI added the ability to discover and select local models from running Ollama instances alongside configured cloud models.

## Details

- **How it works**: users run the `/model` command to browse available models; the picker shows each model's provider and endpoint, and after selecting a local model, users can "add and use for this session" or "add without switching"
- **Requirements**: the feature doesn't automatically install runtimes or download models — Ollama and the models must already be installed, and models must support tool calling and streaming
- **Error handling**: provider connection failures appear in the picker with explanatory messages
- **Not an offline switch**: selecting a local model doesn't enable offline mode or disable GitHub telemetry; offline mode still requires explicitly setting `COPILOT_OFFLINE=true`
- **Availability**: live now in CLI version 1.0.94-0 and later; GitHub also previewed upcoming intelligent routing between local and cloud models

## What happened next

This gives Copilot CLI users a lighter-weight way to mix self-hosted models into their workflow without switching tools, landing alongside this same week's local sandboxing GA and purpose-built secret-detection model as part of a broader push toward more developer control over how and where Copilot's agentic features run.
