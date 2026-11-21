---
title: "OpenAI Explains How the Codex Sandbox Works on macOS, Linux and Windows"
description: "Codex uses native OS sandboxing with permission profiles for filesystem and network limits, and is moving its Windows sandbox to Microsoft's MXC."
pubDate: 2026-11-18
category: chatgpt
type: news
tags: [OpenAI, Codex, sandbox, security, permission profiles]
source: https://openai.com/index/inside-the-codex-sandbox
draft: false
importance: medium
---

OpenAI detailed how Codex runs commands on a user's machine while enforcing filesystem and network limits.

**Shared design**
- Commands run in the user's existing environment, not a VM or container, using each OS's native sandboxing, governed by permission profiles. The built-in `:workspace` profile allows writes inside the workspace, keeps `.git`, `.codex`, `.agents` and `.aws` read-only, and disables network access. Child processes inherit restrictions.
- In `config.toml`, `default_permissions` selects the profile; custom profiles go under `[permissions.<name>]` and can `extend` others. Filesystem entries use read, write or deny (deny globs such as `**/*.env` supported). Network can be disabled, fully open, or proxy-restricted with domain rules (explicit deny wins). Enterprise `requirements.toml` can set `allowed_permission_profiles`.
- A `codex-network-proxy` (HTTP and SOCKS5) checks requests against domain rules; unmatched requests can be held for approval. The `codex sandbox --permission-profile <name> -- <command>` command tests profiles.

**macOS**: Seatbelt via `sandbox-exec` with a deny-by-default SBPL policy; with the proxy, only outbound connections to local proxy ports are allowed. `sandbox-exec` is deprecated, but Codex plans to keep using Seatbelt.

**Linux**: `codex-linux-sandbox` combines bubblewrap (separate mount namespace, IPC/PID/network unshare) with seccomp-bpf and `no_new_privs`. Deny globs are expanded to concrete paths before each command, so files created later that match are not blocked.

**Windows**: Codex is moving from its earlier custom sandbox, which needed admin access, left persistent host state and was slow, to MXC (Microsoft eXecution Container). Egress and ingress default to deny with loopback allowed, and MXC cannot fall back to changing host filesystem permissions.
