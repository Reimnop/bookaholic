<script lang="ts">
	import Header from "$lib/components/Header.svelte";
    import "../app.css";
</script>

<!-- Background -->
<div class="bg-gradient-to-b from-bg-top to-bg-bottom fixed w-screen h-screen bg-no-repeat bg-fixed bg-cover -z-10"></div>

<div class="flex flex-col gap-8">
    <Header />
    <div>
        <slot />
    </div>
</div>