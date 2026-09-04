---
title: "Gemini Notebook、Workspace管理コンソールに詳細な監査ログ機能が追加"
description: "Googleは旧NotebookLMこと「Gemini Notebook」に、Workspace管理コンソール向けの詳細な監査ログ機能を追加しました。管理者はノートブックの閲覧状況やユーザー情報、アクセス詳細をコンプライアンス・監督目的で確認できるようになります。"
pubDate: 2026-09-03
category: notebooklm
type: news
tags: [NotebookLM, Gemini Notebook, Google Workspace, 管理コンソール, コンプライアンス]
source: https://workspaceupdates.googleblog.com/2026/08/introducing-comprehensive-audit-logs-for-Gemini-Notebook-in-the-Workspace-Admin-console.html
draft: false
importance: low
---

Googleは2026年9月3日、Gemini Notebook（旧NotebookLM）向けの詳細な監査ログ機能をGoogle Workspace管理コンソールに展開し始めました。これにより、IT管理者は組織内でこのツールがどのように使われているかをこれまでよりはるかに細かく把握できるようになります。

## 詳細

- **記録される内容**: ノートブックの閲覧状況、ユーザーID、IPアドレス、リソースの文脈など、多岐にわたるユーザー操作を記録
- **確認方法**: 管理コンソール内の既存の「セキュリティ調査ツール」および「監査と調査ツール」から確認可能
- **デフォルトで有効**: 対象顧客には監査ログが自動的に有効化されるが、BigQueryへのログエクスポートは管理者が別途有効化する必要がある
- **データ保存に関する注意点**: 監査ログ自体の保存はWorkspaceの通常のリージョンルーティングポリシーに従うが、Gemini Notebook自体のユーザーデータ（ノートブック、ソース、チャット履歴）はグローバルに保存されており、現時点ではデータのリージョン限定には対応していない
- **展開スケジュール**: 2026年9月3日に段階的な展開を開始し、全ユーザーに反映されるまで最大15日を要する見込み。Rapid ReleaseドメインとScheduled Releaseドメインの両方が対象
- **対象範囲**: セキュリティ調査ツールおよび監査と調査ツールへのアクセス権をすでに持つすべてのGoogle Workspace顧客が利用可能

## その後

この機能は、Googleが他のGemini関連製品ですでに提供している企業向け監督機能を、Gemini Notebookにも拡張するものだ。2026年7月にNotebookLMから改称されたこのリサーチツールがWorkspaceへの統合をさらに深める中、IT・コンプライアンス部門にとっての機能ギャップを埋める狙いがある。ログイベントの詳細、BigQueryのスキーマ、エクスポート設定に関する完全なドキュメントは、Workspace管理者向けヘルプセンターで確認できる。
