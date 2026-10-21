---
title: "OpenAI、COBOLやFortranなど低リソース言語のコーディング性能が大幅向上と報告"
description: "OpenAIは新しい評価で、GPT-6 AstraとGPT-6.1 SolがCOBOL、Fortran、OCaml、Visual BasicのコーディングやCOBOL移行タスクで大きく改善したと発表した。"
pubDate: 2026-10-19
category: chatgpt
type: news
tags: [OpenAI, コーディング, COBOL, 評価]
source: https://openai.com/index/low-resource-programming-languages
draft: false
importance: medium
---

OpenAIは、PythonやJavaScriptに比べ学習データが少ないものの重要なシステムを支えるCOBOL、Fortran、Visual Basicなど「低リソース言語」でのコーディング性能向上を発表しました。進捗を示すため、新しい多言語ベンチマークとCOBOL移行評価も公開しています。

## 詳細

- **重要性:** OpenAIは、COBOLがオンラインバンキングの40%超、対面クレジットカード決済の80%、ATM取引の95%を支えると述べています。Fortranは気象予報や原子炉の安全解析に使われます。
- **MultiLangBench:** 20言語でSQLite互換エンジンを構築する課題です。GPT-6 Astraは最大推論強度で平均テスト通過率87.4%(GPT-5.6 Solは26.8%)、20言語中19言語で83%超でした。
- **言語別の伸び(Astra):** COBOL 10.9%から72.1%、OCaml 25.6%から85.8%、Fortran 21.4%から83.5%、Visual Basic 27.5%から89.4%。COBOLが最難関のままです。
- **GPT-6 Luna:** 低コストモデルで平均40.3%、全言語でGPT-5.6 Solを上回り、推定コストは1サンプル0.77ドル(GPT-5.6 Solは3.48ドル、約78%減)です。
- **COBOL移行:** C++、Java、Kotlin、Python、Rustへの移行を、バイト単位で出力一致を求める非公開テストで判定。GPT-6.1 Solは低推論強度で86.6%(GPT-5.6 Solは5.4%)、コスト39%減、高強度では97.9%でした。
- **公開:** 評価設定、テストスイート、言語別結果はGitHubで公開。本番利用には専門家のレビューと業務ルールに沿ったテストが必要としています。

## その後

レガシー言語の刷新は大規模で具体的な企業ニーズであり、数値は漸進的ではなく段階的な飛躍を示唆します。ただし結果はOpenAI自身の選んだベンチマークによるため、第三者による再現が重要です。テストスイートが公開されたことで検証は可能です。
