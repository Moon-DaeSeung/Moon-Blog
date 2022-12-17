import type { LayoutServerLoad } from "./$types"

export const load: LayoutServerLoad = async ({ url: { pathname, origin } }) => {
  return {
    pathname,
    defaultMeta: {
      title: "Home",
      description: "나의 일상을 적는 곳!",
      image: {
        url: `${origin}/thumbnail.jpg`,
        alt: "van gogh",
      },
    },
  }
}

