---
title: "'Grok Build' Goes Open Source — Full Code Released in Response to Unauthorized Upload Issue"
description: xAI has fully open-sourced its coding agent "Grok Build." The move comes in response to a recently discovered issue involving unauthorized repository uploads, and usage limits have also been removed.
pubDate: 2026-07-15
category: grok
type: news
tags: [Grok, xAI, Coding, Security]
source: https://x.ai/news/grok-build-open-source
draft: false
importance: high
---

xAI has fully released the source code for its coding agent "Grok Build." The move is positioned as a response to an issue discovered on July 12, in which the tool was found to be uploading entire repositories without regard for user settings. Usage limits on the cloud version have also been removed.

## Details

- **Scope of release**: Roughly 844,530 lines of Rust code have been published on GitHub (xai-org/grok-build), covering the agent's core functionality (context management, interpreting model responses, tool execution), code manipulation tools, the terminal UI, and extension mechanisms such as skills, plugins, and MCP servers
- **License**: Apache 2.0
- **Fully local operation**: Building from source and specifying your own inference environment in `config.toml` enables completely offline operation
- **Removal of usage limits**: Rate limits previously imposed on the cloud version have been lifted; with local execution, "the limit is whatever your hardware can handle"

### The security issue that triggered this

- On July 12, security researchers reported that Grok Build CLI (v0.2.93) had been uploading entire Git repositories to xAI's servers without authorization
- Even users who had turned off the "help improve the model" setting reportedly had data uploaded in Git bundle format, including deleted files and commit history
- An average of 5.10GB was transmitted per session — roughly 27,800 times more than what a coding task would actually require, according to one analysis
- On July 13, xAI stopped the uploads via a server-side flag. On July 14, Elon Musk stated that "any uploaded user data will be completely deleted"
- However, the upload functionality itself was not removed from the code, only disabled via a server-side flag — leading security experts to caution that this isn't a permanent guarantee

## How to try it

- The source is available on GitHub at "xai-org/grok-build" or via x.ai/open-source
- Developers who previously used Grok Build are advised to rotate any credentials, such as API keys or SSH keys, that may have been committed to their repository history, just to be safe
