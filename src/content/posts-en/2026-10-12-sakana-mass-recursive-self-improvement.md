---
title: "Sakana AI Publishes MASS: a Recursive Self-Improvement Method Using Multi-Agent Self-Supervision"
description: "Sakana AI researchers introduce Multi-Agent Self-Supervision (MASS), where a single shared model acts as a team of subagents, trains on its own best team trajectories, and gains 1.2-1.6x score-per-token after two improvement cycles on a 27B open-weight model."
pubDate: 2026-10-12
category: sakana
type: news
tags: [Sakana AI, MASS, recursive self-improvement, multi-agent, self-supervision, research]
source: https://sakana.ai/mass/
draft: false
importance: medium
---

Sakana AI, together with researchers from UC Berkeley, published a new research paper on October 12, 2026, introducing Multi-Agent Self-Supervision (MASS), a method for recursive self-improvement (RSI) in which a single shared model plays the role of an entire team of virtual subagents, then learns from its own team's best work.

## Details

- **Core idea**: one shared model solves tasks by acting as a team of subagents, searches for better multi-agent workflows among its own attempts, and uses its own judgment to select the strongest ones; the best team's combined experience is then fed back into training the same shared model
- **Central question**: the authors frame the work as testing "whether a model can learn from the collective intelligence of its own team"
- **Experimental setup**: two rounds of recursive improvement applied to a 27-billion-parameter open-weight model, using synthetic open-ended research tasks
- **Results**: after the second improvement cycle, score-per-output-token reached 1.2x to 1.6x the base model's level across four research benchmarks
- **Key findings**: training only on task-solving data improved performance in both the "optimizer" and "evaluator" roles within the loop; multi-agent trajectories proved more data-efficient for training than single-agent trajectories; optimizer capacity, rather than evaluator capacity, may be the bottleneck limiting the pace of improvement
- **Safety caveat raised by the authors**: because the same model both performs and evaluates the work, shared blind spots could let mistakes pass as progress and get reinforced through further training — the paper calls for careful study of this "homogeneous RSI" so failures can be detected and intervened on
- **Openness**: the work is published as an arXiv paper (2610.12176) with accompanying open-source code on GitHub
- **Authors**: Hyunin Lee, Jinglue Xu, Jeffrey Seely, and Yujin Tang of Sakana AI, with UC Berkeley collaborators Somayeh Sojoudi, Matei Zaharia, and Donghyun Lee

## What happened next

MASS adds to the growing body of work on self-improving AI systems, following Sakana's earlier research into agent and robot trajectory scaling. Because the method is published with a full paper and open code rather than as a product announcement, independent researchers can now attempt to reproduce the 1.2-1.6x gains and probe the safety concerns the authors themselves flagged — particularly whether a model marking its own homework at scale can mask systematic errors rather than catch them.
