---
title: Cognition、低コストでフロンティア級の新コーディングモデル「SWE-1.7」をDevinに投入
description: CognitionがDevin向けの新モデル「SWE-1.7」を発表。Kimi K2.7をベースにDevin自身のエージェント環境で追加の強化学習を行い、フロンティアモデルに迫る性能を大幅な低コストで実現しました。
pubDate: 2026-07-08
category: devin
type: news
tags: [Devin, Cognition, SWE-1.7, コーディングモデル]
source: https://cognition.com/blog/swe-1-7
draft: false
importance: medium
---

Devin開発元のCognitionが、新しいコーディングモデル「SWE-1.7」を発表しました。Moonshot AIの「Kimi K2.7 Code」をベースに、Devin自身のエージェント環境の中でさらに大規模な強化学習を重ねることで、フロンティアモデルに迫る性能を大幅に低いコストで実現したモデルです。

## 詳細

- **ベース技術**: 強化学習ずみのKimi K2.7 Codeに対し、Devinの実運用エージェント環境上でさらに大規模な強化学習を追加実施
- **改善点**: 学習インフラの高度化、より安定した学習プロセス、高品質なデータ、長時間タスク向けの新手法などRLパイプライン全体を強化
- **ベンチマーク**: FrontierCode 1.1 Mainで42.3%(GPT-5.5は43.0%、Opus 4.8は46.5%)、Terminal-Bench 2.1で81.5%(GPT-5.5は84.2%、Opus 4.8は86.9%)、SWE-Bench Multilingualで77.8%とGPT-5.5(76.8%)を上回りOpus 4.8(84.4%)にはやや及ばず
- **提供形態**: DevinのWeb・デスクトップ・CLIすべてから利用可能。Cerebras基盤上で毎秒1000トークンの高速推論を実現し、フロンティア級モデルよりも大幅に低いコストで提供

## 使ってみるには

- 発表当日からDevin(Web・デスクトップ・CLI)で利用可能
- SWE-1.7単体のAPI提供はなく、Devinのエージェント環境を通じてのみ利用できます
