---
title: "OpenAI、コンピューター操作に強い高速モデル「GPT-6.1 Terra」を発表　API価格は半額に"
description: "GPT-6.1 Terraは詳細な視覚推論と正確なコンピューター操作を兼ね備え、ChatGPT Work、Codex、APIで利用可能。価格は入力100万トークンあたり1ドル、出力5ドル。"
pubDate: 2026-10-26
category: chatgpt
type: news
tags: [OpenAI, GPT-6.1 Terra, コンピューター操作, Codex]
source: https://openai.com/index/introducing-gpt-6-1-terra
draft: false
importance: high
---

OpenAIは、詳細な視覚推論と正確なコンピューター操作を兼ね備えた高速・高効率モデル「GPT-6.1 Terra」を発表した。日常的なオフィス作業やコンピューター作業では、GPT-5.6 Terraから大きく前進したと位置づけている。

## 詳細

- **提供状況:** 発表当日から（具体的な日付の記載なし）、ChatGPT WorkとCodexのPlus、Pro、Enterprise、Eduユーザーが利用可能。開発者はAPIで`gpt-6.1-terra`として使える。
- **利用枠:** ChatGPT WorkとCodexでは、同じ利用枠でGPT-5.6 Terraより多くのタスクをこなせ、GPT-6.1 SolやGPT-6 Astraよりは大幅に多い。
- **API価格:** 入力100万トークンあたり1ドル、キャッシュ入力0.05ドル、出力5ドル。標準価格はGPT-5.6 TerraやGPT-6.1 Solより50%安い。
- **コンピューター操作（Agents' Last Exam）:** 中程度の推論でGPT-5.6 Terraを15ポイント上回り、コストは約3分の1。GPT-6 Astraと同等の性能を、トークン単価約10分の1で実現。最大推論ではClaude Opus 5.5よりトークン効率が3倍超で、トークン単価は4分の1、タスクあたりのコストは約9分の1としている。GPT-6 AstraやGPT-6.1 Solより3倍超高速。
- **その他のベンチマーク（OpenAI公表値）:** MMMU-Proではすべての推論設定でGPT-5.6 Terraを上回る。OSWorld 2.1では中程度の推論でGPT-5.6 Terraの最高スコアを超える。Terminal-Bench 4.0は最大推論で50.3%（GPT-5.6 Terraの公表値は21.5%）だが、最も複雑なコーディングにはGPT-6.1 SolとGPT-6 Astraの方が適するという。Terminal-Bench-Science 0.1では最大推論でGPT-6.1 Solを上回り、Opus 5.5との差は5ポイント以内で、推定コストは5分の1未満。
- **事実性:** 誤りを誘発する社内プロンプトでの誤り率は、低推論で53.6%から16.7%に、最大推論では18ポイント下がって4.3%になった。
- **安全性:** Preparedness Frameworkのサイバーセキュリティで「Critical」しきい値に該当し、GPT-6 Astraで整備した保護策を引き継ぐ。GPT-5.6 Terraより範囲を守り、限界を正直に開示する傾向が強く、プロンプトインジェクションへの耐性も高いとしている。システムカードも公開されている。

## その後

Terraはラインナップの中でも大量利用・低コスト側に位置づけられ、最高のコーディング性能ではなく、Astra級のコンピューター操作を大幅に安く提供することが売りだ。Claude Opus 5.5などとの比較はOpenAI自身の数値であり、第三者による評価を待つ必要がある。同日にGitHub Copilotも本モデルに対応した。
