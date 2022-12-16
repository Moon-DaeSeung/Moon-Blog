<script lang="ts">
  import "boxicons"
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
  <div class="pb-4 border-b">BLOG</div>
  <ul>
    <li class="mt-9">
      <article>
        <div class="h-[200px] flex justify-center items-center bg-gray-200">
          <div class="opacity-50">
            <box-icon name="images" size="lg" />
          </div>
        </div>
        <div class="px-6 py-7 h-[342px] flex flex-col">
          <div class="flex gap-3 mt-6 justify-center">
            {#each ['notion'] as badge}
              <div class="badge badge-outline">{badge}</div>
            {/each}
          </div>
          <h2 class="mt-4">
            노션 주간 회의록, 업무 일지 어떻게 사용하고 계신가요? (노션 템플릿)aaaa
          </h2>
          <time class="mt-2 flex justify-end text-xs text-base-300">2022/11/14</time>
          <p class="mt-5 text-center">
            노션을 업무에 사용 중이신가요? 주간 플래너, 견적서, 여행 계획,
            프로젝트 관리, 고객 관리, 매출 관리 등 다양한 형태로 노션을
            활용하고…
          </p>
          <a 
            href="/"
            class="btn btn-primary rounded-2xl mx-auto">
            READ MORE
          </a>

        </div>
      </article>
    </li>
  </ul>
</section>

<style>
  h2 {
    @apply text-[22px] leading-7 text-center;
  }
  section {
    @apply flex flex-col flex-grow;
  }

  article {
    @apply flex flex-col w-[355px];
  }

  .content {
    @apply flex flex-col px-6 py-7 items-center;
  }
</style>
