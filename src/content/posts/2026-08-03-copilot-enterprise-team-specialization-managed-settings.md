---
title: GitHub Copilot、管理設定にチーム単位のカスタマイズ機能「Enterprise Team Specialization」を追加
description: GitHubが、エンタープライズ管理者が管理設定(managed-settings.json)の一部項目をチームごとに上書き可能にできる新機能を追加。全社ポリシーを維持しつつ、チームごとにデフォルトAIモデルなどを柔軟に設定できるようになった。
pubDate: 2026-08-03
category: copilot
type: news
tags: [Copilot, GitHub, エンタープライズ, 管理設定]
source: https://github.blog/changelog/2026-08-03-enterprise-team-specialization-for-managed-settings
draft: false
importance: low
---

GitHubは、管理設定(Managed Settings)にチーム単位でのカスタマイズを可能にする「Enterprise Team Specialization」を追加しました。単一の全社ポリシーではなく、特定のエンタープライズチームを対象にした個別設定ができるようになります。

## 詳細

- **新機能**: 管理者は`managed-settings.json`内の特定の項目を「上書き可能(overridable)」として指定できるようになった。これにより、デフォルトAIモデルやバイパス権限などをチームごとにカスタマイズしつつ、上書き不可の項目は引き続き全社レベルでロックされたままにできる
- **狙い**: 「あらゆる設定変更を中央管理者に一極集中させることなく、ガバナンスをスケールさせる」ことを目的とする
- **追加可能なプラグイン拡張性**: 全社的なベースライン設定を保証しつつ、チームは追加のマーケットプレイスアクセスを重ねて設定できる
- **一元的なマッピング**: 新しい`team-mappings.json`ファイルにより、特定の設定ファイルを複数のチームに一括適用できる
- **コンプライアンス保護**: 上書き不可に設定した項目は、引き続きチームが超えられない上限として機能する
- **提供対象**: VS Code、Copilot CLI、Copilot App、クラウドエージェントで対応。Copilot BusinessまたはEnterpriseライセンスが必要

## 使ってみるには

- エンタープライズ管理者は、`managed-settings.json`内の特定項目を上書き可能に設定する
- `team-mappings.json`を使って、設定ファイルを特定のチームに適用する
- 本格導入前に、上書き不可の項目が意図通りコンプライアンス基準を維持しているか確認する
