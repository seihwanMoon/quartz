import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Seihwan Moon",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "ko-KR",
    baseUrl: "mfgai.pages.dev",
    ignorePatterns: ["private", "templates", ".obsidian", "Templates"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: {
          name: "IBM Plex Sans KR",
          weights: [500, 600, 700],
        },
        title: {
          name: "Noto Serif KR",
          weights: [600, 700],
        },
        body: {
          name: "IBM Plex Sans KR",
          weights: [400, 500, 600],
        },
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#f7f2ea",
          lightgray: "#dfd3c4",
          gray: "#9c8d7f",
          darkgray: "#56483d",
          dark: "#221915",
          secondary: "#7f3038",
          tertiary: "#b8894e",
          highlight: "rgba(127, 48, 56, 0.08)",
          textHighlight: "rgba(226, 195, 106, 0.36)",
        },
        darkMode: {
          light: "#171210",
          lightgray: "#302723",
          gray: "#87786f",
          darkgray: "#ddd3c8",
          dark: "#f7efe5",
          secondary: "#d8938b",
          tertiary: "#e1b87b",
          highlight: "rgba(216, 147, 139, 0.12)",
          textHighlight: "rgba(154, 119, 42, 0.38)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
