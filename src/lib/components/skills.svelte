<script>
      import { Tooltip } from "bits-ui";
	import { onMount, onDestroy } from "svelte";

    let { profile, scroller } = $props();

      // svelte-ignore non_reactive_update
            let container;

  // svelte-ignore non_reactive_update
    let skillLine;
  let tween;

  onMount(async () => {
    const gsap = (await import("gsap")).default;
    const ScrollTrigger = (await import("gsap/ScrollTrigger")).ScrollTrigger;

    gsap.registerPlugin(ScrollTrigger);
    if (!skillLine) return;
    if (!container) return;

    tween = gsap.fromTo(
      container,
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
          trigger: container,
          scroller,
          start: "top 85%",
          end: "top 60%",
          scrub: true
        }
      }
    );
    tween = gsap.fromTo(
      skillLine,
      { scaleX: 0 },
      {
        scaleX: 1,
        scrollTrigger: {
          trigger: skillLine,
          start: "top bottom",
          end: "top top",
          scrub: true
        }
      }
    );
  });

  onDestroy(() => {
    tween?.scrollTrigger?.kill();
    tween?.kill();
  });
</script>

{#if profile.skills}
<div class="container"  bind:this={container}>
  <div class="label text-3xl font-bold mt-10">
      Skills
      <span class="line" bind:this={skillLine}></span>
  </div>
  <section class="skill-section grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-4">
    {#each profile.skills as skill}
      <div class="skil-item">
        <Tooltip.Provider>
          <Tooltip.Root delayDuration={200}>
            <Tooltip.Trigger class="shadow-btn hover:bg-muted w-[72px] h-[72px] focus-visible:ring-offset-background focus-visible:outline-hidden inline-flex size-10 items-center justify-center rounded-full focus-visible:ring-2 focus-visible:ring-offset-2">
              <img src={skill.image.url} alt={skill.name}> </Tooltip.Trigger>
            <Tooltip.Content sideOffset={8} class="animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--bits-tooltip-content-transform-origin)">
              <div class="rounded-input border-dark-10 bg-black shadow-popover outline-hidden z-0 flex items-center justify-center border p-3 text-sm font-medium">
                {skill.name}
              </div>
            </Tooltip.Content>
          </Tooltip.Root>
        </Tooltip.Provider>
      </div>
    {/each}
  </section>
</div>
{/if}

<style>
    .container{
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