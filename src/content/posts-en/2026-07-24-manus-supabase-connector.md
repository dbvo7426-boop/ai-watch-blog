---
title: Manus Adds a Supabase Connector for Natural-Language Database Management
description: Manus has launched a new Supabase connector that lets users query, migrate, and operate their Supabase databases — including deploying Edge Functions — through plain-English instructions.
pubDate: 2026-07-24
category: manus
type: news
tags: [Manus, Supabase, database, connectors]
source: https://manus.im/blog/manus-supabase-connector
draft: false
importance: medium
---

Manus has added a new Supabase connector. Once a user authorizes access to a Supabase project, Manus can query and analyze data, run schema migrations, and even build and deploy Edge Functions — all through plain-English instructions, without requiring database engineering expertise.

## Details

- **Query and analysis**: Natural-language requests like "compare last month's cancellations by plan tier" retrieve the relevant data, analyze it, and explain the answer
- **Data migration**: Import legacy data from spreadsheets or CRM exports into Supabase tables, with cleaning and deduplication along the way
- **Schema design and SQL execution**: Run SQL queries and design or apply schema migrations directly
- **Edge Function deployment**: Build and deploy serverless compute functions directly to Supabase
- **External data sync**: Pull data from platforms like Slack or Meta ads into Supabase
- **Data enrichment**: Fill gaps in a database by scraping web sources or generating AI-derived content
- **Vector database construction**: Process documents and generate embeddings to build AI knowledge bases
- **Auditing and maintenance**: Identify and fix data integrity, security, or payroll issues, and investigate system errors and failed requests
- **Performance recommendations**: Surface Supabase suggestions that can help protect data or improve system performance

## How to try it

- Go to Settings → Connectors in Manus, select Supabase, and authorize the desired organization
- Enable the connector for a session, then describe the desired outcome in plain English
- Requires a valid Supabase account with appropriate project permissions; connector access can be revoked at any time
- The actions available to Manus depend on the access you grant and the features included in your Supabase plan
