<script lang="ts">
  import { page } from "$app/stores"
  import type { LayoutServerData } from "./$types"
  export let data: LayoutServerData

  function resolveUrl(url: string) {
    if (url.includes("http")) return url
    return data.origin + url
  }

  $: title = $page.data.meta?.title ?? data.defaultMeta.title
  $: description = $page.data.meta?.description ?? data.defaultMeta.description
  $: image = $page.data.meta?.image ?? data.defaultMeta.image

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
<slot />
