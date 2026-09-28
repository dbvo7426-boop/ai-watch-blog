---
title: "Sakana AI's SAIL Boosts Robot Trajectory Success From 25% to 73% via Test-Time Scaling"
description: "Sakana AI and the University of Tokyo unveiled SAIL, a method that uses iterative refinement and search at inference time to make vision-language models generate far more reliable robot trajectories, accepted to IROS 2026."
pubDate: 2026-09-28
category: sakana
type: news
tags: [Sakana AI, Robotics, Vision-Language Models, Test-Time Scaling, Research, IROS 2026]
source: https://pub.sakana.ai/sail/
draft: false
importance: medium
---

Sakana AI published research on September 28, 2026 introducing SAIL (Scaling In-Context Imitation Learning), a method developed with a University of Tokyo intern that dramatically improves how reliably vision-language models (VLMs) generate robot trajectories by spending more compute at inference time rather than training time. The work, titled "Test-Time Scaling through Iterative Refinement for VLMs as Robot Trajectory Generators," has been accepted to IROS 2026 and is available as a preprint on arXiv.

## Details

- **The problem**: a foundation model does not reliably produce a usable robot trajectory in a single generation attempt — context sensitivity and sampling variability mean even a broadly correct action can fail from small motion-target errors
- **The method**: a policy VLM generates candidate trajectories conditioned on a handful of retrieved successful demonstrations; an evaluation VLM then judges task completion by analyzing simulated execution videos, and step-level feedback drives a Monte Carlo Tree Search to revise the most promising candidates
- **Simulation results**: across six manipulation tasks, success rate rose from 25% with a single generated trajectory to 73% when the search budget was expanded to 45 candidates
- **Real-world validation**: on a physical LeRobot SO-101 arm doing block placement, SAIL succeeded in 5 of 6 trials using 15 trajectory candidates
- **Authors**: Makoto Sato and Yusuke Iwasawa of the University of Tokyo (Sato completed the work during an internship at Sakana AI), with Yujin Tang and So Kuroki of Sakana AI
- **Venue**: accepted for presentation at IROS 2026, with the preprint posted at arXiv:2603.08269

## What happened next

SAIL fits into Sakana AI's broader push into robotics and "Physical AI," an area the company has been emphasizing since Jürgen Schmidhuber joined as Chief Scientific Advisor on September 24 to help lead its Recursive Self-Improvement Lab and its work on world models. Rather than betting on ever-larger models trained once, SAIL demonstrates a test-time scaling approach already popular in language-model reasoning now applied to robot control, letting existing foundation models trade extra inference compute for meaningfully higher real-world task success without additional training.
