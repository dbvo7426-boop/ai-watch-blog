---
title: "Lovable、Storyblok連携がコンテンツ管理API対応に"
description: "Lovableの9月24日changelogで、Storyblok連携にManagement APIオプションが追加され、アプリから記事の作成・更新・公開が直接可能に。あわせてPeopleエクスポートにクレジット上限の出所を示す新カラムも追加。"
pubDate: 2026-09-24
category: lovable
type: news
tags: [Lovable, Storyblok, Connectors, ProductUpdate]
source: https://docs.lovable.dev/changelog
draft: false
importance: low
---

Lovableは2026年9月24日のchangelogで、Storyblok連携を読み取り専用から本格的なコンテンツ管理機能へと強化しました。あわせて、ワークスペース管理者向けのPeopleエクスポートにも細かな改善が加えられています。

## 詳細

- **Storyblok Management API**: Storyblok連携に新たにManagement APIオプションが追加され、Storyblokアカウントでサインインすれば、承認したスペース内で記事(ストーリー)の作成・更新・公開や、アセット・コンポーネントの管理をアプリから直接行えるようになった
- **チャットからの編集指示**: プロジェクトチャットでLovableに指示するだけで、こうしたStoryblokのコンテンツ変更を代行させることも可能
- **CDN APIは従来通り維持**: 公開済み・プレビュー中のコンテンツを読み取るだけの既存のCDN APIオプションも引き続き利用できる
- **Peopleエクスポートにクレジット上限カラムを追加**: Settings → Peopleからメンバー一覧をエクスポートすると、ワークスペース管理者・オーナー向けにCSVへ「Effective Credit Limit(実効クレジット上限)」と「Credit Limit Source(上限の出所)」という2つの新カラムが追加され、各メンバーに適用される上限と、それが個人設定・ワークスペースのデフォルト・未設定のいずれに由来するかが分かるようになった
- **既存のCredit Limitカラムは変更なし**: このカラムは引き続き個人設定の上限のみを表示するため、新カラムが個人設定を持たないメンバーの情報を補完する形になる

## その後

今回の更新は、9月を通じて続いていた連携先拡大の流れの一環で、翌日にはDiscordとGoogle Business Profileへの対応も追加されました。Storyblok連携に書き込み権限が加わったことで、他のCMS連携と足並みがそろい、読み取るだけでなく直接コンテンツを管理できるようになった一方、Peopleエクスポートの変更により、ワークスペース管理者はチーム全体でクレジット上限が実際にどう適用されているかをより明確に把握できるようになりました。
