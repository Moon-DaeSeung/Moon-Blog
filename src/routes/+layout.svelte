<script lang="ts">
  import Header from "./Header.svelte"
  import "./styles.css"
  import ErrorPage from "./+error.svelte"
  import routes from "./routes"
  import { page } from "$app/stores"
  import { fade } from "svelte/transition"

  $: ({
    url: { pathname },
  } = $page)

  const availablePaths = Object.keys(routes)
</script>

<div class="app">
  <Header />
  <main>
    {#each Object.entries(routes) as [path, Page]}
      {#if path === pathname}
        <div class="content" transition:fade>
					<div class="contsraint">
						<svelte:component this={Page} />
					</div>
        </div>
      {/if}
    {/each}

    {#if !availablePaths.includes(pathname)}
      <ErrorPage />
    {/if}
  </main>

  <footer>
    <p>
      visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit
    </p>
  </footer>
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
    display: flex;
    position: relative;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
  }

  .content {
    position: absolute;
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }

	.contsraint {
		width: 100%;
		max-width: 64rem;
    min-height: 100%;
		display: flex;
		margin: 0 auto;
		flex-direction: column;
		flex: 1;
	}

  footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 12px;
  }

  footer a {
    font-weight: bold;
  }

  @media (min-width: 480px) {
    footer {
      padding: 12px 0;
    }
  }
</style>
