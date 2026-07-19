---
title: 「Gemini CLI」がVS Codeと深く連携、ワークスペース認識とネイティブ差分表示に対応
description: GoogleがGemini CLIのアップデートを発表し、VS Codeの統合ターミナルとの連携を強化。開いているファイルやカーソル位置を認識し、変更提案をエディタ内で直接差分表示できるようにした。
pubDate: 2025-08-13
category: gemini
type: news
tags: [Gemini CLI, Google, VS Code, "AI史"]
source: https://developers.googleblog.com/gemini-cli-vs-code-native-diffing-context-aware-workflows/
draft: false
importance: medium
---

Googleが2025年8月13日、「Gemini CLI」のアップデートを発表し、VS Codeとの連携を大きく強化しました。ターミナルで動くエージェントでありながら、開いているファイルやカーソル位置・選択テキストといったエディタの文脈を認識し、提案した変更をエディタ内でそのまま差分表示・編集できるようにしたのが目玉です。

## 詳細

- **ワークスペース・選択範囲コンテキスト**: VS Code連携を有効にすると、Gemini CLIが開いているファイルや選択中のテキストにアクセスできるようになり、現在の作業に即した提案が可能に
- **ネイティブな差分表示**: 提案されたコード変更はVS Code内でフルスクリーンの差分ビューとして表示され、受け入れる前にその場で修正できる
- **導入条件**: Gemini CLI バージョン0.1.20以降で、VS Codeの統合ターミナルから実行することが前提
- **セットアップ**: 初回は`/ide install`でコンパニオン拡張機能をインストール。以降は`/ide enable`・`/ide disable`で連携のオン・オフを切り替え可能
- **対応環境**: VS Code本体のほか、VS Code互換のエディタでも利用可能で、対応環境内でGemini CLIを起動すると自動的に接続を促すダイアログが表示される

## その後

VS Code連携はGemini CLIを単なるターミナルツールから、エディタと一体化した開発体験へと引き上げる転機になりました。この統合アーキテクチャは、2025年11月に登場したGoogleのエージェント特化型IDE「Antigravity」とも技術的な基盤を共有していくことになります。
