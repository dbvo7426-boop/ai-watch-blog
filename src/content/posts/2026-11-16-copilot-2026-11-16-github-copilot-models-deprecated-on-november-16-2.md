---
title: "GitHub Copilot、Claude Opus 4.8・Claude Opus 5・GPT-5.6 Terraを廃止"
description: "2026年11月16日付で、Copilotの大半の機能で3つのモデルが廃止されました。代替モデルも案内されています。"
pubDate: 2026-11-16
category: copilot
type: news
tags: [GitHub Copilot, 廃止, モデル]
source: https://github.blog/changelog/2026-11-16-github-copilot-models-deprecated-on-november-16-2026
draft: false
importance: medium
---

GitHubは、2026年11月16日付で、Copilot Chat、インライン編集、askモードとagentモード、コード補完を含むGitHub Copilotの大半の機能で、3つのモデルを廃止しました。この廃止は2026年10月15日に予告されていました。

| モデル | 推奨される代替 | 備考 |
|---|---|---|
| Claude Opus 4.8 | Claude Opus 5.5 | 年額プランの個人契約者は引き続き利用可 |
| Claude Opus 5 | Claude Opus 5.5 | モデル選択から外れるが、既存の承認済みアクセスで実行時の拒否フォールバックとしては利用可 |
| GPT-5.6 Terra | GPT-6.1 SolまたはGPT-6 Luna | 記載なし |

- 既存のエンタープライズ向けモデルポリシーは引き続き適用されます。
- Copilot EnterpriseとBusinessの顧客は、既定のモデル有効化のもとで推奨の代替モデルが自動的に使えます。ただし、管理者がグローバルな既定を無効にしている場合やモデルを無効にしている場合は除きます。グローバルな既定がオフの場合、管理者はCopilot設定のモデルポリシーで代替モデルを有効にでき、有効にするとCopilot Chatのモデル選択に表示されます。
- GitHubは、廃止モデルを取り除くための操作は不要としており、ワークフローや連携は対応モデルに更新するよう求めています。
