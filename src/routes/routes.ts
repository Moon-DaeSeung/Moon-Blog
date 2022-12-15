  import Page1 from "./page1/+page.svelte"
  import Page2 from "./page2/+page.svelte"

  const routes: { [key: string]: any } = {
    "/page1": Page1,
    "/page2": Page2,
  }

  export default routes