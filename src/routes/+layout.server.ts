import type { LayoutServerLoad } from "./$types"

export const load: LayoutServerLoad = async ({ url: { pathname, origin } }) => {
  return {
    pathname,
    origin,
    defaultMeta: {
      title: "Welcom",
      description: "문대승의 블로그 입니다~!",
      image: {
        url: "/thumbnail.jpg",
        alt: "van gogh",
      },
    },
  }
}
