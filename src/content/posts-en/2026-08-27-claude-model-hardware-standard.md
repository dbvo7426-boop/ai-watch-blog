---
title: "Anthropic Previews a Standard for Letting Claude Control Lab Hardware Directly"
description: "Anthropic and HHMI Janelia unveiled a research preview of the Model Hardware Standard, a shared spec that lets AI agents operate lab and manufacturing devices in parallel, cutting integration time from weeks to hours."
pubDate: 2026-08-27
category: claude
type: news
tags: [Claude, Anthropic, ModelHardwareStandard, AI agent, MCP, Robotics]
source: https://www.anthropic.com/news/model-hardware-standard-research-preview
draft: false
importance: medium
---

Anthropic opened a research preview of the Model Hardware Standard (MHS) on August 27, 2026, a shared specification that lets AI agents like Claude discover and safely control multiple physical devices at once, from lab robots to microscopes. The standard grew out of a collaboration with HHMI Janelia Research Campus and is aimed at cutting the time it takes to wire an AI system into new hardware from weeks or months down to hours or minutes.

## Details

- **Standardized drivers**: MHS translates between operating systems and hardware through simple "read" and "write" commands, so agents don't need custom integration code for every device
- **Model-agnostic, protocol-friendly**: works with any device that has a programmable interface, and layers on top of existing tools including the Model Context Protocol, command-line interfaces, and code/API access
- **Early partners**: Genentech, Carnegie Mellon University, the University of Washington, QuEra Computing, Tetsuwan Scientific, and HHMI Janelia have already tested it across biotech, robotics, quantum computing, and microscopy
- **Concrete results**: Genentech automated protein assays end-to-end; Carnegie Mellon cut dose-response experiments to roughly a third of their previous duration after wiring up three incompatible instrument interfaces in eight hours; QuEra used Claude to raise laser-locking recovery success on a quantum computer from 58% to 99.3%
- **Safety guardrails**: MHS enforces device-level limits (blocking excessive laser power or collision risks), and Anthropic says it will run additional physical-safety evaluations before considering an open-source release
- **Acknowledged limits**: researchers noted Claude still struggles to reason about some physical/chemical constraints, such as initially retrying rather than adjusting technique when a protein sample formed bubbles

## What happened next

Anthropic is inviting researchers, instrument manufacturers, and other practitioners to join a waitlist for the preview at modelhardwarestandard.com rather than releasing it broadly. The company says a full open-source release will wait until it has built out more comprehensive physical-safety evaluations and deployment guidance, positioning MHS as an early but deliberate step toward AI agents that work with the physical world, not just software.
