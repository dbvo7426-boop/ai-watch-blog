---
title: "GitHub Copilot週次アップデート、Jira連携と実験的アダプティブモデルルーティングを追加"
description: "GitHubの9月7日週のCopilotリリースノートでは、CopilotアプリへのJira課題連携、Copilot CLIでの実験的アダプティブモデルルーティング「Project HydraFusion」、VS Codeでのエージェントタスクの定期実行、JetBrains向け企業サンドボックス制御が発表された。"
pubDate: 2026-09-10
category: copilot
type: news
tags: [GitHubCopilot, GitHub, Jira, VSCode, JetBrains]
source: https://github.blog/changelog/2026-09-10-github-copilot-weekly-releases-september-7
draft: false
importance: medium
---

GitHubは9月7日週のCopilotリリースまとめを公開しました。新しいJira連携と実験的なアダプティブモデルルーティングの仕組みが目玉です。

## 詳細

- **Copilotアプリ内のJira連携**: Jiraの課題を共有キャンバスに取り込んで作業を優先順位付けでき、Copilotが調査・実装・プルリクエスト準備の全工程を通じてコンテキストを維持したまま「Jiraの課題を行動に変える」ことができる
- **Project HydraFusion(実験段階)**: Copilot CLI内のアダプティブモデル連携システムで、ローカル・クラウド・複合モデルの間でリクエストを自動的に振り分け、タスクごとに性能・コスト・レイテンシのバランスを取る
- **VS Code 1.137のエージェント自動化**: エージェントタスクの定期実行(1時間ごと・毎日・毎週・オンデマンド)がパブリックプレビューを開始。対話的なコード支援向けの実験的な音声モードも追加され、リポジトリを開かずに「Agents」ウィンドウ内で直接課題やプルリクエストをレビュー可能に
- **JetBrains向け企業向け制御**: 管理者がJetBrains系IDEのCopilot向けサンドボックス設定を一元管理でき、有効化・ファイルシステム/ネットワークアクセス・プロキシ設定・開発ツールへのアクセスを統制できる

## その後

生産性ツール連携(Jira)、効率化の実験(HydraFusionによるコスト・レイテンシを考慮したルーティング)、そしてVS Code・JetBrainsでの自動化・ガバナンス機能の継続的な追加という組み合わせは、GitHubがほぼ全てのCopilot利用面に同時展開を続けている週次ペースを改めて示すものです。
