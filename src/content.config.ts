import { file, glob } from "astro/loaders";
import { defineCollection, z, reference } from "astro:content";
import type { icons as iconsJson } from "@iconify/json/json/mdi.json";

const other = defineCollection({
  loader: glob({ base: "src/content/other", pattern: "**/*.{md,mdx}" }),
});

const quickInfo = defineCollection({
  loader: file("src/content/info.json"),
  schema: z.object({
    id: z.number(),
    icon: z.custom<keyof typeof iconsJson>(),
    text: z.string(),
  }),
});

const socials = defineCollection({
  loader: file("src/content/socials.json"),
  schema: z.object({
    id: z.number(),
    icon: z.custom<keyof typeof iconsJson>(),
    text: z.string(),
    link: z.string().url(),
  }),
});

const langs = defineCollection({
  loader: file("src/content/langs.json"),
  schema: z.object({
    id: z.number(),
    icon: z.custom<keyof typeof iconsJson>(),
    text: z.string(),
  }),
});


const workExperience = defineCollection({
  loader: file("src/content/work.json"),
  schema: z.object({
    id: z.number(),
    title: z.string(),
    company: z.string(),
    duration: z.string(),
    description: z.string(),
  }),
});

const tags = defineCollection({
  loader: file("src/content/tags.json"),
  schema: z.object({
    id: z.string(),
  }),
});

const posts = defineCollection({
  loader: glob({ base: "src/content/posts", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      icon: z.custom<keyof typeof iconsJson>(),
      createdAt: z.coerce.date(),
      updatedAt: z.coerce.date().optional(),
      description: z.string(),
      tags: z.array(reference("tags")),
      draft: z.boolean().optional().default(false),
      image: image(),
    }),
});

const projects = defineCollection({
  loader: glob({ base: "src/content/projects", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      image: image(),
      link: z.string().url().optional(),
      info: z.array(
        z.object({
          text: z.string(),
          icon: z.custom<keyof typeof iconsJson>(),
          link: z.string().url().optional(),
        }),
      ),
    }),
});

export const collections = {
  tags,
  posts,
  projects,
  other,
  quickInfo,
  socials,
  workExperience,
  langs,
};
