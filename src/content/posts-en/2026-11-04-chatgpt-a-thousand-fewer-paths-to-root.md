---
title: "OpenAI pipeline found 948 Linux kernel root exploits and drafted patches"
description: "An autonomous pipeline analyzed 2,308 candidate kernel findings, reproduced 1,724 vulnerabilities and built 948 local privilege escalation exploits, with API costs reported per stage."
pubDate: 2026-11-04
category: chatgpt
type: news
tags: [OpenAI, Security, Linux kernel, Daybreak, Patch the Planet]
source: https://openai.com/index/a-thousand-fewer-paths-to-root
draft: false
importance: high
---

OpenAI published research on a prototype pipeline, run in a controlled environment and built around an upcoming cyber model, that looks for flaws in the Linux kernel. It identified and analyzed 2,308 candidate findings, dynamically reproduced 1,724 vulnerabilities, and produced 948 local privilege escalation (LPE) exploits that could give an unprivileged local user root. Human researchers reviewed the outputs, and OpenAI developed candidate patches for maintainers, starting with critical issues as the kernel community advised and continuing with Patch the Planet partners.

## Pipeline and results

- **Discovery:** Scout agents picked 5,034 audit targets (about 2.8 million lines, roughly 7% of the kernel) for $3,426 in API credits. Analyst agents then produced 2,308 deduplicated candidates in 12 hours for $316,549.
- **Validation:** Triage agents wrote proofs of concept and ran them in a VM with KASAN. In 30 hours they reproduced 1,724 vulnerabilities (about 74.7%) for $73,330. Only 3.1% of candidates reflected incorrect model analysis.
- **Exploitability:** After screening to 313 information-leak and 1,238 LPE candidates, exploit-development agents worked in VMs with SMEP, SMAP, KASLR and HARDENED_USERCOPY enabled. They produced 291 information-leak proofs of concept and 1,169 working LPE exploits. After variant analysis, 948 distinct patches correspond to 948 unique LPEs. Successful exploits averaged $359 in credits; the exploitation stage cost $775,929 in total.
- **Patches and review:** Each validated bug gets a generated patch, and a human reviews the exploit, patch and severity before reporting. OpenAI says it has already sent hundreds of reports and patches for critical issues.

## Findings

- **Maintainer speed:** The scan used the latest kernel in mid-October 2026. After the 10-day run, 61 LPEs were already patched upstream, 43 had staging patches and 299 were being discussed publicly.
- **Stronger models find more:** In late July, GPT-5.6 Sol found and exploited 166 unique LPEs for $513,690; the newer cyber model found 948 for $1,213,430.
- **Novel techniques:** In a sample of 166 exploits, OpenAI saw 10 exploitation techniques it believes are new, and external kernel experts said they were new to them too. Details were withheld for safety.
- **Cost versus bounties:** Applying historical Pwn2Own and TyphoonPWN payouts ($20,000 and $70,000) to 948 exploits gives a hypothetical $18.9M to $66.3M, roughly 16x to 55x the pipeline cost. Against Google kernelCTF's hardened target, a 112-hour run costing about $32,936 yielded 21 LPE exploits and 25 information-leak proofs of concept, worth around $1.5M in bounties if accepted.
- **Wrong 0-day:** In an early run, 20 of 200 reported successes had reached root through a different 0-day than the assigned one, so OpenAI added an independent check.
- **Lighter orchestration:** Supplying 103 techniques raised GPT-5.5 Cyber's success from 76.2% to 88.9% on 63 candidates, but added only 1.5 points for GPT-5.6 Cyber.
- **Testing infrastructure:** The prototype also found and exploited a QEMU TCG bug that was fixed upstream but not in the release build used.

OpenAI says the reported costs are closer to an upper bound, since the work focused on methodology rather than cost.
