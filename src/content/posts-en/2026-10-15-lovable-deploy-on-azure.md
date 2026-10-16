---
title: "Lovable Launches Private Preview for Deploying Apps in Customers' Own Azure Subscriptions"
description: "Lovable's new Deploy on Azure option runs an Enterprise customer's apps inside their own Azure subscription — with a dedicated AKS data plane, Azure Database for PostgreSQL, and bring-your-own-key encryption via Key Vault — while builders keep working in Lovable's standard editor."
pubDate: 2026-10-15
category: lovable
type: news
tags: [BYOC, Azure, Enterprise, Security, ProductUpdate]
source: https://lovable.dev/blog/deploy-on-azure
draft: false
importance: medium
---

Lovable has launched Deploy on Azure in private preview, letting select Enterprise customers run their Lovable apps entirely inside their own Azure subscription while still building in Lovable's standard editor — mirroring the AWS BYOC option it shipped the day before.

## Details

- **Target customers**: organizations with security rules requiring apps and data to stay inside their own Azure environment, particularly those already using Microsoft Entra ID, Microsoft 365, Fabric, and Azure
- **Dedicated data plane**: the Lovable data plane, including preview sandboxes where builds run, operates on Azure Kubernetes Service (AKS) inside a dedicated virtual network (VNet) in the customer's subscription
- **Published apps**: static files served from Azure Blob Storage, dynamic requests handled by Azure Functions
- **App database and storage**: Azure Database for PostgreSQL for the database, Azure Blob Storage for app file storage; logs can go to Blob Storage or a Log Analytics workspace
- **Connector gateway and integration secrets** run inside the customer's environment, with VNet peering letting apps reach internal systems like a data warehouse or CRM without crossing the public internet
- **Setup**: an admin creates an Enterprise workspace, selects Azure hosting, and runs a Lovable-generated Azure Resource Manager template; Lovable's container images are copied into the customer's Azure Container Registry for their own pipeline scanning, and a Lovable runner on a VM in the VNet provisions and manages the data plane
- **Security**: components in the customer's subscription connect outward to Lovable over an outbound-only, mTLS-encrypted connection with no inbound access required; existing Enterprise controls (SSO/SCIM via Entra ID, publishing limited to workspace members, per-build security scans, audit logs) still apply; chat and project history are encrypted at rest, and customers can bring their own key from Azure Key Vault and revoke Lovable's access at any time
- **What stays centralized**: the editor, agent, chat and project history, workspace settings, identity, and billing remain in Lovable's multi-tenant service; AI model requests made while building are still processed by Lovable's own AI service
- **Related Microsoft options**: Copilot Managed Runtime (public preview, Business/Enterprise) hosts apps inside the Microsoft tenant, while hosting on Lovable with Microsoft connectors keeps the app on Lovable while connecting to Microsoft 365, Entra, Azure, and Fabric data
- **Limitations and availability**: some features available on standard Lovable hosting aren't yet available on Deploy on Azure, with Lovable working toward full feature parity; available to select Enterprise customers only via account team or byoc@lovable.dev

## What happened next

Deploy on Azure extends the bring-your-own-cloud model Lovable introduced with AWS just a day earlier, giving Microsoft-centric enterprises the same pitch: keep building in Lovable's hosted editor while runtime, data, and secrets stay inside infrastructure the company already owns and controls. Shipping both BYOC options within 24 hours of each other signals Lovable is treating enterprise data-residency requirements as a priority competitive front against fully-hosted rivals.
