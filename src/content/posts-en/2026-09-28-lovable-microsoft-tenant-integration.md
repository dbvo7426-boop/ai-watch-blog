---
title: "Lovable Apps Can Now Run Inside a Company's Microsoft Tenant via Copilot Managed Runtime"
description: "Lovable partnered with Microsoft to let apps built on its platform deploy directly into a customer's Microsoft Entra tenant, with Entra sign-in, IT governance, and native connectors to Outlook, Teams, SharePoint, and other Microsoft 365 services."
pubDate: 2026-09-28
category: lovable
type: news
tags: [Lovable, Microsoft, Entra, Enterprise, Integration]
source: https://lovable.dev/blog/microsoft-partnership
draft: false
importance: medium
---

Lovable announced a partnership with Microsoft on September 28, 2026 that lets applications built on Lovable run natively inside a company's own Microsoft tenant, using Microsoft's identity and governance systems instead of a separate hosting environment.

## Details

- **How it works**: a user describes an app and Lovable builds it as usual; through Microsoft's Copilot Managed Runtime, the finished app packages and deploys directly into the customer's Microsoft Entra tenant, where employees sign in with their existing work credentials and IT manages it like any other Microsoft application
- **Data stays in Microsoft's ecosystem**: Lovable apps can connect to Outlook, Teams, Excel, SharePoint, OneDrive, Word, PowerPoint, OneNote, Microsoft Fabric, Dataverse, and SQL, with data remaining inside Microsoft's systems rather than being exported elsewhere
- **Authentication and governance**: sign-in runs through Microsoft Entra ID, with admins controlling access by directory membership; published apps show up in the tenant's app inventory, and existing data loss prevention and connector policies are enforced at runtime, with activity flowing into Microsoft's own audit logs
- **Plan availability**: Microsoft 365 connectors and Microsoft Fabric integration are available on all Lovable plans, while workspace sign-in via Entra ID, SSO, SCIM, security scanning, and audit logging are included on Business and Enterprise tiers
- **Status**: Copilot Managed Runtime is currently in public preview, and Microsoft says tenant admin setup, granting consent to the Lovable application and allowing externally built apps, takes about 20 minutes

## What happened next

The integration is Lovable's most direct enterprise governance play yet, aimed squarely at IT departments that would otherwise block AI-built apps for not fitting inside established Microsoft-centric compliance and data-residency policies. By routing app inventory, sign-in, DLP policy, and audit logging through infrastructure IT teams already operate, Lovable is betting that removing this governance friction, rather than adding more app-building features, is what unlocks enterprise-wide adoption of AI-generated software.
