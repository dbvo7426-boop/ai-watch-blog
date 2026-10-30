---
title: "OpenAI updates the Model Spec around five core values"
description: "OpenAI reorganized its Model Spec around five values, added a faithfulness-to-intent section and new defaults, and retired most style rules."
pubDate: 2026-10-29
category: chatgpt
type: news
tags: [OpenAI, Model Spec, Alignment]
source: https://openai.com/index/updated-model-spec
draft: false
importance: medium
---

OpenAI released an updated Model Spec, the document describing how its models are intended to behave. The Spec is now structured around five core values that explain why models are asked to behave as they do.

## Details

- **Five values:** Faithfulness to human intent, harm minimization, honesty and transparency, human agency, and care.
- **Faithfulness section (new):** Treats people's values as primary and instructions as usually the clearest signal of them. It draws on the assistance games framing of alignment research.
- **Chain of command:** Updated to explain which instructions apply and how conflicts are resolved.
- **Context:** A new subsection says conversations, memories and other evidence should inform the model's reading of intentions and preferences.
- **New defaults:** Supporting human agency and following relevant social norms. Guidance on controlling and communicating side effects was expanded.
- **Style rules retired:** Most detailed style guidance was removed in favor of adapting to user preferences. The default of approaching questions objectively remains.
- **Terminology:** The model is now called GPT rather than the assistant.
- **Status:** OpenAI says the Spec describes intended behavior and current models do not yet fully reflect it. Public feedback is invited, and new training methods are being explored with results promised later.

## What happened next

The update shifts the Spec from a rule list toward stated principles, with firm boundaries kept for safety and most other guidance as overridable defaults. Whether and when models will fully match the new text is undisclosed; OpenAI says only that training work is ongoing.
