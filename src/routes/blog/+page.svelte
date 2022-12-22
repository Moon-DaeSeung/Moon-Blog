<script lang="ts">
  import { page } from "$app/stores"
  import autoAnimate from "$lib/auto-animate"
  import HeroImage from "$lib/notion2svelte/HeroImage.svelte"
  let posts = $page.data.posts
</script>

<section class="flex flex-col flex-grow">
  <div class="pb-4 mt-4 border-b lg:mt-0">BLOG</div>
  <ul class="card-list" use:autoAnimate>
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
            <div class="flex justify-center gap-3 mt-6">
              {#each hashtags as { name }}
                <div class="badge-outline badge">{name}</div>
              {/each}
            </div>
            <h2 class="mt-4">
              <a {href}>
                {title}
              </a>
            </h2>
            <time class="flex justify-end mt-2 text-xs text-base-300">
              {time}
            </time>
            <p class="mt-5 text-center">
              {description}
            </p>
            <a {href} class="mx-auto mt-auto btn-primary btn rounded-2xl">
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
    /* gap-9 */
  }

  /* @media (min-width: 447px) {
    .card-list {
      max-width: 415px;
    }
  }
*/

  /* 카드가 두줄일때 */
  @media (max-width: 1088px) {
    .card-list {
      max-width: 680px;
    }
  }
</style>
