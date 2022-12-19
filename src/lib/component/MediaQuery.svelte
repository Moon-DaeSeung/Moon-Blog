<script lang="ts">
  import { onMount } from "svelte"

  export let query: string

  let mql: any
  let mqlListener: any
  let wasMounted = false
  let matches = false

  interface $$Slots {
    default: {
      matches: boolean
    }
  }

  onMount(() => {
    wasMounted = true
    return () => {
      removeActiveListener()
    }
  })

  $: {
    if (wasMounted) {
      removeActiveListener()
      addNewListener(query)
    }
  }

  function addNewListener(query) {
    mql = window.matchMedia(query)
    mqlListener = (v) => (matches = v.matches)
    mql.addEventListener("change", mqlListener)
    matches = mql.matches
  }

  function removeActiveListener() {
    if (mql && mqlListener) {
      mql.removeListener(mqlListener)
    }
  }
</script>

<slot {matches} />
