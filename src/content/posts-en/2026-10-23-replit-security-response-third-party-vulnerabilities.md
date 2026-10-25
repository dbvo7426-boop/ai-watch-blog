---
title: "Replit details its response to this week's third-party vulnerabilities"
description: "Replit says it patched base images and tooling, added firewall rules, and is notifying customers who need to republish Node.js, Python, and PHP apps."
pubDate: 2026-10-23
category: replit
type: news
tags: [Replit, Security, Node.js, WAF]
source: https://replit.com/blog/security-vulnerabilities-across-the-internet
draft: false
importance: medium
---

Replit published a rundown of how it is handling a cluster of third-party vulnerabilities disclosed this week. The company says it manages the environment apps run in, so many protections were applied without customer action, though some fixes require republishing apps.

## Details

- **eMudhra CA key issue:** Weak private keys used in a certificate authority signing ceremony could allow TLS certificate spoofing. Replit removed the compromised CA from its base images and says the fix was applied automatically to 95% of published apps, including Node.js. Python tooling was patched; Python apps need to be republished.
- **Node.js:** Disclosed flaws include a Brotli decoder bug that could allow remote code execution. Replit deployed web application firewall (WAF) protections and made patched Node.js versions available. Customers should republish Node.js apps.
- **PHP:** Vulnerabilities that could allow remote code execution. Replit added WAF protections and patched its PHP tooling, and recommends republishing PHP apps.
- **LiteLLM supply chain attack:** Replit says its existing Socket Firewall blocked all malicious package install attempts; no action is required.
- **Linux kernel:** Replit says its microVM architecture prevented exploitation of the disclosed issues, and it will upgrade once a fully fixed kernel is available. No action required.
- **What to do:** Open Security Center, filter for published apps, review outstanding issues, apply patches, then republish. Affected customers are being emailed directly.

## What happened next

The post frames this as a preview of a faster vulnerability cadence, with Replit saying issues will be discovered at a progressively higher pace as AI makes them easier to find. The company says it will invest in proactive mitigation and automate more of its response, and promised a whitepaper on its architectural protections.
