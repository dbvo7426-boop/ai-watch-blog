---
title: "GitHub Copilotのコードレビュー、REST/GraphQL API対応とデフォルトの労力レベル「Balanced」への変更"
description: "GitHub Copilotのコードレビューが、REST APIおよびGraphQL APIからトリガー可能に。カスタム連携への組み込みが容易になった。また、レビューの労力レベルの「デフォルト」設定が「Balanced」に変更され、企業・組織・リポジトリ・個人の各設定レベルで調整できる。"
pubDate: 2026-10-02
category: copilot
type: news
tags: [GitHubCopilot, コードレビュー, API, 開発者ツール]
source: https://github.blog/changelog/2026-10-02-copilot-code-review-api-support-and-new-default-effort-level
draft: false
importance: low
---

GitHubは、Copilotのコードレビューをトリガーできるようにする新たなAPI対応を追加し、デフォルトのレビュー労力レベルを「デフォルト」から「Balanced」へと変更しました。

## 詳細

- **API対応**: REST APIとGraphQL APIからCopilotのコードレビューをリクエストできるようになり、カスタムスクリプト・ワークフロー・社内ツールへの組み込みが可能に。リクエストごとにレビューの労力レベルを任意で設定できる
- **新しいデフォルト**: 「デフォルト」のレビュー労力レベルは、新規・既存を問わず全てのリポジトリで「Balanced」を使用するようになった。以前「Lite」を選択していた組織はその設定を維持する
- **設定**: 労力レベルは企業・組織・リポジトリ・個人設定のいずれのレベルでも設定可能で、各階層は上位レベルのデフォルトを上書きできる
- **提供状況**: Copilot Pro、Pro+、Max、Business、Enterpriseで一般提供中

## その後

今回のAPI対応は、Copilot SDKのDynamic Workflowsと並んで、GitHubが今週進めているCopilot機能のスクリプト化・組み込み可能化という方向性に沿ったものです。一方、労力レベルの変更は、今年早くに導入されたレビュー機能に対する通常のチューニング更新です。
