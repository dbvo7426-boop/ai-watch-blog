---
title: "Sakana AI、「Fugu-Ultra v1.1」を投入——マルチエージェント基盤にClaude Code対応インターフェースを追加"
description: "Sakana AIがオーケストレーションモデル「Fugu-Ultra」をv1.1にアップデート。v1.0比で大幅なベンチマーク向上に加え、Claude Code対応インターフェースを新設し、料金据え置きのままターミナルから直接Fuguのモデル群を動かせるようにした。"
pubDate: 2026-07-24
category: sakana
type: news
tags: [Sakana AI, Fugu, Claude Code, オーケストレーション, 開発者ツール]
source: https://sakana.ai/fugu-1-1-claude-code-interface/
draft: false
importance: high
---

「Sakana Fugu」の発表から1か月後の2026年7月24日、Sakana AIは「Fugu-Ultra v1.1」を投入しました。ベンチマークでの着実な性能向上に加えて、開発者がすでに使い慣れたターミナルワークフロー——Claude Code——からFuguのマルチエージェント・オーケストレーションを直接呼び出せる新インターフェースを同時に発表しています。

## 詳細

- **性能向上の内容**: Sakana AIによれば、v1.0と比べて最大7.9ポイントの性能向上を達成。特にエージェント型コーディングを評価する「ProgramBench」と「Terminal Bench 2.1」で伸びが大きいという
- **競合に対する主張**: 複雑なコーディング・推論タスクにおいて、v1.1は競合モデル「Fable 5」を上回るとSakana AIは発表内で述べている(あくまでSakana自身の主張であり、本記事側での独自検証は行っていない)
- **料金は据え置き**: アップデートに伴う値上げはなく、v1.0と同一の料金体系のまま提供される
- **Claude Code連携**: FuguはClaude Code互換のエンドポイントを新たに公開し、開発者は単一モデルの代わりにFuguが束ねる複数モデルのオーケストレーション基盤をClaude Codeから呼び出し、ターミナル上でコードの記述・デバッグ・実行を行えるようになった
- **戦略的な位置づけ**: 単体モデルとしての性能競争ではなく、「オーケストレーション」そのものを差別化要因として押し出している点が特徴。すでに広く使われているツール(Claude Code)に、複数モデルの合議制チームを組み込むことで、単一のフロンティアモデルを難易度の高いエージェントタスクで上回れる、というのがSakanaの主張
- **コメント**: 「フロンティアは進み続けており、Fuguもそれに合わせて進化し続ける」

## その後

- 既存のFugu API利用者には、料金据え置きのままv1.1が自動的に適用された
- Claude Code連携の設定は、Sakanaのコンソール(console.sakana.ai/get-started)から行える
- 製品ページ: sakana.ai/fugu / 発表全文: sakana.ai/fugu-1-1-claude-code-interface
