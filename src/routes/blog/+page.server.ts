import type { PageServerLoad } from "./$types"

export const load: PageServerLoad = async () => {
  return {
    meta: {
      title: "블로그!!",
      description: "asdf",
    },
  }
}
