<script>
  import "../app.postcss";
  import "../theme.css";
  import Header from "../lib/Header.svelte";
  import { fly } from 'svelte/transition';

  import "$lib/fira_code.css";
</script>

<style>
  .content {
    max-width: min(1200px, 95vw);
  }
</style>


<div class="sticky top-0 w-full" transition:fly={{y: -100}}>
  <Header/>
</div>
<div class="content mx-auto flex h-full items-center p-4">
  <div>
    <slot/>
  </div>
</div>
