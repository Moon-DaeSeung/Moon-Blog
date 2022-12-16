<script lang="ts">
  import Header from "./Header.svelte"
  import "../app.css"
  import ErrorPage from "./+error.svelte"
  import routes from "./routes"
  import { page } from "$app/stores"
  import { cubicIn, cubicOut } from "svelte/easing"
  import type { PageData } from "./$types"
  import { beforeNavigate } from "$app/navigation"

  export let data: PageData

  let pathname = data.pathname
  let [from, to]: [string, string | null] = [pathname, null]

  $: {
    pathname = $page.url.pathname
  }

  function pageOut(node: Element, { active }: { active: boolean }) {
    const o = +getComputedStyle(node).opacity

    return {
      delay: 0,
      duration: active ? 300 : 0,
      css: (t, u) =>
        `opacity: ${t * o}; transform: translateX(${-cubicOut(u) * 50}px)`,
    }
  }

  function pageIn(node: Element, { active }: { active: boolean }) {
    const o = +getComputedStyle(node).opacity

    return {
      delay: 0,
      duration: active ? 300 : 0,
      css: (t, u) =>
        `opacity: ${t * o}; transform: translateX(${cubicIn(u) * 50}px)`,
    }
  }

  $: current = routes[pathname] ?? { page: ErrorPage, notTranstionWith: [] }

  beforeNavigate(({ from: _from, to: _to }) => {
    ;[from, to] = [_from!.url.pathname, _to!.url.pathname]
  })

  $: {
    ;[pathname]
  }
</script>

<div class="app">
  <Header />
  <main>
    {#key pathname}
      <div
        class="content"
        in:pageIn={{ active: !current.notTranstionWith.includes(from) }}
        out:pageOut={{ active: !current.notTranstionWith.includes(from) }}
      >
        <div class="constraint">
          <svelte:component this={current.page} />
        </div>
      </div>
    {/key}
  </main>

  <footer>
    <p>
      visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit
    </p>
  </footer>
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
    display: flex;
    position: relative;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
    overflow-x: hidden;
  }

  .content {
    position: absolute;
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }

  .constraint {
    width: 100%;
    max-width: 64rem;
    min-height: 100%;
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    flex: 1;
  }

  footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 12px;
  }

  footer a {
    font-weight: bold;
  }

  @media (min-width: 480px) {
    footer {
      padding: 12px 0;
    }
  }
</style>
