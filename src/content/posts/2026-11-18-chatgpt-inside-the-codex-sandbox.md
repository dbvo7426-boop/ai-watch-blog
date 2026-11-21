---
title: "OpenAI、Codexサンドボックスの仕組みを解説 macOS・Linux・Windows対応"
description: "Codexは各OS標準のサンドボックスと権限プロファイルでファイル・ネットワークを制限し、WindowsはMicrosoftのMXCへ移行中です。"
pubDate: 2026-11-18
category: chatgpt
type: news
tags: [OpenAI, Codex, サンドボックス, セキュリティ, 権限プロファイル]
source: https://openai.com/index/inside-the-codex-sandbox
draft: false
importance: medium
---

OpenAIは、Codexがユーザーのマシン上でコマンドを実行しつつ、ファイルとネットワークの制限を守る仕組みを詳しく説明しました。

**共通の設計**
- コマンドはVMやコンテナではなく、ユーザーの既存環境で各OS標準のサンドボックスを使って実行され、権限プロファイルで制御されます。組み込みの`:workspace`は、ワークスペース内への書き込みを許可し、`.git`、`.codex`、`.agents`、`.aws`は読み取り専用、ネットワークは無効です。子プロセスにも制限が引き継がれます。
- `config.toml`の`default_permissions`でプロファイルを選び、独自のものは`[permissions.<name>]`に定義して`extends`で拡張できます。ファイルはread・write・denyを指定でき、`**/*.env`のような拒否グロブも使えます。ネットワークは無効、全面許可、またはドメイン規則つきプロキシ制限から選べ、明示的な拒否が優先されます。企業向けの`requirements.toml`で`allowed_permission_profiles`も設定できます。
- `codex-network-proxy`(HTTPとSOCKS5)がドメイン規則で通信を検査し、規則に合わない通信は承認待ちにできます。`codex sandbox --permission-profile <name> -- <command>`でプロファイルを試せます。

**macOS**: `sandbox-exec`経由のSeatbeltで、既定拒否のSBPLポリシーを使います。プロキシ有効時はローカルのプロキシポートへの外向き接続のみ許可します。`sandbox-exec`は非推奨ですが、Codexは使い続ける予定です。

**Linux**: `codex-linux-sandbox`がbubblewrap(別のマウント名前空間、IPC・PID・ネットワークの分離)とseccomp-bpf、`no_new_privs`を組み合わせます。拒否グロブは各コマンド実行前に具体的なパスへ展開されるため、あとから作られた一致ファイルはブロックされません。

**Windows**: 管理者権限が必要でホストに状態が残り、遅かった従来の独自サンドボックスから、MXC(Microsoft eXecution Container)へ移行中です。送受信は既定で拒否(ループバックのみ許可)で、MXCはホストのファイル権限の変更にフォールバックできません。
