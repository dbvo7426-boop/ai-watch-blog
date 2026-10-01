---
title: "Runway Unveils Praxis-1, an Open-Weight World-Action Model for Robots"
description: "At its first AI Summit in San Francisco, Runway introduced Praxis-1, which turns the video pretraining behind its world models into control policies for physical robots, with early tests across bimanual arms, six-axis arms, and mobile bases."
pubDate: 2026-09-30
category: runway
type: news
tags: [Runway, Praxis-1, Robotics, World Model, Open Weights]
source: https://runway.com/research/introducing-praxis-1
draft: false
importance: medium
---

Runway introduced Praxis-1 on September 30, 2026 at its first Runway AI Summit in San Francisco, extending the company's video-generation research into physical robot control for the first time. Runway Research describes it as an open-weight "world-action model."

## Details

- **Core idea**: Praxis-1 repurposes the large-scale video pretraining behind Runway's general world models, teaching a policy about motion, object interactions, and physical plausibility from web video before fine-tuning it on robot-specific data, similar to how language models benefit from text pretraining
- **Performance claims**: policies pretrained on ordinary web video reached a placement error of about 16.1 cm versus 16.0 cm for policies trained on teleoperated robot footage across 93 evaluation pairs, and errors dropped to roughly 12 cm after fine-tuning
- **Simulation accuracy**: Runway reports a 0.95 correlation between how policies perform inside its simulated world model and how they perform on real hardware
- **Early partners testing it**: Noble Machines (bimanual manipulation), Standard Bots (six-axis RO1 arm), and Ultra (mobile base systems), covering distinct robot embodiments without retraining from scratch
- **Demonstrated tasks**: multi-step sequences such as approaching a shelf, retrieving an object, and placing it, across rigid, cluttered, transparent, and deformable objects
- **Release plan**: Runway intends to release Praxis-1 with open weights rather than keep it closed, framing the choice around U.S. leadership in physical AI and giving hardware developers more flexibility

## What happened next

Praxis-1 remains in private testing with its three launch partners, with Runway saying public weights are coming "in the next few months" rather than immediately. The announcement marks Runway's clearest move yet from pure content generation into physical AI and robotics, an area it had hinted at with earlier world-model research, and it came the day after Runway separately joined the OpenAI Marketplace as a launch partner for its creative tools.
