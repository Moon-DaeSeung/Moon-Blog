import type { PageServerLoad } from "./$types"
import posts from "./posts"

export const load: PageServerLoad = async () => {
  return {
    meta: {
      title: "블로그",
      description: "문대승의 블로그 입니다. 장르 가리지 않고 글 올리고 있어요~",
    },
    posts,
  }
}
