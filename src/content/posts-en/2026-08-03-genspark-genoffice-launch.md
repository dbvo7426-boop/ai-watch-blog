---
title: Genspark Open-Sources GenOffice, a Free AI-Native Office Suite for macOS and Windows
description: Genspark has released GenOffice, billed as the world's first full-featured open-source AI office suite, with Docs, Sheets, Slides, and PDF apps for macOS and Windows, free and ad-free under the Apache 2.0 license.
pubDate: 2026-08-03
category: genspark
type: news
tags: [Genspark, GenOffice, open source, productivity]
source: https://www.genspark.ai/blog/genoffice-open-source-ai-office
draft: false
importance: high
---

Genspark has open-sourced GenOffice, which it calls "the world's first full-featured open-source AI Office for PC and Mac." The suite bundles a word processor, spreadsheet, presentation tool, and PDF app into native desktop apps for macOS and Windows, free and ad-free, with AI editing built into every layer rather than bolted on as a chat sidebar.

## Details

- **Four core apps**: Docs (AI-assisted drafting, styling, and rewriting), Sheets (built on the open-source Univer core with Rust-based XLSX processing, AI-generated formulas and analysis), Slides (AI develops storylines, designs slides, and generates full decks from a description), and PDF (annotations, forms, signatures, page operations, and inline AI Q&A)
- **File compatibility**: All apps read and write standard formats — .docx, .xlsx, .pptx, and .pdf — with byte-preserving round trips for Docs so original formatting survives edits
- **Architecture**: Five Electron apps share a unified engine layer; core packages (docx-engine, pptx-engine, file-parse, agent-core) are plain TypeScript with no Electron dependency, and Sheets uses calamine and IronCalc via a Rust sidecar
- **Security**: Full renderer lockdown with contextIsolation enabled, constrained AST evaluation for slide scripts, and isolated rendering of untrusted HTML
- **Licensing and cost**: Released under Apache License 2.0, free for everyone with no ads or watermarks; the codebase is open for modification and commercial use
- **AI features**: Using the built-in AI (powered by Genspark's Super Agent) requires a Genspark account and consumes Genspark credits, though the base office functionality needs no account or payment
- **Origin story**: Genspark says the Alpha was built by one engineer in one week using about $10,000 worth of AI tokens

## How to try it

- Download signed installers for macOS (Apple Silicon) and Windows (x64) at genspark.ai/genoffice, current version 0.4.110
- Source code is available at github.com/genspark-ai/genoffice
- This is an Alpha release; Genspark acknowledges bugs and missing features and is inviting the community to help shape the roadmap through a GenOffice group chat on GenTeam
