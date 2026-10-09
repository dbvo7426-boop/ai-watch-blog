---
title: "Perplexity Open-Sources pplx-embed-v2-late, a Multimodal Embedding Model That Skips OCR"
description: "Perplexity released pplx-embed-v2-late on October 7, 2026 — open-weight 0.6B and 9B late-interaction embedding models that search text, images, PDFs, and slide decks without OCR or chunking, with the small model able to query indexes built by the large one."
pubDate: 2026-10-07
category: perplexity
type: news
tags: [Perplexity, Embeddings, Multimodal, Retrieval, OpenWeights, HuggingFace]
source: https://huggingface.co/perplexity-ai/pplx-embed-v2-late-9b
draft: false
importance: medium
---

Perplexity published a new family of open-weight embedding models, pplx-embed-v2-late, on October 7, 2026, built for searching mixed text, image, and visual-document collections without preprocessing steps like OCR or chunking.

## Details

- **Two sizes released**: a 0.6B model and a 9B model (7.4B active parameters), both published on Hugging Face under the MIT license
- **Architecture**: a ColBERT-style late-interaction retriever built on Qwen3.5, producing one 128-dimensional vector per token instead of a single pooled vector per document, with similarity scored via MaxSim
- **Multimodal by design**: handles text, images, and visual documents such as PDF pages and slide decks directly, using bidirectional attention, with no OCR or document chunking required beforehand
- **Cross-model compatibility**: the two models share an embedding space, so a corpus indexed once with the larger 9B model can be queried live using the smaller, faster 0.6B model to cut query-time cost
- **Training**: distilled from an internal 18B-parameter teacher model using token-level, LEAF-style objectives; the final eight transformer layers were fully fine-tuned while the remaining layers and the vision encoder used LoRA adaptation; training data spanned 186 million query-document pairs across 46 languages
- **Benchmarks**: on the ViDoRe v3 visual-document-retrieval benchmark, the 9B model improved overall score from 62.3% to 63.5%, with 65.2% nDCG@10 on image retrieval and 64.7% nDCG@10 on markdown document retrieval
- **Requirements**: sentence-transformers 6.0.0+ and transformers 5.4.0+

## What happened next

The release follows Perplexity's September 30 pplx-embed-v2-context model but targets a different problem: where that model focused on retrieving supporting evidence for text answers, pplx-embed-v2-late is aimed at searching visual and mixed-format corpora — PDFs, slide decks, scanned documents — that typically require costly OCR and chunking pipelines before they can be indexed. By open-sourcing both a large and a small model that share an embedding space, Perplexity is positioning its retrieval research as infrastructure other teams can adopt directly, reinforcing the citeable, verifiable-source approach that underpins its answer engine and agent products.
