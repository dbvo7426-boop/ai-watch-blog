---
title: "Z.ai Announces GLM-5.3 With Stronger Coding and Emergent Cyber Capability"
description: "Z.ai released GLM-5.3, a post-training upgrade of GLM-5.2 that claims a 50% gain on its internal coding benchmark and state-of-the-art CyberGym results, with weights following after safety checks."
pubDate: 2026-10-13
category: glm
type: news
tags: [GLM, Z.ai, Cybersecurity, Open Weights]
source: https://z.ai/blog/glm-5.3
draft: false
importance: high
---

On October 13, 2026, Z.ai announced GLM-5.3, subtitled Frontier Coding with Emergent Cyber Capabilities. It uses the same base model as GLM-5.2; Z.ai says every gain came from scaled post-training on more and harder long-horizon environments.

## Details

- **Coding:** Z.ai calls it the most capable open-weights model for coding, with a 50% improvement over GLM-5.2 on its in-house Z.ai Code Bench, and open-source state of the art on Terminal Bench 3.0 and Agents' Last Exam.
- **Benchmarks vs GLM-5.2 (Z.ai reported):** Terminal Bench 2.1 88.2 vs 81.0; Terminal Bench 3.0 28.3 vs 4.6; DeepSWE v1.1 66.9 vs 46.2; SWE-Marathon 42.5 vs 19.4; CyberGym 84.5 vs 77.2; HLE with tools 62.5 vs 54.7. In Z.ai's own table, other models such as GPT-5.6 Sol and Fable 5 still lead on several coding and exploit benchmarks.
- **Cyber capability:** Z.ai says cyber ability developed faster than expected during post-training. It reports state of the art on CyberGym and more than double GLM-5.2 on exploitation benchmarks (ExploitGym 105 / 130 vs 29 / 39).
- **Open weights:** The blog said weights would be released two weeks after launch, once safety evaluation and hardening were complete. The zai-org Hugging Face page now lists GLM-5.3 (753B, reasoning_effort low/high/max) and a GLM-5.3-Flash, but the model cards give no release date, so the exact day the weights went live is unconfirmed. The GLM-5.3 license is labelled glm-5.3 and its text was not visible to us; GLM-5.2 was MIT.
- **GLM-5.3-Flash:** Per its model card, about 321B total and 18B active parameters, MIT license, natively multimodal, Terminal-Bench 2.1 84.3, with Z.ai saying it beats GLM-5.2 at one-tenth the price. The card states no release date.

## What happened next

Holding back the weights until after safety hardening is a change from the GLM-5.2 release, and reflects the cyber results Z.ai itself highlights. Check the license text before commercial use, since the main GLM-5.3 model is no longer simply labelled MIT.
