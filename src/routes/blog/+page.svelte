<script lang="ts">
  import { page } from "$app/stores"
  import HeroImage from "$lib/notion2svelte/HeroImage.svelte"
  import "boxicons"
  import type { PageData } from "./$types"
</script>

<section>
  <div class="pb-4 border-b">BLOG</div>
  <ul>
    {#each $page?.data.posts || [] as { title, description, time, slug, image, hashtags }}
      {@const href = "/blog/" + slug}
      <li>
        <article>
          <a {href}>
            <HeroImage src={image.url} height="200px" />
          </a>
          <div class="px-6 py-7 h-[360px] flex flex-col">
            <div class="flex gap-3 mt-6 justify-center">
              {#each hashtags as { name }}
                <div class="badge badge-outline">{name}</div>
              {/each}
            </div>
            <h2 class="mt-4">
              <a {href}>
                {title}
              </a>
            </h2>
            <time class="mt-2 flex justify-end text-xs text-base-300">
              {time}
            </time>
            <p class="mt-5 text-center">
              {description}
            </p>
            <a {href} class="btn btn-primary rounded-2xl mx-auto mt-auto">
              READ MORE
            </a>
          </div>
        </article>
      </li>
    {/each}
  </ul>
</section>

<style>
  h2 {
    @apply text-[22px] leading-7 text-center;
  }

  ul {
    @apply flex gap-10 mt-9 flex-wrap;
  }

  section {
    @apply flex flex-col flex-grow;
  }

  article {
    @apply flex flex-col w-[355px] border;
  }

  p {
    @apply h-[100px] overflow-hidden text-ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }

  .content {
    @apply flex flex-col px-6 py-7 items-center;
  }
</style>
