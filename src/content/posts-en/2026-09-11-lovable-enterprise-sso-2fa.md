---
title: "Lovable Lets Admins Edit SSO Settings, Lock Membership to IdPs, and Require 2FA"
description: "Lovable's September 11 changelog gives enterprise admins the ability to edit existing SSO provider settings, restrict workspace membership changes to SCIM-managed identity providers, and mandate two-factor authentication for all members, plus broader Lovable MCP client compatibility."
pubDate: 2026-09-11
category: lovable
type: news
tags: [Lovable, Enterprise, SSO, SCIM, ProductUpdate]
source: https://docs.lovable.dev/changelog
draft: false
importance: medium
---

Lovable's September 11, 2026 changelog adds a batch of enterprise identity and access-control features, giving workspace admins tighter control over authentication and membership.

## Details

- **Editable SSO provider settings**: workspace admins can now modify existing SSO provider connections after setup, including SAML URLs, adding multiple signing certificates, and tracking OIDC secret expiration
- **SCIM-managed invites**: enterprise workspaces using SCIM can lock membership changes to their identity provider, so members can only be added or removed through the IdP rather than manually inside Lovable
- **Mandatory two-factor authentication**: enterprise workspace admins can now require 2FA for every member of the workspace
- **Broader Lovable MCP compatibility**: the Lovable MCP server now works with any OAuth-supporting MCP client, not just a fixed list of assistants
- **Clearer connection sharing**: a new "Sharing" section shows who can access a given connection, with a "Private" label for personal-only access
- **Smaller fixes**: public remix previews now work without requiring sign-in, template cards offer direct preview and remix options, duplicate-Supabase-project warnings were added, and PDF attachments in chat now open as readable previews

## What happened next

The identity and access changes target enterprise IT teams that need SSO and membership under stricter, centrally managed control rather than ad hoc admin changes inside Lovable itself — a common gating requirement for larger organizations evaluating any SaaS builder. Combined with the open MCP client support, the update signals Lovable continuing to build out the compliance and integration surface expected at the enterprise tier. Full changelog entries are at docs.lovable.dev/changelog.
