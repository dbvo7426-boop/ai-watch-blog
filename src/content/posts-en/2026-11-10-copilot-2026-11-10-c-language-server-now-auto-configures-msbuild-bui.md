---
title: "Microsoft C++ Language Server for Copilot CLI now auto-configures MSBuild projects"
description: "The language server bundles its MSBuild compile commands extractor and runs it on project open, so agents no longer need to find and run a separate configuration skill."
pubDate: 2026-11-10
category: copilot
type: news
tags: [GitHub Copilot, Copilot CLI, C++, MSBuild]
source: https://github.blog/changelog/2026-11-10-c-language-server-now-auto-configures-msbuild-builds
draft: false
importance: low
---

The Microsoft C++ Language Server for GitHub Copilot CLI now bundles its MSBuild compile commands extractor and invokes it automatically.

## What changed

- **Before:** features such as go-to-definition and find references needed either a user-supplied compile_commands.json or a configuration skill that Copilot had to locate and run, which added setup time and token usage.
- **Now:** the extractor ships with the language server, and Copilot invokes it when the language server starts on project open. Generating the compilation database for MSBuild projects is deterministic, which reduces token use during setup.

## Other build systems

- You can supply your own compile_commands.json.
- For CMake projects, an earlier release's generate compile commands skill can be used by asking Copilot CLI to load the project.
- For custom build systems, a guide describes how to create a custom build extractor skill.

## Getting started

Install the plugin and accept the EULA using the C++ Language Server quick start in the repository. An active GitHub Copilot subscription is required.
