<script>
  import HeroImage from "./HeroImage.svelte"
  import Icon from "./Icon.svelte"

  export let coverURL = ""
  export let iconEmojiOrURL = ""
  export let height = "18rem"
  export let k = "0rem"

  // Get rid of `null`s from the Notion API
  $: iconEmojiOrURL =
    iconEmojiOrURL === "null" || iconEmojiOrURL === "undefined"
      ? ""
      : iconEmojiOrURL

  $: if (coverURL.length < 8) {
    height = "0rem"
    k = "0rem"
  } else if (!iconEmojiOrURL) {
    k = "0rem"
  } else {
    k = "6rem"
  }
</script>

{#if coverURL}
  <div class="cover">
    <HeroImage src={coverURL} {height} />
  </div>
{/if}

<!-- spacer -->
<div style="height: calc({height} - {k});">&nbsp;</div>

{#if iconEmojiOrURL}
  <div>
    <Icon {iconEmojiOrURL} />
  </div>
{:else}
  <div class="emptyIcon">&nbsp;</div>
{/if}

<style>
  .cover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    border-bottom: 1px hsla(0, 0%, 13%, 0.1) solid;
    z-index: -1;
  }

  .emptyIcon {
    /* background-color: red; */
    height: 10rem;
  }
</style>
