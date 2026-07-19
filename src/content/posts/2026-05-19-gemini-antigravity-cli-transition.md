---
title: Google、「Gemini CLI」を「Antigravity CLI」へ統合と発表──個人向け提供は1年足らずで終了へ
description: Googleが「Gemini CLI」を新プラットフォーム「Antigravity CLI」に統合すると発表。無料・Google AI Pro/Ultraの個人ユーザー向け提供は2026年6月18日に終了し、後継はオープンソースではない点に開発者から反発が出た。
pubDate: 2026-05-19
category: gemini
type: news
tags: [Gemini CLI, Google, Antigravity CLI, オープンソース, "AI史"]
source: https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/
draft: false
importance: high
---

Googleが2026年5月19日、Google I/Oに合わせて「Gemini CLI」を新たな統合プラットフォーム「Antigravity CLI」へ移行させると発表しました。2025年6月にオープンソースとして華々しく登場したGemini CLIですが、無料・Google AI Pro/Ultarの個人向け提供は2026年6月18日で終了するとされ、後継のAntigravity CLIがオープンソースではないことも判明し、開発者コミュニティから強い反発が上がりました。

## 詳細

- **統合の理由**: Googleは「Gemini CLIはターミナルがエージェント向けの優れたインターフェースになりうることを証明したが、ニーズは変化した。今や複数のエージェントが連携してタスクを分担し、複雑な問題を解決することが求められている」と説明
- **Antigravity CLIとは**: Googleの「エージェントファースト開発プラットフォーム」Antigravityの一部として新設されたターミナル体験。Go言語による高速な実行、非同期のマルチエージェント編成、デスクトップアプリ「Antigravity 2.0」との統一アーキテクチャが特徴
- **引き継がれる機能**: Agent Skills・Hooks・Subagents・Extensions(Antigravityでは「プラグイン」に改称)などGemini CLIの主要機能は引き継ぐが、発表時点では完全な機能互換(1:1のフィーチャーパリティ)はないと明言
- **スケジュール**: 発表当日からAntigravity CLIを全ユーザーに提供開始。2026年6月18日には、Gemini CLIとGemini Code Assist IDE拡張機能が無料・Google AI Pro/Ultraの個人ユーザーへのリクエスト提供を停止
- **エンタープライズは対象外**: Gemini Code Assist Standard/Enterpriseライセンスを持つ組織や、Google CloudのGemini Code Assist for GitHubを利用する組織は、引き続きGemini CLIを最新モデル込みで利用可能
- **反発の背景**: Gemini CLIはこの約1年でGitHubスター10万超、コミュニティからのマージ済みプルリクエスト6,000件超という実績を積んでいた。開発者からは「オープンソースへの貢献を、貢献者自身が排除される企業向け製品の改善に使われた」との批判が噴出し、Antigravity CLIのリポジトリにはソースコードが公開されていない点も問題視された

## その後

発表から1か月後の2026年6月18日、予告通りGemini CLIの個人向け提供は実際に停止され、CI/CDパイプラインの障害や無料枠の大幅な縮小(1日1,000リクエストから約20リクエストへ)が表面化します。Linux Foundationも同時期のOpen Source Summit North America 2026で、オープンソースの実質性を評価する「Model Openness Tool」を紹介する際にGemini CLIの事例を取り上げるなど、業界全体でオープンソースAIツールの持続性を問う議論のきっかけとなりました。
