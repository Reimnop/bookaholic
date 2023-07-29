<script lang="ts">
    export let href: string;
    export let icon: string = "";
    export let title: string = "";
</script>

<a class="link" href={href}>
    <h6 class="title">{title}</h6>
    <h6 class="icon">{icon}</h6>
</a>

<style lang="postcss">
    .link {
        @apply no-underline relative border-2 border-button w-12 h-12 gap-4 rounded-full shadow-lg duration-150;
    }

    .link:hover {
        @apply bg-button w-48 px-4;
    }

    .link > .title {
        @apply text-transparent absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap duration-150 pointer-events-none select-none;
    }

    .link:hover > .title {
        @apply text-text;
    }

    .link > .icon {
        @apply text-text absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap duration-150 pointer-events-none select-none;
    }

    .link:hover > .icon {
        @apply text-transparent;
    }
</style>