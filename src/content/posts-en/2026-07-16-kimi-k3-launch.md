---
title: "Moonshot AI Launches Kimi K3, a 2.8-Trillion-Parameter Open-Weight Model with 1M Context"
description: "Moonshot AI released Kimi K3, a 2.8T-parameter Mixture-of-Experts model with native vision and a 1M-token context window, available across Kimi apps and API, with full weights released under the Kimi K3 License."
pubDate: 2026-07-16
category: kimi
type: news
tags: [Kimi, Moonshot AI, Kimi K3, Open Weights, LLM]
source: https://www.kimi.ai/blog/kimi-k3
draft: false
importance: high
---

Beijing-based Moonshot AI has released Kimi K3, its new flagship model. At 2.8 trillion parameters, it is billed as the largest open-weight model released to date. It pairs native vision with a 1-million-token context window and is aimed squarely at long-running coding and agentic work.

## Details

- **Scale and architecture**: A Mixture-of-Experts model with 2.8T total parameters (104B activated), routing to 16 of 896 experts per token on a new "Stable LatentMoE" framework. Moonshot claims roughly 2.5x better scaling efficiency than Kimi K2
- **Building blocks**: Kimi Delta Attention (KDA), Attention Residuals (AttnRes), Gated MLA, Quantile Balancing for expert allocation, Per-Head Muon, and a Sigmoid Tanh Unit (SiTU) activation. Quantization-aware training starts at the SFT stage, using MXFP4 weights and MXFP8 activations
- **Context and modality**: 1M-token context window with native vision. Thinking is always on, and Max effort is the default at launch, with Low and High modes promised later
- **Benchmarks (company-reported)**: 67.3 on DeepSWE with the mini-SWE-agent harness, and 90.4 on BrowseComp using the full 1M context with no context management. Moonshot says K3 is competitive with Claude Fable 5 on kernel optimization and ahead of Opus 4.8 and GPT 5.6 Sol there, but openly acknowledges that its overall user experience still trails Claude Fable 5 and GPT 5.6 Sol
- **API pricing**: $0.30 per million cache-hit input tokens, $3.00 per million cache-miss input tokens, and $15.00 per million output tokens. Moonshot reports cache hit rates above 90% on coding workloads
- **Availability**: Kimi.ai and the Kimi mobile apps (iOS, Android, HarmonyOS), the Kimi Work desktop app (v3.1.0+), Kimi Code via `/model`, the Kimi API (model ID `kimi-k3`), and Kimi Enterprise
- **Open weights**: Moonshot promised full weights by July 27. They are now on Hugging Face (`moonshotai/Kimi-K3`) under a custom "Kimi K3 License". Moonshot recommends serving the model on supernode setups with 64 or more accelerators
- **Known caveats**: Output quality can become unstable if an agent harness doesn't pass all prior thinking content back to the model, or if a session switches to K3 mid-conversation. The model may also act proactively beyond what was asked, so bounded tasks may need explicit constraints

## What happened next

K3 quickly became the base for third-party tooling. On October 2, GitHub Copilot deprecated Kimi K2.7 Code and named Kimi K3 as its replacement. K3's rise has also drawn scrutiny: OpenAI's September 30 threat report attributed a model-distillation campaign to individuals associated with Moonshot AI. Even so, K3 has set a new high-water mark for openly released models, and it narrows the gap between Chinese open-weight models and U.S. frontier systems.
