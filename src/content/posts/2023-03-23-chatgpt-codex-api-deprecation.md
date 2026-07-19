---
title: 初代「Codex」API、GPT-3.5/GPT-4への統合を理由にわずか3日前通知で終了
description: OpenAIが2021年から提供していた初代Codex系モデル(code-davinci-002など)のAPI提供を終了。後継の汎用モデルがコード生成でも上回ったことを理由に挙げましたが、告知からわずか3日という短さが開発者の批判を招きました。
pubDate: 2023-03-23
category: chatgpt
type: news
tags: [Codex, OpenAI, GPT-3.5, GPT-4, "AI史"]
source: https://developers.openai.com/api/docs/deprecations
draft: false
importance: low
---

OpenAIが2023年3月23日、2021年から無料ベータで提供してきた初代Codex系モデル(code-davinci-002、code-davinci-001、code-cushman-002、code-cushman-001)のAPI提供を終了しました。理由として、後継の汎用モデルであるGPT-3.5・GPT-4がコード生成タスクでもCodexを上回るようになったことを挙げましたが、開発者への告知からわずか3日というあまりに短い移行期間が「プラットフォームとしての信頼性を揺るがした」と批判を集めました。

## 詳細

- **終了したモデル**: code-davinci-002、code-davinci-001、code-cushman-002、code-cushman-001の4モデルがAPIから削除
- **推奨移行先**: OpenAIはGPT-3.5-TurboやGPT-4への移行を推奨。コードだけでなくドキュメントやエラーメッセージ、ソフトウェア設計の文脈まで扱える汎用モデルの方が、コード専用モデルより優れているという判断だった
- **告知の短さ**: 開発者への通知からサービス終了までわずか3日程度しかなく、既存プロダクトにCodex APIを組み込んでいた開発者から強い反発が起きた
- **無料ベータゆえの軽視**: Codexは2021年の公開以来1年以上無料のベータ扱いで提供されており、正式な有料プロダクトではなかったことが、短期間での打ち切りにつながったとみられる
- **その後の部分復活**: 完全な提供終了の後、研究目的の需要を受けて「OpenAI Researcher Access Program」経由で一部研究者向けにアクセスが復活する場面もあった

## その後

初代Codexの唐突な終了は、OpenAIが単機能特化モデルよりも汎用大規模モデルへの投資を優先する姿勢を鮮明にした出来事でした。「Codex」のブランドはここで一度完全に姿を消しますが、約2年後の2025年、全く新しい設計思想を持つクラウド型コーディングエージェント「OpenAI Codex」として華々しく復活することになります。
