---
title: "Copilot コードレビューの設定を REST / GraphQL API で管理可能に"
description: "Copilot コードレビューに、エンタープライズポリシーからリポジトリまでの API 管理、レビューの帰属フィールド、フィードバック理由付きのコンパクトなレビュー概要が加わりました。"
pubDate: 2026-11-06
category: copilot
type: news
tags: [Copilot, コードレビュー, REST API, GraphQL, エンタープライズ]
source: https://github.blog/changelog/2026-11-06-copilot-code-review-api-management-and-review-overview-updates
draft: false
importance: medium
---

GitHub Copilot コードレビューの設定を、エンタープライズポリシーから個別リポジトリまで、REST と GraphQL の API で管理できるようになりました。レビュー概要コメントもよりコンパクトになっています。Copilot Pro、Pro+、Max、Business、Enterprise の各プランで利用できます。

## API の変更点

- **帰属とメタデータ:** 明示的な帰属フィールドで Copilot のレビューとコメントを識別でき、利用可能な場合は使用したレビュー工数、コメントの根拠として Copilot が報告したスキル、MCP サーバー、カスタム指示も確認できます。
- **エンタープライズ管理者:** すべての組織でコードレビューを有効または無効にするか、組織管理者に判断を委ねられます。
- **組織管理者:** 有効化、既定のレビュー工数、ランナー構成を管理できます。エンタープライズが管理する設定は上書きできません。
- **リポジトリ管理者:** レビュー工数と、レビューでカスタム指示や MCP ツールを使うかどうかを管理できます。
- **トークンの対応:** エンタープライズおよび組織の設定エンドポイント（組織ランナーのエンドポイントを含む）は、GitHub Apps と fine-grained personal access token に対応しません。リポジトリのエンドポイントは両方に対応し、Administration の read または write 権限が必要です。

## レビュー概要

- 使用した工数とアンケートはコンパクトなフッターに移り、スキップされたファイルやコンテンツ除外のファイルは、除外理由へのリンク付きで「Files not reviewed」セクションにまとまります。
- 空のセクションは省略され、長いリストには超過件数が表示されます。
- 低評価をつけたあと、承認判断に同意できない、コメントが冗長、指摘が誤りまたは細かすぎるといった理由を選べます。

請求、自動レビュー、信頼性の修正も含まれますが、詳細は発表に記載されていません。
