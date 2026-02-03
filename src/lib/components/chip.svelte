<script lang="ts">
    let props = $props();
</script>

{#if props.text}
<div class="m-1" style:background-color={props?.color ? props.color + '40' : '#FFFFFF40'}
style:border-color={props?.color ? props.color : '#FFFFFFBF'}
style:color={props?.color ? props.color : '#FFFFFFBF'}>
    {props.text}
</div>
{/if}

<style>
    div{
    display: inline-flex;
    align-items: center;
    font-size: 12px;
    min-width: 1rem;
    height: 1rem;
    border: 2px solid;
    border-radius: 16px;
    padding: 1rem;
    }
</style>