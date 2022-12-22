<script>
  import { page } from "$app/stores"
  import MediaQuery from "$lib/component/MediaQuery.svelte"
  import github from "$lib/images/github.svg"
  import MediaQueryUtils from "$lib/util/MediaQueryUtils"
  import { crossfade } from "svelte/transition"
  const [send, recieve] = crossfade({})
  $: ({
    url: { pathname },
  } = $page)

  const navigators = [
    {
      href: "/",
      name: "Home",
    },
    {
      href: "/blog",
      name: "Blog",
    },
    {
      href: "/about",
      name: "About",
    },
  ]
</script>

<header
  class="sticky top-0 z-50 flex items-center justify-between w-full h-16 px-4 bg-white border-b shadow-sm lg:px lg:static lg:h-24"
>
  <div>
    <a href="/" class="text-2xl">Moon Blog</a>
  </div>
  <MediaQuery query={MediaQueryUtils.tablet} let:matches>
    {#if matches}
      <nav class="flex justify-center">
        <ul class="relative flex items-center justify-center h-12 gap-6">
          {#each navigators as { href, name }}
            <li aria-current={pathname.includes(href)}>
              {#if (pathname === "/" && href === "/") || (href !== "/" && pathname.includes(href))}
                <div
                  in:recieve={{ key: "indicator" }}
                  out:send={{ key: "indicator" }}
                  class="indicator"
                />
              {/if}
              <a {href}>{name}</a>
            </li>
          {/each}
        </ul>
      </nav>
    {/if}
  </MediaQuery>

  <div class="w-8 aspect-square">
    <a href="https://github.com/Moon-DaeSeung/Moon-Blog">
      <img src={github} alt="GitHub" />
    </a>
  </div>
</header>

<style>
  li {
    @apply relative h-full;
  }

  .indicator {
    --size: 6px;
    @apply w-0 h-0 absolute top-0 content-[""];
    left: calc(50% - var(--size));
    border: var(--size) solid transparent;
    border-top: var(--size) solid hsl(var(--p));
  }

  nav a {
    display: flex;
    height: 100%;
    align-items: center;
    padding: 0 0.5rem;
    color: var(--color-text);
    font-weight: 700;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    text-decoration: none;
    transition: color 0.2s linear;
  }

  a:hover {
    color: var(--color-theme-1);
  }
</style>
