---
title: "Black Forest Labs Open-Sources FLUX 3 Action, a 7B 'World Action Model' for Robot Control"
description: "Black Forest Labs released FLUX 3 Action, an open-weight 7B model derived from the FLUX 3 backbone that jointly predicts future video and robot actions, reporting 93.3% success on real-robot tasks in a third-party evaluation."
pubDate: 2026-09-23
category: flux
type: news
tags: [FLUX, BlackForestLabs, Robotics, OpenWeights, NVIDIA, WorldModel]
source: https://bfl.ai/blog/flux-3-action
draft: false
importance: medium
---

Black Forest Labs (BFL), best known for its FLUX image models, released FLUX 3 Action (F3A) on September 23, 2026: an open-weight, 7-billion-parameter "world action model" for robot control. Built on the FLUX 3 backbone, it predicts future video frames and robot actions jointly, and it is the first FLUX 3 model to ship with open weights.

## Details

- **Release contents**: Base, guidance-distilled and step-distilled checkpoints, weights on Hugging Face (the `flux-3-action` collection), code on GitHub, and a technical report covering pretraining, midtraining, fine-tuning and inference optimization
- **Simulation benchmark (RoboLab-120)**: 38.3% success for the single-step base checkpoint versus 36.8% for NVIDIA's Cosmos 3 Nano (16B); the guidance-distilled checkpoint reaches about 42%
- **Real-robot test**: In an evaluation by Positronic Robotics on a Franka arm across 10 DROID tasks, F3A succeeded on 28 of 30 attempts (93.3%), versus Cosmos 3 Nano 27/30, DreamZero 20/30 and π0.5 13/30
- **Speed**: 1.34x to 2.28x faster per second of robot motion than π0.5 on workstation and datacenter GPUs (though slower on consumer GPUs such as the RTX 5090), and 1.52x to 3.95x faster than Cosmos 3 Nano in FP8. Its prediction horizon is 2.13 seconds, versus 1.0 second for π0.5
- **Hybrid with a reasoning model**: Paired with GPT 6 Astra handing off to F3A as a fast policy, the setup reached 90% success at an estimated $8.77 and 8 minutes per success, which BFL says is 29% cheaper and 40% faster than the best alternative configuration
- **Ecosystem**: Local deployment support including NVIDIA Jetson, Hugging Face and LeRobot integration; trained on NVIDIA GB200 systems
- **Caveats**: BFL notes the model cannot solve every task on its own, and its game-playing demos were sped up after the fact rather than running in real time. The blog does not detail licensing terms

## What happened next

F3A is the most concrete result yet of BFL's July pitch that FLUX 3 is a general "real world model" rather than just an image generator, following FLUX 3 Video and the FLUX-mimic robotics collaboration. Three weeks later, BFL returned to its core audience with the open-weight FLUX 3 Image Klein. Taken together, the two releases show BFL stretching the same FLUX 3 backbone from creative imagery into embodied AI, while keeping the open-weight strategy that built its community.
