import type { LayoutServerLoad } from "../$types"
import posts from "./posts"

export const load: LayoutServerLoad = async ({ url: { pathname } }) => {
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
