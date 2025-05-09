import { defineConfig } from "astro/config";

import expressiveCode from "astro-expressive-code";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import spectre from "./package/src";
import pagefind from "astro-pagefind";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";

import icon from "astro-icon";
import rehypeCallouts from "rehype-callouts";

import svelte from "@astrojs/svelte";

import react from "@astrojs/react";

import preact from "@astrojs/preact";

import solidJs from "@astrojs/solid-js";

import vue from "@astrojs/vue";

import alpinejs from "@astrojs/alpinejs";

import cloudflare from "@astrojs/cloudflare";

const calloutOptions = {
  theme: "github",
};

// https://astro.build/config
export default defineConfig({
  site: "https://wheelsbot.dev",
  output: "static",
  markdown: {
    remarkPlugins: [],
    rehypePlugins: [[rehypeCallouts, calloutOptions]],
  },
  integrations: [pagefind(), expressiveCode({
    plugins: [pluginLineNumbers()],
  }), mdx(), sitemap(), spectre({
    name: "Wheelsblog V7",
    themeColor: "#1d754a",
    openGraph: {
      home: {
        title: "Wheelsblog V7",
        description: "The personal site of Owen Wertzberger",
      },
      blog: {
        title: "Blog",
        description: "Guides, tutorials, and infodumps. Usually all at once.",
      },
      projects: {
        title: "Stuff that I have worked on",
      },
    },
    giscus: {
      repository: "wheelsbot7/spectre",
      repositoryId: "R_kgDONkaxYQ",
      category: "Announcements",
      categoryId: "DIC_kwDONkaxYc4Cl0ul",
      mapping: "title",
      strict: true,
      reactionsEnabled: true,
      emitMetadata: false,
      lang: "en",
    },
  }), icon({
    include: {
      mdi: ["*"],
      ri: ["*"],
    },
  }), svelte({
    include: ["src/components/**.svelte"]
  }), preact({
    include: ['src/components/preact/**.jsx'],
  }), react({
    include: ['src/components/react/**.jsx'],
  }), solidJs({
    include: ['src/components/solid/**.jsx'],
  }), vue({
    include: ["src/components/**.vue"]
  }), alpinejs()],
  adapter: cloudflare(),
});
