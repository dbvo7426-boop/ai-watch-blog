---
title: "GitHub intelligence: Copilot Memory GA, dreaming preview, cross-repo code search"
description: "GitHub describes a context and learning layer for agents built on its data graph: Copilot Memory is generally available, dreaming enters public preview, and Copilot can search code across repositories."
pubDate: 2026-10-28
category: copilot
type: news
tags: [GitHub Copilot, Copilot Memory, Dreaming, Code search, GitHub Universe]
source: https://github.blog/changelog/2026-10-28-github-intelligence-puts-your-code-context-and-history-to-work
draft: false
importance: high
---

GitHub introduced GitHub intelligence, a context and learning layer sourced from the graph of GitHub data, so agents can remember how you work, keep that guidance current, and find relevant code and history. Three capabilities ship with it: Memory, Dreaming, and Code Search.

## Details

- **Copilot Memory (generally available, paid plans):** Remembers personal preferences and repository conventions across sessions and clients. Memories can be created in the Copilot app, CLI, VS Code, cloud agent, code review, Slack, Teams, and GitHub Mobile. Sessions autonomously generate and curate memories. Manage personal memories in Copilot settings.
- **GitHub-reported results:** Among Copilot CLI sessions reviewed in the public preview where memory was used, 93% showed better adherence to developer preferences and 42% showed more efficient workflows.
- **Dreaming (public preview, opt-in):** Reflects on past work. Three types: personal memory curation, repository customization (manages repo memories and proposes improvements to skills and instruction files), and code review customization (turns recurring accepted feedback into guidance). It can add, update, and remove memories; changes to checked-in skills and instructions arrive as pull requests. Individuals enable it in settings; org and enterprise admins enable it via Copilot policies and users must also opt in. Dream runs consume AI credits.
- **Code Search:** Copilot can use GitHub code search across repositories without local clones: exact text and symbols, regex, filters by repository, path, or language, and semantic search by what code does. Example workflows with `/research`: plan a migration, investigate a bug across services, follow organizational standards.
- **Availability of search:** Settings and availability vary by capability; plan details for Code Search are undisclosed.

## What happened next

The pitch is that GitHub's advantage is owning the repository, review, and history data agents need. Memory is the mature piece; Dreaming is more ambitious because it edits shared guidance, though routing changes through pull requests keeps humans in the loop. The 93% and 42% figures come from GitHub's own review of preview sessions and have no published methodology here.
