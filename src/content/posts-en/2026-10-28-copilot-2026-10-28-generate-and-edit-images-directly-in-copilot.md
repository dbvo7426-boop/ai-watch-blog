---
title: "GitHub Copilot can now generate and edit images in chat"
description: "Image generation and editing by natural language arrives in GitHub Copilot as a public preview, powered by GPT Image 2.5 Flare and billed in image tokens against AI credits."
pubDate: 2026-10-28
category: copilot
type: news
tags: [GitHub Copilot, Image generation, GPT Image 2.5 Flare, GitHub Universe]
source: https://github.blog/changelog/2026-10-28-generate-and-edit-images-directly-in-copilot
draft: false
importance: medium
---

GitHub Copilot can now generate and edit images from natural language. When you ask for an image, your selected reasoning model calls a dedicated image-generation tool powered by GPT Image 2.5 Flare, previews the result inline, and saves it to your project.

## Details

- **Workflow:** Describe an image in any Copilot chat session, including mid-task. Copilot shows the preview inline and saves the file to your workspace, avoiding a trip to a separate tool.
- **Where:** Copilot chat in VS Code, the GitHub Copilot app, or Copilot CLI.
- **Admin control:** Organization and enterprise owners can disable it by disabling the image generation model in Copilot model policies.
- **Watermark:** An optional visible Made with AI watermark can be enabled; it is off by default.
- **Status and plans:** Public preview for Copilot Pro, Pro+, Business, and Enterprise.
- **Billing:** Billed separately from the chat model, based on image tokens that count toward your plan's AI credits. The per-token rate is undisclosed.

## What happened next

The notable design choice is that image generation is a tool the chat model calls, not a separate mode, so it fits into coding sessions for mockups, icons, or docs assets. Policy-level disabling and the opt-in watermark address likely enterprise concerns. Because usage consumes AI credits at an undisclosed rate, teams should test costs before wide adoption. The same capability is mentioned in the Copilot app release notes from the same day.
