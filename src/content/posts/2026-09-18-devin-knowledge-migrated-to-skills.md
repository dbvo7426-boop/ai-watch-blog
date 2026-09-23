---
title: "Devin、単独機能だった「Knowledge」を廃止しSkillsに統合"
description: "Cognitionは9月18日のリリースノートで、Devinの旧「Knowledge」ノート機能を新しいSkillsシステムへ自動移行。内容とフォルダ構成を維持したまま、旧Knowledgeページは読み取り専用になる。"
pubDate: 2026-09-18
category: devin
type: news
tags: [Devin, Cognition, Skills, Knowledge, ProductUpdate]
source: https://docs.devin.ai/release-notes/overview
draft: false
importance: low
---

Cognitionは2026年9月18日、Devinの「Knowledge」ノート機能を、より新しいSkillsシステムへ移行する作業を開始しました。コードベースについてDevinに教える方法として並存していた2つの仕組みを、1つに統合する狙いです。

## 詳細

- **自動変換**: 既存のKnowledgeノートは、組織・エンタープライズ・個人という各スコープごとに専用の「knowledge」プラグイン内のスキルへ自動的に変換される
- **内容はそのまま維持**: 移行によってノートの内容やフォルダ構成は変わらず、Devinはセッション内で変換後のノートも従来と同じように利用し続ける
- **旧ページは読み取り専用に**: ある組織の移行が完了すると、その組織の旧Knowledgeページは読み取り専用表示になり、以後の管理はCustomize → Skillsへ誘導される
- **ユーザー操作は不要**: Cognitionはアカウントごとに段階的に移行を進めており、管理者やユーザーが手動で操作する必要はない

## その後

今回の変更は新機能の追加ではなく、あくまで統合です。KnowledgeとSkillsはDevinに永続的なコンテキストを与える2つの別々の仕組みへと肥大化しており、古い方を新しい方に統合することで、管理者はリポジトリや組織についてDevinが知っている内容を「Customize → Skills」という1か所で管理できるようになります。この変更は、SWE-2のリサーチプレビューやBitbucket Data Center対応を含む、はるかに大規模な9月21日のアップデートの直前に行われており、Cognitionがほぼ毎日のペースでDevinのリリースノートを更新し続けているパターンの一環です。
