---
title: "GitHub Copilotのコードレビュー、ファイル数上限を撤廃し「解決理由」機能を追加"
description: "GitHub CopilotのコードレビューがBot作成のPRや超大規模PRにも対応。さらにレビューコメントを解決する際に「対応済み」「対応しない」「誤り」から理由を選べる新しいドロップダウンが追加された。"
pubDate: 2026-08-27
category: copilot
type: news
tags: [GitHubCopilot, コードレビュー, GitHub, 開発者ツール]
source: https://github.blog/changelog/2026-08-27-copilot-code-review-resolution-reasons-and-expanded-capabilities/
draft: false
importance: medium
---

GitHubは2026年8月27日、Copilotのコードレビュー機能を拡張し、Botが作成したプルリクエストや大規模なプルリクエストに対応できていなかったカバレッジの穴を解消しました。あわせて、開発者がレビューコメントをなぜ解決したのかを記録できる新機能も追加しています。

## 詳細

- **Bot作成のPRにも対応**: 自動実行されるCopilotコードレビューが、Copilotのクラウドエージェントを含むBotが作成したプルリクエストに対しても実行されるようになった(従来はスキップされていた)
- **ファイルサイズ上限を撤廃**: これまでCopilotコードレビューには約300ファイルまたは2万行というコード量の上限があったが、この制限を撤廃し、非常に大規模なプルリクエストもレビュー可能に
- **Bot向けレビューの組織単位課金**: 該当するポリシーを有効にした組織では、Bot作成PRのレビュー費用をBot自身にCopilotライセンスを持たせる必要なく、組織に直接課金できるようになった
- **解決理由の選択機能**: Copilotのレビューコメントにある「Resolve conversation」ボタンの隣に新しいドロップダウンが追加され、コメントを解決する際に「対応済み(Addressed)」「対応しない(Won't fix)」「誤り(Incorrect)」のいずれかを選択できる

## その後

Bot生成PRや超大規模PRへの対応により、GitHubはCopilotコードレビューの弱点としてよく指摘されていた2つの穴を塞いだ形です。特に他のBotによる自動PRに大きく依存しているチームにとっては恩恵が大きいでしょう。解決理由のドロップダウンは、Copilotの提案が実際に採用されているかどうかについて構造化されたフィードバックをGitHubに提供するものであり、今後レビューモデルの精度向上に活用されると見られます。
