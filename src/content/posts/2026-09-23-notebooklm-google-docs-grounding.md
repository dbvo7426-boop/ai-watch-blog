---
title: "Google Docsで「Gemini Notebook」のソースを根拠にAIプロンプトを実行可能に"
description: "GoogleがGoogle Docs内でGemini Notebook(旧NotebookLM)を直接参照できる機能を追加。厳選したソースライブラリを根拠に、インライン引用付きでAIによる文章作成をグラウンディングできるようになった。"
pubDate: 2026-09-23
category: notebooklm
type: news
tags: [NotebookLM, Gemini Notebook, Google Docs, Google Workspace, グラウンディング]
source: https://workspaceupdates.googleblog.com/2026/09/ground-ai-prompts-in-google-docs-on-existing-sources-from-Gemini-Notebook.html
draft: false
importance: medium
---

Googleは2026年9月23日、Google Docs内のGeminiが、ユーザーの「Gemini Notebook」(旧NotebookLM)から直接コンテキストを取得できるようになったと発表しました。これにより、AIが下書きする文章を、モデルの一般知識だけでなく、特定の厳選されたソース群に基づいてグラウンディングできるようになります。

## 詳細

- **仕組み**: Googleドキュメント内のGemini側パネルまたは下部バーで「@」を入力すると、既存のNotebookをソースとして選択可能。Geminiはそのノートブックの資料を根拠に出力を生成し、元の文書へのインライン引用を追加する
- **意義**: アプリ間でコンテンツをコピーしたり、汎用的な回答に頼ったりする代わりに、すでにGemini Notebookに整理してあるライブラリから直接文章を作成でき、出典まで遡って確認できる
- **想定ユーザー**: 市場レポートを作成するビジネスアナリスト、大量の文書を扱う法務・コンプライアンスチーム、ホワイトペーパーを執筆するコンテンツ戦略担当者、会議メモから提案書を作成するエグゼクティブアシスタントなどをGoogleは想定用途として挙げている
- **提供状況**: Rapid ReleaseドメインとScheduled Releaseドメインの両方で展開中
- **対象エディション**: Business Standard/Plus、Enterprise Standard/Plus、Education Plus、Google AI Pro/Ultra(コンシューマー向け)、教育機関向けGoogle AI Pro、AI Expanded Access
- **管理者向け設定**: Drive上でGemini for Workspaceが有効になっていれば、デフォルトで利用可能。管理者は管理コンソールのWorkspace Intelligence設定からアクセスを管理でき、利用にはユーザー側でWorkspaceのスマート機能が有効になっている必要がある

## その後

この更新は、Googleが9月22日に別のGemini Notebook機能である適応学習型の「study notebooks」をWorkspaceアカウント向けに拡大した、わずか1日後に発表されたものです。今月Googleは、Gemini Notebookを単独の調査ツールにとどめず、そのソースライブラリを他のGoogleサービスへ組み込んでいく動きを続けており、今回のDocs連携もその一環といえます。すでに厳選したノートブックを整備しているチームにとっては、手作業でのコピー&ペーストが不要になり、作成した文章に出典までたどれる引用の道筋が最初から組み込まれることになります。
