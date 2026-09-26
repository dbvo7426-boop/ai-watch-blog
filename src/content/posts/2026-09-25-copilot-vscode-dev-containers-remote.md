---
title: "VS Code 1.139、CopilotエージェントをSSH・Tunnel・WSL経由のDev Container上で実行可能に"
description: "GitHubの9月21日週のCopilotまとめでは、VS Code 1.139がSSH・Tunnel・WSLのリモート接続をまたいでDev Container内でエージェントを実行できるようになったことを紹介。コンパクトなセッション一覧表示やフィルタリング、チャットペインのレイアウトプレビューも追加された。"
pubDate: 2026-09-25
category: copilot
type: news
tags: [GitHubCopilot, GitHub, VSCode, DevContainers, 開発者ツール]
source: https://github.blog/changelog/2026-09-25-github-copilot-weekly-releases-september-21
draft: false
importance: low
---

GitHubの9月21日週のCopilotまとめでは、その週の主要リリース——Claude Opus 5.5、GPT-6 Sol/Luna、Grok 4.7のCopilot対応、ローカルサンドボックス、Slack/Teams連携の更新——に加え、他では取り上げられていないVS Codeの更新が紹介されました。

## 詳細

- **VS Code 1.139のDev Container対応**: CopilotエージェントがSSH・Tunnel・WSLのリモート接続をまたいでDev Container内で実行できるようになり、これまで対応していなかったリモート開発環境にもエージェント的ワークフローが拡張された
- **セッション整理**: エージェントセッションを管理するためのコンパクト表示とフィルタリングオプション
- **レイアウトプレビュー**: チャットペインを別々に表示するか統合表示するかを選べる新しいプレビューオプション

## その後

Dev Container対応により、ローカルマシン上で直接作業するのではなく、SSH・Tunnel・WSL経由でリモート開発を行っている開発者にとっての抜け穴が解消され、Copilotのエージェント機能をそうした環境にも持ち込めるようになります。
