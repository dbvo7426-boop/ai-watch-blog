---
title: "GitHub Copilot のチャットで画像の生成と編集が可能に"
description: "GitHub Copilot で、自然言語による画像の生成・編集がパブリックプレビューとして始まりました。GPT Image 2.5 Flare を利用し、画像トークン単位で AI クレジットから消費されます。"
pubDate: 2026-10-28
category: copilot
type: news
tags: [GitHub Copilot, Image generation, GPT Image 2.5 Flare, GitHub Universe]
source: https://github.blog/changelog/2026-10-28-generate-and-edit-images-directly-in-copilot
draft: false
importance: medium
---

GitHub Copilot で、自然言語による画像の生成と編集ができるようになりました。画像を依頼すると、選択中の推論モデルが GPT Image 2.5 Flare を使う専用の画像生成ツールを呼び出し、結果をインラインでプレビューしてプロジェクトに保存します。

## 詳細

- **使い方:** 任意の Copilot チャットで、作業の途中でも画像を言葉で指示できます。プレビューはインライン表示され、ワークスペースに直接保存されるため、別ツールへ移る必要がありません。
- **対応環境:** VS Code、GitHub Copilot アプリ、Copilot CLI のチャット。
- **管理者制御:** 組織・エンタープライズのオーナーは、Copilot モデルポリシーで画像生成モデルを無効にすることで機能をオフにできます。
- **ウォーターマーク:** 目に見える「Made with AI」ウォーターマークを任意で有効化できます。既定はオフです。
- **提供状況:** Copilot Pro、Pro+、Business、Enterprise 向けのパブリックプレビュー。
- **課金:** チャットモデルとは別に、画像トークンに基づいてプランの AI クレジットから消費されます。単価は非公開です。

## その後

画像生成が別モードではなく、チャットモデルが呼び出すツールとして実装されている点が特徴で、モックアップ、アイコン、ドキュメント用素材をコーディング中にそのまま作れます。ポリシーによる無効化と任意のウォーターマークは、企業側の懸念に配慮したものです。ただし消費レートは非公開のため、広く導入する前にコストを試算しておくのが無難です。同日の Copilot アプリのリリース情報にも同じ機能が挙げられています。
