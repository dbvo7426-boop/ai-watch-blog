---
title: "OpenAI releases a CSAM image classifier and new child-safety tools"
description: "A new classifier available free to vetted organizations via the API, ChatGPT warnings that pause access for 24 hours, developer guidance and law-enforcement tools."
pubDate: 2026-11-16
category: chatgpt
type: news
tags: [OpenAI, child safety, API, classifier]
source: https://openai.com/index/strengthening-online-child-safety
draft: false
importance: medium
---

OpenAI released a new tool to detect child sexual abuse material (CSAM), along with ChatGPT interventions, developer guidance and support for child-safety law enforcement.

## CSAM image classifier

- It detects potential CSAM, including AI-generated material, and returns scores so reviewers can prioritize. OpenAI says it is the first broadly available CSAM classifier with a specific signal for whether material may be AI generated. It was trained and evaluated with assistance from NCMEC.
- Vetted organizations can access it through the OpenAI API at no cost by submitting an intake form; OpenAI engaged the Tech Coalition and ROOST to help share it. A model card is published.
- In an evaluation on user-uploaded images, OpenAI estimates it would flag 48% fewer images than the existing tool while finding roughly the same number of abusive images, and flagged images were about twice as likely to contain abuse.
- Early partners reported: fal, 72% of high-confidence flags confirmed as novel CSAM; invideo AI, one in four flagged cases led to a ban; SafetyKit, 90% detection on drawings or animations that sexualize children.

## ChatGPT warnings

- New product warnings interrupt attempts to find abusive material, explain consequences and point to help. The flagged conversation is removed and ChatGPT access is paused for 24 hours; repeated violations may lead to longer restrictions, account closure or reports to authorities.

## Developers and law enforcement

- OpenAI published CSAM guidance for developers (rules, user reporting, detection tools, review and reporting processes, safety identifiers), developed with input from the Tech Coalition, Thorn, NCMEC and the Internet Watch Foundation. OpenAI also joined the Tech Coalition's Lantern program to share and receive signals.
- For child-safety law enforcement units, OpenAI is offering tools and training, with access managed by program administrators. The first tool helps investigators review lengthy chat logs and legal process returns, identify potential connections and build timelines linked to sources. Access depends on agency authorization.
