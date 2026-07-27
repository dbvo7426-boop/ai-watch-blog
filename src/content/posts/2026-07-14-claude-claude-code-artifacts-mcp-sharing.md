---
title: "Claude Codeの「Artifacts」、公開共有リンクとMCPコネクタ連携に対応"
description: "Claude Codeから公開できる「Artifacts」が進化。誰でも開ける公開リンク、Team/Enterprise向けの編集者ロール、そしてページを開くたびにMCPコネクタ経由で最新データを取得・操作できる機能が追加された。"
pubDate: 2026-07-14
category: claude
type: news
tags: [Claude Code, Artifacts, MCP, Anthropic]
source: https://code.claude.com/docs/en/whats-new/2026-w29
draft: false
importance: medium
---

Anthropicは、Claude Codeのセッション出力をclaude.ai上のライブページとして公開できる「Artifacts」機能を拡張し、誰でも閲覧できる公開リンク、Team/Enterpriseプラン向けの編集者ロール、そしてページを開くたびにMCPコネクタを呼び出してデータ取得や操作を行える機能を追加した(v2.1.207〜v2.1.212、2026年7月13〜17日週のアップデート)。

## 詳細

- **MCPコネクタでライブデータ取得**: 公開済みのArtifactは、閲覧者がページを開くたびにMCPコネクタを呼び出せるようになり、作成時点のスナップショットではなく常に最新のデータを表示できる。呼び出しは閲覧者自身のアカウントの接続を通じて実行され、初回呼び出し前には閲覧者本人にアクセス許可を確認する
- **公開共有リンク**: サインイン不要で誰でも閲覧できる公開リンクを発行可能に。Pro/Maxプランでは公開リンクが唯一の共有手段、Team/Enterpriseでは組織内共有がデフォルトで、Ownerが有効化するまで公開リンクはオフのまま
- **編集者ロール**: Team/Enterpriseプランでは、閲覧者を「編集者」に昇格させて共同編集が可能に。編集者は自分のセッションでArtifactのURLをClaudeに渡し、内容を更新・再公開できる
- **Claude Tagセッションからも作成可能**: Slackなどで動くClaude Tagのセッションからも直接Artifactを発行できるようになった
- **制約**: MCPコネクタを呼び出すArtifactは、いずれのプランでも公開リンクとしては共有できない(ライブデータと無ログインの公開アクセスは両立不可)
- **要件**: MCPコネクタ連携にはClaude Code v2.1.209以降が必要。同じ週のアップデートでは、スクリーンリーダー向けに視覚的UIをプレーンテキストに置き換える「スクリーンリーダーモード」や、会話をバックグラウンドセッションにコピーする`/fork`の刷新なども追加された

## 使ってみるには

- Claude Code(Pro/Max/Team/Enterprise、Claude Code CLI v2.1.183以降または対応するDesktopアプリ)でセッション中にArtifactを発行し、ページ右上の「Share」からリンク種別(組織内/公開)や編集者を設定する
- MCPコネクタ経由のライブデータを使いたい場合は、プロンプトで使いたいコネクタとデータ内容を明示して依頼する(例:「GitHubコネクタでオープン中のPR一覧を取得するダッシュボードを作って」)
- Team/Enterpriseで公開共有を許可するには、管理者がclaude.aiの管理設定で「External sharing」を有効化する必要がある
