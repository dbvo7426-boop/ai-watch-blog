---
title: "Runway、Grok Botのプラグインに ― MCPにKlingモデルとBrand Kitsも追加"
description: "Runwayは9月17日にxAIの「Grok Bot」用プラグインとして登場。その後数日でKling系動画モデル4種と読み取り専用のBrand Kitsアクセスを、自社のModel Context Protocolサーバーに追加した。"
pubDate: 2026-09-17
category: runway
type: news
tags: [Runway, MCP, GrokBot, xAI, Kling, 動画生成]
source: https://runway.com/changelog
draft: false
importance: medium
---

Runwayは2026年9月17日、xAIの常時稼働AIエージェント「Grok Bot」用プラグインとして提供を開始しました。Runwayアカウントでサインインすれば、Grok Botのチャットから直接、画像や動画を生成できるようになります。これは、Runwayが1週間足らずの間に立て続けに行ったMCP(Model Context Protocol)関連の機能追加の第一弾でした。

## 詳細

- **Grok Bot向けRunway MCP(9月17日)**: RunwayがGrok Botのプラグインとして利用可能に。Runwayアカウントでサインインすれば、Grok Botユーザーはチャットを離れることなく画像・動画を生成できる(有料プラン対象)
- **Runway MCPにKlingモデルを追加(9月18日)**: Kling O3 4K、Kling 3.0 Standard、Kling O3 Standard、Kling 3.0 Motion Controlの4つのKling系動画生成モデルが、RunwayのMCPサーバー経由で直接呼び出せるようになった
- **Runway MCPにBrand Kitsを追加(9月22日)**: MCP経由で接続するエージェントが、ワークスペースの「Brand Kits」を参照素材として利用できるようになった。ただし現時点では読み取り専用で、Brand Kitsの作成・編集はこれまで通りRunway本体上でのみ行う
- **直近のAgent機能強化の延長線上**: これらの追加は、Runwayのアプリ内Agentが会話の中で直接Brand Kitsを作成・編集できるようになった機能(9月10日)や、チームがアセットのコメント欄でAgentを@メンションできるようになった機能(9月15日)に続くもの

## その後

わずか5日間で、RunwayはMCPサーバーの機能範囲を大きく広げました。従来の狭いエージェント管理用インターフェースから、Grok Botのような外部アシスタントがRunway自身の生成モデルを呼び出したり、ワークスペースのKlingモデルの選択肢やブランド素材を取り込んだりできる窓口へと進化しています。一方でBrand Kitsへのアクセスを読み取り専用に留めている点からは、外部連携を広げつつも、外部エージェントに「参照させる範囲」と「変更を許す範囲」を慎重に線引きしようとするRunwayの姿勢がうかがえます。
