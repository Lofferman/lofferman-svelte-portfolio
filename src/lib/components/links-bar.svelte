<script lang="ts">
	import { onMount } from 'svelte';
    import githubLogo from '../assets/img/github-48.png';
    import linkedinLogo from '../assets/img/linkedin-48.png';
   let { resume } = $props();

    function handleClick(urlstring: string, newWindow: boolean = true) {
        window.open(urlstring, '_blank');
    }

</script>

<div class="links-bar mt-5 space-between flex flex-row gap-6">
    <button onclick={() => handleClick('https://github.com/lofferman')} class="cursor-pointer">
        <img class="icon" src={githubLogo} alt="GitHub">
    </button>

    <button onclick={() => handleClick('https://www.linkedin.com/in/luke-offerman')} class=" cursor-pointer">
        <img class="icon" src={linkedinLogo} alt="LinkedIn">
    </button>
</div>
    {#if resume}
    <a href={resume.url} target="_blank" rel="noopener noreferrer">
    <button class="mt-4 px-4 py-2 w-30 cursor-pointer bg-slate-600 text-white rounded hover:bg-slate-700">
        Resume
    </button>
    </a>
    {/if}


<style>
    .icon{
        width: 48px;
        height: 48px;
    }
</style>