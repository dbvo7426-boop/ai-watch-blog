# AI Watch — AIニュース・使い方まとめサイト(雛形 v0.1)

主要AIツール(Claude / ChatGPT / Gemini / Copilot)の新機能を自動観測して記事化するブログの雛形です。
Astro製の静的サイトで、Vercel または GitHub Pages で無料運用できます。

## セットアップ

前提: Node.js 20以上

```bash
npm install
npm run dev     # http://localhost:4321 で確認
npm run build   # 本番ビルド(dist/ に出力)
```

## フォルダ構成

```
├── astro.config.mjs        # サイトURL設定(ドメイン取得後に変更)
├── src/
│   ├── consts.ts           # サイト名・カテゴリ定義(まずここを編集)
│   ├── content.config.ts   # 記事のfrontmatterスキーマ定義
│   ├── content/posts/      # 記事(.md)置き場 ★自動生成パイプラインの出力先
│   ├── components/         # ヘッダー/フッター/記事カード/観測ステータス
│   ├── layouts/            # ベースレイアウト
│   ├── pages/
│   │   ├── index.astro             # トップ(最新記事+観測ステータス)
│   │   ├── posts/[...slug].astro   # 記事ページ
│   │   ├── category/[category].astro # カテゴリ別一覧
│   │   └── rss.xml.js              # RSSフィード
│   └── styles/global.css   # デザイントークン
└── public/                 # favicon等の静的ファイル
```

## 記事のfrontmatter仕様

自動生成パイプラインはこの形式で `.md` を出力します:

```yaml
---
title: 記事タイトル
description: 一覧・OGP・検索結果に使われる要約(120字目安)
pubDate: 2026-07-13
category: claude   # claude | chatgpt | gemini | copilot | other
type: news         # news | howto | review
tags: [新機能, API]
source: https://www.anthropic.com/news/xxx   # 一次情報URL(ニュースでは必須)
draft: true        # 生成直後はtrue。人間が確認後falseで公開
---
```

## 公開フロー(下書き運用)

1. パイプラインが `draft: true` で記事をコミット
2. 通知を確認し、内容チェック+一言加筆(スマホでもGitHub上で編集可)
3. `draft: false` に変更してコミット
4. Vercelが自動で再ビルド・公開

`draft: true` の記事は `npm run dev` では DRAFT バッジ付きで見えますが、本番ビルドには含まれません。

## Vercelへのデプロイ

1. このプロジェクトをGitHubリポジトリにpush
2. [vercel.com](https://vercel.com) にGitHubアカウントで登録
3. 「Add New → Project」でリポジトリを選択(Astroは自動検出される)
4. デプロイ完了後、`astro.config.mjs` の `site` を発行されたURLに変更

## カスタマイズの起点

- **サイト名変更**: `src/consts.ts` の `SITE_TITLE`
- **配色変更**: `src/styles/global.css` の `:root` トークン
- **監視対象の追加**: `src/consts.ts` の `CATEGORIES` に追記 + `content.config.ts` のenumに追加

## 今後の実装予定(このリポジトリに追加していく)

- [x] `.github/workflows/watch.yml` — 1日2回の自動観測ワークフロー
- [x] `scripts/watch.mjs` — 公式ブログ/リリースノートの差分検知
- [ ] `scripts/generate.mjs` — Claude APIによる重要度判定+記事生成
- [ ] タグページ・ページネーション
- [ ] OGP画像の自動生成

## 自動観測の仕組み(scripts/watch.mjs)

各AIサービスの公式ソースを定期チェックし、新着があれば `draft: true` のスタブ記事を
`src/content/posts/` に自動作成します(タイトル・概要のみ。本文執筆は今後追加する
`generate.mjs` の役割)。

| カテゴリ | ソース | 形式 |
|---|---|---|
| claude | anthropic.com/sitemap.xml (`/news/`のみ抽出) | XMLサイトマップ |
| chatgpt | openai.com/news/rss.xml | RSS |
| gemini | blog.google/products/gemini/rss/ | RSS |
| copilot | github.blog/changelog/label/copilot/feed/ | RSS |

- 既知/未知の判定は `scripts/data/seen.json` で管理(コミットして永続化)
- **初回実行時は下書きを作らず、現状を「既知」として記録するだけ**(過去記事が大量生成されるのを防止)
- ソースの追加・変更は `scripts/watch.mjs` 内の `SOURCES` 配列を編集
- ローカルで試す場合: `node scripts/watch.mjs`
- GitHub Actions (`.github/workflows/watch.yml`) が1日2回(9:00/21:00 JST)自動実行し、新着があればコミット+push(追加のAPIキーは不要)
