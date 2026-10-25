---
title: "xAI adds IncidentWatch and IncidentSweep Grok Bot teammates for support incidents"
description: "xAI introduced two Grok Bot AI teammates that detect spikes in support tickets and clear the resulting backlog after an incident, with a human approving each batch."
pubDate: 2026-10-20
category: grok
type: news
tags: [Grok Bot, xAI, Customer Support, Agents]
source: https://x.ai/news/incident-sweep
draft: false
importance: low
---

xAI described two new Grok Bot teammates aimed at support incidents. IncidentWatch spots surges of similar tickets, and IncidentSweep replies to the backlog once an incident is confirmed.

## Details

- **Problem addressed:** Customers often report an incident to support before internal alerts fire, and afterwards a large backlog of related tickets needs a final response.
- **IncidentWatch:** Scans the support queue every five minutes, reviewing the previous 15 minutes of tickets for spikes in similar reports. It alerts the on-call support engineer with the likely issue, ticket count and examples.
- **Holding and responding:** After a human confirms an incident and posts it to the status page, Support Bot checks held tickets against the incident and replies to matching customers.
- **IncidentSweep:** A support engineer defines which tickets to include or exclude and the message to send. The bot finds matching tickets, sets aside uncertain ones, and shows the proposed batch for approval before sending in small batches.
- **Example:** During a September 18 incident at SpaceXSI, IncidentSweep cleared 204 tickets in about 10 minutes, with an engineer reviewing and approving the batch.

## What happened next

xAI frames the pair as part of its pitch that AI teammates should own whole workflows rather than help with single tasks. The design keeps a human at the confirmation and approval points, which limits the risk of mass-sending a wrong reply. The 204-ticket figure comes from xAI's own internal team, so it shows the intended workflow rather than an independent benchmark.
