---
title: "GitHub Agentic Workflows が一般提供を開始"
description: "Markdown の定義でコーディングエージェントを GitHub Actions 内で動かす GitHub Next のオープンソースプロジェクトが一般提供になりました。ARC 対応、モデルルーティング、エージェント隔離の強化が加わります。"
pubDate: 2026-10-28
category: copilot
type: news
tags: [GitHub Agentic Workflows, GitHub Actions, Copilot, GitHub Universe]
source: https://github.blog/changelog/2026-10-28-github-agentic-workflows-generally-available
draft: false
importance: high
---

GitHub Next のオープンソースプロジェクト GitHub Agentic Workflows が一般提供になりました。Issue のトリアージ、CI 失敗の分析、ドキュメント更新、テスト作成といった推論を要する作業を、GitHub Actions 内でコーディングエージェントに実行させて自動化できます。

## 詳細

- **仕組み:** 自動化を自然言語の Markdown ファイルで記述すると、標準の Actions YAML にコンパイルされます。既存のランナーグループやポリシー制約をそのまま利用でき、各ワークフローは GitHub Copilot または持ち込みのコーディングエージェントで動かせます。
- **安全対策:** エージェントは GitHub コンテンツの読み取り時に integrity filter のルールを守り、既定では読み取り専用権限で、Agent Workflow Firewall の背後にあるサンドボックス化されたコンテナで実行されます。出力は safe outputs で検証され、専用の threat detection ジョブが提案された変更を適用前にスキャンします。
- **プレビュー以降の追加点:** Docker-in-Docker 付きのセルフホスト ARC ランナー対応、`gh aw forecast` の正式化(threat detection のクレジットと月次レンジを含む)、モデル一覧の更新とワークフローごとのモデルプロバイダー選択、`gh aw add-wizard` で追加できる新テンプレート、タスクの種類と難易度に合わせて最適化するモデルルーター、Cloud Hypervisor または NVX マイクロ VM による隔離と、クロスリポジトリでのデータ漏えいを防ぐエンクレーブ。
- **顧客の声:** Accenture の Ben Alton 氏は、リードの一人が週約 29 時間を節約し、速度は平均で 2 倍超、コミットの 91% を AI が作成、本番エラーは 1 日約 11,000 件から 1,000 件未満になったと述べています。ベンダーが公開した証言であり、第三者による測定ではありません。
- **提供範囲:** github.com の GitHub Free、Team、Enterprise。既定の Copilot CLI エンジンを使う場合は Copilot ライセンスが必要です。

## その後

一般提供は、GitHub がバックグラウンドエージェントの実行基盤として Actions を位置付けていることを示します。記述は Markdown、実体はコンパイル後の YAML とすることで、ガバナンスを使い慣れた形に留めています。読み取り専用の既定値、ファイアウォール、脅威検出を重視しているのは、信頼できないリポジトリ内容をエージェントが扱うリスクへの対応でしょう。コスト管理は引き続き課題で、forecast コマンドは AI クレジットの支出を事前に見積もる前提を示唆します。Copilot ライセンス要件以外の料金は、発表では非公開です。
