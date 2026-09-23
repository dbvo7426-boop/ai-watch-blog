---
title: "Devin、9月21日更新でSWE-2リサーチプレビュー・マージ競合の自動解消・Bitbucket Data Center対応を追加"
description: "Cognitionによる数週間ぶりの大型リリースノート更新。推論エフォートを選べるSWE-2リサーチプレビュー、PRのマージ競合自動解消、新しいChecksタブを備えたPRタブ刷新、Bitbucket Data Center対応をまとめて追加。"
pubDate: 2026-09-21
category: devin
type: news
tags: [Devin, Cognition, SWE-2, Bitbucket, AzureDevOps, ProductUpdate]
source: https://docs.devin.ai/release-notes/overview
draft: false
importance: medium
---

Cognitionは2026年9月21日、ここ数週間で最も内容の濃いDevinリリースノート更新の一つを公開しました。新しいSWE-2リサーチプレビュー、PRの自動メンテナンス機能、複数の新しい連携機能が一度に追加されています。

## 詳細

- **SWE-2リサーチプレビュー**: エージェント選択欄またはセッション途中の切り替えから直接SWE-2を選べるようになり、セッションごとに推論エフォート(Medium・High・Max)を指定可能に。Slackでも`!swe2`コマンドで呼び出せ、有効化の可否はエンタープライズ・組織の管理者が設定で制御する
- **フォルダ添付**: コンポーザーへのドラッグ&ドロップまたは「Upload folder」の選択により、フォルダ全体をDevinへのメッセージに添付可能に。Devinがブラウザ内で圧縮し、1つのzipファイルとして送信する
- **マージ競合の自動解消**: Devinが自身のプルリクエストのマージ競合をより頻繁に自動解消するようになった。セッション開始から12時間以内(PRが承認済みの場合は36時間以内)に対応し、繰り返し発生する競合にも対処する
- **PRタブの刷新**: スクロール中も現在表示中のファイルをハイライトするファイルツリーサイドバー、フラット表示に切り替えるSmart Diffsトグル、「Open in editor」ボタン、ファイルツリーの配置変更機能を追加
- **新しいChecksタブ**: PRタブの並び順がChanges・Description・Discussion・Commits・Checks・Bugsに変更され、差分描画の高速化と大規模PRでのスクロールの滑らかさも向上
- **Bitbucket Data Center対応**: Devin ReviewがBitbucket Data Centorのリポジトリに対応。PRイベントでの自動レビュー、マージ・承認・ビルド状況を示すマージバー、設定画面からのWebhook設定が可能になった
- **Azure DevOpsおよびMCPの追加**: Azure DevOpsにラベル管理機能と組織・プロジェクト一覧表示の改善が加わったほか、Microsoft 365とGoogle WorkspaceのMCPがマーケットプレイスに追加され、OAuthとカスタムスコープ設定に対応
- **その他の変更**: 管理者向けのプラグイン管理機能(作成・更新・管理)を追加し、サイズ上限を20MiBに引き上げ。オートメーションメニューの再編、Devin Reviewのスペイン語・ポルトガル語対応も行われた

## その後

今回のSWE-2リサーチプレビューは、Cognitionが9月10日にリリースしたモデルを土台にしたもので、Fusionのサイドキック連携だけでなく、通常のセッション操作の中で直接モデルと推論エフォートを選べるようになりました。マージ競合の自動化とBitbucket Data Center対応と合わせて、DevinはPRの無人メンテナンスとエンタープライズ向けソースコントロール対応をさらに前進させており、Cognitionは9月を通して高頻度かつ内容の濃いリリースノート更新のペースを維持しています。
