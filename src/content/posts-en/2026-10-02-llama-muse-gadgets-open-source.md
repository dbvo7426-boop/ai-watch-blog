---
title: "Meta Open-Sources Muse Gadgets, an SDK for Building Your Own Muse Hardware"
description: "Meta Superintelligence Labs released Muse Gadgets, an open-source ESP32 firmware and Linux SDK that lets developers connect DIY hardware to the Muse AI agent, alongside a free USB-C smart-home hub called Muse Home Link."
pubDate: 2026-10-02
category: llama
type: news
tags: [Meta, Muse, open source, SDK, smart home, hardware]
source: https://gadgets.muse.ai
draft: false
importance: medium
---

Meta Superintelligence Labs launched Muse Gadgets on October 2, 2026, an open-source ESP32 firmware and Linux SDK that lets developers build their own hardware around Meta's personal AI agent, Muse. The release was announced by Nat Friedman, head of product at Meta Superintelligence Labs, as what he called a side project, and was amplified by Meta Chief AI Officer Alexandr Wang as the start of a "Muse ecosystem."

## Details

- **What's released**: an Apache 2.0-licensed ESP32 Device SDK and a Linux Device SDK, published on GitHub (`facebookincubator/muse-gadget-sdk`), covering firmware for microcontroller boards and tools for turning a Raspberry Pi or other Linux box into a Muse gadget
- **Supported inputs/outputs**: screens, audio I/O, buttons, sensors, and actuators can all be wired into Muse through the SDKs
- **Getting started**: developers grab an SDK token from gadgets.muse.ai, pick a featured starter project (or build their own), and can point a coding agent at the GitHub repo
- **Featured hardware examples**: Waveshare's round AMOLED touchscreen, Seeed's reTerminal E1002 e-ink display, M5Stack's StickS3, the AiPi Lite desk companion, and a Home Assistant integration on Raspberry Pi 5; an HDMI stick for TVs is listed as coming soon
- **Muse Home Link**: a USB-C-powered reference device that connects Muse to a home network so it can control smart-home gear and other HTTP-accessible systems; Meta built 5,000 units, free to active Muse subscribers in the US only, one per person, while supplies last, shipping within weeks
- **Community support**: Meta is running a Discord server for people sharing projects and getting help with the SDKs

## What happened next

Muse Gadgets extends Meta's push to make Muse, launched as a mobile app in September 2026, the control layer for everyday devices rather than just a phone-based assistant. By open-sourcing the firmware and SDK rather than shipping its own gadget line, Meta is betting on a hobbyist and maker ecosystem — echoing early smart-speaker and home-automation communities — to surface the hardware use cases it hasn't built itself, while Muse Home Link gives Meta a reference implementation to point developers toward.
