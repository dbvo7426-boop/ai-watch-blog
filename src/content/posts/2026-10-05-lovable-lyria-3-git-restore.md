---
title: "Lovable、Lyria 3音楽生成とbeehiiv/Ramp連携、Git復元機能を追加"
description: "Lovableの10月5日のchangelogでは、GoogleのLyria 3音楽生成モデルがアプリのAI機能に追加されたほか、beehiiv・Rampの新連携、Gitリポジトリへのpushで作業が上書きされた場合に復元できる機能が公開された。"
pubDate: 2026-10-05
category: lovable
type: news
tags: [Lovable, Lyria, Git, beehiiv, Ramp, ProductUpdate]
source: https://docs.lovable.dev/changelog
draft: false
importance: medium
---

Lovableは2026年10月5日のchangelogで、Googleの音楽生成モデルLyria 3をアプリのAI機能に追加しました。あわせてbeehiiv・Rampという2つの新連携、そしてGitリポジトリへのpushでプロジェクト作業が上書きされた際に復元できる安全機能も公開しています。

## 詳細

- **Lyria 3音楽生成モデル**: Googleの新モデル2種がアプリのAI機能で利用可能に。「Lyria 3 Clip Preview」は約30秒のクリップを、「Lyria 3 Pro Preview」は最大約184秒のトラックを生成できる。いずれもテキストまたは画像のプロンプトに対応し、ボーカルありまたはインストゥルメンタルでの出力を選べる。クレジットは完成したトラックごとに消費される
- **beehiiv連携**: ニュースレターの購読者管理、投稿の公開、下書きの保存などニュースレター運用向けの機能をアプリから利用可能に。Connectorsから追加できる
- **Ramp連携**: 取引履歴の閲覧、カード管理、利用限度額へのアクセスなど、ビジネス支出データを扱えるようになり、支出管理ダッシュボードの構築などに活用できる
- **Git push後の復元機能**: 接続済みのGitリポジトリへのpushによってプロジェクト作業が上書きされた場合に備え、Lovableが自動的にバックアップを作成するようになった。オーナーはProject settings → Gitから、保存されたLovable側の作業を復元するか、リポジトリ側のバージョンを維持するかを選択でき、復元した作業はリポジトリまたは`lovable-sync`ブランチに同期される

## その後

Git復元機能は、LovableプロジェクトをGitリポジトリと同期しているチームが実際に直面しうる失敗パターンに対応するものです。これまでは不用意なforce-pushによって進行中の作業が復元不能なまま失われることがありましたが、今回の機能でそのリスクが緩和されます。Lyria 3の提供開始と合わせて見ると、テキスト・画像にとどまらず音楽生成へとAI機能のモデルラインナップを広げつつ、同時に安全面の強化も進めるLovableの姿勢がうかがえます。
