<script lang="ts">
    export let name: string;
    export let id: string = "";
    export let placeholder: string = "";
    export let type: string = "text";
    export let required: boolean = false;

    let clazz: string = "";
    export {clazz as class};
</script>

<input 
    type={type}
    class="shadow-lg rounded-lg px-2 py-1 bg-transparent duration-150 outline outline-2 outline-accent hover:outline-accent-light focus:outline-accent-light {clazz}" 
    placeholder={placeholder} 
    id={id}
    name={name} 
    required={required} />