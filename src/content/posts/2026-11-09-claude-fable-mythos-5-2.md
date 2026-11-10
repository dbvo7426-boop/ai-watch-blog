---
title: "Anthropic、Claude Fable 5.2とMythos 5.2を公開、5.1より低価格に"
description: "Fable 5.2は全ユーザー向け、Mythos 5.2は認証済み組織向けです。どちらも100万トークンのコンテキストを持ち、出力は5.1より最大30%高速で、料金は入力100万トークンあたり8ドル、出力は40ドルです。"
pubDate: 2026-11-09
category: claude
type: news
tags: [Claude, Anthropic, Fable 5.2, Mythos 5.2, フロンティアモデル]
source: https://www.anthropic.com/claude-fable-and-mythos-5-2
draft: false
importance: high
---

Anthropicは、難度の高い技術的な仕事に向けた最も高性能なモデルとして、Claude Fable 5.2とClaude Mythos 5.2を公開しました。同社によると両者は同じ基盤モデルで、Fableはサイバーセキュリティと生物学の強力なセーフガードを備えて全ユーザーに提供され、MythosはCyber Verification ProgramやLife Sciences Verification Programで認証された組織に提供されます。

## 詳細

- **料金と速度:** 入力100万トークンあたり8ドル、出力は40ドルで、Fable 5.1とMythos 5.1の10ドル・50ドルから下がりました。出力は5.1より最大30%高速です。オプションのファストモードはトークン生成が最大2.5倍速くなり、入力16ドル、出力80ドル(いずれも100万トークンあたり)です。
- **仕様(API):** モデルIDは `claude-fable-5-2` と `claude-mythos-5-2`、コンテキストは100万トークン、最大出力は12万8千トークンで、アダプティブシンキングは常時オンです。Claude API、Claude Platform on AWS、Amazon Bedrock、Google Cloud(Anthropic管理とGoogle管理の両方)、Microsoft Foundryで利用できます。
- **ベンチマーク(Anthropic公表、セーフガード有効):** FrontierCode 2.0は Xhighエフォートで49.1%(Fable 5.1は32.4%、Opus 5.5は45.5%)、FrontierSWE v2は69.9%、Terminal-Bench-Science 0.1は74.6%(Mythos 5.2は75.3%)、OSWorld 2.1は89.3%、Remote Labor Indexは41.3%(Fable 5.1は17.9%)、ツール使用時のHumanity's Last Examは74.2%です。比較表にはGPT-6 AstraとGemini 4 Carbonも載っています。
- **効率:** ClaudeアプリとClaude Codeの既定であるMediumエフォートでは、Fable 5.2は5.1より少ないトークンで難しいタスクをこなします。FrontierCode 2.0では、HighエフォートのFable 5.2がMaxエフォートのOpus 5.5とほぼ同等のスコアで、タスクあたりのコストは約半分でした。
- **サイバーセキュリティ:** AnthropicのCVE Rediscovery評価で、Mythos 5.2はOpus 5.5より10.2%、Mythos 5.1より14.4%多くの脆弱性を見つけました。Fable 5.2のセーフガードはサイバー関連のタスクの大半をブロックします。Claude EnterpriseのユーザーはClaude Securityを使え、これはMythos 5.2を使うようになりました。
- **Anthropicが挙げた事例:** 本番サービスのPythonからRustへの移行(起動が約26倍速く)、1,000を超えるサブエージェントが8日間で作った試作OS、ブラックホールに関する物理学の未解決問題2件、カプシド全体の構造予測手法(34件中28件を正確にモデル化)、フェルマーの最終定理の証明の30時間での形式化などです。
- **安全性:** Anthropicは、Fable 5.2のサイバーと生物学のセーフガードは5.1と同等の堅牢さで不要なブロックが減り、蒸留攻撃への保護は過去最強だとしています。システムカードも公開されています。
- **使いどころ:** 多くの作業ではまずClaude Opus 5.5を使い、最も難しい作業でFableやMythosに切り替えることをAnthropicは勧めています。Fable 5.2は、小さいモデルのアドバイザーやオーケストレーターとしても使えます。

## APIを使う人への注意

- どちらのモデルも30日間のデータ保持が必須で、Anthropicが明示的に認めない限りゼロデータ保持では使えません。
- 思考ブロックのプレフィックスチェックが全アカウントに適用されます。システムプロンプト、ツール、過去のメッセージを編集したうえで思考ブロックを送り返すと、400エラーになります。
- Fable 5.2の思考ブロックを読めるのはFable 5.2とMythos 5.2だけです。
- 従来の `computer_20251124` ツールはAmazon Bedrock以外の全プラットフォームでエラーになるため、`computer_toolset_20260801` を使います。
- アドバイザーツール(ベータ)では、Fable 5.2またはMythos 5.2のエグゼキューターにはFable 5.2またはMythos 5.2のアドバイザーが必要です。
