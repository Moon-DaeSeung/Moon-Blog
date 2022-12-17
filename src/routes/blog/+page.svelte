<script lang="ts">
  import HeroImage from "$lib/notion2svelte/HeroImage.svelte"
  import "boxicons"

  const articles: {
    thumbnail: string
    title: string
    content: string
    time: string
    slug: string
  }[] = [
    {
      thumbnail: "/assets/what-is-creativity/cover.jpg",
      title: "노션 주간 회의록, 업무 일지 어떻게 사용하고 계신가요?",
      content: `
        노션을 업무에 사용 중이신가요? 주간 플래너, 견적서, 여행 계획,
        프로젝트 관리, 고객 관리, 매출 관리 등 다양한 형태로 노션을
        활용하고…
      `,
      time: "2022/11/14",
      slug: "what-is-creativity",
    },
  ]
</script>

<section>
  <div class="pb-4 border-b">BLOG</div>
  <ul>
    {#each articles as { title, content, time, slug, thumbnail }}
      {@const href = "/blog/" + slug}
      <li>
        <article>
          <a {href}>
            <HeroImage src={thumbnail} height="200px" />
          </a>
          <div class="px-6 py-7 h-[360px] flex flex-col">
            <div class="flex gap-3 mt-6 justify-center">
              {#each ["notion"] as badge}
                <div class="badge badge-outline">{badge}</div>
              {/each}
            </div>
            <h2 class="mt-4">
              {title}
            </h2>
            <time class="mt-2 flex justify-end text-xs text-base-300">
              {time}
            </time>
            <p class="mt-5 text-center">
              {content}
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
    @apply flex gap-4 mt-9;
  }

  section {
    @apply flex flex-col flex-grow;
  }

  article {
    @apply flex flex-col w-[355px] border;
  }

  .content {
    @apply flex flex-col px-6 py-7 items-center;
  }
</style>
