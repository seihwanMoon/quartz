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
          weights: [700],
        },
        body: {
          name: "IBM Plex Sans KR",
          weights: [400, 500, 700],
        },
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#f4efe7",
          lightgray: "#ded4c7",
          gray: "#9b8d7d",
          darkgray: "#4f443b",
          dark: "#201915",
          secondary: "#7b2f33",
          tertiary: "#b78d54",
          highlight: "rgba(123, 47, 51, 0.08)",
          textHighlight: "rgba(226, 195, 106, 0.45)",
        },
        darkMode: {
          light: "#14100f",
          lightgray: "#2a2220",
          gray: "#81746d",
          darkgray: "#d7cec3",
          dark: "#f5eee6",
          secondary: "#d28a83",
          tertiary: "#e0b87c",
          highlight: "rgba(210, 138, 131, 0.12)",
          textHighlight: "rgba(154, 119, 42, 0.45)",
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
