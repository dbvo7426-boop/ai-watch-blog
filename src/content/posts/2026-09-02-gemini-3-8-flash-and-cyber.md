---
title: "Google、「Gemini 3.8 Flash」と、アクセス制限付きの脆弱性対応特化版「Flash Cyber」を発表"
description: "Googleが6週間で3世代目となる「Gemini 3.8 Flash」と、承認された防御担当者のみが利用できる特化版「Gemini 3.8 Flash Cyber」を発表。Google Cloudのテストでは重大な脆弱性を2時間足らずで発見し、商用ツール比でパッチの正確性が2.6倍という結果を示した。"
pubDate: 2026-09-02
category: gemini
type: news
tags: [Gemini, Google, GeminiFlash, サイバーセキュリティ, GoogleAIStudio]
source: https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/
draft: false
importance: high
---

Googleは新たに2つのモデルをリリースしました。ソフトウェア工学や複雑な推論向けの汎用アップグレード版「Gemini 3.8 Flash」と、脆弱性検出・自動パッチ適用に特化し、承認された防御担当者のみに提供される「Gemini 3.8 Flash Cyber」です。6週間で3世代目となるFlashモデルのリリースとなります。

## 詳細

- **3.8 Flashは「より粘り強く考える」**: Googleによれば、複雑なタスクに対して追加の推論ステップを実行し、ツールを反復的に呼び出すことで、より多くのトークンを消費する代わりに高い成果を得られるという。DeepSWE v1.1では、より大規模なフロンティアモデルの多くを大幅に低いコストで上回り、Vals Finance Agent V2やHarveyのLegal Agent Benchmarkでも3.7 Flashを上回るほか、理系・人文系・専門職分野を横断するHLE-Verifiedでは54.9%を記録
- **3.8 Flashの料金は据え置き**: 3.7 Flashの導入価格である入力トークン100万あたり0.75ドル、出力トークン100万あたり3.75ドルを維持。Google AI Studio、Android Studio、Gemini Enterprise、Google AI Pro/Ultraサブスクリプション、Geminiアプリ、Google検索から利用可能
- **Flash Cyberの実績**: GoogleのChrome Securityチームによると、比較対象の商用モデルより2.6倍多くの正しいパッチを生成。Wizによる評価では、侵入テストにおいて再現率が7.5〜9.7%高く、コストは2.3〜5.2分の1。Google CloudのVulnerability Researchチームは、通常数か月かかる重大な脆弱性の発見を2時間足らずで完了させた
- **Flash Cyberのベンチマーク**: 脆弱性発見ベンチマーク「CyberGym」でフロンティア級の性能を発揮し、社内テストでは20のプログラミング言語にわたり70%を超える成功率を記録。自動パッチ適用のベンチマーク「CWE-Bench」ではpass@1で47.2%を達成し、主要なフロンティアモデルに匹敵する性能をはるかに低いコストで実現
- **アクセス制限**: Flash Cyberは、Googleの新プログラム「Fairwind」を通じてのみ利用可能で、承認された政府機関・重要インフラ事業者・ソフトウェアメンテナーに限定される。認証されたユーザーが十分な防御能力を発揮できるよう、サイバーセキュリティ関連の制限がより緩和された形で動作する
- **共通の安全基盤**: 両モデルとも、化学・生物・放射性物質・核(CBRN)の悪用やサイバー攻撃的な悪用に対する安全対策を備え、Gray Swanベンチマークで測定されるプロンプトインジェクションへの耐性も改善されている

## その後

「Flash Cyber」とそれに付随する「Fairwind」アクセスプログラムの発表は、OpenAIによる「GPT-6 Astra」の安全性開示および「Daybreak for Frontline Defenders」構想の発表と同じ週に行われました。両社はいずれも、最もサイバー能力の高いモデルを、攻撃的な悪用が広がる前に重要インフラ事業者へ同等の防御能力を届けようとする、厳しくアクセス制限されたプログラムとともに投入しています。
