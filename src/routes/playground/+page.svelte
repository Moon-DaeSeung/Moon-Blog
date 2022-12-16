<script lang="ts">
  import { pageIn, pageOut } from "$lib/hero-transition"
</script>

<section>
  <div class="tmp">
    <a href="playground/nest">nest</a>
    <div class="box1" in:pageIn={"hero"} out:pageOut={"hero"} />
  </div>
</section>

<style>
  .tmp {
    height: 300px;
    position: relative;
    background-color: lightblue;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  section {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  .box1 {
    width: 50px;
    height: 50px;
    background-color: red;
    top: 0px;
  }
</style>
