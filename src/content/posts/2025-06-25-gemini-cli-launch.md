---
title: Google、オープンソースのターミナルAIエージェント「Gemini CLI」を公開
description: Googleがターミナルで動くオープンソースAIエージェント「Gemini CLI」を発表。Apache 2.0ライセンスで公開し、個人アカウントなら無料でGemini 2.5 Proの100万トークンコンテキストを利用できるようにした。
pubDate: 2025-06-25
category: gemini
type: news
tags: [Gemini CLI, Google, オープンソース, "AI史"]
source: https://blog.google/technology/developers/introducing-gemini-cli-open-source-ai-agent/
draft: false
importance: medium
---

Googleが2025年6月25日、ターミナルで動くオープンソースAIエージェント「Gemini CLI」を発表しました。Apache 2.0ライセンスで全面公開し、個人のGoogleアカウントさえあればGemini 2.5 Proの100万トークンコンテキストウィンドウを無料で使えるようにしたのが最大の特徴で、Claude CodeやOpenAI Codexに対抗するGoogleの回答として登場しました。

## 詳細

- **オープンソース**: コード全体をApache 2.0ライセンスでGitHub上に公開し、誰でも中身を確認し、問題を報告し、開発に貢献できる形をとった
- **無料枠**: 個人のGoogleアカウントでログインするだけでGemini Code Assistの無料ライセンスが付与され、1分間60リクエスト・1日1,000リクエストという、当時としては業界屈指の無料利用枠を提供
- **できること**: コーディングだけでなく、Google検索によるグラウンディング、Model Context Protocol(MCP)対応、カスタムプロンプト設定など、幅広いタスクの自動化・問題解決に対応
- **非対話型実行**: スクリプトやワークフローに組み込める非対話モードを備え、CI/CDなどの自動化パイプラインからも呼び出し可能に
- **Gemini Code Assistとの関係**: エンジンの基盤技術をGoogleのIDE向けAIアシスタント「Gemini Code Assist」と共有しており、VS Codeとターミナルの両方でエージェントモードによる多段階の計画・エラー修復ができるようにした
- **導入方法**: メールアドレスのみでGitHubの`gemini-cli`リポジトリから利用開始できる手軽さを訴求

## その後

Gemini CLIはその後急速に開発が進み、2025年8月にはVS Code連携の強化、12月には新モデル「Gemini 3 Flash」の搭載と機能を拡充。GitHubスターは10万を超え、コミュニティから6,000件超のプルリクエストが merge されるなど、オープンソースプロジェクトとして大きな支持を集めました。しかし2026年5月、Googleは後継の「Antigravity CLI」への統合を発表し、個人向けのGemini CLIは1年足らずでその役目を終えることになります。
