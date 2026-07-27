---
title: Cognition、「Fable + Fusion」の組み合わせがOpusより安く高性能と発表
description: Devin開発元のCognitionが、自社のマルチエージェント構成「Fusion」とFable 5を組み合わせることで、Opus 4.8より低コストかつ高スコアを達成したとする検証結果を公開しました。
pubDate: 2026-07-13
category: devin
type: news
tags: [Devin, Cognition, Fable, Opus, FrontierCode]
source: https://cognition.com/blog/making-fable-cheaper-than-opus
draft: false
importance: low
---

Devin開発元のCognitionが、独自のマルチエージェント構成「Fusion」とAnthropicのFable 5を組み合わせた場合、Opus 4.8を単体で使うよりも低コストかつ高いスコアを達成できるとする検証結果を公開しました。3,000件の評価セッションを用いたFrontierCode 1.1ベースの分析です。

## 詳細

- **スコアとコスト比較**: 「Fable + Fusion(サイドキック構成)」は1回あたり1.86ドルでスコア60.7、対する「Opus + Fusion」は1回あたり2.04ドルでスコア54.6と、Fable側が低コスト・高スコアを記録
- **Fable単体との比較**: Fable単体をサイドキック構成にすることで、性能を維持したままコストを54%削減
- **挙動の違い**: 「Opusはインターンにつきっきりのマイクロマネージャーのように振る舞い、Fableは有能なエンジニアに任せるマネージャーのように振る舞う」と表現。Fableは早期に明確な制約とともに委任するのに対し、Opusは高コストな探索作業を経てから委任する傾向があるとしている
- **検証規模**: FrontierCode 1.1上で実施した3,000件の評価セッションに基づく分析

## 使ってみるには

- 本記事はDevin内部でのモデルルーティング戦略に関する技術検証で、単体の新機能や新製品ではありません
- 詳細な手法とデータはCognition公式ブログで公開されています
