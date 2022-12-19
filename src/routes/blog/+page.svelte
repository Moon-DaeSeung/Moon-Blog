<script lang="ts">
  import { page } from "$app/stores"
  import autoAnimate from "$lib/auto-animate"
  import HeroImage from "$lib/notion2svelte/HeroImage.svelte"
  let posts = $page.data.posts
</script>

<section class="flex flex-col flex-grow">
  <div class="pb-4 border-b mt-4 lg:mt-0">BLOG</div>
  <ul class="card-list" use:autoAnimate>
    {#each posts as { title, description, time, slug, image, hashtags } (slug)}
      {@const href = "/blog/" + slug}
      <li
        id={slug}
        class="flex flex-col w-full flex-grow md:max-w-[320px] border shadow-md"
      >
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

  p {
    @apply h-[100px] overflow-hidden text-ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }

  .card-list {
    @apply flex flex-wrap relative w-full gap-10 mt-9 mx-auto;
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
