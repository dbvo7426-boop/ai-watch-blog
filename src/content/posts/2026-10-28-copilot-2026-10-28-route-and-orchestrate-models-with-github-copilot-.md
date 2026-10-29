---
title: "GitHub Copilot Fusion が一般提供、ローカルモデルのルーティングはプレビュー"
description: "Copilot Fusion は 3 段階の努力レベルでタスクごとにモデルをルーティング・オーケストレーションします。実験的プレビューではオンデバイスとクラウドのモデル間の振り分けにも対応しました。"
pubDate: 2026-10-28
category: copilot
type: news
tags: [GitHub Copilot, Copilot Fusion, Model routing, Local models, GitHub Universe]
source: https://github.blog/changelog/2026-10-28-route-and-orchestrate-models-with-github-copilot-fusion
draft: false
importance: high
---

GitHub Copilot Fusion が一般提供になりました。タスクごとにモデルを選ぶ代わりに Copilot Fusion を選ぶと、Copilot がモデルのルーティングとオーケストレーションを行います。関連する実験的プレビューでは、Fusion がオンデバイスモデルとクラウドモデルのどちらを使うかも判断します。

## 詳細

- **概要:** Project HydraFusion のマルチモデル・オーケストレーションと、Copilot の auto モデル選択のファインチューニングされた選択を組み合わせ、性能とコスト効率の両立を狙います。
- **ベンチマーク(GitHub 主張):** Artificial Analysis Coding Agent Index で Copilot Fusion Max は 60 点となり、Claude Code with Opus 5.5 Max との差は 2 点以内。タスクあたりの平均 API コストは約半分、トークンも約半分、所要時間は約 40% 短縮とされています。
- **努力レベル:** Standard(日常のコーディング向けの汎用モデル)、High(難しいタスク向けの高性能モデル)、Max(最も要求の高い作業向けの最高性能モデル)。
- **ワークフロー:** Single(単一モデル)、Cascade(効率的なモデルが下書きし、品質チェックで採用か上位モデルへの引き上げかを判断)、Critique(一方が下書き、別モデルがレビューし、元のモデルが修正)。
- **管理者制御:** Fusion はエンタープライズ・組織のモデルポリシーで有効なモデルだけを使います。管理者は Fusion 専用にモデルを無効化でき、エンタープライズ管理設定で任意のレベルの Fusion を既定モデルにできます。
- **課金:** 使用した各モデルが標準レートで課金されます。期間限定で、有料プランのユーザーは Fusion 利用時のモデル費用が 30% 割引です(終了日は非公開)。
- **提供範囲:** すべての Copilot プランの VS Code、GitHub Copilot アプリ、Copilot CLI、JetBrains IDE。他のクライアントも順次対応予定。リサーチプレビューで auto、HydraFusion、HydraFusion Max を有効にしていた場合は自動で移行されます。
- **顧客の声:** AT&T の Hari Pokhrel 氏は、Fusion Standard が適切なモデルを自動選択することでトークン効率が向上したと述べています。
- **ローカルモデルのルーティング(実験的・オプトイン):** Copilot CLI、Copilot アプリ、VS Code で、Fusion が対応するオンデバイスモデルとクラウドモデルを選択します。対応 Windows 端末では Windows ML プロバイダー経由で MAI Code 1.1 Flash をダウンロード・設定できます(CLI は実験モードと /model、アプリは Settings > Model providers と Settings > Experiments の Local model auto routing、VS Code は `chat.copilot.localModel.enabled`)。Fusion で Standard を選ぶと Copilot が振り分けます。
- **独自のローカルモデル:** Copilot CLI のルーティングは、ローカルの OpenAI 互換サーバー経由で MAI Code 1.1 Flash または Qwen3.8 Flash Next を使う構成なら Windows、macOS、Linux で動作します。ダウンロードと推論環境は自分で管理します。BYOK でモデルを追加しても、自動的に Fusion の対象にはなりません。アプリのインテリジェントルーティングは当面、管理された Windows ML モデルのみ対応です。
- **注意点:** ルーティングの判断はクラウドで行われるため、ローカル推論でもオフラインにはなりません。ローカルモデルの安全対策は、Copilot 提供のクラウドモデルと異なる場合があります。

## その後

Fusion はモデル選択を開発者からプラットフォームへ移し、管理者ポリシーを歯止めにする設計です。コスト面の主張は GitHub 自身のベンチマーク数値に基づいており、ここでは検証されていません。ローカルルーティングはハイブリッド利用の方向性を示しますが、クラウド側の判断が残る点と、Windows 中心の管理されたセットアップが当面の制約です。
