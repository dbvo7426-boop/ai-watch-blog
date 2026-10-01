---
title: "Devin、ChatGPTサインインとGPT-6.1 Sol対応を追加"
description: "Cognitionは2026年9月29日、Devinに2つのOpenAI関連アップデートを投入。ChatGPT Plus/Proユーザーが既存プランのクォータでOpenAIモデルを利用できる「ChatGPTでサインイン」機能と、従来のSol系モデルと同等のベンチマークスコアをより低価格で実現するGPT-6.1 Solの即日対応。"
pubDate: 2026-09-29
category: devin
type: news
tags: [Devin, Cognition, OpenAI, ChatGPT, GPT-6.1 Sol, FrontierCode]
source: https://devin.ai/blog/sign-in-with-chatgpt
draft: false
importance: medium
---

Cognitionは2026年9月29日、AIソフトウェアエンジニア「Devin」にOpenAI関連の2つのアップデートを投入しました。1つは既存のChatGPTクォータをDevin内で使える「ChatGPTでサインイン」機能、もう1つは同日公開されたOpenAIの新モデル「GPT-6.1 Sol」への対応です。

## 詳細

- **ChatGPTでサインイン**: ChatGPT PlusまたはProプランを持つユーザーは、Devinのアカウント設定からアカウントを連携可能。連携後、Devin内でのOpenAIモデル利用は、Devin自身のクォータではなく、そのプランに既に含まれるCodex/ChatGPTの利用枠から消費される
- **対応プラットフォーム**: この連携はDevin Cloud(Lite・Normal・Ultra・Fusionの各モードで、有利な場合は自動的にGPTモデルを優先使用)、Devin Desktop、Devin CLI(ユーザーが手動でGPTモデルを選択)の全てで利用可能
- **利用上限の管理**: ユーザーはChatGPT側の設定で支出上限を設定でき、連携プランの上限に達すると自動的にDevin自身のクォータにフォールバックする
- **コスト面の狙い**: CognitionによればFusionモードで無料のサイドキックSWE-2とGPT-6 Astraを組み合わせることで、Astra単体利用に比べ約39%のコスト削減となり、連携したChatGPTプランをより長く活用できる
- **GPT-6.1 Solの投入**: 同日リリースされたGPT-6.1 Solは、Cognition独自のベンチマーク「FrontierCode 1.1」で60.4点(低推論強度設定では58.1点)を記録し、GPT-6 Sol(60.7点)やGPT-5.6 Sol(60.6点)とほぼ同等のスコアとなった
- **GPT-6.1 Solの価格**: 各推論強度でGPT-6 Solより44〜57%安価にタスクを実行可能。中強度では1タスクあたり0.31ドル(GPT-6 Solの最大強度は1.66ドル)、低強度では0.21ドルで、Cognitionは自社リーダーボード上で「1タスク0.30ドル未満のモデルとしては最高スコア」としている
- **提供状況**: いずれのアップデートもDevin DesktopとDevin CLIで即日利用可能。ChatGPTサインインはDevin Cloudでも利用できる

## その後

今回のリリースは、サードパーティの開発者向けツールが既存のChatGPTサブスクリプションを活用できるようにするOpenAIのDevDay 2026での取り組みと歩調を合わせたもので、DevinはNotionやVercelなどと並んでそのプログラムの対象ツールの1つに挙げられています。Cognitionにとっては、9月前半から続く「ほぼ毎週のように、より安く高性能なモデルが登場する」という流れを引き継ぐ動きであると同時に、ChatGPT加入者にとってはDevinのクレジットを別途追加購入するのではなく、既に支払い済みのプランを通じてコーディングエージェントの利用費を賄う理由を提供するものとなっています。
