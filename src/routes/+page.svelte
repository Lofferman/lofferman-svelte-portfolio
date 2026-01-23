<script>
	import About from "$lib/components/about.svelte";
	import Me from "$lib/components/me.svelte";
	import Projects from "$lib/components/projects.svelte";
	import Skills from "$lib/components/skills.svelte";
let { data } = $props();

let scroller;

</script>
<div class="text-white" bind:this={scroller}>
    <Me profile={data.profile[0]}/>
    <div id="about-section">
        <About scroller={scroller} profile={data.profile[0]}/>
    </div>
    <div id="skills-section">
        <Skills scroller={scroller} profile={data.profile[0]}/>
    </div>
    <div id="projects-section">
        <Projects scroller={scroller} projects={data.projects}/>
    </div>
</div>

<style>

</style>