---
title: "Anthropic Details Election Safeguards Ahead of 2026 US Midterms"
description: "Anthropic published usage data on political conversations on Claude.ai, new classifiers for multi-step election-related misuse, and plans to surface official voting information and election-night results directly in Claude."
pubDate: 2026-10-14
category: claude
type: news
tags: [Claude, Anthropic, Elections, Safety, Policy]
source: https://www.anthropic.com/news/2026-us-midterms
draft: false
importance: medium
---

Anthropic detailed how it is preparing Claude for the 2026 US midterm elections, publishing usage statistics on political conversations, new protections against multi-step election misuse, and upcoming features that surface official voting information and results directly in Claude.

## Details

- **Usage data**: analysis of a random, privacy-preserving sample of 250,000 US Claude.ai consumer conversations (Sept 21–27, 2026) found about 5.75% touched on politics, public policy, or social issues; 0.51% were about elections or voting; 0.01% asked Claude whom or what to vote for; and 0.002% violated Anthropic's election integrity policies
- **New Claude features**: Claude will keep showing a banner linking to TurboVote (Democracy Works) for voter-registration and polling-place questions; later in October, Claude will pull official state-specific voting information (where to vote, required ID) from Democracy Works directly into US responses; on election night and in the following days, Claude will surface up-to-date official vote counts
- **Evenhandedness evaluations**: Claude Opus 5.5, Sonnet 5.5, and Haiku 5.5 scored 99% on Anthropic's political evenhandedness evaluation, its highest score yet; three outside groups — The Future of Free Speech (Vanderbilt), the Foundation for American Innovation, and the Collective Intelligence Project (2,000+ people surveyed across the US, UK, and India) — reviewed Claude's handling of political topics and rated most responses strong, while flagging that Claude sometimes added unsolicited caveats and occasionally hedged right-leaning arguments less evenly than left-leaning ones
- **Planned fixes**: improving balance in yes/no and short-answer responses, refining when caveats are added, expanding uneven-hedging tests, and extending evaluations to candidates and voting questions
- **New misuse protections**: following red-team testing with the Institute for Strategic Dialogue and the McCain Institute across the US, Israel, and Brazil — all holding major 2026 elections — Anthropic found Claude reliably refused single harmful requests but could miss malicious campaigns split into harmless-looking subtasks; it has deployed new classifiers for multi-step misuse (fake social-media networks, fake "independent" news sites, financially motivated election schemes), better detection of foreign state-actor election interference, and stronger cyber protections for election infrastructure and campaigns
- **Enforcement cases**: Anthropic's September 2026 threat-intelligence report found foreign-based operators of a fake news site using Claude to generate US midterm coverage favoring Russian, Iranian, and North Korean narratives, and other actors using Claude to mass-produce fabricated news for ad revenue; the accounts involved were banned
- **Policy guide**: a published guide for campaigns lists permitted uses (press statements, fundraising emails, debate prep, turnout analysis, voter outreach materials) and prohibited uses (fake personas, mass-produced engagement-inflating comments, content for sites falsely presented as independent news)

## What happened next

The post extends Anthropic's broader 2026 election-safety push — coming a week after its 2026 Usage Policy update clarified election-related rules — and signals that the next several weeks will bring concrete product changes (official voting info and live results inside Claude) rather than just policy language, with Anthropic promising a fuller review of election-cycle usage after the vote.
