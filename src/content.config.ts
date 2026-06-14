import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const blog = defineCollection({
  // 加载 src/content/blog/ 目录下所有 .md 和 .mdx 文件
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  // 用 schema 对 frontmatter 做类型校验
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    // 食谱专属字段
    category: z
      .enum(["川菜", "粤菜", "湘菜", "鲁菜", "苏菜", "浙菜", "闽菜", "徽菜", "家常菜", "其他"])
      .default("家常菜"),
    cookTime: z.string().optional(),
    prepTime: z.string().optional(),
    servings: z.string().optional(),
    difficulty: z.enum(["简单", "中等", "困难"]).default("中等"),
    tags: z.array(z.string()).default([]),
    // 多语言字段（与 astro-blog-starter-template 保持一致）
    // 中文为主语言，默认 zh
    lang: z.enum(["zh", "en", "ja", "ko", "fr", "de"]).default("zh"),
    // 同一篇文章其他语言版本的 slug 映射，例如 { en: "mapo-tofu-en", ja: "mapo-tofu-ja" }
    translations: z.record(z.string()).optional(),
  }),
});

export const collections = { blog };
