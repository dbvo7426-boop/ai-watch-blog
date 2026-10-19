---
title: "Copilot CoworkとCopilot Studioで、自然言語から業務アプリを作れるように"
description: "MicrosoftがCopilot Cowork(Frontierメンバー向けの/appスキル)とCopilot Studio(パブリックプレビュー)に、自然言語によるアプリ作成機能を追加。作ったアプリはIT管理下のフルスタックアプリとして、Microsoft 365テナント内で動作します。"
pubDate: 2026-09-10
category: mscopilot
type: news
tags: [Microsoft Copilot, Copilot Cowork, Copilot Studio, アプリ開発]
source: https://www.microsoft.com/en-us/microsoft-copilot/blog/copilot-studio/build-apps-in-copilot-cowork-and-copilot-studio/
draft: false
importance: medium
---

Microsoftが、Copilot CoworkとCopilot Studioに、自然言語でアプリを作る機能を追加しました。欲しいアプリを言葉で説明するだけで、社内データにつながり、IT部門の管理下に置かれたフルスタックのアプリをCopilotが生成してくれます。Copilot StudioとPower Platformを率いるRyan Cunningham氏(コーポレートバイスプレジデント)による発表です。

## 詳細

- **仕組み**: 実現したい業務の成果、利用者、扱うデータ、必要な操作を説明すると、Copilot Studioがエージェント型のコーディングでアプリのひな形を生成。あとは会話しながら手直しし、プレビューで確認したり、生成されたコードを直接見たりできます
- **対象ユーザー**: 一般の業務担当者から、上級のローコード開発者、プロの開発者まで
- **データと操作**: コネクタとWork IQで組織の文脈を取り込み、データの読み取り、操作の実行、業務システムへの書き戻しまでを、すべてMicrosoft 365テナントの境界内で行います。例として、新入社員のオンボーディング管理アプリやフィールドサービス用アプリが挙げられています
- **開発基盤とガバナンス**: オープンな標準技術で作るフルスタックアプリで、Gitによるソース管理、デプロイステージ、バージョンの分離に対応。Microsoft EntraのIDと、組織のデータ・コネクタポリシーが最初から適用され、公開されたアプリはIT管理者がMicrosoft 365管理センターで管理できます
- **共有**: 共有されたアプリはmanagedapps.cloud.microsoft.comで見つけられます
- **課金**: アプリの作成と実行は従量課金
- **提供状況**: Copilot Coworkでは、Microsoft Frontierプログラムのメンバーが`/app`スキルですぐに利用可能。Copilot Studioでは新しい「アプリ」タイルから使え、翌週にかけてパブリックプレビューとして順次展開されます

## その後

この方向性は、2週間後の9月25日に発表された「新しいCopilot」に取り込まれました。そこでは、アプリ作成に特化した「Code」と、Cowork・Code・Copilot Studioで作ったアプリをテナント内で動かす「Copilot Managed Runtime」が登場しています。今回の発表は、いわゆる「バイブコーディング」で作る社内ツールを、外部サービスに頼るシャドーITではなく、管理と課金が行き届いたMicrosoft 365の一部にしようとする動きの最初の具体的な一歩となりました。
