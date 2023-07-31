<script lang="ts">
	import type { ClientUserProfile } from "$lib/types/ClientUserProfile";
	import Surface from "./Surface.svelte";

    export let userProfile: ClientUserProfile | null;
</script>

{#if userProfile}
    <slot {userProfile} />
{:else}
    <Surface class="mx-auto w-fit" title="Bạn chưa đăng nhập">
        <div class="flex flex-col gap-4">
            <p>Vui lòng đăng nhập để sử dụng chức năng này</p>
            <a class="no-underline rounded-full border-2 border-button py-2 px-6 text-center duration-150 hover:bg-button" href="/signin">
                <h6>Đăng nhập</h6>
            </a>
        </div>
    </Surface>
{/if}