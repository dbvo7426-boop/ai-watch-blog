---
title: "Perplexity Releases a Contextual Embedding Model That Retrieves Evidence, Not Just Answers"
description: "Perplexity published research on September 30, 2026 introducing pplx-embed-v2-context-9b-preview, a 9B-parameter embedding model trained to retrieve supporting context alongside answers, plus Context-bench, a new benchmark for evaluating that capability."
pubDate: 2026-09-30
category: perplexity
type: news
tags: [Perplexity, Embeddings, Search, Retrieval, Benchmark, Research]
source: https://www.perplexity.ai/hub/blog/contextual-embedding-beyond-the-gold-passage
draft: false
importance: medium
---

Perplexity released a new embedding model and an accompanying benchmark on September 30, 2026, aimed at a gap it says standard retrieval evaluation misses: finding not just the single "gold passage" that answers a query, but the surrounding evidence needed to trust and verify that answer.

## Details

- **New model**: `pplx-embed-v2-context-9b-preview`, a 9-billion-parameter embedding model producing 2048-dimensional embeddings, with 1024-dimension and int8 options also available
- **Training approach**: Uses a query-aware context-compression model as a teacher, which assigns token-level relevance scores that are then aggregated into chunk-level scores, teaching the embedding model to value supporting context rather than only the single best-matching passage
- **New benchmark — Context-bench**: 2,099 queries spanning 38,894 documents across 21 domains, built from more than 2.4 million sentence chunks, scoring document disambiguation, answer retrieval, and evidence retrieval
- **Reported results (Context-bench, K=10)**: 45.5% answer recall, 40.6% evidence recall, and 31.1% all-evidence recall — 14.4 percentage points higher answer recall than Voyage Context 4, the comparison baseline Perplexity cites
- **Benchmark integrity**: Context-bench itself is held privately by turbopuffer rather than published openly, specifically to prevent future models from training on the test set
- **Availability**: The model preview is published on Hugging Face

## What happened next

The release fits Perplexity's pattern of backing its search and agent products with homegrown retrieval research rather than relying solely on third-party embedding models. By optimizing for evidence recall rather than single-passage match, Perplexity is targeting a known weak spot in retrieval-augmented systems — answers that look correct but are hard for a user (or another model) to verify against source material — which matters directly for an answer engine whose core product depends on citeable, checkable results.
