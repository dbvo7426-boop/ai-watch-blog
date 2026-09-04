---
title: "GitHub Copilotの企業向け管理設定、任意のモデルをデフォルトに指定可能に"
description: "GitHubがCopilotの企業向け管理設定に、新規会話で最初に使われるデフォルトモデルを自由に選べる機能を追加。個別のチームが独自のデフォルトを上書き設定することも可能。"
pubDate: 2026-09-02
category: copilot
type: news
tags: [GitHubCopilot, GitHub, 企業向け設定, 管理者機能]
source: https://github.blog/changelog/2026-09-02-enterprise-managed-settings-support-any-default-model
draft: false
importance: low
---

GitHub Copilotの企業向け管理設定で、新規会話のデフォルトモデルとして任意のモデルを選択できるようになりました。従来は限られた選択肢に固定されていました。

## 詳細

- **設定方法**: 管理者が組織の企業向け管理設定ファイル内で`model`キーを設定する
- **チーム単位での柔軟性**: `model`キーを`overridable`に指定し`team-mappings.json`を更新することで、特定のエンタープライズチームが組織全体の設定を継承せず、独自のデフォルトモデルを選択できるようになる
- **適用範囲**: Copilot BusinessまたはCopilot Enterpriseプランの組織を対象に、GitHub Copilotアプリ・Copilot CLI・Visual Studio Codeに適用

## その後

今回の変更により、大規模組織は全チームを単一のエンタープライズ全体の設定に縛ることなく、従業員がデフォルトで目にするモデルをより細かく制御できるようになります。
