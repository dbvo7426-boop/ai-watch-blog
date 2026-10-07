---
title: "GitHub Copilotの「ローカルサンドボックス」が一般提供開始"
description: "GitHub Copilotのローカルサンドボックス機能が一般提供へ移行。Microsoft eXecution Container(MXC)を用いて、エージェント型ワークフローのファイル・ネットワーク・認証情報へのアクセスを制御する安全な実行境界を、CLI・アプリ・VS Codeで追加コストなしで提供する。"
pubDate: 2026-10-07
category: copilot
type: news
tags: [GitHubCopilot, サンドボックス, セキュリティ, MXC]
source: https://github.blog/changelog/2026-10-07-local-sandboxing-for-github-copilot-now-generally-available
draft: false
importance: medium
---

GitHub Copilotの「ローカルサンドボックス」機能が一般提供に移行し、開発者自身のマシン上で動作するエージェント型Copilotワークフローに安全な実行境界を提供するようになりました。

## 詳細

- **機能の内容**: AIが生成したツールやコマンドがシステムリソースとどのようにやり取りできるかを制限する安全な実行境界を構築。ファイルシステムの読み書き権限、ネットワークおよびローカルネットワーク接続、認証情報(GitおよびGitHub CLI)へのアクセス、その他の機能を、開発者が定義したポリシーに基づいて制御する
- **技術的な実装**: 「Microsoft eXecution Container(MXC)」を基盤とし、サンドボックスのルールをWindows・macOS・LinuxそれぞれのネイティブなOS制御へ一貫して変換する
- **エンタープライズ向け制御**: 組織は開発者が上書きできないサンドボックス要件を強制でき、MCPや言語サーバーを含むローカルツールにも制限を拡張し、組織のニーズに応じたガバナンスポリシーを設定できる
- **モデルに依存しない**: サンドボックスのポリシーは、基盤となるAIモデルに関わらずツールが何にアクセスできるかを制御するものであり、モデル自体の挙動を統制するものではない
- **提供状況**: GitHub Copilot CLI、Copilotアプリ、Agent Hostを使用するVS Codeセッションで一般提供開始。既存のCopilotサブスクリプションに追加コストなしで含まれる

## その後

ローカルサンドボックスの一般提供開始は、Copilotの専用漏洩シークレット検出モデルやCLIでのローカルモデル発見機能と同じ週に行われ、GitHubが開発者のマシン上でCopilotに許す自律的なエージェント行動の範囲を広げる中で、セキュリティと制御に重点を置いた一連のリリースを形成しています。
