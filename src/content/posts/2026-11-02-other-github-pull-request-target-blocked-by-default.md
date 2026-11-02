---
title: "GitHub、公開リポジトリでpull_request_targetを12月2日から既定でブロック"
description: "GitHub Actionsは2026年12月2日から、公開リポジトリでpull_request_targetトリガーを既定でブロック。11月9日と16日にブラウンアウト(一時的な強制)を実施する。"
pubDate: 2026-11-02
category: other
type: news
tags: [GitHub, GitHub Actions, セキュリティ]
source: https://github.blog/changelog/2026-11-02-pull_request_target-blocked-by-default-december-2
draft: false
importance: medium
---

GitHubは2026年12月2日から、公開リポジトリで`pull_request_target`のワークフローイベントを既定でブロックします。Actionsのイベントポリシーで明示的に許可した場合は除きます。当初の強制開始予定は2026年11月2日でした。プライベートおよびインターナルのリポジトリは対象外です。

## 詳細

- **理由:** `pull_request_target`はベースリポジトリのコンテキストで動作し、シークレットにアクセスできます。フォークのコードをこのトリガー経由で実行すると、パイプラインが侵害されたりシークレットが漏えいしたりするおそれがあります。
- **展開:** 既定ルールはまず評価モード(ブロックされる実行を確認できる)で始まります。2026年11月9日と11月16日の16:00~18:00(UTC)に、ブラウンアウトとして完全にブロックを実施し、ブロックされた実行はエラー注釈とともに失敗し実行されません。それ以外の時間は評価モードに戻り、警告付きで実行されます。
- **11月9日までの対応:** Insightsでブロックされる実行を確認し、既定のブロックを維持するか、ワークフローファイルを指定したActionsイベントポリシーで特定のワークフローに限って`pull_request_target`を許可します。
- **対象:** GitHub Free、Team、Enterprise Cloudの公開リポジトリ。GitHub Enterprise Serverは対象外です。

## その後

フォークからのプルリクエストへのラベル付けやコメントに`pull_request_target`を使っているメンテナーは、ブラウンアウトの時間帯にワークフローを見直しておくとよさそうです。特に影響が大きいワークフローの種類については、発表では触れられていません。
