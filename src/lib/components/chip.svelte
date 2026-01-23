<script lang="ts">
    let props = $props();
</script>

{#if props.text}
<div class="m-1">
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
    background-color: #314158;
    border-radius: 16px;
    padding: 1rem;
    }
</style>