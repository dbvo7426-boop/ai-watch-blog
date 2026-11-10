---
title: "GitHub secret scanning now detects secrets in Actions workflow logs (public preview)"
description: "After a workflow run completes, GitHub scans its logs for provider patterns and lists findings with other secret scanning alerts. The preview is for GitHub Enterprise Cloud with Secret Protection or Advanced Security."
pubDate: 2026-11-09
category: copilot
type: news
tags: [GitHub, Secret scanning, GitHub Actions, Security]
source: https://github.blog/changelog/2026-11-09-secret-scanning-detects-secrets-in-github-actions-workflow-logs
draft: false
importance: low
---

GitHub secret scanning can now detect secrets in GitHub Actions workflow logs, in addition to issues, wikis, discussions and pull requests. The feature is in public preview.

## Details

- **How it works:** when a workflow run completes, GitHub scans its logs for provider patterns. Findings appear in the repository's secret scanning alert list with a link back to the log. Validity checks run for supported secret types, and alerts remain after the logs are deleted.
- **Who can use it:** enterprises on GitHub Enterprise Cloud with GitHub Secret Protection or GitHub Advanced Security, including GHE.com data residency.
- **Enabling it:** enterprise owners enable Secret scanning for Actions workflow logs under enterprise settings, Policies, Advanced Security, by selecting Enabled for All repositories. It is disabled by default and applies only to repositories with secret scanning enabled.
- **Preview limits:** only runs that complete after enabling are scanned, with no backfill. Generic patterns, custom patterns, AI-detected secrets and secrets already masked by Actions are not detected. Alerts from workflow logs send no notifications during the preview.
