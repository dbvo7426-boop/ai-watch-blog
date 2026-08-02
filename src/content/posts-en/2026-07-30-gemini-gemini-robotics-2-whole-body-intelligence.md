---
title: "Google DeepMind Unveils Gemini Robotics 2, a Vision-Language-Action Model for Whole-Body Humanoid Control"
description: "Google DeepMind has announced Gemini Robotics 2, a vision-language-action (VLA) model, alongside a lightweight on-device variant. Together they let humanoid robots handle everything from walking to fine finger dexterity."
pubDate: 2026-07-30
category: gemini
type: news
tags: [Gemini, Google DeepMind, Robotics, Embodied AI]
source: https://deepmind.google/blog/gemini-robotics-2-brings-whole-body-intelligence-to-robots/
draft: false
importance: high
---

Google DeepMind has unveiled Gemini Robotics 2, a vision-language-action (VLA) model that drives whole-body control for robots, alongside a lightweight variant called Gemini Robotics On-Device 2 that runs without a network connection. Combined with the embodied reasoning model Gemini Robotics ER 2 announced the same day, the three-model lineup gives humanoid robots "whole-body intelligence" — the ability to walk, crouch, and manipulate objects at the same time.

## Details

- **Gemini Robotics 2 (VLA)**: A vision-language-action model that converts visual and language input into motor control. It supports full humanoid control "from feet to fingertips," handling advanced manipulation across multiple robot embodiments and gripper types
- **Gemini Robotics On-Device 2**: An efficiency-focused VLA that runs locally on the robot itself with no network connectivity. Using motion-transfer techniques, it can adapt to entirely new robot embodiments with just a few hours of data and fewer than 200 examples
- **Division of labor with Gemini Robotics ER 2**: The embodied reasoning model announced the same day handles high-level decision-making, multi-step task planning, and multi-robot collaboration, while Gemini Robotics 2 executes the actual motor control
- **Benchmark results**: 92% success on an "unscrew bulb" task using the multi-fingered SharpaWave hand, 89.6% on precise insertion tasks with the Franka Duo gripper, and 68.4% on picking objects up off a table with Apptronik's Apollo 2 humanoid. Multi-finger dexterous manipulation remains one of the harder capabilities to master
- **Partners**: Demonstrated across robots from Apptronik (Apollo 2), Boston Dynamics, Agile Robots, and Franka's Duo platform
- **Safety framework**: Introduces a new safety benchmark called ASIMOV-Agentic, which measures unsafe-tool-use refusal and task-feasibility prediction
- **Availability**: The VLA model and On-Device variant are available to early-access partners via an application form, with sign-ups also open for a Trusted Tester program (Gemini Robotics ER 2 is separately available through Google AI Studio and in private preview on the Gemini Enterprise Agent Platform)
- **Announcement**: Published July 30, 2026, by Google DeepMind's Carolina Parada, as part of the same day's broader robotics announcement alongside Gemini Robotics ER 2

## How to try it

- The core VLA model and On-Device 2 are not yet publicly available; interested teams can apply for early access or sign up for the Trusted Tester program
- Watch for follow-up detail on ASIMOV-Agentic benchmark results and improvements to multi-finger dexterous manipulation as the program expands
