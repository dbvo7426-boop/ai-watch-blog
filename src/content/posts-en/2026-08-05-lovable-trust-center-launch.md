---
title: "Every Lovable App Now Gets an Automatic Trust Center — a Public Security Page Showing Live Controls"
description: "Lovable now automatically generates a 'trust center' security page for every published app, listing live security controls such as HTTPS/TLS enforcement, dependency vulnerability scanning, and access-control status, aimed at businesses, investors, and IT teams evaluating an app's safety."
pubDate: 2026-08-05
category: lovable
type: news
tags: [Lovable, security, trust center, enterprise]
source: https://lovable.dev/blog/trust-centers-for-business
draft: false
importance: medium
---

Lovable announced that every app published on its platform now automatically gets a "trust center" — a dedicated public security page at the app's own address (`YOURAPPURL/.well-known/trust.html`) that shows which security controls are actually live, without requiring the team to hire security staff or commission a manual audit.

## Details

- **What it solves**: Businesses adopting new software typically need someone to vet its security first, which historically required dedicated security hires, third-party audits like SOC 2, and maintained documentation — resources most small teams don't have. Lovable's post notes "a two-person company shipping a product had no way to show it took security seriously"
- **Connection and browser security shown**: HTTPS enforcement, TLS certificate validation, HSTS headers, protections against MIME sniffing and clickjacking, Content Security Policy headers, cookie security, and prevention of insecure resource loading
- **Dependencies and deployment shown**: Automated vulnerability scanning against Google's OSV database, a software bill of materials in CycloneDX format, dependency inventory, deployment traceability, and health monitoring status
- **Access control shown**: Database authorization review status and row-level security status
- **Security scanning shown**: Automated remediation status and Aikido security assessment results, where applicable
- **Audience**: Aimed at three groups evaluating an app — customers checking data safety, investors doing due diligence, and corporate IT teams assessing whether to roll the app out internally
- **Important caveat**: Lovable is explicit that the trust center is informational, not a certification: "It is a page that shows your certifications and observed controls. It does not mean your business is automatically secure or compliant"
- **Context**: The launch follows Lovable's July 24 enterprise-features bundle (reusable authentication, publishing controls, workspace insights, automated scanning) and its AIUC-1 certification announced July 22, continuing a push toward enterprise trust and governance tooling

## How to try it

- Trust centers are generated automatically for every published Lovable app — no separate setup is required
- Visit any published app at its `/.well-known/trust.html` path to view its trust center
- See Lovable's official blog post at lovable.dev/blog/trust-centers-for-business for full details
