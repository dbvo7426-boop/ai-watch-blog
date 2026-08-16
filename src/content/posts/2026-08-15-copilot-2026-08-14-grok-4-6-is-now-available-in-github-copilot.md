---
title: "GitHub Copilotで「Grok 4.6」が利用可能に ― 存在未確認だった噂に初の一次情報"
description: "xAIの「Grok 4.6」がGitHub Copilotへの提供を開始。エージェント型コーディングと持続的な多段階推論向けに設計されたモデルで、これまで未確認の噂に留まっていたGrok 4.6の存在を裏付ける初の一次情報となる。"
pubDate: 2026-08-14
category: copilot
type: news
tags: [GitHub Copilot, Grok 4.6, xAI, モデル提供状況, エージェント型コーディング]
source: https://github.blog/changelog/2026-08-14-grok-4-6-is-now-available-in-github-copilot
draft: false
importance: high
---

xAIの「Grok 4.6」がGitHub Copilotへの展開を開始したと、GitHubが発表した。エージェント型コーディングや複雑な多段階ワークフロー向けに設計された推論モデルと位置づけられている。今回の変更履歴は機能そのもの以上に注目に値する。というのも、これまでの追跡調査では未確認の噂としてしか言及されておらず、xAI自身の公式チャネルでは一度も発表が確認できなかったGrok 4.6について、初めて一次情報源で裏付けが取れた事例だからだ。

## 詳細

- **想定用途**: GitHubはGrok 4.6を「エージェント型コーディングと複雑な多段階ワークフロー」向けに設計されたモデルと説明している。社内テストでは、VS CodeとCopilot CLIでのターミナルベースのコーディングタスク、特に「持続的な推論とツール利用を要する長時間にわたるタスク」で高い性能を発揮したという
- **料金**: プロバイダーの定価に基づく従量課金。詳細はGitHub Copilotのモデル・料金ドキュメントを参照
- **プラン別のアクセス**: Copilot Pro、Pro+、Max、Business、Enterpriseで利用可能
- **対応する利用環境**: Visual Studio Code、Visual Studio、Copilot CLI、GitHub Copilotクラウドエージェント、GitHub Copilotアプリ、JetBrains系IDE、Xcode、Eclipse
- **組織向けはデフォルト無効**: BusinessおよびEnterpriseの管理者は、メンバーが利用できるようにする前に、Copilot設定でGrok 4.6のポリシーを明示的に有効化する必要がある
- **展開状況**: 段階的なロールアウトのため、対象ユーザー全員に即座に行き渡るわけではない

## その後

今回のGitHub変更履歴の投稿は、これまでのAI業界追跡で宙に浮いていた話に事実上の決着をつけるものだ。Grok 4.6はxAIの次期リリース候補として言及されることがあったものの、x.aiの公式ドメインをはじめとするxAIの一次情報では一度も確認されておらず、その存在は未確認のままだった。今回、xAI自身の発表としてではなく、GitHub Copilotへのサードパーティ統合という形で登場したことが、このモデルが実在し、どこかしらの形で既にリリースされていることを裏付ける初めての確かな根拠となる。ただし、xAI自身は依然としてこのモデルについて直接何も発表していない点には注意が必要だ。
