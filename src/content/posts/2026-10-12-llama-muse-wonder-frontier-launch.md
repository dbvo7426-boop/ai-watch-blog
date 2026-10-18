---
title: "Meta、初の本格的フロンティアモデル「Muse Wonder」と「Muse Wonder Full」を発表"
description: "MetaのSuperintelligence Labが、これまでで最も高性能なモデルとする「Muse Wonder」と「Muse Wonder Full」を公開。法務・金融・医療・コーディング分野での長時間エージェント作業を狙う新機能「Active Memory」「Active Focus」を搭載した。"
pubDate: 2026-10-12
category: llama
type: news
tags: [Meta, Muse, Muse Wonder, Superintelligence Lab, AIエージェント, フロンティアモデル]
source: https://research.meta.ai/blog/muse-wonder
draft: false
importance: high
---

Metaの研究部門Superintelligence Labは2026年10月12日、「Muse Wonder」と「Muse Wonder Full」を発表した。同社はこれらを「これまでで最も高性能なモデル」と位置づけ、Anthropic・OpenAI・Google DeepMindに続く、Metaとして初の本格的なフロンティアモデル参入とした。

## 詳細

- **2つのモデル**: Muse WonderはMeta Model APIおよびMuse Codeから利用可能。Muse Wonder FullはMuse Codeの有料サブスクライバー限定
- **新機能**: Metaは2つの新機能を強調している。1つは「Active Memory」で、ユーザーに関する重要な文脈情報を複数の会話にわたって保持し、現在のタスクに関連する詳細を呼び出す。もう1つは「Active Focus」で、難しい目標に向けて別のアプローチを試したり障害を乗り越えたり、新しい情報に適応したりしながら作業を続け、重要な行動の前にはユーザーに確認を取る
- **想定領域**: 法務・金融・医療分野での専門知識(賃貸契約や金融・医療文書の理解など)に加え、小規模アプリから複雑なソフトウェアプロジェクトまで対応するフロンティア級のコーディング能力を重視
- **公表されたベンチマーク**: Metaは「FocusBench」(持続的な集中力)、「SWE-Marathon」(長時間に及ぶソフトウェア開発)、Harvey社の「Legal Agent Benchmark(LAB)」での結果を挙げているが、具体的な数値はブログ本文ではなく別途公開のモデルカードに記載されている
- **第三者による評価**: 独立機関Artificial Analysisによると、Muse Wonder FullのIntelligence Indexは56(GPT-6 Astraを上回るが、Claude Opus 5.5の58には及ばない)、Muse Wonderは52。Muse Wonder FullはMuse Spark 1.3から10項目の評価全体でおよそ8ポイント向上した
- **安全性に関する主張**: Metaは Muse Wonder Fullを「これまでで最も安全に配慮したモデル」と説明し、CBRN(化学・生物・放射性・核)や サイバー悪用に対する防御力を強化しつつ、防御目的のサイバー能力は維持したとしている。詳細な安全性レポートは「近日中」に公開予定
- **学習基盤**: 両モデルはMetaのギガワット級データセンター「Prometheus」で学習された
- **一般ユーザー向け展開**: 消費者向けMuseアプリは依然として旧モデルのMuse Spark 1.3で動作している。MetaはWonderが「近いうちに」Museの一部機能を担うとしており、まずは有料サブスクライバーから展開し、その後広く展開するとしている
- **非公表の情報**: Metaのブログ記事では料金やコンテキストウィンドウのサイズは明らかにされていない。外部報道では、API料金が入力100万トークンあたり約4ドル、出力100万トークンあたり約20ドル、最大コンテキストウィンドウが約100万トークンとされているが、いずれもMeta自身の発表資料には記載がない

## その後

今回の発表は、2026年の大半を消費者向けMuse Sparkのアップデートやハードウェア向けSDK、小売連携の拡充に費やしてきたMetaのAI戦略における大きな方向転換を示している。独立系ベンチマークによれば、Muse Wonder FullはAnthropicのトップモデルに近づいたものの依然として一歩及ばない位置にあり、トップの座を塗り替えるというよりはOpenAIやGoogle DeepMindに実質的な圧力をかける格好となった。Metaの発表における自信に満ちた表現と、コンテキストウィンドウや料金といった具体的数値が自社発表に欠けている点とのギャップは、消費者向けMuseが近週データ保持の問題で受けている監視の目と重なるものであり、「これまでで最も安全に配慮したモデル」という主張をそのまま受け取る前に、Metaが約束した詳細な安全性レポートの公開を待つべき理由となっている。
