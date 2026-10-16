---
title: "GitHubの「エージェント型コードスキャン自動修正」が一般提供開始"
description: "GitHubのエージェント型自動修正機能が、コードベースを探索して修正を作成し、CodeQLを再実行してアラートの解消を確認した上でレビュー用プルリクエストを開くようになった。最大25件のアラートを1つのPRにまとめることも可能。Enterprise Cloud上のGitHub Advanced Security顧客向け。"
pubDate: 2026-10-15
category: copilot
type: news
tags: [GitHubCopilot, コードスキャン, セキュリティ自動修正, CodeQL]
source: https://github.blog/changelog/2026-10-15-agentic-autofix-for-code-scanning-alerts-general-availability
draft: false
importance: medium
---

GitHubのコードスキャンアラート向けエージェント型自動修正機能が一般提供開始となり、Copilotが開発者のように実際にコードベースを操作してセキュリティアラートを解消できるようになりました。

## 詳細

- **仕組み**: アラートをCopilotに割り当てると、関連ファイルを探索し、修正を作成し、CodeQLを再実行してアラートが解消されたことを確認した上でレビュー用プルリクエストを開く。修正が問題を解決しない場合は繰り返し試行し、生成されるPRには修正内容、アラート解消の理由、実施した検証手順が記載される
- **利用方法**: 有効化すると、無料の「Generate Fix」オプションが「Assign to Copilot」ボタンに置き換わる。単一のアラートの割り当て、最大25件のアラートを1つのPRにまとめる、REST API経由での割り当てが可能。対象はリポジトリのデフォルトブランチ上のアラートのみ
- **追加対応**: PRへのコメントやリポジトリのAgentsタブから、さらなる修正を依頼できる
- **提供状況**: データレジデンシー提供を含むGitHub Enterprise Cloud上のGitHub Code SecurityおよびGitHub Advanced Security顧客向け。利用には、エンタープライズ管理者による「Agentic autofix」ポリシーの有効化、組織またはリポジトリ管理者によるCode Security設定での有効化、Copilotの課金方法が必要。利用はCode Security予算のAI Creditsと、GitHub Actionsの実行時間を消費する

## その後

今回のGA提供は、GitHubのセキュリティ自動化への取り組みを、検出から完全な修正へと拡張するものです。専用の漏洩シークレット検出モデルやローカルサンドボックスと並び、Copilotが脆弱性を単に指摘するだけでなく、自律的に修正・検証することを目指す一連のエージェント型セキュリティ機能を締めくくるものとなっています。
