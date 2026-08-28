---
title: "Cursor Cloud Agents Can Now Start Without a Connected Repo"
description: "Cursor removed the requirement that Cloud Agents connect to GitHub or another SCM before starting work, letting users prompt from scratch and save the result to an auto-created Origin repo later."
pubDate: 2026-08-27
category: cursor
type: news
tags: [Cursor, CloudAgents, Origin, DeveloperTools, Vercel]
source: https://cursor.com/changelog/start-from-scratch
draft: false
importance: medium
---

Cursor removed a long-standing onboarding hurdle for its Cloud Agents on August 27, 2026: users no longer need a connected GitHub or other source-control provider before they can start prompting an agent. Selecting "Start from scratch" in the repo picker now lets an agent begin building immediately, with Cursor creating a repo in the background only once there's something worth saving.

## Details

- **No repo required upfront**: choosing "Start from scratch" in the Cloud Agents repo picker lets users prompt an agent with no pre-existing GitHub or SCM connection
- **Automatic Origin repo**: Cursor creates an Origin repo behind the scenes as the agent works, so there's no manual setup step before iterating
- **Save on your terms**: once satisfied with the build, users click "Create repo" to save the work permanently, choosing a custom name (or an auto-suggested one) and setting visibility to private or internal
- **Live preview via port-forwarding**: Cursor now port-forwards the cloud agent's live environment directly to the browser, so users can preview the running app and use tools like design mode without extra configuration
- **Vercel publishing**: connecting a Vercel account lets users hit publish directly from the agent session to get a live URL
- **Rollout**: Origin is rolling out in early beta to all paid plan users starting August 27, except enterprise organizations whose admins opt out

## What happened next

Together with the live-preview and Vercel-publish additions, the change lowers the barrier for using Cloud Agents on quick, throwaway ideas rather than only established codebases, since a full repo no longer has to exist before an agent can start producing something tangible. It follows Cursor's broader push this month toward more autonomous, self-directed cloud agents, building on the event-driven agent harness it shipped on August 19.
