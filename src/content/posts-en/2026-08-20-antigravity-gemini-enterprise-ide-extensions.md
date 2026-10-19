---
title: "Google Antigravity Joins Gemini Enterprise and Launches Extensions for VS Code, JetBrains, Xcode, and More"
description: "Google Antigravity is now included in eligible Gemini Enterprise Standard and Plus licenses with admin controls for budgets, sandboxing, and audit logs. Google also launched Antigravity extensions for VS Code, Visual Studio, JetBrains, Zed, and Xcode."
pubDate: 2026-08-20
category: antigravity
type: news
tags: [Google, Antigravity, Gemini Enterprise, IDE, VS Code, JetBrains, Xcode]
source: https://antigravity.google/blog/antigravity-enterprise
draft: false
importance: high
---

Google made two related Antigravity announcements on August 20, 2026. First, Google Antigravity, its agent-first development platform, is now included in eligible Gemini Enterprise subscriptions. Second, Google launched Antigravity Extensions, which bring Antigravity's agents into the editors developers already use. Antigravity had been announced for the Gemini Enterprise Agent Platform at Google I/O in May. This launch makes it available to enterprise developers with no separate license.

## Details

- **Enterprise availability**: Antigravity is included in eligible Gemini Enterprise **Standard** and **Plus** licenses, starting the day of the announcement. No add-on license or standalone account is required.
- **Sign-in**: developers use their existing enterprise identity. Every surface supports Workforce Identity Federation (WIF) and Application Default Credentials (ADC), so nobody has to set up API keys by hand.
- **Surfaces**: the IDE extensions, the CLI, and the Antigravity 2.0 desktop app.
- **Admin controls**:
  - Workspace sandboxing, with limits on browser and MCP server permissions
  - Monthly budget thresholds in Google Cloud Billing for projects, teams, and individuals, with shared token pools so unused quota isn't wasted
  - Optional overages with strict caps, so running workflows aren't cut off
  - A single toggle for audit logging that records prompts, agent tool executions, and generated artifacts
- **Data handling**: agent activity stays within the enterprise boundary under the Google Cloud Terms of Service. Google says customer code is never used to train foundation models, and sessions follow the organization's IAM policies and VPC Service Controls.
- **IDE extensions**:
  - **VS Code**: available on the VS Code Marketplace
  - **Visual Studio** (including Visual Studio 2026): available on the Visual Studio Marketplace
  - **JetBrains**: IntelliJ-based IDEs version 2026.2.1 or later (IntelliJ IDEA, PyCharm, WebStorm, GoLand, CLion, Rider, and others)
  - **Zed**: one-click install
  - **Xcode**: set up through the Intelligence settings panel in Xcode 27 beta 6 or later, covering macOS, iOS, and iPadOS development
- **Extension access**: individual developers can sign in with a Google account on any Antigravity plan, including the free tier. Enterprise sign-in works through Gemini Enterprise or Google Cloud project credentials. Enterprise support for JetBrains and Zed is still in Preview.
- **Other updates**: Google says Antigravity 2.0 has gained multi-root workspaces and scoped permissions since its I/O launch.
- **Customer claim**: AirAsia says its teams use Antigravity to write more than 50% of their production QA code. Accenture, CGI, Cognizant India, and Deloitte also gave supporting statements.
- **Not disclosed**: regional availability and any change to Gemini Enterprise pricing.

## What happened next

Including Antigravity in existing Gemini Enterprise seats takes away the procurement step that slows enterprise adoption of tools like Cursor or Claude Code. Google can now sell agentic coding as part of a license that many companies already pay for. The IDE extensions matter too. Antigravity started as a standalone agent-first app and later added a CLI. Shipping into VS Code, JetBrains, and Xcode means developers can use its agents without changing editors. The next day, Google added Remote Control, which lets users drive Antigravity sessions on other machines from a browser.
