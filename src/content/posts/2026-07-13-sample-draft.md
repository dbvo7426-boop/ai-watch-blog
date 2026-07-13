---
title: 【サンプル】下書き状態の記事(本番では非表示)
description: "draft: true の記事は npm run dev では見えますが、本番ビルドには含まれません。"
pubDate: 2026-07-13
category: gemini
type: news
tags: [サンプル]
draft: true
---

この記事は frontmatter で `draft: true` になっています。

**運用フロー:**

1. 自動生成パイプラインは記事を `draft: true` で作成・コミットする
2. 通知を受けた運営者が内容を確認し、必要なら加筆修正
3. `draft: false` に変更してコミット → 自動デプロイで公開

開発サーバー(`npm run dev`)ではDRAFTバッジ付きで表示されるので、公開前の見た目確認ができます。
