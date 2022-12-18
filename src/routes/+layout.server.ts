import type { LayoutServerLoad } from "./$types"

export const load: LayoutServerLoad = async ({ url: { pathname, origin } }) => {
  return {
    pathname,
    defaultMeta: {
      title: "Welcom",
      description: "나의 일상을 적는 곳!",
      image: {
        url: "/assets/thumbnail.jpg",
        alt: "van gogh",
      },
    },
  }
}
