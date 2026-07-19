---
title: 「Gemini CLI」に新モデル「Gemini 3 Flash」搭載、2.5 Proより3倍速く4分の1以下のコストに
description: Gemini CLIが新モデル「Gemini 3 Flash」に対応。エージェント型コーディングのSWE-bench Verifiedで78%を記録し、Gemini 3 Proを上回りながら2.5 Proの3倍の速度・4分の1未満のコストを実現した。
pubDate: 2025-12-17
category: gemini
type: news
tags: [Gemini CLI, Google, Gemini 3, "AI史"]
source: https://developers.googleblog.com/gemini-3-flash-is-now-available-in-gemini-cli/
draft: false
importance: medium
---

Googleが2025年12月17日、「Gemini CLI」で新モデル「Gemini 3 Flash」を利用可能にしたと発表しました。エージェント型コーディングの指標であるSWE-bench Verifiedで78%を記録し、上位モデルのGemini 3 Proや従来の2.5系列を上回りながら、2.5 Proと比べて3倍速く、コストは4分の1未満というバランスの良さが特徴です。

## 詳細

- **性能**: SWE-bench Verifiedで78%を記録し、2.5系列だけでなくGemini 3 Proも上回るスコアを達成
- **速度とコスト**: Gemini 3 Proと比べて4分の1未満のコストで、2.5 Proの3倍の速度を実現。ターミナル作業に多い高頻度なやり取りに適したモデルと位置付け
- **対応タスク**: 3Dグラフィック生成や大規模コンテキストのコード解析など、従来はPro級モデルでないとこなせなかったタスクにも対応可能に
- **提供対象**: Gemini CLIおよびGoogle AI Pro/Ultraの有料利用者、有料APIキー利用者に提供。無料枠ユーザーへは順次段階的に展開
- **導入方法**: Gemini CLI バージョン0.21.1以降にアップデートし、設定で「プレビュー機能」を有効化した上で、モデル選択メニューからGemini 3を選択
- **自動ルーティング**: 複雑なタスクにはGemini 3 Pro、日常的な作業にはFlashを自動で振り分ける仕組みも用意

## その後

Gemini 3 Flashの搭載は、Gemini CLIが実用ツールとして定着していく過程の重要な一歩となりました。もっとも、Gemini CLI自体はこの半年後の2026年5月、Googleの新プラットフォーム「Antigravity」への統合が発表され、個人向け提供の終了という大きな転換点を迎えることになります。
