import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      Home: "https://mfgai.pages.dev",
      GitHub: "https://github.com/seihwanMoon/quartz",
      RSS: "https://mfgai.pages.dev/index.xml",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [
    Component.DesktopOnly(Component.TableOfContents()),
    Component.DesktopOnly(Component.Backlinks()),
    Component.DesktopOnly(
      Component.RecentNotes({
        title: "Latest Notes",
        limit: 5,
        showTags: true,
        filter: (f) => f.slug !== "index",
      }),
    ),
    Component.DesktopOnly(
      Component.Graph({
        localGraph: {
          drag: false,
          zoom: true,
          depth: 1,
          scale: 0.85,
          repelForce: 0.35,
          centerForce: 0.2,
          linkDistance: 26,
          fontSize: 0.52,
          opacityScale: 0.75,
          showTags: false,
          removeTags: [],
          focusOnHover: false,
          enableRadial: false,
        },
      }),
    ),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [
    Component.DesktopOnly(Component.Backlinks()),
    Component.DesktopOnly(
      Component.RecentNotes({
        title: "Latest Notes",
        limit: 5,
        showTags: true,
        filter: (f) => f.slug !== "index",
      }),
    ),
  ],
}
