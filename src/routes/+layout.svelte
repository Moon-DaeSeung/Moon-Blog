<script lang="ts">
  import Header from "./Header.svelte"
  import "../app.css"
  import ErrorPage from "./+error.svelte"
  import { page } from "$app/stores"
  import { cubicIn, cubicOut } from "svelte/easing"
  import type { LayoutServerData } from "./$types"
  import { beforeNavigate } from "$app/navigation"
  import BreadCrums from "./BreadCrums.svelte"
  import routes from "./routes"
  import { onMount } from "svelte"
  import * as Sentry from "@sentry/svelte"
  import { PUBLIC_SENTRY_DNS, PUBLIC_SENTRY_ENABLED } from "$env/static/public"
  import { BrowserTracing } from "@sentry/tracing"

  export let data: LayoutServerData

  let pathname = decodeURI(data.pathname)
  let from = pathname

  $: {
    pathname = decodeURI($page.url.pathname)
  }

  $: current = routes[pathname] ?? { page: ErrorPage, notTransitionWith: [] }
  $: title = $page.data.meta?.title ?? data.defaultMeta.title
  $: description = $page.data.meta?.description ?? data.defaultMeta.description
  $: image = $page.data.meta?.image ?? data.defaultMeta.image

  onMount(() => {
    Sentry.init({
      dsn: PUBLIC_SENTRY_DNS,
      enabled: PUBLIC_SENTRY_ENABLED === "true",
      tracesSampleRate: 1.0,
      integrations: [new BrowserTracing()],
    })
    Sentry.configureScope((scope) => {
      scope.setTag("place", "client side")
    })
  })

  beforeNavigate(({ from: _from, to: _to }) => {
    from = decodeURI(_from!.url.pathname)
  })

  function pageOut(node: Element, { active }: { active: boolean }) {
    const o = +getComputedStyle(node).opacity

    return {
      delay: 0,
      duration: active ? 300 : 0,
      css: (t, u) =>
        `opacity: ${t * o}; transform: translateX(${
          -cubicOut(u) * 50
        }px); z-index: -1`,
    }
  }

  function pageIn(node: Element, { active }: { active: boolean }) {
    const o = +getComputedStyle(node).opacity

    return {
      delay: 0,
      duration: active ? 300 : 0,
      css: (t, u) =>
        `opacity: ${t * o}; transform: translateX(${
          cubicIn(u) * 50
        }px); z-index: 1`,
    }
  }
</script>

<svelte:head>
  <title>{title} | Moon Blog</title>
  <meta name="description" content={description} />
  <meta property="og:title" content={title} />
  <meta property="og:type" content="article" />
  <meta property="og:image" content={image.url} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta property="og:description" content={description} />
  <meta property="og:site_name" content="Moon Blog" />
  <meta name="twitter:image:alt" content={image.alt} />
</svelte:head>

<div class="app">
  <Header />
  <div class="constraint-wrapper mt-4 mb-16">
    <div class="constraint">
      <BreadCrums {pathname} />
    </div>
  </div>
  <main>
    {#key pathname}
      <div
        id={pathname}
        class="transition-area content"
        in:pageIn={{ active: !current.notTransitionWith.includes(from) }}
        out:pageOut={{ active: !current.notTransitionWith.includes(from) }}
      >
        <div class="constraint-wrapper content">
          <div class="constraint content">
            <svelte:component this={current.page} />
          </div>
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

  .transition-area {
    position: absolute;
    width: 100%;
    min-height: 100%;
  }

  .content {
    @apply flex flex-col flex-grow;
  }

  .constraint-wrapper {
    @apply flex flex-col;
  }

  .constraint {
    width: 100%;
    max-width: 68rem;
    margin: 0 auto;
    @apply px-6;
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
