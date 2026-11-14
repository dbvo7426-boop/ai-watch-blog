---
title: "OpenAI launches ChatGPT Wallet so agents can pay without seeing card details"
description: "ChatGPT Wallet lets ChatGPT agents complete purchases with a per-purchase security check; it starts with ChatGPT Pro users in the US through dots."
pubDate: 2026-11-13
category: chatgpt
type: news
tags: [ChatGPT, ChatGPT Wallet, agents, payments]
source: https://openai.com/index/introducing-chatgpt-wallet
draft: false
importance: high
---

OpenAI introduced ChatGPT Wallet, a wallet that lets agents in ChatGPT pay on a user's behalf. OpenAI says it is the first wallet where agents pay without access to the user's actual card details. It was built with American Express, Mastercard and Visa.

## How a purchase works

- The user adds a card once.
- Before each purchase, the user reviews the items, the total and the selected card.
- The user approves with a security check such as Face ID or a fingerprint scan, and each approval creates a record of what was authorized.
- The payment network issues a payment token that replaces the card details. The charge goes to the selected card, and neither the business nor the agent receives the actual card details.
- Users transact directly with businesses, which keep control of pricing, fulfillment, returns and customer service. Users keep their card's existing rewards and protections for eligible disputes, such as defective items.

## Availability and limits

- Initially available through dots, for ChatGPT Pro subscribers in the US who are 18 or older. Eligible cards must be US-issued.
- Access is limited so OpenAI can learn from real-world use and work with businesses, banks and payment networks.
- Some websites may block agent purchases, and risk systems may flag legitimate agent purchases, causing declines or cancellations.
- OpenAI expects that, over time, users can delegate purchases by setting spending limits, purchase categories or time periods, with stronger safeguards such as biometric checks. This is an expectation, not a current feature.

## For businesses

OpenAI published a Commerce Partner Playbook covering product information, agent access, and working with payment and risk providers. Suggested steps include claiming a business in ChatGPT and uploading a product feed, configuring CDNs or firewalls to recognize Web Bot Auth signed requests, and building plugins or adding WebMCP tools. Named partners include Forter, Riskified, Sardine, Signifyd, Adyen, Checkout.com and Stripe.
