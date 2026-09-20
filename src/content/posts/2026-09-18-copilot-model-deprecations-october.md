---
title: "GitHub Copilot、Gemini 3.7 Flash・GPT-5.5/5.4・Grok 4.5を10月中旬に廃止へ"
description: "GitHubが、Gemini 3.7 Flash、GPT-5.5、GPT-5.4、GPT-5.4 mini、GPT-5 mini、Grok 4.5を2026年10月19日付で全Copilot利用面から廃止すると発表。Business/Enterprise顧客はデフォルト設定を無効化していない限り、新モデルへ自動的に切り替わる。"
pubDate: 2026-09-18
category: copilot
type: news
tags: [GitHubCopilot, GitHub, モデル廃止, Gemini, Grok]
source: https://github.blog/changelog/2026-09-18-upcoming-deprecation-of-selected-github-copilot-models-in-mid-october
draft: false
importance: low
---

GitHubは、2026年10月19日付で全てのGitHub Copilot利用面から複数のモデルをまとめて廃止すると発表しました。

## 詳細

- **廃止対象モデルと移行先**: Gemini 3.7 Flash → Gemini 3.8 Flash、GPT-5.5 → GPT-5.6 Sol、GPT-5.4 → GPT-5.6 Sol、GPT-5.4 mini → GPT-5.6 Luna、GPT-5 mini → GPT-5.6 Luna、Grok 4.5 → Grok 4.6
- **影響を受ける利用面**: Copilot Chat、インライン編集、askモード・エージェントモード、コード補完
- **必要な対応**: 廃止日までに、ワークフローや連携部分を対応モデルへ更新する必要がある
- **エンタープライズでの扱い**: Business・Enterprise顧客は、管理者がデフォルトのモデル有効化設定を無効にしていない限り、推奨される代替モデルへ自動的に切り替わる。廃止対象モデルは期限後に自動的に削除され、手動での対応は不要

## その後

今回の廃止は、GitHubがこれまで行ってきた単発のモデル廃止よりも規模が大きく、Gemini・GPT・Grokの旧世代バージョンを一度にまとめて整理するものです。廃止日の約6週間前という、通常より長めの移行期間が設けられており、チームがワークフローを最新世代のモデルへ移行するための猶予が確保されています。
