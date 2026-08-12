---
title: Genspark、オープンソースのAIオフィススイート「GenOffice」を公開──macOS/Windows向けに無料提供
description: Gensparkが、世界初をうたう本格AIオフィススイート「GenOffice」をオープンソースで公開。Docs・Sheets・Slides・PDFの4アプリをmacOS/Windows向けに、Apache 2.0ライセンスの下、無料・広告なしで提供しています。
pubDate: 2026-08-03
category: genspark
type: news
tags: [Genspark, GenOffice, オープンソース, 生産性]
source: https://www.genspark.ai/blog/genoffice-open-source-ai-office
draft: false
importance: high
---

Gensparkが、「世界初となる本格的なオープンソースAIオフィス(PC・Mac向け)」と位置づける「GenOffice」を公開しました。ワープロ・表計算・プレゼンテーション・PDFツールを、macOS/Windows向けのネイティブデスクトップアプリとして一式にまとめ、無料・広告なしで提供。AI編集機能はチャット型のサイドバーとして後付けするのではなく、あらゆる操作レイヤーに組み込まれているのが特徴です。

## 詳細

- **4つの中核アプリ**: Docs(AIによる文章のドラフト作成・整形・リライト支援)、Sheets(オープンソースのUniverコアとRust製XLSX処理エンジンをベースに、AIによる数式生成・データ分析に対応)、Slides(AIが構成案を組み立て、スライドをデザインし、説明文からデック全体を生成)、PDF(注釈・フォーム入力・署名・ページ操作、文書内でのAI質疑応答に対応)
- **ファイル互換性**: 全アプリが.docx・.xlsx・.pptx・.pdfといった標準フォーマットの読み書きに対応。Docsは編集してももとの書式が崩れないバイト保存型のラウンドトリップを実現
- **アーキテクチャ**: 5つのElectronアプリが共通のエンジン層を共有。docx-engine・pptx-engine・file-parse・agent-coreといった中核パッケージはElectronに依存しない純粋なTypeScriptで実装されており、SheetsはRustサイドカー経由でcalamineとIronCalcを利用
- **セキュリティ**: contextIsolationを有効化したレンダラーの完全なロックダウン、スライド用スクリプトの制約付きAST評価、信頼できないHTMLの分離レンダリングなどを実装
- **ライセンスと料金**: Apache License 2.0の下で公開され、誰でも無料で利用可能。広告や透かしはなし。コードベースは改変・商用利用を含めてオープン
- **AI機能について**: 組み込みAI(GensparkのSuper Agentが担う)の利用にはGensparkアカウントが必要で、Gensparkのクレジットを消費する。ただしオフィスとしての基本機能はアカウントや支払いなしで利用できる
- **開発の経緯**: Gensparkによれば、Alpha版はエンジニア1人が1週間、AIトークン代約1万ドル分を使って開発したという

## その後

- macOS(Apple Silicon)・Windows(x64)向けの署名済みインストーラーをgenspark.ai/genofficeで配布中。現行バージョンは0.4.110
- ソースコードはgithub.com/genspark-ai/genofficeで公開
- 現時点ではAlpha版であり、Gensparkはバグや未実装機能があることを認めた上で、GenTeam上のGenOfficeグループチャットを通じたコミュニティからのフィードバックを募集している
