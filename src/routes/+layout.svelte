<script lang="ts">
  import Header from "./Header.svelte"
  import "../app.css"
  import ErrorPage from "./+error.svelte"
  import { page } from "$app/stores"
  import type { LayoutServerData } from "./$types"
  import { beforeNavigate } from "$app/navigation"
  import BreadCrums from "./BreadCrums.svelte"
  import routes from "./routes"
  import { onMount } from "svelte"
  import * as Sentry from "@sentry/svelte"
  import { PUBLIC_SENTRY_DNS, PUBLIC_SENTRY_ENABLED } from "$env/static/public"
  import { BrowserTracing } from "@sentry/tracing"
  import MediaQuery from "$lib/component/MediaQuery.svelte"
  import MediaQueryUtils from "$lib/util/MediaQueryUtils"
  import { mobile, laptop } from "./pageTransition"
  import { fade } from "svelte/transition"

  let matches = false

  $: ({ pageIn, pageOut } = matches ? laptop : mobile)

  const navigators = [
    {
      href: "/",
      name: "Home",
      iconClass: "bx bx-home",
    },
    {
      href: "/blog",
      name: "Blog",
      iconClass: "bx bxl-blogger",
    },
    {
      href: "/about",
      name: "About",
      iconClass: "bx bx-face",
    },
  ]

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

  function resolveUrl(url: string) {
    if (url.includes("http")) return url
    return data.origin + url
  }

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
</script>

<svelte:head>
  <title>{title} | Moon Blog</title>
  <meta name="description" content={description} />
  <meta property="og:title" content={title} />
  <meta property="og:url" content={data.origin} />
  <meta property="og:type" content="website" />
  <meta property="og:image" content={resolveUrl(image.url)} />
  <meta property="og:site_name" content="Moon Blog" />
  <meta property="og:description" content={description} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:image:alt" content={image.alt} />
</svelte:head>

<MediaQuery query={MediaQueryUtils.laptop} bind:matches />

<div class="app">
  <Header />
  <MediaQuery query={MediaQueryUtils.laptop} let:matches>
    {#if matches}
      <div class="constraint-wrapper mt-4 mb-16" transition:fade|local>
        <div class="constraint">
          <BreadCrums {pathname} />
        </div>
      </div>
    {/if}
  </MediaQuery>
  <main class="overflow-hidden pb-[100px] lg:pb-0">
    {#key pathname}
      <div
        id={pathname}
        class="transition-area content"
        in:pageIn={{ active: !current.notTransitionWith.includes(from) }}
        out:pageOut={{ active: !current.notTransitionWith.includes(from) }}
      >
        <div class="constraint-wrapper content">
          <div class="constraint content lg:px-6 px-4">
            <svelte:component this={current.page} />
          </div>
        </div>
      </div>
    {/key}
  </main>
  <footer class="fixed bottom-0 lg:static w-full">
    <MediaQuery query={MediaQueryUtils.laptop} let:matches>
      {#if !matches}
        <nav class="shadow-md border-t w-full bg-white">
          <ul class="relative flex justify-around items-center gap-12 p-2">
            {#each navigators as { href, name, iconClass }}
              {@const active =
                (pathname === "/" && href === "/") ||
                (href !== "/" && pathname.includes(href))}
              <li
                class:text-primary={active}
                aria-current={pathname.includes(href)}
              >
                <a {href} class="flex flex-col items-center justify-center">
                  <i class={`${iconClass} text-4xl`} />
                  <span class="text-sm">{name}</span>
                </a>
              </li>
            {/each}
          </ul>
        </nav>
      {:else}
        <p>
          visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit
        </p>
      {/if}
    </MediaQuery>
  </footer>
</div>

<style>
  .app {
    @apply flex flex-col min-h-screen;
  }

  main {
    @apply w-full relative flex-1 flex flex-col;
  }

  .transition-area {
    @apply min-h-full w-full;
  }

  .content {
    @apply flex flex-col flex-grow;
  }

  .constraint-wrapper {
    @apply flex flex-col;
  }

  .constraint {
    width: 100%;
    max-width: 68em;
    margin: 0 auto;
  }
</style>
