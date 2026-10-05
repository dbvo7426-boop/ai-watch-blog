---
title: "Runway、OpenAIの「Dots」から利用可能に ― AgentにSeedanceドラフトモード、MCPにIdeogram 4.5も追加"
description: "Runwayは2日間で3つの更新を実施。OpenAIの新しい常時稼働エージェント「Dots」から動画撮影を依頼できる連携、Seedance 2.5による高速480pドラフトモードのAgent搭載、MCPサーバーへのIdeogram 4.5対応を発表した。"
pubDate: 2026-10-01
category: runway
type: news
tags: [Runway, OpenAI, Dots, MCP, Seedance, Ideogram, 動画生成]
source: https://runway.com/changelog
draft: false
importance: medium
---

Runwayは2026年10月1日と2日の2日間で、3つの製品アップデートを発表しました。動画生成機能がOpenAIが新たに発表した常時稼働エージェント「Dots」から利用できるようになったほか、アプリ内Agentには Seedance 2.5を基盤とした高速なドラフトモードが追加され、MCPサーバーはIdeogram 4.5への対応を獲得しました。

## 詳細

- **OpenAI「Dots」とRunwayの連携(10月1日)**: RunwayはOpenAIがDevDayイベントで発表した常時稼働の個人向けエージェント「Dots」から利用できるようになった。Runwayは「寝る前にdotに指示しておけば、撮影プランを立て、Runwayが撮影を行い、朝には完成した動画が出来上がっている」とこのワークフローを説明。Dotsエージェントが夜間にCMや動画の構成を企画し、実際の生成をRunwayに任せる形になる
- **AgentにSeedance 2.5ドラフトモードを搭載(10月2日、全プラン対象)**: Runwayのアプリ内Agentが、Seedance 2.5のドラフトモードで生成できるようになった。生成後の品質向上処理を伴う高速な480pドラフトを作成する機能で、Agentの会話内で切り替え可能。フル解像度でレンダリングする前に、安価にショットを試行錯誤できるようにする狙い
- **Runway MCPにIdeogram 4.5が対応(10月2日、有料プラン対象)**: Ideogram 4.5がRunwayのModel Context Protocol(MCP)サーバー経由で呼び出せるようになった。これにより、RunwayのMCPが既に対応しているKlingなど他社モデルと並んで、Ideogramの画像生成機能もMCPベースのワークフローに直接組み込めるようになる

## その後

今回の3つの更新はいずれも看板モデルの新発表ではありませんが、Runwayが今年通して進めてきた2つの方向性をさらに前進させるものです。1つは、自社アプリの外からでも生成モデルを呼び出せるようにすること(MCP経由、そして今回はOpenAIの「Dots」経由)、もう1つは、最終レンダリング前により安価・高速に試行錯誤できる手段をAgentに与えることです。特にDots連携は、Runwayの動画生成機能をOpenAIの新しいエージェント製品に初日から組み込む形となり、9月末に発表されたRunway自身のOpenAI Marketplaceパートナーシップを置き換えるものではないものの、注目すべき販路拡大の一手と言えます。
