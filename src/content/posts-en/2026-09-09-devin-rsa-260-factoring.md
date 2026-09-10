---
title: "Cognition Says Devin Helped Factor RSA-260, Cutting Cost 10x With a New GPU Lattice Siever"
description: "Cognition published research showing how a researcher running concurrent Devin sessions built a GPU-based lattice siever that factored the 260-digit RSA-260 semiprime for about $400,000, roughly a tenth of the prior state-of-the-art cost."
pubDate: 2026-09-09
category: devin
type: news
tags: [Devin, Cognition, Cryptography, GPU, Research]
source: https://cognition.com/blog/factoring-rsa-260
draft: false
importance: high
---

Cognition published a research post on September 9, 2026 describing how its researcher Eric Lu used multiple concurrent Devin sessions to factor RSA-260, a 260-digit semiprime from the original RSA Factoring Challenge, setting a new record for the largest number factored with a general-purpose algorithm and cutting the computational cost roughly tenfold versus the prior public state of the art.

## Details

- **New record**: RSA-260 was factored into two 130-digit primes, succeeding the 829-bit RSA-250 record set in February 2020
- **Devin's role**: Lu ran an average of three concurrent Devin sessions (peaking at 18) to design and optimize the factoring pipeline — Devin handled parameter tuning, debugging, cluster orchestration, and full end-to-end factorization runs
- **The core innovation**: a new GPU lattice siever called `glas`, built as a drop-in replacement for the CPU-only lattice siever in the CADO-NFS toolkit; from Lu's initial prompt on August 13, 2026, Devin produced a working GPU implementation that beat CPU performance within nine hours
- **Cost**: about 4,900 GPU-days (roughly 13.5 GPU-years), or approximately $400,000 at current market GPU prices — around a tenth of the prior state-of-the-art cost
- **Timeline**: the project ran for three weeks, from Lu's first prompt on August 13 to obtaining the factors on September 3, 2026, across 192 sessions, 3,328 messages, and roughly 82,700 words of human-Devin collaboration
- **Security context**: Cognition emphasizes RSA-2048, used in modern systems, is unaffected — it remains "roughly a billion times harder than RSA-1024" — and that RSA-1024's theoretical weakness has been understood since the mid-2000s; the significance is a lower cost and skill barrier for this class of large-scale computational research
- **Lu's own framing**: he credits human-engineered problem decomposition as essential to the agents' progress, writing that "it's not clear to me how to apportion credit among myself, Devin, the hardware, and the world at large"

## What happened next

The post arrived one day after Cognition's $2 billion Series E announcement, giving the company two consecutive high-profile stories: one commercial, one technical. Unlike Cognition's usual product-update posts, this one is framed as a research showcase meant to demonstrate that Devin can be directed at open-ended, specialist problems — cryptanalysis and GPU performance engineering — well outside conventional software maintenance, provided a human breaks the problem into the right pieces. Cognition says the same approach could in principle scale to RSA-1024, though at a projected cost of around $30 million given the far larger computational gap.
