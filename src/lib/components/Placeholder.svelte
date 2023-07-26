<script lang="ts">
    export let title: string = "Placeholder";
    
    let clazz: string = "";
    export {clazz as class};
</script>

<div class="grid place-items-center outline-2 outline-dashed rounded-lg outline-inactive text-inactive {clazz}">
    <h4>{title}</h4>
</div>

