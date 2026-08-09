---
title: "GitHub Code Quality No Longer Auto-Adds Copilot as a Reviewer"
description: "GitHub has reversed a default behavior: enabling GitHub Code Quality on a repository no longer creates a ruleset that automatically requests a Copilot code review on every pull request."
pubDate: 2026-08-07
category: copilot
type: news
tags: [GitHub Copilot, GitHub Code Quality, Code Review, Rulesets]
source: https://github.blog/changelog/2026-08-07-github-code-quality-no-longer-adds-copilot-as-a-reviewer
draft: false
importance: low
---

GitHub has turned off a default behavior in GitHub Code Quality: enabling the feature on a repository no longer creates a ruleset that automatically requests a Copilot code review on pull requests. GitHub's stated reasoning is blunt: "You told us that adding a reviewer should be your choice, so we've reversed that."

## Details

- **Three settings disabled**: In existing auto-generated rulesets, GitHub has turned off "Automatically request Copilot code review," "Review new pushes," and "Review draft pull requests" — so Copilot is no longer requested as a reviewer, on every push, or on drafts
- **Opt-in, not removed**: Copilot code review itself is unaffected and remains available; users who want the automatic behavior back can add or edit a ruleset and re-enable "Automatically request Copilot code review" at the repository or organization level
- **Existing customizations untouched**: Any custom rulesets a team already created are left as-is; only the auto-generated ruleset created by enabling Code Quality has had these settings disabled
- **Scope**: Applies to GitHub Enterprise Cloud and GitHub Team; Copilot code review continues to bill against Copilot plans as before

## How to try it

- To restore automatic Copilot reviews, go to repository or organization rulesets and re-enable "Automatically request Copilot code review" for the branches you want covered
- See [Configuring automatic code review by Copilot](https://docs.github.com/copilot/how-tos/copilot-on-github/set-up-copilot/configure-automatic-review#configuring-automatic-code-review-for-a-single-repository) for setup steps
