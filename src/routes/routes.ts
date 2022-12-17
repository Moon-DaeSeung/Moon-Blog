import Page1 from "./page1/+page.svelte"
import Page2 from "./page2/+page.svelte"
import Playground from "./playground/+page.svelte"
import Playground_Nest from "./playground/nest/+page.svelte"
import About from "./about/+page.svelte"
import HOME from "./+page.svelte"
import Blog from "./blog/+page.svelte"
import WhatIsCreativity from "./blog/what-is-creativity/+page.svelte"
import idAndSlugs from "../notion2svelte_id-to-slug.json"

const routes: {
  [key: string]: {
    page: any
    notTranstionWith: string[]
  }
} = {
  "/page1": {
    page: Page1,
    notTranstionWith: [],
  },
  "/page2": {
    page: Page2,
    notTranstionWith: [],
  },
  "/playground": {
    page: Playground,
    notTranstionWith: ["/playground/nest"],
  },
  "/playground/nest": {
    page: Playground_Nest,
    notTranstionWith: ["/playground"],
  },
  "/about": {
    page: About,
    notTranstionWith: [],
  },
  "/": {
    page: HOME,
    notTranstionWith: [],
  },
  "/blog": {
    page: Blog,
    notTranstionWith: ["/blog/what-is-creativity"],
  },
  "/blog/what-is-creativity": {
    page: WhatIsCreativity,
    notTranstionWith: ["/blog"],
  },
}

const blogs = await Promise.all(
  idAndSlugs
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .map(([_, slug]) => slug)
    .map(async (slug) => {
      const page = await (await import(`./blog/${slug}/+page.svelte`)).default
      return {
        path: `/blog/${slug}`,
        page,
        notTranstionWith: ["/blog"],
      }
    })
)

export default {
  ...routes,
  "/blog": {
    ...routes["/blog"],
    nonTransitionWith: blogs.map(({ path }) => path),
  },
  ...blogs.reduce(
    (acc, { path, page, notTranstionWith }) => ({
      ...acc,
      [path]: { page, notTranstionWith },
    }),
    {}
  ),
}
