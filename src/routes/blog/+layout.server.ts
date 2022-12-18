import type { LayoutServerLoad } from "../$types"

export const load: LayoutServerLoad = async ({ url: { pathname } }) => {
  const posts = await (await import("./posts")).default
  const slug = pathname.replaceAll("/blog", "")
  if (!slug) return { posts }
  const post = posts.find((post) => "/" + post.slug === slug)
  if (!post) return {}
  return {
    meta: {
      ...post,
    },
  }
}
