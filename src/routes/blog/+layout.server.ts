import type { LayoutServerLoad } from "../$types"
import posts from "./posts"

export const load: LayoutServerLoad = async () => {
  return {
    meta: {
      title: "창의성 담론!",
      description: "asdf",
      image: {
        url: "/assets/what-is-creativity/cover.js",
        alt: "van gogh",
      },
    },
  }
}
