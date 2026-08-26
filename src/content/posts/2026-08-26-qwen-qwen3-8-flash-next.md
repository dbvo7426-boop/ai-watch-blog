---
title: "Alibaba、Qwen4アーキテクチャのプレビュー版「Qwen3.8-Flash-Next」をオープンウェイトで公開"
description: "AlibabaのQwenチームは、Qwen4のアーキテクチャを先取りする1250億パラメータのマルチモーダルMoEモデル「Qwen3.8-Flash-Next」をオープンソース化しました。ハイブリッドアテンションとN-gram埋め込みを採用し、トークンごとに実際に稼働するのは60億パラメータのみです。"
pubDate: 2026-08-26
category: qwen
type: news
tags: [Qwen, Alibaba, オープンウェイト, Qwen4, MoE]
source: https://github.com/QwenLM/Qwen3.8-Flash-Next
draft: false
importance: medium
---

Alibaba傘下のQwenチームは2026年8月26日、Qwen3.8-Flash-NextをHugging FaceとModelScopeでオープンソース化し、FP8版のウェイトも同時に公開しました。このモデルは次期Qwen4のアーキテクチャを先取りするプレビュー版と明確に位置付けられており、ベンチマークの首位を狙うというより、Qwenチームが言うところの「究極のコスト効率」を目指したものです。

## 詳細

- **アーキテクチャ**: 合計1250億パラメータのマルチモーダルMixture-of-Expertsモデルだが、トークンごとに実際に活性化するのは60億パラメータのみ。加えて、よく使われる単語・フレーズのまとまりを保持し、GPUではなく通常のシステムRAM上で動作可能な510億パラメータ規模のN-gram埋め込み層を独立して搭載する
- **4つの体系的な刷新**: Qwenチームは「アテンション、残差接続、埋め込み、最適化」の4領域にわたる変更を挙げている。長文コンテキストの効率化のためGated DeltaNetとQwen Sparse Attention（QSA）を組み合わせ、残差ストリームを4つの動的ゲート付きブランチに拡張する「Gated Residual」構造を導入。さらに低コストで容量を稼ぐN-gram埋め込みと、改良版Muonオプティマイザを採用している
- **コンテキストウィンドウ**: ネイティブで26万2144トークン、YaRNにより最大100万トークンまで拡張可能
- **性能に関する主張**: Qwenチームによれば、自社の従来モデルQwen3.7-Plusを約9分の1の学習コストで上回る性能を達成しており、特にコーディングとオフィスタスク系のベンチマークで伸びが大きいという
- **提供版**: ホスト型の提供版「Qwen3.8-Flash」はQwenCloud API経由で利用可能で、価格は入力100万トークンあたり0.16ドル、出力100万トークンあたり0.47ドル。OpenAI互換・Anthropic互換インターフェースを備え、Claude Code、Codex、Qwen Codeでも利用できる
- **入手方法**: オープンウェイト（FP8量子化版を含む）はHugging FaceとModelScopeで公開されており、Transformers、llama.cpp、vLLM、SGLang、Unslothなどでデプロイ可能

## 使ってみるには

Hugging FaceまたはModelScope上の`Qwen/Qwen3.8-Flash-Next`からウェイトをダウンロードするか、OpenAI互換エンドポイント経由でQwenCloud APIのホスト型モデル`qwen3.8-flash`を呼び出す。

## その後

- 各種報道は、今回のリリースをフラッグシップモデルの投入というより、Qwen4アーキテクチャの一般公開プレビューとして位置付けている。Alibabaは現時点でQwen4本体のリリース時期を明らかにしていない
- 8月13日に独自の収益分配ライセンスの下でオープンウェイト化されたQwen3.8-Maxに続く動きだが、今回のQwen3.8-Flash-Nextはフロンティア性能というより効率重視のデプロイを狙った、より一般的な形でのオープンリリースとなっている
