---
title: Claude Enterpriseに「Inference hooks」登場 — プロンプトがモデルに届く前にリアルタイムで許可・拒否を判定
description: Anthropicがベータ版「Inference hooks」をClaude Enterprise向けに公開。組織が用意した独自のAIセキュリティサーバーが、claude.ai・Cowork・Claude Codeを横断してすべての管理対象プロンプトを推論実行前にリアルタイムで許可・拒否できるようになりました。
pubDate: 2026-08-05
category: claude
type: news
tags: [Claude, Anthropic, エンタープライズ, セキュリティ, コンプライアンス, DLP]
source: https://platform.claude.com/docs/en/manage-claude/inference-hooks
draft: false
importance: medium
---

Anthropicが、Claude Enterprise組織向けにベータ機能「Inference hooks」を発表しました。セキュリティ・コンプライアンスチームが用意した独自の「AIセキュリティサーバー」が、モデルに届く前のすべての管理対象プロンプトをリアルタイムで検査し、許可または拒否の判定を下せるようになります。事後の監査ではなく、claude.ai・Cowork・Claude Codeを横断してその場で介入できる点が特徴です。

## 詳細

- **仕組み**: ユーザーが管理対象の画面でプロンプトを送信すると、Anthropicは会話のトランスクリプトを含むHTTPS POSTリクエストを組織が設定したAIセキュリティサーバーへ送信。リクエストはStandard Webhooks仕様に基づいて署名されており、受信側のサーバーがAnthropicからの正規リクエストであることを検証できる
- **判定とタイムアウト**: セキュリティサーバーは`{"action": "allow"}`、または理由を添えた拒否のいずれかを含む小さなJSON形式の判定を、設定可能なタイムアウト(デフォルト5秒)以内に返す必要がある。拒否されたリクエストはモデルに到達せず、ユーザーにはサーバー側が示した理由と管理者が設定した常設メッセージを組み合わせた「ポリシーによりブロックされました」という通知が表示される
- **サーバーが受け取る情報**: セキュリティサーバーが受け取るのは会話のテキスト、ツール呼び出しとその結果、添付ファイルから抽出したテキストのみ。生のファイル・画像データ、システムプロンプト、Anthropic内部のコンテキストは一切送信されない
- **障害時の扱い**: セキュリティサーバーに到達できない、エラーを返す、あるいはタイムアウトした場合は、組織が設定した障害時ポリシーに従ってリクエストをブロックするか、検査なしで通過させるかが決まる
- **段階的な導入手段**: 一斉切り替えを避けられるよう、実際のトラフィックに対する判定結果だけを観察してブロックはしない「シャドーモード」、リクエストの一部だけを検査する「ロールアウト率」設定、特定のロールのメンバーを対象外にする「除外設定」が用意されている
- **想定される用途**: インラインでのDLP(データ損失防止)スキャン、Compliance APIをポーリングする代わりにプッシュ型でトランスクリプトをリアルタイム保存する用途、プロンプトのテレメトリ取得、モデルの許可リストやプロジェクト制限・稼働時間制限といった独自ポリシーエンジンの実装などをAnthropicは挙げている
- **現時点の制限事項**: 判定は許可・拒否のみでプロンプトの書き換えや redaction(部分削除)には対応せず、生データを送らないためスクリーンショットなど画像のみのコンテンツは検査対象外、音声モードも対象外。またAmazon Bedrock、Google Cloud、およびAPIのみのClaude Platform組織では利用できない
- **アクセス権限**: Inference hooksの設定には`organization:manage`権限が必要で、Admin・Owner・Primary ownerの各ロールにはデフォルトで付与されている
- **同時期のモデル関連の動き**: 同じリリースノート更新の中で、AnthropicはAPIからClaude Opus 4.1(`claude-opus-4-1-20250805`)モデルを退役させ、Claude Opus 5への移行を案内。研究者向けにはExternal Researcher Access Programを通じた継続アクセスも用意されている

## その後

Inference hooksは、Anthropicが既に提供しているCompliance APIを補完する位置づけです。Compliance APIが事後に活動・会話・ファイルを取得できるのに対し、Inference hooksはモデルがプロンプトを目にする前の段階でリクエストを許可・拒否できます。Anthropicは、推論後(応答側)に作用する新しいフックイベントを今後のリリースで提供する計画も明らかにしています。エンタープライズ管理者向けのセットアップ手順は、Anthropicの「Configure Inference hooks」および「Develop an Inference hooks integration」のドキュメントページで確認できます。
