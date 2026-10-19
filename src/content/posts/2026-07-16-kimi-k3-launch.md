---
title: "Moonshot AI、2.8兆パラメータのオープンウェイトモデル「Kimi K3」を公開——100万トークン対応"
description: "Moonshot AIが、ネイティブ画像理解と100万トークンのコンテキストを備えた2.8兆パラメータのMoEモデル「Kimi K3」を公開。Kimiアプリ・APIで提供を始め、重みも独自の「Kimi K3 License」で公開しました。"
pubDate: 2026-07-16
category: kimi
type: news
tags: [Kimi, Moonshot AI, Kimi K3, オープンウェイト, 大規模言語モデル]
source: https://www.kimi.ai/blog/kimi-k3
draft: false
importance: high
---

北京のMoonshot AIが、新たなフラッグシップモデル「Kimi K3」を公開しました。パラメータ数は2.8兆で、同社は「これまでに公開されたオープンウェイトモデルとして最大」としています。画像をネイティブに理解でき、コンテキスト長は100万トークン。長時間にわたるコーディングやエージェント用途を強く意識したモデルです。

## 詳細

- **規模とアーキテクチャ**: 総パラメータ2.8兆(うち稼働は1,040億)のMixture-of-Experts構成。896個のエキスパートから16個を選んで推論し、新しい「Stable LatentMoE」フレームワークを採用。スケーリング効率はKimi K2の約2.5倍だとしています
- **主な要素技術**: Kimi Delta Attention(KDA)、Attention Residuals(AttnRes)、Gated MLA、エキスパート配分用のQuantile Balancing、Per-Head Muon、活性化関数SiTUなど。SFT段階から量子化を考慮した学習を行い、重みはMXFP4、活性化はMXFP8
- **コンテキストとモダリティ**: 100万トークンのコンテキストとネイティブな画像理解に対応。思考(Thinking)は常にオンで、公開時点の既定は最大の「Max」。「Low」「High」モードは今後追加予定
- **ベンチマーク(同社発表)**: DeepSWE(mini-SWE-agent使用)で67.3、BrowseCompではコンテキスト管理なしで100万トークンをそのまま使い90.4。カーネル最適化ではClaude Fable 5と互角、Opus 4.8やGPT 5.6 Solを上回るとする一方、総合的な使い勝手はまだClaude Fable 5やGPT 5.6 Solに及ばないことを同社自身が認めています
- **API料金**: 100万トークンあたり、入力がキャッシュヒット時0.30ドル、ミス時3.00ドル、出力が15.00ドル。コーディング用途ではキャッシュヒット率が90%を超えるとしています
- **提供先**: Kimi.aiとKimiモバイルアプリ(iOS・Android・HarmonyOS)、デスクトップアプリKimi Work(v3.1.0以降)、Kimi Code(`/model`で切り替え)、Kimi API(モデルID `kimi-k3`)、Kimi Enterprise
- **重みの公開**: 7月27日までの公開を予告し、現在はHugging Face(`moonshotai/Kimi-K3`)で独自ライセンス「Kimi K3 License」のもと公開済み。推論環境には64基以上のアクセラレータを束ねたスーパーノード構成を推奨
- **既知の注意点**: エージェント側の仕組みが過去の思考内容をすべてモデルに返さない場合や、会話の途中でK3に切り替えた場合、出力品質が不安定になることがあります。指示していない行動を自発的に取る傾向もあるため、範囲を限定したいタスクでは明示的な制約が必要になる場合があります

## その後

K3はすぐに外部ツールの基盤として採用されていきました。10月2日にはGitHub CopilotがKimi K2.7 Codeを非推奨とし、後継としてKimi K3を推奨しています。一方で注目度の高まりとともに、OpenAIが9月30日の脅威レポートでモデル蒸留キャンペーンを「Moonshot AIの関係者」によるものと指摘するなど、厳しい視線も向けられています。それでもK3は公開モデルの到達点を一段引き上げ、中国発オープンウェイトモデルと米国のフロンティアモデルとの差を大きく縮めました。
