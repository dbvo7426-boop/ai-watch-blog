---
title: "Copilot Code Reviewにカスタマイズ・設定機能を追加、ファイアウォールも標準有効化"
description: "GitHub Copilot Code Reviewに、カスタム指示のPRブランチ読み込み・独自セットアップ手順・ネットワークファイアウォールの標準有効化など、4つの設定改善が加わりました。"
pubDate: 2026-07-17
category: copilot
type: news
tags: [Copilot, Code Review, GitHub]
source: https://github.blog/changelog/2026-07-17-copilot-code-review-customization-and-configurability-improvements
draft: false
---

GitHubが、AIによるコードレビュー機能「Copilot Code Review」に4つの設定改善を加えました。カスタム指示がマージ前のブランチから読み込まれるようになったほか、リポジトリ独自のセットアップ手順の定義、ネットワークアクセスを制限するファイアウォールの標準有効化など、より細かい制御が可能になっています。

## 詳細

- **カスタム指示の検証が容易に**: `copilot-instructions.md`・`*.instructions.md`・`REVIEW.md`・`GEMINI.md`・`CLAUDE.md`などのカスタム指示ファイルが、プルリクエストのヘッドブランチから読み込まれるようになり、マージ前に指示の効果をテストできる
- **カスタムセットアップステップ**: `.github/workflows/copilot-code-review.yml`を追加することで、依存関係のインストールやツール設定をリポジトリごとに定義可能に
- **ファイアウォールが標準有効化**: レビュー実行時のネットワークアクセスを制限するファイアウォールが、全リポジトリでデフォルト有効に(ただしセルフホストランナーは非対応)
- **ランナー設定の分離**: Copilot Code ReviewとCopilot Cloud Agentのランナー設定が分離され、組織設定でそれぞれ独立して制御できるように

## 使ってみるには

- 既存のCopilot Code Reviewユーザーはそのまま新しい設定オプションを利用可能。カスタムセットアップ手順を使う場合は`.github/workflows/copilot-code-review.yml`を追加する
- 詳細な設定方法はGitHubの公式ドキュメントを参照
