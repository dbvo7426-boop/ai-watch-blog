---
title: Claudeが画面を見てマウスを操作──「コンピュータ操作」機能をベータ公開
description: Anthropicが、Claudeが人間のようにパソコン画面を見てカーソル操作・クリック・入力を行う「computer use」機能をAPIベータで公開。同時に強化版Claude 3.5 SonnetとClaude 3.5 Haikuも発表しました。
pubDate: 2024-10-22
category: claude
type: news
tags: [Claude, "computer use", "AI史"]
source: https://www.anthropic.com/news/3-5-models-and-computer-use
draft: false
importance: high
---

Anthropicが2024年10月22日、Claudeがパソコン画面を見てカーソルを動かし、クリックや文字入力を行う新機能「コンピュータ操作(computer use)」をAPIベータで公開しました。フロンティアAIモデルとしてこの種の機能を公開ベータで提供するのは初めてで、強化版のClaude 3.5 Sonnetと新モデルClaude 3.5 Haikuも同時発表されています。

## 詳細

- **コンピュータ操作(ベータ)**: 開発者がClaudeに対し、人間と同様に画面を見ながらカーソル移動・クリック・タイピングでソフトウェアを操作させられる機能。Anthropic自身「現時点では実験的で、時に扱いにくく誤りも起きやすい」と位置づけていた
- **強化版Claude 3.5 Sonnet**: コーディングベンチマークSWE-bench Verifiedのスコアを33.4%から49.0%に押し上げ、推論特化モデルや専用システムを上回る結果に。価格・速度は従来のSonnetと同一を維持
- **Claude 3.5 Haiku**: 旧世代Haikuと同等の速度を保ちながら、多くのベンチマークでClaude 3 Opus相当の性能を発揮。SWE-bench Verifiedでも40.6%を記録
- **提供範囲**: Anthropic API、Amazon Bedrock、Google Cloud Vertex AIで即日利用可能。RepletやCognitionなどが早期に自動化タスクでの活用を試験
- **注意点**: スクロールやドラッグ操作はまだ不安定とされ、Anthropicはリスクの低いタスクからの導入を推奨していた

## その後

この「コンピュータ操作」は、後にClaudeがブラウザやターミナルを直接操作して自律的にタスクをこなす方向性の出発点となった。2025年の「Claude Code」をはじめ、エージェント型製品群の基盤技術として位置づけられていく。
