<script lang="ts">
    export let href: string;

    let clazz: string = "";
    export {clazz as class};
</script>

<div class="translate-y-6px bg-button-lower rounded-lg">
    <a class="no-underline w-full h-full bg-button rounded-lg duration-150 -translate-y-6px hover:translate-y-0 {clazz}" href={href}>
        <slot />
    </a>
</div>