---
title: Claude Codeが「サブエージェント」「フック」「チェックポイント」で自律性を強化
description: AnthropicがClaude Sonnet 4.5の発表に合わせ、Claude Codeにサブエージェント・フック・チェックポイント(巻き戻し)機能を追加。VS Code拡張機能も正式版となり、SDKは「Claude Agent SDK」へ改称されました。
pubDate: 2025-09-29
category: claude
type: news
tags: [Claude Code, Anthropic, サブエージェント, フック, Claude Agent SDK, "AI史"]
source: https://www.anthropic.com/news/enabling-claude-code-to-work-more-autonomously
draft: false
---

Anthropicが2025年9月29日、Claude Codeを「より自律的に働かせる」ための大型アップデートを発表しました。専用タスクを任せられる「サブエージェント」、決まった処理を確実に実行する「フック」、作業を巻き戻せる「チェックポイント」を新たに搭載し、VS Code拡張機能は正式版に、SDKは「Claude Agent SDK」へと改称されています。

## 詳細

- **サブエージェント**: 「メインエージェントがフロントエンドを作る間、バックエンドAPIを別のサブエージェントに任せる」といった並行作業が可能に。専門タスクを切り出して委任できる
- **フック**: コード変更後のテスト実行や、コミット前のリンティングなど、特定のタイミングで処理を確実にトリガーする仕組み。モデルの挙動に依存せず必ず実行される点が特徴
- **チェックポイント(巻き戻し)**: 変更前のコード状態を自動保存し、Escキー2回または `/rewind` コマンドで直前の状態に瞬時に戻せる。コード・会話・その両方を選んで復元可能
- **VS Code拡張機能が正式版に**: リアルタイムの変更表示とインライン差分表示を備え、ベータから正式提供へ。ターミナルUIも刷新され、ステータス表示や検索可能なプロンプト履歴が追加された
- **Claude Agent SDK(旧Claude Code SDK)**: Claude Codeのコアツールと権限管理の仕組みをそのまま使い、独自のエージェント体験を構築できる開発者向けSDKとして改称・拡充
- **既定モデルがClaude Sonnet 4.5に**: SWE-bench Verifiedで77.2%を記録し、社内テストでは30時間以上にわたり複雑なコーディングタスクに集中し続けられたとされる

## その後

この大型アップデート(通称Claude Code 2.0)からわずか3週間後の2025年10月20日には、ブラウザから複数のコーディングタスクを並行管理できる「Claude Code on the web」が登場。自律性強化の流れはそのまま、作業場所をターミナルの外へも広げる方向に続いていく。
