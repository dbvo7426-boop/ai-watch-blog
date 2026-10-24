---
title: "Patch the Planet：OpenAIがPHPの重大な脆弱性への世界的対応を調整"
description: "OpenAIはAIで発見されたPHPの重大な脆弱性2件の修正を連合で主導し、PHPバージョン確認用のCodexスキルを公開。重大な脆弱性への5段階の対応枠組みも提案しました。"
pubDate: 2026-10-21
category: chatgpt
type: news
tags: [OpenAI, セキュリティ, PHP, Patch the Planet, Codex]
source: https://openai.com/index/coordinated-disclosure-of-critical-vulnerabilities
draft: false
importance: high
---

OpenAIは2カ月にわたり、メンテナー、研究者、セキュリティ事業者の連合を率いてPHPの重大な脆弱性に対応しました。OpenAIのPatch the Planetの一環でCalifがGPT-5.6 Solを使って重大な欠陥を特定し、Wizも2件の脆弱性を独立に発見・報告しました。修正とリリースはPHPのメンテナーが主導しています。

## 詳細

- **直ちに必要な対応:** PHPを使う組織は修正を適用してください。OpenAIは脆弱な可能性のあるバージョンを確認するCodexスキル「PHP version checker」(openai/php2shell-checker)を公開しました。
- **深刻度:** OpenAIは近年で最も影響の大きいセキュリティ問題の一つとし、攻撃者より先にフロンティアAIが発見したことで「Defender's Window」が開いたと説明しています。
- **パートナーと政府:** WizやCloudflareなどが協力し、OpenAIは米ONCDやCISA、海外のパートナーとも連携しました。
- **資金:** Daybreak for Frontline Defendersを通じ、10億ドル相当の補助付きDaybreakアクセスを提供。重要サービスを守る、セキュリティ資源の限られた組織が対象です。
- **提案する5段階の枠組み:** 上流での検証と修正(フロンティアモデルによる敵対的テスト含む)、影響を受ける組織に対応時間を与える、政府との調整、各製品の更新準備、パッチ公開後のガイダンス提供と展開支援。誰を関与させるかはメンテナーが決めます。
- **メンテナー支援:** Codex for OSSの全メンテナー向けサブスクリプション、Rust Foundationなどへのスポンサー、Patch the Planet経由の実務支援。Daybreakには追加のブロック分類器を調整中で、正当なセキュリティ作業も遮断し得るというトレードオフを認めています。
- **安全な基盤づくり:** セキュアなコード生成、メモリ安全言語、形式検証、強力な隔離。
- **コミュニティへの問い:** 開示期間、緊急パッチ(権限のあるシステムに政府等が脆弱性を使って修正を当てる場合など)、事前通知の対象、下流パッケージのセキュアなデフォルト。

## その後

OpenAIは、これらは発見済みの重大な脆弱性の一部で、今後数カ月で同様の発見が急増すると見ています。枠組みはあくまで提案でフィードバックを募集しており、メンテナーや各機関がどう採用するかはこれからです。PHPの脆弱性のCVE番号や技術的詳細は、この投稿では示されていません。
