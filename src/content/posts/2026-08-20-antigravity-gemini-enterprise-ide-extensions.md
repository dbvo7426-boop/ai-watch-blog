---
title: "Google Antigravity、Gemini Enterpriseで利用可能に VS Code・JetBrains・Xcodeなど向けの拡張機能も公開"
description: "Google Antigravityが、対象となるGemini EnterpriseのStandard/Plusライセンスに含まれるようになった。予算管理、サンドボックス、監査ログといった管理機能を備える。あわせてVS Code、Visual Studio、JetBrains、Zed、Xcode向けの拡張機能も公開された。"
pubDate: 2026-08-20
category: antigravity
type: news
tags: [Google, Antigravity, Gemini Enterprise, IDE, VS Code, JetBrains, Xcode]
source: https://antigravity.google/blog/antigravity-enterprise
draft: false
importance: high
---

Googleは2026年8月20日、Antigravityについて関連する2つの発表を行った。1つは、エージェントファーストの開発プラットフォーム「Google Antigravity」が、対象となるGemini Enterpriseのサブスクリプションに含まれるようになったこと。もう1つは、開発者が普段使っているエディタの中でAntigravityのエージェントを使える「Antigravity Extensions」の公開だ。5月のGoogle I/OでGemini Enterprise Agent Platformへの搭載が予告されていたもので、今回、企業の開発者が別途ライセンスを買わずに使えるようになった。

## 詳細

- **Gemini Enterpriseでの提供**:対象となるGemini Enterpriseの**Standard**と**Plus**ライセンスに、発表当日から含まれる。追加ライセンスの購入も、Antigravity単体のアカウントも必要ない
- **サインイン**:開発者は社内で使っているID(エンタープライズID)でそのままサインインできる。Workforce Identity Federation(WIF)とApplication Default Credentials(ADC)にすべての利用形態が対応しており、APIキーを手作業で設定する必要はない
- **利用形態**:IDE拡張機能、CLI、Antigravity 2.0のデスクトップアプリ
- **管理者向けの機能**:
  - ワークスペースのサンドボックス化と、ブラウザ操作やMCPサーバーの権限制限
  - Google Cloud Billing上で、プロジェクト・チーム・個人ごとに月間予算の上限を設定できる。トークンは共有プールで管理され、使われなかった割り当てが無駄にならない
  - 上限付きの超過利用をオプションで許可でき、実行中のワークフローが途中で止まらないようにできる
  - プロンプト、エージェントによるツール実行、生成物をまとめて記録する監査ログを、トグル1つで有効にできる
- **データの扱い**:エージェントの動作はGoogle Cloud利用規約のもと、企業の管理範囲の中で完結する。Googleは顧客のコードを基盤モデルの学習に使うことはないと明言しており、セッションは組織のIAMポリシーとVPC Service Controlsに従う
- **IDE拡張機能**:
  - **VS Code**:VS Code Marketplaceで配布
  - **Visual Studio**(Visual Studio 2026を含む):Visual Studio Marketplaceで配布
  - **JetBrains**:バージョン2026.2.1以降のIntelliJ系IDE(IntelliJ IDEA、PyCharm、WebStorm、GoLand、CLion、Riderなど)
  - **Zed**:ワンクリックでインストールできる
  - **Xcode**:Xcode 27 beta 6以降の「Intelligence」設定パネルから導入する。macOS、iOS、iPadOS向けの開発に対応
- **拡張機能の利用条件**:個人の開発者は、無料プランを含むどのAntigravityプランでもGoogleアカウントでサインインして使える。企業ユーザーはGemini EnterpriseまたはGoogle Cloudプロジェクトの認証情報でサインインする。JetBrainsとZedの企業向けサポートはまだプレビュー段階
- **そのほかの更新**:Googleによると、Antigravity 2.0にはI/Oでのリリース以降、マルチルートワークスペースと権限範囲の指定機能が加わっている
- **導入企業の声**:AirAsiaは、本番環境向けQAコードの50%以上をAntigravityで書いているという。Accenture、CGI、Cognizant India、Deloitteも支持するコメントを寄せている
- **非公開の情報**:提供地域と、Gemini Enterpriseの料金が変わるかどうかは明らかにされていない

## その後

すでに契約しているGemini Enterpriseのライセンスに含めたことで、CursorやClaude Codeのようなツールを企業が導入する際に壁となる調達手続きが要らなくなった。Googleとしては、多くの企業がすでに費用を払っているライセンスの一部として、エージェント型コーディングを提供できることになる。IDE拡張機能の意味も大きい。Antigravityはエージェントファーストの単体アプリとして始まり、その後CLIが加わった。今回VS Code、JetBrains、Xcodeに入り込んだことで、開発者は使い慣れたエディタを変えずにそのエージェントを使えるようになった。翌日には、別のマシンで動いているAntigravityのセッションをブラウザから操作できる「Remote Control」も発表されている。
