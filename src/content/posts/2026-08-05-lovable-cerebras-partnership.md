---
title: "Lovable、Cerebrasと提携——応答速度の大幅改善を2027年までに目指す"
description: "LovableがCerebrasと提携し、最も応答遅延の影響を受けやすいAIワークロードをCerebrasのウェハースケール推論ハードウェア上で稼働させると発表。2027年までにアプリ構築のビルド・イテレーションループにおける応答速度を大幅に改善することを目指します。"
pubDate: 2026-08-05
category: lovable
type: news
tags: [Lovable, Cerebras, インフラ, 提携]
source: https://lovable.dev/blog/cerebras-partnership
draft: false
importance: low
---

Lovableは、Cerebras Systemsとの提携を発表しました。最も応答遅延の影響を受けやすいAIワークロードを、Cerebrasのウェハースケール推論ハードウェア上へ移行し、Lovableのビルド・イテレーションのループにおける応答速度を2027年までに大幅に改善することを目指します。

## 詳細

- **解決したい課題**: 従来のAI推論は、モデルを多数のチップに分散させて実行するため、チップ間の通信遅延が発生する。ブログ記事はこれを「通信税(communication tax)」と呼び、Lovable利用の中心である「説明→構築→レビュー」の反復ワークフローを遅くする要因になっていると説明
- **Cerebrasのアプローチ**: Cerebrasの「Wafer-Scale Engine」は、モデル全体を複数チップに分散させるのではなく、1枚のシリコンウェハーに収める設計で、チップ間通信のオーバーヘッドの多くを解消する
- **展開方法**: Lovableはまず「最も応答遅延の影響を受けやすいワークロード」を、Cerebras専用の計算リソースへ移行する。どの機能が最初に移行対象になるかは明らかにされていない
- **タイムライン**: 両社は「2027年までに応答速度を大幅に改善する」ことを目標に掲げており、即座の変化ではなく、複数フェーズにわたる取り組みとして進捗を順次共有していくとしている
- **コメント**: Lovable CEOのAnton Osika氏は「速いAIは遅いAIより価値がある。クリエイターは待ちたくない」とコメント。Cerebras CEOのAndrew Feldman氏は「Lovableはすでに、何百万もの人々にソフトウェア構築の手段を届けている」と述べている
- **背景**: CerebrasはAIコーディング領域で同様の低遅延志向の提携を相次いで結んでおり、例えばCognitionのDevinはすでに一部のワークロードをCerebras上で毎秒約1000トークンの速度で稼働させている

## その後

- 今回の発表に伴う即座のユーザー向け変更はなく、複数年にわたるインフラ投資のコミットメントという位置づけ
- LovableはCerebrasを活用したワークロードの展開に応じて、今後進捗を共有していくとしている
- 詳細はLovable公式ブログ(lovable.dev/blog/cerebras-partnership)を参照
