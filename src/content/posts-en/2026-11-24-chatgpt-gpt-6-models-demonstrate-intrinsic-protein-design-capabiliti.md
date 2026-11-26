---
title: "OpenAI shows GPT-6 models can design proteins with reasoning and code alone"
description: "A preprint and lab tests with Onava report binding for proteins based on GPT-6.2 designs across five targets, though structure prediction remains a weakness."
pubDate: 2026-11-24
category: chatgpt
type: news
tags: [OpenAI, GPT-6, GPT-6.2, Protein Design, Biology, Research]
source: https://openai.com/index/gpt-6-models-demonstrate-intrinsic-protein-design-capabilities
draft: false
importance: medium
---

OpenAI published a preprint titled "GPT-6 as a Universal Foundation Model for Protein Biology: Beyond Specialized Models". It reports that the GPT-6 family can design new protein structures and sequences using only reasoning and general-purpose coding tools, without calling specialized biology models.

**Key findings**

- An internal research model matched or outperformed specialized models on many protein design tasks. Researchers could guide designs through prompts, such as where a protein should attach and what shape it should take.
- In lab tests with research partner Onava, proteins based on designs from GPT-6.2 (a pre-released version) showed evidence of binding across five targets. Redesigned antibodies also kept binding.
- Specialized models still helped in the lab work: SolubleMPNN suggested amino acid sequences, and other models helped select candidates for testing.

**Lab experiment 1: small binders (minibinders)**

GPT-6.2 wrote code to produce 3D designs for five targets. Of 322 minibinders tested, 35 (10.9%) tested positive for binding: 5 for PD-L1, 3 for IL-7Rα, 1 for TrkA, 8 for VEGF-A and 18 for IL-17A. OpenAI notes the original RFdiffusion study reported higher hit rates, but says rates depend heavily on filtering and the definition of binding. In computational quality scores, GPT-6.2 scored slightly below RFdiffusion, while the latest internal models scored higher.

**Lab experiment 2: designing sequences**

Given structures of existing minibinders with the original sequences withheld, GPT-6.2 proposed new ones. Initial screens showed binding in 75 of 88 designs for MDM2, 26 of 42 for VEGF-A and 8 of 59 for PD-1. For three unpublished minibinder shapes, 14 of 107 proteins (13.1%) showed binding. OpenAI says this suggests the capability goes beyond memorization.

**Antibodies**

For six small antibodies (VHHs) against IL-4Rα, GPT-6.2 redesigned the three binding loops, and 128 of 182 designs (70%) showed signs of binding. For five therapeutic antibodies, 179 of 272 fragments (66%) with about half the loop amino acids changed bound PD-1 or PD-L1.

**Computational evaluations**

- Motif scaffolding (30 MotifBench challenges): 43.7% success for the latest internal model versus 27.8% for RFdiffusion.
- Fold-specified design (200 challenges): 18.9% versus 17.1% for Proteina.
- Small-molecule docking (PoseBusters): GPT-6.2 matched the observed pose in 93% of scored predictions, versus 96% for the latest internal model and 50% for DiffDock-L.
- Antibody docking (mean DockQ with side chains hidden): about 0.05 for GPT-5.6, 0.28 for GPT-6, 0.57 for GPT-6.2 and 0.81 for the latest internal model.

**Limits:** predicting a complete protein structure remained a clear weakness. Because the test structures were public, the models may have seen similar pairs during training. Whether designed enzymes would perform their intended function needs lab work. Availability of the internal research model was not disclosed.
