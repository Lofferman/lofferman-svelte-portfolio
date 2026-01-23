<script>
      import gsap from "gsap";
	import { onDestroy, onMount } from "svelte";
    let { profile, scroller } = $props();

  // svelte-ignore non_reactive_update
  let container1,container2,container3;
  // svelte-ignore non_reactive_update
  let aboutline1,aboutline2, aboutline3;
  let tween;

  onMount(() => {
    if(container1){
            gsap.set(container1, {
      y: 60,
      opacity: 0
    });
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
          scrub: true,
                  immediateRender: false,
                  markers: true

        }
      }
    );
        ScrollTrigger.refresh();
    }
        if(container2){
                gsap.set(container2, {
      y: 60,
      opacity: 0
    });
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
        if(container3){
    tween = gsap.fromTo(
      container3,
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
          trigger: container3,
          scroller,
          start: "top 85%",
          end: "top 60%",
          scrub: true
        }
      }
    );
    }
    if (aboutline1) {
    tween = gsap.fromTo(
      aboutline1,
      { scaleX: 0 },
      {
        scaleX: 1,
        scrollTrigger: {
          trigger: aboutline1,
          start: "top bottom",
          end: "top top",
          scrub: true
        }
      }
    );
    }
    if (aboutline2) {
      tween = gsap.fromTo(
        aboutline2,
        { scaleX: 0 },
        {
          scaleX: 1,
          scrollTrigger: {
            trigger: aboutline2,
            start: "top bottom",
            end: "top top",
            scrub: true
          }
        }
      );
    }
    if (aboutline3) {
        tween = gsap.fromTo(
      aboutline3,
      { scaleX: 0 },
      {
        scaleX: 1,
        scrollTrigger: {
          trigger: aboutline3,
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

<div class="wrap"  >
    
    {#if profile.bio}
    <div bind:this={container1}>
    <div class="label text-3xl font-bold flex items-start flex-col">
        <small class="text-slate-500">Alittle</small>
        About Me
        <span class="line" bind:this={aboutline1}></span>
    </div>
    <section class="bio">
        {profile.bio}
    </section>
    </div>
    {/if}
    {#if profile.summary}
    <div bind:this={container2}>
    <div class="label text-3xl font-bold flex items-start flex-col">
        <small class="text-slate-500">Professional</small>
        Summary
        <span class="line" bind:this={aboutline2}></span>
    </div>
    <section class="summary">
        {profile.summary}
    </section>
    </div>
    {/if}
    {#if profile.education}
        <div bind:this={container3} class="w-full mt-20">

        <div class="label text-3xl font-bold flex items-start flex-col">
            <small class="text-slate-500">Higher</small>
            Education
            <span class="line" bind:this={aboutline3}></span>
        </div>
        <section class="education-card">
            {#each profile.education as edu}
                <div class="education-item">
                    <h3>{edu.school}</h3>
                    <p>{edu.degree}</p>
                    <small><p><strong>Major:</strong> {edu.major}</p><p><strong>Minor:</strong> {edu.minor}</p></small>
                    <p>{edu.startYear} - {edu.endYear || "Present"}</p>
                </div>
            {/each}
        </section>
        </div>
        {/if}
</div>

<style>
    .wrap{
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