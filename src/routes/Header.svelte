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
  class="lg:px sticky top-0 z-50 flex h-16 w-full items-center  border-b bg-white px-4 shadow-sm lg:relative lg:h-24 "
>
  <div class="absolute md:left-9">
    <a href="/" class="text-2xl">Moon Blog</a>
  </div>
  <MediaQuery query={MediaQueryUtils.tablet} let:matches>
    {#if matches}
      <nav class="mx-auto flex justify-center">
        <ul class="relative flex h-12 items-center justify-center gap-6">
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

  <div class="absolute right-8 aspect-square w-8">
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
    @apply absolute top-0 h-0 w-0 content-[""];
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
