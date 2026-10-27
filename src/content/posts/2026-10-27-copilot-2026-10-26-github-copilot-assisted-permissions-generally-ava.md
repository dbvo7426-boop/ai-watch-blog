---
title: "GitHub Copilotの「アシスト付き権限」が一般提供に"
description: "Copilotの要求をLLMが審査し、安全と判断したものは自動で進める「アシスト付き権限」が、Copilot CLI、Copilotアプリ、VS Codeで一般提供となった。"
pubDate: 2026-10-26
category: copilot
type: news
tags: [GitHub Copilot, 権限, Copilot CLI, VS Code]
source: https://github.blog/changelog/2026-10-26-github-copilot-assisted-permissions-generally-available
draft: false
importance: medium
---

GitHubは、アシスト付き権限（assisted permissions）がGitHub Copilot CLI、GitHub Copilotアプリ、Visual Studio Codeで一般提供になったと発表した。

## 詳細

- **仕組み:** Copilotがコマンド実行、ファイルシステムのパスへのアクセス、URLを開く操作を求めると、大規模言語モデルがその要求を審査する。安全と分類されたものは自動で進み、それ以外はユーザーの承認が必要になる。
- **有効化:** Copilot CLIでは`/permissions`を実行してassistedを選択。Copilotアプリではモードピッカーから「Tool permissions」を開き「Assisted」を選択。VS Codeでは権限ピッカーから「Assisted permissions」を選ぶ。
- **エンタープライズ制御:** 管理者は、管理設定でAllow Allをブロックしつつ Assistedを使えるようにしたり、Assistedだけを無効にしたりできる。新規セッションの既定の権限モードも設定でき、開発者はポリシーが許す他のモードを選べる。
- **フォールバック:** 既定モードが利用不可またはポリシーで禁止されている場合、新規セッションは手動承認で始まる。

## その後

すべて手動で承認する方式とAllow Allの中間にあたり、エージェントセッションでの承認操作を減らす狙いだ。変更履歴には審査モデルの詳細や誤判定率の記載はなく、評価方法はGitHubのドキュメントに委ねられている。管理者がAllow Allを禁止しつつAssistedを許可できる点は、組織導入で実用的だろう。
