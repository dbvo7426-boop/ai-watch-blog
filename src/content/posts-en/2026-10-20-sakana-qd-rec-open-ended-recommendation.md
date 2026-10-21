---
title: "Sakana AI Proposes QD-Rec, Open-Ended Recommendation for Decision Support"
description: "Sakana AI introduced QD-Rec, a Quality-Diversity method that pairs candidates with generated hypotheses to build recommendation sets that are both high quality and varied."
pubDate: 2026-10-20
category: sakana
type: news
tags: [Sakana AI, QD-Rec, Quality-Diversity, recommendation, research]
source: https://sakana.ai/qd-rec/
draft: false
importance: low
---

On October 20, 2026, Sakana AI published QD-Rec, a recommendation method that applies open-ended exploration to decision support. Rather than ranking candidates, it treats a pair of a candidate (a company, customer or paper) and a hypothesis explaining why to choose it as the unit of recommendation.

## Details

- **Method**: a loop of selecting candidates (a bandit balances promising ones against unexplored ones), having a generative model write new hypotheses based on strong past ones, and evaluating them. Entries that are novel or beat similar existing ones are kept, based on Quality-Diversity.
- **Experiments**: three tasks, including M&A (about 6,300 US companies as of August 2024) and paper recommendation (about 17,500 papers from a recent AI conference); a customer-targeting task is also reported.
- **Results**: after 1,000 generate-and-evaluate steps, QD-Rec built archives with higher average ratings and larger size than a baseline that writes hypotheses from scratch each time, in many settings.
- **Models used in examples**: claude-sonnet-5 as proposer and gpt-5.6-terra as scorer; Sakana notes that LLM scoring can be gamed and that human scorers may suit subjective cases.
- **Resources**: paper (arXiv 2610.23470), a technical article and code on GitHub are published.

## What happened next

QD-Rec is research rather than a product release, but it extends Sakana's Quality-Diversity line of work into enterprise decision support such as M&A shortlisting. Practical availability as a product was not disclosed.
