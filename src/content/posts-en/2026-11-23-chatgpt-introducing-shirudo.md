---
title: "OpenAI and Cisco launch Shirudo, an open-source Linux runtime for shielding systems during patch rollouts"
description: "Shirudo uses eBPF shields to block exploits on running Linux services without a restart, and is released under BSD 2-Clause."
pubDate: 2026-11-23
category: chatgpt
type: news
tags: [OpenAI, Cisco, Shirudo, eBPF, Security, Codex, Open Source]
source: https://openai.com/index/introducing-shirudo
draft: false
importance: medium
---

OpenAI and Cisco are launching Shirudo, an open-source runtime that helps teams protect Linux systems while they roll out patches. The name is Japanese for "shield."

**The problem it targets:** testing and deploying a patch can take days or weeks, and an exploit and a legitimate request may rely on the same Linux operation, so blocking that operation outright could take a service offline. Teams can test whether a temporary safeguard, called a shield, blocks the vulnerable behavior while letting legitimate requests through. Once an operator approves it, the shield can be deployed while the service keeps running.

**How it works:** Shirudo uses eBPF, a Linux technology that runs small programs at specific points inside the operating system. Four core capabilities are described:

- **Live protection:** shields block vulnerable code paths without a restart, and teams can monitor a proposed shield's effect before enforcing it.
- **Defense at machine speed:** agents get programmable controls to investigate vulnerabilities, build targeted shields and validate them against exploits and real workloads. Security teams control what gets deployed.
- **Trusted deployment:** shields are cryptographically signed and verified before loading, and the Linux eBPF verifier checks them against its safety rules.
- **Hardware-backed verification:** a Trusted Platform Module (TPM) supports a verifiable record of protections being loaded or removed.

**Test result:** in a controlled test, a shield generated with Codex added an input check to Java's Base64 decoder and was attached to a running Elasticsearch process. It blocked a Java4Shell exploit attempt while Elasticsearch kept running.

**Availability:** the code is on GitHub under the BSD 2-Clause license, with BPF programs dual-licensed under BSD and GPL. A VM quickstart, a self-guided lab from Isovalent and a December 15 technical webinar are offered. The companies say they want tested shields to ship alongside vulnerability disclosures. Pricing and production-readiness details were not disclosed.
