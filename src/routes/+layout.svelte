<script lang="ts">
	import Header from "$lib/components/Header.svelte";
	import type { ClientUserProfile } from "$lib/types/ClientUserProfile";
    import "../app.css";

    export let data: ClientUserProfile | null = null;
</script>

<!-- Background -->
<div class="bg-gradient-to-b from-bg-top to-bg-bottom fixed w-screen h-screen bg-no-repeat bg-fixed bg-cover -z-10"></div>

<div class="flex flex-col gap-8">
    <Header userProfile={data} />
    <div>
        <slot />
    </div>
</div>