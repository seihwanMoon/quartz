const HIDDEN_TAGS = new Set([
  "github",
  "youtube",
  "github-summary",
  "youtube-summary",
  "summary",
  "archive",
  "home",
  "notes",
  "ai",
  "workbench",
])

export function filterDisplayTags(tags: string[] | undefined | null): string[] {
  return (tags ?? []).filter((tag) => {
    if (!tag) return false
    if (HIDDEN_TAGS.has(tag)) return false
    if (tag.startsWith("template-")) return false
    if (tag.startsWith("transcript-")) return false
    return true
  })
}
