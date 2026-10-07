---
title: "Lovable Adds Klaviyo and Excalidraw+ Connectors, Databricks User OAuth"
description: "Lovable's October 6 changelog adds a Klaviyo connector for email/SMS marketing, Excalidraw+ as a chat connector, Databricks User OAuth for personal-account queries, a redesigned AI model picker, and a Gemini 3.6 Flash deprecation notice."
pubDate: 2026-10-06
category: lovable
type: news
tags: [Lovable, Klaviyo, Databricks, Excalidraw, Connectors, ProductUpdate]
source: https://docs.lovable.dev/changelog
draft: false
importance: medium
---

Lovable's October 6, 2026 changelog adds two new connectors — Klaviyo and Excalidraw+ — along with personal-account OAuth for Databricks, a redesigned model picker for the built-in AI connector, and a deprecation notice for Gemini 3.6 Flash.

## Details

- **Klaviyo connector**: lets apps manage customer profiles, handle list subscriptions based on email or SMS consent, record events like signups and purchases, and access campaigns and flows — aimed at newsletter forms, SMS opt-ins, and internal marketing dashboards
- **Excalidraw+ chat connector**: joins the prebuilt chat connector catalog, letting Lovable manage scenes — diagrams and presentations — directly in a user's Excalidraw+ workspace
- **Databricks User OAuth**: the existing Databricks connector now supports authenticating with a personal Databricks account instead of a shared service principal; queries run under the individual user's permissions, with audit logs showing who ran each query
- **Redesigned AI connector model list**: the built-in AI connector now shows every available model as a card with provider information and capability descriptions, searchable by name, provider, or capability
- **Gemini 3.6 Flash deprecation**: Google is retiring `google/gemini-3.6-flash`, with support ending November 19, 2026; Lovable is directing users to migrate to Gemini 3.8 Flash, which accepts the same input at the same price

## What happened next

The release continues Lovable's pattern of near-daily connector expansion, pairing new marketing and diagramming integrations with account-level security options like Databricks' per-user OAuth. The Gemini 3.6 Flash deprecation notice gives app builders roughly six weeks to migrate before the model is switched off, with Gemini 3.8 Flash positioned as a drop-in replacement.
