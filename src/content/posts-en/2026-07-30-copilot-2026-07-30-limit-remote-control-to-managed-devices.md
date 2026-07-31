---
title: "GitHub Copilot Adds a New Setting to Limit Remote Control to Managed Devices"
description: "GitHub has added a new `remoteControl` enterprise managed setting that lets administrators restrict which devices can host remotely controlled Copilot sessions, giving organizations finer-grained control over their security policy."
pubDate: 2026-07-30
category: copilot
type: news
tags: [Copilot, GitHub, Security, Enterprise, IT Administration]
source: https://github.blog/changelog/2026-07-30-limit-remote-control-to-managed-devices
draft: false
importance: low
---

GitHub has added a new `remoteControl` enterprise managed setting for its remote control feature, which lets users operate Copilot sessions across platforms like mobile, web, and VS Code. The new setting lets administrators restrict which devices are allowed to host those remotely controlled sessions.

## Details

- **Background**: Remote control lets users operate a Copilot session across multiple platforms, including mobile, web, and VS Code
- **New `remoteControl` setting**: A new enterprise managed setting that gives administrators the ability to define exactly which devices are eligible to host remote control sessions
- **Three configurable modes**:
  - `requireSSO` — enforces single sign-on authorization
  - `disabled` — blocks remote control entirely
  - `enabled` — permits access without restrictions
- **How to configure it**: The setting can be deployed through server-managed settings via the `.github-private` repository, Mobile Device Management (MDM) solutions, or file-based configuration by adding the key to `copilot-settings.json`
- **Works with existing policies**: This setting layers on top of existing remote control policies, giving administrators a path "from broad access down to per-device restrictions"
- **Availability**: Available for enterprises and organizations
- **Release date**: July 30, 2026

## How to try it

- With enterprise/organization admin permissions, add the `remoteControl` setting via the `.github-private` repository, an MDM solution, or the `copilot-settings.json` file
- Choose `requireSSO`, `disabled`, or `enabled` depending on your security policy
- Combine it with existing remote control policies to design layered access control, from organization-wide down to individual devices
