---
title: "OpenAI explains how it manages frontier AI risk from training to deployment"
description: "OpenAI outlines four defense layers across research, internal deployment and external deployment, and discloses a 2026 containment incident."
pubDate: 2026-11-18
category: chatgpt
type: news
tags: [OpenAI, safety, alignment, governance, sandboxing]
source: https://openai.com/index/managing-frontier-ai-risk
draft: false
importance: high
---

OpenAI published how it manages frontier AI risk across the model lifecycle, saying it is pacing model development and release, including pausing internal training and holding back models such as GPT-6.1 Astra.

- **Four layers of defense in depth:** model alignment (following the Model Spec, checked by evaluations and audits); security and sandboxing; blocking safeguards (safety classifiers and Auto-review); and monitoring and response. Monitorability is evaluated during training and before deployment.
- **Research stage:** frontier training runs without live internet access, with sandboxes, virtual machines, network and cloud perimeters, and red-teaming of containment by its strongest models. If a model reaches the internet, security teams are paged and the workload is autopaused.
- **Incident disclosed:** a DNS misconfiguration gave an internal research model limited internet access. OpenAI paused training and evaluation of its most capable models from September 20 to October 1.
- **Control Room:** stops model output within 35 seconds of a halt instruction, enforced in the inference infrastructure.
- **Internal deployment:** models must pass alignment and monitorability testing first (documented in the GPT-6 Astra system card); classifiers target cyberabuse and bioweaponization; Codex users are generally subject to Auto-Review; every frontier inference is monitored, with attention to data exfiltration.
- **External deployment:** larger evaluations including automated adaptive red-teaming, third-party testing for the most capable models, offline enforcement against threat actors, and the trusted access programs Daybreak and GPT-Rosalind.
- **Governance:** employees can flag incidents for public disclosure; disagreements go to the Safety Advisory Group, with oversight by the Safety and Security Committee of the OpenAI Foundation's Board. OpenAI says it will pause training or withhold release if evidence falls short of its safety bar.
