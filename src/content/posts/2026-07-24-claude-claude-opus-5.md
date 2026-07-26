---
title: "Anthropic、新フラッグシップ「Claude Opus 5」を発表 ― コーディングと知識労働で最高水準に"
description: "Anthropicが最上位モデル「Claude Opus 5」を発表。コーディングや知識労働のベンチマークで最高水準の性能を示しつつ、価格はOpus 4.8と同水準に据え置いた。Claude.ai・Claude Code・Claude Cowork・APIで同時提供が始まっている。"
pubDate: 2026-07-24
category: claude
type: news
tags: [Claude, Opus, Anthropic, モデル]
source: https://www.anthropic.com/news/claude-opus-5
draft: false
importance: high
---

Anthropicは、Opusシリーズの最新モデル「Claude Opus 5」を発表した。思慮深く先回りして動く性格づけを備え、コーディングと知識労働の評価で最高水準の性能を記録している。価格は前モデルのOpus 4.8から据え置きで、Claude.ai、Claude Code、Claude Cowork、APIの全プラットフォームで同時提供が始まった。

## 詳細

- **位置づけ**: 検証と反復的な問題解決の能力を強化し、視覚的な出力の質も向上。思慮深く先回りして動く「プロアクティブ」な性格を持つモデルとして設計されている
- **ベンチマーク**: Frontier-Bench v0.1で全競合を上回り、Opus 4.8の2倍のスコアをより低コストで達成。CursorBench 3.2では最上位モデル「Claude Fable 5」のピーク性能に0.5%差まで迫りつつ、コストは半分に抑制。ARC-AGI 3では次点モデルの3倍のスコアを記録し、Zapier AutomationBenchでは次点モデルの約1.5倍のタスク完了率、OSWorld 2.0ではFable 5の結果をおよそ3分の1のコストで上回った
- **専門領域の強化**: 有機化学関連タスクでOpus 4.8比+10.2ポイント、タンパク質解析タスクで+7.7ポイントの性能向上を確認
- **価格据え置き**: 入力100万トークンあたり5ドル、出力100万トークンあたり25ドルとOpus 4.8から変更なし。高速モードは基本料金の2倍で処理速度が2.5倍になる
- **提供範囲**: Claude.ai、Claude Code、Claude Cowork、Claude API(モデル名`claude-opus-5`)で同時提供を開始
- **安全性**: アラインメントや安全性の指標も改善し、エージェント的タスクでの挙動のばらつきが小さくなったとされる
- **利用事例**: 取引会社が単一セッションで新取引所向けの市場データフィードを構築した例、図面画像から3D CADモデルを再構築するコンピュータビジョンパイプラインを作成した例、OSSのバグの真因を特定できた(競合モデルは表面的な修正にとどまった)例などが紹介されている

## 使ってみるには

- Claude.ai、Claude Code、Claude Coworkの各アプリでモデル選択メニューから「Claude Opus 5」を選ぶ
- API利用時はモデル名`claude-opus-5`を指定してリクエストする
- 高速な応答が必要な場合は高速モードを有効化する(処理速度2.5倍・料金2倍)
