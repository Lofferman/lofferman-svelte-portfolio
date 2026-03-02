<script lang="ts">
	import Chip from "./chip.svelte";
      import { Button, Separator } from "bits-ui";

   let { project } = $props();
    function handleClick(urlstring: string) {
        window.open(urlstring, '_blank');
    }

</script>

<div class="project-card flex flex-col h-full">
    <img src={project?.coverImage?.url} alt={project.title}>
    <h2 class="my-5">{project.title}</h2>
    <p class="text-sm my-5">{project.summary}</p>
    <!-- start -->
     <div class="mt-auto">
    {#each project.links as link}
        <Button.Root onclick={() => handleClick(link.url)} class="mx-3 rounded-input white-text cursor-pointer bg-slate-600 hover:bg-slate-700 rounded-2xl shadow-mini hover:bg-dark/95 inline-flex h-8 items-center justify-center px-5.25 text-[15px] font-semibold active:scale-[0.98] active:transition-all"> 
            {String(link.label).charAt(0).toUpperCase() + String(link.label).slice(1)}
        </Button.Root>
    {/each}
    <div class="">
        <Separator.Root class="bg-white my-4 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-[80%] mx-auto"/>
        <div class="items-end flex flex-wrap justify-center gap-2">
            {#each project.techStack as tech}
                <Chip text={tech.text} color={tech.color}/>
            {/each}
        </div>
    </div>
</div>
    <!-- end -->
</div>

<style>
    .project-card {
        background-color: rgba(34, 34, 34, 0.616);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(2px);
        -webkit-backdrop-filter: blur(2px);
        border: 1px solid rgb(51, 51, 51);
        border-radius: 8px;
        padding-bottom: 1rem;
        text-align: center;
        font-weight: bold;

        p{
            padding: 10px;
            color: #cccccca1;
            margin: 0.25rem 0;
        }
        img{
            width: 100%;
            height: 240px;
            object-fit: cover;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
        }

    }   
    .white-text{
            color: var(--theme-white);
    }
    </style>