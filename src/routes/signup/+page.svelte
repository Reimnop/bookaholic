<script lang="ts">
	import InputText from "$lib/components/InputText.svelte";
	import Surface from "$lib/components/Surface.svelte";
    import FormButton from "$lib/components/FormButton.svelte";
	import type { ActionData } from "./$types";

    export let form: ActionData;
</script>

<Surface class="mx-auto w-fit" title="Đăng ký">
    <form class="w-96 flex flex-col gap-4" method="post" action="?/register">
        {#if form?.error}
            <p class="text-red-500">{form.error}</p>
        {/if}

        <label for="username">
            Tên đăng nhập
            <InputText class="w-full" id="username" name="username" required />
        </label>
        <label for="password">
            Mật khẩu
            <InputText class="w-full" id="password" name="password" password required />
        </label>
        <FormButton>Đăng ký</FormButton>
    </form>
</Surface>