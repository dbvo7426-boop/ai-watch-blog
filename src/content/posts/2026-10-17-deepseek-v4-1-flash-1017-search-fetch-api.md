---
title: "DeepSeek、V4.1-Flash-1017へ更新し自社検索エンジンをSearch/Fetch APIとして公開"
description: "DeepSeekはAPIの使い方と価格を据え置いたままV4.1-Flash-1017へ更新し、自社検索エンジンを成功1,000リクエストあたり0.75ドルのSearch/Fetch APIとして公開した。"
pubDate: 2026-10-17
category: deepseek
type: news
tags: [DeepSeek, V4.1-Flash, API, 検索]
source: https://api-docs.deepseek.com/updates
draft: false
importance: high
---

DeepSeekは2026年10月17日、APIの変更履歴で2つの変更を発表した。DeepSeek V4.1 FlashのDeepSeek-V4.1-Flash-1017への更新と、自社検索エンジンのSearch/Fetch APIとしての公開である。

## 詳細

- **モデル更新:** 公式のWebおよびアプリのモデルも更新された。開発者は`deepseek-flash`で新モデルを利用でき、API呼び出し方法と価格は変わらない。
- **公表スコア（DeepSeek自社の数値）:** HLE（ツールなし）42.6（純テキスト部分は44.0）、Terminal-Bench 4.0が42.3、DeepSWE v1.1が77.0、ProgramBenchが29.1、NL2Repo-Benchが68.2、Automation-Bench v1.0.6が60.5、Agents' Last Examが35.4、Apex Bench v1.1が72.1、Chartography（ツールあり）83.0、BabyVision（ツールあり）92.5、ZeroBench-main（ツールあり）51.0。Terminal-Bench 4.0はClaude Codeフレームワーク、DeepSWEはMini-SWE-V2、ZeroBench-mainはPass@5で測定。
- **効率:** タスクの所要時間と出力長が短くなり、コスト低減と高速化につながるとしている。DeepSeek Harness、Tencent CodeBuddy、WorkBuddy向けに最適化されており、DeepSeek Harness 0.2.1-rc.1以降が推奨される。
- **検索エンジン:** 同社によると、自社開発のAIネイティブな検索エンジンは1日あたり数億件のリクエストを処理し、多言語クエリとリアルタイム結果に対応し、SEOスパム、GEO操作、低品質なAI生成コンテンツを検出して除外する。
- **エンドポイント:** `POST /v1/tools/search`はクエリ（1〜128文字）、任意の結果件数（1〜50、既定10）、サイト・完全一致・言語・日付などの演算子を受け付け、要約、任意のページ本文、関連度スコア、権威度ティアを返す。`POST /v1/tools/fetch`は1つのHTTP(S) URLを受け取り、タイトルと本文をMarkdownで返す。
- **価格と制限:** 各APIとも成功1,000リクエストあたり0.75ドル。結果が空の場合、失敗、タイムアウトは無料。アカウントあたりのレート制限はSearchが100 QPS、Fetchが25 QPS。
- **無料期間:** DeepSeek Harness、Claude Code、Codex経由のサーバー側ツール呼び出しは当面無料で、リクエスト単位の課金は北京時間2026年11月1日0時に始まる。

## その後

検索とページ取得を、成功時のみ課金される自社提供のエンドポイントとして使えるため、エージェント開発者は外部の検索ベンダーなしでモデルに根拠を与えやすくなる。DeepSeek Harness、Claude Code、Codexからの呼び出しは11月1日の課金開始まで無料で、試しやすい。なお、ベンチマークの数値はDeepSeek自身によるもので、ここでは第三者による検証は確認していない。
