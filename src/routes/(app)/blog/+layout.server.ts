import type { LayoutServerLoad } from "./$types"

export const load: LayoutServerLoad = async ({ url: { pathname } }) => {
  const slug = decodeURI(pathname).replaceAll("/blog", "")
  if (!slug)
    return {
      meta: {
        title: "블로그",
        description:
          "문대승의 블로그 입니다. 장르 가리지 않고 글 올리고 있어요~",
      },
    }
  const posts = [] as any
  const post = posts.find((post) => "/" + post.slug === slug)
  if (!post) return {}
  return {
    meta: {
      ...post,
    },
  }
}
