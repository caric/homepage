<script>
	import '../theme.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
    import Header from "../lib/Header.svelte";
</script>
<div class="position-absolute top-0 w-full">
    <Header/>
</div>
<slot />
