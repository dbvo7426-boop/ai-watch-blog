---
title: "ElevenLabsのMCP、チャットアシスタント内で音声・音楽・画像・動画生成に対応"
description: "ElevenLabsがModel Context Protocol(MCP)サーバーをエージェント管理機能から本格的なコンテンツ生成機能へと拡張。Claude、ChatGPT、Cursorなどから、チャットを離れずにボイスオーバーや音楽、画像、リップシンク動画を生成できるようになった。"
pubDate: 2026-09-14
category: elevenlabs
type: news
tags: [ElevenLabs, MCP, ModelContextProtocol, 音声AI, コンテンツ生成]
source: https://elevenlabs.io/blog/introducing-voice-music-image-and-video-generation-in-the-elevenlabs-mcp
draft: false
importance: medium
---

ElevenLabsは2026年9月14日、Model Context Protocol(MCP)サーバーを拡張し、これまでのエージェント管理機能に加えて、Claude・ChatGPT・Cursorなどのチャットアシスタントから直接コンテンツ生成を行える機能を追加しました。

## 詳細

- **「管理」から「創造」へ**: ElevenLabsは今回の拡張を「これまでのMCPは、日々使っているアシスタントからエージェントを管理できるものだった。それが今、創造することもできるようになった」と説明している
- **音声・スピーチ関連機能**: ライブラリ内の任意の音声によるテキスト読み上げ(ボイスオーバー)生成に加え、話者ラベルとタイムスタンプ付きで99言語に対応する音声書き起こし、元の話者の声質を保ったまま行える吹き替えも可能
- **新たに対応したメディア形式**: 音楽、効果音、画像、そしてリップシンク動画の生成にも対応した
- **幅広いクライアント対応**: Claude、ChatGPT、Cursor、Grok Bot、Hermesなど、MCPに対応する各種アシスタントで利用可能。各プラットフォームのコネクタディレクトリからOAuth認証で導入でき、APIキーの取得や手動でのサーバー設定は不要
- **モデルの幅広さ**: このコネクタは50種類以上の基盤モデルを統合している
- **ワークスペースとの連携**: MCP経由で生成したコンテンツはすべてElevenCreativeワークスペースに格納され、Studioでさらに編集できる。ワークスペース管理者はツールへのアクセス権やデータ保存地域を管理できる

## その後

今回の拡張により、ElevenLabsのMCPサーバーは、狭い意味でのエージェント運用ツールから、MCPに対応する任意のアシスタント向けの汎用的な創作バックエンドへと役割を広げました。Music v2.5モデルの投入から3日後、Receptionの発表の2日前というタイミングでの発表であり、モデル・連携機能・新製品にまたがる9月中旬のElevenLabsの製品発表ラッシュの一環となっています。
