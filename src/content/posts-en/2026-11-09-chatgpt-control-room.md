---
title: "OpenAI details Control Room, a system that can halt model workloads across its research infrastructure within 35 seconds"
description: "Control Room tracks every research inference workload and denies further model output once a job is stopped. It fails closed, and the maximum stop delay is 35 seconds."
pubDate: 2026-11-09
category: chatgpt
type: news
tags: [OpenAI, AI Safety, Control Room, Misalignment, Infrastructure]
source: https://openai.com/index/control-room
draft: false
importance: medium
---

OpenAI described Control Room, a central system that tracks model workloads across its research infrastructure and can quickly stop them when safety or security concerns arise. OpenAI says it is already deployed across research infrastructure, where the need is greatest.

## Details

- **Coverage:** every research inference workload, including agentic sampling for model training and evaluation and data processing. Each research workload that does agentic inference must be tied to an approved safety case.
- **Speed:** the maximum time from receiving a stop instruction to being unable to make further progress is 35 seconds. The lag comes from a caching layer for inference authorization, and OpenAI says it is working to bring it to zero.
- **How it works:** a workload requests a job_id from Control Room. Each time it samples tokens, the inference engine asks Control Room for permission, passing the job_id. If the job was terminated, the request is denied and no further output is produced.
- **Why at the inference layer:** workload code changes often and is owned by many teams, while only a small number of inference code paths exist across OpenAI research. OpenAI also runs agentic and programmatic sweeps to check that nobody launches rogue engines with Control Room disabled.
- **Fails closed:** if the Control Room service goes down or is disabled, including by tampering, all inference requests are denied until it recovers. This is rolled out to all frontier model research workloads now and to the remaining research workloads over the next few days.
- **Monitoring link:** all frontier reinforcement learning jobs run with a monitor model that can alert on problems and ask Control Room to stop the job. OpenAI cites a recent DNS-related incident that a monitor caught.
- **Not covered:** the external model-serving stack is already more centralized, with a separate capability to take down deployments quickly.

OpenAI says it will keep strengthening and expanding the system over the coming months.
