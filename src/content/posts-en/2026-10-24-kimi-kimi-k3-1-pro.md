---
title: "Moonshot releases Kimi K3.1 Pro with 1M context and 3D modeling, open weights due by November 4"
description: "Kimi K3.1 Pro, a post-trained K3 with a 1M-token context window, is live on kimi.com, the apps, Kimi Code and the API, with full open weights scheduled by November 4, 2026."
pubDate: 2026-10-24
category: kimi
type: news
tags: [Kimi, Moonshot AI, K3.1 Pro, Open Weights]
source: https://www.kimi.com/en/blog/kimi-k3-1-pro
draft: false
importance: high
---

Moonshot AI introduced Kimi K3.1 Pro, the first model in the K3.1 series, which it calls its most capable 3T-class open-weight model. The post is listed on Kimi's blog under October 24, 2026.

## Details

- **Model:** A post-trained version of Kimi K3 with substantially more post-training compute, using large-scale joint reinforcement learning across hundreds of downstream domains. Context window is 1 million tokens. A Highspeed variant runs at 2-3x the speed of K3.1 Pro.
- **Coding:** Covers quick fixes to full-project builds, works with Unity, Unreal Engine and Godot, and can use web search and 3D generation.
- **3D modeling:** Creates 3D models from text, sketches or reference images and writes scripts for tools such as Blender and CAD software. The 3D Make feature is live on kimi.com and the Kimi app, with export options for 3D printing, video and Live Photos.
- **Finance:** Aimed at modeling, research and business operation simulation, with improved factual accuracy.
- **Benchmarks (Kimi-reported):** Terminal-Bench 4.0 65.7% (K3.1 Pro) versus 58.2% for GPT-6 Astra and 66.4% for Claude Opus 5.5; OfficeQA Pro v2 64.4; internal Kimi Code Bench 3.0 Long-horizon 61.2% versus K3's 55.95%. On Kimi's Hallu Bench (hard, with tools) the claim-level hallucination rate fell to 8.3% from K3's 23.4%; Kimi notes this is a stress test and not an everyday error rate.
- **Cybersecurity:** Cyber-related data was removed from mid-training and RL to reduce misuse risk. Kimi says K3.1 Pro's cyber capability remains behind frontier proprietary models that have been public for at least three months, and that it aims not to release open weights that extend the absolute frontier of cyber capability.
- **Availability:** Kimi.com and the iOS, Android and HarmonyOS apps; Kimi Work desktop app 3.1.0 or later; Kimi Code via `/model`; API model IDs `kimi-k3.1-pro` and `kimi-k3.1-pro-highspeed` with Zero Data Retention available. In Kimi Business the model is off by default and admins must enable it. The page lists no specific prices.
- **Open weights:** Full weights are scheduled for release by November 4, 2026.

## What happened next

K3.1 Pro follows the K3 launch in July and pairs a longer context window with 3D and finance workflows rather than coding alone. The deliberate cyber-data removal and the plan to raise open-weight cyber capability gradually are notable positioning choices for an open-weight release. The benchmark figures are Moonshot's own, with some competitor scores taken from third-party reports or internal runs, so they should be treated as vendor-reported until the weights ship and outside evaluations appear.
