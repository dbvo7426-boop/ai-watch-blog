---
title: "GitHub、HydraFusionを刷新し新グレード「HydraFusion Max」を追加"
description: "GitHubは、複数モデルを連携させるオーケストレーション機能HydraFusionのモデル構成・推論強度・ワークフローを刷新し、より高度なエージェント型タスク向けの新グレード「HydraFusion Max」を追加した。"
pubDate: 2026-10-14
category: copilot
type: news
tags: [GitHubCopilot, HydraFusion, オーケストレーション, AIモデル]
source: https://github.blog/changelog/2026-10-14-hydrafusion-updates-and-new-max-option
draft: false
importance: medium
---

GitHubは、GitHub Copilotの複数モデル連携機能「HydraFusion」を刷新するとともに、より高度なエージェント型コーディングタスク向けの上位グレード「HydraFusion Max」を新たに導入しました。いずれもVS Code・Copilotアプリ・Copilot CLIでリサーチプレビュー機能として提供されています。

## 詳細

- **HydraFusionの仕組み**: 複数のモデルを連携させて1つの応答を生成する仕組みで、ユーザーがタスクごとに手動でモデルを選ぶ必要がなくなる
- **モデル構成の更新**: HydraFusionとHydraFusion Maxは、Claude Opus 5.5・GPT-6 Astra・GPT-6.1 Sol・GPT-6 Lunaから構成されるようになり、オーケストレーションのワークフローが各段階をどのモデルに担当させるかを決定する
- **段階別の推論強度**: これまでは各モデルがデフォルトの推論強度で動作していたが、現在は初稿作成時は中程度、レビュー時は高い推論強度を使用するよう変更
- **Cascadeワークフローの変更**: Cascadeは最初のモデルから開始し、必要に応じてより強力なモデルへとエスカレーションする仕組みだが、新たに初稿の内容を検証する判定ステップを追加し、必要な場合のみ修正を要求するようになった
- **Critiqueワークフローの変更**: これまで主にテキスト要約に依存していたCritiqueが、ツールを使って実際のワークスペースを直接検査するようになり、並列で複数の批評役モデルを実行する
- **新グレード「HydraFusion Max」**: HydraFusionと同じアーキテクチャを採用しつつ、最上位の性能に向けて調整されており、深さと網羅性が重要なタスクではより高い推論強度を適用しながら、オーケストレーションによってトークン効率も管理する。HydraFusionが速度・コスト・性能のバランスを取るエージェント型タスク向けであるのに対し、Maxは最も深い推論を要するタスク向けと位置付けられている
- **提供状況**: 実験的機能・プレビュー機能が有効な場合、Copilot Pro・Pro+・Business・Enterpriseの各プランで両グレードを利用可能(組織のモデルポリシーに従う)

## その後

今回の更新は、GitHubがCopilotにおいて単一モデル選択よりもモデル・オーケストレーションを既定の利用形態として重視する姿勢をさらに強めるものです。同じ週にはGemini 4 ArgonのCopilotサポートやエンタープライズ管理設定の強制適用に関する更新も行われており、Copilotの基盤となるモデルラインナップとオーケストレーション・ロジックの双方が並行して急速に進化していることを浮き彫りにしています。
