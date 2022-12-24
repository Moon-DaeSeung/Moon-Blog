<script lang="ts">
  export let pathname: string

  function resovleLabel(path: string) {
    if (!path) return "Home"
    return path
      .replaceAll("-", " ")
      .replace(/^[a-z]/, (char) => char.toUpperCase())
  }

  function resolveHref(paths: string[]) {
    return paths.reduce((acc, current, index) => acc + "/" + current, "")
  }

  $: crumbs = [
    {
      href: "/",
      label: "Home",
    },
    ...pathname
      .split("/")
      .filter((value) => !!value)
      .map((path, index, paths) => ({
        label: resovleLabel(path),
        href: resolveHref(paths.slice(0, index + 1)),
      })),
  ]
</script>

<div class="breadcrumbs text-sm">
  <ul>
    {#each crumbs as { label, href }, i}
      {@const isLast = i === crumbs.length - 1}
      <li><a class="" disabled={isLast} {href}>{label}</a></li>
    {/each}
  </ul>
</div>

<style>
  a[disabled="true"] {
    @apply pointer-events-none opacity-50;
  }

  a {
    @apply relative;
    text-decoration: none;
  }

  .breadcrumbs a:hover {
    text-decoration: none;
  }

  a::before {
    @apply absolute bottom-0.5 left-0 block h-[1px] w-full bg-base-content content-[''];
    transform: scaleX(0);
    transition: transform 0.2s ease;
  }

  a:hover::before {
    transform: scaleX(1);
  }
</style>
