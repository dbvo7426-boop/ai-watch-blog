---
title: Cognition、Devinの大規模変更を分割レビュー可能にする「Stacked PRs」を発表
description: Devin開発元のCognitionが、AIが生成した大規模な変更を小さく独立してレビュー可能なPRの「スタック」に自動分割し、フィードバックに応じて自動リベースまで行う新機能「Stacked PRs」を発表しました。
pubDate: 2026-07-30
category: devin
type: news
tags: [Devin, Cognition, GitHub]
source: https://devin.ai/blog/introducing-pr-stacks
draft: false
importance: medium
---

Devin開発元のCognitionが、AIによる大規模な変更を1つの巨大なPRではなく、小さく独立してレビュー可能なPRの「スタック」へ自動分割する新機能「Stacked PRs」を発表しました。

## 詳細

- **背景にある課題**: Cognitionが引用したFaros AIの2025年調査によると、AIコーディングの活用度が高いチームほどマージするPR数は98%増えた一方、PRあたりのレビュー時間は91%増加、平均PRサイズも154%拡大し、DORAの開発生産性指標には目立った改善が見られなかった。AIエージェントが人間のレビュー速度を上回るペースで作業を生み出してしまっていたという
- **仕組み**: 1つの巨大なPRを提出する代わりに、Devinが変更を単体でレビュー可能な小さな自己完結型PRの「スタック」に分解する
- **アーキテクチャ理解の活用**: この分解には、リポジトリのモジュール構成やモジュール間の依存関係を継続的にインデックス化するDevinの仕組み「DeepWiki」を活用し、恣意的にではなくアーキテクチャ上の自然な境界線に沿って変更を分割する
- **自動リベース**: レビュアーがスタックの前段のPRに修正を要求すると、Devinが後続のPR群を自動的にリベースし、発生したコンフリクトも解消する
- **既存PRの再構成**: 既にある巨大なPRを後から整理されたスタックへ組み直すことも可能
- **スタック全体の管理**: 個々のPRだけでなく、スタック全体のCIステータス・レビュー状況・マージ可否をDevinが一括管理する
- **提携先**: GitHubと共同で開発

## 使ってみるには

- Stacked PRsは既にDevinユーザー向けに提供開始されており、大規模なタスクをDevinに依頼すると必要に応じて自動的にスタックへ整理される
- 詳細はCognitionのブログ記事(devin.ai/blog/introducing-pr-stacks)を参照
