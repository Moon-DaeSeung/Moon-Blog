import type { LayoutServerLoad } from "./$types"
// export const prerender = true

export const load: LayoutServerLoad = async ({ url: { pathname, origin } }) => {
  return {
    pathname,
    origin,
    defaultMeta: {
      title: "안녕!",
      description: "문대승의 이것저것 블로그",
      image: {
        url: "/assets/profile.png",
        alt: "van gogh",
      },
    },
  }
}
