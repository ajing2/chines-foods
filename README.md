# 🍜 中餐食谱博客

基于 [Astro](https://astro.build) 构建的静态中餐食谱博客，支持 Markdown/MDX 写作，本地开发零配置。

---

## 本地开发环境要求

| 工具 | 版本要求 | 安装方式 |
|------|----------|----------|
| Node.js | >= 18 | [nodejs.org](https://nodejs.org) 或 `nvm install 20` |
| npm | 随 Node.js 附带 | — |

检查版本：

```bash
node -v   # 应显示 v18.x 或更高
npm -v
```

---

## 快速启动

```bash
# 1. 进入项目目录
cd chines-foods

# 2. 安装依赖（首次或 package.json 变更后执行）
npm install

# 3. 启动本地开发服务器
npm run dev
```

启动后访问 **http://localhost:4321** 即可看到博客首页。

开发服务器支持**热更新**，修改任何文件后浏览器会自动刷新。

---

## 目录结构

```
chines-foods/
├── public/                  # 静态资源（图片、字体、favicon）
│   ├── favicon.svg
│   └── images/              # 食谱配图放这里
│       ├── hong-shao-rou.jpg
│       └── mapo-tofu.jpg
│
├── src/
│   ├── components/          # 可复用 Astro 组件
│   │   ├── BaseHead.astro   # <head> 标签（SEO、meta）
│   │   ├── Header.astro     # 顶部导航栏
│   │   ├── HeaderLink.astro # 导航链接（自动高亮当前页）
│   │   ├── Footer.astro     # 底部版权
│   │   └── FormattedDate.astro  # 日期格式化（中文）
│   │
│   ├── content/
│   │   └── blog/            # ✍️ 食谱文章放这里（.md 或 .mdx）
│   │       ├── hong-shao-rou.md
│   │       └── mapo-tofu.md
│   │
│   ├── layouts/
│   │   └── BlogPost.astro   # 食谱文章页面布局
│   │
│   ├── pages/
│   │   ├── index.astro      # 首页
│   │   ├── about.astro      # 关于页
│   │   ├── rss.xml.js       # RSS 订阅源
│   │   └── blog/
│   │       ├── index.astro      # 食谱列表页
│   │       └── [...slug].astro  # 食谱详情页（动态路由）
│   │
│   ├── styles/
│   │   └── global.css       # 全局样式
│   │
│   ├── consts.ts            # 站点名称、描述等全局常量
│   └── content.config.ts    # 内容集合 schema 定义
│
├── astro.config.mjs         # Astro 配置
├── package.json
├── tsconfig.json
└── README.md
```

---

## 写一篇新食谱

在 `src/content/blog/` 目录下新建一个 `.md` 文件，文件名即为 URL slug（建议用拼音或英文，不含空格）。

### Frontmatter 字段说明

```markdown
---
title: "宫保鸡丁"                    # 必填：食谱标题
description: "经典川菜，酸甜微辣..."  # 必填：简短描述（用于列表页和 SEO）
pubDate: 2024-02-01                  # 必填：发布日期
updatedDate: 2024-03-10              # 可选：最后更新日期
heroImage: "/images/gongbao.jpg"     # 可选：封面图路径（放在 public/images/）

category: "川菜"    # 必填：菜系分类
                    # 可选值：川菜 | 粤菜 | 湘菜 | 鲁菜 | 苏菜 | 浙菜 | 闽菜 | 徽菜 | 家常菜 | 其他

cookTime: "20 分钟"  # 可选：烹饪时间
prepTime: "15 分钟"  # 可选：准备时间
servings: "2-3 人份" # 可选：份量
difficulty: "中等"   # 可选：简单 | 中等 | 困难（默认：中等）
tags: ["鸡肉", "川菜", "下饭菜"]  # 可选：标签数组

lang: "zh"          # 可选：本文语言，默认 zh
                    # 可选值：zh | en | ja | ko | fr | de
translations:       # 可选：其他语言译文的 slug 映射
  en: "gongbao-en"  # 英文版文件名（不含 .md）
  ja: "gongbao-ja"  # 日文版文件名
---

## 食材
...

## 步骤
...
```

### 示例文件

参考已有的两篇示例：
- `src/content/blog/hong-shao-rou.md` — 红烧肉
- `src/content/blog/mapo-tofu.md` — 麻婆豆腐

---

## 常用命令

| 命令 | 说明 |
|------|------|
| `npm run dev` | 启动本地开发服务器（http://localhost:4321） |
| `npm run build` | 构建生产版本，输出到 `dist/` 目录 |
| `npm run preview` | 预览构建结果（需先执行 build） |

---

## 添加食谱配图

1. 将图片文件放入 `public/images/` 目录
2. 在 frontmatter 中引用：`heroImage: "/images/你的图片.jpg"`
3. 推荐图片尺寸：**1200 × 630px**，格式 JPG 或 WebP

---

## 自定义站点信息

编辑 `src/consts.ts`：

```ts
export const SITE_TITLE = "中餐食谱";       // 站点名称
export const SITE_DESCRIPTION = "...";      // 站点描述
export const SITE_AUTHOR = "Your Name";     // 作者名
```

部署前记得修改 `astro.config.mjs` 中的 `site` 字段为你的真实域名：

```js
export default defineConfig({
  site: "https://your-domain.com",  // 改为你的域名
  ...
});
```

---

## 推送到 GitHub

```bash
cd chines-foods

# 初始化 git（如果还没有）
git init
git remote add origin https://github.com/ajing2/chines-foods.git

# 提交并推送
git add .
git commit -m "feat: 初始化中餐食谱博客"
git push -u origin main
```

---

## 多语言食谱写作

每道菜的不同语言版本是**独立的 Markdown 文件**，通过 frontmatter 中的 `translations` 字段互相关联。文章页面会自动显示语言切换按钮。

### 命名约定

建议用 `菜名拼音-语言代码.md` 的格式命名译文文件：

```
src/content/blog/
├── mapo-tofu.md        # 中文（主版本，lang: zh）
├── mapo-tofu-en.md     # 英文译文（lang: en）
└── mapo-tofu-ja.md     # 日文译文（lang: ja）
```

### 中文主版本写法

```markdown
---
title: "麻婆豆腐"
lang: "zh"
translations:
  en: "mapo-tofu-en"
  ja: "mapo-tofu-ja"
---
```

### 译文版本写法

译文文件需要在 `translations` 里**反向指回中文主版本**，这样切换器才能双向导航：

```markdown
---
title: "Mapo Tofu"
lang: "en"
translations:
  zh: "mapo-tofu"
  ja: "mapo-tofu-ja"
---
```

### 支持的语言代码

| 代码 | 语言 | 显示 |
|------|------|------|
| `zh` | 中文 | 🇨🇳 中文 |
| `en` | 英文 | 🇺🇸 EN |
| `ja` | 日文 | 🇯🇵 日本語 |
| `ko` | 韩文 | 🇰🇷 한국어 |
| `fr` | 法文 | 🇫🇷 FR |
| `de` | 德文 | 🇩🇪 DE |

如需添加其他语言，编辑 `src/components/LanguageSwitcher.astro` 中的 `languages` 对象即可。

---

## 常见问题

**Q：启动时报 `Cannot find module` 错误？**  
A：执行 `npm install` 重新安装依赖。

**Q：修改文章后页面没有更新？**  
A：确认开发服务器正在运行（`npm run dev`），Astro 支持热更新，保存文件后会自动刷新。

**Q：图片不显示？**  
A：确认图片放在 `public/images/` 目录，且 frontmatter 中路径以 `/images/` 开头（绝对路径）。

**Q：如何部署到线上？**  
A：执行 `npm run build` 生成 `dist/` 目录，将其上传到任意静态托管服务即可，例如 Cloudflare Pages、Vercel、Netlify 或 GitHub Pages。
