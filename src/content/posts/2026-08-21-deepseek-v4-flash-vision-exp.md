---
title: "DeepSeek、初のビジョンモデル「V4-Flash-Vision-Exp」を追加"
description: "DeepSeekがAPIにV4-Flashのマルチモーダル実験版を追加。テキスト系のエージェント・推論性能を維持したまま、視覚理解能力を大きく引き上げ、マルチモーダルエージェントタスクでOpus-4.8に迫る水準を実現。"
pubDate: 2026-08-21
category: deepseek
type: news
tags: [DeepSeek, V4-Flash, ビジョン, マルチモーダル, API]
source: https://api-docs.deepseek.com/updates/
draft: false
importance: medium
---

DeepSeekは2026年8月21日、APIにひっそりと初の画像理解対応モデルを追加しました。実験版として位置づけられた「DeepSeek-V4-Flash-Vision-Exp」で、`model='deepseek-v4-flash-vision-exp'`として利用できます。V4-Flash系統のマルチモーダル版にあたり、テキストモデルのエージェント・推論性能をそのまま維持しつつ、本格的な画像理解能力を追加した点が特徴です。

## 詳細

- **テキスト性能は維持**: 純粋なテキストタスクでは、V4-Flash-Vision-Expは標準版のDeepSeek-V4-Flashとほぼ同等のスコアを記録。Terminal Bench 2.1(83.9)、NL2Repo(57.7)、DeepSWE(59.3)、DSBench-Hard(63.6)など、エージェント・推論・知識系ベンチマークで遜色ない結果
- **新設の視覚系ベンチマーク**: AutomationBench(Public)で25.7、ApexBench(Pass@1)で36.5、Agents' Last Examで27.3、Chartographyで64.3、ZeroBench(Pass@5)で35.0を記録
- **テキスト専用モデルからの大幅な飛躍**: DeepSeekは今回の視覚理解性能の向上を「大きな飛躍」と表現しており、マルチモーダルエージェントの能力でAnthropicのOpus-4.8に近づいたとしている
- **あくまで実験段階**: モデル名に明示的に「実験版」と付いており、正式な安定版リリースまでにはさらなる改良が見込まれる
- **現時点ではAPI限定**: DeepSeek APIを通じて利用可能。コンシューマー向けアプリやWebインターフェースへの反映は今のところ発表されていない

## その後

DeepSeekは、このビジョン版について既存のV4-Flash料金体系とは別の価格設定を発表しておらず、実験版から正式版への移行時期についても明言していません。開発者はDeepSeekの公式ビジョンガイドを参照しながら、チャート読み取り・スクリーンショットベースの自動化・ビジュアルQAといったマルチモーダルエージェントのワークフローを、すでにAPI経由で試すことができます。
