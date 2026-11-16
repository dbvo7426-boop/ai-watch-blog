---
title: "OpenAI shares a candidate lattice definition of the Standard Model built with GPT-6 Astra"
description: "Physicist Nathaniel Craig describes a candidate nonperturbative lattice definition of the Standard Model, with GPT-6 Astra taking the lead on the detailed proof."
pubDate: 2026-11-15
category: chatgpt
type: news
tags: [ChatGPT, GPT-6 Astra, physics, research]
source: https://openai.com/index/step-toward-defining-the-standard-model
draft: false
importance: medium
---

OpenAI published a first-person account by Nathaniel Craig of a candidate nonperturbative definition of the Standard Model on a lattice (a grid representing spacetime). The idea was first proposed in an October preprint prepared with the aid of GPT-6 Astra.

## What was done

- The open problem: the Standard Model is a chiral theory, because the weak force treats left- and right-handed fermions differently. The most natural lattice rules produce unwanted extra right-handed partners (doublers), so a complete lattice definition has been missing.
- Existing work on overlap fermions removes the doublers, but the phase (the fermion measure) for the full Standard Model had stayed open for more than 25 years.
- Craig's idea was to represent the same force fields on a succession of finer grids and compare the allowed fermion states between successive grids. Adding up those comparisons gives a phase rule on the original grid. The proof shows it gives the right correction around every allowed loop, under a bound on field strengths at the grid scale.
- According to Craig, GPT-6 Astra suggested how to carry a set of force fields onto finer grids, showed that the comparisons converge to a definite answer, and took the lead in developing the detailed proof. Lattice field theorists Maarten Golterman, Andreas Kronfeld and Yigal Shamir reviewed the proof and asked probing questions.

## Caveats

- This is a candidate definition, and Craig says expert dialogue is required to decide whether it has all the desired properties. He describes it as an answer in principle rather than in practice, with much work needed before it is useful for realistic simulations.
- He is now examining whether the construction satisfies reflection positivity at finite lattice spacing.
- The construction leaves open the continuum theory. Craig points to OpenAI's recent proof of the existence of Yang-Mills theory as the missing piece for that step.
- Independent verification results are not disclosed in the post.
