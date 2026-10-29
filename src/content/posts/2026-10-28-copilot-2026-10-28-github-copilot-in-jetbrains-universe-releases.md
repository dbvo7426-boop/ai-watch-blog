---
title: "JetBrains 版 GitHub Copilot に Fusion、ローカルサンドボックス GA、NES GA"
description: "JetBrains 向けプラグインに、Auto に代わる Copilot Fusion、一般提供のローカルサンドボックスと次の編集候補(NES)、新しい既定エージェントハーネス、既定のセッション権限が加わりました。"
pubDate: 2026-10-28
category: copilot
type: news
tags: [GitHub Copilot, JetBrains, Copilot Fusion, Next edit suggestions, GitHub Universe]
source: https://github.blog/changelog/2026-10-28-github-copilot-in-jetbrains-universe-releases
draft: false
importance: medium
---

GitHub は JetBrains IDE 向け GitHub Copilot に大型アップデートを提供しました。Copilot Fusion が登場し、ローカルサンドボックスと次の編集候補(NES)が一般提供になったほか、エージェントや設定まわりの改善が入っています。

## 詳細

- **Copilot Fusion:** タスクの難度に応じて Standard、High、Max を選ぶと、Copilot が単一モデルか複数モデルの組み合わせかを判断し、品質・速度・コストのバランスを取ります。Auto モデルの選択肢に代わるもので、全ユーザーに順次展開されます。最初の 30 日間は利用が 30% 割引です。
- **ローカルサンドボックス(GA):** Copilot が起動するツールやコマンドは、開発者または組織が定めたポリシーに従い、ファイルシステム、ネットワーク、認証情報などへのアクセスが制限された状態で実行されます。
- **NES(GA):** 提案の質、文脈認識が向上し、インラインでのレビューと適用がスムーズになります。
- **エージェントハーネス:** 利用可能な場合は Microsoft Copilot エージェントハーネスが全ユーザーの既定になります。セッションのサイドバーボタンで、セッションを並べて開けます。
- **既定のセッション権限:** 新規セッションの既定の権限モードを設定で選べます。
- **UX:** GitHub Copilot が IDE 設定のトップレベルに移動、エージェント選択で Copilot が Local より前に表示、インライン補完と NES の連携改善、サインイン関連の簡潔な通知、更新プロンプトからプラグインマーケットプレイスへの導線、エージェントのターンにホバーして完了時間・生成時間・モデル別トークン使用量を確認。
- **品質改善:** 編集の信頼性、キャンセルからの復帰、選択コードの文脈、Windows と WSL でのカスタマイズ参照、言語サーバー再起動後のプロンプトテンプレート、IDE の応答性に関する問題を修正。

## その後

サンドボックスや Fusion のモデルルーターなど、エージェント機能で JetBrains が VS Code に近づいたアップデートです。Fusion の一般提供は別記事で取り上げています。プラグインの具体的なバージョン番号は、発表では非公開です。
