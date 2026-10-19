---
title: "Google Antigravity Adds Remote Control to Drive Agent Sessions from Any Browser"
description: "Antigravity's new Remote Control feature lets developers watch and steer agent sessions on their laptops, desktops, or cloud servers from a web browser, with multi-instance management and push notifications."
pubDate: 2026-08-21
category: antigravity
type: news
tags: [Google, Antigravity, Remote Control, Agents, Developer Tools]
source: https://antigravity.google/blog/remote-control-for-antigravity
draft: false
importance: medium
---

Google has added Remote Control to Antigravity, its agent-first development platform. The feature lets developers connect to Antigravity sessions running on their other machines, such as laptops, desktops, and cloud servers, and drive them from a web browser. Each session keeps its local files, workspaces, build tools, credentials, and environment variables. Google's pitch is that long-running agent tasks shouldn't keep developers stuck at their desks.

## Details

- **What it does**: a browser interface that Google calls "a secure window into your workspace". From it, developers can monitor progress, review changes, and run commands on a remote Antigravity instance.
- **Multi-instance management**: different machines can handle different work, for example a local laptop for UI work and a cloud Linux server for back-end tasks. Developers can switch between instances and manage several environments and agents at once. The example dashboard shows instances named "gcp-linux-server-env" and "local-laptop-ui-env".
- **Local context preserved**: a session started on one machine can be continued from another device without rebuilding the environment.
- **Push notifications**: users get an alert when an agent finishes a turn and needs input.
- **Why it matters**: Google points to large refactors, test suites, and build diagnosis as tasks that can run for a long time. Until now, developers had to wait at their desks or leave without knowing when the agent would finish.
- **Access**: launched from antigravity.google, with documentation under "Antigravity 2.0 Remote Control". The machines being controlled run the Antigravity app.
- **Not disclosed**: plan requirements, pricing, supported platforms, and rollout schedule.

## What happened next

Remote Control arrived the day after Antigravity's Gemini Enterprise launch and IDE extensions. It continues a wider trend toward agents that run for long periods while developers supervise them from wherever they are. Cursor shipped a similar remote-control feature for local agents in October, and GitHub Copilot's remote control has gained enterprise policies to limit it to managed devices. Expect enterprise admins to ask for the same kinds of controls for Antigravity.
