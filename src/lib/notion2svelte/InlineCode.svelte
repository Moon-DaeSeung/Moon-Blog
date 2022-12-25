<script>
  export let code = ""
</script>

<code>{@html code}</code>

<style>
  code {
    @apply bg-gray-200 text-red-500;
    display: inline;
    border-radius: 3px;
    font-family: "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono",
      Courier, monospace !important;
    font-size: 72%;
    padding: 0.2rem 0.5rem 0.2rem 0.5rem;
  }
</style>
