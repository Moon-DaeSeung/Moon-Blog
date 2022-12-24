<script lang="ts">
  import { page } from "$app/stores"
  import HeroImage from "$lib/notion2svelte/HeroImage.svelte"
  let posts = $page.data.posts
</script>

<section class="flex flex-grow flex-col">
  <div class="mt-4 border-b pb-4 lg:mt-0">BLOG</div>
  <ul class="card-list">
    {#each posts as { title, description, time, slug, image, hashtags } (slug)}
      {@const href = "/blog/" + slug}
      <li
        id={slug}
        class="flex w-full flex-grow flex-col border bg-white shadow-md md:max-w-[320px]"
      >
        <article>
          <a {href}>
            <HeroImage src={image.url} height="200px" />
          </a>
          <div class="flex h-[360px] flex-col px-6 py-7">
            <div class="mt-6 flex justify-center gap-3">
              {#each hashtags as { name }}
                <div class="badge-outline badge">{name}</div>
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
            <a {href} class="btn-primary btn mx-auto mt-auto rounded-2xl">
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
    @apply text-center text-[22px] leading-7;
  }

  p {
    @apply h-[100px] overflow-hidden text-ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }

  .card-list {
    @apply relative mx-auto mt-9 flex w-full flex-wrap gap-10;
  }

  /* 카드가 두줄일때 */
  @media (max-width: 1088px) {
    .card-list {
      max-width: 680px;
      gap: 40px;
    }
  }
</style>
