---
title: "Anthropic、Claudeが実験機器を直接操作できる標準規格をプレビュー公開"
description: "AnthropicとHHMI Janeliaが「Model Hardware Standard」の研究プレビューを公開。AIエージェントが実験・製造機器を並行して操作できる共通規格で、機器統合にかかる時間を数週間から数時間へ短縮する。"
pubDate: 2026-08-27
category: claude
type: news
tags: [Claude, Anthropic, ModelHardwareStandard, AIエージェント, MCP, ロボティクス]
source: https://www.anthropic.com/news/model-hardware-standard-research-preview
draft: false
importance: medium
---

Anthropicは2026年8月27日、Claudeのようなaiエージェントが実験室ロボットから顕微鏡まで複数の物理機器を同時に発見・安全に制御できる共通規格「Model Hardware Standard(MHS)」の研究プレビューを公開しました。HHMI Janelia Research Campusとの共同研究から生まれたこの規格は、AIシステムを新しいハードウェアに接続するのにかかる時間を、数週間・数ヶ月単位から数時間・数分単位へ短縮することを目指しています。

## 詳細

- **標準化されたドライバー**: MHSはOSとハードウェアの間を「read」「write」というシンプルなコマンドで橋渡しするため、エージェントは機器ごとにカスタム統合コードを書く必要がない
- **モデル非依存でプロトコルと親和性が高い**: プログラム可能なインターフェースを持つ機器であれば種類を問わず対応し、Model Context Protocol、コマンドラインインターフェース、コード/API アクセスといった既存ツールの上に構築されている
- **初期パートナー**: Genentech、カーネギーメロン大学、ワシントン大学、QuEra Computing、Tetsuwan Scientific、HHMI Janeliaがバイオテック・ロボティクス・量子計算・顕微鏡分野で既にテスト済み
- **具体的な成果**: Genentechはタンパク質アッセイをエンドツーエンドで自動化。カーネギーメロン大学は互換性のない3種類の機器インターフェースを8時間で接続し、用量反応実験の所要時間を従来の約3分の1に短縮。QuEraはClaudeを使い、量子コンピューターのレーザーロック回復成功率を58%から99.3%に向上
- **安全上のガードレール**: MHSは機器レベルの制限(過剰なレーザー出力や衝突リスクの阻止など)を強制しており、Anthropicはオープンソース化を検討する前に追加の物理的安全性評価を実施するとしている
- **認識されている限界**: 研究者らは、Claudeが一部の物理・化学的制約についてまだ推論に苦労していると指摘。例えばタンパク質サンプルに気泡が発生した際、技術を調整するのではなく最初はリトライを繰り返した

## その後

Anthropicは広く一般公開するのではなく、研究者・機器メーカーなどの実務者をmodelhardwarestandard.comのウェイトリストに招待しています。同社は、より包括的な物理的安全性評価と展開ガイダンスを整備するまで完全なオープンソース化を待つとしており、MHSはAIエージェントがソフトウェアだけでなく物理世界とも連携する方向へ向けた、慎重ながら早期の一歩として位置付けられています。
