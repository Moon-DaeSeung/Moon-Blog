<script lang="ts">
  import ParticleBackground from "$lib/component/animatedbackground/particle/index.svelte"
  import MediaQuery from "$lib/component/MediaQuery.svelte"
  import MediaQueryUtils from "$lib/util/MediaQueryUtils"
</script>

<section class="">
  <ParticleBackground offset={{ start: 200, end: 200 }} />
  <h2 class="mb-8 border-b-2 py-2 md:text-7xl">
    <span class="text-primary">Wellcome</span> Moon Blog!!
  </h2>
  <p class="md:mb-10 mb-2 md:text-2xl text-xl">저는 이런걸 만들고 있어요 :)</p>
  <div class="flex flex-col rounded-lg ">
    <article class="rounded bg-red-100 p-10">
      <h3>Moon-Flutter</h3>
      <img
        class="mb-8"
        alt="introduce my js library that will be called moon-flutter.js"
        src="assets/love_flutter.gif"
      />
      <p class="mb-4">
        svg기반 레이아웃 프레임워크. flutter 기능을 따라 만드는걸 목표로 합니다.
        <br />
        이 라이브러리를 이용해 새로운 개념의
        <strong>차트 </strong>라이브러리를 만들 예정입니다. :)
      </p>
      <ul>
        <li>ssr 지원 가능</li>
        <li>column, row, stack 등등 flutter 기본 위젯과 똑같은 네이밍</li>
        <li>animation, input event 추가 예정</li>
        <li>flutter와 같이 커스텀 widget 생성 가능</li>
        <li>아직 npm에 올리지 않았어요. 😅</li>
      </ul>
    </article>
    <div class="divider" />
    <article class="bg-green-100 p-10 md:flex">
      <div class="md:flex-grow ">
        <h3>Moon-Transition</h3>
        <MediaQuery query={MediaQueryUtils.tablet} let:matches>
          {#if !matches}
            <img
              class="mb-4"
              alt="introduce my js library that will be called moon-flutter.js"
              src="assets/moon_animation.gif"
            />
          {/if}
        </MediaQuery>
        <p class="mb-4">
          돔 요소의 레이아웃이 바뀔 때 사이에 애니메이션을 자동으로 삽입합니다.
          <br />
          <strong>react-spring</strong>에 영감을 받아 요소의 위치와 크기는 물론
          움직이는 속도까지 추적해 애니메이션 변화 간에 자연스러운 트렌지션을
          부여합니다.
        </p>
        <ul>
          <li>animation은 javascript로 구현합니다. (css ❌)</li>
          <li>바닐라 자바스크립트 입니다.</li>
          <li>아직 npm에 올리지 않았어요. 😅</li>
          <li>
            <a
              class="cursor-pointer text-blue-400 underline"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Moon-DaeSeung/moon-animation"
            >
              moon-animation
            </a>
          </li>
        </ul>
      </div>
      <MediaQuery query={MediaQueryUtils.tablet} let:matches>
        {#if matches}
          <img
            class="w-[460px]"
            alt="introduce my js library that will be called moon-flutter.js"
            src="assets/moon_animation.gif"
          />
        {/if}
      </MediaQuery>
    </article>
  </div>
</section>

<style>
  ul {
    @apply list-inside list-[circle] text-sm;
  }

  @media (min-width: 640px) {
    ul {
      padding: 0 8px;
      font-size: 16px;
    }
  }

  h3 {
    @apply mb-10 text-3xl font-bold text-accent underline underline-offset-4;
  }

  article {
    @apply rounded-md;
  }
</style>
