---
title: Linite Reloaded
date: 03-23-2025
description:
  A svelte web app that generates a command to install packages selected from a
  list of checkboxes.
image:
  ../assets/Screenshot 2025-03-25 at 13-04-37 Arch Linux Package Selector.png
info:
  - icon: mdi:github
    text: Source Code
    link: https://github.com/wheelsbot7/Spectre/blob/master/src/components/Checkboxes.svelte
  - icon: ri:svelte-fill
    text: Live page
    link: https://linite-reloaded.vercel.app
---

This project was heavily based on jplsek's
[website of the same name](https://jplsek.github.io/Linite/). I used the tool
many times when distrohopping, but having not been updated in 10 years, it was
in need of a tune-up.

The most urgent change was updating the selection of packages. I experimented
with automating scraping official repositories, but there were too many
incongruities between the names of packages and the software itself, so I ended
up searching through packages manually and compiling them into JSON files that
would then be parsed into an interactive web app using Svelte.

You can find the tool [here](https://linite-reloaded.vercel.app).
