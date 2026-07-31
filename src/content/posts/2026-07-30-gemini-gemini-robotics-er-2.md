---
title: "Google DeepMind、身体性AIモデル「Gemini Robotics ER 2」を発表 ― 複数ロボットの協調作業や高速な状況判断に対応"
description: "Google DeepMindが、ロボット向けの身体性推論(Embodied Reasoning)モデル「Gemini Robotics ER 2」を発表。動画から作業の進捗を読み取る能力や、異なるロボット同士が連携して作業を分担する機能を備え、Gemini APIなどから利用できる。"
pubDate: 2026-07-30
category: gemini
type: news
tags: [Gemini, Google DeepMind, ロボティクス, 身体性AI, Embodied AI]
source: https://blog.google/innovation-and-ai/models-and-research/google-deepmind/gemini-robotics-er-2/
draft: false
importance: high
---

Google DeepMindは、ロボットの「高度な頭脳」として機能する身体性推論(Embodied Reasoning)モデル「Gemini Robotics ER 2」を発表した。リアルタイムの空間認識や複数ステップのタスク計画に加え、異なる種類のロボット同士が意味理解を共有しながら作業を分担する連携機能を新たに備える。

## 詳細

- **概要**: ロボットの高次認知を担う「身体性推論」モデルの最新版。空間推論やタスク計画をリアルタイムで行い、物理環境で動作するロボットの「頭脳」として機能する
- **映像理解と進捗管理**: 連続的な映像フィードを見続けて作業の進み具合を監視し、問題が起きれば計画を調整。電球を締め付ける、ゴミ袋を縛るといった複雑な作業についても、完了したかどうかを判断してから次の手順に進める
- **複数ツールの統括**: Vision-Language-Action(VLA)モデルやナビゲーションAPIなど複数の制御インターフェースを統括し、映像・音声・テキストを含むマルチモーダルなデータをストリーミング処理。低遅延が求められる物理ロボットの制御のためGemini Live APIとも連携する
- **複数ロボットの協調**: 種類の異なるロボット同士が共通の意味理解を通じて情報をやり取りし、作業を引き継ぎ合うことで、単独のロボットでは完結できないワークフローをこなせるようになった。Apptronikの「Apollo 2」とFrankaの「F3 Duo」が連携するデモも披露された
- **空間認識の強化**: 映像フィードからの成功・失敗の検知精度向上、デジタル表示・秤・温度計といった各種計器の読み取りの汎用化、高度な視覚的質問応答(VQA)への対応強化
- **性能**: 進捗の5段階分類で57.4%の精度、重要な瞬間の検出(Moment-Finding)では平均絶対誤差0.96秒・精度91.3%を達成し、競合モデル比で処理速度は4倍に。安全面でも、人が近づいた際にロボットを停止させる「安全指示への追従」や「対人距離の検知」で前世代モデル(ER 1.6)を上回る
- **提供方法**: Gemini API、Google AI Studioで利用可能なほか、Gemini Enterprise Agent Platformでも限定プレビューを開始
- **発表日**: 2026年7月30日、Google DeepMindのSteven Hansen氏(シニアスタッフソフトウェアエンジニア)とPeng Xu氏(スタッフソフトウェアエンジニア)による発表
- **デモ**: Boston Dynamicsの「Spot」を用い、自然言語での指示だけで物を取ってくるデモ映像なども公開された

## 使ってみるには

- Gemini APIまたはGoogle AI StudioからGemini Robotics ER 2を呼び出す
- サンプルコードがGitHubで公開されているため、まずはそちらを参考に動作を確認するとよい
- エンタープライズ向け導入を検討する場合は、限定プレビュー中のGemini Enterprise Agent Platformへの参加を確認する
