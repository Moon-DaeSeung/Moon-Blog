import Page1 from "./page1/+page.svelte"
import Page2 from "./page2/+page.svelte"
import Playground from "./playground/+page.svelte"
import Playground_Nest from "./playground/nest/+page.svelte"
import About from "./about/+page.svelte"
import HOME from "./+page.svelte"
import Blog from "./blog/+page.svelte"
import WhatIsCreativity from "./blog/what-is-creativity/+page.svelte"

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
    notTranstionWith: ["/blog/what-is-creativity"] 
  },
  "/blog/what-is-creativity": {
    page: WhatIsCreativity,
    notTranstionWith: ["/blog"] 
  }
}

export default routes
