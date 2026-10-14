---
title: "Lovable Launches Private Preview for Deploying Apps in Customers' Own AWS Accounts"
description: "Lovable's new Deploy on AWS option runs an Enterprise customer's apps inside their own AWS account — with a dedicated VPC, EKS data plane, Aurora PostgreSQL, and bring-your-own-key encryption — while builders keep working in Lovable's editor. Deutsche Telekom is the first customer live on it."
pubDate: 2026-10-14
category: lovable
type: news
tags: [BYOC, AWS, Enterprise, Security, ProductUpdate]
source: https://lovable.dev/blog/deploy-on-aws
draft: false
importance: high
---

Lovable has launched Deploy on AWS in private preview, letting select Enterprise customers run their Lovable apps entirely inside their own AWS account while still building in Lovable's standard editor.

## Details

- **Dedicated VPC**: each customer gets a dedicated VPC in their own AWS account holding everything the app needs
- **Lovable data plane on Amazon EKS**, including the preview sandboxes where builds run during iteration
- **Published apps**: static assets served from Amazon S3, dynamic requests handled by AWS Lambda
- **App database**: Amazon Aurora PostgreSQL, with app storage on Amazon S3
- **Customer-controlled logging**: logs can be routed to the customer's own systems, such as S3 or CloudWatch
- **Connector gateway and integration secrets** are kept inside the customer's account, with VPC peering so apps can reach internal systems like a data warehouse or CRM without touching the public internet
- **Managed updates**: Lovable installs, manages, and updates the components via versioned Helm charts pointing to signed container images, so the customer's team doesn't operate them directly
- **Setup**: an admin creates an Enterprise workspace, selects AWS hosting, and runs a Lovable-generated CloudFormation stack that provisions an EC2 "Lovable runner," which in turn provisions EKS, Aurora PostgreSQL, S3, and other services using separate IAM roles for setup, maintenance, and decommissioning
- **Security**: components in the customer's account connect outward to Lovable over mTLS with no inbound access required; existing Enterprise controls (SSO, SCIM, publish restricted to workspace members, per-build security scans, audit logs) still apply; app data is encrypted at rest, and bring-your-own-key customers can connect their own AWS KMS key and revoke Lovable's access at any time
- **What stays centralized**: the editor, agent, chat and project history, workspace settings, identity, and billing remain in Lovable's multi-tenant service, and AI model requests made while building are still processed by Lovable's own AI service
- **First customer**: Deutsche Telekom is live with its Lovable apps running in its own AWS account; Kartik Sheth, the company's Chief AI Officer, said Deutsche Telekom is "proud to be the first global enterprise to deploy Lovable this way"
- **Availability**: private preview for select Enterprise customers, with Lovable working toward full feature parity with its standard hosting; interested customers can contact their account team or email byoc@lovable.dev

## What happened next

Deploy on AWS addresses a common enterprise blocker for AI app builders: security and compliance teams that require production workloads for sensitive data to run inside infrastructure the company itself owns and controls. By keeping the build experience in Lovable's hosted editor while moving runtime, data, and secrets into the customer's AWS account — and offering bring-your-own-key encryption — Lovable is positioning itself to compete for enterprise workloads previously out of reach for a fully-hosted builder, with Deutsche Telekom's early deployment serving as a reference case.
