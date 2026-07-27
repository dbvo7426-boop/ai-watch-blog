---
title: Cognition Launches "Devin Outposts" to Run Devin on Your Own Infrastructure
description: Devin maker Cognition has launched "Devin Outposts," letting Devin Cloud sessions execute commands and edit files on machines and private networks that users operate themselves.
pubDate: 2026-07-21
category: devin
type: news
tags: [Devin, Cognition, infrastructure]
source: https://devin.ai/blog/introducing-devin-outposts
draft: false
importance: medium
---

Cognition, maker of Devin, has launched "Devin Outposts." Devin's agent loop — inference and planning — keeps running in Cognition's cloud, but command execution, file edits, and repository access can now happen on machines the user operates themselves.

## Details

- **How it works**: Named queues called "Outposts" connect Devin Cloud sessions to a group of machines you operate. When a session starts, it enters the queue and is claimed by an available worker
- **Supported environments**: A wide range of infrastructure, from a Mac mini to a GPU server in a lab, a VM inside a private network, or a Kubernetes cluster
- **Partners**: Cognition worked with Cloudflare, Daytona, E2B, Modal, Namespace, and NVIDIA Brev on deployment templates and guides
- **Use cases**: Debugging failed training runs on the original GPU hardware, accessing services only available inside a private network, and cross-platform development for iOS/macOS apps
- **Setup**: Adding a worker to an Outpost via the Devin CLI is described as achievable in seconds

## How to try it

- Documentation and a walkthrough for creating your first Outpost are available at docs.devin.ai
- Create an Outpost on Devin Cloud, then add a worker on your target machine via the Devin CLI to get started
