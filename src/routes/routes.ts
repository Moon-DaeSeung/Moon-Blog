import About from "./about/+page.svelte"
import HOME from "./+page.svelte"
import Blog from "./blog/+page.svelte"
import idAndSlugs from "../notion2svelte_id-to-slug.json"

const routes: {
  [key: string]: {
    page: any
    notTransitionWith: string[]
  }
} = {
  "/about": {
    page: About,
    notTransitionWith: [],
  },
  "/": {
    page: HOME,
    notTransitionWith: [],
  },
  "/blog": {
    page: Blog,
    notTransitionWith: [],
  },
}

const blogs = await Promise.all(
  idAndSlugs
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .map((config) => config[1])
    .map(async (slug) => {
      const page = await (await import(`./blog/${slug}/+page.svelte`)).default
      return {
        path: `/blog/${slug}`,
        page,
        notTransitionWith: ["/blog"],
      }
    })
)

export default {
  ...routes,
  "/blog": {
    ...routes["/blog"],
    notTransitionWith: blogs.map(({ path }) => path),
  },
  ...blogs.reduce(
    (acc, { path, page, notTransitionWith }) => ({
      ...acc,
      [path]: { page, notTransitionWith },
    }),
    {}
  ),
}
