<script lang="ts">
	import LinksBar from "./links-bar.svelte";
	import { onDestroy, onMount } from "svelte";
       let { profile } = $props();




  let curIndex = 0;
  // svelte-ignore non_reactive_update
    let textEl;
  let interval;

  onMount(async () => {
    const gsap = (await import("gsap")).default;
    const ScrambleTextPlugin = (await import("gsap/ScrambleTextPlugin")).ScrambleTextPlugin;

    gsap.registerPlugin(ScrambleTextPlugin);
      const blurbs = [
    "Inventor. developer. creator.",
    `${profile.headline}`,
    "Full-stack Engineer",
    "Digital Architect",
    "Tech Enthusiast",
    "Problem Solver"
  ];
    // initial text
    textEl.textContent = blurbs[0];

    interval = setInterval(() => {
          curIndex = (curIndex + 1) % blurbs.length;

    gsap.to(textEl, {
      scrambleText: {
        text: blurbs[curIndex],
        chars: "upperAndLowerCase",
        revealDelay: 0.2,
        tweenLength: true,
        // newClass: curIndex === 2 ? "border" : ""
      },
      ease: "power2.inOut",
      overwrite: "auto",
      duration: 2.2
    });
    }, 5000);
  });

  onDestroy(() => {
    clearInterval(interval);
  });
</script>
<div class="container">
    <span class="font-bold text-xl flex items-start flex-col text-slate-500">Hello, I'm</span>

    <section>
        
    {#if profile.nameSvg}
        {profile.nameSvg}
    {:else if profile.name}
        <span  class="text-6xl font-bold w-full block text-center">{profile.name}</span>
    {/if}
    </section>
    {#if profile.headline}
    <section bind:this={textEl} class="text">{profile.headline}</section>
    {/if}
    {#if profile.links}
    <LinksBar resume={profile.resume}/>
    {/if}
</div>

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

    </style>