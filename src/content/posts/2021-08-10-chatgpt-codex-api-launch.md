---
title: OpenAI、自然言語をコードに変換する「Codex」をAPI公開――GitHub Copilotの頭脳に
description: OpenAIがGPT-3をコード特化で追加学習した「OpenAI Codex」をプライベートベータとしてAPI公開。同時期に登場したGitHub Copilotの頭脳としても採用された、コーディングAIの原点です。
pubDate: 2021-08-10
category: chatgpt
type: news
tags: [Codex, OpenAI, GitHub Copilot, GPT-3, "AI史"]
source: https://openai.com/blog/openai-codex/
draft: false
importance: medium
---

OpenAIが2021年8月10日、自然言語の指示を実行可能なコードに変換するAI「OpenAI Codex」をAPIの限定プライベートベータとして公開しました。GPT-3をベースに大量のソースコードで追加学習したモデルで、その約1カ月半前にGitHubが発表した「GitHub Copilot」技術プレビューの頭脳としてもすでに採用されていました。プログラミングの参入障壁を下げる存在として位置づけられたこの初代Codexは、2025年に生まれ変わる「OpenAI Codex」ブランドの出発点になります。

## 詳細

- **出自**: GPT-3の派生モデルとして開発され、自然言語による記述を実行可能なコードへ変換することに特化
- **対応言語**: Pythonを最も得意としつつ、JavaScript・Go・Perl・PHP・Ruby・Swift・TypeScript・Shellなど10種類以上のプログラミング言語に対応
- **性能**: OpenAIが公開したベンチマーク「HumanEval」で71.2%の問題を解けたと発表(元になったGPT-3は0%)
- **GitHub Copilotとの関係**: 2021年6月29日にGitHubが発表した「GitHub Copilot」技術プレビューは、このCodexを頭脳として採用しており、Copilot自体の一般公開はCodex API公開に先行していた
- **提供形態**: 当初は無料のプライベートベータとしてAPI経由で提供し、「安全に拡張できる範囲で可能な限り早くスケールする」と説明
- **開発思想**: 「コードは書けてもAPIの使い方を調べるのが大変」という参入障壁を下げ、既存のライブラリやAPIへの処理のマッピングを得意とする設計とされた

## その後

初代Codexモデルは、2023年3月にOpenAIがGPT-3.5・GPT-4系列への統合を理由にサービス終了を発表するまで、GitHub Copilotをはじめとするコード生成ツールの基盤であり続けました。「Codex」の名は一度姿を消しますが、2025年に全く新しいクラウド型・ターミナル型のコーディングエージェントとして復活することになります。
