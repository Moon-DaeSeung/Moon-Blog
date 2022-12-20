import Page1 from "./page1/+page.svelte"
import Page2 from "./page2/+page.svelte"
import Playground from "./playground/+page.svelte"
import About from "./about/+page.svelte"
import HOME from "./+page.svelte"
import Blog from "./blog/+page.svelte"
import idAndSlugs from "../../notion2svelte_id-to-slug.json"

const routes: {
  [key: string]: {
    page: any
    notTransitionWith: string[]
  }
} = {
  "/page1": {
    page: Page1,
    notTransitionWith: [],
  },
  "/page2": {
    page: Page2,
    notTransitionWith: [],
  },
  "/playground": {
    page: Playground,
    notTransitionWith: ["/playground/nest"],
  },
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
    .map(([_, slug]) => slug)
    .map(async (slug) => {
      console.log(slug)
      const path = `./blog/${slug}/+page.svelte`
      const page = await (await import(path)).default
      return {
        path: `/blog/${slug}`,
        page,
        notTransitionWith: ["/blog"],
      }
    })
)

export async function getRoutes(): Promise<{
  [key: string]: { page: any; notTransitionWith: string[] }
}> {
  const result = {
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
  return result
}

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
