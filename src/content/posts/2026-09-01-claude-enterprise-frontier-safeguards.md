---
title: "Anthropic、ゴールドマン・サックスやStripeなど100社超と共同開発した「Enterprise Frontier Safeguards」を発表"
description: "Anthropicが「Enterprise Frontier Safeguards」を発表。顧客はClaudeとのやり取りログを自社のクラウド環境・自社の暗号鍵で保管しながら、複数セッションにまたがる高度な悪用も検知する完全自動の安全性監視を利用できる。ARC加盟の9行すべてを含む100社超と共同開発。"
pubDate: 2026-09-01
category: claude
type: news
tags: [Claude, Anthropic, エンタープライズ, データプライバシー, セキュリティ]
source: https://www.anthropic.com/news/enterprise-frontier-safeguards
draft: false
importance: medium
---

Anthropicは「Enterprise Frontier Safeguards(EFS)」を発表しました。大企業がClaudeとのやり取りログを自社のクラウドインフラ・自社の暗号鍵の下で保管しながら、複数セッションにまたがる高度な攻撃も検知できる完全自動の安全性モニタリングの恩恵を受けられる仕組みです。

## 詳細

- **100社超との共同開発**: 金融、ヘルスケア、製造、通信、法律、小売、公共部門にまたがる100社以上の顧客と共同開発。Analysis and Resilience Center for Systemic Risk(ARC)加盟の9行すべて——ゴールドマン・サックス、モルガン・スタンレー、シティ、バンク・オブ・アメリカ、ウェルズ・ファーゴなど——に加え、コムキャスト、KPMG、マスターカード、Salesforce、Visa、Stripe、Snowflake、Cognition、Factoryが参加
- **データ管理権**: 顧客は自社のAmazon S3、Azure Blob Storage、Google Cloud Storageアカウントに、自社の暗号鍵とアクセスポリシーの下でログを保管でき、監査ログも顧客側で完全に管理できる
- **モニタリングは自動化を維持**: 安全性レビューはAnthropic側の人間によるアクセスを一切介さず完全自動で実行。サイバー攻撃・認証情報の窃取・攻撃的能力の開発といったパターンを、一定期間の通信全体から検知し、顧客自身のチームに直接アラートを送って判断を委ねる
- **モジュール式で追加費用なし**: 顧客管理型ストレージ・鍵管理・自動レビューはそれぞれ個別に選択可能。Anthropicからの追加課金は一切なく(クラウドプロバイダー側のストレージ・データ処理費用は別途発生)、モデルの挙動・料金・レート制限にも影響しない
- **現在利用可能な範囲**: Claude Code、Claude Enterprise、Claude Platform、さらにAmazon Bedrock、GoogleのAgent Platform、Microsoft Foundryで利用可能。対象顧客はEFSが完全に利用可能になるまでの間、Claude Fable 5および5.1でゼロデータ保持の恩恵を受けられる
- **顧客の声**: ウェルズ・ファーゴは「まさに我々が求めていたものだ。ログはウェルズが管理する環境の中に、ウェルズが管理する鍵の下で保存される」とコメント。Stripeは「会話ログをStripe自身のAWS環境内に保持できるようになる」と述べている

## その後

EFSは、データの保管責任とモデルの能力を切り離すことで、Anthropicが規制対応に特に敏感な大企業顧客——とりわけシステム上重要な銀行群——を取り込む狙いがうかがえます。組織はログの物理的な管理権を手放すことなく、Anthropicの最も高性能なフロンティアモデルを利用できるようになります。利用申請はAnthropicの申請フォームからすでに受け付けています。
