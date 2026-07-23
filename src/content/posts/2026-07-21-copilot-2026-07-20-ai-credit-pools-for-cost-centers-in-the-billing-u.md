---
title: "コストセンターのAIクレジットプールを課金UIから直接管理可能に"
description: "GitHubが、組織の課金UI上でコストセンターごとのAIクレジットプールを作成・編集できる機能を追加。従来必要だったAPI操作なしで、上限の自動計算や超過許可の設定が可能になった。"
pubDate: 2026-07-20
category: copilot
type: news
tags: [Copilot, AIクレジット, 課金, コストセンター]
source: https://github.blog/changelog/2026-07-20-ai-credit-pools-for-cost-centers-in-the-billing-ui
draft: false
importance: low
---

GitHubが、組織の課金UI上でコストセンターごとの「AIクレジットプール」を直接作成・編集できるようにしました。これまではREST API経由でしか設定できなかった機能で、管理者はAPIを叩かなくても画面操作だけでプールの有効化・調整ができるようになります。

## 詳細

- **できること**: コストセンターの作成・編集画面でAIクレジットプールをトグルでオンにするだけで設定完了
- **上限の自動計算**: プールの上限は、そのコストセンターに割り当てられたCopilotライセンス数に基づきGitHubが自動計算。ライセンスの増減に応じて上限も動的に調整されるため、手動で数値を入力する必要がない
- **超過時の挙動を選択可能**: 上限に達した時点で利用をブロックするか、エンタープライズ側で許可されていれば超過利用を認めるかを選べる
- **コストセンター予算との違い**: 「予算(budget)」はプールを使い切った後の従量課金に上限をかける別軸の仕組みで、AIクレジットプールとは独立して同時に設定できる
- **対象**: GitHub Enterprise Cloud上のCopilot BusinessおよびCopilot Enterprise顧客

## 使ってみるには

- 対象組織の管理者は、コストセンターの作成または編集画面からAIクレジットプールのトグルをオンにするだけで設定できる
- 詳細な運用方法はGitHub Docsの「Control GitHub costs at scale」を参照
