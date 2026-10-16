---
title: "Perplexity Open-Sources SPACE, the Sandbox Platform Behind Computer"
description: "Perplexity has open-sourced SPACE, the in-house sandbox platform that has powered every Computer agent session since July 2026, offering isolated VMs, snapshot-based recovery, and untrusted-sandbox credential controls as a free foundation for building safer autonomous agents."
pubDate: 2026-10-15
category: perplexity
type: news
tags: [OpenSource, Computer, Infrastructure, Security, AI agent]
source: https://perplexity.ai/hub/blog/open-sourcing-space
draft: false
importance: high
---

Perplexity has open-sourced SPACE, the sandbox platform it built to run the execution environments behind its Computer agent product, giving outside developers a production-tested foundation for isolating autonomous agents.

## Details

- **What it is**: SPACE runs each agent sandbox in a small virtual machine with its own operating system, creating a hard boundary between the agent's work and the host system, with a central control plane handling creation, pausing, resuming, and removal
- **Untrusted-sandbox model**: network access and platform-held credentials are managed outside the sandbox itself, so agents can reach authorized services without those credentials ever being stored inside the environment the agent operates in
- **Snapshots and checkpoints**: frequent file snapshots and full-environment checkpoints preserve progress across interruptions; SPACE stores only incremental changes rather than copying whole environments, making it cheap to create, restore, and branch sandboxes
- **Track record**: Perplexity launched Computer in February 2026, replaced a commercial sandbox provider with SPACE in July 2026, and SPACE has since handled millions of sandbox creations per day across all Computer sessions
- **Performance**: Perplexity reports sandbox creation 3 to 5 times faster than its previous commercial provider, measured on the same production traffic
- **Security testing**: in Perplexity's own published evaluation, agents made 108 attempts to escape the VM to the host and none succeeded; some attempts did find ways around network restrictions, which Perplexity says it has since fixed, with no further successful bypasses in follow-up testing
- **Related tools**: SPACE joins other open-source releases from Perplexity's Secure Intelligence Institute, including BrowseSafe (detecting malicious instructions hidden in web pages), Numbat (detecting and preventing dangerous agent behavior on computers, released in July), and Bumblebee (scanning developer machines for risky packages and configurations, released in May)
- **Deployment partners**: Akamai has already tested and launched SPACE on its cloud and is working to bring it to customers; Crusoe is adding it to its Managed AI Services portfolio; CoreWeave has published setup guidance for evaluating SPACE on its CKS platform
- **Availability**: the code is on GitHub at perplexityai/SPACE, with documentation at space.docs.perplexity.ai

## What happened next

Perplexity frames the release around a core argument: model-level safeguards alone aren't enough, because agents pursuing entirely legitimate tasks can still cross security boundaries while working around missing files, failed requests, or permission denials — so independent, system-level controls are needed regardless of what the model decides to do. By open-sourcing the infrastructure that has already absorbed millions of daily sandbox creations in production, Perplexity is positioning SPACE as a ready-made safety layer for other companies building autonomous agents, backed by early cloud-provider partnerships with Akamai, Crusoe, and CoreWeave.
