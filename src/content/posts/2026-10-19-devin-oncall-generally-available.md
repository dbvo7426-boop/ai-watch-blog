---
title: "Devin Oncall が一般提供開始、CIステータス確認やTeams機能も強化"
description: "Cognitionは2026年10月19日、Devin Oncallをすべての組織向けに一般提供しました。同リリースではDevin Reviewのルールエディタ、PR以外へのCIステータス確認、Microsoft Teams関連の改善も追加されています。"
pubDate: 2026-10-19
category: devin
type: news
tags: [Devin, Oncall, Devin Review, Microsoft Teams]
source: https://docs.devin.ai/release-notes/overview
draft: false
importance: medium
---

Devinの2026年10月19日付リリースノートで、Devin Oncallがすべての組織で一般提供(GA)になったことが発表されました。あわせてDevin Reviewのルールエディタ、コミット・ブランチ・タグ向けのCIステータス確認、Microsoft Teams関連の複数の機能も追加されています。

## 詳細

- **Devin Oncall(GA):** レスポンダーがSlackまたはMicrosoft Teamsのチャンネル、PagerDutyのインシデントを監視し、新しいアラート、バグ報告、サポート依頼をトリアージします。テレメトリツール、コード、デプロイ、runbookを使って調査し、推定される根本原因と推奨される次のアクションを投稿します。インシデントチャンネルに参加して自動更新されるインシデントレポートを維持でき、定期的なOncallレポートで調査件数、特定した問題、出荷した修正がまとめられます。組織管理者はサイドバーのOncallからツール接続とレスポンダー管理を行います。
- **Devin Review:** 新しいルールエディタで、除外設定とレビュールールが展開可能なカードの一覧にまとまり、対象はインラインで選択できます。未レビューのコミットがあるPRには「Latest changes haven't been reviewed」と表示され、自動レビューを有効にせずに1回だけレビューする「Review now」が使えます。
- **CIステータス:** Devinはプルリクエストだけでなく、コミット、ブランチ、タグ(例: mainへのマージ後の実行)のCIステータスを確認できます。対象はGitHub、GitLab、Azure DevOps、Bitbucket CloudおよびData Centerです。BitbucketのビルドステータスもPRやコミットで見えるようになりました。
- **Microsoft Teams:** エンタープライズ管理者は機密ラベルによる添付ファイルの分類をエンタープライズ単位で一度設定できます。クラッシュしたセッションはTeamsのスレッドに返信して再試行でき、DevinアプリがブロックされるとTeams管理者向けアラートが出ます。Microsoft 365 MCP経由でTeamsタグへのメンションも可能で、グループチャットの権限メッセージも分かりやすくなりました。
- **その他:** セッションは共有の組織プラグインやスキルへの編集を提案でき、管理者の承認が必要です。Memoryタブから夜間のメモリ整理(dreaming)をオフにできます。作業ログは現在のステップをより早く表示します。GitLabとBitbucket Data CenterのWebhook設定には最後の自動インストール結果が表示されます。
- **Oncallの料金・制限:** リリースノートでは未公表です。

## その後

Oncallの一般提供により、Devinはコード作成からインシデント対応の領域へ広がり、他のAI SREツールと競合することになります。残りの内容は段階的な改善が中心で、TeamsやレビューワークフローのエンタープライズGA向け制御が多くを占めます。実際のインシデントでの根本原因分析の精度については、出典に記載がありません。
