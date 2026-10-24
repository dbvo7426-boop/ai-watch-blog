---
title: "数千のGPT-Rosalindエージェントがマウス脳CRISPRアトラスを32分で解析"
description: "OpenAI、PerturbAI、Scripps Researchは、数千の並列GPT-Rosalindエージェントで脳全体のCRISPRアトラスを解釈し、神経変性疾患に関する新たな手がかりを得ました。"
pubDate: 2026-10-21
category: chatgpt
type: news
tags: [OpenAI, GPT-Rosalind, 生物学, エージェント, 研究]
source: https://openai.com/index/scaling-ai-research-for-complex-biological-data
draft: false
importance: low
---

OpenAI、PerturbAI、Scripps Researchは、脳全体のCRISPRアトラスの解析を、GPT-Rosalindで動く数千のAIエージェントに分担させました。OpenAIが「分散型生物学的推論」と呼ぶ手法です。マウスの数百万個の脳細胞の既存データを32分で解釈しました。

## 詳細

- **手法:** 各エージェントが遺伝子破壊を1つ担当し、細胞応答の解析、文献検索、説明の提案を行い、結果を遺伝子・細胞効果・文献・想定メカニズムを結ぶ「推論アトラス」にまとめました。
- **速度:** 同等の人手解析(摂動を1つずつ)は数カ月から1年かかると推定しています。
- **品質:** 人の解析結果を再現し、新規性や価値の評価は盲検の専門家と一致。専門家は75%の確率で分散エージェントの報告を好みました。
- **単一エージェントとの比較:** モデルと資源を固定した場合、最大負荷で単一エージェントの引用は11件、分散エージェントは700件超でした。
- **得られた手がかり:** mTORの調節因子Tsc1とTsc2の小脳での違い、Perry症候群の原因遺伝子Dctn1の破壊とコレステロール調節の関連の可能性。
- **公開:** 推論アトラスはGitHubで公開され、bioRxivのプレプリントもあります。

## その後

これらは検証済みの発見ではなく仮説で、今後の実験の優先順位づけに役立つとされています。実験による追試の結果は報告されていません。
