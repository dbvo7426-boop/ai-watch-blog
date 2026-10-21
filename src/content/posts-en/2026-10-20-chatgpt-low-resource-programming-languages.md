---
title: "OpenAI reports big gains in low-resource programming languages such as COBOL and Fortran"
description: "OpenAI published new evaluations showing GPT-6 Astra and GPT-6.1 Sol sharply improving on COBOL, Fortran, OCaml and Visual Basic coding and COBOL migration tasks."
pubDate: 2026-10-19
category: chatgpt
type: news
tags: [OpenAI, Coding, COBOL, Evaluation]
source: https://openai.com/index/low-resource-programming-languages
draft: false
importance: medium
---

OpenAI announced improved coding performance in low-resource programming languages such as COBOL, Fortran and Visual Basic, which have far less training data than Python or JavaScript yet underpin critical systems. It released a new multi-language benchmark and a COBOL migration evaluation to show the progress.

## Details

- **Why it matters:** OpenAI cites COBOL as supporting over 40% of online banking systems, 80% of in-person credit card transactions and 95% of ATM transactions; Fortran is used in weather forecasting and nuclear reactor safety analysis.
- **MultiLangBench:** The task is building a SQLite-compatible engine in 20 languages. GPT-6 Astra averaged an 87.4% test pass rate at maximum reasoning effort, up from 26.8% for GPT-5.6 Sol, scoring above 83% in 19 of 20 languages.
- **Per-language gains (Astra):** COBOL 10.9% to 72.1%, OCaml 25.6% to 85.8%, Fortran 21.4% to 83.5%, Visual Basic 27.5% to 89.4%. COBOL remained the hardest.
- **GPT-6 Luna:** The lower-cost model averaged 40.3% and improved on GPT-5.6 Sol in every language, at an estimated $0.77 per sample versus $3.48 (about 78% lower).
- **COBOL migration:** Migrating to C++, Java, Kotlin, Python or Rust was judged by hidden tests requiring byte-for-byte output parity. GPT-6.1 Sol reached 86.6% at low reasoning effort (versus 5.4% for GPT-5.6 Sol) at 39% lower cost, and 97.9% at higher effort.
- **Availability:** The evaluation setup, test suite and per-language results were released on GitHub. OpenAI notes production use still needs expert review and testing against business rules.

## What happened next

Legacy-language modernization is a large, concrete enterprise use case, and these numbers suggest a step change rather than an incremental gain. Results are OpenAI's own and based on its chosen benchmarks, so independent replication will matter. The open release of the test suite makes that possible.
