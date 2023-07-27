<script>
	import LinkButton from "./LinkButton.svelte";
    import Placeholder from "./Placeholder.svelte";
</script>

<div class="w-full h-28 flex gap-12 bg-surface shadow-lg">
    <!-- Logo -->
    <a class="h-full p-6 no-underline" href="/">
        <Placeholder title="Logo" class="h-full aspect-[3]" />
    </a>

    <!-- Links -->
    <div class="flex gap-6 py-8">
        <LinkButton class="grid place-items-center px-4" href="/">
            <h6>Trang chủ 🏠</h6>
        </LinkButton>
        <LinkButton class="grid place-items-center px-4" href="/friend">
            <h6>Bạn bè 🧑‍🤝‍🧑</h6>
        </LinkButton>
        <LinkButton class="grid place-items-center px-4" href="/search">
            <h6>Tìm sách 📚</h6>
        </LinkButton>
    </div>
</div>