---
title: "Claude、新機能「Skills」でアプリ・Claude Code・APIに専門知識を追加"
description: "Anthropicが提供する「Skills(Agent Skills)」は、指示書やスクリプトをまとめたフォルダをClaudeに読み込ませ、特定タスクの専門家のように振る舞わせる仕組み。Claudeアプリ・Claude Code・APIで共通利用でき、Box・Canva・Notion・楽天などがパートナーとして参加している。"
pubDate: 2026-07-22
category: claude
type: news
tags: [Claude, Claude Code, Agent Skills, Anthropic]
source: https://www.anthropic.com/news/skills
draft: false
importance: high
---

Anthropicは、Claudeが特定のタスクをこなす際に専門知識を発揮できるようにする機能「Skills(Agent Skills)」を提供している。指示書やスクリプト、参考資料をまとめた「スキルフォルダ」をClaudeに与えることで、専門スタッフの研修資料を読み込ませるように、特定領域に特化した振る舞いを引き出せる。Claudeアプリ、Claude Code、APIのいずれでも共通のフォーマットで利用できる。

## 詳細

- **仕組み**: スキルは指示書・スクリプト・参考資料をまとめたフォルダ。Claudeはタスク実行時に利用可能なスキルを自動でスキャンし、必要なものだけをその都度読み込む効率設計になっている
- **組み合わせ可能**: 複数のスキルを重ねて使うことができ、Claudeが必要なスキルを自動判別して協調させる
- **可搬性**: Claudeアプリ、Claude Code、APIで同じフォーマットのスキルをそのまま利用できる
- **コード実行**: 従来型のプログラミングの方が確実に処理できるタスクでは、スキル内に実行可能なコードを含めることも可能(Code Execution Toolのベータ機能が必要)
- **提供状況**:
  - Claudeアプリ: Pro・Max・Team・Enterprise向け。Team/Enterpriseの管理者は組織全体での有効化操作が必要
  - Claude Developer Platform(API): Messages APIのリクエストにスキルを追加できるほか、プログラムから管理できる`/v1/skills`エンドポイントも用意(Code Execution Toolベータが必要)
  - Claude Code: anthropics/skillsマーケットプレイスからプラグイン形式でインストールでき、関連する場面で自動的に読み込まれる
- **スキル作成支援**: 「skill-creator」というスキル自体が、ワークフローについて対話形式で質問しながらフォルダ構成やファイル整形、リソースの同梱までを代行し、手動でのファイル編集は不要
- **パートナー事例**: Box(保存済みファイルを整形済みドキュメントへ変換)、Canva(エージェント的ワークフロー向けのデザインカスタマイズ)、Notion(シームレスな連携)、楽天(経理業務の効率化)などが自社スキルを公開
- **オープン規格化**: 異なるプラットフォーム間でスキルを可搬にする「Agent Skills」というオープン標準を公開
- **経緯**: 2025年10月16日に初回発表、同年12月18日に組織全体での管理機能・パートナー製スキルディレクトリ・オープン標準の公開などをアップデート。公式ページはその後も継続的に更新されており、直近では2026年7月にClaude Cowork(モバイル・Web展開)など関連アップデートが追記されている

## 使ってみるには

- Claudeアプリ(Pro/Max/Team/Enterprise)では、ヘルプセンターの利用ガイドを参照してスキルを有効化する
- Claude Codeでは、anthropics/skillsマーケットプレイスからプラグインとしてインストールする
- API利用時はCode Execution Toolベータを有効にし、Messages APIまたは`/v1/skills`エンドポイント経由で追加する
- 詳細はAnthropicのSkills cookbookやAnthropic Academyの講座、GitHubリポジトリのサンプルを参照
