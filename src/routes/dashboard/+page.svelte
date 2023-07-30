<script lang="ts">
	import FormButton from "$lib/components/FormButton.svelte";
    import Surface from "$lib/components/Surface.svelte";
</script>

<Surface class="mx-auto w-fit" title="Thông tin tài khoản">

    <!-- Workaround to call signout action -->
    <form method="post" action="?/signout">
        <FormButton>Đăng xuất</FormButton>
    </form>
</Surface>