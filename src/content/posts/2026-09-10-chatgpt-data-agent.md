---
title: "「ChatGPT Work」の新「Data agent」、非エンジニアでも自然言語で社内データを分析可能に"
description: "OpenAIが「ChatGPT Work」向けに「Data agent」を発表。自然言語の質問を分析・インタラクティブなダッシュボードに変換し、Redshift・BigQuery・Databricks・Snowflakeなどと連携しつつ、既存の権限設定やBIツールの定義も尊重する。"
pubDate: 2026-09-10
category: chatgpt
type: news
tags: [OpenAI, ChatGPT, ChatGPTWork, データ分析, エンタープライズ]
source: https://openai.com/index/put-data-to-work
draft: false
importance: medium
---

OpenAIは「ChatGPT Work」向けに「Data agent」を発表しました。専門的なクエリのスキルを持たない社員でも、自然言語だけで社内データを探索し、インサイトを得られるようにする機能です。

## 詳細

- **主な機能**: 自然言語での質問をデータ分析とインタラクティブなダッシュボードに変換。追加の質問で結果をさらに深掘りでき、共有・編集可能な可視化資料を作成し、次に取るべきアクションや関係者候補も提案する
- **データ連携**: Amazon Redshift、Google BigQuery、ClickHouse、Databricks、MongoDB、Snowflakeに加え、Google DriveやSharePoint上のファイルとも連携
- **ビジネス文脈の理解**: dbtやDatabricks Genie Ontology、既存のBIダッシュボードといった信頼できるセマンティックレイヤーを参照するため、分析結果は企業がすでに定めている指標の定義から逸脱しない
- **アクセス制御**: 管理者がどのデータ連携を誰に利用可能にするかを設定でき、接続先アカウントに設定されたテーブル・行・列レベルの既存の権限もそのまま尊重される
- **BIツール連携**: Tableau、Power BI、Sigma、ThoughtSpot、Omni内でも動作し、すでに使い慣れたツールの中でデータ分析が可能
- **提供状況**: 「ChatGPT Work」のプラグインディレクトリからインストール可能。ワークスペース単位の設定・権限管理は管理者が行う

## その後

「Data agent」は、非エンジニアの社員が簡単なクエリのためにデータチームに依存せざるを得ないという、よくある課題に対応するものです。ガバナンスの効いていない別の分析レイヤーを新設するのではなく、自然言語の質問を既存のガバナンス済みデータ基盤に橋渡しする形を取っています。ヘルスケア・教育・金融サービス向け製品ラインに続き、ChatGPTを企業の中核業務へ組み込もうとするOpenAIの取り組みの延長線上にあります。
