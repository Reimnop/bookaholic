<script lang="ts">
	import AuthPage from "$lib/components/AuthPage.svelte";
    import FormButton from "$lib/components/FormButton.svelte";
	import InputText from "$lib/components/InputText.svelte";
    import Surface from "$lib/components/Surface.svelte";
	import type { ClientPageData } from "$lib/types/ClientPageData";

    export let data: ClientPageData;
</script>

<AuthPage userProfile={data.userProfile} let:userProfile={profile}>
    {#if profile}
        <Surface class="mx-auto w-fit" title="Thông tin tài khoản">
            <!-- Account information form -->
            <form class="flex flex-col gap-4">
                <label for="username">
                    Tên đăng nhập
                    <InputText class="w-full" id="username" name="username" value={profile.username} readonly />
                </label>

                <!-- Workaround to call signout action -->
                <form method="post" action="?/signout">
                    <FormButton class="w-full">Đăng xuất</FormButton>
                </form>
            </form>
        </Surface>
    {/if}
</AuthPage>
