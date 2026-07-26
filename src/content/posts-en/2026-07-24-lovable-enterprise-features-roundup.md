---
title: Lovable Bundles Five New Enterprise Features — Reusable Authentication, Publishing Controls, a Workspace Insights Dashboard, and More
description: Lovable has announced a bundle of enterprise governance features, including reusable authentication that shares login state across apps in a workspace, granular publishing controls, and a Workspace Insights dashboard summarizing security status across projects.
pubDate: 2026-07-24
category: lovable
type: news
tags: [Lovable, enterprise, security, authentication]
source: https://lovable.dev/blog/enterprise-features-july-roundup
draft: false
importance: medium
---

Lovable has announced a bundle of new enterprise governance and security features. Alongside the AIUC-1 certification announced on July 22, the company has shipped five additional capabilities: reusable authentication, publishing controls, a workspace insights dashboard, automated security scanning, and abandoned-app cleanup.

## Details

- **Reusable Authentication**: Apps within a workspace can now automatically recognize users already logged in via SSO, Google, or email. This removes the need for separate login screens across internal tools while maintaining security through short-lived signed tokens. Lovable calls it "one of our most requested features"
- **Publishing Controls**: Admins can now precisely control app accessibility — restricting it to anyone, workspace members only, or specific invited guests — while keeping published-app access cleanly separated from access to the underlying project (and its source code)
- **Workspace Insights**: A dashboard giving admins a unified view of all workspace projects, prioritized by review urgency. It supports filtering by security findings, ownership, and lifecycle status, searching by project name, and exporting data to CSV for audits
- **Automated Security Scanning**: A two-tier system — a "Basic Scan" that runs automatically before publishing in 10-15 seconds, and a "Deep Scan" offering a full AI-powered code audit in 2-4 minutes — covering access control, endpoint protection, code vulnerabilities, and project-specific issues
- **Abandoned App Cleanup**: Administrative tooling that runs daily checks to identify inactive apps, automatically notifying owners and eventually soft-deleting apps with a recovery window
- **AIUC-1 certification**: The roundup also recaps the AIUC-1 certification announced on July 22, making Lovable the first coding agent platform to earn it (previously covered)

## How to try it

- These features are aimed mainly at Enterprise plan administrators and can be configured from the admin console
- See Lovable's official blog post at lovable.dev/blog/enterprise-features-july-roundup for full details
