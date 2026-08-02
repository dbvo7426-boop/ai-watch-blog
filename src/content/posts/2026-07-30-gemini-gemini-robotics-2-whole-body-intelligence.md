---
title: "Google DeepMind、全身制御に対応した「Gemini Robotics 2」を発表 ― ヒューマノイドの器用な動作とオンデバイス版を披露"
description: "Google DeepMindが、視覚・言語・行動を統合したVLAモデル「Gemini Robotics 2」と、その軽量版「Gemini Robotics On-Device 2」を発表。ヒューマノイドロボットが歩行から指先の器用な操作まで全身を使いこなせるようになる。"
pubDate: 2026-07-30
category: gemini
type: news
tags: [Gemini, Google DeepMind, ロボティクス, 身体性AI, Embodied AI]
source: https://deepmind.google/blog/gemini-robotics-2-brings-whole-body-intelligence-to-robots/
draft: false
importance: high
---

Google DeepMindは、ロボットの全身制御を担う視覚言語行動(VLA)モデル「Gemini Robotics 2」と、ネットワーク接続なしでも動作する軽量版「Gemini Robotics On-Device 2」を発表した。同日発表の身体性推論モデル「Gemini Robotics ER 2」と合わせた3モデル体制により、ヒューマノイドロボットが歩行・しゃがみ・物体操作を同時にこなす「全身知能」を実現するとしている。

## 詳細

- **Gemini Robotics 2(VLA)**: 視覚と言語の入力をモーター制御に変換するVLAモデル。「足先から指先まで」の全身ヒューマノイド制御に対応し、複数の身体構成・グリッパー種別にまたがる高度な操作を可能にする
- **Gemini Robotics On-Device 2**: ネットワーク接続なしでロボット本体上で動作する効率重視版VLA。モーション転移技術により、200例に満たないデータと数時間の学習で全く新しいロボットの身体構成にも素早く適応できる
- **Gemini Robotics ER 2との連携**: 同日発表済みの身体性推論(Embodied Reasoning)モデルが高次の意思決定・複数ステップのタスク計画・複数ロボット間の連携を担当し、Gemini Robotics 2が実際のモーター動作を担う役割分担
- **性能指標**: 多指ハンド「SharpaWave」による電球取り外しタスクで成功率92%、Franka Duoグリッパーによる精密な挿入作業で89.6%、Apptronik製ヒューマノイド「Apollo 2」による机上からの物体持ち上げで68.4%を達成。多指での器用な操作は依然として難易度が高い分野と位置付け
- **パートナー**: Apptronik(Apollo 2)、Boston Dynamics、Agile Robots、Franka(Duoプラットフォーム)などのロボットで実証
- **安全性の枠組み**: 危険なツール操作の拒否やタスク実現可能性の予測を測定する新しい安全性ベンチマーク「ASIMOV-Agentic」を導入
- **提供方法**: VLAモデルおよびOn-Device版は、申請フォームを通じたアーリーアクセスパートナー向けに提供。Trusted Testerプログラムへの登録も受付中(ER 2はGoogle AI Studioおよび Gemini Enterprise Agent Platformの限定プレビューで提供)
- **発表**: 2026年7月30日、Google DeepMindのCarolina Parada氏による発表。同日発表のGemini Robotics ER 2とあわせた一連のロボティクス発表の一部

## その後

- VLA本体およびOn-Device版は現時点では一般公開されておらず、アーリーアクセスの申請状況や対応ロボットの拡大が今後の注目点
- ASIMOV-Agenticベンチマークの詳細な評価結果や、多指ハンドでの器用な操作の精度向上が続報として期待される
