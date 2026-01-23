<script>
	import ProjectCard from "./project-card.svelte";
    	import { onDestroy, onMount } from "svelte";

    
    let { projects, scroller } = $props();

    let featuredProjects = $derived(projects.filter(item => item.featured && item.visibility));
    let otherProjects = $derived(projects.filter(item => !item.featured && item.visibility));

  let container1, container2;
  let line, line2;
  let tween;
  onMount(async () => {
    const gsap = (await import("gsap")).default;
    const ScrollTrigger = (await import("gsap/ScrollTrigger")).ScrollTrigger;

    gsap.registerPlugin(ScrollTrigger);
    if(container1){
    tween = gsap.fromTo(
      container1,
      {
        y: 60,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        ease: "power3.out",
        duration: 1,
        scrollTrigger: {
          trigger: container1,
          scroller,
          start: "top 85%",
          end: "top 60%",
          scrub: true
        }
      }
    );
    }

    if(container2){
    tween = gsap.fromTo(
      container2,
      {
        y: 60,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        ease: "power3.out",
        duration: 1,
        scrollTrigger: {
          trigger: container2,
          scroller,
          start: "top 85%",
          end: "top 60%",
          scrub: true
        }
      }
    );
    }
    if(line){
    tween = gsap.fromTo(
      line,
      { scaleX: 0 },
      {
        scaleX: 1,
        scrollTrigger: {
          trigger: line,
          start: "top bottom",
          end: "top top",
          scrub: true
        }
      }
    );
    }
    if(line2){
    tween = gsap.fromTo(
      line2,
      { scaleX: 0 },
      {
        scaleX: 1,
        scrollTrigger: {
          trigger: line2,
          start: "top bottom",
          end: "top top",
          scrub: true
        }
      }
    );
    }
  });

  onDestroy(() => {
    tween?.scrollTrigger?.kill();
    tween?.kill();
  });

    </script>
<div class="container1">
    <div bind:this={container1}>
<div class="label text-3xl font-bold flex items-start flex-col">
    
       <small class="text-slate-500">Featured</small>
        Projects
        <span class="line" bind:this={line}></span>
    </div>
    <section class="project grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-4">
        {#each featuredProjects as project}
            <ProjectCard project={project} />
        {/each}
    </section>
    </div>
        <div bind:this={container2}>

<div class="label text-3xl font-bold flex items-start flex-col mt-20">
    <small class="text-slate-500">Other</small>
        Tech projects
        <span class="line" bind:this={line2}></span>

    </div>
    <section class="project grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-4">
        {#each otherProjects as project}
            <ProjectCard project={project} />
        {/each}
    </section>
    </div>
</div>

<style>
        .container1{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        padding: 2rem;
        color: white;
    }
        .label{
        /* border-bottom: 2px solid white; */
        padding-bottom: 0.5rem;
        width: 100%;
    }
    section {
        align-self: flex-start;
        font-size: 1.2rem;
        line-height: 1.5;
            text-align: left;
    }
    .line {
  width: 100%;
  max-width: 800px;
  height: 4px;
  margin: 0 0 10px 0;
  position: relative;
  display: block;
  background-color: white;
}
  .line {
    transform-origin: left center;
  }
</style>