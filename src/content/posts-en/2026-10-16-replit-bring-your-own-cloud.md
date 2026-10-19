---
title: "Replit Launches Bring Your Own Cloud for Enterprises on AWS, Azure, and Google Cloud"
description: "Replit now lets enterprises run the Replit platform, published apps, or exported app images inside their own AWS, Azure, or Google Cloud tenant, offered in three tiers from private preview to early access."
pubDate: 2026-10-16
category: replit
type: news
tags: [Replit, Enterprise, BYOC, Cloud, Security, Deployment]
source: https://replit.com/blog/bring-your-own-cloud
draft: false
importance: high
---

Replit has announced Bring Your Own Cloud (BYOC), which lets enterprise customers run development and production for Replit projects inside their own cloud environment. It supports Amazon Web Services, Microsoft Azure, and Google Cloud. The launch adds to Replit's earlier enterprise work: governance tools, separate development and production databases, and a single-tenant offering. BYOC is aimed at security and compliance teams that would not otherwise approve an AI app builder.

## Details

- **Three deployment options**, each with its own availability:
  - **Full BYOC** (private preview): puts the whole Replit platform in the customer's cloud tenant. That covers compute, storage, the file system, integrations, published-app hosting, and the Agent harness, which handles building, connectors, scheduled agents, publishing, and knowledge work.
  - **BYOC for Published Apps** (early access): Replit keeps running the platform, but published apps are hosted in the customer's cloud. Admins pick the publishing destination for each workspace, and builders still just click "Publish".
  - **Image Exports** (early access): each app is exported as a Docker image, a Terraform file, and an SBOM, so the customer can self-host it. Exported apps never call back to Replit, which makes this option fit restricted environments.
- **Cellular architecture**: Replit groups its infrastructure into isolated units called "cells", and customers can deploy cells in their own cloud. The Agent harness runs inside the cell. Security teams can therefore control which internal resources it reaches and apply outbound controls, and running it next to compute also removes network latency.
- **Private connectivity**: published apps can reach private databases inside the customer's environment. Secure tunnels use two layers of mTLS and connect outbound only, so no public ingress is needed.
- **Encryption**: all storage types are encrypted. Customer-managed encryption keys (CMEK) let the customer grant or revoke Replit's access, but only on agreements that include full physical isolation of the Replit cell.
- **Managed infrastructure**: for BYOC-hosted apps, Replit provisions object storage, caching, message queues, and scheduled jobs through infrastructure as code.
- **Multi-environment**: an organization can run separate cells for different regions or business units (for example, one for an EU unit and one for a US unit). It can also use a cell as a canary or staging environment.
- **Trade-offs with Image Exports**: customers have to supply things Replit normally provides, such as managed auth and connectors. Publishing triggers a customizable security and compliance review.
- **Not disclosed**: pricing, plan tiers, and eligibility beyond "enterprise customers". Interested organizations are directed to Replit's enterprise sales team.

## What happened next

BYOC is Replit's clearest move yet beyond prosumers and into regulated enterprises, where data residency and network isolation usually block adoption of AI app builders. It also widens the gap with Lovable, which still runs mainly as a hosted SaaS. With the three tiers, a company can start by self-hosting exported apps and later move the whole Agent harness into its own cloud. The main open questions are how quickly Full BYOC leaves private preview and what it will cost.
