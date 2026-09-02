---
title: "Anthropic Launches Enterprise Frontier Safeguards, Built With Goldman Sachs, Stripe, and 100+ Others"
description: "Anthropic introduced Enterprise Frontier Safeguards, letting customers store Claude interaction logs in their own cloud accounts under their own encryption keys while keeping fully automated, cross-session misuse detection, developed with over 100 customers including all nine ARC member banks."
pubDate: 2026-09-01
category: claude
type: news
tags: [Claude, Anthropic, Enterprise, DataPrivacy, Security]
source: https://www.anthropic.com/news/enterprise-frontier-safeguards
draft: false
importance: medium
---

Anthropic launched Enterprise Frontier Safeguards (EFS), a system letting large organizations keep Claude interaction data in their own cloud infrastructure and under their own encryption keys, while still benefiting from fully automated safety monitoring capable of catching sophisticated, multi-session attacks.

## Details

- **Built with over 100 customers**: spanning financial services, healthcare, manufacturing, telecom, law, retail, and the public sector, including all nine member banks of the Analysis and Resilience Center for Systemic Risk (ARC) — Goldman Sachs, Morgan Stanley, Citi, Bank of America, and Wells Fargo among them — plus Comcast, KPMG, Mastercard, Salesforce, Visa, Stripe, Snowflake, Cognition, and Factory
- **Data control**: customers store logs in their own Amazon S3, Azure Blob Storage, or Google Cloud Storage accounts, under their own encryption keys and access policies, with full audit logging under their control
- **Monitoring stays automated**: safety review runs entirely without Anthropic human access, detecting patterns across rolling traffic windows — cyberattacks, credential theft, offensive capability development — and alerting the customer's own team directly for a decision
- **Modular and no extra cost**: customer-owned storage, key management, and automated review can each be opted into independently; Anthropic charges nothing extra, though cloud providers bill for storage and data operations, and model behavior, pricing, and rate limits are unaffected
- **Available now on**: Claude Code, Claude Enterprise, and the Claude Platform, plus Amazon Bedrock, Google's Agent Platform, and Microsoft Foundry; eligible customers get zero data retention on Claude Fable 5 and 5.1 until EFS is fully available to them
- **Customer quotes**: Wells Fargo said it "gives us exactly what we asked for: our logs stay in a Wells-managed environment under Wells-managed keys," while Stripe said it will "retain conversation logs in Stripe's AWS environment"

## What happened next

EFS positions Anthropic to court the most regulation-sensitive enterprise customers — systemically important banks chief among them — by decoupling data custody from model capability, letting organizations run Anthropic's most capable frontier models without ceding physical control of their logs. Access is available now through Anthropic's request form.
