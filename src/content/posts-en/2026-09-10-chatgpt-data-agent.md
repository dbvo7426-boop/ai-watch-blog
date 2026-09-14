---
title: "ChatGPT Work's New Data Agent Lets Non-Technical Staff Query Company Data in Plain Language"
description: "OpenAI launched a Data agent for ChatGPT Work that turns natural-language questions into analysis and interactive dashboards, connecting to Redshift, BigQuery, Databricks, Snowflake and others while respecting existing permissions and BI-tool definitions."
pubDate: 2026-09-10
category: chatgpt
type: news
tags: [OpenAI, ChatGPT, ChatGPTWork, DataAnalysis, Enterprise]
source: https://openai.com/index/put-data-to-work
draft: false
importance: medium
---

OpenAI launched a Data agent for ChatGPT Work, letting employees without technical query skills explore company data and generate insights directly through natural language.

## Details

- **Core functions**: converts plain-language questions into data analysis and interactive dashboards, supports follow-up questions to dig into results, produces shareable and editable visualizations, and recommends next steps or relevant stakeholders
- **Data connectivity**: connects to Amazon Redshift, Google BigQuery, ClickHouse, Databricks, MongoDB, and Snowflake, plus files from Google Drive and SharePoint
- **Business-context awareness**: draws on semantic layers and trusted sources like dbt, Databricks Genie Ontology, and existing BI dashboards so analyses align with a company's established metric definitions rather than reinventing them
- **Access controls**: enterprise administrators choose which data connections are available and to whom, and the agent respects existing table, row, and column-level permissions on connected accounts
- **BI tool integration**: works inside Tableau, Power BI, Sigma, ThoughtSpot, and Omni, letting teams analyze data in the tools they already use
- **Availability**: installable through ChatGPT Work's Plugins directory, with workspace-level configuration and permissions managed by administrators

## What happened next

The Data agent targets a familiar pain point — non-technical staff depending on data teams for basic queries — by routing natural-language questions through existing governed data infrastructure rather than a separate, ungoverned analytics layer, continuing OpenAI's push to embed ChatGPT into core enterprise workflows following its healthcare, education, and financial-services product lines.
