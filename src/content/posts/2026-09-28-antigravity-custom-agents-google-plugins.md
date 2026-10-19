---
title: "Google Antigravity、公式Googleプラグインにカスタムエージェントを搭載 Flutter・Firebase・Google Play向け"
description: "Antigravity向けの公式Googleプラグインにカスタムエージェントが加わった。Flutterのアクセシビリティ監査、Firebaseのセキュリティルール作成支援、Google Playの提出前リリースチェック(読み取り専用)の3つ。"
pubDate: 2026-09-28
category: antigravity
type: news
tags: [Google, Antigravity, カスタムエージェント, プラグイン, Flutter, Firebase, Android]
source: https://antigravity.google/blog/custom-agents-in-google-plugins
draft: false
importance: medium
---

Googleが、Antigravity向けの公式Googleプラグインにカスタムエージェントを組み込み始めた。配布は「Build with Google」のプラグイン連携を通じて行われる。カスタムエージェントはAntigravityで8月12日に導入された機能で、専用の指示、専用のコンテキストウィンドウ、専用のツールを持つ特化型のエージェントだ。社内ですでにカスタムエージェントを活用していたGoogleの各製品チームが、それを開発者向けに提供し始めた形になる。第1弾はFlutter、Firebase、Google Play向けの3つ。

## 詳細

- **Flutterアクセシビリティエージェント**(Flutter/Dartプラグイン):
  - FlutterチームがAntigravityと共同で開発した。ワークスペースの中からアクセシビリティを監査する
  - セマンティックラベルの付け忘れ、推奨サイズの48x48 dpより小さいタップ領域、色のコントラスト不足を見つけ出す
  - レポートを作成し、ウィジェットを`Semantics`で囲む、タップ領域を広げるといった、Flutterらしい書き方で修正まで行う
- **Firebaseセキュリティルールエージェント**(Firebaseプラグイン):
  - Firestoreのセキュリティルールの作成、検証、強化を手伝う
  - アプリのデータスキーマと要件からルール一式を組み立て、緩すぎる読み書き権限を本番に出る前に指摘する
  - 公式Firebaseプラグインの設定から有効にできる
- **Google Play提出前リリース監査エージェント**(Android):
  - リリースブランチを切る前にリリース要件を確かめる、読み取り専用のチェック役。対象は、target SDKのバージョン、フォアグラウンドサービスの種類の宣言、exportedなintent-filterのセキュリティ、R8のkeepルール
  - ターミナルから`agy --agent play-release-audit`で呼び出す。定義ファイルは`.agents/agents/play-release-audit.md`に置く
  - 例として示された定義では、モデルに`gemini-3.8-flash`、権限モードに`plan`(読み取り専用)を指定し、ツールは`view_file`と`run_command`、スキルは`play-policy-insights`、`r8-analyzer`、`android-intent-security`を使う
  - ポリシーと権限、インテントとexportのセキュリティ、R8/DEXの最適化状態、最終レポートの4段階で進む。結果はAPPROVED、CONDITIONAL、BLOCKEDのいずれかで、指摘ごとに深刻度と対処法が添えられる
- **非公開の情報**:料金、一般提供の開始日、利用実績の数字は示されていない

## その後

今回のプラグインは、カスタムエージェントが何を目指しているかをよく表している。何でもこなす1つのコーディングエージェントではなく、プラットフォームの提供元が保守する、用途を絞った再利用できる専門家としてのエージェントだ。Google自身の製品チームが作っているため、Flutter、Firebase、AndroidといったGoogleのエコシステムではAntigravityがはじめから有利な立場にある。CursorやClaude Codeのような競合は、サードパーティ製のプラグインでしか対抗できない。Googleは開発者にも自作のカスタムエージェントの共有を呼びかけており、より広いプラグインマーケットプレイスへの布石ともいえる。
