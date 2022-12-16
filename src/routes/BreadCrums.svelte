<script lang="ts">
  import { Breadcrumbs } from "stwui"

  export let pathname: string

  interface Crumb {
    label: string
    href: string
  }

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

<div class="text-sm breadcrumbs">
  <ul>
    {#each crumbs as { label, href }}
      <li><a {href}>{label}</a></li>
    {/each}
  </ul>
</div>
