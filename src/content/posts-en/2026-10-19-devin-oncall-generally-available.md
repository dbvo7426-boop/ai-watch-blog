---
title: "Devin Oncall Is Now Generally Available, With CI Status Checks and Teams Upgrades"
description: "Cognition made Devin Oncall available to all organizations on October 19, 2026. The same release adds an editor for Devin Review rules, CI status checks beyond pull requests, and a batch of Microsoft Teams improvements."
pubDate: 2026-10-19
category: devin
type: news
tags: [Devin, Oncall, Devin Review, Microsoft Teams]
source: https://docs.devin.ai/release-notes/overview
draft: false
importance: medium
---

Devin's October 19, 2026 release notes announce that Devin Oncall is now generally available to all organizations. The release also adds a rules editor for Devin Review, CI status checks for commits, branches and tags, and several Microsoft Teams features.

## Details

- **Devin Oncall (GA):** Responders watch Slack or Microsoft Teams channels and PagerDuty incidents, triage new alerts, bug reports and support requests, and investigate them using telemetry tools, code, deployments and runbooks. They post a likely root cause and recommended next actions. Devin can join incident channels and keep a self-updating incident report, and recurring Oncall reports summarize incidents investigated, issues identified and fixes shipped. Organization admins connect tools and manage responders under Oncall in the sidebar.
- **Devin Review:** A new rules editor puts exclusions and review rules in one list of expandable cards, with targets picked inline. When a PR has commits that were not reviewed, the notice now reads "Latest changes haven't been reviewed" and offers "Review now" for a one-off review without enabling automatic review.
- **CI status:** Devin can check CI status for a commit, branch or tag (for example a post-merge run on main), not only a pull request, on GitHub, GitLab, Azure DevOps and Bitbucket Cloud and Data Center. Bitbucket build statuses are now visible on pull requests and commits.
- **Microsoft Teams:** Enterprise admins can classify attachments by sensitivity label once per enterprise; crashed sessions can be retried by replying in the Teams thread; Teams admin alerts appear when the Devin app is blocked; Devin can mention Teams tags through the Microsoft 365 MCP; group-chat permission messages are clearer.
- **Other:** Sessions can propose edits to shared organization plugins and skills, subject to admin approval. Nightly memory dreaming can be turned off from the Memory tab. The work log now shows the current step sooner. GitLab and Bitbucket Data Center webhook settings show the last auto-install result.
- **Pricing or limits for Oncall:** undisclosed in the release notes.

## What happened next

Moving Oncall to general availability extends Devin from writing code into the incident-response loop, where it competes with other AI SRE tools. The rest of the release is incremental, with most work going into enterprise controls on Teams and review workflows. How well Oncall's root-cause analysis performs in real incidents is not described in the source.
