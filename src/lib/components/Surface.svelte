<script lang="ts">
    export let title: string = "";

    let clazz: string = "";
    export {clazz as class};
</script>

<div class="bg-surface rounded-lg shadow-lg overflow-hidden {clazz}">
    {#if title}
        <div class="p-4 bg-accent shadow-lg text-center">
            <h3>{title}</h3>
        </div>
    {/if}

    <div class="p-4">
        <slot />
    </div>
</div>


