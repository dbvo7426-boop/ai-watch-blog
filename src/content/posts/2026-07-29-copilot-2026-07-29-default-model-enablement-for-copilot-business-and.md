---
title: "GitHub Copilot、新モデルを自動有効化するデフォルトポリシーを導入 ― Business/Enterprise管理者向け"
description: "GitHubがCopilot Business/Enterprise向けに、新しく一般提供されたモデルを個別の手動有効化なしに自動で使えるようにするデフォルト有効化ポリシーを導入した。管理者は1つのトグルでオプトアウトできる。"
pubDate: 2026-07-29
category: copilot
type: news
tags: [Copilot, GitHub, 管理者, ガバナンス]
source: https://github.blog/changelog/2026-07-29-default-model-enablement-for-copilot-business-and-enterprise
draft: false
importance: low
---

GitHubは、Copilot Business/Enterprise向けに、新たに一般提供(GA)されたモデルを管理者が個別に手動有効化しなくても自動的に利用可能にする「グローバル・デフォルト有効化ポリシー」を導入した。管理者は組織のCopilot設定にある1つのトグルでこの挙動をオプトアウトできる。

## 詳細

- **ポリシー概要**: Copilot Business/Enterprise向けに、新たに一般提供(GA)されたCopilotモデルを、管理者が個別に手動有効化しなくても自動的に利用可能にする仕組みを導入
- **管理者への影響**: Enterprise/Organizationのモデル設定に単一のオプトアウト用トグルが追加される。従来通りモデルごとに手動承認したい場合は、このポリシーを無効化すればよい
- **既存設定の扱い**: 「意図的に有効・無効にした設定には手を触れない」とされており、管理者が明示的に有効/無効化済みのモデルの設定は今回の変更で上書きされない
- **スケジュール**: 2026年7月29日にポリシーの設定自体は可能になるが、この時点ではまだ実際の動作には影響しない(28日間のレビュー期間)。2026年8月26日にポリシーが実際に適用開始され、未設定(unconfigured)のモデルが「デフォルト継承(inherits default)」状態に移行する
- **設定変更の反映**: 未設定モデルは「unconfigured」から「inherits default」に表示が変わり、組織のポリシー設定に動的に追従する。ポリシーはいつでも切り替え可能で、変更は「inherits default」状態のモデルに即座に反映される
- **対象外のモデル**: DeepSeekやKimi K2.7などのオープンウェイトモデル、およびGitHubとデータ保持契約を結んでいないモデルは自動有効化の対象外

## 使ってみるには

- Business/Enterprise管理者は、Enterprise/Organizationの「Copilotのモデル設定」画面から、新モデルを自動有効化するか手動承認制にするかをトグルで選択できる
- 従来通り新モデルごとに承認したい場合は、8月26日の適用開始前にポリシーを無効化しておく
- 既に個別に有効/無効化しているモデルの設定は変更されないため、特別な対応は不要
