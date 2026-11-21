---
title: "GitHub Copilot Evalsがパブリックプレビューに"
description: "Copilot環境のスキル、カスタムエージェント、MCPツールを繰り返しテストできます。VS Code、Copilot CLI、Copilotアプリで利用可能です。"
pubDate: 2026-11-17
category: copilot
type: news
tags: [GitHub Copilot, Evals, パブリックプレビュー]
source: https://github.blog/changelog/2026-11-17-github-copilot-evals-is-now-in-public-preview
draft: false
importance: medium
---

GitHub Copilot Evalsが2026年11月17日にパブリックプレビューになりました。Copilot環境のスキル、カスタムエージェント、MCPツールがどう動作するかをテストできます。GitHubはevalを「AIの挙動を繰り返し検証できるテスト」と定義しており、AIの出力は実行ごとに変わるため、カスタマイズを変更したら同じevalを再実行して退行がないか確認することを勧めています。

できること:
- プロジェクト内のスキル、カスタムエージェント、MCPツール向けにevalを作成する(Copilotへの自然言語での依頼、または`/eval`コマンド)。
- 実行して、どのチェックが成功・失敗したかを確認する。各実行は開始前に承認します。
- チェックが失敗した理由を調べ、何を変えるか判断する。
- 変更前後の実行結果を比較する。

評価は、拡張可能なローカルのeval実行ツールであるVally上で動きます。

**インストール:**
- VS Code: Visual Studio Marketplaceの「GitHub Copilot Evals」拡張機能(GitHub.copilot-evals)。
- Copilot CLI: github.com/github/evalsの手順に従ってEvalsプラグインを導入。
- Copilotアプリ: Customizeを開き、`github/evals`マーケットプレイスを追加してプラグインをインストール。

**提供状況:** Copilot Individual、Business、Enterpriseでパブリックプレビュー。ドキュメントはaka.ms/evals、フィードバックはgithub.com/github/evals/issuesへ。
