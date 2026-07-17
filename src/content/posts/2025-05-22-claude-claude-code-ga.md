---
title: 「Claude Code」一般提供開始──Claude 4と同時にVS Code/JetBrains連携・SDKも
description: AnthropicがClaude Opus 4・Sonnet 4の発表に合わせ、研究プレビュー中だった「Claude Code」を一般提供(GA)へ移行。VS Code・JetBrains向けベータ拡張機能やGitHub Actions連携、開発者向けSDKも同時公開しました。
pubDate: 2025-05-22
category: claude
type: news
tags: [Claude Code, Anthropic, Claude 4, VS Code, JetBrains, "AI史"]
source: https://www.anthropic.com/news/claude-4
draft: false
---

Anthropicが2025年5月22日、新モデル「Claude Opus 4」「Claude Sonnet 4」の発表と同時に、約3か月間の限定研究プレビューを経た「Claude Code」を一般提供(GA)へ移行しました。VS Code・JetBrains向けのベータ版拡張機能やGitHub Actions連携、開発者向けSDKも同日公開され、ターミナルの外へも活動範囲を広げています。

## 詳細

- **一般提供(GA)へ移行**: 研究プレビュー期間に寄せられた好評を受け、登録制だった利用形態を解除。開発者が自由にClaude Codeを使い始められるようになった
- **VS Code・JetBrains拡張機能(ベータ)**: Claudeが提案する編集内容がエディタ上にインラインで表示されるようになり、使い慣れたIDE内でレビュー・追跡が完結する形に。IDEのターミナルからClaude Codeを起動することで導入できる
- **GitHub Actions連携によるバックグラウンドタスク**: 対話をブロックせずに時間のかかるタスクをバックグラウンドで実行できるように
- **GitHub連携(ベータ)**: `/install-github-app` コマンドでPull RequestにClaude Codeをタグ付けし、レビュー指摘への対応・CIエラー修正・コード変更を任せられるようになった
- **Claude Code SDK公開**: Claude Code自体と同じコアの技術を使い、独自のエージェントを構築できる拡張可能なSDKを同時公開
- **同時発表のClaude 4**: 長時間の自律作業に強いClaude Opus 4と、日常利用に適したClaude Sonnet 4を発表。両モデルともコーディング・エージェント的タスクで新基準を打ち出したとされる

## その後

GAからおよそ4か月後の2025年9月には、サブエージェントやフック、チェックポイント(巻き戻し)機能などを備えた大型アップデートで自律性がさらに強化され、さらにその2か月後にはブラウザから使える「Claude Code on the web」も登場。GAからわずか半年ほどで年間経常収益(ARR)は10億ドル規模に達し、Anthropicのエージェント型製品戦略の中核として急成長していくことになる。
