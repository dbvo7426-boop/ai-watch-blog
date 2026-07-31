---
title: "Google DeepMind Unveils Gemini Robotics ER 2, an Embodied Reasoning Model for Multi-Robot Collaboration"
description: "Google DeepMind has announced Gemini Robotics ER 2, an embodied reasoning model for robots that tracks task progress from live video and lets different robots hand off work to one another. It's available via the Gemini API and more."
pubDate: 2026-07-30
category: gemini
type: news
tags: [Gemini, Google DeepMind, Robotics, Embodied AI]
source: https://blog.google/innovation-and-ai/models-and-research/google-deepmind/gemini-robotics-er-2/
draft: false
importance: high
---

Google DeepMind has unveiled Gemini Robotics ER 2, the latest version of its embodied reasoning model that acts as a high-level "brain" for robots. Beyond real-time spatial reasoning and multi-step task planning, the new model adds the ability for different types of robots to share semantic understanding and hand off tasks to one another.

## Details

- **Overview**: The latest version of Google DeepMind's embodied reasoning model, which handles high-level cognition for robots — performing real-time spatial reasoning and task planning to serve as a robot's "brain" in physical environments
- **Video understanding and progress tracking**: Watches continuous video feeds to monitor how a task is progressing and adapts if something goes wrong. For complex tasks like tightening a light bulb or tying a trash bag, it can judge whether a step is truly complete before moving to the next one
- **Tool orchestration**: Coordinates multiple control interfaces — including Vision-Language-Action (VLA) models and navigation APIs — while streaming multimodal data such as video, audio, and text. It integrates with the Gemini Live API for the low latency that physical robot control demands
- **Multi-robot collaboration**: Different types of robots can now communicate through shared semantic understanding to hand off tasks and complete workflows that no single robot could finish alone. A demo showed Apptronik's Apollo 2 and Franka's F3 Duo working together
- **Enhanced spatial intelligence**: Improvements include better success/failure detection from video feeds, more generalized reading of instruments like digital displays, scales, and thermometers, and stronger visual question-answering
- **Performance**: Achieves 57.4% accuracy on five-level progress classification, and 91.3% accuracy with a 0.96-second mean absolute distance on moment-finding — running at roughly 4x the speed of competing models. On safety, it outperforms the previous generation (ER 1.6) on safety instruction following and human-proximity detection, successfully halting robots when people get close
- **Availability**: Available through the Gemini API and Google AI Studio, with a private preview also starting on the Gemini Enterprise Agent Platform
- **Announcement**: Announced July 30, 2026, by Google DeepMind's Steven Hansen (Senior Staff Software Engineer) and Peng Xu (Staff Software Engineer)
- **Demos**: Google also showed demos using Boston Dynamics' Spot, retrieving objects based purely on natural-language commands

## How to try it

- Call Gemini Robotics ER 2 through the Gemini API or Google AI Studio
- Sample code is available on GitHub, which is a good starting point for testing the model's behavior
- Teams considering enterprise deployment can look into joining the private preview of the Gemini Enterprise Agent Platform
