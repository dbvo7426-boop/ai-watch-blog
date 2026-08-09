---
title: "GitHub Code Quality、有効化してもCopilotを自動でレビュアー追加しないよう仕様変更"
description: "GitHubがデフォルト動作を変更。リポジトリでGitHub Code Qualityを有効にしても、プルリクエストに自動でCopilotコードレビューを要求するルールセットはもう作成されなくなった。"
pubDate: 2026-08-07
category: copilot
type: news
tags: [GitHub Copilot, GitHub Code Quality, コードレビュー, ルールセット]
source: https://github.blog/changelog/2026-08-07-github-code-quality-no-longer-adds-copilot-as-a-reviewer
draft: false
importance: low
---

GitHubが、GitHub Code Qualityのデフォルト動作を変更した。リポジトリでこの機能を有効にしても、プルリクエストに対して自動的にCopilotコードレビューを要求するルールセットはもう作成されない。GitHubの説明は率直で、「レビュアーを追加するかどうかはあなた自身が決めるべきだという声を受けて、その挙動を撤回しました」としている。

## 詳細

- **無効化された3つの設定**: 既存の自動生成ルールセットにおいて、「Copilotコードレビューを自動的に要求する」「新しいプッシュをレビューする」「ドラフトのプルリクエストをレビューする」の3項目が無効化された。これによりCopilotは、レビュアーとして自動的に要求されることも、プッシュのたびにレビューされることも、ドラフト状態でレビューされることもなくなる
- **廃止ではなくオプトイン化**: Copilotコードレビュー自体には影響がなく、引き続き利用可能。自動要求の挙動を元に戻したい場合は、リポジトリまたは組織レベルでルールセットを追加・編集し、「Copilotコードレビューを自動的に要求する」を再度有効にすればよい
- **既存のカスタム設定は維持**: チームが独自に作成したカスタムルールセットには変更が加えられない。今回無効化されたのは、Code Quality有効化時に自動生成されたルールセットの該当設定のみ
- **適用範囲**: GitHub Enterprise CloudおよびGitHub Teamが対象。Copilotコードレビューの課金は従来どおりCopilotプランに対して発生する

## その後

- 自動要求を復活させたい場合は、リポジトリまたは組織のルールセット画面から「Copilotコードレビューを自動的に要求する」を対象ブランチに対して再度有効にする
- 設定手順の詳細は[Copilotによる自動コードレビューの設定](https://docs.github.com/copilot/how-tos/copilot-on-github/set-up-copilot/configure-automatic-review#configuring-automatic-code-review-for-a-single-repository)を参照
