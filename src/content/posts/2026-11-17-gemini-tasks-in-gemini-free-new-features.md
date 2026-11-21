---
title: "Google、Geminiの「Tasks」を発表 電話・買い物・用事を代行するエージェント機能を6か国で無料提供"
description: "TasksはGemini 4 Hydrogenで動作し、米国・日本・韓国・カナダ・オーストラリア・インドで無料。企業への電話、AP2決済での買い物、テキストや転送メールからの依頼に対応します。"
pubDate: 2026-11-17
category: gemini
type: news
tags: [Gemini, Tasks, AIエージェント, AP2, Gemini 4 Hydrogen]
source: https://blog.google/innovation-and-ai/products/gemini-app/tasks-in-gemini-free-new-features/
draft: false
importance: high
---

Googleは2026年11月17日、GeminiアプリのTasksを発表しました。米国、日本、韓国、カナダ、オーストラリア、インドの6か国で無料です。Gemini 4 Hydrogenで動作し、一部の高度な機能は米国で先行して提供されます。

## 使い方

- **アプリ内:** ホーム画面のトグルをChatからTaskに切り替えます。
- **テキスト:** 設定のChannelsから「Text with Gemini」のSet upを選び、電話番号を認証します。対象の通信事業者の米国番号が必要です。
- **メール:** gemini@google.com にメールを転送します(まず米国で提供)。

## できること

- **電話:** 企業に代わってGeminiが電話をかけ、たとえば整備の予約を取ってカレンダーに追加します。インディアナ、ルイジアナ、ミネソタ、モンタナ、ネブラスカの各州では通話は利用できません。
- **請求書:** Google パスワード マネージャーとの連携で、公共料金のポータルやメール内の過去の明細を確認できます。
- **買い物:** Googleのショッピンググラフで商品を比較し、割引コードを探して、Google Payでチェックアウトします。
- **食料品:** 品目や写真をテキストで送ると、Instacartに引き継いで注文を進めます。
- **カレンダー:** 転送した学校のメールを予定に変換できます。
- **連携アプリ:** 60以上のアプリと連携でき、開発者はConnected Apps Platformに申請できます。

## 決済

購入にはAgent Payments Protocol(AP2)を使い、MastercardとVisaに対応、American Expressは近日対応予定です。カードはデジタルトークンで扱われ、ポイントや還元、購入者保護もそのまま適用されます。利用上限を固定で設定できます。領収書と追跡情報はGoogle ウォレットに送られ、ウォレットは同日からiOSにも拡大します。Universal Commerce Protocol(UCP)への対応も予定されています。

## セキュリティ

- タスクはGoogle CloudのAgent Compute Engine上のハードウェア分離された仮想マシンで実行され、アカウントごとに専用のVMが割り当てられます。
- プロンプトインジェクション対策フィルタとGoogle セーフ ブラウジングで、開けるリンクを制限します。
- 「購入」をクリックするなど重要な手順の前には確認のため一時停止します。定型的な操作は「常に許可」にできます。
- タスク設定の変更、アプリの連携解除、チャット履歴の削除が可能です。

## 制限事項

Googleは、失敗したり意図とずれたりするタスクがあるとしています。対応途上のサイトでは、ほぼ完了した段階で最後のクリックを利用者に戻すことがあります。無料提供以外の料金は非公開です。
