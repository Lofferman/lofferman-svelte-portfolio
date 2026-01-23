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
    background-color: rgba(255, 255, 255, 0.712);
    border-radius: 16px;
    padding: 0.7rem;
    }
</style>