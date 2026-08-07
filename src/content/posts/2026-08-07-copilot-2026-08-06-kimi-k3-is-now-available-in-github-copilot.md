---
title: "GitHub Copilot、Kimi K3の提供を再開 ― GitHub Actionsの障害対応で一時停止していた"
description: "GitHubが、GitHub Actionsの障害対応のため一時停止していたKimi K3のGitHub Copilotへの提供を再開。料金は入力トークン100万につき3ドル、出力トークン100万につき15ドル、キャッシュ入力トークン100万につき0.30ドルで、Business/Enterpriseではデフォルトで無効。"
pubDate: 2026-08-06
category: copilot
type: news
tags: [GitHub Copilot, Kimi K3, Moonshot AI, モデル提供状況, 料金]
source: https://github.blog/changelog/2026-08-06-kimi-k3-is-now-available-in-github-copilot
draft: false
importance: medium
---

GitHubが、GitHub Copilot向けのKimi K3の提供ロールアウトを再開した。無関係なGitHub Actionsの障害対応のために一時的にロールアウトを止めていた数日後のことで、変更履歴には編集者による注記でその経緯が明記されている。

## 詳細

- **一時停止から再開までの経緯**: GitHub自身による編集者注記には「GitHub Actionsのインシデント対応のため、Kimi K3のロールアウトを一時的に停止しています」と記載されていた。2026年8月6日時点でこの注記は更新され、「GitHub CopilotへのKimi K3のロールアウトを再開しました」となった。停止の理由はモデル自体の問題ではなく、インフラ側のインシデントによるものだった
- **料金体系**: Kimi K3は従量課金制で、入力トークン100万につき3ドル、出力トークン100万につき15ドル、キャッシュされた入力トークン100万につき0.30ドル
- **利用可能なプラン**: Copilot Pro、Pro+、Max、Business、Enterpriseの各プランで利用可能
- **対応する利用環境**: Visual Studio Code、Visual Studio、GitHub Copilot CLI、GitHub Copilotクラウドエージェント、GitHub Copilotアプリ、github.com、GitHub Mobile(iOS/Android)、JetBrains系IDE、Xcode、Eclipseに対応
- **組織向けはデフォルト無効**: Copilot BusinessおよびEnterpriseの顧客に対しては、Kimi K3はデフォルトで無効化されている。組織のメンバーが利用できるようにするには、管理者がCopilotの設定で明示的に有効化する必要がある

## その後

今回の停止はKimi K3自体の挙動や安全性の問題ではなく、GitHub Actions側のインシデントが原因だったため、ロールアウト再開にあたってモデルの機能や料金体系に変更は加えられていない。組織として利用したい場合は、これまでと同様にCopilotの管理設定から明示的にオプトインする必要があり、GitHubが他のサードパーティ製モデルをBusiness/Enterprise向けに展開してきたやり方と一貫している。
