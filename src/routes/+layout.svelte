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

<MediaQuery query={MediaQueryUtils.tablet} bind:matches />

<div class="app overflow-hidden">
  <Header />
  <MediaQuery query={MediaQueryUtils.tablet} let:matches>
    {#if matches}
      <div class="constraint-wrapper mt-4 mb-16">
        <div class="constraint px-4 lg:px-6">
          <BreadCrums {pathname} />
        </div>
      </div>
    {/if}
  </MediaQuery>
  <main class="pb-[100px]">
    {#key $page.url.pathname}
      <div
        id={pathname}
        class="transition-area content"
        in:pageIn={{ active: !current.notTransitionWith.includes(from) }}
        out:pageOut={{ active: !current.notTransitionWith.includes(from) }}
      >
        <div class="constraint-wrapper content ">
          <div class="constraint content px-4 lg:px-6">
            <svelte:component this={current.page} />
          </div>
        </div>
      </div>
    {/key}
  </main>
  <footer class="w-full">
    <MediaQuery query={MediaQueryUtils.tablet} let:matches>
      {#if !matches}
        <nav class="fixed bottom-0 w-full border-t bg-white shadow-md">
          <ul class="relative flex items-center justify-around gap-12 p-2">
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
        <div class="flex h-[200px] flex-col bg-accent text-white">
          <div class="ml-auto mt-auto flex items-center p-4">
            <img class="h-10 w-10" alt="blog icon" src="assets/blog_icon.gif" />
            <p>moon blog</p>
          </div>
        </div>
      {/if}
    </MediaQuery>
  </footer>
</div>

<style>
  .app {
    @apply flex min-h-screen flex-col;
  }

  main {
    @apply relative flex w-full flex-1 flex-col;
  }

  .transition-area {
    @apply min-h-full w-full;
  }

  .content {
    @apply flex flex-grow flex-col;
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
