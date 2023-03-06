<script>
  import "../app.postcss";
  import "../theme.css";
  import Header from "../lib/Header.svelte";
  import {page} from "$app/stores";
  import { fly } from 'svelte/transition';
</script>

<style>
  .content {
    max-width: 1200px;
  }

  .hidden-space {
    visibility: hidden;
  }
</style>

{#if $page.url.pathname !== "/"}
  <div class="fixed top-0 w-full" transition:fly={{y: -100}}>
    <Header/>
  </div>
  <div class="hidden-space">
    <Header/>
  </div>
{/if}
<br>
<div class="content mx-auto flex h-full items-center">
  <div>
    <slot/>
  </div>
</div>
