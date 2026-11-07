---
title: "OpenAI、サイバーセキュリティで「Critical」評価のGPT-6 CyberをDaybreak Red顧客向けに提供開始"
description: "GPT-6 CyberはExploitGymで48.5%、デプロイ用プロンプトなしでも99.93%の確率で範囲内にとどまり、新たな安全対策と重要インフラ向けアクセス枠も加わります。"
pubDate: 2026-11-05
category: chatgpt
type: news
tags: [OpenAI, GPT-6 Cyber, セキュリティ, Daybreak, Preparedness]
source: https://openai.com/index/introducing-gpt-6-cyber
draft: false
importance: high
---

OpenAIは、悪用可能な脆弱性の発見と修正案の作成に向けたサイバーセキュリティモデル「GPT-6 Cyber」を発表しました。研究者が定めた境界を守るよう訓練されています。Preparedness Frameworkではサイバーセキュリティ分野で「Critical」と評価され、GPT-5.6 Cyberの「High」から引き上げられました。

## ベンチマーク

- **ExploitGym:** 48.5%で、GPT-5.6 Cyberの32.1%から相対51%向上しました。
- **Webペネトレーションテスト(新規の評価、ソースコードなし):** 脆弱性の再現率は40.3%で、GPT-6 Astraの32.0%を上回ります。
- **RemoteExploitBench(新規。GitLab、PostgreSQL、Jenkinsの既知の脆弱性を管理環境で評価):** Daybreak Blue上のGPT-6 Astraは全タスクを拒否(100%)した一方、GPT-6 Cyberは95%を完了しました。失敗は、リモートで動作させられなかったエクスプロイト1件のみです。
- **範囲の遵守(ExploitGym Honeypot):** デプロイ時の安全プロンプトなしで、範囲外のサービスを悪用しなかった割合は99.93%(GPT-5.6 Cyberは94.49%)、プロンプトありでは100%でした。

## 実際の成果

- **Firefox:** Mozillaが高深刻度と分類した未知の脆弱性81件に加え、既知の30件が報告より深刻であることを示しました。Mozillaは修正の反映を始めています。
- **Linuxカーネル:** 脆弱性1,724件を再現し、動作するエクスプロイト948件を作成。同じ環境でのGPT-5.6 Solは166件でした。重大な発見304件をパッチ案とともにメンテナへ開示しています。
- **Brotli:** 他のOpenAIモデルと併用し、下流アプリケーションでリモートコード実行につながることを示すエクスプロイトを検証しました。
- **利用者:** Cisco、Calif、CodeRabbitのセキュリティチームが脆弱性調査やコードレビューに利用。OpenAI自身の学習基盤のレッドチーム演習では、エージェントが脆弱性を連鎖させてmicroVMから脱出しました。

## 安全対策

- サイバー特化のミスアライメント監視と、新たな脅威への重点監視(例:稼働中のPHPサーバーを狙うエクスプロイト開発の試み)。
- Private Safety Processing:Zero Data RetentionのAPI顧客は原則これを使う必要があり、暗号化された記録が顧客のストレージに30日間保持され、プロンプトと応答はOpenAIの担当者に見えません。
- Daybreak Red APIはデフォルトでIPアローリストを必須とし、認証情報の侵害も監視します。
- 産業用制御や安全上重要なシステムを危険にさらしうる支援をブロックする新しいチェック。OpenAIは、正当なセキュリティ業務でも似た手法を使うため、ブロック率は高ければよいわけではないとしています。
- Dragosがラボ環境でサイバー許容型のDaybreak Redモデルを評価し、その結果を安全対策の改良に使いました。

## 提供方法

GPT-6 Cyberは当初、APIとCodex経由で、承認された一部のDaybreak Red顧客に提供されます。全Daybreak Red顧客への段階的な拡大が予定されていますが、時期は示されていません。GPT-5.6 Cyberは全Daybreak Red顧客が利用できるようになりました。新設の「Daybreak Red for Critical Infrastructure」は、承認された防御担当者が重要システムで許可されたテストを行える枠です。10億ドル規模の助成プログラム「Daybreak for Frontline Defenders」は、リソースの限られたチームの利用を補助し、GPT-6 AstraのDaybreak Blueアルファアクセスも拡大されます。料金は公表されていません。
