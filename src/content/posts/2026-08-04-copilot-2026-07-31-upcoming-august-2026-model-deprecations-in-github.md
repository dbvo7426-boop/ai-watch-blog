---
title: "GitHub Copilot、2026年9月1日に6モデルを一斉非推奨化 ― Gemini 3.1 ProやClaude Opus 4.5/4.6など"
description: "GitHubは2026年9月1日、Gemini 3.1 Pro・Claude Opus 4.5/4.6・Claude Sonnet 4.5/4.6・Raptor Miniの6モデルを全GitHub Copilot体験から非推奨化する。年間契約の個人プランではClaude Sonnet 4.6のみ例外的に継続利用可能。"
pubDate: 2026-07-31
category: copilot
type: news
tags: [Copilot, GitHub, モデル非推奨, Gemini, Claude]
source: https://github.blog/changelog/2026-07-31-upcoming-august-2026-model-deprecations-in-github-copilot
draft: false
importance: medium
---

GitHubは、2026年9月1日付でCopilot Chat・インライン編集・Askモード・Agentモード・コード補完を含む全てのGitHub Copilot体験から6つのモデルを一斉に非推奨化すると発表した。利用者・管理者はこの期日までに後継モデルへの移行を済ませておく必要がある。

## 詳細

- **非推奨化の期日**: 以下の6モデルが2026年9月1日に同時に非推奨となる
- **対象モデルと移行先**:
  - Gemini 3.1 Pro → Gemini 3.6 Flash
  - Claude Opus 4.5 → Claude Opus 4.7、4.8、または5
  - Claude Opus 4.6 → Claude Opus 4.7、4.8、または5
  - Claude Sonnet 4.5 → Claude Sonnet 5
  - Claude Sonnet 4.6 → Claude Sonnet 5(下記の例外あり)
  - Raptor Mini → MAI-Code-1-Flash
- **例外事項**: 年間契約の個人向けGitHub Copilotサブスクライバーに限り、非推奨化後もClaude Sonnet 4.6を引き続き利用できる
- **対象範囲**: Copilot Chat、インライン編集、Askモード、Agentモード、コード補完など「全てのGitHub Copilot体験」が対象
- **必要な対応**: 利用者・連携先は期日までに対応モデルへワークフローを更新する必要がある。Enterprise管理者は、Copilotのモデルポリシーで事前に代替モデルへのアクセスを有効化しておく必要がある

## 使ってみるには

- 自分のチームがCopilot Chat・インライン編集・Agentワークフローで上記6モデルのいずれかを使っていないか確認する
- 2026年9月1日までに、非推奨化されるモデルをそれぞれの推奨移行先へ切り替える
- 年間契約の個人プランでClaude Sonnet 4.6を利用している場合、期日後も継続利用できるが、チーム・Enterpriseシートには適用されない点に注意する
- Copilot Enterprise管理者は、混乱を避けるため組織のモデルポリシー設定で代替モデルを事前に有効化しておく
