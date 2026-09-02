---
title: "GitHub Copilot、Gemini 3.1 ProやClaude Opus/Sonnet 4.5/4.6、Raptor Miniを廃止"
description: "2026年9月1日付で、GitHub CopilotがGemini 3.1 Pro、Claude Opus 4.5/4.6、Claude Sonnet 4.5/4.6、Raptor Miniをチャット・インライン編集・コード補完から廃止。移行先となる新モデルを案内している。"
pubDate: 2026-08-31
category: copilot
type: news
tags: [GitHubCopilot, GitHub, モデル廃止, Claude, Gemini]
source: https://github.blog/changelog/2026-08-31-selected-github-copilot-models-deprecated
draft: false
importance: medium
---

GitHubは2026年9月1日付で、GitHub Copilotから旧世代のモデル群を廃止しました。対象はCopilot Chat、インライン編集、askモード・エージェントモード、コード補完です。

## 詳細

- **廃止対象モデル**: Gemini 3.1 Pro、Claude Opus 4.5および4.6、Claude Sonnet 4.5および4.6、Raptor Mini
- **推奨される移行先**: Gemini 3.1 Proのユーザーは Gemini 3.7 Flash へ、Claude Opus 4.5/4.6のユーザーは Claude Opus 4.7・4.8・5 のいずれかへ、Claude Sonnet 4.5/4.6のユーザーは Claude Sonnet 5 へ、Raptor Miniのユーザーは MAI-Code-1.1-Flash へそれぞれ移行することが推奨されている
- **管理者側で必要な対応**: エンタープライズの管理者は、Copilot設定内の組織のモデルポリシーから代替モデルへのアクセスを有効化し、モデル選択画面に表示されることを確認する必要がある
- **手動での削除作業は不要**: 廃止対象モデルは自動的に削除されるため、エンドユーザーから利用不可にするための作業は必要ない

## その後

今回の廃止は、AnthropicやGoogleの新世代モデルが旧世代を置き換えていく、GitHubの通常のモデルライフサイクル管理の一環です。タイミングとしては、Copilotで「Claude Fable 5.1」が一般提供開始となった翌日にあたり、GitHubがユーザーに対し、すでに置き換えられた旧リリースにとどまるのではなく、最新世代のモデルへの移行を促していることがうかがえます。
