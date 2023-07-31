<script lang="ts">
    export let name: string;
    export let id: string = "";
    export let placeholder: string = "";
    export let password: boolean = false;
    export let required: boolean = false;
    export let readonly: boolean = false;
    export let value: string = "";

    let clazz: string = "";
    export {clazz as class};

    function handleInput(e: Event) {
        value = (e.target as HTMLInputElement).value ?? "";
    }
</script>

<input 
    type={password ? "password" : "text"}
    class="input {readonly ? "input__readonly" : "input__readwrite"} {clazz}" 
    value={value}
    on:input={handleInput}
    placeholder={placeholder} 
    id={id}
    name={name} 
    required={required}
    readonly={readonly} />

<style lang="postcss">
    .input {
        @apply shadow-lg rounded-lg px-2 py-1 bg-transparent duration-150 outline outline-2 outline-accent;
    }

    .input__readwrite:hover {
        @apply outline-accent-light;
    }

    .input__readwrite:focus {
        @apply outline-accent-light;
    }

    .input__readonly {
        @apply text-inactive cursor-not-allowed;
    }
</style>