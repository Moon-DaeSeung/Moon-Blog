<script lang="ts">
  import { pageIn, pageOut } from "$lib/hero-transition"
</script>

<section>
  <div class="tmp">
    <a href="/playground">playground</a>
    <div class="box2" in:pageIn={"hero"} out:pageOut={"hero"} />
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
  .box2 {
    width: 200px;
    height: 200px;
    height: 50px;
    background-color: red;
    bottom: 0px;
    margin-top: auto;
  }
</style>
