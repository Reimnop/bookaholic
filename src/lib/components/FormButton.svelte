
<script lang="ts">
    export let clazz: string = "";
    export {clazz as class};
</script>

<button class="border-2 border-accent rounded-full px-6 py-2 shadow-lg duration-150 hover:border-accent-light hover:bg-accent-light {clazz}" type="submit">
    <slot />
</button>