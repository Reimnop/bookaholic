<script>
	import HeaderButton from "./HeaderButton.svelte";
    import Placeholder from "./Placeholder.svelte";
</script>

<div class="w-full h-28 flex gap-12 bg-surface shadow-lg">
    <!-- Logo -->
    <a class="h-full grid place-items-center px-6 no-underline" href="/">
        <Placeholder title="Logo" class="w-48 h-16" />
    </a>

    <!-- Links -->
    <div class="flex gap-6 py-8">
        <HeaderButton title="Trang chủ 🏠" icon="🏠" href="/" />
        <HeaderButton title="Bạn bè 🧑‍🤝‍🧑" icon="🧑‍🤝‍🧑" href="/friends" />
        <HeaderButton title="Tìm sách 📚" icon="📚" href="/books" />
    </div>

    <!-- User profile -->
    <div class="ml-auto m-6 grid place-items-center">
        <a class="no-underline rounded-full border-2 border-button py-2 px-6 duration-150 hover:bg-button" href="/signin">
            <h6>Đăng nhập</h6>
        </a>
    </div>
</div>