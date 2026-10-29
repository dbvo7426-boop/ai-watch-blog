---
title: "GitHub Copilot Automations をチームで共有可能に"
description: "共有 Copilot Automations の提供が始まり、チームで AI ワークフローを一緒に作成・保守できるようになりました。リポジトリに属し、課金はリポジトリ所有者、操作は Copilot 名義で実行されます。"
pubDate: 2026-10-28
category: copilot
type: news
tags: [GitHub Copilot, Automations, Copilot cloud agent, GitHub Universe]
source: https://github.blog/changelog/2026-10-28-build-shared-workflows-for-your-team-with-copilot-automations
draft: false
importance: medium
---

GitHub は共有 Copilot Automations の提供を開始しました。チームで AI ワークフローを共同で作成・保守できます。これまで Automations は個人用で、作成者だけが閲覧・編集でき、作成者の ID と AI クレジットで実行されていました。

## 詳細

- **Automations とは:** プロンプト、トリガー、ツールを組み合わせたものです。Copilot が許可されたツールだけを使ってクラウド上で自律的に実行します。例として、Issue 作成時のバグ再現、プルリクエストが Ready になった時の変更スクリーンショット取得、監視ツールが検知した本番インシデントの自動調査が挙げられています。
- **可視性:** リポジトリの読み取り権限があれば共有 Automation を閲覧でき、書き込み権限があれば編集できます。
- **課金:** AI クレジットは作成者ではなく、リポジトリを所有する組織またはユーザーに請求されます。
- **帰属:** GitHub 上の操作は特定のユーザーではなく Copilot の操作として記録されます。
- **継続性:** 共有 Automation はリポジトリに属するため、作成者がチームを離れても動き続けます。変更履歴でツール、トリガー、プロンプトの推移を確認できます。
- **管理者要件:** 組織所有のリポジトリで動かすには、管理者がポリシー「Allow use of Copilot cloud agent billed to the organization」を有効にする必要があります。
- **作成方法:** github.com、GitHub Copilot アプリ、Visual Studio Code のいずれかで、Type に Shared を選びます。作成後に種類は変更できません。
- **提供範囲:** Copilot Pro、Pro+、Max、Business、Enterprise に順次提供。展開中は利用可否が異なる場合があります。書き込み権限のあるリポジトリで作成できます。

## その後

個人の便利機能だった Automations が、チームの基盤として使えるようになります。ID と課金を作成者から切り離したことで、担当者が抜けるとワークフローが止まる問題や、特定個人のクレジットが消費される問題が解消されます。一方で費用はリポジトリ所有者に発生するため、管理者は課金ポリシーの確認が必要です。Automation ごとの料金や利用上限は、今回の発表では非公開です。
