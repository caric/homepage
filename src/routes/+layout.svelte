<script>
  import "../app.postcss";
  import "../theme.css";
  import Header from "../lib/Header.svelte";
</script>

<style>
  .content {
    max-width: 1200px;
  }

  .hidden-space {
    visibility: hidden;
  }
</style>

<div class="fixed top-0 w-full">
  <Header/>
</div>
<div class="hidden-space">
  <Header/>
</div>
<div class="content mx-auto flex h-full items-center">
  <div>
    <slot/>
  </div>
</div>
