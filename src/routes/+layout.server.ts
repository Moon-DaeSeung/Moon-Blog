import type { LayoutServerLoad } from "./$types"
export const prerender = true

export const load: LayoutServerLoad = async ({ url: { pathname } }) => {
  return {
    pathname,
    defaultMeta: {
      title: "Welcom",
      description: "나의 일상을 적는 곳!",
      image: {
        url: "/thumbnail.jpg",
        alt: "van gogh",
      },
    },
  }
}
